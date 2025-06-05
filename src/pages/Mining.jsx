import { useState } from 'react';
import { useAddress } from "@thirdweb-dev/react";
import { getMoneroPoolWallet } from '../utils/blockchain';

function Mining() {
  const address = useAddress();
  const [moneroAddress, setMoneroAddress] = useState('');
  const [hashRate, setHashRate] = useState('');
  const [minedAmount, setMinedAmount] = useState('');

  const handleRegisterMiner = async () => {
    if (!moneroAddress || !address) return;
    
    try {
      alert(`Registering miner with Monero address: ${moneroAddress} (Demo mode - contracts not deployed yet)`);
      setMoneroAddress('');
    } catch (error) {
      console.error("Error registering miner:", error);
      alert('Error registering miner. Please try again.');
    }
  };

  const handleUpdateMinerData = async () => {
    if (!hashRate || !minedAmount || !address) return;
    
    try {
      alert(`Updating miner data: ${hashRate} H/s, ${minedAmount} XMR (Demo mode - contracts not deployed yet)`);
      setHashRate('');
      setMinedAmount('');
    } catch (error) {
      console.error("Error updating miner data:", error);
      alert('Error updating miner data. Please try again.');
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Monero Mining</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mining Statistics */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Mining Statistics</h2>
          <div className="space-y-2">
            <p><strong>Total Miners:</strong> 156 (Demo)</p>
            <p><strong>Total Hash Rate:</strong> 2.5 MH/s (Demo)</p>
            <p><strong>Total Mined:</strong> 45.67 XMR (Demo)</p>
            <p><strong>Pool Wallet:</strong> {getMoneroPoolWallet().substring(0, 20)}...</p>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Demo Mode:</strong> Smart contracts are not deployed yet. This is a preview of the mining interface.
            </p>
          </div>
        </div>

        {/* Your Mining Info */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Mining Info</h2>
          <div className="space-y-2">
            <p><strong>Status:</strong> Registered (Demo)</p>
            <p><strong>Monero Address:</strong> 46GAxLnJHpJMKwp5...</p>
            <p><strong>Hash Rate:</strong> 125.5 H/s (Demo)</p>
            <p><strong>Total Mined:</strong> 0.0234 XMR (Demo)</p>
            <p><strong>Pending Rewards:</strong> 0.0012 XMR (Demo)</p>
          </div>
        </div>
      </div>

      {/* Mining Actions */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Mining Actions</h2>
        
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
              disabled={!moneroAddress}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Register
            </button>
          </div>
        </div>

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
            disabled={!hashRate || !minedAmount}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            Update Data
          </button>
        </div>
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

