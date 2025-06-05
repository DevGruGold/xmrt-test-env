import React from 'react';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          XMRT Ecosystem
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          A comprehensive decentralized ecosystem facilitating free banking, mobile Monero mining, 
          AI-powered governance, and seamless financial services integration.
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
          <a 
            href="https://www.mobilemonero.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Mobile Monero →
          </a>
        </div>
      </div>

      {/* Ecosystem Overview */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-4xl mb-4">🏦</div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3">CashDapp Banking</h3>
          <p className="text-gray-300 text-sm">
            Free banking, onramping, offramping, and cold storage through integrated CashDapp platform
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-4xl mb-4">⛏️</div>
          <h3 className="text-xl font-semibold text-orange-400 mb-3">Mobile Mining</h3>
          <p className="text-gray-300 text-sm">
            Mobile Monero mining with pooled rewards distribution to users and developers
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold text-purple-400 mb-3">AI Governance</h3>
          <p className="text-gray-300 text-sm">
            AI agents in executive roles managing DAO operations and decision-making
          </p>
        </div>
      </div>

      {/* Smart Contract Deployment Status */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-400">
          Smart Contract Deployment Status
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-semibold text-blue-400 mb-3">XMRT Token Contract</h3>
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
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-semibold text-purple-400 mb-3">Monero Pool Contract</h3>
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
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-semibold text-orange-400 mb-3">CashDapp Integration</h3>
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
          </div>
        </div>
      </div>

      {/* AI Agent Architecture */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-purple-400">
          AI Agent Architecture
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="text-2xl mb-2">👑</div>
            <h3 className="font-semibold text-blue-400">Admin Agent</h3>
            <p className="text-gray-400 text-sm mt-2">System administration and oversight</p>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-semibold text-purple-400">Executive Agent</h3>
            <p className="text-gray-400 text-sm mt-2">Strategic decision making and governance</p>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-orange-400">Audit Agent</h3>
            <p className="text-gray-400 text-sm mt-2">Security and compliance monitoring</p>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="text-2xl mb-2">🔮</div>
            <h3 className="font-semibold text-green-400">Oracle Agent</h3>
            <p className="text-gray-400 text-sm mt-2">External data integration and feeds</p>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="text-2xl mb-2">🎁</div>
            <h3 className="font-semibold text-yellow-400">Rewards Agent</h3>
            <p className="text-gray-400 text-sm mt-2">Reward distribution management</p>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="text-2xl mb-2">💻</div>
            <h3 className="font-semibold text-red-400">Developers Agent</h3>
            <p className="text-gray-400 text-sm mt-2">Development coordination and maintenance</p>
          </div>
        </div>
      </div>

      {/* Platform Integration */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-400">
          Platform Integration
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Banking Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Enhanced banking interface with AI assistance
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Lightning Network payment integration
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Mobile payment systems and POS terminals
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Secure wallet modules with multi-layer security
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Asset tokenization and leasing platforms
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">Advanced Features</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">🤖</span>
                AI-powered financial services and analytics
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">🤖</span>
                Automated compliance and regulatory frameworks
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">🤖</span>
                Expense management and profit sharing systems
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">🤖</span>
                Money flow visualization and reporting
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">🤖</span>
                User education and walkthrough systems
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deployment Instructions */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center text-orange-400">
          Deployment Instructions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-semibold text-blue-400 mb-3">Smart Contract Deployment</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="bg-gray-800 p-2 rounded">npm install</div>
              <div className="bg-gray-800 p-2 rounded">npm run compile</div>
              <div className="bg-gray-800 p-2 rounded">npm run deploy:sepolia</div>
              <div className="bg-gray-800 p-2 rounded">npm run verify:sepolia</div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-semibold text-green-400 mb-3">Environment Setup</h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">Required Environment Variables:</div>
              <div className="bg-gray-800 p-2 rounded text-xs">
                SEPOLIA_RPC_URL<br/>
                PRIVATE_KEY<br/>
                ETHERSCAN_API_KEY<br/>
                ALCHEMY_API_KEY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

