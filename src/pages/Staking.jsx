import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundMiner from '../components/BackgroundMiner';

const Staking = () => {
  const [stakedAmount, setStakedAmount] = useState(5000);
  const [stakeInput, setStakeInput] = useState('');
  const [rewards, setRewards] = useState(247.83);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BackgroundMiner page="Staking" />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          XMRT Staking & Rewards
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Stake your XMRT tokens to earn rewards while supporting the network. 
          Earn additional XMR through background mobile mining while you stake.
        </p>
        
        {/* Mining Integration Notice */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-white">
            <span className="text-lg">⛏️</span>
            <span className="font-semibold">Mobile Mining Active</span>
            <span className="text-sm opacity-90">- Earning XMR while staking XMRT</span>
          </div>
        </div>
      </div>

      {/* Staking Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Staking Stats */}
        <div className="lg:col-span-2 bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6">Your Staking Portfolio</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {stakedAmount.toLocaleString()} XMRT
              </div>
              <div className="text-gray-400">Total Staked</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {rewards.toFixed(2)} XMRT
              </div>
              <div className="text-gray-400">Rewards Earned</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                12.5%
              </div>
              <div className="text-gray-400">Annual APY</div>
            </div>
          </div>

          {/* Staking Actions */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Amount to Stake
              </label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  value={stakeInput}
                  onChange={(e) => setStakeInput(e.target.value)}
                  className="flex-1 p-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Enter XMRT amount"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Stake
                </button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Claim Rewards
              </button>
              <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Unstake
              </button>
            </div>
          </div>
        </div>

        {/* Staking Info */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Staking Benefits</h3>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-green-400 mr-3">✓</span>
              <span className="text-gray-300">12.5% Annual APY</span>
            </div>
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-green-400 mr-3">✓</span>
              <span className="text-gray-300">Governance Voting Rights</span>
            </div>
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-green-400 mr-3">✓</span>
              <span className="text-gray-300">Flexible Lock Periods</span>
            </div>
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-orange-400 mr-3">⛏️</span>
              <span className="text-gray-300">Background XMR Mining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Rewards Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-xl shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          💎 Dual Rewards System
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-black/20 rounded-lg">
            <div className="text-4xl mb-4">💎</div>
            <h4 className="text-xl font-semibold text-blue-400 mb-3">XMRT Staking Rewards</h4>
            <p className="text-gray-300 mb-4">
              Earn 12.5% APY on your staked XMRT tokens with flexible lock periods and governance rights.
            </p>
            <div className="text-2xl font-bold text-green-400">12.5% APY</div>
          </div>
          
          <div className="text-center p-6 bg-black/20 rounded-lg">
            <div className="text-4xl mb-4">⛏️</div>
            <h4 className="text-xl font-semibold text-orange-400 mb-3">Mobile XMR Mining</h4>
            <p className="text-gray-300 mb-4">
              Simultaneously mine Monero on your mobile device while staking, earning additional XMR rewards.
            </p>
            <div className="text-2xl font-bold text-orange-400">300-500 H/s</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to="/mining"
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⛏️</div>
          <span className="font-semibold text-lg">Mobile Mining</span>
          <p className="text-orange-100 text-sm mt-2">Boost earnings</p>
        </Link>
        <Link
          to="/analytics"
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
          <span className="font-semibold text-lg">View Analytics</span>
          <p className="text-blue-100 text-sm mt-2">Track rewards</p>
        </Link>
        <Link
          to="/dao"
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🗳️</div>
          <span className="font-semibold text-lg">DAO Governance</span>
          <p className="text-purple-100 text-sm mt-2">Vote on proposals</p>
        </Link>
        <Link
          to="/banking"
          className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <span className="font-semibold text-lg">Banking</span>
          <p className="text-green-100 text-sm mt-2">Manage funds</p>
        </Link>
      </div>
    </div>
  );
};

export default Staking;

