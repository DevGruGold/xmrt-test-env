import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [profits, setProfits] = useState({
    xmrt: { current: 0, change: 0, percentage: 0 },
    xmr: { current: 0, change: 0, percentage: 0 },
    total: { current: 0, change: 0, percentage: 0 }
  });
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const updateProfits = () => {
      const xmrtBase = 1247.83;
      const xmrBase = 892.45;
      
      const xmrtVariation = (Math.random() - 0.5) * 100;
      const xmrVariation = (Math.random() - 0.5) * 50;
      
      const newXmrt = xmrtBase + xmrtVariation;
      const newXmr = xmrBase + xmrVariation;
      const newTotal = newXmrt + newXmr;
      
      setProfits({
        xmrt: {
          current: newXmrt,
          change: xmrtVariation,
          percentage: (xmrtVariation / xmrtBase) * 100
        },
        xmr: {
          current: newXmr,
          change: xmrVariation,
          percentage: (xmrVariation / xmrBase) * 100
        },
        total: {
          current: newTotal,
          change: xmrtVariation + xmrVariation,
          percentage: ((xmrtVariation + xmrVariation) / (xmrtBase + xmrBase)) * 100
        }
      });
    };

    updateProfits();
    const interval = setInterval(updateProfits, 3000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatPercentage = (percentage) => {
    const sign = percentage >= 0 ? '+' : '';
    return `${sign}${percentage.toFixed(2)}%`;
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-400';
    if (change < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'profits', name: 'Profit Tracking', icon: '📈' },
    { id: 'expenses', name: 'Expense Management', icon: '💰' },
    { id: 'reports', name: 'Reports', icon: '📋' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-blue-400">Total Value</h3>
                  <div className="text-2xl">💎</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {formatCurrency(profits.total.current)}
                </div>
                <div className={`text-sm ${getChangeColor(profits.total.change)}`}>
                  {formatPercentage(profits.total.percentage)} (24h)
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-green-400">Active Miners</h3>
                  <div className="text-2xl">⛏️</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">1,247</div>
                <div className="text-sm text-green-400">+12.3% (7d)</div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-purple-400">DAO Members</h3>
                  <div className="text-2xl">🗳️</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">8,934</div>
                <div className="text-sm text-purple-400">+5.7% (30d)</div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-orange-400">Transactions</h3>
                  <div className="text-2xl">🔄</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">45.2K</div>
                <div className="text-sm text-orange-400">+23.1% (24h)</div>
              </div>
            </div>

            {/* Performance Chart Placeholder */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-6">Performance Overview</h3>
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h4 className="text-lg font-semibold text-gray-400 mb-2">Interactive Charts Coming Soon</h4>
                  <p className="text-gray-500">Advanced analytics and visualization tools</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'profits':
        return (
          <div className="space-y-8">
            {/* Live Status */}
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">Real-Time Profit Tracking</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                <span className="text-gray-300">{isLive ? 'Live Data' : 'Offline'}</span>
              </div>
            </div>

            {/* Profit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">XMRT.io Tokens</h3>
                  <div className="text-2xl">💎</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    {formatCurrency(profits.xmrt.current)}
                  </div>
                  <div className={`text-lg font-semibold ${getChangeColor(profits.xmrt.change)}`}>
                    {profits.xmrt.change >= 0 ? '+' : ''}{formatCurrency(profits.xmrt.change)}
                  </div>
                  <div className={`text-sm ${getChangeColor(profits.xmrt.percentage)}`}>
                    {formatPercentage(profits.xmrt.percentage)}
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-orange-400">XMR Mining</h3>
                  <div className="text-2xl">⛏️</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    {formatCurrency(profits.xmr.current)}
                  </div>
                  <div className={`text-lg font-semibold ${getChangeColor(profits.xmr.change)}`}>
                    {profits.xmr.change >= 0 ? '+' : ''}{formatCurrency(profits.xmr.change)}
                  </div>
                  <div className={`text-sm ${getChangeColor(profits.xmr.percentage)}`}>
                    {formatPercentage(profits.xmr.percentage)}
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-green-400">Total Portfolio</h3>
                  <div className="text-2xl">📈</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    {formatCurrency(profits.total.current)}
                  </div>
                  <div className={`text-lg font-semibold ${getChangeColor(profits.total.change)}`}>
                    {profits.total.change >= 0 ? '+' : ''}{formatCurrency(profits.total.change)}
                  </div>
                  <div className={`text-sm ${getChangeColor(profits.total.percentage)}`}>
                    {formatPercentage(profits.total.percentage)}
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Sources */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Revenue Sources</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <span className="text-blue-400 text-lg mr-3">💎</span>
                    <span className="text-gray-300">XMRT Staking Rewards</span>
                  </div>
                  <span className="text-green-400 font-semibold">+$247.83</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <span className="text-orange-400 text-lg mr-3">⛏️</span>
                    <span className="text-gray-300">Mobile Mining</span>
                  </div>
                  <span className="text-green-400 font-semibold">+$156.92</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <span className="text-green-400 text-lg mr-3">🏦</span>
                    <span className="text-gray-300">Banking Services</span>
                  </div>
                  <span className="text-green-400 font-semibold">+$89.34</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <span className="text-purple-400 text-lg mr-3">🗳️</span>
                    <span className="text-gray-300">DAO Governance</span>
                  </div>
                  <span className="text-green-400 font-semibold">+$45.67</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'expenses':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Expense Management</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-red-400 mb-4">Monthly Expenses</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Gas Fees</span>
                    <span className="text-red-400 font-semibold">-$45.23</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Mining Electricity</span>
                    <span className="text-red-400 font-semibold">-$23.67</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Platform Fees</span>
                    <span className="text-red-400 font-semibold">-$12.45</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Cost Analysis</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Total Expenses</span>
                    <span className="text-white font-semibold">$81.35</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Net Profit</span>
                    <span className="text-green-400 font-semibold">$2,058.65</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Profit Margin</span>
                    <span className="text-green-400 font-semibold">96.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Analytics Reports</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-400 mb-4">Performance Reports</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Daily Summary</span>
                    <span className="text-blue-400">📄 Generate</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Weekly Analysis</span>
                    <span className="text-blue-400">📊 Generate</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Monthly Report</span>
                    <span className="text-blue-400">📈 Generate</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-400 mb-4">Export Options</h4>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors text-left">
                    <span className="text-gray-300">Export to CSV</span>
                  </button>
                  <button className="w-full p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors text-left">
                    <span className="text-gray-300">Export to PDF</span>
                  </button>
                  <button className="w-full p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors text-left">
                    <span className="text-gray-300">Email Report</span>
                  </button>
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
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          Analytics & Insights
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Comprehensive analytics dashboard for tracking profits, managing expenses, and gaining insights 
          into your XMRT ecosystem performance with real-time data and detailed reporting.
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
                  ? 'bg-blue-600 text-white shadow-lg'
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
        <Link
          to="/staking"
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💎</div>
          <span className="font-semibold text-lg">Optimize Staking</span>
          <p className="text-blue-100 text-sm mt-2">Increase rewards</p>
        </Link>
        <Link
          to="/mining"
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⛏️</div>
          <span className="font-semibold text-lg">Boost Mining</span>
          <p className="text-orange-100 text-sm mt-2">Maximize profits</p>
        </Link>
        <Link
          to="/banking"
          className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <span className="font-semibold text-lg">Banking Services</span>
          <p className="text-green-100 text-sm mt-2">Manage finances</p>
        </Link>
        <Link
          to="/dao"
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🗳️</div>
          <span className="font-semibold text-lg">DAO Governance</span>
          <p className="text-purple-100 text-sm mt-2">Vote & participate</p>
        </Link>
      </div>
    </div>
  );
};

export default Analytics;

