import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Staking from './pages/Staking';
import Mining from './pages/Mining';
import Banking from './pages/Banking';
import AssetManagement from './pages/AssetManagement';
import Analytics from './pages/Analytics';
import DAO from './pages/DAO';
import AIAgents from './pages/AIAgents';
import Developer from './pages/Developer';
import CashDapp from './pages/CashDapp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/asset-management" element={<AssetManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/dao" element={<DAO />} />
            <Route path="/ai-agents" element={<AIAgents />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/cashdapp" element={<CashDapp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

