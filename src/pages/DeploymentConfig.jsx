import React, { useState } from 'react';

const DeploymentConfig = () => {
  const [config, setConfig] = useState({
    // Mining Pool Configuration
    moneroPoolWallet: '46UxNFuGM2E3UwmZWWJicaRPoRwqwW4byQkaTHkX8yPcVihp91qAVtSFipWUGJJUyTXgzSqxzDQtNLf2bsp2DX2qCCgC5mg',
    
    // Blockchain Configuration
    sepoliaRpcUrl: 'https://sepolia.infura.io/v3/c843a693bc5d43d1aee471d2491f2414',
    alchemyApiKey: 'HPua2YZ0vA5Yj8XTJH1j8HNVYvMWbifr',
    etherscanApiKey: '',
    privateKey: '',
    
    // ThirdWeb Configuration
    thirdwebClientId: '0dcf50123825af0a59b5a3ad2be69639',
    walletConnectProjectId: '6054bd6688c6860ed806775db1c24f15',
    
    // Smart Contract Configuration
    tokenName: 'XMRT',
    tokenSymbol: 'XMRT',
    initialSupply: '1000000000',
    stakingRewardRate: '100',
    governanceThreshold: '1000',
    
    // CashDapp Integration
    cashdappUrl: 'https://coldcash.vercel.app',
    cashdappApiKey: '',
    
    // Mobile Monero Integration
    mobileMoneroUrl: 'https://www.mobilemonero.com',
    mobileMoneroApiKey: '',
    
    // AI Agent Configuration
    humeApiKey: '',
    openaiApiKey: '',
    anthropicApiKey: '',
    
    // Deployment Configuration
    deploymentNetwork: 'sepolia',
    gasLimit: '5000000',
    gasPrice: '20',
    
    // Vercel Configuration
    vercelToken: '',
    vercelProjectId: '',
    vercelOrgId: ''
  });

  const [activeTab, setActiveTab] = useState('blockchain');

  const handleInputChange = (field, value) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateEnvVariables = () => {
    return `# XMRT Ecosystem Environment Variables
# Copy these to your Vercel project settings

# Blockchain Configuration
VITE_SEPOLIA_RPC_URL=${config.sepoliaRpcUrl}
VITE_ALCHEMY_API_KEY=${config.alchemyApiKey}
VITE_ETHERSCAN_API_KEY=${config.etherscanApiKey}
PRIVATE_KEY=${config.privateKey}

# ThirdWeb Configuration
VITE_THIRDWEB_CLIENT_ID=${config.thirdwebClientId}
VITE_WALLETCONNECT_PROJECT_ID=${config.walletConnectProjectId}

# Mining Pool Configuration
VITE_MONERO_POOL_WALLET=${config.moneroPoolWallet}

# Smart Contract Configuration
VITE_TOKEN_NAME=${config.tokenName}
VITE_TOKEN_SYMBOL=${config.tokenSymbol}
VITE_INITIAL_SUPPLY=${config.initialSupply}
VITE_STAKING_REWARD_RATE=${config.stakingRewardRate}
VITE_GOVERNANCE_THRESHOLD=${config.governanceThreshold}

# Integration APIs
VITE_CASHDAPP_URL=${config.cashdappUrl}
VITE_CASHDAPP_API_KEY=${config.cashdappApiKey}
VITE_MOBILE_MONERO_URL=${config.mobileMoneroUrl}
VITE_MOBILE_MONERO_API_KEY=${config.mobileMoneroApiKey}

# AI Agent Configuration
VITE_HUME_API_KEY=${config.humeApiKey}
VITE_OPENAI_API_KEY=${config.openaiApiKey}
VITE_ANTHROPIC_API_KEY=${config.anthropicApiKey}

# Deployment Configuration
VITE_DEPLOYMENT_NETWORK=${config.deploymentNetwork}
VITE_GAS_LIMIT=${config.gasLimit}
VITE_GAS_PRICE=${config.gasPrice}`;
  };

  const generateHardhatConfig = () => {
    return `require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: "${config.sepoliaRpcUrl}",
      accounts: ["${config.privateKey}"],
      gasPrice: ${config.gasPrice}000000000,
      gas: ${config.gasLimit}
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
      accounts: ["${config.privateKey}"],
      gasPrice: 20000000000,
      gas: 5000000
    }
  },
  etherscan: {
    apiKey: "${config.etherscanApiKey}"
  }
};`;
  };

  const generateDeploymentScript = () => {
    return `const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying XMRT Master Smart Contract...");
  
  // Deploy XMRT Token
  const XMRT = await ethers.getContractFactory("XMRT");
  const xmrt = await XMRT.deploy(
    "${config.tokenName}",
    "${config.tokenSymbol}",
    ethers.utils.parseEther("${config.initialSupply}")
  );
  await xmrt.deployed();
  console.log("XMRT Token deployed to:", xmrt.address);
  
  // Deploy Monero Pool
  const MoneroPool = await ethers.getContractFactory("MoneroPool");
  const moneroPool = await MoneroPool.deploy(
    xmrt.address,
    "${config.moneroPoolWallet}",
    ${config.stakingRewardRate}
  );
  await moneroPool.deployed();
  console.log("Monero Pool deployed to:", moneroPool.address);
  
  // Deploy CashDapp Integration
  const CashDappIntegration = await ethers.getContractFactory("CashDappIntegration");
  const cashDappIntegration = await CashDappIntegration.deploy(
    xmrt.address,
    "${config.cashdappUrl}"
  );
  await cashDappIntegration.deployed();
  console.log("CashDapp Integration deployed to:", cashDappIntegration.address);
  
  // Deploy DAO Governance
  const XMRTGovernance = await ethers.getContractFactory("XMRTGovernance");
  const governance = await XMRTGovernance.deploy(
    xmrt.address,
    ethers.utils.parseEther("${config.governanceThreshold}")
  );
  await governance.deployed();
  console.log("XMRT Governance deployed to:", governance.address);
  
  // Set up integrations
  await xmrt.setMoneroPool(moneroPool.address);
  await xmrt.setCashDappIntegration(cashDappIntegration.address);
  await xmrt.setGovernance(governance.address);
  
  console.log("\\n=== DEPLOYMENT COMPLETE ===");
  console.log("XMRT Token:", xmrt.address);
  console.log("Monero Pool:", moneroPool.address);
  console.log("CashDapp Integration:", cashDappIntegration.address);
  console.log("Governance:", governance.address);
  console.log("\\nSave these addresses for frontend integration!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
        XMRT Deployment Configuration
      </h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 bg-gray-800 p-2 rounded-lg">
        {[
          { id: 'blockchain', label: 'Blockchain' },
          { id: 'contracts', label: 'Smart Contracts' },
          { id: 'integrations', label: 'Integrations' },
          { id: 'ai', label: 'AI Agents' },
          { id: 'deployment', label: 'Deployment' },
          { id: 'output', label: 'Generated Config' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded transition-colors ${
              activeTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Blockchain Configuration */}
      {activeTab === 'blockchain' && (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-green-400">Blockchain Configuration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Sepolia RPC URL</label>
              <input
                type="text"
                value={config.sepoliaRpcUrl}
                onChange={(e) => handleInputChange('sepoliaRpcUrl', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="https://sepolia.infura.io/v3/..."
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Alchemy API Key</label>
              <input
                type="text"
                value={config.alchemyApiKey}
                onChange={(e) => handleInputChange('alchemyApiKey', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your Alchemy API key"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Etherscan API Key</label>
              <input
                type="text"
                value={config.etherscanApiKey}
                onChange={(e) => handleInputChange('etherscanApiKey', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your Etherscan API key"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Private Key (Deployment Wallet)</label>
              <input
                type="password"
                value={config.privateKey}
                onChange={(e) => handleInputChange('privateKey', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="0x..."
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">ThirdWeb Client ID</label>
              <input
                type="text"
                value={config.thirdwebClientId}
                onChange={(e) => handleInputChange('thirdwebClientId', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your ThirdWeb client ID"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">WalletConnect Project ID</label>
              <input
                type="text"
                value={config.walletConnectProjectId}
                onChange={(e) => handleInputChange('walletConnectProjectId', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your WalletConnect project ID"
              />
            </div>
          </div>
        </div>
      )}

      {/* Smart Contracts Configuration */}
      {activeTab === 'contracts' && (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">Smart Contract Configuration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Token Name</label>
              <input
                type="text"
                value={config.tokenName}
                onChange={(e) => handleInputChange('tokenName', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="XMRT"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Token Symbol</label>
              <input
                type="text"
                value={config.tokenSymbol}
                onChange={(e) => handleInputChange('tokenSymbol', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="XMRT"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Initial Supply</label>
              <input
                type="text"
                value={config.initialSupply}
                onChange={(e) => handleInputChange('initialSupply', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="1000000000"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Staking Reward Rate (%)</label>
              <input
                type="text"
                value={config.stakingRewardRate}
                onChange={(e) => handleInputChange('stakingRewardRate', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="100"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Governance Threshold</label>
              <input
                type="text"
                value={config.governanceThreshold}
                onChange={(e) => handleInputChange('governanceThreshold', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="1000"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Monero Pool Wallet</label>
              <input
                type="text"
                value={config.moneroPoolWallet}
                onChange={(e) => handleInputChange('moneroPoolWallet', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="46UxNFuGM2E3UwmZWWJicaRPoRwqwW4byQkaTHkX8yPcVihp91qAVtSFipWUGJJUyTXgzSqxzDQtNLf2bsp2DX2qCCgC5mg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Integrations Configuration */}
      {activeTab === 'integrations' && (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-orange-400">Platform Integrations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">CashDapp URL</label>
              <input
                type="text"
                value={config.cashdappUrl}
                onChange={(e) => handleInputChange('cashdappUrl', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="https://coldcash.vercel.app"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">CashDapp API Key</label>
              <input
                type="password"
                value={config.cashdappApiKey}
                onChange={(e) => handleInputChange('cashdappApiKey', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your CashDapp API key"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Mobile Monero URL</label>
              <input
                type="text"
                value={config.mobileMoneroUrl}
                onChange={(e) => handleInputChange('mobileMoneroUrl', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="https://www.mobilemonero.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Mobile Monero API Key</label>
              <input
                type="password"
                value={config.mobileMoneroApiKey}
                onChange={(e) => handleInputChange('mobileMoneroApiKey', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your Mobile Monero API key"
              />
            </div>
          </div>
        </div>
      )}

      {/* AI Agents Configuration */}
      {activeTab === 'ai' && (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-red-400">AI Agent Configuration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Hume AI API Key</label>
              <input
                type="password"
                value={config.humeApiKey}
                onChange={(e) => handleInputChange('humeApiKey', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your Hume AI API key"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">OpenAI API Key</label>
              <input
                type="password"
                value={config.openaiApiKey}
                onChange={(e) => handleInputChange('openaiApiKey', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your OpenAI API key"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Anthropic API Key</label>
              <input
                type="password"
                value={config.anthropicApiKey}
                onChange={(e) => handleInputChange('anthropicApiKey', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your Anthropic API key"
              />
            </div>
          </div>
        </div>
      )}

      {/* Deployment Configuration */}
      {activeTab === 'deployment' && (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">Deployment Configuration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Deployment Network</label>
              <select
                value={config.deploymentNetwork}
                onChange={(e) => handleInputChange('deploymentNetwork', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
              >
                <option value="sepolia">Sepolia Testnet</option>
                <option value="mainnet">Ethereum Mainnet</option>
                <option value="polygon">Polygon</option>
                <option value="arbitrum">Arbitrum</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Gas Limit</label>
              <input
                type="text"
                value={config.gasLimit}
                onChange={(e) => handleInputChange('gasLimit', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="5000000"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Gas Price (Gwei)</label>
              <input
                type="text"
                value={config.gasPrice}
                onChange={(e) => handleInputChange('gasPrice', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="20"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Vercel Token (Optional)</label>
              <input
                type="password"
                value={config.vercelToken}
                onChange={(e) => handleInputChange('vercelToken', e.target.value)}
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-600 focus:border-blue-500"
                placeholder="Your Vercel deployment token"
              />
            </div>
          </div>
        </div>
      )}

      {/* Generated Configuration Output */}
      {activeTab === 'output' && (
        <div className="space-y-6">
          {/* Environment Variables */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-blue-400">Environment Variables</h2>
              <button
                onClick={() => copyToClipboard(generateEnvVariables())}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                Copy to Clipboard
              </button>
            </div>
            <pre className="bg-gray-900 p-4 rounded text-sm text-green-400 overflow-x-auto">
              {generateEnvVariables()}
            </pre>
          </div>

          {/* Hardhat Configuration */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-purple-400">Hardhat Configuration</h2>
              <button
                onClick={() => copyToClipboard(generateHardhatConfig())}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
              >
                Copy to Clipboard
              </button>
            </div>
            <pre className="bg-gray-900 p-4 rounded text-sm text-green-400 overflow-x-auto">
              {generateHardhatConfig()}
            </pre>
          </div>

          {/* Deployment Script */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-orange-400">Deployment Script</h2>
              <button
                onClick={() => copyToClipboard(generateDeploymentScript())}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition-colors"
              >
                Copy to Clipboard
              </button>
            </div>
            <pre className="bg-gray-900 p-4 rounded text-sm text-green-400 overflow-x-auto">
              {generateDeploymentScript()}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeploymentConfig;

