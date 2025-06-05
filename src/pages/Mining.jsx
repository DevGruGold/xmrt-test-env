import React from 'react';
import { Link } from 'react-router-dom';

const Mining = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-purple-400 bg-clip-text text-transparent">
          Mobile Monero Mining
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Mine Monero (XMR) on your mobile device through our integrated mining pool. Rewards are automatically distributed to users and developers in the XMRT ecosystem.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.mobilemonero.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start Mobile Mining →
          </a>
          <Link
            to="/analytics"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Mining Analytics →
          </Link>
        </div>
      </div>

      {/* Mining Pool Information */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-orange-400">
          Mining Pool Configuration
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Pool Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">Pool Address:</span>
                <span className="text-blue-400 font-mono text-sm break-all">46UxNFuGM2E3UwmZWWJicaRPoRwqwW4byQkaTHkX8yPcVihp91qAVtSFipWUGJJUyTXgzSqxzDQtNLf2bsp2DX2qCCgC5mg</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">Mining Algorithm:</span>
                <span className="text-orange-400 font-semibold">RandomX</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">Pool Fee:</span>
                <span className="text-green-400 font-semibold">1%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">Minimum Payout:</span>
                <span className="text-purple-400 font-semibold">0.1 XMR</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Reward Distribution</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">Miners Share:</span>
                <span className="text-green-400 font-semibold">70%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">Developers Share:</span>
                <span className="text-blue-400 font-semibold">20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">XMRT Treasury:</span>
                <span className="text-purple-400 font-semibold">9%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">Pool Operations:</span>
                <span className="text-orange-400 font-semibold">1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mining Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <a 
          href="https://www.mobilemonero.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
          <h3 className="text-xl font-semibold text-orange-400 mb-3 group-hover:text-orange-300">Mobile Mining App</h3>
          <p className="text-gray-300 text-sm">
            Download and start mining Monero directly from your mobile device with optimized algorithms.
          </p>
        </a>
        <Link 
          to="/analytics"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">Mining Analytics</h3>
          <p className="text-gray-300 text-sm">
            Track your mining performance, rewards, and pool statistics in real-time.
          </p>
        </Link>
        <Link 
          to="/staking"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
          <h3 className="text-xl font-semibold text-green-400 mb-3 group-hover:text-green-300">Reward Staking</h3>
          <p className="text-gray-300 text-sm">
            Stake your mining rewards to earn additional XMRT tokens and participate in governance.
          </p>
        </Link>
        <Link 
          to="/ai-agents"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
          <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300">AI Pool Management</h3>
          <p className="text-gray-300 text-sm">
            AI agents automatically optimize pool performance and manage reward distribution.
          </p>
        </Link>
        <Link 
          to="/cashdapp"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300">Banking Integration</h3>
          <p className="text-gray-300 text-sm">
            Seamlessly convert mining rewards to fiat or other cryptocurrencies through CashDapp.
          </p>
        </Link>
        <Link 
          to="/contracts"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📋</div>
          <h3 className="text-xl font-semibold text-red-400 mb-3 group-hover:text-red-300">Smart Contracts</h3>
          <p className="text-gray-300 text-sm">
            Transparent and automated reward distribution through verified smart contracts.
          </p>
        </Link>
      </div>

      {/* Mining Statistics */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-green-400">
          Pool Performance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-orange-400">Hash Rate</h3>
            <p className="text-3xl font-bold text-white">2.5 MH/s</p>
            <p className="text-gray-400 text-sm">Total pool hash rate</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="font-semibold text-blue-400">Active Miners</h3>
            <p className="text-3xl font-bold text-white">1,247</p>
            <p className="text-gray-400 text-sm">Currently mining</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">💎</div>
            <h3 className="font-semibold text-green-400">Blocks Found</h3>
            <p className="text-3xl font-bold text-white">847</p>
            <p className="text-gray-400 text-sm">This month</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold text-purple-400">Total Rewards</h3>
            <p className="text-3xl font-bold text-white">156.7 XMR</p>
            <p className="text-gray-400 text-sm">Distributed this month</p>
          </div>
        </div>
      </div>

      {/* How to Start Mining */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-purple-400">
          How to Start Mining
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-semibold text-blue-400 mb-3">1. Download App</h3>
            <p className="text-gray-400 text-sm">Visit mobilemonero.com and download the mining app for your device</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="font-semibold text-green-400 mb-3">2. Configure Pool</h3>
            <p className="text-gray-400 text-sm">Enter the XMRT pool address and configure your mining settings</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">⛏️</div>
            <h3 className="font-semibold text-orange-400 mb-3">3. Start Mining</h3>
            <p className="text-gray-400 text-sm">Begin mining and contribute to the Monero network while earning rewards</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-semibold text-purple-400 mb-3">4. Earn Rewards</h3>
            <p className="text-gray-400 text-sm">Receive automatic payouts and participate in the XMRT ecosystem</p>
          </div>
        </div>
      </div>

      {/* Mining Optimization Tips */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-400">
          Mining Optimization
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-4">Performance Tips</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                <span className="text-green-400 mr-3">💡</span>
                <span>Keep your device cool for optimal performance</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                <span className="text-blue-400 mr-3">🔋</span>
                <span>Mine when connected to power to preserve battery</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                <span className="text-purple-400 mr-3">📶</span>
                <span>Ensure stable internet connection for best results</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                <span className="text-orange-400 mr-3">⚙️</span>
                <span>Adjust thread count based on device capabilities</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Reward Maximization</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                <span className="text-yellow-400 mr-3">⏰</span>
                <span>Mine during off-peak hours for better efficiency</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                <span className="text-red-400 mr-3">🎯</span>
                <span>Maintain consistent mining for bonus rewards</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                <span className="text-cyan-400 mr-3">💎</span>
                <span>Stake rewards for additional XMRT tokens</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                <span className="text-pink-400 mr-3">🤝</span>
                <span>Refer friends to earn referral bonuses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="https://www.mobilemonero.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⛏️</div>
          <span className="font-semibold text-lg">Start Mining</span>
          <p className="text-orange-100 text-sm mt-2">Download mobile app</p>
        </a>
        <Link
          to="/analytics"
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
          <span className="font-semibold text-lg">View Analytics</span>
          <p className="text-blue-100 text-sm mt-2">Track performance</p>
        </Link>
        <Link
          to="/staking"
          className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💰</div>
          <span className="font-semibold text-lg">Stake Rewards</span>
          <p className="text-green-100 text-sm mt-2">Earn more tokens</p>
        </Link>
        <Link
          to="/cashdapp"
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <span className="font-semibold text-lg">Convert Rewards</span>
          <p className="text-purple-100 text-sm mt-2">Use CashDapp</p>
        </Link>
      </div>
    </div>
  );
};

export default Mining;

