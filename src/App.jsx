import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Staking from './pages/Staking';
import Mining from './pages/Mining';
import CashDapp from './pages/CashDapp';
import DAO from './pages/DAO';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/mining" element={<Mining />} />
          <Route path="/cashdapp" element={<CashDapp />} />
          <Route path="/dao" element={<DAO />} />
        </Routes>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} XMRT Ecosystem. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

