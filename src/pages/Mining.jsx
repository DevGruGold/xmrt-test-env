import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PoolStatsDisplay, PoolPerformanceChart } from '../components/PoolDataComponents';

const Mining = () => {
  const [isMining, setIsMining] = useState(false);
  const poolWallet = "46UxNFuGM2E3UwmZWWJicaRPoRwqwW4byQkaTHkX8yPcVihp91qAVtSFipWUGJJUyTXgzSqxzDQtNLf2bsp2DX2qCCgC5mg";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 bg-clip-text text-transparent">
          Revolutionary Mobile Monero Mining
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
          The world's first user-friendly mobile Monero mining solution. Mine XMR on any Android device 
          with our breakthrough technology that makes mining accessible to millions of mobile users.
        </p>
        
        {/* Innovation Highlight */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-xl mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">🚀 World's First Mobile-Friendly Monero Mining</h2>
          <div className="grid md:grid-cols-3 gap-4 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">300-500 H/s</div>
              <div className="text-sm opacity-90">Average Android Phone</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">FREE</div>
              <div className="text-sm opacity-90">No Cost vs Paid Apps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">3 Steps</div>
              <div className="text-sm opacity-90">Simple Copy-Paste Setup</div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Pool Statistics */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          📊 Live SupportXMR Pool Results
        </h2>
        <PoolStatsDisplay walletAddress={poolWallet} />
      </div>

      {/* Mining Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Mining Control */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Mining Dashboard</h3>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isMining ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
              <span className="text-gray-300">{isMining ? 'Mining Active' : 'Mining Stopped'}</span>
            </div>
          </div>

          {/* Mining Controls */}
          <div className="space-y-4">
            <button
              onClick={() => setIsMining(!isMining)}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                isMining
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isMining ? '⏹️ Stop Mining' : '▶️ Start Mining'}
            </button>
            
            <a
              href="https://www.mobilemonero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-lg font-semibold text-lg text-center transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📱 Get Mobile Miner
            </a>
          </div>

          {/* Pool Information */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Pool Information</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                <span className="text-gray-300">Pool</span>
                <span className="text-orange-400 font-semibold">SupportXMR</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                <span className="text-gray-300">Pool Fee</span>
                <span className="text-green-400 font-semibold">0.6%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                <span className="text-gray-300">Payout Threshold</span>
                <span className="text-blue-400 font-semibold">0.003 XMR</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                <span className="text-gray-300">Payment Interval</span>
                <span className="text-purple-400 font-semibold">Every 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div>
          <PoolPerformanceChart walletAddress={poolWallet} />
        </div>
      </div>

      {/* Pool Wallet Display */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-12">
        <h3 className="text-xl font-semibold text-white mb-4">XMRT Pool Wallet Address</h3>
        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="text-sm text-gray-400 mb-2">Pool Wallet (SupportXMR):</div>
          <div className="text-xs font-mono text-orange-400 break-all">
            {poolWallet}
          </div>
          <div className="mt-3 flex space-x-4">
            <a
              href={`https://www.supportxmr.com/#${poolWallet}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm transition-colors"
            >
              View on SupportXMR
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(poolWallet)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
            >
              Copy Address
            </button>
          </div>
        </div>
      </div>

      {/* Revolutionary Technology Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
        <h3 className="text-3xl font-bold text-center text-white mb-8">
          🔥 Revolutionary Mobile Mining Technology
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem & Solution */}
          <div className="space-y-6">
            <div className="bg-red-900/30 border border-red-500 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-red-400 mb-4">❌ The Problem</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Official Monero app is not user-friendly</li>
                <li>• No support for non-ARM devices</li>
                <li>• Existing mobile miners like CT Miner cost money</li>
                <li>• Millions of Android users excluded from mining</li>
                <li>• Complex setup processes deter users</li>
              </ul>
            </div>

            <div className="bg-green-900/30 border border-green-500 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-400 mb-4">✅ Our Solution</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Modified mobile miner SDK for Termux</li>
                <li>• Works on any Android device architecture</li>
                <li>• Completely FREE - no costs or subscriptions</li>
                <li>• Simple 3-step copy-paste installation</li>
                <li>• User-friendly interface and setup</li>
              </ul>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="space-y-6">
            <div className="bg-blue-900/30 border border-blue-500 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">⚡ Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Average Android Phone:</span>
                  <span className="text-blue-400 font-semibold">300-500 H/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">vs Average Laptop:</span>
                  <span className="text-green-400 font-semibold">~50% performance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Market Potential:</span>
                  <span className="text-orange-400 font-semibold">Billions of devices</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/30 border border-purple-500 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">🛠️ Technology</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Python-based miner modification</li>
                <li>• Termux integration for Android</li>
                <li>• Cross-architecture compatibility</li>
                <li>• Background mining capability</li>
                <li>• Integrated with XMRT ecosystem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Setup Instructions */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          📱 Simple 3-Step Setup
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-900 rounded-lg">
            <div className="text-4xl mb-4">1️⃣</div>
            <h4 className="text-xl font-semibold text-orange-400 mb-3">Visit Mobile Monero</h4>
            <p className="text-gray-300 mb-4">Go to mobilemonero.com and download the setup files</p>
            <a
              href="https://www.mobilemonero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition-colors"
            >
              Visit Site
            </a>
          </div>

          <div className="text-center p-6 bg-gray-900 rounded-lg">
            <div className="text-4xl mb-4">2️⃣</div>
            <h4 className="text-xl font-semibold text-blue-400 mb-3">Copy & Paste</h4>
            <p className="text-gray-300 mb-4">Follow the simple copy-paste instructions for Termux setup</p>
            <div className="bg-gray-800 p-2 rounded text-xs font-mono text-green-400">
              Simple commands
            </div>
          </div>

          <div className="text-center p-6 bg-gray-900 rounded-lg">
            <div className="text-4xl mb-4">3️⃣</div>
            <h4 className="text-xl font-semibold text-green-400 mb-3">Start Mining</h4>
            <p className="text-gray-300 mb-4">Begin earning XMR immediately with your mobile device</p>
            <div className="text-green-400 font-semibold">
              300-500 H/s Ready!
            </div>
          </div>
        </div>
      </div>

      {/* Background Mining Integration */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-xl shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          🔄 Background Mining Integration
        </h3>
        <div className="text-center mb-6">
          <p className="text-xl text-gray-200 mb-4">
            Mine Monero seamlessly while using any XMRT dapp
          </p>
          <p className="text-gray-300">
            Our mobile mining technology runs in the background across all XMRT ecosystem applications, 
            allowing you to earn XMR while staking, banking, managing assets, or participating in DAO governance.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <div className="text-2xl mb-2">💎</div>
            <div className="text-sm text-gray-300">Mine while Staking</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <div className="text-2xl mb-2">🏦</div>
            <div className="text-sm text-gray-300">Mine while Banking</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <div className="text-2xl mb-2">💼</div>
            <div className="text-sm text-gray-300">Mine while Trading</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <div className="text-2xl mb-2">🗳️</div>
            <div className="text-sm text-gray-300">Mine while Voting</div>
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
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📱</div>
          <span className="font-semibold text-lg">Get Mobile Miner</span>
          <p className="text-orange-100 text-sm mt-2">Free download</p>
        </a>
        <Link
          to="/analytics"
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
          <span className="font-semibold text-lg">View Earnings</span>
          <p className="text-blue-100 text-sm mt-2">Track profits</p>
        </Link>
        <Link
          to="/staking"
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💎</div>
          <span className="font-semibold text-lg">Stake XMRT</span>
          <p className="text-purple-100 text-sm mt-2">Dual rewards</p>
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

export default Mining;

