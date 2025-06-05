import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Developer = () => {
  const [activeTab, setActiveTab] = useState('contracts');

  const tabs = [
    { id: 'contracts', name: 'Smart Contracts', icon: '📋' },
    { id: 'deployment', name: 'Deployment', icon: '🚀' },
    { id: 'api', name: 'API Documentation', icon: '📚' },
    { id: 'tools', name: 'Developer Tools', icon: '🛠️' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contracts':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Smart Contract Dashboard</h3>
            
            {/* Contract Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">XMRT Token</h4>
                  <div className="text-2xl">💎</div>
                </div>
                <div className="text-sm text-green-400 mb-2">✅ Deployed</div>
                <div className="text-xs text-gray-400 font-mono break-all">
                  0x742d35Cc6634C0532925a3b8D4C9db4C4C4C4C4C
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-orange-400">Monero Pool</h4>
                  <div className="text-2xl">⛏️</div>
                </div>
                <div className="text-sm text-green-400 mb-2">✅ Deployed</div>
                <div className="text-xs text-gray-400 font-mono break-all">
                  0x8f3e2B1a9C7d6E5f4A3b2C1d9E8f7A6b5C4d3E2f
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-green-400">Banking Integration</h4>
                  <div className="text-2xl">🏦</div>
                </div>
                <div className="text-sm text-green-400 mb-2">✅ Deployed</div>
                <div className="text-xs text-gray-400 font-mono break-all">
                  0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-purple-400">DAO Governance</h4>
                  <div className="text-2xl">🗳️</div>
                </div>
                <div className="text-sm text-green-400 mb-2">✅ Deployed</div>
                <div className="text-xs text-gray-400 font-mono break-all">
                  0x9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d
                </div>
              </div>
            </div>

            {/* Contract Functions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Contract Functions</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">stake(uint256 amount)</span>
                    <span className="text-blue-400">📋 Call</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">unstake(uint256 amount)</span>
                    <span className="text-blue-400">📋 Call</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">claimRewards()</span>
                    <span className="text-blue-400">📋 Call</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">getStakingInfo(address)</span>
                    <span className="text-green-400">👁️ View</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-400 mb-4">Contract Events</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-800 rounded">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-semibold">Stake</span>
                      <span className="text-xs text-gray-400">2 mins ago</span>
                    </div>
                    <div className="text-sm text-gray-400">User staked 1,000 XMRT</div>
                  </div>
                  <div className="p-3 bg-gray-800 rounded">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-semibold">Reward</span>
                      <span className="text-xs text-gray-400">5 mins ago</span>
                    </div>
                    <div className="text-sm text-gray-400">Rewards distributed: 50 XMRT</div>
                  </div>
                  <div className="p-3 bg-gray-800 rounded">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-semibold">Transfer</span>
                      <span className="text-xs text-gray-400">8 mins ago</span>
                    </div>
                    <div className="text-sm text-gray-400">Token transfer: 500 XMRT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'deployment':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Deployment Configuration</h3>
            
            {/* Network Configuration */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Network Settings</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Network</label>
                    <select className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none">
                      <option>Sepolia Testnet</option>
                      <option>Ethereum Mainnet</option>
                      <option>Polygon</option>
                      <option>Arbitrum</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">RPC URL</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="https://sepolia.infura.io/v3/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Private Key</label>
                    <input
                      type="password"
                      className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="0x..."
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-400 mb-4">Deployment Status</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Compilation</span>
                    <span className="text-green-400">✅ Complete</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Gas Estimation</span>
                    <span className="text-green-400">✅ Complete</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Contract Deployment</span>
                    <span className="text-green-400">✅ Complete</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Verification</span>
                    <span className="text-yellow-400">⏳ Pending</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deployment Actions */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Deployment Actions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-semibold transition-colors">
                  Deploy Contracts
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-semibold transition-colors">
                  Verify Contracts
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg font-semibold transition-colors">
                  Update Config
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg font-semibold transition-colors">
                  Generate ABI
                </button>
              </div>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">API Documentation</h3>
            
            {/* API Endpoints */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Available Endpoints</h4>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold mr-3">GET</span>
                    <span className="font-mono text-white">/api/v1/staking/info</span>
                  </div>
                  <p className="text-gray-400 text-sm">Get staking information for a user</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold mr-3">POST</span>
                    <span className="font-mono text-white">/api/v1/staking/stake</span>
                  </div>
                  <p className="text-gray-400 text-sm">Stake XMRT tokens</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold mr-3">GET</span>
                    <span className="font-mono text-white">/api/v1/mining/stats</span>
                  </div>
                  <p className="text-gray-400 text-sm">Get mining statistics and rewards</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold mr-3">GET</span>
                    <span className="font-mono text-white">/api/v1/dao/proposals</span>
                  </div>
                  <p className="text-gray-400 text-sm">Get active DAO proposals</p>
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-400 mb-4">Code Examples</h4>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-sm text-gray-400 mb-2">JavaScript Example:</div>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`const response = await fetch('/api/v1/staking/info', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const stakingInfo = await response.json();
console.log(stakingInfo);`}
                </pre>
              </div>
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Developer Tools</h3>
            
            {/* Development Tools */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Blockchain Tools</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Contract Compiler</span>
                    <span className="text-blue-400">🔧 Use</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Gas Calculator</span>
                    <span className="text-blue-400">🔧 Use</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">ABI Generator</span>
                    <span className="text-blue-400">🔧 Use</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Transaction Monitor</span>
                    <span className="text-blue-400">🔧 Use</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-400 mb-4">Testing Tools</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Unit Test Runner</span>
                    <span className="text-green-400">▶️ Run</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Integration Tests</span>
                    <span className="text-green-400">▶️ Run</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Security Audit</span>
                    <span className="text-green-400">▶️ Run</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Performance Test</span>
                    <span className="text-green-400">▶️ Run</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Environment Variables */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Environment Configuration</h4>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-sm text-gray-400 mb-2">Environment Variables:</div>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`VITE_SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/...
VITE_ALCHEMY_API_KEY=HPua2YZ0vA5Yj8XTJH1j8HNVYvMWbifr
VITE_THIRDWEB_CLIENT_ID=0dcf50123825af0a59b5a3ad2be69639
VITE_MONERO_POOL_WALLET=46UxNFuGM2E3UwmZWWJicaRPoRwqwW4byQkaTHkX8yPcVihp91qAVtSFipWUGJJUyTXgzSqxzDQtNLf2bsp2DX2qCCgC5mg`}
                </pre>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Developer Dashboard
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Comprehensive developer tools for smart contract management, deployment configuration, 
          API documentation, and testing utilities for the XMRT ecosystem.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-800 p-2 rounded-xl mb-8 shadow-lg">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        {renderTabContent()}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <button
          onClick={() => setActiveTab('deployment')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🚀</div>
          <span className="font-semibold text-lg">Deploy Contracts</span>
          <p className="text-blue-100 text-sm mt-2">Start deployment</p>
        </button>
        <button
          onClick={() => setActiveTab('api')}
          className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📚</div>
          <span className="font-semibold text-lg">API Docs</span>
          <p className="text-green-100 text-sm mt-2">View documentation</p>
        </button>
        <button
          onClick={() => setActiveTab('tools')}
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🛠️</div>
          <span className="font-semibold text-lg">Dev Tools</span>
          <p className="text-orange-100 text-sm mt-2">Access utilities</p>
        </button>
        <Link
          to="/analytics"
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
          <span className="font-semibold text-lg">Analytics</span>
          <p className="text-purple-100 text-sm mt-2">View metrics</p>
        </Link>
      </div>
    </div>
  );
};

export default Developer;

