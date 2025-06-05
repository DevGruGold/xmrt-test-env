import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundMiner from '../components/BackgroundMiner';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BackgroundMiner page="Home" />
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
          XMRT Ecosystem
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          The world's first blockchain ecosystem with revolutionary mobile Monero mining, 
          comprehensive DeFi services, and AI-powered governance.
        </p>
        
        {/* Revolutionary Mining Highlight */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-2xl mb-12 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            🚀 World's First Mobile-Friendly Monero Mining
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-white mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300-500 H/s</div>
              <div className="text-lg opacity-90">Average Android Phone</div>
              <div className="text-sm opacity-75">Half of laptop performance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">FREE</div>
              <div className="text-lg opacity-90">No Cost Mining</div>
              <div className="text-sm opacity-75">vs Paid Apps like CT Miner</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3 Steps</div>
              <div className="text-lg opacity-90">Simple Setup</div>
              <div className="text-sm opacity-75">Copy-paste installation</div>
            </div>
          </div>
          <p className="text-xl text-white/90 mb-6">
            Our breakthrough Python app modifies the mobile miner SDK for Termux, making Monero mining 
            accessible to billions of Android users for the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.mobilemonero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📱 Get Mobile Miner
            </a>
            <Link
              to="/mining"
              className="bg-orange-800 hover:bg-orange-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              ⛏️ View Mining Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Mobile Mining */}
        <Link
          to="/mining"
          className="group bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⛏️</div>
          <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Mobile Mining</h3>
          <p className="text-orange-100 mb-4">
            World's first user-friendly mobile Monero mining. Mine XMR on any Android device with 300-500 H/s performance.
          </p>
          <div className="flex items-center text-white font-semibold">
            <span>Start Mining</span>
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </Link>

        {/* Staking */}
        <Link
          to="/staking"
          className="group bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
          <h3 className="text-2xl font-bold text-white mb-4">XMRT Staking</h3>
          <p className="text-blue-100 mb-4">
            Stake XMRT tokens for 12.5% APY while earning additional XMR through background mobile mining.
          </p>
          <div className="flex items-center text-white font-semibold">
            <span>Start Staking</span>
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </Link>

        {/* Banking */}
        <Link
          to="/banking"
          className="group bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <h3 className="text-2xl font-bold text-white mb-4">Banking Services</h3>
          <p className="text-green-100 mb-4">
            Complete banking ecosystem with CashDapp integration, instant payments, and crypto services.
          </p>
          <div className="flex items-center text-white font-semibold">
            <span>Access Banking</span>
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </Link>

        {/* Asset Management */}
        <Link
          to="/asset-management"
          className="group bg-gradient-to-br from-yellow-600 to-orange-600 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💼</div>
          <h3 className="text-2xl font-bold text-white mb-4">Asset Tokenization</h3>
          <p className="text-yellow-100 mb-4">
            Transform real-world assets into blockchain tokens with complete tokenization workflow.
          </p>
          <div className="flex items-center text-white font-semibold">
            <span>Tokenize Assets</span>
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </Link>

        {/* Analytics */}
        <Link
          to="/analytics"
          className="group bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
          <h3 className="text-2xl font-bold text-white mb-4">Analytics & Insights</h3>
          <p className="text-purple-100 mb-4">
            Real-time profit tracking, expense management, and comprehensive analytics across all activities.
          </p>
          <div className="flex items-center text-white font-semibold">
            <span>View Analytics</span>
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </Link>

        {/* DAO Governance */}
        <Link
          to="/dao"
          className="group bg-gradient-to-br from-indigo-600 to-blue-600 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🗳️</div>
          <h3 className="text-2xl font-bold text-white mb-4">DAO Governance</h3>
          <p className="text-indigo-100 mb-4">
            Participate in decentralized governance with AI-powered agents managing proposals and voting.
          </p>
          <div className="flex items-center text-white font-semibold">
            <span>Join DAO</span>
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </Link>
      </div>

      {/* Background Mining Integration */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          🔄 Background Mining Across All DApps
        </h2>
        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 mb-4">
            Our revolutionary mobile mining technology runs seamlessly in the background 
            while you use any XMRT ecosystem application.
          </p>
          <p className="text-gray-400">
            Earn XMR continuously while staking, banking, trading, voting, or managing assets. 
            The first truly passive mobile mining experience.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gray-800 rounded-lg">
            <div className="text-3xl mb-2">💎</div>
            <div className="text-sm text-gray-300">Mine while Staking</div>
            <div className="text-xs text-orange-400">+12.5% APY + XMR</div>
          </div>
          <div className="text-center p-4 bg-gray-800 rounded-lg">
            <div className="text-3xl mb-2">🏦</div>
            <div className="text-sm text-gray-300">Mine while Banking</div>
            <div className="text-xs text-orange-400">Passive income</div>
          </div>
          <div className="text-center p-4 bg-gray-800 rounded-lg">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-sm text-gray-300">Mine while Trading</div>
            <div className="text-xs text-orange-400">Dual earnings</div>
          </div>
          <div className="text-center p-4 bg-gray-800 rounded-lg">
            <div className="text-3xl mb-2">🗳️</div>
            <div className="text-sm text-gray-300">Mine while Voting</div>
            <div className="text-xs text-orange-400">Governance rewards</div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <div className="text-3xl font-bold text-blue-400 mb-2">1,247</div>
          <div className="text-gray-400">Active Mobile Miners</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <div className="text-3xl font-bold text-green-400 mb-2">847.3 KH/s</div>
          <div className="text-gray-400">Total Pool Hashrate</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <div className="text-3xl font-bold text-purple-400 mb-2">8,934</div>
          <div className="text-gray-400">DAO Members</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <div className="text-3xl font-bold text-orange-400 mb-2">$2.4M</div>
          <div className="text-gray-400">Total Value Locked</div>
        </div>
      </div>

      {/* External Platforms */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          🌐 Integrated Platforms
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="https://coldcash.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">🏦</div>
              <div>
                <h3 className="text-2xl font-bold text-white">CashDapp Platform</h3>
                <p className="text-green-100">Complete banking and financial services</p>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              Access the full CashDapp banking platform with crypto integration, 
              payment processing, and advanced financial tools.
            </p>
            <div className="flex items-center text-white font-semibold">
              <span>Launch CashDapp</span>
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </a>

          <a
            href="https://www.mobilemonero.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">📱</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Mobile Monero</h3>
                <p className="text-orange-100">Revolutionary mobile mining platform</p>
              </div>
            </div>
            <p className="text-orange-100 mb-4">
              Download the world's first user-friendly mobile Monero miner. 
              Simple 3-step setup for any Android device.
            </p>
            <div className="flex items-center text-white font-semibold">
              <span>Get Mobile Miner</span>
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Join the Revolution?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Experience the world's first mobile-friendly Monero mining ecosystem with 
          comprehensive DeFi services, AI governance, and revolutionary technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.mobilemonero.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            📱 Start Mobile Mining
          </a>
          <Link
            to="/staking"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            💎 Stake XMRT Tokens
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

