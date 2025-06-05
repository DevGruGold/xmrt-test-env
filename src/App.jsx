import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundMiner from './components/BackgroundMiner';

// Pages
import Home from './pages/Home';
import Mining from './pages/Mining';
import Staking from './pages/Staking';
import Banking from './pages/Banking';
import DAO from './pages/DAO';
import Analytics from './pages/Analytics';
import Developer from './pages/Developer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <Navbar />
        
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/dao" element={<DAO />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/developer" element={<Developer />} />
          </Routes>
        </main>

        {/* Background Mining Widget - Shows on all pages except home */}
        <Routes>
          <Route path="/mining" element={<BackgroundMiner page="Mining Dashboard" />} />
          <Route path="/staking" element={<BackgroundMiner page="Staking" />} />
          <Route path="/banking" element={<BackgroundMiner page="Banking" />} />
          <Route path="/dao" element={<BackgroundMiner page="DAO" />} />
          <Route path="/analytics" element={<BackgroundMiner page="Analytics" />} />
          <Route path="/developer" element={<BackgroundMiner page="Developer" />} />
        </Routes>

        {/* Footer */}
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
                    <div className="text-xl font-bold text-gradient-primary">XMRT</div>
                    <div className="text-xs text-gray-400">Ecosystem</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  The complete financial freedom platform combining mobile mining, 
                  banking services, and DAO governance.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/mining" className="text-gray-400 hover:text-orange-400 transition-colors">Mobile Mining</a></li>
                  <li><a href="/staking" className="text-gray-400 hover:text-orange-400 transition-colors">Token Staking</a></li>
                  <li><a href="/banking" className="text-gray-400 hover:text-orange-400 transition-colors">Banking Services</a></li>
                  <li><a href="/dao" className="text-gray-400 hover:text-orange-400 transition-colors">DAO Governance</a></li>
                </ul>
              </div>

              {/* External Services */}
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a 
                      href="https://www.mobilemonero.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      Mobile Monero
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://coldcash.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      CashDapp Banking
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.supportxmr.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      SupportXMR Pool
                    </a>
                  </li>
                  <li><a href="/analytics" className="text-gray-400 hover:text-orange-400 transition-colors">Analytics Dashboard</a></li>
                </ul>
              </div>

              {/* Developer */}
              <div>
                <h3 className="text-white font-semibold mb-4">Developer</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/developer" className="text-gray-400 hover:text-orange-400 transition-colors">Smart Contracts</a></li>
                  <li><a href="/developer" className="text-gray-400 hover:text-orange-400 transition-colors">API Documentation</a></li>
                  <li><a href="/developer" className="text-gray-400 hover:text-orange-400 transition-colors">Deployment Tools</a></li>
                  <li>
                    <a 
                      href="https://github.com/DevGruGold/xmrt-test-env" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                © 2024 XMRT Ecosystem. Revolutionizing decentralized finance.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a 
                  href="https://www.mobilemonero.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  📱 Mobile Mining
                </a>
                <a 
                  href="https://coldcash.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  🏦 Banking
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

