import { useState, useEffect } from 'react';
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { Link } from 'react-router-dom';
import { getContractAddresses } from '../utils/blockchain';

function Home() {
  const address = useAddress();
  const [contractAddresses, setContractAddresses] = useState(null);
  const [tokenInfo, setTokenInfo] = useState({
    name: 'XMART Token',
    symbol: 'XMART',
    totalSupply: '0',
    loading: true
  });

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

  // Use ThirdWeb hooks to read contract data if contract address is available
  const { contract } = useContract(
    contractAddresses?.XMART || "0x0000000000000000000000000000000000000000"
  );
  
  const { data: name, isLoading: nameLoading } = useContractRead(contract, "name");
  const { data: symbol, isLoading: symbolLoading } = useContractRead(contract, "symbol");
  const { data: totalSupply, isLoading: supplyLoading } = useContractRead(contract, "totalSupply");

  // Update token info when contract data is loaded
  useEffect(() => {
    if (!nameLoading && !symbolLoading && !supplyLoading) {
      setTokenInfo({
        name: name || 'XMART Token',
        symbol: symbol || 'XMART',
        totalSupply: totalSupply ? (parseInt(totalSupply.toString()) / 1e18).toString() : '0',
        loading: false
      });
    }
  }, [name, symbol, totalSupply, nameLoading, symbolLoading, supplyLoading]);

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
              <p><strong>Name:</strong> {tokenInfo.name}</p>
              <p><strong>Symbol:</strong> {tokenInfo.symbol}</p>
              <p><strong>Total Supply:</strong> {tokenInfo.totalSupply}</p>
            </>
          )}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Staking</h3>
          <p>Stake your XMRT tokens to earn rewards and participate in governance.</p>
          <Link to="/staking" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            Go to Staking
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Mining</h3>
          <p>Mine Monero through our mobile mining platform and earn rewards.</p>
          <Link to="/mining" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            Go to Mining
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">CashDapp</h3>
          <p>Use our banking services for onramping, offramping, and cold storage.</p>
          <Link to="/cashdapp" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            Go to CashDapp
          </Link>
        </div>
      </div>
      
      {address && (
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Connected Wallet</h3>
          <p><strong>Address:</strong> {address}</p>
        </div>
      )}
    </div>
  );
}

export default Home;

