import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function CashDapp() {
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState('0');
  const [accountInfo, setAccountInfo] = useState({
    registered: false,
    username: '',
    balance: '0'
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('onramp');
  const [onrampAmount, setOnrampAmount] = useState('');
  const [offrampAmount, setOfframpAmount] = useState('');
  const [offrampAddress, setOfframpAddress] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transferRecipient, setTransferRecipient] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
            fetchAccountInfo(accounts[0]);
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
        fetchAccountInfo(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet");
    }
  };

  const fetchAccountInfo = async (address) => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // This would be replaced with the actual contract address when deployed
        const contractAddress = '0x0000000000000000000000000000000000000000';
        
        // This is a simplified ABI for demonstration
        const abi = [
          "function accounts(address) view returns (bool registered, string username, uint256 balance)",
          "function isRegistered(address) view returns (bool)"
        ];
        
        const cashDappContract = new ethers.Contract(contractAddress, abi, provider);
        
        const registered = await cashDappContract.isRegistered(address);
        setIsRegistered(registered);
        
        if (registered) {
          const info = await cashDappContract.accounts(address);
          
          setAccountInfo({
            registered: info.registered,
            username: info.username,
            balance: ethers.utils.formatEther(info.balance)
          });
          
          setBalance(ethers.utils.formatEther(info.balance));
        }
      } catch (error) {
        console.error("Error fetching account info:", error);
      }
    }
  };

  const handleRegister = async () => {
    if (!username || username.trim() === '') {
      alert("Please enter a valid username");
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
          "function registerAccount(string) returns (bool)"
        ];
        
        const cashDappContract = new ethers.Contract(contractAddress, abi, signer);
        
        const tx = await cashDappContract.registerAccount(username);
        await tx.wait();
        
        setIsRegistered(true);
        fetchAccountInfo(account);
      } catch (error) {
        console.error("Error registering account:", error);
        alert("Error registering account. See console for details.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleOnramp = async () => {
    if (!onrampAmount || parseFloat(onrampAmount) <= 0) {
      alert("Please enter a valid amount to onramp");
      return;
    }

    // In a real application, this would involve a payment process
    // For this demo, we'll just show a success message
    alert(`Onramp request for ${onrampAmount} XMR submitted successfully. In a real application, you would be directed to a payment processor.`);
    setOnrampAmount('');
  };

  const handleOfframp = async () => {
    if (!offrampAmount || parseFloat(offrampAmount) <= 0) {
      alert("Please enter a valid amount to offramp");
      return;
    }

    if (!offrampAddress || offrampAddress.trim() === '') {
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
          "function requestOfframp(uint256, string) returns (bool)"
        ];
        
        const cashDappContract = new ethers.Contract(contractAddress, abi, signer);
        
        const amountWei = ethers.utils.parseEther(offrampAmount);
        const tx = await cashDappContract.requestOfframp(amountWei, offrampAddress);
        await tx.wait();
        
        alert("Offramp request submitted successfully. It will be processed shortly.");
        setOfframpAmount('');
        setOfframpAddress('');
        fetchAccountInfo(account);
      } catch (error) {
        console.error("Error requesting offramp:", error);
        alert("Error requesting offramp. See console for details.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleTransfer = async () => {
    if (!transferAmount || parseFloat(transferAmount) <= 0) {
      alert("Please enter a valid amount to transfer");
      return;
    }

    if (!transferRecipient || !ethers.utils.isAddress(transferRecipient)) {
      alert("Please enter a valid Ethereum address");
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
          "function transfer(address, uint256) returns (bool)"
        ];
        
        const cashDappContract = new ethers.Contract(contractAddress, abi, signer);
        
        const amountWei = ethers.utils.parseEther(transferAmount);
        const tx = await cashDappContract.transfer(transferRecipient, amountWei);
        await tx.wait();
        
        alert("Transfer completed successfully.");
        setTransferAmount('');
        setTransferRecipient('');
        fetchAccountInfo(account);
      } catch (error) {
        console.error("Error transferring funds:", error);
        alert("Error transferring funds. See console for details.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">CashDapp</h1>
      
      {!isConnected ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <p className="mb-4">Connect your wallet to access CashDapp features.</p>
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
              <h2 className="text-2xl font-semibold mb-4">Register CashDapp Account</h2>
              <p className="mb-4">
                To use CashDapp services, you need to register an account.
              </p>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                onClick={handleRegister}
                disabled={loading}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                {loading ? 'Processing...' : 'Register Account'}
              </button>
            </div>
          ) : (
            <>
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Username</h3>
                    <p className="text-2xl font-bold">{accountInfo.username}</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Balance</h3>
                    <p className="text-2xl font-bold">{accountInfo.balance} XMR</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Status</h3>
                    <p className="text-2xl font-bold text-green-500">Active</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex border-b mb-4">
                  <button
                    className={`py-2 px-4 ${activeTab === 'onramp' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('onramp')}
                  >
                    Onramp
                  </button>
                  <button
                    className={`py-2 px-4 ${activeTab === 'offramp' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('offramp')}
                  >
                    Offramp
                  </button>
                  <button
                    className={`py-2 px-4 ${activeTab === 'transfer' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('transfer')}
                  >
                    Transfer
                  </button>
                </div>

                {activeTab === 'onramp' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Onramp XMR</h2>
                    <p className="mb-4">
                      Convert your fiat currency to XMR and add it to your CashDapp account.
                    </p>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="onrampAmount">
                        Amount (XMR)
                      </label>
                      <input
                        id="onrampAmount"
                        type="number"
                        value={onrampAmount}
                        onChange={(e) => setOnrampAmount(e.target.value)}
                        placeholder="Enter amount to onramp"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <button
                      onClick={handleOnramp}
                      disabled={loading}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {loading ? 'Processing...' : 'Onramp XMR'}
                    </button>
                  </div>
                )}

                {activeTab === 'offramp' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Offramp XMR</h2>
                    <p className="mb-4">
                      Withdraw XMR from your CashDapp account to your Monero wallet.
                    </p>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="offrampAmount">
                        Amount (XMR)
                      </label>
                      <input
                        id="offrampAmount"
                        type="number"
                        value={offrampAmount}
                        onChange={(e) => setOfframpAmount(e.target.value)}
                        placeholder="Enter amount to offramp"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="offrampAddress">
                        Monero Address
                      </label>
                      <input
                        id="offrampAddress"
                        type="text"
                        value={offrampAddress}
                        onChange={(e) => setOfframpAddress(e.target.value)}
                        placeholder="Enter your Monero address"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <button
                      onClick={handleOfframp}
                      disabled={loading}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {loading ? 'Processing...' : 'Offramp XMR'}
                    </button>
                  </div>
                )}

                {activeTab === 'transfer' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Transfer XMR</h2>
                    <p className="mb-4">
                      Transfer XMR from your CashDapp account to another user.
                    </p>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transferAmount">
                        Amount (XMR)
                      </label>
                      <input
                        id="transferAmount"
                        type="number"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                        placeholder="Enter amount to transfer"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transferRecipient">
                        Recipient Address
                      </label>
                      <input
                        id="transferRecipient"
                        type="text"
                        value={transferRecipient}
                        onChange={(e) => setTransferRecipient(e.target.value)}
                        placeholder="Enter recipient's Ethereum address"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <button
                      onClick={handleTransfer}
                      disabled={loading}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {loading ? 'Processing...' : 'Transfer XMR'}
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CashDapp;

