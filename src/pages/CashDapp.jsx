import { useState, useEffect } from 'react';
import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { getContractAddresses } from '../utils/blockchain';

function CashDapp() {
  const address = useAddress();
  const [contractAddresses, setContractAddresses] = useState(null);
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [transferTo, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
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
    contractAddresses?.CashDappIntegration || "0x0000000000000000000000000000000000000000"
  );

  // Read contract data
  const { data: userBalance, isLoading: balanceLoading } = useContractRead(contract, "balances", [address]);
  const { data: totalDeposits, isLoading: depositsLoading } = useContractRead(contract, "totalDeposits");
  const { data: isActive, isLoading: activeLoading } = useContractRead(contract, "isActive");

  // Contract write functions
  const { mutateAsync: deposit, isLoading: depositLoading } = useContractWrite(contract, "deposit");
  const { mutateAsync: withdraw, isLoading: withdrawLoading } = useContractWrite(contract, "withdraw");
  const { mutateAsync: transfer, isLoading: transferLoading } = useContractWrite(contract, "transfer");

  const handleDeposit = async () => {
    if (!depositAmount || !address) return;
    
    try {
      setLoading(true);
      const amountInWei = (parseFloat(depositAmount) * 1e18).toString();
      await deposit({ args: [], overrides: { value: amountInWei } });
      setDepositAmount('');
      alert('Deposit successful!');
    } catch (error) {
      console.error("Error depositing:", error);
      alert('Error depositing funds. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async () => {
    if (!withdrawAmount || !address) return;
    
    try {
      setLoading(true);
      const amountInWei = (parseFloat(withdrawAmount) * 1e18).toString();
      await withdraw({ args: [amountInWei] });
      setWithdrawAmount('');
      alert('Withdrawal successful!');
    } catch (error) {
      console.error("Error withdrawing:", error);
      alert('Error withdrawing funds. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTransfer = async () => {
    if (!transferTo || !transferAmount || !address) return;
    
    try {
      setLoading(true);
      const amountInWei = (parseFloat(transferAmount) * 1e18).toString();
      await transfer({ args: [transferTo, amountInWei] });
      setTransferTo('');
      setTransferAmount('');
      alert('Transfer successful!');
    } catch (error) {
      console.error("Error transferring:", error);
      alert('Error transferring funds. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!address) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">CashDapp</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-center text-gray-600">Please connect your wallet to access CashDapp features.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">CashDapp - Free Banking</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Information */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
          <div className="space-y-2">
            <p><strong>Your Balance:</strong> {
              balanceLoading ? 'Loading...' : 
              userBalance ? (parseInt(userBalance.toString()) / 1e18).toFixed(4) + ' ETH' : '0 ETH'
            }</p>
            <p><strong>Total Platform Deposits:</strong> {
              depositsLoading ? 'Loading...' : 
              totalDeposits ? (parseInt(totalDeposits.toString()) / 1e18).toFixed(4) + ' ETH' : '0 ETH'
            }</p>
            <p><strong>Platform Status:</strong> {
              activeLoading ? 'Loading...' : 
              isActive ? 'Active' : 'Inactive'
            }</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <a 
              href="https://coldcash.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded text-center"
            >
              Visit ColdCash Platform →
            </a>
            <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">
              Request Debit Card
            </button>
            <button className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded">
              Setup Cold Storage
            </button>
          </div>
        </div>
      </div>

      {/* Banking Operations */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Banking Operations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deposit */}
          <div>
            <h3 className="text-lg font-medium mb-2">Deposit Funds</h3>
            <div className="space-y-2">
              <input
                type="number"
                placeholder="Amount in ETH"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleDeposit}
                disabled={loading || depositLoading || !depositAmount}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                {depositLoading ? 'Depositing...' : 'Deposit'}
              </button>
            </div>
          </div>

          {/* Withdraw */}
          <div>
            <h3 className="text-lg font-medium mb-2">Withdraw Funds</h3>
            <div className="space-y-2">
              <input
                type="number"
                placeholder="Amount in ETH"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleWithdraw}
                disabled={loading || withdrawLoading || !withdrawAmount}
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                {withdrawLoading ? 'Withdrawing...' : 'Withdraw'}
              </button>
            </div>
          </div>

          {/* Transfer */}
          <div>
            <h3 className="text-lg font-medium mb-2">Transfer Funds</h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Recipient address"
                value={transferTo}
                onChange={(e) => setTransferTo(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Amount in ETH"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleTransfer}
                disabled={loading || transferLoading || !transferTo || !transferAmount}
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                {transferLoading ? 'Transferring...' : 'Transfer'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Banking Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Onramping</h3>
            <p className="text-gray-600 mb-4">Convert fiat to crypto seamlessly</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Onramp
            </button>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Offramping</h3>
            <p className="text-gray-600 mb-4">Convert crypto to fiat easily</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Start Offramp
            </button>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Cold Storage</h3>
            <p className="text-gray-600 mb-4">Secure your assets offline</p>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Setup Storage
            </button>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Debit Card</h3>
            <p className="text-gray-600 mb-4">Spend crypto anywhere</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Order Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashDapp;

