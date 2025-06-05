import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function Mining() {
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [moneroAddress, setMoneroAddress] = useState('');
  const [minerInfo, setMinerInfo] = useState({
    registered: false,
    moneroAddress: '',
    hashRate: '0',
    totalMined: '0'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
            fetchMinerInfo(accounts[0]);
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
        fetchMinerInfo(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet");
    }
  };

  const fetchMinerInfo = async (address) => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // This would be replaced with the actual contract address when deployed
        const contractAddress = '0x0000000000000000000000000000000000000000';
        
        // This is a simplified ABI for demonstration
        const abi = [
          "function miners(address) view returns (bool registered, string moneroAddress, uint256 hashRate, uint256 totalMined)"
        ];
        
        const moneroPoolContract = new ethers.Contract(contractAddress, abi, provider);
        
        const info = await moneroPoolContract.miners(address);
        
        setMinerInfo({
          registered: info.registered,
          moneroAddress: info.moneroAddress,
          hashRate: info.hashRate.toString(),
          totalMined: ethers.utils.formatEther(info.totalMined)
        });
        
        setIsRegistered(info.registered);
      } catch (error) {
        console.error("Error fetching miner info:", error);
      }
    }
  };

  const handleRegister = async () => {
    if (!moneroAddress || moneroAddress.trim() === '') {
      alert("Please enter a valid Monero address");
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
          "function registerMiner(string) returns (bool)"
        ];
        
        const moneroPoolContract = new ethers.Contract(contractAddress, abi, signer);
        
        const tx = await moneroPoolContract.registerMiner(moneroAddress);
        await tx.wait();
        
        setIsRegistered(true);
        fetchMinerInfo(account);
      } catch (error) {
        console.error("Error registering as miner:", error);
        alert("Error registering as miner. See console for details.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Monero Mining</h1>
      
      {!isConnected ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <p className="mb-4">Connect your wallet to access mining features.</p>
          <button 
            onClick={connectWallet}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <>
          {!isRegistered ? (
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Register as Miner</h2>
              <p className="mb-4">
                To participate in Monero mining, you need to register your Monero address.
              </p>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moneroAddress">
                  Monero Address
                </label>
                <input
                  id="moneroAddress"
                  type="text"
                  value={moneroAddress}
                  onChange={(e) => setMoneroAddress(e.target.value)}
                  placeholder="Enter your Monero address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                onClick={handleRegister}
                disabled={loading}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                {loading ? 'Processing...' : 'Register as Miner'}
              </button>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Miner Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Monero Address</h3>
                  <p className="text-sm break-all">{minerInfo.moneroAddress}</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Hash Rate</h3>
                  <p className="text-2xl font-bold">{minerInfo.hashRate} H/s</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Total Mined</h3>
                  <p className="text-2xl font-bold">{minerInfo.totalMined} XMR</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Status</h3>
                  <p className="text-2xl font-bold text-green-500">Active</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Mobile Mining</h2>
            <p className="mb-4">
              Download our mobile mining app to start mining Monero on your mobile device.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">Android App</h3>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Download for Android
                </button>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">iOS App</h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Download for iOS
                </button>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Mining Instructions</h3>
              <ol className="list-decimal list-inside">
                <li className="mb-2">Download and install the mobile mining app</li>
                <li className="mb-2">Enter your registered Monero address</li>
                <li className="mb-2">Configure mining settings based on your device capabilities</li>
                <li className="mb-2">Start mining and earn rewards</li>
                <li>Rewards will be distributed according to the pool's distribution schedule</li>
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Mining;

