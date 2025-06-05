const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("XMRT Token Contract", function () {
  let xmrt;
  let owner, addr1, addr2, aiAgent;
  let aiAgents, rewardsPool, developersPool, feesPool;
  const moneroPoolWallet = "46GAxLnJHpJMKwp5fuUPssKLqW2pukXuEXV9cLi8u5T8g9ENEiugbupMtjBt9jbGPtgi1EHvSxiWdDNHzpeDiTc1MFSuScD";

  beforeEach(async function () {
    [owner, addr1, addr2, aiAgent] = await ethers.getSigners();
    
    // Setup parameters
    aiAgents = [aiAgent.address];
    rewardsPool = owner.address;
    developersPool = owner.address;
    feesPool = owner.address;

    // Deploy the contract
    const XMRT = await ethers.getContractFactory("XMRT");
    xmrt = await upgrades.deployProxy(
      XMRT,
      [aiAgents, rewardsPool, developersPool, feesPool, moneroPoolWallet],
      { initializer: "initialize", kind: "uups" }
    );
    await xmrt.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right name and symbol", async function () {
      expect(await xmrt.name()).to.equal("XMRT Token");
      expect(await xmrt.symbol()).to.equal("XMRT");
    });

    it("Should mint initial supply to owner", async function () {
      const ownerBalance = await xmrt.balanceOf(owner.address);
      expect(ownerBalance).to.equal(ethers.utils.parseEther("1000000"));
    });

    it("Should set correct roles", async function () {
      const DEFAULT_ADMIN_ROLE = await xmrt.DEFAULT_ADMIN_ROLE();
      const AI_AGENT_ROLE = await xmrt.AI_AGENT_ROLE();
      
      expect(await xmrt.hasRole(DEFAULT_ADMIN_ROLE, owner.address)).to.be.true;
      expect(await xmrt.hasRole(AI_AGENT_ROLE, aiAgent.address)).to.be.true;
    });

    it("Should set correct parameters", async function () {
      expect(await xmrt.rewardRate()).to.equal(500); // 5%
      expect(await xmrt.votingPeriod()).to.equal(7 * 24 * 60 * 60); // 7 days
      expect(await xmrt.proposalThreshold()).to.equal(ethers.utils.parseEther("1000"));
      expect(await xmrt.moneroPoolWallet()).to.equal(moneroPoolWallet);
    });
  });

  describe("Staking", function () {
    beforeEach(async function () {
      // Transfer some tokens to addr1 for testing
      await xmrt.transfer(addr1.address, ethers.utils.parseEther("10000"));
    });

    it("Should allow users to stake tokens", async function () {
      const stakeAmount = ethers.utils.parseEther("1000");
      
      await xmrt.connect(addr1).stake(stakeAmount);
      
      expect(await xmrt.stakedBalances(addr1.address)).to.equal(stakeAmount);
      expect(await xmrt.totalStaked()).to.equal(stakeAmount);
    });

    it("Should not allow staking more than balance", async function () {
      const stakeAmount = ethers.utils.parseEther("20000"); // More than balance
      
      await expect(
        xmrt.connect(addr1).stake(stakeAmount)
      ).to.be.revertedWith("Insufficient balance");
    });

    it("Should allow users to unstake tokens", async function () {
      const stakeAmount = ethers.utils.parseEther("1000");
      
      // First stake
      await xmrt.connect(addr1).stake(stakeAmount);
      
      // Then unstake
      await xmrt.connect(addr1).unstake(stakeAmount);
      
      expect(await xmrt.stakedBalances(addr1.address)).to.equal(0);
      expect(await xmrt.totalStaked()).to.equal(0);
    });

    it("Should calculate rewards correctly", async function () {
      const stakeAmount = ethers.utils.parseEther("1000");
      
      await xmrt.connect(addr1).stake(stakeAmount);
      
      // Fast forward time by 1 year
      await ethers.provider.send("evm_increaseTime", [365 * 24 * 60 * 60]);
      await ethers.provider.send("evm_mine");
      
      const rewards = await xmrt.calculateRewards(addr1.address);
      const expectedRewards = stakeAmount.mul(500).div(10000); // 5% of staked amount
      
      expect(rewards).to.be.closeTo(expectedRewards, ethers.utils.parseEther("1"));
    });
  });

  describe("Governance", function () {
    beforeEach(async function () {
      // Transfer tokens to addr1 for proposal creation
      await xmrt.transfer(addr1.address, ethers.utils.parseEther("2000"));
    });

    it("Should allow creating proposals", async function () {
      const title = "Test Proposal";
      const description = "This is a test proposal";
      
      await expect(
        xmrt.connect(addr1).createProposal(title, description)
      ).to.emit(xmrt, "ProposalCreated");
      
      const proposal = await xmrt.getProposal(0);
      expect(proposal.title).to.equal(title);
      expect(proposal.description).to.equal(description);
      expect(proposal.proposer).to.equal(addr1.address);
    });

    it("Should not allow creating proposals without enough tokens", async function () {
      await expect(
        xmrt.connect(addr2).createProposal("Test", "Test")
      ).to.be.revertedWith("Insufficient tokens to create proposal");
    });

    it("Should allow voting on proposals", async function () {
      // Create proposal
      await xmrt.connect(addr1).createProposal("Test Proposal", "Test Description");
      
      // Vote
      await expect(
        xmrt.connect(addr1).vote(0, true)
      ).to.emit(xmrt, "VoteCast");
      
      const proposal = await xmrt.getProposal(0);
      expect(proposal.forVotes).to.be.gt(0);
    });
  });

  describe("Community Feedback", function () {
    it("Should allow submitting feedback", async function () {
      const feedback = "Great project!";
      const sentiment = 80;
      const urgency = 20;
      
      await expect(
        xmrt.connect(addr1).submitFeedback(feedback, sentiment, urgency)
      ).to.emit(xmrt, "FeedbackSubmitted");
      
      expect(await xmrt.feedbackCount()).to.equal(1);
    });

    it("Should allow AI agents to mark feedback as addressed", async function () {
      // Submit feedback
      await xmrt.connect(addr1).submitFeedback("Test feedback", 50, 30);
      
      // Mark as addressed by AI agent
      await xmrt.connect(aiAgent).markFeedbackAddressed(0);
      
      const feedback = await xmrt.communityFeedback(0);
      expect(feedback.addressed).to.be.true;
    });
  });

  describe("AI Decision Recording", function () {
    it("Should allow AI agents to record decisions", async function () {
      const description = "Automated reward distribution";
      const rationale = "Based on community feedback analysis";
      const impactScore = 75;
      
      await expect(
        xmrt.connect(aiAgent).recordAIDecision(description, rationale, impactScore)
      ).to.emit(xmrt, "AIDecisionRecorded");
      
      expect(await xmrt.decisionCount()).to.equal(1);
    });

    it("Should allow auditing AI decisions", async function () {
      // Record decision
      await xmrt.connect(aiAgent).recordAIDecision("Test decision", "Test rationale", 50);
      
      // Audit decision
      await xmrt.connect(aiAgent).auditAIDecision(0, true);
      
      const decision = await xmrt.aiDecisions(0);
      expect(decision.audited).to.be.true;
      expect(decision.valid).to.be.true;
    });
  });

  describe("Meeting Management", function () {
    it("Should allow AI agents to schedule meetings", async function () {
      const topic = "Community Update";
      const timestamp = Math.floor(Date.now() / 1000) + 86400; // Tomorrow
      const link = "https://meet.example.com/room123";
      
      await expect(
        xmrt.connect(aiAgent).scheduleMeeting(topic, timestamp, link)
      ).to.emit(xmrt, "MeetingScheduled");
      
      expect(await xmrt.meetingCount()).to.equal(1);
    });

    it("Should allow cancelling meetings", async function () {
      const timestamp = Math.floor(Date.now() / 1000) + 86400;
      
      // Schedule meeting
      await xmrt.connect(aiAgent).scheduleMeeting("Test Meeting", timestamp, "https://test.com");
      
      // Cancel meeting
      await xmrt.connect(aiAgent).cancelMeeting(0);
      
      const meeting = await xmrt.publicMeetings(0);
      expect(meeting.cancelled).to.be.true;
    });
  });

  describe("Monero Mining Integration", function () {
    it("Should allow miner registration", async function () {
      await expect(
        xmrt.connect(addr1).registerMiner()
      ).to.emit(xmrt, "MinerRegistered");
      
      expect(await xmrt.registeredMiners(addr1.address)).to.be.true;
    });

    it("Should allow AI agents to distribute mining rewards", async function () {
      // Register miners
      await xmrt.connect(addr1).registerMiner();
      await xmrt.connect(addr2).registerMiner();
      
      const miners = [addr1.address, addr2.address];
      const amounts = [ethers.utils.parseEther("100"), ethers.utils.parseEther("150")];
      
      await expect(
        xmrt.connect(aiAgent).distributeMiningRewards(miners, amounts)
      ).to.emit(xmrt, "MiningRewardDistributed");
      
      expect(await xmrt.minerRewards(addr1.address)).to.equal(amounts[0]);
      expect(await xmrt.minerRewards(addr2.address)).to.equal(amounts[1]);
    });
  });

  describe("Admin Functions", function () {
    it("Should allow admin to set reward rate", async function () {
      const newRate = 1000; // 10%
      
      await xmrt.setRewardRate(newRate);
      expect(await xmrt.rewardRate()).to.equal(newRate);
    });

    it("Should not allow setting reward rate above 20%", async function () {
      await expect(
        xmrt.setRewardRate(2500) // 25%
      ).to.be.revertedWith("Rate cannot exceed 20%");
    });

    it("Should allow pausing and unpausing", async function () {
      await xmrt.pause();
      expect(await xmrt.paused()).to.be.true;
      
      await xmrt.unpause();
      expect(await xmrt.paused()).to.be.false;
    });
  });

  describe("Upgradeability", function () {
    it("Should be upgradeable by admin", async function () {
      const XMRTV2 = await ethers.getContractFactory("XMRT");
      const upgraded = await upgrades.upgradeProxy(xmrt.address, XMRTV2);
      
      // Should maintain state after upgrade
      expect(await upgraded.name()).to.equal("XMRT Token");
      expect(await upgraded.symbol()).to.equal("XMRT");
    });
  });
});

