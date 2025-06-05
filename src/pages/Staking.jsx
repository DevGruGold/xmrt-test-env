import { useState } from 'react';
import { useAddress } from "@thirdweb-dev/react";

function Staking() {
  const address = useAddress();
  const [stakeAmount, setStakeAmount] = useState('');
  const [unstakeAmount, setUnstakeAmount] = useState('');

  const handleStake = async () => {
    if (!stakeAmount || !address) return;
    
    try {
      // Placeholder for staking functionality
      alert(`Staking ${stakeAmount} XMART tokens (Demo mode - contracts not deployed yet)`);
      setStakeAmount('');
    } catch (error) {
      console.error("Error staking:", error);
      alert('Error staking tokens. Please try again.');
    }
  };

  const handleUnstake = async () => {
    if (!unstakeAmount || !address) return;
    
    try {
      // Placeholder for unstaking functionality
      alert(`Unstaking ${unstakeAmount} XMART tokens (Demo mode - contracts not deployed yet)`);
      setUnstakeAmount('');
    } catch (error) {
      console.error("Error unstaking:", error);
      alert('Error unstaking tokens. Please try again.');
    }
  };

  if (!address) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Staking</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-center text-gray-600">Please connect your wallet to access staking features.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Staking</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Staking Information */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Staking Info</h2>
          <div className="space-y-2">
            <p><strong>Wallet Balance:</strong> 1,000 XMART (Demo)</p>
            <p><strong>Staked Balance:</strong> 500 XMART (Demo)</p>
            <p><strong>Reward Rate:</strong> 8.5% APY (Demo)</p>
            <p><strong>Pending Rewards:</strong> 12.5 XMART (Demo)</p>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Demo Mode:</strong> Smart contracts are not deployed yet. This is a preview of the staking interface.
            </p>
          </div>
        </div>

        {/* Staking Actions */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Staking Actions</h2>
          
          {/* Stake Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Stake Tokens</h3>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Amount to stake"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleStake}
                disabled={!stakeAmount}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                Stake
              </button>
            </div>
          </div>

          {/* Unstake Section */}
          <div>
            <h3 className="text-lg font-medium mb-2">Unstake Tokens</h3>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Amount to unstake"
                value={unstakeAmount}
                onChange={(e) => setUnstakeAmount(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleUnstake}
                disabled={!unstakeAmount}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                Unstake
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Staking Information */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">How Staking Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">1. Stake Your Tokens</h3>
            <p className="text-gray-600">Lock your XMART tokens in the staking contract to start earning rewards.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">2. Earn Rewards</h3>
            <p className="text-gray-600">Receive rewards based on the current APY and your staked amount.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">3. Participate in Governance</h3>
            <p className="text-gray-600">Staked tokens give you voting power in DAO governance decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staking;

