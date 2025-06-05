# Deploying XMRT Test Environment to Vercel

This guide provides instructions for deploying the XMRT Test Environment to Vercel.

## Prerequisites

1. A Vercel account
2. The GitHub repository has been created at: https://github.com/DevGruGold/xmrt-test-env

## Deployment Steps

### 1. Connect to Vercel

1. Go to [Vercel](https://vercel.com/) and sign in or create an account
2. Click "Add New..." and select "Project"
3. Connect your GitHub account if not already connected
4. Select the "xmrt-test-env" repository

### 2. Configure Project

1. Keep the default settings:
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: dist

2. Add Environment Variables:
   - VITE_HUME_API_KEY: `tZ3HmPpSCUo0LIZY5KS2IGuRj7idUeiU1uWsGmrcE0gehx4b29pjqWue6YNbXGtn`
   - VITE_SEPOLIA_RPC_URL: (Add your Infura or other provider URL)
   - VITE_XMART_ADDRESS: (Add the deployed contract address after deployment)
   - VITE_MONERO_POOL_ADDRESS: (Add the deployed contract address after deployment)
   - VITE_CASH_DAPP_ADDRESS: (Add the deployed contract address after deployment)

3. Click "Deploy"

### 3. Automatic Deployments

Once connected, Vercel will automatically deploy updates when you push changes to the main branch of your GitHub repository.

### 4. Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click on "Domains"
3. Add your custom domain and follow the instructions to configure DNS settings

## Testing the Deployment

After deployment, Vercel will provide a URL where your application is hosted (e.g., https://xmrt-test-env.vercel.app).

Visit this URL to ensure that your application is working correctly.

## Troubleshooting

If you encounter any issues with the deployment:

1. Check the build logs in Vercel for any errors
2. Ensure all environment variables are correctly set
3. Verify that the smart contract addresses are correct after deployment to testnet
4. Check that the Hume API key is valid

## Next Steps

1. Deploy the smart contracts to Sepolia testnet
2. Update the contract addresses in the Vercel environment variables
3. Set up the AI agents to interact with the deployed contracts

