import React from 'react';

const CashDapp = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
        CashDapp Integration
      </h1>

      {/* Live CashDapp Integration */}
      <div className="mb-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">
          Live CashDapp Platform
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Access CashDapp</h3>
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

      {/* Banking Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Banking Services
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Free banking services
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Onramping & Offramping
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Cold storage solutions
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Decentralized transactions
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Lightning Network integration
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Mobile payment systems
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            AI-Powered Features
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">🤖</span>
              AI financial services
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">🤖</span>
              AI banker modules
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">🤖</span>
              Automated compliance
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">🤖</span>
              Smart expense management
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">🤖</span>
              AI-driven analytics
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">🤖</span>
              Intelligent risk assessment
            </li>
          </ul>
        </div>
      </div>

      {/* Smart Contract Integration */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          Smart Contract Integration
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">deposit(uint256 amount)</code>
            <p className="text-gray-400 mt-2 text-sm">Deposit funds to CashDapp via smart contract</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">withdraw(uint256 amount)</code>
            <p className="text-gray-400 mt-2 text-sm">Withdraw funds from CashDapp securely</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">transfer(address to, uint256 amount)</code>
            <p className="text-gray-400 mt-2 text-sm">Transfer funds between users</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">getBalance(address user)</code>
            <p className="text-gray-400 mt-2 text-sm">Check user balance in CashDapp</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">tokenizeAsset(uint256 assetId)</code>
            <p className="text-gray-400 mt-2 text-sm">Tokenize real-world assets</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">processPayment(bytes32 txHash)</code>
            <p className="text-gray-400 mt-2 text-sm">Process Lightning Network payments</p>
          </div>
        </div>
      </div>

      {/* Platform Features */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="text-center p-4 bg-gray-800 rounded">
          <div className="text-3xl mb-2">💰</div>
          <h3 className="font-semibold text-green-400">Enhanced Banking</h3>
          <p className="text-gray-400 text-sm mt-2">Advanced banking interface with AI assistance</p>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded">
          <div className="text-3xl mb-2">📱</div>
          <h3 className="font-semibold text-blue-400">Mobile Payments</h3>
          <p className="text-gray-400 text-sm mt-2">Complete mobile payment ecosystem</p>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded">
          <div className="text-3xl mb-2">🏪</div>
          <h3 className="font-semibold text-purple-400">POS Systems</h3>
          <p className="text-gray-400 text-sm mt-2">Point of sale integration for merchants</p>
        </div>
        <div className="text-center p-4 bg-gray-800 rounded">
          <div className="text-3xl mb-2">🔐</div>
          <h3 className="font-semibold text-orange-400">Secure Wallets</h3>
          <p className="text-gray-400 text-sm mt-2">Multi-layer security wallet modules</p>
        </div>
      </div>

      {/* Asset Management */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          Asset Management & Tokenization
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="text-lg font-semibold text-green-400 mb-3">Asset Tokenization</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Real-world asset tokenization</li>
              <li>• Asset registry monitoring</li>
              <li>• Automated compliance checking</li>
              <li>• Verite integration for verification</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Asset Leasing</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Leasing dashboard interface</li>
              <li>• Automated lease management</li>
              <li>• Payment tracking and analytics</li>
              <li>• Smart contract automation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Analytics & Reporting */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-red-400">
          Analytics & Reporting
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-green-400 mb-2">Expense Analytics</h3>
            <p className="text-gray-400 text-sm">
              Advanced expense tracking and analytics dashboard
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">💹</div>
            <h3 className="font-semibold text-purple-400 mb-2">Money Flow Visualization</h3>
            <p className="text-gray-400 text-sm">
              Real-time money flow tracking and visualization
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-orange-400 mb-2">Profit Sharing</h3>
            <p className="text-gray-400 text-sm">
              Automated profit sharing and rewards distribution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashDapp;

