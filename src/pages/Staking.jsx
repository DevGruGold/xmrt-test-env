import { useState, useEffect } from 'react';
import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { getContractAddresses } from '../utils/blockchain';

function Staking() {
  const address = useAddress();
  const [contractAddresses, setContractAddresses] = useState(null);
  const [stakeAmount, setStakeAmount] = useState('');
  const [unstakeAmount, setUnstakeAmount] = useState('');
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
  const { data: balance, isLoading: balanceLoading } = useContractRead(contract, "balanceOf", [address]);
  const { data: stakedBalance, isLoading: stakedLoading } = useContractRead(contract, "stakedBalance", [address]);
  const { data: rewardRate, isLoading: rewardLoading } = useContractRead(contract, "rewardRate");

  // Contract write functions
  const { mutateAsync: stake, isLoading: stakeLoading } = useContractWrite(contract, "stake");
  const { mutateAsync: unstake, isLoading: unstakeLoading } = useContractWrite(contract, "unstake");

  const handleStake = async () => {
    if (!stakeAmount || !address) return;
    
    try {
      setLoading(true);
      const amountInWei = (parseFloat(stakeAmount) * 1e18).toString();
      await stake({ args: [amountInWei] });
      setStakeAmount('');
      alert('Staking successful!');
    } catch (error) {
      console.error("Error staking:", error);
      alert('Error staking tokens. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUnstake = async () => {
    if (!unstakeAmount || !address) return;
    
    try {
      setLoading(true);
      const amountInWei = (parseFloat(unstakeAmount) * 1e18).toString();
      await unstake({ args: [amountInWei] });
      setUnstakeAmount('');
      alert('Unstaking successful!');
    } catch (error) {
      console.error("Error unstaking:", error);
      alert('Error unstaking tokens. Please try again.');
    } finally {
      setLoading(false);
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
            <p><strong>Wallet Balance:</strong> {
              balanceLoading ? 'Loading...' : 
              balance ? (parseInt(balance.toString()) / 1e18).toFixed(4) + ' XMART' : '0 XMART'
            }</p>
            <p><strong>Staked Balance:</strong> {
              stakedLoading ? 'Loading...' : 
              stakedBalance ? (parseInt(stakedBalance.toString()) / 1e18).toFixed(4) + ' XMART' : '0 XMART'
            }</p>
            <p><strong>Reward Rate:</strong> {
              rewardLoading ? 'Loading...' : 
              rewardRate ? (parseInt(rewardRate.toString()) / 100).toFixed(2) + '% APY' : '0% APY'
            }</p>
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
                disabled={loading || stakeLoading || !stakeAmount}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                {stakeLoading ? 'Staking...' : 'Stake'}
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
                disabled={loading || unstakeLoading || !unstakeAmount}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                {unstakeLoading ? 'Unstaking...' : 'Unstake'}
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

