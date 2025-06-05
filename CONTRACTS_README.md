# Smart Contract Development Setup

The smart contract development environment is separated from the frontend to avoid dependency conflicts during Vercel deployment.

## Quick Setup for Contract Development

1. **Switch to contract development mode**:
   ```bash
   # Backup current package.json
   mv package.json package-frontend.json
   
   # Use contracts package.json
   mv contracts-package.json package.json
   ```

2. **Install contract dependencies**:
   ```bash
   npm install
   ```

3. **Develop and deploy contracts**:
   ```bash
   # Compile contracts
   npm run compile
   
   # Run tests
   npm run test
   
   # Deploy to Sepolia
   npm run deploy:sepolia
   ```

4. **Switch back to frontend mode**:
   ```bash
   # Restore frontend package.json
   mv package.json package-contracts.json
   mv package-frontend.json package.json
   ```

## Alternative: Use a separate directory

You can also create a separate `contracts/` directory for smart contract development:

```bash
# Create contracts directory
mkdir contracts-dev
cd contracts-dev

# Copy contract files
cp -r ../contracts .
cp -r ../scripts .
cp -r ../test .
cp ../hardhat.config.cjs .
cp ../contracts-package.json package.json
cp ../.env.deployment .env

# Install and develop
npm install
npm run compile
npm run test
npm run deploy:sepolia
```

## Environment Variables for Deployment

Copy `.env.deployment` to `.env` and fill in your values:

```bash
cp .env.deployment .env
# Edit .env with your private key and API keys
```

## Deployment Process

1. **Compile contracts**: `npm run compile`
2. **Run tests**: `npm run test`
3. **Deploy to testnet**: `npm run deploy:sepolia`
4. **Verify contracts**: `npm run verify:sepolia`
5. **Update frontend**: Copy contract address to Vercel environment variables

The deployment script will automatically:
- Deploy the XMRT contract as an upgradeable proxy
- Generate ABI files for the frontend
- Create environment variable templates
- Save deployment information

## Integration with Frontend

After deployment:
1. Copy the contract address from deployment output
2. Add `VITE_XMRT_ADDRESS=<contract_address>` to Vercel environment variables
3. Redeploy the frontend on Vercel

The frontend will automatically use the deployed contract for all interactions.

