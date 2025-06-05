import React from 'react';

const CashDapp = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
        CashDapp Integration
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Banking Features
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
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Platform Integration
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Platform URL:</span>
              <a 
                href="https://coldcash.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                coldcash.vercel.app
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span className="text-green-400">Live</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Integration:</span>
              <span className="text-yellow-400">In Progress</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          Smart Contract Functions
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">deposit(uint256 amount)</code>
            <p className="text-gray-400 mt-2 text-sm">Deposit funds to CashDapp</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">withdraw(uint256 amount)</code>
            <p className="text-gray-400 mt-2 text-sm">Withdraw funds from CashDapp</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">transfer(address to, uint256 amount)</code>
            <p className="text-gray-400 mt-2 text-sm">Transfer funds between users</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">getBalance(address user)</code>
            <p className="text-gray-400 mt-2 text-sm">Check user balance in CashDapp</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          Banking Operations
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-900 rounded">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-green-400">Deposits</h3>
            <p className="text-gray-400 text-sm mt-2">Secure fund deposits with smart contract verification</p>
          </div>
          <div className="text-center p-4 bg-gray-900 rounded">
            <div className="text-2xl mb-2">🏦</div>
            <h3 className="font-semibold text-blue-400">Transfers</h3>
            <p className="text-gray-400 text-sm mt-2">Instant peer-to-peer transfers within the ecosystem</p>
          </div>
          <div className="text-center p-4 bg-gray-900 rounded">
            <div className="text-2xl mb-2">❄️</div>
            <h3 className="font-semibold text-purple-400">Cold Storage</h3>
            <p className="text-gray-400 text-sm mt-2">Secure cold storage solutions for long-term holding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashDapp;

