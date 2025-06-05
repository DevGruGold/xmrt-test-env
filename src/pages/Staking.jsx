import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function Staking() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('0');
  const [stakedBalance, setStakedBalance] = useState('0');
  const [stakeAmount, setStakeAmount] = useState('');
  const [unstakeAmount, setUnstakeAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [rewardRate, setRewardRate] = useState('0');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
            fetchBalances(accounts[0]);
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
        fetchBalances(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet");
    }
  };

  const fetchBalances = async (address) => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // This would be replaced with the actual contract address when deployed
        const contractAddress = '0x0000000000000000000000000000000000000000';
        
        // This is a simplified ABI for demonstration
        const abi = [
          "function balanceOf(address) view returns (uint256)",
          "function stakedBalance(address) view returns (uint256)",
          "function rewardRate() view returns (uint256)"
        ];
        
        const tokenContract = new ethers.Contract(contractAddress, abi, provider);
        
        const balanceWei = await tokenContract.balanceOf(address);
        const stakedBalanceWei = await tokenContract.stakedBalance(address);
        const rewardRateWei = await tokenContract.rewardRate();
        
        setBalance(ethers.utils.formatEther(balanceWei));
        setStakedBalance(ethers.utils.formatEther(stakedBalanceWei));
        setRewardRate(ethers.utils.formatEther(rewardRateWei));
      } catch (error) {
        console.error("Error fetching balances:", error);
      }
    }
  };

  const handleStake = async () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      alert("Please enter a valid amount to stake");
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
          "function stake(uint256) returns (bool)"
        ];
        
        const tokenContract = new ethers.Contract(contractAddress, abi, signer);
        
        const amountWei = ethers.utils.parseEther(stakeAmount);
        const tx = await tokenContract.stake(amountWei);
        await tx.wait();
        
        setStakeAmount('');
        fetchBalances(account);
      } catch (error) {
        console.error("Error staking tokens:", error);
        alert("Error staking tokens. See console for details.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleUnstake = async () => {
    if (!unstakeAmount || parseFloat(unstakeAmount) <= 0) {
      alert("Please enter a valid amount to unstake");
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
          "function unstake(uint256) returns (bool)"
        ];
        
        const tokenContract = new ethers.Contract(contractAddress, abi, signer);
        
        const amountWei = ethers.utils.parseEther(unstakeAmount);
        const tx = await tokenContract.unstake(amountWei);
        await tx.wait();
        
        setUnstakeAmount('');
        fetchBalances(account);
      } catch (error) {
        console.error("Error unstaking tokens:", error);
        alert("Error unstaking tokens. See console for details.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">XMRT Staking</h1>
      
      {!isConnected ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <p className="mb-4">Connect your wallet to access staking features.</p>
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
            <h2 className="text-2xl font-semibold mb-4">Your Balances</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Available Balance</h3>
                <p className="text-2xl font-bold">{balance} XMART</p>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Staked Balance</h3>
                <p className="text-2xl font-bold">{stakedBalance} XMART</p>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Annual Reward Rate</h3>
                <p className="text-2xl font-bold">{parseFloat(rewardRate) * 100}%</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Stake Tokens</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stakeAmount">
                  Amount to Stake
                </label>
                <input
                  id="stakeAmount"
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder="Enter amount to stake"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                onClick={handleStake}
                disabled={loading}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                {loading ? 'Processing...' : 'Stake'}
              </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Unstake Tokens</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unstakeAmount">
                  Amount to Unstake
                </label>
                <input
                  id="unstakeAmount"
                  type="number"
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                  placeholder="Enter amount to unstake"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                onClick={handleUnstake}
                disabled={loading}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                {loading ? 'Processing...' : 'Unstake'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Staking;

