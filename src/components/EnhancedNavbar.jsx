import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EnhancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', name: 'Home', icon: '🏠' },
    { path: '/mining', name: 'Mining', icon: '⛏️' },
    { path: '/staking', name: 'Staking', icon: '💎' },
    { path: '/banking', name: 'Banking', icon: '🏦' },
    { path: '/dao', name: 'DAO', icon: '🗳️' },
    { path: '/analytics', name: 'Analytics', icon: '📊' },
    { path: '/asset-management', name: 'Assets', icon: '📈' },
    { path: '/ai-agents', name: 'AI Agents', icon: '🤖' },
    { path: '/developer', name: 'Developer', icon: '👨‍💻' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">X</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-20 animate-pulse"></div>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                XMRT.io
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
                className="group relative px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-800/50"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 mt-1 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 mt-1 ${
                  isOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="group flex flex-col items-center p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            
            {/* Mobile External Links */}
            <div className="pt-4 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.mobilemonero.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 rounded-lg bg-orange-600/20 hover:bg-orange-600/30 transition-all duration-300"
                >
                  <span className="text-2xl mb-1">📱</span>
                  <span className="text-sm font-medium text-orange-400">Mobile Miner</span>
                </a>
                <a
                  href="https://coldcash.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-300"
                >
                  <span className="text-2xl mb-1">💳</span>
                  <span className="text-sm font-medium text-blue-400">CashDapp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavbar;

