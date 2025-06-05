// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

/**
 * @title XMRT Token Contract
 * @dev Master contract for the XMRT ecosystem with staking, governance, and AI agent integration
 */
contract XMRT is 
    Initializable, 
    ERC20Upgradeable, 
    ERC20BurnableUpgradeable, 
    PausableUpgradeable, 
    AccessControlUpgradeable, 
    UUPSUpgradeable 
{
    // Roles
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    bytes32 public constant AI_AGENT_ROLE = keccak256("AI_AGENT_ROLE");
    bytes32 public constant ORACLE_ROLE = keccak256("ORACLE_ROLE");

    // Pool addresses
    address public rewardsPool;
    address public developersPool;
    address public feesPool;
    address public moneroPool;

    // Staking variables
    mapping(address => uint256) public stakedBalances;
    mapping(address => uint256) public stakingTimestamps;
    mapping(address => uint256) public rewardsClaimed;
    uint256 public totalStaked;
    uint256 public rewardRate; // Annual percentage rate (APR) in basis points (e.g., 500 = 5%)
    uint256 public constant SECONDS_PER_YEAR = 365 * 24 * 60 * 60;

    // Governance structures
    struct Proposal {
        uint256 id;
        string title;
        string description;
        address proposer;
        uint256 forVotes;
        uint256 againstVotes;
        uint256 startTime;
        uint256 endTime;
        bool executed;
        bool cancelled;
        mapping(address => bool) hasVoted;
        mapping(address => bool) voteChoice; // true = for, false = against
    }

    mapping(uint256 => Proposal) public proposals;
    uint256 public proposalCount;
    uint256 public votingPeriod; // Duration in seconds
    uint256 public proposalThreshold; // Minimum tokens required to create proposal

    // Community feedback system
    struct Feedback {
        string feedback;
        address submitter;
        uint256 timestamp;
        bool addressed;
        uint256 sentiment; // 0-100 scale
        uint256 urgency; // 0-100 scale
    }

    Feedback[] public communityFeedback;

    // AI Decision tracking
    struct AIDecision {
        string description;
        string rationale;
        uint256 timestamp;
        address aiAgent;
        bool audited;
        bool valid;
        uint256 impactScore; // 0-100 scale
    }

    AIDecision[] public aiDecisions;

    // Public meetings
    struct Meeting {
        string topic;
        uint256 timestamp;
        string link;
        bool cancelled;
        address organizer;
    }

    Meeting[] public publicMeetings;

    // Monero mining integration
    mapping(address => bool) public registeredMiners;
    mapping(address => uint256) public minerContributions;
    mapping(address => uint256) public minerRewards;
    uint256 public totalMiningRewards;
    string public moneroPoolWallet;

    // Events
    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 amount);
    event ProposalCreated(uint256 indexed proposalId, address indexed proposer, string title);
    event VoteCast(uint256 indexed proposalId, address indexed voter, bool support, uint256 weight);
    event ProposalExecuted(uint256 indexed proposalId);
    event FeedbackSubmitted(address indexed submitter, uint256 indexed feedbackId);
    event AIDecisionRecorded(address indexed aiAgent, uint256 indexed decisionId);
    event MeetingScheduled(uint256 indexed meetingId, string topic, uint256 timestamp);
    event MinerRegistered(address indexed miner);
    event MiningRewardDistributed(address indexed miner, uint256 amount);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(
        address[] memory _aiAgents,
        address _rewardsPool,
        address _developersPool,
        address _feesPool,
        string memory _moneroPoolWallet
    ) public initializer {
        __ERC20_init("XMRT Token", "XMRT");
        __ERC20Burnable_init();
        __Pausable_init();
        __AccessControl_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);

        // Grant AI agent roles
        for (uint i = 0; i < _aiAgents.length; i++) {
            _grantRole(AI_AGENT_ROLE, _aiAgents[i]);
            _grantRole(ORACLE_ROLE, _aiAgents[i]);
        }

        // Set pool addresses
        rewardsPool = _rewardsPool;
        developersPool = _developersPool;
        feesPool = _feesPool;
        moneroPoolWallet = _moneroPoolWallet;

        // Initialize parameters
        rewardRate = 500; // 5% APR
        votingPeriod = 7 days;
        proposalThreshold = 1000 * 10**decimals(); // 1000 tokens

        // Mint initial supply
        _mint(msg.sender, 1000000 * 10**decimals()); // 1M tokens
    }

    // Staking functions
    function stake(uint256 amount) external whenNotPaused {
        require(amount > 0, "Amount must be greater than 0");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        // Claim pending rewards before staking more
        if (stakedBalances[msg.sender] > 0) {
            claimRewards();
        }

        _transfer(msg.sender, address(this), amount);
        stakedBalances[msg.sender] += amount;
        stakingTimestamps[msg.sender] = block.timestamp;
        totalStaked += amount;

        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external whenNotPaused {
        require(amount > 0, "Amount must be greater than 0");
        require(stakedBalances[msg.sender] >= amount, "Insufficient staked balance");

        // Claim pending rewards before unstaking
        claimRewards();

        stakedBalances[msg.sender] -= amount;
        totalStaked -= amount;
        _transfer(address(this), msg.sender, amount);

        emit Unstaked(msg.sender, amount);
    }

    function claimRewards() public whenNotPaused {
        uint256 rewards = calculateRewards(msg.sender);
        require(rewards > 0, "No rewards to claim");

        rewardsClaimed[msg.sender] += rewards;
        stakingTimestamps[msg.sender] = block.timestamp;
        
        // Mint rewards from rewards pool
        _mint(msg.sender, rewards);

        emit RewardsClaimed(msg.sender, rewards);
    }

    function calculateRewards(address user) public view returns (uint256) {
        if (stakedBalances[user] == 0) return 0;
        
        uint256 timeStaked = block.timestamp - stakingTimestamps[user];
        uint256 annualReward = (stakedBalances[user] * rewardRate) / 10000;
        return (annualReward * timeStaked) / SECONDS_PER_YEAR;
    }

    // Governance functions
    function createProposal(
        string memory title,
        string memory description
    ) external whenNotPaused returns (uint256) {
        require(balanceOf(msg.sender) >= proposalThreshold, "Insufficient tokens to create proposal");
        
        uint256 proposalId = proposalCount++;
        Proposal storage proposal = proposals[proposalId];
        proposal.id = proposalId;
        proposal.title = title;
        proposal.description = description;
        proposal.proposer = msg.sender;
        proposal.startTime = block.timestamp;
        proposal.endTime = block.timestamp + votingPeriod;

        emit ProposalCreated(proposalId, msg.sender, title);
        return proposalId;
    }

    function vote(uint256 proposalId, bool support) external whenNotPaused {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp >= proposal.startTime, "Voting not started");
        require(block.timestamp <= proposal.endTime, "Voting ended");
        require(!proposal.hasVoted[msg.sender], "Already voted");

        uint256 weight = balanceOf(msg.sender) + stakedBalances[msg.sender];
        require(weight > 0, "No voting power");

        proposal.hasVoted[msg.sender] = true;
        proposal.voteChoice[msg.sender] = support;

        if (support) {
            proposal.forVotes += weight;
        } else {
            proposal.againstVotes += weight;
        }

        emit VoteCast(proposalId, msg.sender, support, weight);
    }

    // Community feedback functions
    function submitFeedback(
        string memory feedback,
        uint256 sentiment,
        uint256 urgency
    ) external whenNotPaused returns (uint256) {
        require(bytes(feedback).length > 0, "Feedback cannot be empty");
        require(sentiment <= 100, "Sentiment must be 0-100");
        require(urgency <= 100, "Urgency must be 0-100");

        communityFeedback.push(Feedback({
            feedback: feedback,
            submitter: msg.sender,
            timestamp: block.timestamp,
            addressed: false,
            sentiment: sentiment,
            urgency: urgency
        }));

        uint256 feedbackId = communityFeedback.length - 1;
        emit FeedbackSubmitted(msg.sender, feedbackId);
        return feedbackId;
    }

    function markFeedbackAddressed(uint256 feedbackId) external onlyRole(AI_AGENT_ROLE) {
        require(feedbackId < communityFeedback.length, "Invalid feedback ID");
        communityFeedback[feedbackId].addressed = true;
    }

    // AI Decision recording
    function recordAIDecision(
        string memory description,
        string memory rationale,
        uint256 impactScore
    ) external onlyRole(AI_AGENT_ROLE) returns (uint256) {
        require(bytes(description).length > 0, "Description cannot be empty");
        require(impactScore <= 100, "Impact score must be 0-100");

        aiDecisions.push(AIDecision({
            description: description,
            rationale: rationale,
            timestamp: block.timestamp,
            aiAgent: msg.sender,
            audited: false,
            valid: false,
            impactScore: impactScore
        }));

        uint256 decisionId = aiDecisions.length - 1;
        emit AIDecisionRecorded(msg.sender, decisionId);
        return decisionId;
    }

    function auditAIDecision(uint256 decisionId, bool isValid) external onlyRole(ORACLE_ROLE) {
        require(decisionId < aiDecisions.length, "Invalid decision ID");
        aiDecisions[decisionId].audited = true;
        aiDecisions[decisionId].valid = isValid;
    }

    // Meeting management
    function scheduleMeeting(
        string memory topic,
        uint256 timestamp,
        string memory link
    ) external onlyRole(AI_AGENT_ROLE) returns (uint256) {
        require(timestamp > block.timestamp, "Meeting must be in the future");
        require(bytes(topic).length > 0, "Topic cannot be empty");

        publicMeetings.push(Meeting({
            topic: topic,
            timestamp: timestamp,
            link: link,
            cancelled: false,
            organizer: msg.sender
        }));

        uint256 meetingId = publicMeetings.length - 1;
        emit MeetingScheduled(meetingId, topic, timestamp);
        return meetingId;
    }

    function cancelMeeting(uint256 meetingId) external onlyRole(AI_AGENT_ROLE) {
        require(meetingId < publicMeetings.length, "Invalid meeting ID");
        require(publicMeetings[meetingId].organizer == msg.sender, "Not meeting organizer");
        publicMeetings[meetingId].cancelled = true;
    }

    // Monero mining integration
    function registerMiner() external whenNotPaused {
        require(!registeredMiners[msg.sender], "Already registered");
        registeredMiners[msg.sender] = true;
        emit MinerRegistered(msg.sender);
    }

    function distributeMiningRewards(
        address[] memory miners,
        uint256[] memory amounts
    ) external onlyRole(AI_AGENT_ROLE) {
        require(miners.length == amounts.length, "Arrays length mismatch");
        
        for (uint i = 0; i < miners.length; i++) {
            require(registeredMiners[miners[i]], "Miner not registered");
            
            minerRewards[miners[i]] += amounts[i];
            totalMiningRewards += amounts[i];
            
            // Mint rewards to miner
            _mint(miners[i], amounts[i]);
            
            emit MiningRewardDistributed(miners[i], amounts[i]);
        }
    }

    // View functions
    function feedbackCount() external view returns (uint256) {
        return communityFeedback.length;
    }

    function decisionCount() external view returns (uint256) {
        return aiDecisions.length;
    }

    function meetingCount() external view returns (uint256) {
        return publicMeetings.length;
    }

    function getProposal(uint256 proposalId) external view returns (
        uint256 id,
        string memory title,
        string memory description,
        address proposer,
        uint256 forVotes,
        uint256 againstVotes,
        uint256 startTime,
        uint256 endTime,
        bool executed,
        bool cancelled
    ) {
        Proposal storage proposal = proposals[proposalId];
        return (
            proposal.id,
            proposal.title,
            proposal.description,
            proposal.proposer,
            proposal.forVotes,
            proposal.againstVotes,
            proposal.startTime,
            proposal.endTime,
            proposal.executed,
            proposal.cancelled
        );
    }

    // Admin functions
    function setRewardRate(uint256 newRate) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(newRate <= 2000, "Rate cannot exceed 20%"); // Max 20% APR
        rewardRate = newRate;
    }

    function setVotingPeriod(uint256 newPeriod) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(newPeriod >= 1 days && newPeriod <= 30 days, "Invalid voting period");
        votingPeriod = newPeriod;
    }

    function setProposalThreshold(uint256 newThreshold) external onlyRole(DEFAULT_ADMIN_ROLE) {
        proposalThreshold = newThreshold;
    }

    function updateMoneroPoolWallet(string memory newWallet) external onlyRole(DEFAULT_ADMIN_ROLE) {
        moneroPoolWallet = newWallet;
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyRole(UPGRADER_ROLE)
        override
    {}

    // Override required by Solidity
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}

