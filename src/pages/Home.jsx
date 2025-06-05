import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">
          XMRT Test Environment
        </h1>
        <p className="text-xl text-gray-300">
          Smart Contract Deployment and Testing Platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            🚀 Smart Contract Deployment
          </h2>
          <p className="text-gray-300 mb-4">
            Deploy and test XMRT smart contracts on Sepolia testnet.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Network:</span>
              <span className="text-blue-400">Sepolia Testnet</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span className="text-yellow-400">Ready for Deployment</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            🏗️ Contract Features
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>• ERC20 Token (XMRT)</li>
            <li>• Staking & Rewards System</li>
            <li>• DAO Governance</li>
            <li>• Monero Pool Integration</li>
            <li>• AI Agent Management</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          📋 Deployment Instructions
        </h2>
        <div className="space-y-4 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">1. Environment Setup</h3>
            <pre className="bg-gray-900 p-3 rounded text-sm overflow-x-auto">
              <code>{`# Install dependencies for smart contracts
cp contracts-package.json package-contracts.json
npm install --save-dev hardhat @openzeppelin/contracts`}</code>
            </pre>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">2. Configure Environment</h3>
            <pre className="bg-gray-900 p-3 rounded text-sm overflow-x-auto">
              <code>{`# Create .env file with:
PRIVATE_KEY=your_private_key_here
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your_infura_key
ETHERSCAN_API_KEY=your_etherscan_api_key`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">3. Deploy Contracts</h3>
            <pre className="bg-gray-900 p-3 rounded text-sm overflow-x-auto">
              <code>{`# Compile and deploy to Sepolia
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
npx hardhat run scripts/verify.js --network sepolia`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-blue-400">Documentation</h3>
          <p className="text-gray-300 text-sm">
            Complete guides for contract deployment and testing
          </p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-green-400">Testing Suite</h3>
          <p className="text-gray-300 text-sm">
            Comprehensive tests for all contract functionality
          </p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-purple-400">AI Agents</h3>
          <p className="text-gray-300 text-sm">
            Automated DAO management and decision making
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

