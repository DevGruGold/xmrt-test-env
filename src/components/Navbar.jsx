import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet");
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">XMRT Ecosystem</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/staking" className="text-white hover:text-gray-300">Staking</Link>
          <Link to="/mining" className="text-white hover:text-gray-300">Mining</Link>
          <Link to="/cashdapp" className="text-white hover:text-gray-300">CashDapp</Link>
          <Link to="/dao" className="text-white hover:text-gray-300">DAO</Link>
          {!isConnected ? (
            <button 
              onClick={connectWallet}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            >
              Connect Wallet
            </button>
          ) : (
            <div className="text-white">
              {`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

