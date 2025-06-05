import { useState } from 'react';
import { useAddress } from "@thirdweb-dev/react";

function DAO() {
  const address = useAddress();
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleCreateProposal = async () => {
    if (!proposalTitle || !proposalDescription || !address) return;
    
    try {
      alert(`Creating proposal: ${proposalTitle} (Demo mode - contracts not deployed yet)`);
      setProposalTitle('');
      setProposalDescription('');
    } catch (error) {
      console.error("Error creating proposal:", error);
      alert('Error creating proposal. Please try again.');
    }
  };

  const handleVote = async (proposalId, support) => {
    if (!address) return;
    
    try {
      const voteType = support ? 'Yes' : 'No';
      alert(`Voting ${voteType} on proposal ${proposalId} (Demo mode - contracts not deployed yet)`);
    } catch (error) {
      console.error("Error voting:", error);
      alert('Error casting vote. Please try again.');
    }
  };

  const handleAnalyzeFeedback = async () => {
    if (!feedback) return;
    
    try {
      alert(`Analyzing feedback: "${feedback}" (Demo mode - AI analysis not available yet)`);
    } catch (error) {
      console.error("Error analyzing feedback:", error);
      alert('Error analyzing feedback. Please try again.');
    }
  };

  if (!address) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">DAO Governance</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-center text-gray-600">Please connect your wallet to access DAO features.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">DAO Governance</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Governance Information */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Governance Stats</h2>
          <div className="space-y-2">
            <p><strong>Total Proposals:</strong> 12 (Demo)</p>
            <p><strong>Your Voting Power:</strong> 500 XMART (Demo)</p>
            <p><strong>Total Voting Power:</strong> 50,000 XMART (Demo)</p>
            <p><strong>Your Voting Share:</strong> 1.0% (Demo)</p>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Demo Mode:</strong> Smart contracts are not deployed yet. This is a preview of the DAO interface.
            </p>
          </div>
        </div>

        {/* AI Agent Status */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">AI Agent Status</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Admin Agent</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Executive Agent</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Oracle Agent</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Audit Agent</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Monitoring</span>
            </div>
          </div>
        </div>
      </div>

      {/* Create Proposal */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Create Proposal</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Proposal Title"
            value={proposalTitle}
            onChange={(e) => setProposalTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Proposal Description"
            value={proposalDescription}
            onChange={(e) => setProposalDescription(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCreateProposal}
            disabled={!proposalTitle || !proposalDescription}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            Create Proposal
          </button>
        </div>
      </div>

      {/* AI Feedback Analysis */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">AI Feedback Analysis</h2>
        <div className="space-y-4">
          <textarea
            placeholder="Enter community feedback or proposal text for AI analysis..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAnalyzeFeedback}
            disabled={!feedback}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            Analyze with AI
          </button>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Demo Analysis Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Sentiment</p>
                <p className="font-semibold">75.2%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Urgency</p>
                <p className="font-semibold">45.8%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Joy</p>
                <p className="font-semibold">62.1%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Concern</p>
                <p className="font-semibold">23.4%</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">AI Recommendation</p>
              <p className="bg-white p-3 rounded border">
                Based on the sentiment analysis, this proposal shows positive community sentiment with moderate urgency. 
                Recommend proceeding with a 7-day voting period to allow adequate discussion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Proposals */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Proposals</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Increase Staking Rewards</h3>
            <p className="text-gray-600 mb-3">Proposal to increase staking rewards from 5% to 8% APY to incentivize more token holders.</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleVote(1, true)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-sm"
              >
                Vote Yes
              </button>
              <button
                onClick={() => handleVote(1, false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
              >
                Vote No
              </button>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Mining Pool Optimization</h3>
            <p className="text-gray-600 mb-3">Proposal to optimize the Monero mining pool distribution algorithm for better fairness.</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleVote(2, true)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-sm"
              >
                Vote Yes
              </button>
              <button
                onClick={() => handleVote(2, false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
              >
                Vote No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DAO;

