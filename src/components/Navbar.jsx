import { Link } from 'react-router-dom';
import { ConnectWallet, useAddress, useConnectionStatus } from "@thirdweb-dev/react";
import { useState, useEffect } from 'react';

function Navbar() {
  const address = useAddress();
  const connectionStatus = useConnectionStatus();
  const [errorMessage, setErrorMessage] = useState("");
  
  // Clear error message after 5 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  
  // Handle connection status changes
  useEffect(() => {
    if (connectionStatus === "disconnected") {
      console.log("Wallet disconnected");
    } else if (connectionStatus === "connecting") {
      console.log("Connecting wallet...");
    } else if (connectionStatus === "connected") {
      console.log("Wallet connected:", address);
    } else if (connectionStatus === "error") {
      console.error("Error connecting wallet");
      setErrorMessage("Error connecting wallet. Please try again.");
    }
  }, [connectionStatus, address]);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">XMRT Ecosystem</div>
        <div className="flex space-x-4 items-center">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/staking" className="text-white hover:text-gray-300">Staking</Link>
          <Link to="/mining" className="text-white hover:text-gray-300">Mining</Link>
          <Link to="/cashdapp" className="text-white hover:text-gray-300">CashDapp</Link>
          <Link to="/dao" className="text-white hover:text-gray-300">DAO</Link>
          
          {errorMessage && (
            <div className="text-red-500 mr-2">{errorMessage}</div>
          )}
          
          <ConnectWallet 
            theme="dark"
            btnTitle="Connect Wallet"
            modalTitle="Connect to XMRT Ecosystem"
            modalSize="wide"
            welcomeScreen={{
              title: "Welcome to XMRT Ecosystem",
              subtitle: "Connect your wallet to get started",
            }}
            modalTitleIconUrl="https://example.com/icon.png"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

