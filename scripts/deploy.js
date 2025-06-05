const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("Starting XMRT deployment...");
  
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Get network info
  const network = await ethers.provider.getNetwork();
  console.log("Network:", network.name, "Chain ID:", network.chainId);

  // AI Agent addresses (these would be the addresses of your AI agent wallets)
  const aiAgents = [
    deployer.address, // For testing, use deployer as AI agent
    // Add more AI agent addresses here when available
  ];

  // Pool addresses (for testing, use deployer address)
  const rewardsPool = deployer.address;
  const developersPool = deployer.address;
  const feesPool = deployer.address;
  
  // Monero pool wallet address
  const moneroPoolWallet = process.env.VITE_MONERO_POOL_WALLET || 
    "46GAxLnJHpJMKwp5fuUPssKLqW2pukXuEXV9cLi8u5T8g9ENEiugbupMtjBt9jbGPtgi1EHvSxiWdDNHzpeDiTc1MFSuScD";

  console.log("Deployment parameters:");
  console.log("- AI Agents:", aiAgents);
  console.log("- Rewards Pool:", rewardsPool);
  console.log("- Developers Pool:", developersPool);
  console.log("- Fees Pool:", feesPool);
  console.log("- Monero Pool Wallet:", moneroPoolWallet);

  // Deploy the XMRT contract as upgradeable proxy
  console.log("\nDeploying XMRT contract...");
  const XMRT = await ethers.getContractFactory("XMRT");
  
  const xmrt = await upgrades.deployProxy(
    XMRT,
    [
      aiAgents,
      rewardsPool,
      developersPool,
      feesPool,
      moneroPoolWallet
    ],
    {
      initializer: "initialize",
      kind: "uups"
    }
  );

  await xmrt.deployed();
  console.log("XMRT deployed to:", xmrt.address);

  // Get the implementation address
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(xmrt.address);
  console.log("Implementation address:", implementationAddress);

  // Verify deployment
  console.log("\nVerifying deployment...");
  const name = await xmrt.name();
  const symbol = await xmrt.symbol();
  const totalSupply = await xmrt.totalSupply();
  const decimals = await xmrt.decimals();
  
  console.log("Token name:", name);
  console.log("Token symbol:", symbol);
  console.log("Total supply:", ethers.utils.formatEther(totalSupply));
  console.log("Decimals:", decimals);

  // Test basic functionality
  console.log("\nTesting basic functionality...");
  
  // Check roles
  const DEFAULT_ADMIN_ROLE = await xmrt.DEFAULT_ADMIN_ROLE();
  const hasAdminRole = await xmrt.hasRole(DEFAULT_ADMIN_ROLE, deployer.address);
  console.log("Deployer has admin role:", hasAdminRole);

  // Check staking parameters
  const rewardRate = await xmrt.rewardRate();
  const votingPeriod = await xmrt.votingPeriod();
  const proposalThreshold = await xmrt.proposalThreshold();
  
  console.log("Reward rate:", rewardRate.toString(), "basis points");
  console.log("Voting period:", votingPeriod.toString(), "seconds");
  console.log("Proposal threshold:", ethers.utils.formatEther(proposalThreshold));

  // Save deployment info
  const deploymentInfo = {
    network: network.name,
    chainId: network.chainId,
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
    contracts: {
      XMRT: {
        proxy: xmrt.address,
        implementation: implementationAddress
      }
    },
    parameters: {
      aiAgents,
      rewardsPool,
      developersPool,
      feesPool,
      moneroPoolWallet,
      rewardRate: rewardRate.toString(),
      votingPeriod: votingPeriod.toString(),
      proposalThreshold: proposalThreshold.toString()
    }
  };

  // Create deployments directory if it doesn't exist
  const deploymentsDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir, { recursive: true });
  }

  // Save deployment info to file
  const deploymentFile = path.join(deploymentsDir, `${network.name}-${network.chainId}.json`);
  fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));
  console.log("\nDeployment info saved to:", deploymentFile);

  // Generate ABI file for frontend
  const abiDir = path.join(__dirname, "..", "src", "contracts", "artifacts");
  if (!fs.existsSync(abiDir)) {
    fs.mkdirSync(abiDir, { recursive: true });
  }

  const abiFile = path.join(abiDir, "XMRT.json");
  const abiData = {
    address: xmrt.address,
    abi: XMRT.interface.format("json")
  };
  fs.writeFileSync(abiFile, JSON.stringify(abiData, null, 2));
  console.log("ABI file saved to:", abiFile);

  // Create environment variables template
  const envTemplate = `
# XMRT Contract Deployment - ${network.name}
VITE_XMRT_ADDRESS=${xmrt.address}
VITE_XMRT_IMPLEMENTATION=${implementationAddress}
VITE_NETWORK_NAME=${network.name}
VITE_CHAIN_ID=${network.chainId}

# Add these to your Vercel environment variables:
# VITE_XMRT_ADDRESS=${xmrt.address}
`;

  const envFile = path.join(deploymentsDir, `${network.name}-env-vars.txt`);
  fs.writeFileSync(envFile, envTemplate);
  console.log("Environment variables template saved to:", envFile);

  console.log("\n🎉 Deployment completed successfully!");
  console.log("\nNext steps:");
  console.log("1. Add the contract address to your Vercel environment variables:");
  console.log(`   VITE_XMRT_ADDRESS=${xmrt.address}`);
  console.log("2. Verify the contract on Etherscan (if on mainnet/testnet)");
  console.log("3. Test the contract functionality");
  console.log("4. Update the frontend to use the deployed contract");

  return {
    xmrt: xmrt.address,
    implementation: implementationAddress
  };
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then((addresses) => {
    console.log("\nDeployed addresses:", addresses);
    process.exit(0);
  })
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });

