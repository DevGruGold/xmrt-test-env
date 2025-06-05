import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundMiner from '../components/BackgroundMiner';

const Banking = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '🏦' },
    { id: 'cashdapp', name: 'CashDapp Platform', icon: '💳' },
    { id: 'payments', name: 'Payments', icon: '💸' },
    { id: 'accounts', name: 'Accounts', icon: '📊' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Banking Services Overview</h3>
            
            {/* Mining Integration Notice */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2 text-white">
                <span className="text-lg">⛏️</span>
                <span className="font-semibold">Mining while Banking</span>
                <span className="text-sm opacity-90">- Earn XMR during all banking activities</span>
              </div>
            </div>
            
            {/* Account Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-green-400">Total Balance</h4>
                  <div className="text-2xl">💰</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">$47,892.34</div>
                <div className="text-sm text-green-400">+2.3% this month</div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">Savings APY</h4>
                  <div className="text-2xl">📈</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">4.25%</div>
                <div className="text-sm text-blue-400">Above market rate</div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-purple-400">Transactions</h4>
                  <div className="text-2xl">🔄</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">247</div>
                <div className="text-sm text-purple-400">This month</div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-orange-400">Credit Score</h4>
                  <div className="text-2xl">⭐</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">847</div>
                <div className="text-sm text-orange-400">Excellent</div>
              </div>
            </div>

            {/* Quick Services */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Quick Services</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-green-400 mr-3">💸</span>
                      <span className="text-gray-300">Send Money</span>
                    </div>
                    <span className="text-blue-400">→</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-blue-400 mr-3">📱</span>
                      <span className="text-gray-300">Mobile Deposit</span>
                    </div>
                    <span className="text-blue-400">→</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">💳</span>
                      <span className="text-gray-300">Pay Bills</span>
                    </div>
                    <span className="text-blue-400">→</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-orange-400 mr-3">🏦</span>
                      <span className="text-gray-300">Account Transfer</span>
                    </div>
                    <span className="text-blue-400">→</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-400 mb-4">Banking Features</h4>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-green-400 mr-3">✅</span>
                    <span className="text-gray-300">Instant payments (&lt; 1 second)</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-green-400 mr-3">✅</span>
                    <span className="text-gray-300">Ultra-low fees (&lt; $0.01)</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-green-400 mr-3">✅</span>
                    <span className="text-gray-300">24/7 customer support</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-green-400 mr-3">✅</span>
                    <span className="text-gray-300">FDIC insured up to $250K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cashdapp':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">CashDapp Integration</h3>
              <p className="text-gray-400 mb-6">
                Access the full CashDapp banking platform with advanced financial services and crypto integration.
              </p>
              <a
                href="https://coldcash.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Launch CashDapp Platform →
              </a>
            </div>

            {/* CashDapp Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-400 mb-4">Platform Features</h4>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-blue-400 text-lg mr-3">🏦</span>
                    <div>
                      <div className="font-semibold text-white">Digital Banking</div>
                      <div className="text-sm text-gray-400">Full-service online banking</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-green-400 text-lg mr-3">💳</span>
                    <div>
                      <div className="font-semibold text-white">Crypto Integration</div>
                      <div className="text-sm text-gray-400">Seamless crypto-fiat conversion</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-purple-400 text-lg mr-3">📱</span>
                    <div>
                      <div className="font-semibold text-white">Mobile App</div>
                      <div className="text-sm text-gray-400">iOS and Android applications</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-orange-400 text-lg mr-3">🔒</span>
                    <div>
                      <div className="font-semibold text-white">Security</div>
                      <div className="text-sm text-gray-400">Bank-grade security protocols</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Demo Accounts</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded">
                    <div className="font-semibold text-white mb-2">Demo User 1</div>
                    <div className="text-sm text-gray-400 mb-1">Email: user1@example.com</div>
                    <div className="text-sm text-gray-400">Password: password1</div>
                  </div>
                  <div className="p-4 bg-gray-800 rounded">
                    <div className="font-semibold text-white mb-2">Demo User 2</div>
                    <div className="text-sm text-gray-400 mb-1">Email: user2@example.com</div>
                    <div className="text-sm text-gray-400">Password: password2</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Platform Performance</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-800 rounded">
                  <div className="text-3xl font-bold text-white mb-2">&lt; 200ms</div>
                  <div className="text-gray-400 text-sm">Average API response</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime reliability</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Customer support</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'payments':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Payment Services</h3>
            
            {/* Payment Options */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Send Money</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Recipient</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="Email or phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
                    <input
                      type="number"
                      className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="0.00"
                    />
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Send Payment
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-400 mb-4">Payment Methods</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-blue-400 mr-3">💳</span>
                      <span className="text-gray-300">Debit Card</span>
                    </div>
                    <span className="text-green-400">Connected</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-green-400 mr-3">🏦</span>
                      <span className="text-gray-300">Bank Account</span>
                    </div>
                    <span className="text-green-400">Connected</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-orange-400 mr-3">₿</span>
                      <span className="text-gray-300">Crypto Wallet</span>
                    </div>
                    <span className="text-green-400">Connected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Recent Transactions</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">↗️</span>
                    <div>
                      <div className="font-semibold text-white">Payment to John Doe</div>
                      <div className="text-sm text-gray-400">Today, 2:30 PM</div>
                    </div>
                  </div>
                  <span className="text-red-400 font-semibold">-$125.00</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-3">↙️</span>
                    <div>
                      <div className="font-semibold text-white">Received from Alice Smith</div>
                      <div className="text-sm text-gray-400">Yesterday, 4:15 PM</div>
                    </div>
                  </div>
                  <span className="text-green-400 font-semibold">+$250.00</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'accounts':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Account Management</h3>
            
            {/* Account Types */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Checking Account</h4>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gray-800 rounded">
                    <div className="text-3xl font-bold text-white mb-2">$12,847.92</div>
                    <div className="text-gray-400 text-sm">Available Balance</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-800 rounded">
                      <div className="text-lg font-semibold text-white">$0.00</div>
                      <div className="text-xs text-gray-400">Monthly Fee</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800 rounded">
                      <div className="text-lg font-semibold text-white">&lt; 50ms</div>
                      <div className="text-xs text-gray-400">Transfer Speed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-400 mb-4">Savings Account</h4>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gray-800 rounded">
                    <div className="text-3xl font-bold text-white mb-2">$35,044.42</div>
                    <div className="text-gray-400 text-sm">Total Savings</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-800 rounded">
                      <div className="text-lg font-semibold text-white">4.25%</div>
                      <div className="text-xs text-gray-400">Annual APY</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800 rounded">
                      <div className="text-lg font-semibold text-white">$148.93</div>
                      <div className="text-xs text-gray-400">Monthly Interest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Account Settings</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Overdraft Protection</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Enabled
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Mobile Notifications</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Enabled
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Auto-Save</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Configure
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Two-Factor Auth</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Enabled
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Spending Alerts</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Enabled
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Account Statements</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BackgroundMiner page="Banking" />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
          Banking & Financial Services
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Complete banking ecosystem with integrated CashDapp platform, instant payments, 
          crypto integration, and advanced financial services. Earn XMR while banking with background mobile mining.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-800 p-2 rounded-xl mb-8 shadow-lg">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        {renderTabContent()}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <a
          href="https://coldcash.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <span className="font-semibold text-lg">Launch CashDapp</span>
          <p className="text-green-100 text-sm mt-2">Full platform</p>
        </a>
        <Link
          to="/analytics"
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
          <span className="font-semibold text-lg">View Analytics</span>
          <p className="text-blue-100 text-sm mt-2">Track finances</p>
        </Link>
        <Link
          to="/staking"
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💎</div>
          <span className="font-semibold text-lg">Stake XMRT</span>
          <p className="text-purple-100 text-sm mt-2">Earn rewards</p>
        </Link>
        <Link
          to="/asset-management"
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💼</div>
          <span className="font-semibold text-lg">Manage Assets</span>
          <p className="text-orange-100 text-sm mt-2">Portfolio tools</p>
        </Link>
      </div>
    </div>
  );
};

export default Banking;

