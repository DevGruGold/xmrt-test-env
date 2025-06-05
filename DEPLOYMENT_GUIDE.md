# XMRT Smart Contract Deployment Guide

This guide will walk you through deploying the XMRT smart contract to the Sepolia testnet and integrating it with your frontend application.

## Prerequisites

1. **Node.js and npm** installed
2. **MetaMask** wallet with Sepolia ETH
3. **Infura** or **Alchemy** account for RPC access
4. **Etherscan** account for contract verification

## Step 1: Environment Setup

1. Copy the deployment environment file:
   ```bash
   cp .env.deployment .env
   ```

2. Fill in your environment variables in `.env`:
   - `PRIVATE_KEY`: Your deployment wallet private key (⚠️ Use a dedicated wallet!)
   - `ETHERSCAN_API_KEY`: Your Etherscan API key for verification

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Compile Contracts

```bash
npx hardhat compile
```

This will:
- Compile the XMRT smart contract
- Generate artifacts and ABIs
- Check for compilation errors

## Step 4: Run Tests

```bash
npx hardhat test
```

This will run comprehensive tests covering:
- Token functionality
- Staking mechanisms
- Governance features
- AI agent integration
- Mining rewards
- Access controls

## Step 5: Deploy to Local Network (Optional)

For local testing:

```bash
# Start local Hardhat network
npx hardhat node

# In another terminal, deploy to local network
npx hardhat run scripts/deploy.js --network localhost
```

## Step 6: Deploy to Sepolia Testnet

1. **Get Sepolia ETH**: Use a faucet like [Sepolia Faucet](https://sepoliafaucet.com/)

2. **Deploy the contract**:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

3. **Verify the contract**:
   ```bash
   npx hardhat run scripts/verify.js --network sepolia
   ```

## Step 7: Update Frontend Configuration

After successful deployment:

1. **Copy the contract address** from the deployment output
2. **Add to Vercel environment variables**:
   - `VITE_XMRT_ADDRESS`: The deployed contract address
   - `VITE_NETWORK_NAME`: sepolia
   - `VITE_CHAIN_ID`: 11155111

3. **Update the frontend** to use the deployed contract

## Deployment Output

The deployment script will create:

- `deployments/sepolia-11155111.json`: Deployment information
- `deployments/sepolia-env-vars.txt`: Environment variables for Vercel
- `src/contracts/artifacts/XMRT.json`: ABI file for frontend

## Contract Features

The deployed XMRT contract includes:

### Core Token Features
- ERC20 token with 1M initial supply
- Upgradeable proxy pattern (UUPS)
- Pausable functionality
- Role-based access control

### Staking System
- Stake XMRT tokens to earn rewards
- 5% annual reward rate (configurable)
- Automatic reward calculation
- Claim rewards anytime

### Governance
- Create proposals (requires 1000 XMRT)
- Vote on proposals with token weight
- 7-day voting period (configurable)
- Democratic decision making

### AI Agent Integration
- AI agents can record decisions
- Decision auditing system
- Community feedback analysis
- Automated meeting scheduling

### Monero Mining Integration
- Miner registration system
- Reward distribution to miners
- Integration with Monero pool wallet
- Transparent reward tracking

## Security Features

- **Upgradeable**: Can be upgraded by admin for bug fixes
- **Pausable**: Can be paused in emergency situations
- **Role-based**: Different roles for different functions
- **Audited**: Comprehensive test coverage

## Verification

After deployment, verify your contract on Etherscan:

1. Go to [Sepolia Etherscan](https://sepolia.etherscan.io/)
2. Search for your contract address
3. Check that it's verified and shows the source code
4. Test basic functions like balance queries

## Troubleshooting

### Common Issues

1. **Insufficient funds**: Make sure you have enough Sepolia ETH
2. **Network issues**: Check your RPC URL and network configuration
3. **Compilation errors**: Ensure all dependencies are installed
4. **Verification fails**: Check your Etherscan API key

### Getting Help

- Check the deployment logs for error messages
- Verify your environment variables are correct
- Ensure your wallet has sufficient funds
- Test on local network first

## Next Steps

After successful deployment:

1. **Test the contract** using the frontend application
2. **Register AI agents** with appropriate roles
3. **Set up monitoring** for contract events
4. **Configure governance** parameters as needed
5. **Integrate with CashDapp** and mining systems

## Security Considerations

⚠️ **Important Security Notes**:

- Never commit private keys to version control
- Use a dedicated deployment wallet
- Test thoroughly on testnet before mainnet
- Keep your private keys secure
- Consider using a hardware wallet for mainnet deployments

## Contract Addresses

After deployment, your contract addresses will be:

- **Proxy Contract**: The main contract address users interact with
- **Implementation**: The actual contract logic (for upgrades)

Both addresses will be saved in the deployment files and should be added to your environment variables.

---

For questions or issues, refer to the Hardhat documentation or create an issue in the repository.

