import { useState, useEffect } from 'react';
import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { getContractAddresses } from '../utils/blockchain';
import { analyzeText, generateDAOResponse, analyzeFeedback } from '../utils/thirdwebUtils';

function DAO() {
  const address = useAddress();
  const [contractAddresses, setContractAddresses] = useState(null);
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [feedback, setFeedback] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [sentimentAnalysis, setSentimentAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch contract addresses
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const addresses = await getContractAddresses();
        setContractAddresses(addresses);
      } catch (error) {
        console.error("Error fetching contract addresses:", error);
      }
    };
    
    fetchAddresses();
  }, []);

  // Get contract instance
  const { contract } = useContract(
    contractAddresses?.XMART || "0x0000000000000000000000000000000000000000"
  );

  // Read contract data
  const { data: proposalCount, isLoading: countLoading } = useContractRead(contract, "proposalCount");
  const { data: votingPower, isLoading: powerLoading } = useContractRead(contract, "getVotingPower", [address]);
  const { data: totalVotingPower, isLoading: totalPowerLoading } = useContractRead(contract, "totalVotingPower");

  // Contract write functions
  const { mutateAsync: createProposal, isLoading: createLoading } = useContractWrite(contract, "createProposal");
  const { mutateAsync: vote, isLoading: voteLoading } = useContractWrite(contract, "vote");

  const handleCreateProposal = async () => {
    if (!proposalTitle || !proposalDescription || !address) return;
    
    try {
      setLoading(true);
      await createProposal({ args: [proposalTitle, proposalDescription] });
      setProposalTitle('');
      setProposalDescription('');
      alert('Proposal created successfully!');
    } catch (error) {
      console.error("Error creating proposal:", error);
      alert('Error creating proposal. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (proposalId, support) => {
    if (!address) return;
    
    try {
      setLoading(true);
      await vote({ args: [proposalId, support] });
      alert('Vote cast successfully!');
    } catch (error) {
      console.error("Error voting:", error);
      alert('Error casting vote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeFeedback = async () => {
    if (!feedback) return;
    
    try {
      setLoading(true);
      const analysis = await analyzeFeedback(feedback);
      setSentimentAnalysis(analysis);
      
      const response = await generateDAOResponse(feedback);
      setAiResponse(response.response);
    } catch (error) {
      console.error("Error analyzing feedback:", error);
      alert('Error analyzing feedback. Please try again.');
    } finally {
      setLoading(false);
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
            <p><strong>Total Proposals:</strong> {
              countLoading ? 'Loading...' : 
              proposalCount ? proposalCount.toString() : '0'
            }</p>
            <p><strong>Your Voting Power:</strong> {
              powerLoading ? 'Loading...' : 
              votingPower ? (parseInt(votingPower.toString()) / 1e18).toFixed(4) : '0'
            }</p>
            <p><strong>Total Voting Power:</strong> {
              totalPowerLoading ? 'Loading...' : 
              totalVotingPower ? (parseInt(totalVotingPower.toString()) / 1e18).toFixed(4) : '0'
            }</p>
            <p><strong>Your Voting Share:</strong> {
              powerLoading || totalPowerLoading ? 'Loading...' : 
              votingPower && totalVotingPower ? 
                ((parseInt(votingPower.toString()) / parseInt(totalVotingPower.toString())) * 100).toFixed(2) + '%' : '0%'
            }</p>
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
            disabled={loading || createLoading || !proposalTitle || !proposalDescription}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            {createLoading ? 'Creating...' : 'Create Proposal'}
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
            disabled={loading || !feedback}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Analyze with AI'}
          </button>
          
          {sentimentAnalysis && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Analysis Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Sentiment</p>
                  <p className="font-semibold">{(sentimentAnalysis.sentiment * 100).toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Urgency</p>
                  <p className="font-semibold">{(sentimentAnalysis.urgency * 100).toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Joy</p>
                  <p className="font-semibold">{(sentimentAnalysis.emotions.joy * 100).toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Anger</p>
                  <p className="font-semibold">{(sentimentAnalysis.emotions.anger * 100).toFixed(1)}%</p>
                </div>
              </div>
              {aiResponse && (
                <div>
                  <p className="text-sm text-gray-600 mb-2">AI Recommendation</p>
                  <p className="bg-white p-3 rounded border">{aiResponse}</p>
                </div>
              )}
            </div>
          )}
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
                disabled={loading || voteLoading}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-sm disabled:opacity-50"
              >
                Vote Yes
              </button>
              <button
                onClick={() => handleVote(1, false)}
                disabled={loading || voteLoading}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm disabled:opacity-50"
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
                disabled={loading || voteLoading}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-sm disabled:opacity-50"
              >
                Vote Yes
              </button>
              <button
                onClick={() => handleVote(2, false)}
                disabled={loading || voteLoading}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm disabled:opacity-50"
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

