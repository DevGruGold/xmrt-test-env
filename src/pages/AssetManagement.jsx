import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AssetManagement = () => {
  const [activeTab, setActiveTab] = useState('tokenization');

  const assets = [
    {
      id: 1,
      name: 'Real Estate Portfolio #1',
      type: 'Real Estate',
      value: '$2.5M',
      tokens: '2,500,000',
      status: 'Active',
      yield: '8.5%',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Art Collection - Modern',
      type: 'Art',
      value: '$850K',
      tokens: '850,000',
      status: 'Active',
      yield: '12.3%',
      location: 'London, UK'
    },
    {
      id: 3,
      name: 'Commodity Futures',
      type: 'Commodities',
      value: '$1.2M',
      tokens: '1,200,000',
      status: 'Pending',
      yield: '6.7%',
      location: 'Chicago, IL'
    }
  ];

  const leasingOpportunities = [
    {
      id: 1,
      asset: 'Commercial Building A',
      location: 'Downtown Miami',
      monthlyRent: '$45,000',
      duration: '5 years',
      yield: '9.2%',
      status: 'Available'
    },
    {
      id: 2,
      asset: 'Luxury Apartment Complex',
      location: 'Beverly Hills, CA',
      monthlyRent: '$125,000',
      duration: '3 years',
      yield: '11.8%',
      status: 'Leased'
    },
    {
      id: 3,
      asset: 'Industrial Warehouse',
      location: 'Austin, TX',
      monthlyRent: '$28,000',
      duration: '7 years',
      yield: '7.5%',
      status: 'Available'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return 'text-green-400';
      case 'pending': return 'text-yellow-400';
      case 'inactive': return 'text-red-400';
      case 'available': return 'text-blue-400';
      case 'leased': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 bg-clip-text text-transparent">
          Asset Management
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Tokenize real-world assets, manage leasing opportunities, and track asset performance in the XMRT ecosystem.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 bg-gray-800 p-2 rounded-lg">
        <TabButton
          id="tokenization"
          label="Asset Tokenization"
          isActive={activeTab === 'tokenization'}
          onClick={setActiveTab}
        />
        <TabButton
          id="leasing"
          label="Asset Leasing"
          isActive={activeTab === 'leasing'}
          onClick={setActiveTab}
        />
        <TabButton
          id="registry"
          label="Asset Registry"
          isActive={activeTab === 'registry'}
          onClick={setActiveTab}
        />
        <TabButton
          id="compliance"
          label="Compliance"
          isActive={activeTab === 'compliance'}
          onClick={setActiveTab}
        />
      </div>

      {/* Asset Tokenization Tab */}
      {activeTab === 'tokenization' && (
        <div className="space-y-8">
          {/* Tokenization Process */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Tokenization Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold text-green-400 mb-2">Asset Evaluation</h3>
                <p className="text-gray-400 text-sm">Professional valuation and due diligence</p>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="font-semibold text-blue-400 mb-2">Legal Structure</h3>
                <p className="text-gray-400 text-sm">Compliance and regulatory framework</p>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-purple-400 mb-2">Token Creation</h3>
                <p className="text-gray-400 text-sm">Smart contract deployment and minting</p>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-semibold text-orange-400 mb-2">Market Launch</h3>
                <p className="text-gray-400 text-sm">Trading and liquidity provision</p>
              </div>
            </div>
          </div>

          {/* Tokenized Assets */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-green-400">Tokenized Assets</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{asset.name}</h3>
                      <p className="text-gray-400 text-sm">{asset.type}</p>
                    </div>
                    <span className={`text-sm font-semibold ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Asset Value:</span>
                      <span className="text-green-400 font-semibold">{asset.value}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tokens:</span>
                      <span className="text-blue-400 font-semibold">{asset.tokens}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Annual Yield:</span>
                      <span className="text-purple-400 font-semibold">{asset.yield}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-orange-400 font-semibold">{asset.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tokenization Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/deployment"
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🚀</div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Deploy New Asset</h3>
                  <p className="text-gray-400 text-sm">Tokenize a new real-world asset</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">Start the tokenization process for your asset with our comprehensive deployment tools.</p>
            </Link>
            <Link
              to="/contracts"
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">📋</div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400">Smart Contracts</h3>
                  <p className="text-gray-400 text-sm">Manage tokenization contracts</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">View and manage all smart contracts related to asset tokenization and management.</p>
            </Link>
          </div>
        </div>
      )}

      {/* Asset Leasing Tab */}
      {activeTab === 'leasing' && (
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Leasing Dashboard</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {leasingOpportunities.map((lease) => (
                <div key={lease.id} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{lease.asset}</h3>
                      <p className="text-gray-400 text-sm">{lease.location}</p>
                    </div>
                    <span className={`text-sm font-semibold ${getStatusColor(lease.status)}`}>
                      {lease.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Rent:</span>
                      <span className="text-green-400 font-semibold">{lease.monthlyRent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-blue-400 font-semibold">{lease.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Expected Yield:</span>
                      <span className="text-purple-400 font-semibold">{lease.yield}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <button className={`w-full py-2 rounded transition-colors ${
                      lease.status === 'Available' 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    }`}>
                      {lease.status === 'Available' ? 'Apply for Lease' : 'Currently Leased'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Asset Registry Tab */}
      {activeTab === 'registry' && (
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-orange-400">Asset Registry Monitor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Registry Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                    <span className="text-green-400 mr-3">🔍</span>
                    <span>Real-time asset tracking</span>
                  </li>
                  <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                    <span className="text-blue-400 mr-3">📊</span>
                    <span>Performance monitoring</span>
                  </li>
                  <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                    <span className="text-purple-400 mr-3">🔐</span>
                    <span>Ownership verification</span>
                  </li>
                  <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                    <span className="text-orange-400 mr-3">📈</span>
                    <span>Valuation updates</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-4">Registry Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                    <span className="text-gray-300">Total Assets</span>
                    <span className="text-green-400 font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                    <span className="text-gray-300">Total Value</span>
                    <span className="text-blue-400 font-semibold">$127.5M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                    <span className="text-gray-300">Active Tokens</span>
                    <span className="text-purple-400 font-semibold">89.2M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-900 rounded hover:bg-gray-850 transition-colors cursor-pointer">
                    <span className="text-gray-300">Avg Yield</span>
                    <span className="text-orange-400 font-semibold">9.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compliance Tab */}
      {activeTab === 'compliance' && (
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-red-400">Regulatory Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-semibold text-green-400 mb-2">SEC Compliance</h3>
                <p className="text-gray-400 text-sm">Securities regulations compliance</p>
                <div className="mt-3 text-green-400 font-semibold">Verified</div>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-semibold text-blue-400 mb-2">KYC/AML</h3>
                <p className="text-gray-400 text-sm">Know Your Customer & Anti-Money Laundering</p>
                <div className="mt-3 text-blue-400 font-semibold">Active</div>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-colors cursor-pointer">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-semibold text-purple-400 mb-2">Data Protection</h3>
                <p className="text-gray-400 text-sm">GDPR and privacy compliance</p>
                <div className="mt-3 text-purple-400 font-semibold">Compliant</div>
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
          to="/dao"
          className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">🗳️</div>
          <span className="font-semibold">DAO Governance</span>
        </Link>
        <Link
          to="/contracts"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg text-center transition-colors"
        >
          <div className="text-2xl mb-2">📋</div>
          <span className="font-semibold">Smart Contracts</span>
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

export default AssetManagement;

