import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Staking from './pages/Staking';
import Mining from './pages/Mining';
import CashDapp from './pages/CashDapp';
import DAO from './pages/DAO';
import DeploymentConfig from './pages/DeploymentConfig';
import SmartContractDashboard from './pages/SmartContractDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/cashdapp" element={<CashDapp />} />
            <Route path="/dao" element={<DAO />} />
            <Route path="/deployment" element={<DeploymentConfig />} />
            <Route path="/contracts" element={<SmartContractDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;