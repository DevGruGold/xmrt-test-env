import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function Home() {
  const [tokenInfo, setTokenInfo] = useState({
    name: '',
    symbol: '',
    totalSupply: '0',
    loading: true
  });

  useEffect(() => {
    const fetchTokenInfo = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          // This would be replaced with the actual contract address when deployed
          const contractAddress = '0x0000000000000000000000000000000000000000';
          
          // This is a simplified ABI for demonstration
          const abi = [
            "function name() view returns (string)",
            "function symbol() view returns (string)",
            "function totalSupply() view returns (uint256)"
          ];
          
          const tokenContract = new ethers.Contract(contractAddress, abi, provider);
          
          const name = await tokenContract.name();
          const symbol = await tokenContract.symbol();
          const totalSupply = ethers.utils.formatEther(await tokenContract.totalSupply());
          
          setTokenInfo({
            name,
            symbol,
            totalSupply,
            loading: false
          });
        } catch (error) {
          console.error("Error fetching token info:", error);
          setTokenInfo(prev => ({ ...prev, loading: false }));
        }
      } else {
        setTokenInfo(prev => ({ ...prev, loading: false }));
      }
    };

    fetchTokenInfo();
  }, []);

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
          {tokenInfo.loading ? (
            <p>Loading token information...</p>
          ) : (
            <>
              <p><strong>Name:</strong> {tokenInfo.name || 'XMART Token'}</p>
              <p><strong>Symbol:</strong> {tokenInfo.symbol || 'XMART'}</p>
              <p><strong>Total Supply:</strong> {tokenInfo.totalSupply || '0'}</p>
            </>
          )}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Staking</h3>
          <p>Stake your XMRT tokens to earn rewards and participate in governance.</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Staking
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Mining</h3>
          <p>Mine Monero through our mobile mining platform and earn rewards.</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Mining
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">CashDapp</h3>
          <p>Use our banking services for onramping, offramping, and cold storage.</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to CashDapp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

