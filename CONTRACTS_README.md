# XMRT Smart Contracts

This directory contains the smart contract development environment for XMRT, separated from the frontend to avoid dependency conflicts during Vercel deployment.

## Setup for Smart Contract Development

To work with smart contracts, you need to install the contract-specific dependencies:

```bash
# Install contract dependencies (separate from frontend)
cp contracts-package.json package-contracts.json
npm install --prefix . --package-lock-only --package-lock-name package-contracts-lock.json --save-dev $(cat contracts-package.json | jq -r '.devDependencies | to_entries[] | "\(.key)@\(.value)"' | tr '\n' ' ')
```

Or manually install the required dependencies:

```bash
npm install --save-dev @nomicfoundation/hardhat-toolbox @openzeppelin/contracts @openzeppelin/hardhat-upgrades hardhat dotenv
```

## Smart Contract Development Commands

```bash
# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy to Sepolia testnet
npx hardhat run scripts/deploy.js --network sepolia

# Verify contracts on Etherscan
npx hardhat run scripts/verify.js --network sepolia
```

## Environment Variables for Contract Deployment

Create a `.env` file with:

```
PRIVATE_KEY=your_private_key_here
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your_infura_key
ETHERSCAN_API_KEY=your_etherscan_api_key
```

## Contract Addresses

After deployment, update the frontend environment variables in Vercel with the deployed contract addresses.

## Note

The frontend build process (used by Vercel) does not include these contract development dependencies to avoid build conflicts. This separation ensures:

1. Frontend builds successfully on Vercel
2. Smart contract development works locally
3. No dependency conflicts between ethers v5 (frontend) and ethers v6 (hardhat)

