import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function DAO() {
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [meetings, setMeetings] = useState([]);
  const [decisions, setDecisions] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('meetings');

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
            fetchDAOData();
          }
        } catch (error) {
          console.error("Error checking connection:", error);
        }
      }
    };

    checkConnection();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
        fetchDAOData();
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet");
    }
  };

  const fetchDAOData = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // This would be replaced with the actual contract address when deployed
        const contractAddress = '0x0000000000000000000000000000000000000000';
        
        // This is a simplified ABI for demonstration
        const abi = [
          "function meetingCount() view returns (uint256)",
          "function publicMeetings(uint256) view returns (string topic, uint256 timestamp, string link, bool cancelled)",
          "function decisionCount() view returns (uint256)",
          "function aiDecisions(uint256) view returns (string description, string rationale, uint256 timestamp, bool audited, bool valid)"
        ];
        
        const xmartContract = new ethers.Contract(contractAddress, abi, provider);
        
        // Fetch meetings
        const meetingCount = await xmartContract.meetingCount();
        const meetingsArray = [];
        
        for (let i = 0; i < Math.min(meetingCount.toNumber(), 5); i++) {
          const meeting = await xmartContract.publicMeetings(i);
          meetingsArray.push({
            id: i,
            topic: meeting.topic,
            timestamp: meeting.timestamp.toNumber(),
            link: meeting.link,
            cancelled: meeting.cancelled
          });
        }
        
        setMeetings(meetingsArray);
        
        // Fetch decisions
        const decisionCount = await xmartContract.decisionCount();
        const decisionsArray = [];
        
        for (let i = 0; i < Math.min(decisionCount.toNumber(), 5); i++) {
          const decision = await xmartContract.aiDecisions(i);
          decisionsArray.push({
            id: i,
            description: decision.description,
            rationale: decision.rationale,
            timestamp: decision.timestamp.toNumber(),
            audited: decision.audited,
            valid: decision.valid
          });
        }
        
        setDecisions(decisionsArray);
      } catch (error) {
        console.error("Error fetching DAO data:", error);
      }
    }
  };

  const handleSubmitFeedback = async () => {
    if (!feedback || feedback.trim() === '') {
      alert("Please enter valid feedback");
      return;
    }

    if (window.ethereum) {
      try {
        setLoading(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // This would be replaced with the actual contract address when deployed
        const contractAddress = '0x0000000000000000000000000000000000000000';
        
        // This is a simplified ABI for demonstration
        const abi = [
          "function submitFeedback(string) returns (bool)"
        ];
        
        const xmartContract = new ethers.Contract(contractAddress, abi, signer);
        
        const tx = await xmartContract.submitFeedback(feedback);
        await tx.wait();
        
        alert("Feedback submitted successfully.");
        setFeedback('');
      } catch (error) {
        console.error("Error submitting feedback:", error);
        alert("Error submitting feedback. See console for details.");
      } finally {
        setLoading(false);
      }
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleString();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">XMRT DAO</h1>
      
      {!isConnected ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <p className="mb-4">Connect your wallet to access DAO features.</p>
          <button 
            onClick={connectWallet}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">DAO Overview</h2>
            <p className="mb-4">
              The XMRT DAO is managed by AI agents in executive roles. These agents make decisions, 
              schedule meetings, and respond to community feedback to govern the XMRT ecosystem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">Upcoming Meetings</h3>
                <p className="text-2xl font-bold">{meetings.filter(m => !m.cancelled && m.timestamp > Date.now() / 1000).length}</p>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">Recent Decisions</h3>
                <p className="text-2xl font-bold">{decisions.length}</p>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">AI Agents</h3>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex border-b mb-4">
              <button
                className={`py-2 px-4 ${activeTab === 'meetings' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('meetings')}
              >
                Meetings
              </button>
              <button
                className={`py-2 px-4 ${activeTab === 'decisions' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('decisions')}
              >
                AI Decisions
              </button>
              <button
                className={`py-2 px-4 ${activeTab === 'feedback' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('feedback')}
              >
                Submit Feedback
              </button>
            </div>

            {activeTab === 'meetings' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Public Meetings</h2>
                {meetings.length === 0 ? (
                  <p>No meetings scheduled.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 border-b">Topic</th>
                          <th className="py-2 px-4 border-b">Date & Time</th>
                          <th className="py-2 px-4 border-b">Status</th>
                          <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {meetings.map((meeting) => (
                          <tr key={meeting.id}>
                            <td className="py-2 px-4 border-b">{meeting.topic}</td>
                            <td className="py-2 px-4 border-b">{formatDate(meeting.timestamp)}</td>
                            <td className="py-2 px-4 border-b">
                              {meeting.cancelled ? (
                                <span className="text-red-500">Cancelled</span>
                              ) : meeting.timestamp > Date.now() / 1000 ? (
                                <span className="text-green-500">Upcoming</span>
                              ) : (
                                <span className="text-gray-500">Past</span>
                              )}
                            </td>
                            <td className="py-2 px-4 border-b">
                              {!meeting.cancelled && meeting.timestamp > Date.now() / 1000 && (
                                <a 
                                  href={meeting.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-700"
                                >
                                  Join Meeting
                                </a>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'decisions' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">AI Decisions</h2>
                {decisions.length === 0 ? (
                  <p>No decisions recorded.</p>
                ) : (
                  <div className="space-y-4">
                    {decisions.map((decision) => (
                      <div key={decision.id} className="border p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-2">{decision.description}</h3>
                        <p className="text-sm text-gray-600 mb-2">{decision.rationale}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{formatDate(decision.timestamp)}</span>
                          {decision.audited ? (
                            <span className={`px-2 py-1 rounded text-white ${decision.valid ? 'bg-green-500' : 'bg-red-500'}`}>
                              {decision.valid ? 'Valid' : 'Invalid'}
                            </span>
                          ) : (
                            <span className="px-2 py-1 rounded bg-yellow-500 text-white">Pending Audit</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'feedback' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Submit Feedback</h2>
                <p className="mb-4">
                  Your feedback helps improve the XMRT ecosystem. All feedback is reviewed by the DAO's AI agents.
                </p>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
                    Your Feedback
                  </label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback or suggestions"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmitFeedback}
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {loading ? 'Submitting...' : 'Submit Feedback'}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default DAO;

