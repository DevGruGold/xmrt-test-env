import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          XMRT Ecosystem
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          A comprehensive decentralized ecosystem facilitating free banking, mobile Monero mining, 
          AI-powered governance, and seamless financial services integration.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://coldcash.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Access CashDapp →
          </a>
          <a 
            href="https://www.mobilemonero.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Mobile Monero →
          </a>
          <Link
            to="/deployment"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Deploy System →
          </Link>
        </div>
      </div>

      {/* Main Ecosystem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Link 
          to="/banking"
          className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4 group-hover:text-blue-300">CashDapp Banking</h3>
          <p className="text-gray-300 leading-relaxed">
            Free banking, onramping, offramping, and cold storage through integrated CashDapp platform
          </p>
        </Link>
        <Link 
          to="/mining"
          className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⛏️</div>
          <h3 className="text-2xl font-semibold text-orange-400 mb-4 group-hover:text-orange-300">Mobile Mining</h3>
          <p className="text-gray-300 leading-relaxed">
            Mobile Monero mining with pooled rewards distribution to users and developers
          </p>
        </Link>
        <Link 
          to="/ai-agents"
          className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
          <h3 className="text-2xl font-semibold text-purple-400 mb-4 group-hover:text-purple-300">AI Governance</h3>
          <p className="text-gray-300 leading-relaxed">
            AI agents in executive roles managing DAO operations and decision-making
          </p>
        </Link>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Link 
          to="/staking"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
          <h3 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300">Staking Rewards</h3>
          <p className="text-gray-400 text-sm">Earn rewards by staking XMRT tokens</p>
        </Link>
        <Link 
          to="/dao"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🗳️</div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2 group-hover:text-blue-300">DAO Governance</h3>
          <p className="text-gray-400 text-sm">Participate in decentralized governance</p>
        </Link>
        <Link 
          to="/analytics"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
          <h3 className="text-lg font-semibold text-purple-400 mb-2 group-hover:text-purple-300">Analytics</h3>
          <p className="text-gray-400 text-sm">Real-time ecosystem analytics</p>
        </Link>
        <Link 
          to="/asset-management"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300">Asset Management</h3>
          <p className="text-gray-400 text-sm">Tokenize and manage real-world assets</p>
        </Link>
      </div>

      {/* Smart Contract Deployment Status */}
      <div className="bg-gray-800 p-8 rounded-xl mb-16 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-green-400">
          Smart Contract Deployment Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            to="/contracts"
            className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <h3 className="font-semibold text-blue-400 mb-3 group-hover:text-blue-300">XMRT Token Contract</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400">Ready for Deployment</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Network:</span>
                <span className="text-yellow-400">Sepolia Testnet</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Features:</span>
                <span className="text-gray-300">Staking, Governance, Rewards</span>
              </div>
            </div>
          </Link>
          <Link 
            to="/contracts"
            className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <h3 className="font-semibold text-purple-400 mb-3 group-hover:text-purple-300">Monero Pool Contract</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400">Ready for Deployment</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Integration:</span>
                <span className="text-blue-400">Mobile Monero</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Distribution:</span>
                <span className="text-gray-300">Users & Developers</span>
              </div>
            </div>
          </Link>
          <Link 
            to="/cashdapp"
            className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <h3 className="font-semibold text-orange-400 mb-3 group-hover:text-orange-300">CashDapp Integration</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400">Live & Integrated</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Platform:</span>
                <span className="text-blue-400">coldcash.vercel.app</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Services:</span>
                <span className="text-gray-300">Banking, Payments, Storage</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* AI Agent Architecture */}
      <div className="bg-gray-800 p-8 rounded-xl mb-16 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-purple-400">
          AI Agent Architecture
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link 
            to="/ai-agents"
            className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">👑</div>
            <h3 className="font-semibold text-blue-400 text-sm group-hover:text-blue-300">Admin Agent</h3>
            <p className="text-gray-400 text-xs mt-1">System administration</p>
          </Link>
          <Link 
            to="/ai-agents"
            className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">💼</div>
            <h3 className="font-semibold text-purple-400 text-sm group-hover:text-purple-300">Executive Agent</h3>
            <p className="text-gray-400 text-xs mt-1">Strategic decisions</p>
          </Link>
          <Link 
            to="/ai-agents"
            className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🔍</div>
            <h3 className="font-semibold text-orange-400 text-sm group-hover:text-orange-300">Audit Agent</h3>
            <p className="text-gray-400 text-xs mt-1">Security monitoring</p>
          </Link>
          <Link 
            to="/ai-agents"
            className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🔮</div>
            <h3 className="font-semibold text-green-400 text-sm group-hover:text-green-300">Oracle Agent</h3>
            <p className="text-gray-400 text-xs mt-1">Data integration</p>
          </Link>
          <Link 
            to="/ai-agents"
            className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🎁</div>
            <h3 className="font-semibold text-yellow-400 text-sm group-hover:text-yellow-300">Rewards Agent</h3>
            <p className="text-gray-400 text-xs mt-1">Reward distribution</p>
          </Link>
          <Link 
            to="/ai-agents"
            className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">💻</div>
            <h3 className="font-semibold text-red-400 text-sm group-hover:text-red-300">Developers Agent</h3>
            <p className="text-gray-400 text-xs mt-1">Development coordination</p>
          </Link>
        </div>
      </div>

      {/* Platform Integration */}
      <div className="bg-gray-800 p-8 rounded-xl mb-16 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">
          Platform Integration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-400">Banking Services</h3>
            <div className="space-y-3">
              <Link 
                to="/banking"
                className="flex items-center p-3 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-green-400 mr-3 group-hover:scale-110 transition-transform duration-300">✓</span>
                <span className="text-gray-300 group-hover:text-white">Enhanced banking interface with AI assistance</span>
              </Link>
              <Link 
                to="/banking"
                className="flex items-center p-3 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-green-400 mr-3 group-hover:scale-110 transition-transform duration-300">✓</span>
                <span className="text-gray-300 group-hover:text-white">Lightning Network payment integration</span>
              </Link>
              <Link 
                to="/banking"
                className="flex items-center p-3 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-green-400 mr-3 group-hover:scale-110 transition-transform duration-300">✓</span>
                <span className="text-gray-300 group-hover:text-white">Mobile payment systems and POS terminals</span>
              </Link>
              <Link 
                to="/asset-management"
                className="flex items-center p-3 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-green-400 mr-3 group-hover:scale-110 transition-transform duration-300">✓</span>
                <span className="text-gray-300 group-hover:text-white">Asset tokenization and leasing platforms</span>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-400">Advanced Features</h3>
            <div className="space-y-3">
              <Link 
                to="/analytics"
                className="flex items-center p-3 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300">🤖</span>
                <span className="text-gray-300 group-hover:text-white">AI-powered financial services and analytics</span>
              </Link>
              <Link 
                to="/banking"
                className="flex items-center p-3 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300">🤖</span>
                <span className="text-gray-300 group-hover:text-white">Automated compliance and regulatory frameworks</span>
              </Link>
              <Link 
                to="/analytics"
                className="flex items-center p-3 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300">🤖</span>
                <span className="text-gray-300 group-hover:text-white">Expense management and profit sharing systems</span>
              </Link>
              <Link 
                to="/analytics"
                className="flex items-center p-3 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300">🤖</span>
                <span className="text-gray-300 group-hover:text-white">Money flow visualization and reporting</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to="/deployment"
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🚀</div>
          <span className="font-semibold text-lg">Deploy System</span>
          <p className="text-blue-100 text-sm mt-2">Configure and deploy smart contracts</p>
        </Link>
        <Link
          to="/contracts"
          className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📋</div>
          <span className="font-semibold text-lg">Smart Contracts</span>
          <p className="text-green-100 text-sm mt-2">Manage contract deployment</p>
        </Link>
        <a
          href="https://coldcash.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <span className="font-semibold text-lg">CashDapp Live</span>
          <p className="text-purple-100 text-sm mt-2">Access banking platform</p>
        </a>
        <a
          href="https://www.mobilemonero.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⛏️</div>
          <span className="font-semibold text-lg">Mobile Mining</span>
          <p className="text-orange-100 text-sm mt-2">Start mining Monero</p>
        </a>
      </div>
    </div>
  );
};

export default Home;

