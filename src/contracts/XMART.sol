// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

/**
 * @title XMART Token
 * @notice ERC20 token with staking, governance, and upgradeability features
 * @dev Includes critical fixes for pausing and reward rate safety
 */
contract XMART is 
    Initializable, 
    ERC20Upgradeable, 
    AccessControlUpgradeable, 
    ReentrancyGuardUpgradeable, 
    PausableUpgradeable, 
    UUPSUpgradeable 
{
    // Roles
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant EXECUTIVE_ROLE = keccak256("EXECUTIVE_ROLE");
    bytes32 public constant AUDIT_ROLE = keccak256("AUDIT_ROLE");
    bytes32 public constant ORACLE_ROLE = keccak256("ORACLE_ROLE");
    bytes32 public constant REWARDS_ROLE = keccak256("REWARDS_ROLE");
    bytes32 public constant DEVELOPERS_ROLE = keccak256("DEVELOPERS_ROLE");

    // Constants
    uint256 public constant MAX_SUPPLY = 21_000_000 * 10**18;
    uint256 public constant RATE_PRECISION = 1e18;
    uint256 public constant MAX_REWARD_RATE = (RATE_PRECISION * 100) / 365 days; // 100% annual cap
    uint256 public constant MAX_PENALTY_RATE = 20; // 20%
    uint256 public constant MIN_STAKE_AMOUNT = 100 * 10**18;
    uint256 public constant MAX_STAKE_AMOUNT = 1_000_000 * 10**18;
    uint256 public constant MIN_STAKE_DURATION = 1 days;
    uint256 public constant COOLDOWN_PERIOD = 1 days;
    
    // Pool Addresses
    address public rewardsPool;
    address public developersPool;
    address public feesPool;

    // Allocation Constants
    uint256 public constant REWARDS_ALLOCATION = 14_700_000 * 10**18; // 70%
    uint256 public constant DEVELOPERS_ALLOCATION = 4_200_000 * 10**18; // 20%
    uint256 public constant FEES_ALLOCATION = 2_100_000 * 10**18; // 10%

    // Governance Structures
    struct PublicMeeting {
        string topic;
        uint256 timestamp;
        string link;
        bool cancelled;
    }

    struct CommunityFeedback {
        address user;
        string feedback;
        uint256 timestamp;
        bool addressed;
    }

    struct AIDecision {
        string description;
        uint256 timestamp;
        string rationale;
        bool audited;
        bool valid;
    }

    // Staking
    struct UserStake {
        uint256 amount;
        uint256 timestamp;
        uint256 lastUnstakeTime;
    }

    // State Variables
    uint256 public totalStaked;
    uint256 public rewardPerTokenStored;
    uint256 public lastUpdateTimestamp;
    uint256 public rewardRate;
    uint256 public emergencyUnstakePenalty;
    bool public emergencyUnstakeEnabled;
    uint256 public stakeLockEndTime;

    // Counters
    uint256 public meetingCount;
    uint256 public feedbackCount;
    uint256 public decisionCount;

    // Mappings
    mapping(address => UserStake) public userStakes;
    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;
    mapping(uint256 => PublicMeeting) public publicMeetings;
    mapping(uint256 => CommunityFeedback) public communityFeedback;
    mapping(uint256 => AIDecision) public aiDecisions;
    mapping(address => uint256) public lastStakeTime;

    // Events
    event PublicMeetingScheduled(string indexed topic, uint256 timestamp, string link);
    event PublicMeetingCancelled(uint256 indexed meetingId);
    event CommunityFeedbackSubmitted(address indexed user, uint256 feedbackId);
    event FeedbackAddressed(uint256 indexed feedbackId);
    event AIDecisionRecorded(uint256 indexed decisionId, string description);
    event AIDecisionAudited(uint256 indexed decisionId, bool valid);
    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 amount);
    event EmergencyUnstakeToggled(bool status, uint256 penalty);
    event RewardRateUpdated(uint256 newRate);
    event PoolAddressUpdated(string indexed poolType, address newAddress);
    event DevelopersFundsWithdrawn(uint256 amount, address indexed recipient);
    event FeesUsed(uint256 amount, address indexed recipient);
    event PenaltyRedirected(uint256 amount, address indexed target);
    event RewardsReplenished(uint256 amount);
    event StakeLockUpdated(uint256 endTime);

    // Modifiers
    modifier validAddress(address _address) {
        require(_address != address(0), "Zero address not allowed");
        _;
    }

    modifier afterCooldown(address user) {
        require(
            userStakes[user].lastUnstakeTime == 0 || 
            block.timestamp >= userStakes[user].lastUnstakeTime + COOLDOWN_PERIOD,
            "Cooldown period active"
        );
        _;
    }

    // Initialization
    function initialize(
        address[] memory roles,
        address _rewardsPool,
        address _developersPool,
        address _feesPool
    ) public initializer {
        __ERC20_init("XMART Token", "XMART");
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();
        __UUPSUpgradeable_init();

        require(roles.length == 6, "6 roles required");
        require(_rewardsPool != address(0), "Invalid rewards pool");
        require(_developersPool != address(0), "Invalid developers pool");
        require(_feesPool != address(0), "Invalid fees pool");

        rewardsPool = _rewardsPool;
        developersPool = _developersPool;
        feesPool = _feesPool;

        _mint(rewardsPool, REWARDS_ALLOCATION);
        _mint(developersPool, DEVELOPERS_ALLOCATION);
        _mint(feesPool, FEES_ALLOCATION);

        for (uint i = 0; i < roles.length; i++) {
            require(roles[i] != address(0), "Invalid role address");
        }

        _grantRole(DEFAULT_ADMIN_ROLE, roles[0]);
        _grantRole(ADMIN_ROLE, roles[0]);
        _grantRole(EXECUTIVE_ROLE, roles[1]);
        _grantRole(AUDIT_ROLE, roles[2]);
        _grantRole(ORACLE_ROLE, roles[3]);
        _grantRole(REWARDS_ROLE, roles[4]);
        _grantRole(DEVELOPERS_ROLE, roles[5]);

        emergencyUnstakePenalty = 10;
        stakeLockEndTime = block.timestamp;
        lastUpdateTimestamp = block.timestamp;
    }

    // Governance Functions
    function schedulePublicMeeting(
        string calldata topic, 
        uint256 timestamp, 
        string calldata link
    ) external onlyRole(EXECUTIVE_ROLE) {
        publicMeetings[meetingCount] = PublicMeeting(topic, timestamp, link, false);
        emit PublicMeetingScheduled(topic, timestamp, link);
        meetingCount++;
    }

    function cancelPublicMeeting(uint256 meetingId) external onlyRole(ADMIN_ROLE) {
        require(!publicMeetings[meetingId].cancelled, "Already cancelled");
        publicMeetings[meetingId].cancelled = true;
        emit PublicMeetingCancelled(meetingId);
    }

    function submitFeedback(string calldata feedback) external {
        communityFeedback[feedbackCount] = CommunityFeedback(
            msg.sender,
            feedback,
            block.timestamp,
            false
        );
        emit CommunityFeedbackSubmitted(msg.sender, feedbackCount);
        feedbackCount++;
    }

    function addressFeedback(uint256 feedbackId) external onlyRole(ADMIN_ROLE) {
        require(!communityFeedback[feedbackId].addressed, "Already addressed");
        communityFeedback[feedbackId].addressed = true;
        emit FeedbackAddressed(feedbackId);
    }

    function recordAIDecision(
        string calldata description,
        string calldata rationale
    ) external onlyRole(ORACLE_ROLE) {
        aiDecisions[decisionCount] = AIDecision(
            description,
            block.timestamp,
            rationale,
            false,
            false
        );
        emit AIDecisionRecorded(decisionCount, description);
        decisionCount++;
    }

    function auditAIDecision(uint256 decisionId, bool valid) external onlyRole(AUDIT_ROLE) {
        AIDecision storage decision = aiDecisions[decisionId];
        decision.audited = true;
        decision.valid = valid;
        emit AIDecisionAudited(decisionId, valid);
    }

    // Staking Functions
    function stake(uint256 amount) external nonReentrant whenNotPaused afterCooldown(msg.sender) {
        require(amount >= MIN_STAKE_AMOUNT, "Below minimum stake");
        require(amount <= MAX_STAKE_AMOUNT, "Exceeds maximum stake");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        require(block.timestamp >= stakeLockEndTime, "Staking locked");

        _updateReward(msg.sender);
        
        UserStake storage userStake = userStakes[msg.sender];
        userStake.amount += amount;
        userStake.timestamp = block.timestamp;
        totalStaked += amount;
        lastStakeTime[msg.sender] = block.timestamp;

        _transfer(msg.sender, address(this), amount);
        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external nonReentrant {
        require(amount > 0, "Cannot unstake 0");
        UserStake storage stakeInfo = userStakes[msg.sender];
        require(stakeInfo.amount >= amount, "Insufficient stake");
        require(
            block.timestamp >= stakeInfo.timestamp + MIN_STAKE_DURATION,
            "Minimum stake duration not met"
        );

        _updateReward(msg.sender);

        uint256 penalty = 0;
        if (emergencyUnstakeEnabled) {
            penalty = (amount * emergencyUnstakePenalty) / 100;
            require(penalty <= (amount * MAX_PENALTY_RATE) / 100, "Penalty too high");
            _transfer(address(this), feesPool, penalty);
            emit PenaltyRedirected(penalty, feesPool);
        }

        uint256 releaseAmount = amount - penalty;
        totalStaked -= amount;
        stakeInfo.amount -= amount;
        stakeInfo.lastUnstakeTime = block.timestamp;

        _transfer(address(this), msg.sender, releaseAmount);
        emit Unstaked(msg.sender, releaseAmount);
    }

    function claimRewards() external nonReentrant {
        _updateReward(msg.sender);
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No rewards");
        require(reward <= balanceOf(rewardsPool), "Insufficient rewards pool");

        rewards[msg.sender] = 0;
        _transfer(rewardsPool, msg.sender, reward);
        emit RewardsClaimed(msg.sender, reward);
    }

    // Admin Functions
    function setRewardRate(uint256 newRate) external onlyRole(ADMIN_ROLE) {
        require(newRate <= MAX_REWARD_RATE, "Rate exceeds safe limit");
        _updateReward(address(0));
        rewardRate = newRate;
        emit RewardRateUpdated(newRate);
    }

    function setEmergencyUnstake(bool status, uint256 newPenalty) external onlyRole(ADMIN_ROLE) {
        require(newPenalty <= MAX_PENALTY_RATE, "Penalty too high");
        emergencyUnstakeEnabled = status;
        emergencyUnstakePenalty = newPenalty;
        emit EmergencyUnstakeToggled(status, newPenalty);
    }

    function setStakeLock(uint256 endTime) external onlyRole(ADMIN_ROLE) {
        require(endTime > block.timestamp, "Invalid end time");
        stakeLockEndTime = endTime;
        emit StakeLockUpdated(endTime);
    }

    function updatePoolAddress(
        string calldata poolType,
        address newAddress
    ) external onlyRole(ADMIN_ROLE) validAddress(newAddress) {
        bytes32 poolHash = keccak256(abi.encodePacked(poolType));
        
        if (poolHash == keccak256(abi.encodePacked("rewards"))) {
            rewardsPool = newAddress;
        } else if (poolHash == keccak256(abi.encodePacked("developers"))) {
            developersPool = newAddress;
        } else if (poolHash == keccak256(abi.encodePacked("fees"))) {
            feesPool = newAddress;
        } else {
            revert("Invalid pool type");
        }
        
        emit PoolAddressUpdated(poolType, newAddress);
    }

    function replenishRewardsPool(uint256 amount) external onlyRole(REWARDS_ROLE) {
        _transfer(msg.sender, rewardsPool, amount);
        emit RewardsReplenished(amount);
    }

    // Internal Functions
    function _updateReward(address account) internal {
        uint256 currentRewardPerToken = rewardPerToken();
        rewardPerTokenStored = currentRewardPerToken;
        lastUpdateTimestamp = block.timestamp;

        if (account != address(0)) {
            rewards[account] = earned(account);
            userRewardPerTokenPaid[account] = currentRewardPerToken;
        }
    }

    function rewardPerToken() public view returns (uint256) {
        if (totalStaked == 0) return rewardPerTokenStored;
        
        uint256 timeDelta = block.timestamp - lastUpdateTimestamp;
        uint256 rewardDelta = timeDelta * rewardRate;
        return rewardPerTokenStored + ((rewardDelta * RATE_PRECISION) / totalStaked);
    }

    function earned(address account) public view returns (uint256) {
        return (
            (userStakes[account].amount *
                (rewardPerToken() - userRewardPerTokenPaid[account])) /
            RATE_PRECISION
        ) + rewards[account];
    }

    // Modified token transfer checks
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        // Allow unstaking (from contract) and reward claims (from rewardsPool) when paused
        if (from != address(this) && from != rewardsPool) {
            require(!paused(), "Transfers paused");
        }
        super._beforeTokenTransfer(from, to, amount);
    }

    // Upgrade Authorization
    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(ADMIN_ROLE) {}

    // Optional: Include if using gap storage for upgradeability
    uint256[50] private __gap;
}

