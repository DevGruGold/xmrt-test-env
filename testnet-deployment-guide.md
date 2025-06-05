# Deploying XMRT Smart Contracts to Sepolia Testnet

This guide provides instructions for deploying the XMRT smart contracts to the Sepolia testnet.

## Prerequisites

1. Node.js and npm installed
2. MetaMask or another Ethereum wallet with Sepolia ETH
3. An Infura or Alchemy API key for Sepolia testnet access

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/DevGruGold/xmrt-test-env.git
   cd xmrt-test-env
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
   PRIVATE_KEY=your_wallet_private_key_without_0x_prefix
   ETHERSCAN_API_KEY=your_etherscan_api_key
   ```

4. Install Hardhat and other dependencies:
   ```bash
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @openzeppelin/contracts-upgradeable @openzeppelin/hardhat-upgrades dotenv
   ```

5. Create a `hardhat.config.js` file in the root directory:
   ```javascript
   require("@nomicfoundation/hardhat-toolbox");
   require("@openzeppelin/hardhat-upgrades");
   require("dotenv").config();

   module.exports = {
     solidity: "0.8.19",
     networks: {
       sepolia: {
         url: process.env.SEPOLIA_RPC_URL,
         accounts: [process.env.PRIVATE_KEY],
       },
     },
     etherscan: {
       apiKey: process.env.ETHERSCAN_API_KEY,
     },
   };
   ```

## Deployment

1. Create a deployment script in the `scripts` directory:
   ```javascript
   // scripts/deploy.js
   const { ethers, upgrades } = require("hardhat");

   async function main() {
     // Deploy XMART token
     const [deployer] = await ethers.getSigners();
     console.log("Deploying contracts with the account:", deployer.address);

     // Define roles
     const roles = [
       deployer.address, // Admin
       deployer.address, // Executive
       deployer.address, // Audit
       deployer.address, // Oracle
       deployer.address, // Rewards
       deployer.address  // Developers
     ];

     // Deploy XMART token
     const XMART = await ethers.getContractFactory("XMART");
     const xmart = await upgrades.deployProxy(XMART, [
       roles,
       deployer.address, // Rewards pool
       deployer.address, // Developers pool
       deployer.address  // Fees pool
     ]);
     await xmart.deployed();
     console.log("XMART token deployed to:", xmart.address);

     // Deploy MoneroPool
     const MoneroPool = await ethers.getContractFactory("MoneroPool");
     const moneroPool = await upgrades.deployProxy(MoneroPool, [
       deployer.address, // Admin
       deployer.address, // Oracle
       deployer.address, // Distributor
       86400, // 1 day distribution interval
       ethers.utils.parseEther("1") // 1 XMR minimum distribution
     ]);
     await moneroPool.deployed();
     console.log("MoneroPool deployed to:", moneroPool.address);

     // Deploy CashDappIntegration
     const CashDappIntegration = await ethers.getContractFactory("CashDappIntegration");
     const cashDapp = await upgrades.deployProxy(CashDappIntegration, [
       deployer.address, // Admin
       deployer.address, // Oracle
       deployer.address, // Banking
       deployer.address, // Fees pool
       "4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" // Cold storage address
     ]);
     await cashDapp.deployed();
     console.log("CashDappIntegration deployed to:", cashDapp.address);

     // Return the deployed contract addresses
     return {
       xmartAddress: xmart.address,
       moneroPoolAddress: moneroPool.address,
       cashDappIntegrationAddress: cashDapp.address
     };
   }

   main()
     .then(() => process.exit(0))
     .catch((error) => {
       console.error(error);
       process.exit(1);
     });
   ```

2. Deploy the contracts to Sepolia testnet:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

3. Verify the contracts on Etherscan:
   ```bash
   npx hardhat verify --network sepolia XMART_ADDRESS
   npx hardhat verify --network sepolia MONERO_POOL_ADDRESS
   npx hardhat verify --network sepolia CASH_DAPP_ADDRESS
   ```

## Update Frontend Configuration

After deploying the contracts, update the environment variables in your Vercel project:

1. Go to your project settings in Vercel
2. Click on "Environment Variables"
3. Update the following variables with the deployed contract addresses:
   - VITE_XMART_ADDRESS
   - VITE_MONERO_POOL_ADDRESS
   - VITE_CASH_DAPP_ADDRESS

## Testing the Deployment

1. Connect to the Sepolia testnet in MetaMask
2. Visit your deployed frontend application
3. Connect your wallet
4. Interact with the contracts to verify they are working correctly

## Troubleshooting

If you encounter any issues with the deployment:

1. Ensure you have enough Sepolia ETH for gas fees
2. Check that your private key and API keys are correct
3. Verify that the contract addresses are correctly updated in the frontend
4. Check the Hardhat console output for any errors during deployment

