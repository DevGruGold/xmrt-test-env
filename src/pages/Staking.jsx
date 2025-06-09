import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundMiner from '../components/BackgroundMiner';

const Staking = () => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [stakingPeriod, setStakingPeriod] = useState('30');

  const calculateRewards = () => {
    const amount = parseFloat(stakeAmount) || 0;
    const period = parseInt(stakingPeriod);
    const annualRate = 0.12; // 12% APY
    const dailyRate = annualRate / 365;
    return (amount * dailyRate * period).toFixed(6);
  };

  return (
    <div className="page-container">
      <BackgroundMiner page="Staking" />
      
      <div className="container-main py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-responsive-3xl font-bold mb-6 text-gradient-primary">
            XMRT.io Token Staking
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stake your XMRT.io tokens to earn rewards while supporting the ecosystem. 
            Combine staking rewards with mobile mining for maximum earnings.
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-feature">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">12% APY</h3>
              <p className="text-gray-300">Competitive annual percentage yield on staked tokens</p>
            </div>
            <div className="card-feature">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">Dual Rewards</h3>
              <p className="text-gray-300">Earn staking rewards + mobile mining simultaneously</p>
            </div>
            <div className="card-feature">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Governance Rights</h3>
              <p className="text-gray-300">Participate in DAO decisions and ecosystem governance</p>
            </div>
          </div>
        </div>

        {/* Staking Interface */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Staking Form */}
          <div className="card-primary">
            <h2 className="text-2xl font-bold text-white mb-6">Stake XMRT.io Tokens</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Amount to Stake (XMRT.io)
                </label>
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus-ring"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Staking Period (Days)
                </label>
                <select
                  value={stakingPeriod}
                  onChange={(e) => setStakingPeriod(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus-ring"
                >
                  <option value="30">30 Days (Flexible)</option>
                  <option value="90">90 Days (+2% Bonus)</option>
                  <option value="180">180 Days (+5% Bonus)</option>
                  <option value="365">365 Days (+10% Bonus)</option>
                </select>
              </div>

              {/* Rewards Calculation */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Estimated Rewards:</span>
                  <span className="text-green-400 font-semibold">{calculateRewards()} XMRT.io</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">APY:</span>
                  <span className="text-blue-400 font-semibold">12%</span>
                </div>
              </div>

              <button className="btn-primary w-full py-4 text-lg">
                Stake Tokens
              </button>
            </div>
          </div>

          {/* Staking Stats */}
          <div className="space-y-6">
            <div className="card-primary">
              <h3 className="text-xl font-semibold text-white mb-4">Your Staking Portfolio</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                  <span className="text-gray-300">Total Staked</span>
                  <span className="text-blue-400 font-semibold">0 XMRT.io</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                  <span className="text-gray-300">Pending Rewards</span>
                  <span className="text-green-400 font-semibold">0 XMRT.io</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                  <span className="text-gray-300">Total Earned</span>
                  <span className="text-purple-400 font-semibold">0 XMRT.io</span>
                </div>
              </div>
            </div>

            <div className="card-primary">
              <h3 className="text-xl font-semibold text-white mb-4">Pool Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                  <span className="text-gray-300">Total Value Locked</span>
                  <span className="text-orange-400 font-semibold">$2.4M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                  <span className="text-gray-300">Total Stakers</span>
                  <span className="text-blue-400 font-semibold">1,247</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                  <span className="text-gray-300">Average APY</span>
                  <span className="text-green-400 font-semibold">12.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Rewards Section */}
        <div className="card-feature mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              🔄 Dual Rewards System
            </h2>
            <p className="text-xl text-gray-300">
              Maximize your earnings by combining staking rewards with mobile mining
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">💎 Staking Rewards</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 12% APY on staked XMRT.io tokens</li>
                <li>• Bonus rates for longer lock periods</li>
                <li>• Governance voting rights</li>
                <li>• Compound rewards automatically</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">⛏️ Mining Rewards</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Mine XMR on mobile devices</li>
                <li>• 300-500 H/s average hashrate</li>
                <li>• Pool rewards distributed hourly</li>
                <li>• Background mining while staking</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/mining"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>⛏️</span>
              <span>Start Mobile Mining</span>
            </Link>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            How Staking Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Deposit Tokens</h3>
              <p className="text-gray-300 text-sm">Stake your XMRT.io tokens in the smart contract</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">Earn Rewards</h3>
              <p className="text-gray-300 text-sm">Automatically earn 12% APY on your staked tokens</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Participate</h3>
              <p className="text-gray-300 text-sm">Vote on governance proposals and ecosystem decisions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4️⃣</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Compound</h3>
              <p className="text-gray-300 text-sm">Reinvest rewards for exponential growth</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/analytics"
            className="card-primary text-center group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
            <span className="font-semibold text-lg text-blue-400">View Analytics</span>
            <p className="text-gray-400 text-sm mt-2">Track performance</p>
          </Link>

          <Link
            to="/dao"
            className="card-primary text-center group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🗳️</div>
            <span className="font-semibold text-lg text-purple-400">DAO Governance</span>
            <p className="text-gray-400 text-sm mt-2">Vote on proposals</p>
          </Link>

          <Link
            to="/banking"
            className="card-primary text-center group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏦</div>
            <span className="font-semibold text-lg text-green-400">Banking</span>
            <p className="text-gray-400 text-sm mt-2">Manage funds</p>
          </Link>

          <Link
            to="/mining"
            className="card-primary text-center group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⛏️</div>
            <span className="font-semibold text-lg text-orange-400">Start Mining</span>
            <p className="text-gray-400 text-sm mt-2">Dual rewards</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Staking;

