import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Staking from './pages/Staking';
import Mining from './pages/Mining';
import CashDapp from './pages/CashDapp';
import DAO from './pages/DAO';
import DeploymentConfig from './pages/DeploymentConfig';
import SmartContractDashboard from './pages/SmartContractDashboard';
import AIAgents from './pages/AIAgents';
import Analytics from './pages/Analytics';
import AssetManagement from './pages/AssetManagement';
import Banking from './pages/Banking';
import QuantumTarot from './pages/QuantumTarot';
import ProfitTracker from './pages/ProfitTracker';
import AssetTokenizer from './pages/AssetTokenizer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="pt-20 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/cashdapp" element={<CashDapp />} />
            <Route path="/dao" element={<DAO />} />
            <Route path="/deployment" element={<DeploymentConfig />} />
            <Route path="/contracts" element={<SmartContractDashboard />} />
            <Route path="/ai-agents" element={<AIAgents />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/asset-management" element={<AssetManagement />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/quantum-tarot" element={<QuantumTarot />} />
            <Route path="/profit-tracker" element={<ProfitTracker />} />
            <Route path="/asset-tokenizer" element={<AssetTokenizer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;