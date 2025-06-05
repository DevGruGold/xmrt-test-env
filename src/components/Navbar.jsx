import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Home', icon: '🏠' },
    { path: '/mining', name: 'Mining', icon: '⛏️' },
    { path: '/staking', name: 'Staking', icon: '💎' },
    { path: '/banking', name: 'Banking', icon: '🏦' },
    { path: '/dao', name: 'DAO', icon: '🗳️' },
    { path: '/analytics', name: 'Analytics', icon: '📊' },
    { path: '/developer', name: 'Developer', icon: '👨‍💻' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">X</span>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                XMRT
              </div>
              <div className="text-xs text-gray-400 -mt-1">Ecosystem</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* External Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://www.mobilemonero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <span>📱</span>
              <span>Mobile Miner</span>
            </a>
            <a
              href="https://coldcash.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <span>🏦</span>
              <span>CashDapp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 flex flex-col items-center space-y-1 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            
            {/* Mobile External Links */}
            <div className="mt-4 space-y-2">
              <a
                href="https://www.mobilemonero.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg text-sm font-medium text-center"
              >
                📱 Mobile Miner
              </a>
              <a
                href="https://coldcash.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-sm font-medium text-center"
              >
                🏦 CashDapp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

