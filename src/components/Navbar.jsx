import { Link } from 'react-router-dom';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

function Navbar() {
  const address = useAddress();

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
          <ConnectWallet 
            theme="dark"
            btnTitle="Connect Wallet"
            modalTitle="Connect to XMRT Ecosystem"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

