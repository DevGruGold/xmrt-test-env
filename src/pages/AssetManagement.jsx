import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AssetManagement = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [selectedAsset, setSelectedAsset] = useState('real-estate');
  const [tokenizationStep, setTokenizationStep] = useState(1);

  const tabs = [
    { id: 'portfolio', name: 'Portfolio', icon: '💼' },
    { id: 'tokenization', name: 'Asset Tokenization', icon: '🏠' },
    { id: 'marketplace', name: 'Marketplace', icon: '🛒' },
    { id: 'compliance', name: 'Compliance', icon: '📋' }
  ];

  const assetTypes = [
    { id: 'real-estate', name: 'Real Estate', icon: '🏠', description: 'Properties, land, commercial buildings' },
    { id: 'art', name: 'Art & Collectibles', icon: '🎨', description: 'Paintings, sculptures, rare collectibles' },
    { id: 'vehicles', name: 'Luxury Vehicles', icon: '🚗', description: 'Classic cars, yachts, private jets' },
    { id: 'commodities', name: 'Commodities', icon: '💎', description: 'Gold, silver, precious metals' },
    { id: 'intellectual', name: 'IP Rights', icon: '💡', description: 'Patents, trademarks, copyrights' },
    { id: 'business', name: 'Business Assets', icon: '🏢', description: 'Equipment, machinery, inventory' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'portfolio':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Asset Portfolio</h3>
            
            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-400">Total Value</h4>
                  <div className="text-2xl">💰</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">$2.4M</div>
                <div className="text-sm text-green-400">+12.5% (30d)</div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-green-400">Active Assets</h4>
                  <div className="text-2xl">📊</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">47</div>
                <div className="text-sm text-green-400">+3 this month</div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-purple-400">Tokenized</h4>
                  <div className="text-2xl">🔗</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">23</div>
                <div className="text-sm text-purple-400">48.9% of portfolio</div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-orange-400">Monthly Yield</h4>
                  <div className="text-2xl">📈</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">8.7%</div>
                <div className="text-sm text-orange-400">Above market avg</div>
              </div>
            </div>

            {/* Asset List */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">Your Assets</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">🏠</span>
                    <div>
                      <div className="font-semibold text-white">Manhattan Apartment</div>
                      <div className="text-sm text-gray-400">Real Estate • Tokenized</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">$850,000</div>
                    <div className="text-sm text-green-400">+5.2%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">🎨</span>
                    <div>
                      <div className="font-semibold text-white">Modern Art Collection</div>
                      <div className="text-sm text-gray-400">Art & Collectibles • Tokenized</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">$420,000</div>
                    <div className="text-sm text-green-400">+18.7%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">🚗</span>
                    <div>
                      <div className="font-semibold text-white">Classic Car Portfolio</div>
                      <div className="text-sm text-gray-400">Luxury Vehicles • Pending Tokenization</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">$320,000</div>
                    <div className="text-sm text-yellow-400">Pending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tokenization':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Asset Tokenization Platform</h3>
            
            {/* Asset Type Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assetTypes.map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAsset(asset.id)}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedAsset === asset.id
                      ? 'bg-blue-600 border-2 border-blue-400'
                      : 'bg-gray-800 hover:bg-gray-750 border-2 border-transparent'
                  }`}
                >
                  <div className="text-4xl mb-4 text-center">{asset.icon}</div>
                  <h4 className="text-xl font-semibold text-center mb-2 text-white">{asset.name}</h4>
                  <p className="text-gray-300 text-sm text-center">{asset.description}</p>
                </div>
              ))}
            </div>

            {/* Tokenization Process */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-400 mb-4">Tokenization Process</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-blue-400 mr-3">1️⃣</span>
                    <span className="text-gray-300">Asset Valuation & Documentation</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-blue-400 mr-3">2️⃣</span>
                    <span className="text-gray-300">Legal Structure & Compliance</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-blue-400 mr-3">3️⃣</span>
                    <span className="text-gray-300">Smart Contract Deployment</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-green-400 mr-3">4️⃣</span>
                    <span className="text-gray-300">Token Creation & Minting</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-green-400 mr-3">5️⃣</span>
                    <span className="text-gray-300">Marketplace Listing</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-green-400 mr-3">6️⃣</span>
                    <span className="text-gray-300">Investor Access & Trading</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Start Tokenization */}
            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Start Asset Tokenization
              </button>
            </div>
          </div>
        );

      case 'marketplace':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Asset Marketplace</h3>
            
            {/* Marketplace Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-white mb-2">$12.7M</div>
                <div className="text-gray-400">Total Market Value</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-white mb-2">247</div>
                <div className="text-gray-400">Available Assets</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-white mb-2">1,834</div>
                <div className="text-gray-400">Active Investors</div>
              </div>
            </div>

            {/* Featured Assets */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Featured Investment Opportunities</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🏢</span>
                    <div>
                      <div className="font-semibold text-white">Commercial Building - NYC</div>
                      <div className="text-sm text-gray-400">Real Estate • 15% funded</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">$2.1M Target</span>
                    <span className="text-blue-400">8.5% APY</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">💎</span>
                    <div>
                      <div className="font-semibold text-white">Rare Diamond Collection</div>
                      <div className="text-sm text-gray-400">Commodities • 67% funded</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">$890K Target</span>
                    <span className="text-blue-400">12.3% APY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'compliance':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Compliance & Legal</h3>
            
            {/* Compliance Status */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-400 mb-4">Compliance Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">SEC Registration</span>
                    <span className="text-green-400">✅ Compliant</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">KYC/AML Verification</span>
                    <span className="text-green-400">✅ Verified</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Smart Contract Audit</span>
                    <span className="text-green-400">✅ Audited</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">Insurance Coverage</span>
                    <span className="text-yellow-400">⏳ Pending</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Legal Documentation</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Asset Purchase Agreement</span>
                    <span className="text-blue-400">📄 View</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Token Terms & Conditions</span>
                    <span className="text-blue-400">📄 View</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-gray-300">Investor Disclosures</span>
                    <span className="text-blue-400">📄 View</span>
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
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 bg-clip-text text-transparent">
          Asset Management & Tokenization
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Comprehensive asset management platform combining portfolio tracking with complete asset tokenization 
          capabilities. Transform real-world assets into blockchain tokens for global investment opportunities.
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
                  ? 'bg-orange-600 text-white shadow-lg'
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
        <button
          onClick={() => setActiveTab('tokenization')}
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏠</div>
          <span className="font-semibold text-lg">Tokenize Asset</span>
          <p className="text-orange-100 text-sm mt-2">Start process</p>
        </button>
        <Link
          to="/analytics"
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
          <span className="font-semibold text-lg">View Analytics</span>
          <p className="text-blue-100 text-sm mt-2">Track performance</p>
        </Link>
        <Link
          to="/banking"
          className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏦</div>
          <span className="font-semibold text-lg">Banking Services</span>
          <p className="text-green-100 text-sm mt-2">Financial tools</p>
        </Link>
        <Link
          to="/developer"
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📋</div>
          <span className="font-semibold text-lg">Smart Contracts</span>
          <p className="text-purple-100 text-sm mt-2">View contracts</p>
        </Link>
      </div>
    </div>
  );
};

export default AssetManagement;

