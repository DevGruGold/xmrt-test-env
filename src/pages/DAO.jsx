import React from 'react';

const DAO = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
        XMRT.io DAO Governance
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            AI Agent Roles
          </h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-blue-400 mr-3">🤖</span>
              <div>
                <div className="font-semibold text-white">Admin Agent</div>
                <div className="text-gray-400 text-sm">System administration and oversight</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-purple-400 mr-3">👔</span>
              <div>
                <div className="font-semibold text-white">Executive Agent</div>
                <div className="text-gray-400 text-sm">Strategic decision making</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-orange-400 mr-3">🔍</span>
              <div>
                <div className="font-semibold text-white">Audit Agent</div>
                <div className="text-gray-400 text-sm">Security and compliance monitoring</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            More AI Agents
          </h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-green-400 mr-3">🔮</span>
              <div>
                <div className="font-semibold text-white">Oracle Agent</div>
                <div className="text-gray-400 text-sm">External data integration</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-yellow-400 mr-3">🎁</span>
              <div>
                <div className="font-semibold text-white">Rewards Agent</div>
                <div className="text-gray-400 text-sm">Reward distribution management</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-900 rounded">
              <span className="text-red-400 mr-3">💻</span>
              <div>
                <div className="font-semibold text-white">Developers Agent</div>
                <div className="text-gray-400 text-sm">Development coordination</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          Governance Functions
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">createProposal(string description)</code>
            <p className="text-gray-400 mt-2 text-sm">Create new governance proposal</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">vote(uint256 proposalId, bool support)</code>
            <p className="text-gray-400 mt-2 text-sm">Vote on active proposals</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">executeProposal(uint256 proposalId)</code>
            <p className="text-gray-400 mt-2 text-sm">Execute approved proposals</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <code className="text-blue-300 text-sm">recordAIDecision(string rationale)</code>
            <p className="text-gray-400 mt-2 text-sm">Record AI agent decisions</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          DAO Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🗳️</div>
            <h3 className="font-semibold text-green-400 mb-2">Token Voting</h3>
            <p className="text-gray-400 text-sm">
              Vote with XMRT tokens on governance proposals
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold text-purple-400 mb-2">AI Management</h3>
            <p className="text-gray-400 text-sm">
              AI agents handle day-to-day operations
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-orange-400 mb-2">Transparency</h3>
            <p className="text-gray-400 text-sm">
              All decisions recorded on blockchain
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-red-400">
          Deployment Status
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">DAO Smart Contract</span>
            <span className="text-yellow-400">Ready for Deployment</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">AI Agent System</span>
            <span className="text-green-400">Implemented</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded">
            <span className="text-gray-300">Governance Framework</span>
            <span className="text-green-400">Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAO;

