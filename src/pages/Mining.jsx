import React from 'react';

const Mining = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
        Monero Mining Pool
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Pool Configuration
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Pool Wallet:</span>
              <span className="text-blue-400 text-sm break-all">
                46UxNFuGM2E3UwmZWWJicaRPoRwqwW4byQkaTHkX8yPcVihp91qAVtSFipWUGJJUyTXgzSqxzDQtNLf2bsp2DX2qCCgC5mg
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Mining Platform:</span>
              <span className="text-blue-400">mobilemonero.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Distribution:</span>
              <span className="text-green-400">Automated</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Mining Features
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Mobile Monero mining
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Automatic pool distribution
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Developer reward sharing
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Transparent tracking
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          Smart Contract Functions
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">registerMiner(address miner)</code>
            <p className="text-gray-400 mt-2 text-sm">Register a new miner in the pool</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">distributeRewards(uint256 amount)</code>
            <p className="text-gray-400 mt-2 text-sm">Distribute mining rewards to participants</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">updateMinerData(address miner, uint256 hashrate)</code>
            <p className="text-gray-400 mt-2 text-sm">Update miner performance data</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">claimMiningRewards()</code>
            <p className="text-gray-400 mt-2 text-sm">Claim accumulated mining rewards</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          Integration Status
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Mobile Monero Integration</span>
            <span className="text-yellow-400">In Development</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Pool Contract Deployment</span>
            <span className="text-yellow-400">Ready</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Reward Distribution System</span>
            <span className="text-green-400">Implemented</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mining;

