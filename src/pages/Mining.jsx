import { useState, useEffect } from 'react';
import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { getContractAddresses, getMoneroPoolWallet } from '../utils/blockchain';

function Mining() {
  const address = useAddress();
  const [contractAddresses, setContractAddresses] = useState(null);
  const [moneroAddress, setMoneroAddress] = useState('');
  const [hashRate, setHashRate] = useState('');
  const [minedAmount, setMinedAmount] = useState('');
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
    contractAddresses?.MoneroPool || "0x0000000000000000000000000000000000000000"
  );

  // Read contract data
  const { data: minerInfo, isLoading: minerLoading } = useContractRead(contract, "miners", [address]);
  const { data: totalHashRate, isLoading: hashRateLoading } = useContractRead(contract, "totalHashRate");
  const { data: totalMined, isLoading: minedLoading } = useContractRead(contract, "totalMined");
  const { data: minerCount, isLoading: countLoading } = useContractRead(contract, "minerCount");

  // Contract write functions
  const { mutateAsync: registerMiner, isLoading: registerLoading } = useContractWrite(contract, "registerMiner");
  const { mutateAsync: updateMinerData, isLoading: updateLoading } = useContractWrite(contract, "updateMinerData");

  const handleRegisterMiner = async () => {
    if (!moneroAddress || !address) return;
    
    try {
      setLoading(true);
      await registerMiner({ args: [moneroAddress] });
      setMoneroAddress('');
      alert('Miner registration successful!');
    } catch (error) {
      console.error("Error registering miner:", error);
      alert('Error registering miner. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateMinerData = async () => {
    if (!hashRate || !minedAmount || !address) return;
    
    try {
      setLoading(true);
      const hashRateWei = (parseFloat(hashRate) * 1e18).toString();
      const minedAmountWei = (parseFloat(minedAmount) * 1e18).toString();
      await updateMinerData({ args: [address, hashRateWei, minedAmountWei] });
      setHashRate('');
      setMinedAmount('');
      alert('Miner data updated successfully!');
    } catch (error) {
      console.error("Error updating miner data:", error);
      alert('Error updating miner data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!address) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Mining</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-center text-gray-600">Please connect your wallet to access mining features.</p>
        </div>
      </div>
    );
  }

  const isRegistered = minerInfo && minerInfo[0]; // registered boolean is first element

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Monero Mining</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mining Statistics */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Mining Statistics</h2>
          <div className="space-y-2">
            <p><strong>Total Miners:</strong> {
              countLoading ? 'Loading...' : 
              minerCount ? minerCount.toString() : '0'
            }</p>
            <p><strong>Total Hash Rate:</strong> {
              hashRateLoading ? 'Loading...' : 
              totalHashRate ? (parseInt(totalHashRate.toString()) / 1e18).toFixed(2) + ' H/s' : '0 H/s'
            }</p>
            <p><strong>Total Mined:</strong> {
              minedLoading ? 'Loading...' : 
              totalMined ? (parseInt(totalMined.toString()) / 1e18).toFixed(4) + ' XMR' : '0 XMR'
            }</p>
            <p><strong>Pool Wallet:</strong> {getMoneroPoolWallet().substring(0, 20)}...</p>
          </div>
        </div>

        {/* Your Mining Info */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Mining Info</h2>
          {minerLoading ? (
            <p>Loading miner information...</p>
          ) : isRegistered ? (
            <div className="space-y-2">
              <p><strong>Status:</strong> Registered</p>
              <p><strong>Monero Address:</strong> {minerInfo[1] ? minerInfo[1].substring(0, 20) + '...' : 'N/A'}</p>
              <p><strong>Hash Rate:</strong> {
                minerInfo[2] ? (parseInt(minerInfo[2].toString()) / 1e18).toFixed(2) + ' H/s' : '0 H/s'
              }</p>
              <p><strong>Total Mined:</strong> {
                minerInfo[3] ? (parseInt(minerInfo[3].toString()) / 1e18).toFixed(4) + ' XMR' : '0 XMR'
              }</p>
            </div>
          ) : (
            <p>Not registered as a miner yet.</p>
          )}
        </div>
      </div>

      {/* Mining Actions */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Mining Actions</h2>
        
        {!isRegistered ? (
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Register as Miner</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Your Monero wallet address"
                value={moneroAddress}
                onChange={(e) => setMoneroAddress(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleRegisterMiner}
                disabled={loading || registerLoading || !moneroAddress}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                {registerLoading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Update Mining Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  placeholder="Hash Rate (H/s)"
                  value={hashRate}
                  onChange={(e) => setHashRate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Mined Amount (XMR)"
                  value={minedAmount}
                  onChange={(e) => setMinedAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              onClick={handleUpdateMinerData}
              disabled={loading || updateLoading || !hashRate || !minedAmount}
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {updateLoading ? 'Updating...' : 'Update Data'}
            </button>
          </div>
        )}
      </div>

      {/* Mining Information */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">How Mining Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">1. Register</h3>
            <p className="text-gray-600">Register your Monero wallet address to join the mining pool.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">2. Mine Monero</h3>
            <p className="text-gray-600">Use the mobile mining app to contribute hash rate to the pool.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">3. Earn Rewards</h3>
            <p className="text-gray-600">Receive proportional rewards based on your contribution to the pool.</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Mobile Mining App</h3>
          <p className="text-gray-600 mb-2">
            Download the mobile mining app from <strong>www.mobilemonero.com</strong> to start mining Monero on your mobile device.
          </p>
          <a 
            href="https://www.mobilemonero.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Visit Mobile Monero →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mining;

