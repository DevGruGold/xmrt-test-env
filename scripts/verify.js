const { run, ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("Starting contract verification...");

  // Get network info
  const network = await ethers.provider.getNetwork();
  console.log("Network:", network.name, "Chain ID:", network.chainId);

  // Load deployment info
  const deploymentFile = path.join(__dirname, "..", "deployments", `${network.name}-${network.chainId}.json`);
  
  if (!fs.existsSync(deploymentFile)) {
    console.error("Deployment file not found:", deploymentFile);
    console.log("Please run the deployment script first.");
    process.exit(1);
  }

  const deploymentInfo = JSON.parse(fs.readFileSync(deploymentFile, "utf8"));
  const contractAddress = deploymentInfo.contracts.XMRT.proxy;
  const implementationAddress = deploymentInfo.contracts.XMRT.implementation;

  console.log("Contract address (proxy):", contractAddress);
  console.log("Implementation address:", implementationAddress);

  try {
    // Verify the implementation contract
    console.log("\nVerifying implementation contract...");
    await run("verify:verify", {
      address: implementationAddress,
      constructorArguments: [],
    });
    console.log("Implementation contract verified successfully!");

    // Note: Proxy contracts are automatically verified by OpenZeppelin
    console.log("\nProxy contract should be automatically verified by OpenZeppelin.");
    
  } catch (error) {
    if (error.message.includes("Already Verified")) {
      console.log("Contract is already verified!");
    } else {
      console.error("Verification failed:", error.message);
    }
  }

  // Verify contract on block explorer
  const explorerUrl = getExplorerUrl(network.chainId, contractAddress);
  if (explorerUrl) {
    console.log(`\nView contract on block explorer: ${explorerUrl}`);
  }

  console.log("\n✅ Verification process completed!");
}

function getExplorerUrl(chainId, address) {
  const explorers = {
    1: `https://etherscan.io/address/${address}`, // Mainnet
    11155111: `https://sepolia.etherscan.io/address/${address}`, // Sepolia
    137: `https://polygonscan.com/address/${address}`, // Polygon
    80001: `https://mumbai.polygonscan.com/address/${address}`, // Mumbai
  };
  
  return explorers[chainId] || null;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Verification failed:", error);
    process.exit(1);
  });

