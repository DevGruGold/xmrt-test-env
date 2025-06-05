import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Staking from './pages/Staking';
import Mining from './pages/Mining';
import CashDapp from './pages/CashDapp';
import DAO from './pages/DAO';

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

