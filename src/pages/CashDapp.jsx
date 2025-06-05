import React from 'react';
import { Link } from 'react-router-dom';

const CashDapp = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-500 to-purple-400 bg-clip-text text-transparent">
          CashDapp Integration
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Seamless integration with the live CashDapp platform for comprehensive banking, onramping, offramping, and cold storage services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://coldcash.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Access CashDapp Platform →
          </a>
          <Link
            to="/banking"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Banking Services →
          </Link>
        </div>
      </div>

      {/* Live Platform Access */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-green-400">
          Live Platform Access
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">CashDapp Platform</h3>
            <p className="text-gray-300 mb-6">
              Access the fully functional CashDapp platform for all your banking needs. The platform is live and ready for use with demo accounts available for testing.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">User authentication system</span>
              </div>
              <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Modern banking interface</span>
              </div>
              <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Secure transaction processing</span>
              </div>
              <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Mobile-responsive design</span>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://coldcash.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors inline-block text-center"
              >
                Launch CashDapp →
              </a>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Demo Accounts</h3>
            <p className="text-gray-300 mb-6">
              Use these demo accounts to explore the CashDapp platform and test all banking features without any risk.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Demo Account 1</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white font-mono">user1@example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Password:</span>
                    <span className="text-white font-mono">password1</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Demo Account 2</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white font-mono">user2@example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Password:</span>
                    <span className="text-white font-mono">password2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Link 
          to="/banking"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">Enhanced Banking</h3>
          <p className="text-gray-300 text-sm">
            AI-powered banking interface with advanced features, smart budgeting, and automated savings.
          </p>
        </Link>
        <Link 
          to="/banking"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
          <h3 className="text-xl font-semibold text-orange-400 mb-3 group-hover:text-orange-300">Lightning Payments</h3>
          <p className="text-gray-300 text-sm">
            Instant, low-cost Bitcoin payments via Lightning Network integration with global accessibility.
          </p>
        </Link>
        <Link 
          to="/banking"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
          <h3 className="text-xl font-semibold text-green-400 mb-3 group-hover:text-green-300">Mobile Payments</h3>
          <p className="text-gray-300 text-sm">
            Complete mobile payment ecosystem with NFC, QR codes, and contactless payment solutions.
          </p>
        </Link>
        <Link 
          to="/banking"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏪</div>
          <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300">POS Terminals</h3>
          <p className="text-gray-300 text-sm">
            Point of sale systems for merchants with inventory management, sales analytics, and multi-payment support.
          </p>
        </Link>
        <Link 
          to="/banking"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔐</div>
          <h3 className="text-xl font-semibold text-red-400 mb-3 group-hover:text-red-300">Secure Wallets</h3>
          <p className="text-gray-300 text-sm">
            Multi-layer security wallets with multi-sig, hardware security, biometric auth, and cold storage.
          </p>
        </Link>
        <Link 
          to="/asset-management"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-3 group-hover:text-yellow-300">Asset Tokenization</h3>
          <p className="text-gray-300 text-sm">
            Tokenize real-world assets including real estate, art, collectibles, and securities with compliance.
          </p>
        </Link>
      </div>

      {/* Smart Contract Integration */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-purple-400">
          Smart Contract Integration
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Integration Functions</h3>
            <div className="space-y-3">
              <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <code className="text-green-400 text-sm">deposit(uint256 amount)</code>
                <p className="text-gray-400 text-xs mt-1">Deposit funds to CashDapp platform</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <code className="text-blue-400 text-sm">withdraw(uint256 amount)</code>
                <p className="text-gray-400 text-xs mt-1">Withdraw funds from CashDapp platform</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <code className="text-purple-400 text-sm">transfer(address to, uint256 amount)</code>
                <p className="text-gray-400 text-xs mt-1">Transfer between CashDapp users</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <code className="text-orange-400 text-sm">getBalance(address user)</code>
                <p className="text-gray-400 text-xs mt-1">Check user balance on platform</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-4">Integration Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <span className="text-green-400 text-lg mr-3">✅</span>
                  <span className="text-gray-300">API Connection</span>
                </div>
                <span className="text-green-400 font-semibold">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <span className="text-green-400 text-lg mr-3">✅</span>
                  <span className="text-gray-300">Smart Contract Bridge</span>
                </div>
                <span className="text-green-400 font-semibold">Deployed</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <span className="text-green-400 text-lg mr-3">✅</span>
                  <span className="text-gray-300">Payment Processing</span>
                </div>
                <span className="text-green-400 font-semibold">Operational</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <span className="text-blue-400 text-lg mr-3">🔄</span>
                  <span className="text-gray-300">Real-time Sync</span>
                </div>
                <span className="text-blue-400 font-semibold">Syncing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Statistics */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-orange-400">
          Platform Performance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-semibold text-green-400">Uptime</h3>
            <p className="text-3xl font-bold text-white">99.9%</p>
            <p className="text-gray-400 text-sm">Platform availability</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-blue-400">Response Time</h3>
            <p className="text-3xl font-bold text-white">&lt; 200ms</p>
            <p className="text-gray-400 text-sm">Average API response</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="font-semibold text-purple-400">Active Users</h3>
            <p className="text-3xl font-bold text-white">2,847</p>
            <p className="text-gray-400 text-sm">Monthly active users</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold text-yellow-400">Transaction Volume</h3>
            <p className="text-3xl font-bold text-white">$1.2M</p>
            <p className="text-gray-400 text-sm">Monthly volume</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="https://coldcash.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <span className="font-semibold text-lg">Access Platform</span>
          <p className="text-blue-100 text-sm mt-2">Launch CashDapp</p>
        </a>
        <Link
          to="/banking"
          className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🔧</div>
          <span className="font-semibold text-lg">Banking Services</span>
          <p className="text-green-100 text-sm mt-2">View all services</p>
        </Link>
        <Link
          to="/contracts"
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📋</div>
          <span className="font-semibold text-lg">Smart Contracts</span>
          <p className="text-purple-100 text-sm mt-2">Manage contracts</p>
        </Link>
        <Link
          to="/analytics"
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
          <span className="font-semibold text-lg">Analytics</span>
          <p className="text-orange-100 text-sm mt-2">View performance</p>
        </Link>
      </div>
    </div>
  );
};

export default CashDapp;

