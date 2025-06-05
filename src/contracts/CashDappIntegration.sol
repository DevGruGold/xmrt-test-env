// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

/**
 * @title CashDappIntegration
 * @notice Handles integration with the CashDapp for banking functions
 * @dev This contract manages onramping, offramping, and cold storage operations
 */
contract CashDappIntegration is 
    Initializable, 
    AccessControlUpgradeable, 
    ReentrancyGuardUpgradeable, 
    PausableUpgradeable, 
    UUPSUpgradeable 
{
    // Roles
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ORACLE_ROLE = keccak256("ORACLE_ROLE");
    bytes32 public constant BANKING_ROLE = keccak256("BANKING_ROLE");

    // Constants
    uint256 public constant MAX_TRANSACTION_AMOUNT = 10000 * 1e18; // 10,000 USD equivalent
    uint256 public constant MIN_TRANSACTION_AMOUNT = 10 * 1e18; // 10 USD equivalent
    uint256 public constant TRANSACTION_FEE_PERCENT = 1; // 1%
    uint256 public constant MAX_COLD_STORAGE_PERCENT = 80; // 80% max in cold storage

    // Enums
    enum TransactionType { ONRAMP, OFFRAMP, COLD_STORAGE, WITHDRAWAL }
    enum TransactionStatus { PENDING, COMPLETED, FAILED, CANCELLED }

    // Structs
    struct Transaction {
        address user;
        uint256 amount;
        TransactionType txType;
        TransactionStatus status;
        string externalReference;
        uint256 timestamp;
        uint256 completedTimestamp;
        string notes;
    }

    struct UserAccount {
        bool registered;
        uint256 hotWalletBalance;
        uint256 coldStorageBalance;
        uint256 totalOnramped;
        uint256 totalOfframped;
        uint256 lastActivityTimestamp;
    }

    // State Variables
    uint256 public totalHotWalletBalance;
    uint256 public totalColdStorageBalance;
    uint256 public transactionCount;
    uint256 public userCount;
    string public coldStorageAddress;
    address public feeCollector;

    // Mappings
    mapping(address => UserAccount) public userAccounts;
    mapping(uint256 => Transaction) public transactions;
    mapping(string => uint256) public externalReferenceToTxId;

    // Events
    event UserRegistered(address indexed user);
    event TransactionCreated(uint256 indexed txId, address indexed user, TransactionType txType, uint256 amount);
    event TransactionCompleted(uint256 indexed txId, TransactionStatus status);
    event FundsMovedToColdStorage(address indexed user, uint256 amount);
    event FundsWithdrawnFromColdStorage(address indexed user, uint256 amount);
    event ColdStorageAddressUpdated(string newAddress);
    event FeeCollectorUpdated(address indexed newCollector);

    // Initialization
    function initialize(
        address admin,
        address oracle,
        address banking,
        address _feeCollector,
        string memory _coldStorageAddress
    ) public initializer {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(ADMIN_ROLE, admin);
        _grantRole(ORACLE_ROLE, oracle);
        _grantRole(BANKING_ROLE, banking);

        feeCollector = _feeCollector;
        coldStorageAddress = _coldStorageAddress;
    }

    // User Registration
    function registerUser(address user) external onlyRole(ADMIN_ROLE) {
        require(!userAccounts[user].registered, "User already registered");

        userAccounts[user] = UserAccount({
            registered: true,
            hotWalletBalance: 0,
            coldStorageBalance: 0,
            totalOnramped: 0,
            totalOfframped: 0,
            lastActivityTimestamp: block.timestamp
        });

        userCount++;
        emit UserRegistered(user);
    }

    // Transaction Functions
    function createOnrampTransaction(
        address user,
        uint256 amount,
        string calldata externalReference
    ) external onlyRole(BANKING_ROLE) nonReentrant whenNotPaused {
        require(userAccounts[user].registered, "User not registered");
        require(amount >= MIN_TRANSACTION_AMOUNT, "Amount below minimum");
        require(amount <= MAX_TRANSACTION_AMOUNT, "Amount above maximum");
        require(externalReferenceToTxId[externalReference] == 0, "Duplicate external reference");

        uint256 fee = (amount * TRANSACTION_FEE_PERCENT) / 100;
        uint256 netAmount = amount - fee;

        transactions[transactionCount] = Transaction({
            user: user,
            amount: amount,
            txType: TransactionType.ONRAMP,
            status: TransactionStatus.PENDING,
            externalReference: externalReference,
            timestamp: block.timestamp,
            completedTimestamp: 0,
            notes: ""
        });

        externalReferenceToTxId[externalReference] = transactionCount;
        
        emit TransactionCreated(transactionCount, user, TransactionType.ONRAMP, amount);
        transactionCount++;
    }

    function completeOnrampTransaction(
        uint256 txId,
        TransactionStatus status,
        string calldata notes
    ) external onlyRole(BANKING_ROLE) nonReentrant {
        require(txId < transactionCount, "Invalid transaction ID");
        Transaction storage transaction = transactions[txId];
        require(transaction.txType == TransactionType.ONRAMP, "Not an onramp transaction");
        require(transaction.status == TransactionStatus.PENDING, "Transaction not pending");

        transaction.status = status;
        transaction.completedTimestamp = block.timestamp;
        transaction.notes = notes;

        if (status == TransactionStatus.COMPLETED) {
            uint256 fee = (transaction.amount * TRANSACTION_FEE_PERCENT) / 100;
            uint256 netAmount = transaction.amount - fee;

            UserAccount storage userAccount = userAccounts[transaction.user];
            userAccount.hotWalletBalance += netAmount;
            userAccount.totalOnramped += netAmount;
            userAccount.lastActivityTimestamp = block.timestamp;

            totalHotWalletBalance += netAmount;
        }

        emit TransactionCompleted(txId, status);
    }

    function createOfframpTransaction(
        address user,
        uint256 amount,
        string calldata externalReference
    ) external onlyRole(BANKING_ROLE) nonReentrant whenNotPaused {
        require(userAccounts[user].registered, "User not registered");
        require(amount >= MIN_TRANSACTION_AMOUNT, "Amount below minimum");
        require(amount <= MAX_TRANSACTION_AMOUNT, "Amount above maximum");
        require(externalReferenceToTxId[externalReference] == 0, "Duplicate external reference");
        require(userAccounts[user].hotWalletBalance >= amount, "Insufficient balance");

        transactions[transactionCount] = Transaction({
            user: user,
            amount: amount,
            txType: TransactionType.OFFRAMP,
            status: TransactionStatus.PENDING,
            externalReference: externalReference,
            timestamp: block.timestamp,
            completedTimestamp: 0,
            notes: ""
        });

        externalReferenceToTxId[externalReference] = transactionCount;
        
        // Reserve the funds
        userAccounts[user].hotWalletBalance -= amount;
        totalHotWalletBalance -= amount;
        
        emit TransactionCreated(transactionCount, user, TransactionType.OFFRAMP, amount);
        transactionCount++;
    }

    function completeOfframpTransaction(
        uint256 txId,
        TransactionStatus status,
        string calldata notes
    ) external onlyRole(BANKING_ROLE) nonReentrant {
        require(txId < transactionCount, "Invalid transaction ID");
        Transaction storage transaction = transactions[txId];
        require(transaction.txType == TransactionType.OFFRAMP, "Not an offramp transaction");
        require(transaction.status == TransactionStatus.PENDING, "Transaction not pending");

        transaction.status = status;
        transaction.completedTimestamp = block.timestamp;
        transaction.notes = notes;

        UserAccount storage userAccount = userAccounts[transaction.user];
        
        if (status == TransactionStatus.COMPLETED) {
            userAccount.totalOfframped += transaction.amount;
        } else {
            // Return the funds if failed or cancelled
            userAccount.hotWalletBalance += transaction.amount;
            totalHotWalletBalance += transaction.amount;
        }
        
        userAccount.lastActivityTimestamp = block.timestamp;
        
        emit TransactionCompleted(txId, status);
    }

    // Cold Storage Functions
    function moveToColdStorage(
        address user,
        uint256 amount
    ) external onlyRole(BANKING_ROLE) nonReentrant whenNotPaused {
        require(userAccounts[user].registered, "User not registered");
        require(amount > 0, "Amount must be greater than 0");
        require(userAccounts[user].hotWalletBalance >= amount, "Insufficient hot wallet balance");

        UserAccount storage userAccount = userAccounts[user];
        userAccount.hotWalletBalance -= amount;
        userAccount.coldStorageBalance += amount;
        userAccount.lastActivityTimestamp = block.timestamp;

        totalHotWalletBalance -= amount;
        totalColdStorageBalance += amount;

        transactions[transactionCount] = Transaction({
            user: user,
            amount: amount,
            txType: TransactionType.COLD_STORAGE,
            status: TransactionStatus.COMPLETED,
            externalReference: "",
            timestamp: block.timestamp,
            completedTimestamp: block.timestamp,
            notes: "Moved to cold storage"
        });

        emit TransactionCreated(transactionCount, user, TransactionType.COLD_STORAGE, amount);
        emit TransactionCompleted(transactionCount, TransactionStatus.COMPLETED);
        emit FundsMovedToColdStorage(user, amount);
        
        transactionCount++;
    }

    function withdrawFromColdStorage(
        address user,
        uint256 amount
    ) external onlyRole(BANKING_ROLE) nonReentrant whenNotPaused {
        require(userAccounts[user].registered, "User not registered");
        require(amount > 0, "Amount must be greater than 0");
        require(userAccounts[user].coldStorageBalance >= amount, "Insufficient cold storage balance");

        UserAccount storage userAccount = userAccounts[user];
        userAccount.coldStorageBalance -= amount;
        userAccount.hotWalletBalance += amount;
        userAccount.lastActivityTimestamp = block.timestamp;

        totalColdStorageBalance -= amount;
        totalHotWalletBalance += amount;

        transactions[transactionCount] = Transaction({
            user: user,
            amount: amount,
            txType: TransactionType.WITHDRAWAL,
            status: TransactionStatus.COMPLETED,
            externalReference: "",
            timestamp: block.timestamp,
            completedTimestamp: block.timestamp,
            notes: "Withdrawn from cold storage"
        });

        emit TransactionCreated(transactionCount, user, TransactionType.WITHDRAWAL, amount);
        emit TransactionCompleted(transactionCount, TransactionStatus.COMPLETED);
        emit FundsWithdrawnFromColdStorage(user, amount);
        
        transactionCount++;
    }

    // Admin Functions
    function setColdStorageAddress(string calldata newAddress) external onlyRole(ADMIN_ROLE) {
        require(bytes(newAddress).length > 0, "Invalid address");
        coldStorageAddress = newAddress;
        emit ColdStorageAddressUpdated(newAddress);
    }

    function setFeeCollector(address newCollector) external onlyRole(ADMIN_ROLE) {
        require(newCollector != address(0), "Invalid address");
        feeCollector = newCollector;
        emit FeeCollectorUpdated(newCollector);
    }

    function pause() external onlyRole(ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(ADMIN_ROLE) {
        _unpause();
    }

    // View Functions
    function getUserBalance(address user) external view returns (uint256 hotWallet, uint256 coldStorage) {
        require(userAccounts[user].registered, "User not registered");
        return (userAccounts[user].hotWalletBalance, userAccounts[user].coldStorageBalance);
    }

    function getTransactionDetails(uint256 txId) external view returns (
        address user,
        uint256 amount,
        TransactionType txType,
        TransactionStatus status,
        string memory externalReference,
        uint256 timestamp,
        uint256 completedTimestamp,
        string memory notes
    ) {
        require(txId < transactionCount, "Invalid transaction ID");
        Transaction storage transaction = transactions[txId];
        return (
            transaction.user,
            transaction.amount,
            transaction.txType,
            transaction.status,
            transaction.externalReference,
            transaction.timestamp,
            transaction.completedTimestamp,
            transaction.notes
        );
    }

    // Upgrade Authorization
    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(ADMIN_ROLE) {}

    // Optional: Include if using gap storage for upgradeability
    uint256[50] private __gap;
}

