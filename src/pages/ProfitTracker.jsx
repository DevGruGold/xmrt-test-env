import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfitTracker = () => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
          Blockchain Profit Tracker
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Real-time profit tracking for your XMRT ecosystem investments. Monitor gains across XMRT tokens, 
          Monero mining rewards, and total portfolio performance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
            <span className="text-gray-300">{isLive ? 'Live Data' : 'Offline'}</span>
          </div>
          <Link
            to="/analytics"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            View Detailed Analytics →
          </Link>
        </div>
      </div>

      {/* Live Profit Ticker */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-green-400">
          Live Profit Dashboard
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* XMRT Profits */}
          <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-blue-400">XMRT Tokens</h3>
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

          {/* XMR Mining Profits */}
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

          {/* Total Portfolio */}
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

        {/* Profit Breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
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
                  <span className="text-gray-300">CashDapp Integration</span>
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

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">24h Change</span>
                <span className="text-green-400 font-semibold">+12.47%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">7d Change</span>
                <span className="text-green-400 font-semibold">+34.82%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">30d Change</span>
                <span className="text-green-400 font-semibold">+127.93%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                <span className="text-gray-300">All Time High</span>
                <span className="text-yellow-400 font-semibold">$2,847.92</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <Link 
          to="/staking"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">Stake More XMRT</h3>
          <p className="text-gray-300 text-sm">
            Increase your staking rewards and boost your profit potential with additional XMRT tokens.
          </p>
        </Link>
        
        <Link 
          to="/mining"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⛏️</div>
          <h3 className="text-xl font-semibold text-orange-400 mb-3 group-hover:text-orange-300">Optimize Mining</h3>
          <p className="text-gray-300 text-sm">
            Enhance your mobile mining setup to maximize Monero rewards and profit generation.
          </p>
        </Link>
        
        <Link 
          to="/cashdapp"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <h3 className="text-xl font-semibold text-green-400 mb-3 group-hover:text-green-300">CashDapp Profits</h3>
          <p className="text-gray-300 text-sm">
            Explore additional revenue streams through CashDapp banking and financial services.
          </p>
        </Link>
        
        <Link 
          to="/analytics"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
          <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300">Detailed Analytics</h3>
          <p className="text-gray-300 text-sm">
            Access comprehensive analytics and insights to optimize your investment strategy.
          </p>
        </Link>
      </div>

      {/* Profit History Chart Placeholder */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-yellow-400">
          Profit History
        </h2>
        <div className="bg-gray-900 p-8 rounded-lg">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">Interactive Chart Coming Soon</h3>
              <p className="text-gray-500">Advanced profit visualization and historical data analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Settings */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-red-400">
          Profit Alerts
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Gain Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <span className="text-gray-300">+10% Portfolio Gain</span>
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                  Enabled
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <span className="text-gray-300">+25% Portfolio Gain</span>
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                  Enabled
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <span className="text-gray-300">New ATH Reached</span>
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                  Enabled
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-400 mb-4">Loss Protection</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <span className="text-gray-300">-5% Portfolio Loss</span>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors">
                  Enabled
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <span className="text-gray-300">-15% Portfolio Loss</span>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors">
                  Enabled
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <span className="text-gray-300">Mining Rewards Drop</span>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors">
                  Disabled
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitTracker;

