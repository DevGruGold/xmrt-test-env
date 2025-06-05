import { useState } from 'react';
import { useAddress } from "@thirdweb-dev/react";

function CashDapp() {
  const address = useAddress();
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [transferTo, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState('');

  const handleDeposit = async () => {
    if (!depositAmount || !address) return;
    
    try {
      alert(`Depositing ${depositAmount} ETH (Demo mode - contracts not deployed yet)`);
      setDepositAmount('');
    } catch (error) {
      console.error("Error depositing:", error);
      alert('Error depositing funds. Please try again.');
    }
  };

  const handleWithdraw = async () => {
    if (!withdrawAmount || !address) return;
    
    try {
      alert(`Withdrawing ${withdrawAmount} ETH (Demo mode - contracts not deployed yet)`);
      setWithdrawAmount('');
    } catch (error) {
      console.error("Error withdrawing:", error);
      alert('Error withdrawing funds. Please try again.');
    }
  };

  const handleTransfer = async () => {
    if (!transferTo || !transferAmount || !address) return;
    
    try {
      alert(`Transferring ${transferAmount} ETH to ${transferTo} (Demo mode - contracts not deployed yet)`);
      setTransferTo('');
      setTransferAmount('');
    } catch (error) {
      console.error("Error transferring:", error);
      alert('Error transferring funds. Please try again.');
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
            <p><strong>Your Balance:</strong> 2.5 ETH (Demo)</p>
            <p><strong>Total Platform Deposits:</strong> 1,250.75 ETH (Demo)</p>
            <p><strong>Platform Status:</strong> Active</p>
            <p><strong>Account Type:</strong> Premium</p>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Demo Mode:</strong> Smart contracts are not deployed yet. This is a preview of the banking interface.
            </p>
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
                disabled={!depositAmount}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                Deposit
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
                disabled={!withdrawAmount}
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                Withdraw
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
                disabled={!transferTo || !transferAmount}
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                Transfer
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

