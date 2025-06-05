import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', name: 'Home', icon: '🏠' },
    { path: '/staking', name: 'Staking', icon: '💎' },
    { path: '/mining', name: 'Mining', icon: '⛏️' },
    { path: '/cashdapp', name: 'CashDapp', icon: '🏦' },
    { path: '/dao', name: 'DAO', icon: '🗳️' },
    { path: '/ai-agents', name: 'AI Agents', icon: '🤖' },
    { path: '/analytics', name: 'Analytics', icon: '📊' },
    { path: '/asset-management', name: 'Assets', icon: '💼' },
    { path: '/banking', name: 'Banking', icon: '🏛️' },
    { path: '/quantum-tarot', name: 'Quantum Tarot', icon: '🔮' },
    { path: '/profit-tracker', name: 'Profits', icon: '📈' },
    { path: '/asset-tokenizer', name: 'Tokenizer', icon: '🏠' },
    { path: '/deployment', name: 'Deploy', icon: '🚀' },
    { path: '/contracts', name: 'Contracts', icon: '📋' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            XMRT Ecosystem
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <div className="hidden lg:block text-sm text-gray-400">
            v2.0
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-3 rounded-lg transition-all duration-200 flex flex-col items-center space-y-1 hover:scale-105 ${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-center">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

