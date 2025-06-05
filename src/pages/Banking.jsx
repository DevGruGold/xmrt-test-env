import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Banking = () => {
  const [activeTab, setActiveTab] = useState('services');

  const bankingServices = [
    {
      id: 'enhanced-banking',
      name: 'Enhanced Banking Interface',
      icon: '🏦',
      description: 'AI-powered banking with advanced features and automation',
      features: ['AI Assistant', 'Smart Budgeting', 'Automated Savings', 'Expense Categorization'],
      status: 'Active'
    },
    {
      id: 'lightning-payments',
      name: 'Lightning Network Payments',
      icon: '⚡',
      description: 'Instant, low-cost Bitcoin payments via Lightning Network',
      features: ['Instant Transfers', 'Micro Payments', 'Low Fees', 'Global Reach'],
      status: 'Active'
    },
    {
      id: 'mobile-payments',
      name: 'Mobile Payment Systems',
      icon: '📱',
      description: 'Complete mobile payment ecosystem with NFC and QR codes',
      features: ['NFC Payments', 'QR Code Scanning', 'Contactless', 'Multi-Currency'],
      status: 'Active'
    },
    {
      id: 'pos-terminals',
      name: 'POS Terminal Integration',
      icon: '🏪',
      description: 'Point of sale systems for merchants and businesses',
      features: ['Merchant Tools', 'Inventory Management', 'Sales Analytics', 'Multi-Payment'],
      status: 'Active'
    },
    {
      id: 'secure-wallets',
      name: 'Secure Wallet Modules',
      icon: '🔐',
      description: 'Multi-layer security wallet with advanced protection',
      features: ['Multi-Sig', 'Hardware Security', 'Biometric Auth', 'Cold Storage'],
      status: 'Active'
    },
    {
      id: 'asset-tokenization',
      name: 'Asset Tokenization Platform',
      icon: '💎',
      description: 'Tokenize real-world assets with compliance frameworks',
      features: ['Real Estate', 'Art & Collectibles', 'Commodities', 'Securities'],
      status: 'Active'
    }
  ];

  const paymentMethods = [
    { name: 'XMRT Token', icon: '🪙', status: 'Primary' },
    { name: 'Bitcoin (Lightning)', icon: '⚡', status: 'Active' },
    { name: 'Ethereum', icon: '💎', status: 'Active' },
    { name: 'Monero', icon: '🔒', status: 'Active' },
    { name: 'Stablecoins', icon: '💵', status: 'Active' },
    { name: 'Fiat (USD/EUR)', icon: '🏛️', status: 'Active' }
  ];

  const securityFeatures = [
    {
      name: 'Multi-Factor Authentication',
      description: 'Biometric, SMS, and hardware key authentication',
      icon: '🔐',
      status: 'Enabled'
    },
    {
      name: 'End-to-End Encryption',
      description: 'Military-grade encryption for all transactions',
      icon: '🛡️',
      status: 'Enabled'
    },
    {
      name: 'Real-time Fraud Detection',
      description: 'AI-powered fraud prevention and monitoring',
      icon: '🔍',
      status: 'Enabled'
    },
    {
      name: 'Cold Storage Integration',
      description: 'Offline storage for maximum security',
      icon: '❄️',
      status: 'Enabled'
    }
  ];

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg transition-colors font-semibold ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return 'text-green-400';
      case 'primary': return 'text-blue-400';
      case 'enabled': return 'text-green-400';
      case 'pending': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-500 to-purple-400 bg-clip-text text-transparent">
          Banking Services
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Comprehensive banking services powered by AI, blockchain technology, and integrated with CashDapp platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://coldcash.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Access CashDapp →
          </a>
          <Link
            to="/deployment"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Deploy Banking System →
          </Link>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 bg-gray-800 p-2 rounded-lg">
        <TabButton
          id="services"
          label="Banking Services"
          isActive={activeTab === 'services'}
          onClick={setActiveTab}
        />
        <TabButton
          id="payments"
          label="Payment Methods"
          isActive={activeTab === 'payments'}
          onClick={setActiveTab}
        />
        <TabButton
          id="security"
          label="Security Features"
          isActive={activeTab === 'security'}
          onClick={setActiveTab}
        />
        <TabButton
          id="integration"
          label="CashDapp Integration"
          isActive={activeTab === 'integration'}
          onClick={setActiveTab}
        />
      </div>

      {/* Banking Services Tab */}
      {activeTab === 'services' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bankingServices.map((service) => (
              <div key={service.id} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{service.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-blue-400">{service.name}</h3>
                    <span className={`text-sm font-semibold ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {service.features.map((feature, index) => (
                      <div key={index} className="text-xs text-gray-400 flex items-center">
                        <span className="text-green-400 mr-1">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Quick Access to CashDapp */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-green-400">
              CashDapp Banking Platform
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Live Platform Access</h3>
                <p className="text-gray-300 mb-4">
                  Access the live CashDapp platform for banking, onramping, offramping, and cold storage services.
                </p>
                <a 
                  href="https://coldcash.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
                >
                  Open CashDapp →
                </a>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Demo Accounts</h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-800 p-2 rounded">
                    <span className="text-gray-400">Email:</span> user1@example.com<br/>
                    <span className="text-gray-400">Password:</span> password1
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <span className="text-gray-400">Email:</span> user2@example.com<br/>
                    <span className="text-gray-400">Password:</span> password2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods Tab */}
      {activeTab === 'payments' && (
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Supported Payment Methods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-4xl mb-3">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{method.name}</h3>
                  <span className={`text-sm font-semibold ${getStatusColor(method.status)}`}>
                    {method.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Lightning Network Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                  <span className="text-yellow-400 mr-3">⚡</span>
                  <span>Instant payments (&lt; 1 second)</span>
                </li>
                <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                  <span className="text-green-400 mr-3">💰</span>
                  <span>Ultra-low fees (&lt; $0.01)</span>
                </li>
                <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                  <span className="text-blue-400 mr-3">🌍</span>
                  <span>Global accessibility</span>
                </li>
                <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                  <span className="text-purple-400 mr-3">🔄</span>
                  <span>Automatic routing</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Mobile Payment Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                  <span className="text-orange-400 mr-3">📱</span>
                  <span>NFC contactless payments</span>
                </li>
                <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                  <span className="text-red-400 mr-3">📷</span>
                  <span>QR code scanning</span>
                </li>
                <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                  <span className="text-cyan-400 mr-3">🔐</span>
                  <span>Biometric authentication</span>
                </li>
                <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                  <span className="text-pink-400 mr-3">💳</span>
                  <span>Virtual card generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Security Features Tab */}
      {activeTab === 'security' && (
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-red-400">Security & Protection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                      <span className={`text-sm font-semibold ${getStatusColor(feature.status)}`}>
                        {feature.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Statistics */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-orange-400">
              Security Performance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">🛡️</div>
                <h3 className="font-semibold text-green-400">Security Score</h3>
                <p className="text-2xl font-bold text-white">A+</p>
                <p className="text-gray-400 text-sm">Industry leading</p>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-semibold text-blue-400">Uptime</h3>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-gray-400 text-sm">System availability</p>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-purple-400">Response Time</h3>
                <p className="text-2xl font-bold text-white">&lt; 50ms</p>
                <p className="text-gray-400 text-sm">Average response</p>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="font-semibold text-red-400">Fraud Detection</h3>
                <p className="text-2xl font-bold text-white">99.8%</p>
                <p className="text-gray-400 text-sm">Detection accuracy</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CashDapp Integration Tab */}
      {activeTab === 'integration' && (
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">CashDapp Platform Integration</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-4">Integration Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                    <span className="text-green-400 mr-3">🔗</span>
                    <span>Seamless API integration</span>
                  </li>
                  <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                    <span className="text-blue-400 mr-3">💳</span>
                    <span>Unified payment processing</span>
                  </li>
                  <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                    <span className="text-purple-400 mr-3">🔄</span>
                    <span>Real-time synchronization</span>
                  </li>
                  <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                    <span className="text-orange-400 mr-3">📊</span>
                    <span>Shared analytics dashboard</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-4">Smart Contract Functions</h3>
                <div className="space-y-3">
                  <div className="bg-gray-900 p-3 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                    <code className="text-blue-300 text-sm">deposit(uint256 amount)</code>
                    <p className="text-gray-400 text-xs mt-1">Deposit funds to CashDapp</p>
                  </div>
                  <div className="bg-gray-900 p-3 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                    <code className="text-blue-300 text-sm">withdraw(uint256 amount)</code>
                    <p className="text-gray-400 text-xs mt-1">Withdraw funds from CashDapp</p>
                  </div>
                  <div className="bg-gray-900 p-3 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                    <code className="text-blue-300 text-sm">transfer(address to, uint256 amount)</code>
                    <p className="text-gray-400 text-xs mt-1">Transfer between users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Status */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-yellow-400">
              Integration Status
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <span className="text-green-400 text-xl mr-3">✅</span>
                  <span className="text-gray-300">CashDapp API Connection</span>
                </div>
                <span className="text-green-400 font-semibold">Connected</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <span className="text-green-400 text-xl mr-3">✅</span>
                  <span className="text-gray-300">Smart Contract Bridge</span>
                </div>
                <span className="text-green-400 font-semibold">Deployed</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <span className="text-green-400 text-xl mr-3">✅</span>
                  <span className="text-gray-300">Payment Processing</span>
                </div>
                <span className="text-green-400 font-semibold">Active</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl mr-3">⏳</span>
                  <span className="text-gray-300">Advanced Analytics</span>
                </div>
                <span className="text-yellow-400 font-semibold">In Development</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link
          to="/analytics"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">📊</div>
          <span className="font-semibold">Analytics</span>
        </Link>
        <Link
          to="/asset-management"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">💎</div>
          <span className="font-semibold">Asset Management</span>
        </Link>
        <Link
          to="/ai-agents"
          className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">🤖</div>
          <span className="font-semibold">AI Agents</span>
        </Link>
        <Link
          to="/contracts"
          className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">📋</div>
          <span className="font-semibold">Smart Contracts</span>
        </Link>
      </div>
    </div>
  );
};

export default Banking;

