import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const analyticsData = {
    overview: {
      totalTransactions: '1,234,567',
      totalVolume: '$45.2M',
      activeUsers: '12,345',
      avgTransactionValue: '$367'
    },
    moneyFlow: [
      { source: 'Mobile Mining', destination: 'User Wallets', amount: '$125K', percentage: 35 },
      { source: 'Staking Rewards', destination: 'Stakers', amount: '$89K', percentage: 25 },
      { source: 'CashDapp Fees', destination: 'Treasury', amount: '$67K', percentage: 19 },
      { source: 'Trading Fees', destination: 'Liquidity Pool', amount: '$45K', percentage: 13 },
      { source: 'Governance', destination: 'Development', amount: '$28K', percentage: 8 }
    ],
    expenses: [
      { category: 'Development', amount: '$45,000', percentage: 30, trend: '+5%' },
      { category: 'Infrastructure', amount: '$38,000', percentage: 25, trend: '+2%' },
      { category: 'Marketing', amount: '$30,000', percentage: 20, trend: '+8%' },
      { category: 'Operations', amount: '$22,500', percentage: 15, trend: '-3%' },
      { category: 'Legal & Compliance', amount: '$15,000', percentage: 10, trend: '+1%' }
    ]
  };

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
          Analytics Dashboard
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Real-time analytics, money flow visualization, and comprehensive expense tracking for the XMRT ecosystem.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 bg-gray-800 p-2 rounded-lg">
        <TabButton
          id="overview"
          label="Overview"
          isActive={activeTab === 'overview'}
          onClick={setActiveTab}
        />
        <TabButton
          id="moneyflow"
          label="Money Flow"
          isActive={activeTab === 'moneyflow'}
          onClick={setActiveTab}
        />
        <TabButton
          id="expenses"
          label="Expenses"
          isActive={activeTab === 'expenses'}
          onClick={setActiveTab}
        />
        <TabButton
          id="performance"
          label="Performance"
          isActive={activeTab === 'performance'}
          onClick={setActiveTab}
        />
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors cursor-pointer">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="text-lg font-semibold text-green-400">Total Volume</h3>
              <p className="text-2xl font-bold text-white">{analyticsData.overview.totalVolume}</p>
              <p className="text-gray-400 text-sm">All-time trading volume</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors cursor-pointer">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-lg font-semibold text-blue-400">Transactions</h3>
              <p className="text-2xl font-bold text-white">{analyticsData.overview.totalTransactions}</p>
              <p className="text-gray-400 text-sm">Total transactions processed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors cursor-pointer">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="text-lg font-semibold text-purple-400">Active Users</h3>
              <p className="text-2xl font-bold text-white">{analyticsData.overview.activeUsers}</p>
              <p className="text-gray-400 text-sm">Monthly active users</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors cursor-pointer">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="text-lg font-semibold text-orange-400">Avg Transaction</h3>
              <p className="text-2xl font-bold text-white">{analyticsData.overview.avgTransactionValue}</p>
              <p className="text-gray-400 text-sm">Average transaction value</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/staking"
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">💰</div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400">Staking Analytics</h3>
                  <p className="text-gray-400 text-sm">View staking performance</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">Track staking rewards, APY, and user participation rates.</p>
            </Link>
            <Link
              to="/mining"
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">⛏️</div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400">Mining Analytics</h3>
                  <p className="text-gray-400 text-sm">Monitor mining performance</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">Analyze mining pool performance and reward distribution.</p>
            </Link>
            <Link
              to="/cashdapp"
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🏦</div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Banking Analytics</h3>
                  <p className="text-gray-400 text-sm">CashDapp performance metrics</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">Monitor banking services, transactions, and user activity.</p>
            </Link>
          </div>
        </div>
      )}

      {/* Money Flow Tab */}
      {activeTab === 'moneyflow' && (
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Money Flow Visualization</h2>
            <div className="space-y-4">
              {analyticsData.moneyFlow.map((flow, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-4">
                      <span className="text-green-400 font-semibold">{flow.source}</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-blue-400 font-semibold">{flow.destination}</span>
                    </div>
                    <span className="text-white font-bold">{flow.amount}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${flow.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-gray-400 text-sm mt-1">{flow.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Expenses Tab */}
      {activeTab === 'expenses' && (
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Expense Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analyticsData.expenses.map((expense, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-white">{expense.category}</h3>
                    <span className={`text-sm font-semibold ${
                      expense.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {expense.trend}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-blue-400">{expense.amount}</span>
                    <span className="text-gray-400">{expense.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${expense.percentage * 2}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-400">System Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Transaction Speed</span>
                  <span className="text-green-400 font-semibold">&lt; 2 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Network Uptime</span>
                  <span className="text-green-400 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Gas Efficiency</span>
                  <span className="text-green-400 font-semibold">Optimized</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Security Score</span>
                  <span className="text-green-400 font-semibold">A+</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">User Engagement</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Daily Active Users</span>
                  <span className="text-blue-400 font-semibold">4,567</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Session Duration</span>
                  <span className="text-blue-400 font-semibold">12m 34s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Return Rate</span>
                  <span className="text-blue-400 font-semibold">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">User Satisfaction</span>
                  <span className="text-blue-400 font-semibold">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link
          to="/dao"
          className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">🗳️</div>
          <span className="font-semibold">DAO Governance</span>
        </Link>
        <Link
          to="/ai-agents"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">🤖</div>
          <span className="font-semibold">AI Agents</span>
        </Link>
        <Link
          to="/asset-management"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">💎</div>
          <span className="font-semibold">Asset Management</span>
        </Link>
        <Link
          to="/banking"
          className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">🏦</div>
          <span className="font-semibold">Banking Services</span>
        </Link>
      </div>
    </div>
  );
};

export default Analytics;

