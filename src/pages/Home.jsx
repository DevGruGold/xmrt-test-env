import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Clear Value Proposition */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 bg-clip-text text-transparent">
            XMRT Ecosystem
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 font-light">
            The Complete Financial Freedom Platform
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Mine Monero on mobile, stake tokens, access banking services, and participate in DAO governance - 
            all in one revolutionary ecosystem that puts financial power back in your hands.
          </p>
          
          {/* Key Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-orange-500/30">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Mobile Mining Revolution</h3>
              <p className="text-gray-300">World's first user-friendly mobile Monero mining. 300-500 H/s on any Android device.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Complete Banking Suite</h3>
              <p className="text-gray-300">Full banking services, payments, and financial tools integrated with crypto.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">DAO Governance</h3>
              <p className="text-gray-300">Community-driven decisions with AI agents managing operations.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mining"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Mining Now
            </Link>
            <Link
              to="/banking"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Banking
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              One Ecosystem, Infinite Possibilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              XMRT brings together mining, banking, staking, and governance in a seamless platform 
              designed for the future of decentralized finance.
            </p>
          </div>

          {/* Ecosystem Flow */}
          <div className="relative">
            {/* Central Hub */}
            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-full shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">XMRT</div>
                  <div className="text-sm">Ecosystem Hub</div>
                </div>
              </div>
            </div>

            {/* Connected Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link to="/mining" className="group">
                <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-orange-500">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⛏️</div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">Mobile Mining</h3>
                  <p className="text-gray-300 text-sm mb-4">Mine Monero on any Android device with our revolutionary mobile mining technology.</p>
                  <div className="text-orange-400 font-semibold">300-500 H/s →</div>
                </div>
              </Link>

              <Link to="/staking" className="group">
                <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-500">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Token Staking</h3>
                  <p className="text-gray-300 text-sm mb-4">Stake XMRT tokens to earn rewards and participate in ecosystem governance.</p>
                  <div className="text-blue-400 font-semibold">Earn Rewards →</div>
                </div>
              </Link>

              <Link to="/banking" className="group">
                <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-green-500">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏦</div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Banking Services</h3>
                  <p className="text-gray-300 text-sm mb-4">Complete banking suite with payments, transfers, and financial management.</p>
                  <div className="text-green-400 font-semibold">Manage Funds →</div>
                </div>
              </Link>

              <Link to="/dao" className="group">
                <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-500">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🗳️</div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">DAO Governance</h3>
                  <p className="text-gray-300 text-sm mb-4">Participate in community governance with AI-powered decision making.</p>
                  <div className="text-purple-400 font-semibold">Vote & Govern →</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join XMRT */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Join the XMRT Ecosystem?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of decentralized finance with multiple income streams, 
              complete financial services, and community governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multiple Income Streams */}
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-xl border border-green-500/30">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Multiple Income Streams</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Mine XMR on mobile devices</li>
                <li>• Stake XMRT tokens for rewards</li>
                <li>• Earn from banking services</li>
                <li>• DAO participation rewards</li>
              </ul>
            </div>

            {/* Financial Freedom */}
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-500/30">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Complete Financial Freedom</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Decentralized banking services</li>
                <li>• No traditional bank dependencies</li>
                <li>• Global payment capabilities</li>
                <li>• Asset tokenization platform</li>
              </ul>
            </div>

            {/* Innovation Leadership */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-xl border border-purple-500/30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Innovation Leadership</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• World's first mobile Monero mining</li>
                <li>• AI-powered governance</li>
                <li>• Cutting-edge DeFi integration</li>
                <li>• Community-driven development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live Statistics */}
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

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl text-center border border-orange-500/30">
              <div className="text-3xl font-bold text-orange-400 mb-2">1.5 KH/s</div>
              <div className="text-gray-300">Pool Hashrate</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center border border-green-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">0.006 XMR</div>
              <div className="text-gray-300">Pending Rewards</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Mining Uptime</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">FREE</div>
              <div className="text-gray-300">Mobile Mining</div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gradient-to-br from-orange-900/30 to-red-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Start your journey to financial freedom with the XMRT ecosystem. 
            Mine, stake, bank, and govern - all in one platform.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/30 p-6 rounded-xl">
              <div className="text-3xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Start Mining</h3>
              <p className="text-gray-300">Download our mobile miner and start earning XMR on your Android device</p>
            </div>
            <div className="bg-black/30 p-6 rounded-xl">
              <div className="text-3xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Explore Banking</h3>
              <p className="text-gray-300">Access complete banking services and manage your digital assets</p>
            </div>
            <div className="bg-black/30 p-6 rounded-xl">
              <div className="text-3xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Join Governance</h3>
              <p className="text-gray-300">Participate in DAO decisions and shape the future of the ecosystem</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.mobilemonero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📱 Start Mobile Mining
            </a>
            <a
              href="https://coldcash.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🏦 Access Banking
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

