// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

/**
 * @title MoneroPool
 * @notice Manages the pooling and distribution of mined Monero
 * @dev This contract handles the accounting for Monero mining rewards
 */
contract MoneroPool is 
    Initializable, 
    AccessControlUpgradeable, 
    ReentrancyGuardUpgradeable, 
    PausableUpgradeable, 
    UUPSUpgradeable 
{
    // Roles
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ORACLE_ROLE = keccak256("ORACLE_ROLE");
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR_ROLE");

    // Constants
    uint256 public constant RATE_PRECISION = 1e18;
    uint256 public constant USER_SHARE = 70; // 70%
    uint256 public constant DEVELOPER_SHARE = 20; // 20%
    uint256 public constant PROTOCOL_SHARE = 10; // 10%

    // State Variables
    uint256 public totalMinedXMR;
    uint256 public totalDistributedXMR;
    uint256 public lastDistributionTimestamp;
    uint256 public distributionInterval;
    uint256 public minimumDistributionAmount;

    // Miner data
    struct MinerData {
        string moneroAddress;
        uint256 hashRate;
        uint256 totalMined;
        uint256 totalRewarded;
        uint256 lastUpdateTimestamp;
    }

    // Distribution record
    struct DistributionRecord {
        uint256 timestamp;
        uint256 totalAmount;
        uint256 userAmount;
        uint256 developerAmount;
        uint256 protocolAmount;
        string txHash;
        bool completed;
    }

    // Mappings
    mapping(address => MinerData) public miners;
    mapping(uint256 => DistributionRecord) public distributions;
    address[] public minerAddresses;
    
    // Counters
    uint256 public distributionCount;
    uint256 public minerCount;

    // Events
    event MinerRegistered(address indexed ethAddress, string moneroAddress);
    event MinerUpdated(address indexed ethAddress, uint256 hashRate, uint256 mined);
    event DistributionScheduled(uint256 indexed distributionId, uint256 amount);
    event DistributionCompleted(uint256 indexed distributionId, string txHash);
    event MoneroMined(uint256 amount, uint256 timestamp);

    // Initialization
    function initialize(
        address admin,
        address oracle,
        address distributor,
        uint256 _distributionInterval,
        uint256 _minimumDistributionAmount
    ) public initializer {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(ADMIN_ROLE, admin);
        _grantRole(ORACLE_ROLE, oracle);
        _grantRole(DISTRIBUTOR_ROLE, distributor);

        distributionInterval = _distributionInterval;
        minimumDistributionAmount = _minimumDistributionAmount;
        lastDistributionTimestamp = block.timestamp;
    }

    // Miner Registration
    function registerMiner(address ethAddress, string calldata moneroAddress) external onlyRole(ADMIN_ROLE) {
        require(bytes(miners[ethAddress].moneroAddress).length == 0, "Miner already registered");
        require(bytes(moneroAddress).length > 0, "Invalid Monero address");

        miners[ethAddress] = MinerData({
            moneroAddress: moneroAddress,
            hashRate: 0,
            totalMined: 0,
            totalRewarded: 0,
            lastUpdateTimestamp: block.timestamp
        });

        minerAddresses.push(ethAddress);
        minerCount++;

        emit MinerRegistered(ethAddress, moneroAddress);
    }

    // Update miner data (called by oracle)
    function updateMinerData(
        address ethAddress, 
        uint256 hashRate, 
        uint256 minedAmount
    ) external onlyRole(ORACLE_ROLE) {
        require(bytes(miners[ethAddress].moneroAddress).length > 0, "Miner not registered");

        MinerData storage miner = miners[ethAddress];
        miner.hashRate = hashRate;
        miner.totalMined += minedAmount;
        miner.lastUpdateTimestamp = block.timestamp;

        totalMinedXMR += minedAmount;

        emit MinerUpdated(ethAddress, hashRate, minedAmount);
        emit MoneroMined(minedAmount, block.timestamp);
    }

    // Schedule distribution (called by admin or automatically)
    function scheduleDistribution() external onlyRole(ADMIN_ROLE) {
        require(
            block.timestamp >= lastDistributionTimestamp + distributionInterval,
            "Distribution interval not reached"
        );
        
        uint256 pendingAmount = totalMinedXMR - totalDistributedXMR;
        require(pendingAmount >= minimumDistributionAmount, "Minimum amount not reached");

        uint256 userAmount = (pendingAmount * USER_SHARE) / 100;
        uint256 developerAmount = (pendingAmount * DEVELOPER_SHARE) / 100;
        uint256 protocolAmount = (pendingAmount * PROTOCOL_SHARE) / 100;

        distributions[distributionCount] = DistributionRecord({
            timestamp: block.timestamp,
            totalAmount: pendingAmount,
            userAmount: userAmount,
            developerAmount: developerAmount,
            protocolAmount: protocolAmount,
            txHash: "",
            completed: false
        });

        lastDistributionTimestamp = block.timestamp;
        emit DistributionScheduled(distributionCount, pendingAmount);
        
        distributionCount++;
    }

    // Complete distribution (called by distributor after off-chain processing)
    function completeDistribution(
        uint256 distributionId, 
        string calldata txHash
    ) external onlyRole(DISTRIBUTOR_ROLE) {
        require(distributionId < distributionCount, "Invalid distribution ID");
        require(!distributions[distributionId].completed, "Distribution already completed");
        require(bytes(txHash).length > 0, "Invalid transaction hash");

        DistributionRecord storage distribution = distributions[distributionId];
        distribution.txHash = txHash;
        distribution.completed = true;

        totalDistributedXMR += distribution.totalAmount;

        emit DistributionCompleted(distributionId, txHash);
    }

    // Get all miners
    function getAllMiners() external view returns (address[] memory) {
        return minerAddresses;
    }

    // Get miner count
    function getMinerCount() external view returns (uint256) {
        return minerCount;
    }

    // Get pending distribution amount
    function getPendingDistributionAmount() external view returns (uint256) {
        return totalMinedXMR - totalDistributedXMR;
    }

    // Admin Functions
    function setDistributionInterval(uint256 newInterval) external onlyRole(ADMIN_ROLE) {
        distributionInterval = newInterval;
    }

    function setMinimumDistributionAmount(uint256 newAmount) external onlyRole(ADMIN_ROLE) {
        minimumDistributionAmount = newAmount;
    }

    function pause() external onlyRole(ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(ADMIN_ROLE) {
        _unpause();
    }

    // Upgrade Authorization
    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(ADMIN_ROLE) {}

    // Optional: Include if using gap storage for upgradeability
    uint256[50] private __gap;
}

