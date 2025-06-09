import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EnhancedNavbar from './components/EnhancedNavbar';
import NotificationSystem from './components/NotificationSystem';
import Home from './pages/Home';
import Staking from './pages/Staking';
import Mining from './pages/Mining';
import Banking from './pages/Banking';
import DAO from './pages/DAO';
import Analytics from './pages/Analytics';
import AssetManagement from './pages/AssetManagement';
import AIAgents from './pages/AIAgents';
import Developer from './pages/Developer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <EnhancedNavbar />
        <NotificationSystem />
        
        <main className="relative pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/dao" element={<DAO />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/asset-management" element={<AssetManagement />} />
            <Route path="/ai-agents" element={<AIAgents />} />
            <Route path="/developer" element={<Developer />} />
          </Routes>
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-700 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">X</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gradient-primary">XMRT.io</div>
                    <div className="text-xs text-gray-400">Ecosystem</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  The complete financial freedom platform combining mobile mining, 
                  banking services, and DAO governance.
                </p>
              </div>

              {/* Platform Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li><Link to="/mining" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Mobile Mining</Link></li>
                  <li><Link to="/staking" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Token Staking</Link></li>
                  <li><Link to="/banking" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Banking Services</Link></li>
                  <li><Link to="/dao" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">DAO Governance</Link></li>
                </ul>
              </div>

              {/* Tools Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Tools</h3>
                <ul className="space-y-2">
                  <li><Link to="/analytics" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Analytics</Link></li>
                  <li><Link to="/asset-management" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Asset Management</Link></li>
                  <li><Link to="/ai-agents" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">AI Agents</Link></li>
                  <li><Link to="/developer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Developer Tools</Link></li>
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">External</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://www.mobilemonero.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      Mobile Monero
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://coldcash.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      CashDapp Platform
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://supportxmr.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      SupportXMR Pool
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/DevGruGold/xmrt-test-env" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                © 2024 XMRT.io Ecosystem. Revolutionizing decentralized finance.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a 
                  href="https://www.mobilemonero.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  Mobile Miner
                </a>
                <a 
                  href="https://coldcash.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  CashDapp
                </a>
                <a 
                  href="https://supportxmr.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  Mining Pool
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

