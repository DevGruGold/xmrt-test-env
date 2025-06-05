import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BackgroundMiner = ({ page }) => {
  const [miningActive, setMiningActive] = useState(true);
  const [hashrate, setHashrate] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const updateMining = () => {
      if (miningActive) {
        setHashrate(300 + Math.random() * 200); // 300-500 H/s
        setEarnings(prev => prev + (Math.random() * 0.0001));
      }
    };

    const interval = setInterval(updateMining, 3000);
    return () => clearInterval(interval);
  }, [miningActive]);

  if (!miningActive) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 border border-orange-500 p-4 rounded-lg shadow-lg z-40 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-white">Mining Active</span>
        </div>
        <button
          onClick={() => setMiningActive(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-400">Hashrate:</span>
          <span className="text-orange-400 font-semibold">{hashrate.toFixed(0)} H/s</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Earned:</span>
          <span className="text-green-400 font-semibold">{earnings.toFixed(6)} XMR</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Page:</span>
          <span className="text-blue-400 font-semibold">{page}</span>
        </div>
      </div>
      
      <Link
        to="/mining"
        className="block mt-2 text-center bg-orange-600 hover:bg-orange-700 text-white text-xs py-1 px-2 rounded transition-colors"
      >
        View Mining Dashboard
      </Link>
    </div>
  );
};

export default BackgroundMiner;

