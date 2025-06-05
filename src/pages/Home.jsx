import { useState, useEffect } from 'react';
import { useAddress } from "@thirdweb-dev/react";
import { Link } from 'react-router-dom';

function Home() {
  const address = useAddress();
  const [tokenInfo] = useState({
    name: 'XMART Token',
    symbol: 'XMART',
    totalSupply: '1,000,000',
    loading: false
  });

  // Log address changes for debugging
  useEffect(() => {
    console.log('Address changed in Home component:', address);
  }, [address]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to XMRT Ecosystem</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">About XMRT</h2>
        <p className="mb-4">
          XMRT is an ecosystem designed to facilitate free banking, onramping, offramping, 
          cold storage through its CashDapp, and mobile mining of Monero (XMR). The system 
          is governed by a DAO managed by AI agents in executive roles.
        </p>
        <p>
          This platform allows users to stake XMRT tokens, participate in Monero mining, 
          use banking services, and take part in DAO governance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Token Information</h3>
          <div>
            <p><strong>Name:</strong> {tokenInfo.name}</p>
            <p><strong>Symbol:</strong> {tokenInfo.symbol}</p>
            <p><strong>Total Supply:</strong> {tokenInfo.totalSupply}</p>
            <p className="text-sm text-gray-500 mt-2">
              * Contract data will be available after deployment
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Staking</h3>
          <p className="mb-4">Stake your XMRT tokens to earn rewards and participate in governance.</p>
          <Link to="/staking" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            Go to Staking
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Mining</h3>
          <p className="mb-4">Mine Monero through our mobile mining platform and earn rewards.</p>
          <Link to="/mining" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            Go to Mining
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">CashDapp</h3>
          <p className="mb-4">Use our banking services for onramping, offramping, and cold storage.</p>
          <Link to="/cashdapp" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            Go to CashDapp
          </Link>
        </div>
      </div>
      
      {address && (
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Connected Wallet</h3>
          <p><strong>Address:</strong> {address}</p>
          <p className="text-sm text-gray-500 mt-2">
            Wallet successfully connected! You can now interact with the XMRT ecosystem.
          </p>
        </div>
      )}
      
      {!address && (
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Get Started</h3>
          <p className="text-blue-700">
            Connect your wallet using the "Connect Wallet" button in the navigation bar to start using the XMRT ecosystem.
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;

