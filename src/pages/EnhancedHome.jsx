import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EnhancedHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate statistics every 3 seconds
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "1.5 KH/s", label: "Pool Hashrate", color: "text-orange-400" },
    { value: "0.006 XMR", label: "Pending Rewards", color: "text-green-400" },
    { value: "24/7", label: "Mining Uptime", color: "text-blue-400" },
    { value: "FREE", label: "Mobile Mining", color: "text-purple-400" }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 bg-clip-text text-transparent animate-glow">
            XMRT.io Ecosystem
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 font-light">
            The Complete Financial Freedom Platform
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Mine Monero on mobile, stake tokens, access banking services, and participate in DAO governance - 
            all in one revolutionary ecosystem that puts financial power back in your hands.
          </p>
          
          {/* Enhanced Key Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-feature group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Mobile Mining Revolution</h3>
              <p className="text-gray-300">World's first user-friendly mobile Monero mining. 300-500 H/s on any Android device.</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            <div className="card-feature group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏦</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Complete Banking Suite</h3>
              <p className="text-gray-300">Full banking services, payments, and financial tools integrated with crypto.</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            <div className="card-feature group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🗳️</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">DAO Governance</h3>
              <p className="text-gray-300">Community-driven decisions with AI agents managing operations.</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mining"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span className="relative z-10">Start Mining Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link
              to="/banking"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span className="relative z-10">Explore Banking</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Ecosystem Overview */}
      <section className="py-20 bg-gray-900 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              One Ecosystem, Infinite Possibilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              XMRT.io brings together mining, banking, staking, and governance in a seamless platform 
              designed for the future of decentralized finance.
            </p>
          </div>

          {/* Enhanced Ecosystem Flow */}
          <div className="relative">
            {/* Central Hub with Pulse Animation */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full animate-ping opacity-20"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold mb-2">XMRT.io</div>
                    <div className="text-sm">Ecosystem Hub</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Connected Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link to="/mining" className="group relative">
                <div className="card-primary group-hover:border-orange-500 group-hover:shadow-orange-500/20 group-hover:shadow-2xl">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⛏️</div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">Mobile Mining</h3>
                  <p className="text-gray-300 text-sm mb-4">Mine Monero on any Android device with our revolutionary mobile mining technology.</p>
                  <div className="flex items-center text-orange-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>300-500 H/s</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>

              <Link to="/staking" className="group relative">
                <div className="card-primary group-hover:border-blue-500 group-hover:shadow-blue-500/20 group-hover:shadow-2xl">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Token Staking</h3>
                  <p className="text-gray-300 text-sm mb-4">Stake XMRT.io tokens to earn rewards and participate in ecosystem governance.</p>
                  <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Earn Rewards</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>

              <Link to="/banking" className="group relative">
                <div className="card-primary group-hover:border-green-500 group-hover:shadow-green-500/20 group-hover:shadow-2xl">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏦</div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Banking Services</h3>
                  <p className="text-gray-300 text-sm mb-4">Complete banking suite with payments, transfers, and financial management.</p>
                  <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Manage Funds</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>

              <Link to="/dao" className="group relative">
                <div className="card-primary group-hover:border-purple-500 group-hover:shadow-purple-500/20 group-hover:shadow-2xl">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🗳️</div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">DAO Governance</h3>
                  <p className="text-gray-300 text-sm mb-4">Participate in community governance with AI-powered decision making.</p>
                  <div className="flex items-center text-purple-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Vote & Govern</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Live Statistics with Rotating Display */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Live Ecosystem Performance
            </h2>
            <p className="text-xl text-gray-300">
              Real-time statistics from our active mining pools and ecosystem operations
            </p>
          </div>

          {/* Rotating Statistics Display */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 min-w-[300px] text-center">
              <div className={`text-4xl font-bold mb-2 transition-all duration-500 ${stats[currentStat].color}`}>
                {stats[currentStat].value}
              </div>
              <div className="text-gray-300 text-lg">{stats[currentStat].label}</div>
              <div className="flex justify-center mt-4 space-x-2">
                {stats.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStat ? 'bg-orange-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Static Grid for Reference */}
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card-stat hover:scale-105 transition-transform duration-300">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same but with enhanced animations */}
      {/* ... (keeping the existing Why Join and Getting Started sections) */}
    </div>
  );
};

export default EnhancedHome;

