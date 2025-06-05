import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AssetTokenizer = () => {
  const [selectedAsset, setSelectedAsset] = useState('real-estate');
  const [tokenizationStep, setTokenizationStep] = useState(1);
  const [assetDetails, setAssetDetails] = useState({
    name: '',
    value: '',
    description: '',
    location: '',
    documents: []
  });

  const assetTypes = [
    { id: 'real-estate', name: 'Real Estate', icon: '🏠', description: 'Properties, land, commercial buildings' },
    { id: 'art', name: 'Art & Collectibles', icon: '🎨', description: 'Paintings, sculptures, rare collectibles' },
    { id: 'vehicles', name: 'Luxury Vehicles', icon: '🚗', description: 'Classic cars, yachts, private jets' },
    { id: 'commodities', name: 'Commodities', icon: '💎', description: 'Gold, silver, precious metals' },
    { id: 'intellectual', name: 'IP Rights', icon: '💡', description: 'Patents, trademarks, copyrights' },
    { id: 'business', name: 'Business Assets', icon: '🏢', description: 'Equipment, machinery, inventory' }
  ];

  const tokenizationSteps = [
    { id: 1, title: 'Asset Selection', description: 'Choose the type of asset to tokenize' },
    { id: 2, title: 'Asset Details', description: 'Provide comprehensive asset information' },
    { id: 3, title: 'Valuation', description: 'Professional asset valuation and verification' },
    { id: 4, title: 'Legal Framework', description: 'Compliance and legal structure setup' },
    { id: 5, title: 'Token Creation', description: 'Generate blockchain tokens representing ownership' },
    { id: 6, title: 'Market Launch', description: 'List tokens for trading and investment' }
  ];

  const handleAssetTypeSelect = (assetType) => {
    setSelectedAsset(assetType);
    setTokenizationStep(2);
  };

  const handleNextStep = () => {
    if (tokenizationStep < 6) {
      setTokenizationStep(tokenizationStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (tokenizationStep > 1) {
      setTokenizationStep(tokenizationStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (tokenizationStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetTypes.map((asset) => (
              <div
                key={asset.id}
                onClick={() => handleAssetTypeSelect(asset.id)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedAsset === asset.id
                    ? 'bg-blue-600 border-2 border-blue-400'
                    : 'bg-gray-800 hover:bg-gray-750 border-2 border-transparent'
                }`}
              >
                <div className="text-4xl mb-4 text-center">{asset.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2 text-white">{asset.name}</h3>
                <p className="text-gray-300 text-sm text-center">{asset.description}</p>
              </div>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Asset Name</label>
                <input
                  type="text"
                  value={assetDetails.name}
                  onChange={(e) => setAssetDetails({...assetDetails, name: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Enter asset name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Value (USD)</label>
                <input
                  type="number"
                  value={assetDetails.value}
                  onChange={(e) => setAssetDetails({...assetDetails, value: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Enter estimated value"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  value={assetDetails.description}
                  onChange={(e) => setAssetDetails({...assetDetails, description: e.target.value})}
                  rows={4}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Detailed asset description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  value={assetDetails.location}
                  onChange={(e) => setAssetDetails({...assetDetails, location: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Asset location"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Valuation Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-blue-400 mr-3">📊</span>
                    <div>
                      <div className="font-semibold text-white">Market Comparison</div>
                      <div className="text-sm text-gray-400">Compare with similar assets</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-green-400 mr-3">🏆</span>
                    <div>
                      <div className="font-semibold text-white">Professional Appraisal</div>
                      <div className="text-sm text-gray-400">Certified appraiser evaluation</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors cursor-pointer">
                    <span className="text-purple-400 mr-3">🤖</span>
                    <div>
                      <div className="font-semibold text-white">AI Valuation</div>
                      <div className="text-sm text-gray-400">Machine learning assessment</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Valuation Results</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gray-800 rounded">
                    <div className="text-3xl font-bold text-white mb-2">$1,247,500</div>
                    <div className="text-sm text-gray-400">Estimated Market Value</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-800 rounded">
                      <div className="text-lg font-semibold text-green-400">$1,200,000</div>
                      <div className="text-xs text-gray-400">Conservative</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800 rounded">
                      <div className="text-lg font-semibold text-blue-400">$1,295,000</div>
                      <div className="text-xs text-gray-400">Optimistic</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Legal Requirements</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-green-400 mr-3">✅</span>
                    <span className="text-gray-300">SEC Compliance Review</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-green-400 mr-3">✅</span>
                    <span className="text-gray-300">KYC/AML Verification</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-yellow-400 mr-3">⏳</span>
                    <span className="text-gray-300">Legal Entity Formation</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded">
                    <span className="text-yellow-400 mr-3">⏳</span>
                    <span className="text-gray-300">Smart Contract Audit</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Token Structure</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-800 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Total Tokens</span>
                      <span className="text-white font-semibold">1,000,000</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Token Price</span>
                      <span className="text-white font-semibold">$1.25</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Minimum Investment</span>
                      <span className="text-white font-semibold">$100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Token Creation in Progress</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <span className="text-gray-300">Smart Contract Deployment</span>
                  <span className="text-green-400">✅ Complete</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <span className="text-gray-300">Token Minting</span>
                  <span className="text-blue-400">🔄 In Progress</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <span className="text-gray-300">Metadata Upload</span>
                  <span className="text-gray-400">⏳ Pending</span>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-sm text-gray-400 mb-2">Contract Address</div>
                <div className="font-mono text-blue-400 break-all">0x742d35Cc6634C0532925a3b8D4C9db4C4C4C4C4C</div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-green-400 mb-2">Asset Successfully Tokenized!</h3>
              <p className="text-gray-400">Your asset is now available for investment on the XMRT marketplace</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Token Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Token Symbol</span>
                    <span className="text-white font-semibold">XMRT-RE-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Supply</span>
                    <span className="text-white font-semibold">1,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Available</span>
                    <span className="text-white font-semibold">750,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Price per Token</span>
                    <span className="text-white font-semibold">$1.25</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Next Steps</h3>
                <div className="space-y-3">
                  <Link to="/asset-management" className="block p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors">
                    <span className="text-blue-400">📊 Monitor Performance</span>
                  </Link>
                  <Link to="/analytics" className="block p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors">
                    <span className="text-green-400">📈 View Analytics</span>
                  </Link>
                  <Link to="/dao" className="block p-3 bg-gray-800 rounded hover:bg-gray-750 transition-colors">
                    <span className="text-purple-400">🗳️ Governance Voting</span>
                  </Link>
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
          Asset Tokenization Platform
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform real-world assets into blockchain tokens, enabling fractional ownership, 
          increased liquidity, and global investment opportunities through the XMRT ecosystem.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          {tokenizationSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                tokenizationStep >= step.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-600 text-gray-300'
              }`}>
                {step.id}
              </div>
              {index < tokenizationSteps.length - 1 && (
                <div className={`w-16 h-1 mx-2 ${
                  tokenizationStep > step.id ? 'bg-blue-600' : 'bg-gray-600'
                }`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            {tokenizationSteps[tokenizationStep - 1]?.title}
          </h2>
          <p className="text-gray-400">
            {tokenizationSteps[tokenizationStep - 1]?.description}
          </p>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-12">
        <button
          onClick={handlePrevStep}
          disabled={tokenizationStep === 1}
          className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:text-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Previous Step
        </button>
        <div className="text-gray-400">
          Step {tokenizationStep} of {tokenizationSteps.length}
        </div>
        <button
          onClick={handleNextStep}
          disabled={tokenizationStep === 6}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          {tokenizationStep === 6 ? 'Complete' : 'Next Step'}
        </button>
      </div>

      {/* Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">Secure & Compliant</h3>
          <p className="text-gray-300 text-sm">
            Full regulatory compliance with SEC guidelines, KYC/AML verification, and smart contract audits.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💧</div>
          <h3 className="text-xl font-semibold text-green-400 mb-3 group-hover:text-green-300">Increased Liquidity</h3>
          <p className="text-gray-300 text-sm">
            Transform illiquid assets into tradeable tokens, enabling 24/7 global trading and investment.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌍</div>
          <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300">Global Access</h3>
          <p className="text-gray-300 text-sm">
            Enable worldwide investment in your assets with fractional ownership and low minimum investments.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <button
          onClick={() => setTokenizationStep(1)}
          className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🏠</div>
          <span className="font-semibold text-lg">Start Tokenization</span>
          <p className="text-orange-100 text-sm mt-2">Begin the process</p>
        </button>
        <Link
          to="/asset-management"
          className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
          <span className="font-semibold text-lg">Manage Assets</span>
          <p className="text-blue-100 text-sm mt-2">View portfolio</p>
        </Link>
        <Link
          to="/analytics"
          className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📈</div>
          <span className="font-semibold text-lg">View Analytics</span>
          <p className="text-green-100 text-sm mt-2">Track performance</p>
        </Link>
        <Link
          to="/contracts"
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

export default AssetTokenizer;

