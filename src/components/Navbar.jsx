import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            XMRT Test Environment
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/staking" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Staking
            </Link>
            <Link 
              to="/mining" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Mining
            </Link>
            <Link 
              to="/cashdapp" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              CashDapp
            </Link>
            <Link 
              to="/dao" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              DAO
            </Link>
          </div>
          
          <div className="text-sm text-gray-400">
            Test Environment
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

