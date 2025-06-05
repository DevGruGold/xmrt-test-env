import React from 'react';

const Staking = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
        XMRT Staking System
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Staking Features
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Flexible staking periods
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Automatic reward calculation
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              5% annual reward rate
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Instant unstaking available
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Smart Contract Functions
          </h2>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-900 p-3 rounded">
              <code className="text-blue-300">stake(uint256 amount)</code>
              <p className="text-gray-400 mt-1">Stake XMRT tokens to earn rewards</p>
            </div>
            <div className="bg-gray-900 p-3 rounded">
              <code className="text-blue-300">unstake(uint256 amount)</code>
              <p className="text-gray-400 mt-1">Unstake tokens and claim rewards</p>
            </div>
            <div className="bg-gray-900 p-3 rounded">
              <code className="text-blue-300">claimRewards()</code>
              <p className="text-gray-400 mt-1">Claim accumulated staking rewards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          Deployment Status
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">Pending</div>
            <div className="text-gray-400">Contract Deployment</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">Ready</div>
            <div className="text-gray-400">Testing Suite</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">Active</div>
            <div className="text-gray-400">Documentation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;

