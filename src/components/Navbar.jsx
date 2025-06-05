import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/staking', label: 'Staking', icon: '💰' },
    { path: '/mining', label: 'Mining', icon: '⛏️' },
    { path: '/cashdapp', label: 'CashDapp', icon: '🏦' },
    { path: '/dao', label: 'DAO', icon: '🗳️' },
    { path: '/deployment', label: 'Deploy', icon: '🚀' },
    { path: '/contracts', label: 'Contracts', icon: '📋' }
  ];

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            XMRT Ecosystem
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>
          
          <div className="text-sm text-gray-400">
            v2.0
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

