import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuantumTarot = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [currentReading, setCurrentReading] = useState(null);

  const tarotCards = [
    { id: 1, name: "The Fool", meaning: "New beginnings, spontaneity, innocence", crypto: "Perfect time for new investments" },
    { id: 2, name: "The Magician", meaning: "Manifestation, resourcefulness, power", crypto: "Your trading skills are at their peak" },
    { id: 3, name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine", crypto: "Trust your instincts about market movements" },
    { id: 4, name: "The Emperor", meaning: "Authority, establishment, structure", crypto: "Stable investments and long-term planning favored" },
    { id: 5, name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, conformity", crypto: "Follow established crypto principles" },
    { id: 6, name: "The Lovers", meaning: "Love, harmony, relationships", crypto: "Partnership opportunities in crypto ventures" },
    { id: 7, name: "The Chariot", meaning: "Control, willpower, success", crypto: "Take control of your portfolio direction" },
    { id: 8, name: "Strength", meaning: "Strength, courage, persuasion", crypto: "Hold strong through market volatility" },
    { id: 9, name: "The Hermit", meaning: "Soul searching, seeking inner guidance", crypto: "Research deeply before making moves" },
    { id: 10, name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles", crypto: "Market cycles are turning in your favor" },
    { id: 11, name: "Justice", meaning: "Justice, fairness, truth", crypto: "Fair value will be restored to your holdings" },
    { id: 12, name: "The Hanged Man", meaning: "Suspension, restriction, letting go", crypto: "Patience required, avoid hasty decisions" },
    { id: 13, name: "Death", meaning: "Endings, beginnings, change", crypto: "Major portfolio transformation ahead" },
    { id: 14, name: "Temperance", meaning: "Balance, moderation, patience", crypto: "Diversify and balance your crypto portfolio" },
    { id: 15, name: "The Devil", meaning: "Bondage, addiction, sexuality", crypto: "Beware of FOMO and overtrading" },
    { id: 16, name: "The Tower", meaning: "Sudden change, upheaval, chaos", crypto: "Prepare for market volatility" },
    { id: 17, name: "The Star", meaning: "Hope, faith, purpose", crypto: "Your crypto dreams will manifest" },
    { id: 18, name: "The Moon", meaning: "Illusion, fear, anxiety", crypto: "Don't let market fear cloud judgment" },
    { id: 19, name: "The Sun", meaning: "Happiness, success, optimism", crypto: "Bright prospects for your investments" },
    { id: 20, name: "Judgement", meaning: "Judgement, rebirth, inner calling", crypto: "Time to evaluate and restructure portfolio" },
    { id: 21, name: "The World", meaning: "Completion, accomplishment, travel", crypto: "Your crypto goals are within reach" }
  ];

  const performReading = () => {
    setIsReading(true);
    setTimeout(() => {
      const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
      setSelectedCard(randomCard);
      setCurrentReading({
        card: randomCard,
        timestamp: new Date().toLocaleString(),
        guidance: generateGuidance(randomCard)
      });
      setIsReading(false);
    }, 2000);
  };

  const generateGuidance = (card) => {
    const guidanceTemplates = [
      `The ${card.name} suggests that ${card.crypto.toLowerCase()}. Focus on ${card.meaning.split(',')[0].toLowerCase()} in your XMRT journey.`,
      `With ${card.name} appearing, the universe indicates ${card.crypto.toLowerCase()}. Channel the energy of ${card.meaning.split(',')[1]?.toLowerCase() || 'wisdom'}.`,
      `${card.name} brings a message: ${card.crypto}. Embrace ${card.meaning.split(',')[2]?.toLowerCase() || 'growth'} in your financial decisions.`
    ];
    return guidanceTemplates[Math.floor(Math.random() * guidanceTemplates.length)];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
          Quantum Tarot Oracle
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Harness the mystical power of quantum-enhanced tarot readings to guide your XMRT journey. 
          Connect with cosmic wisdom for crypto insights and spiritual guidance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={performReading}
            disabled={isReading}
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {isReading ? 'Consulting the Oracle...' : 'Draw Your Card'}
          </button>
          <Link
            to="/ai-agents"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            AI Oracle Integration →
          </Link>
        </div>
      </div>

      {/* Quantum Reading Interface */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-purple-400">
          Quantum Reading Chamber
        </h2>
        
        {isReading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mb-4"></div>
            <p className="text-xl text-purple-300 animate-pulse">Channeling quantum energies...</p>
            <p className="text-gray-400 mt-2">The oracle is consulting the cosmic blockchain...</p>
          </div>
        )}

        {selectedCard && !isReading && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-48 h-72 mx-auto bg-gradient-to-b from-purple-600 to-indigo-800 rounded-lg flex items-center justify-center mb-4 shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🔮</div>
                    <h3 className="text-xl font-bold">{selectedCard.name}</h3>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-purple-400">{selectedCard.name}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold text-blue-400 mb-2">Traditional Meaning</h4>
                  <p className="text-gray-300">{selectedCard.meaning}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold text-green-400 mb-2">Crypto Guidance</h4>
                  <p className="text-gray-300">{selectedCard.crypto}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Quantum Oracle Guidance</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-gray-300 text-lg leading-relaxed">{currentReading?.guidance}</p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold text-yellow-400 mb-2">XMRT Integration</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✨</span>
                      Stake XMRT tokens to amplify oracle accuracy
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">🔗</span>
                      Connect reading to your portfolio decisions
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">🎯</span>
                      Use guidance for DAO governance voting
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold text-cyan-400 mb-2">Reading Details</h4>
                  <div className="text-sm text-gray-400">
                    <p>Timestamp: {currentReading?.timestamp}</p>
                    <p>Quantum Signature: QX-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    <p>Oracle Confidence: {Math.floor(Math.random() * 20 + 80)}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!selectedCard && !isReading && (
          <div className="text-center py-12">
            <div className="text-8xl mb-6">🔮</div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Ready for Your Reading</h3>
            <p className="text-gray-400 mb-8">Click "Draw Your Card" to receive quantum-enhanced guidance for your XMRT journey</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
              {[...Array(21)].map((_, i) => (
                <div key={i} className="w-16 h-24 bg-gradient-to-b from-purple-800 to-indigo-900 rounded border-2 border-purple-500 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-purple-300">?</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Oracle Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌌</div>
          <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300">Quantum Enhancement</h3>
          <p className="text-gray-300 text-sm">
            Our tarot readings are enhanced with quantum algorithms for unprecedented accuracy and cosmic alignment.
          </p>
        </div>
        
        <Link 
          to="/staking"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">XMRT Integration</h3>
          <p className="text-gray-300 text-sm">
            Stake XMRT tokens to unlock premium oracle features and increase reading accuracy through blockchain consensus.
          </p>
        </Link>
        
        <Link 
          to="/dao"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🗳️</div>
          <h3 className="text-xl font-semibold text-green-400 mb-3 group-hover:text-green-300">DAO Guidance</h3>
          <p className="text-gray-300 text-sm">
            Use oracle insights to guide your DAO governance decisions and community voting with cosmic wisdom.
          </p>
        </Link>
      </div>

      {/* Oracle Statistics */}
      <div className="bg-gray-800 p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-400">
          Oracle Performance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-semibold text-purple-400">Accuracy Rate</h3>
            <p className="text-3xl font-bold text-white">87.3%</p>
            <p className="text-gray-400 text-sm">Verified predictions</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="font-semibold text-blue-400">Active Seekers</h3>
            <p className="text-3xl font-bold text-white">12,847</p>
            <p className="text-gray-400 text-sm">Monthly consultations</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-green-400">Quantum Sync</h3>
            <p className="text-3xl font-bold text-white">99.9%</p>
            <p className="text-gray-400 text-sm">Cosmic alignment</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-3">💫</div>
            <h3 className="font-semibold text-yellow-400">Readings Today</h3>
            <p className="text-3xl font-bold text-white">2,156</p>
            <p className="text-gray-400 text-sm">Guidance provided</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <button
          onClick={performReading}
          className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🔮</div>
          <span className="font-semibold text-lg">New Reading</span>
          <p className="text-purple-100 text-sm mt-2">Consult the oracle</p>
        </button>
        <Link
          to="/staking"
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💎</div>
          <span className="font-semibold text-lg">Stake XMRT</span>
          <p className="text-indigo-100 text-sm mt-2">Enhance accuracy</p>
        </Link>
        <Link
          to="/analytics"
          className="bg-pink-600 hover:bg-pink-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
          <span className="font-semibold text-lg">Reading History</span>
          <p className="text-pink-100 text-sm mt-2">Track insights</p>
        </Link>
        <Link
          to="/ai-agents"
          className="bg-cyan-600 hover:bg-cyan-700 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🤖</div>
          <span className="font-semibold text-lg">AI Oracle</span>
          <p className="text-cyan-100 text-sm mt-2">Advanced guidance</p>
        </Link>
      </div>
    </div>
  );
};

export default QuantumTarot;

