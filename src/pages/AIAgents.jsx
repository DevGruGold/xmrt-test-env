import React from 'react';
import { Link } from 'react-router-dom';

const AIAgents = () => {
  const agents = [
    {
      id: 'admin',
      name: 'Admin Agent',
      icon: '👑',
      role: 'System Administrator',
      description: 'Manages system-wide operations, user permissions, and platform security protocols.',
      responsibilities: [
        'User access management',
        'System security oversight',
        'Platform configuration',
        'Emergency response protocols'
      ],
      status: 'Active',
      permissions: ['Full System Access', 'User Management', 'Security Controls', 'Emergency Shutdown']
    },
    {
      id: 'executive',
      name: 'Executive Agent',
      icon: '💼',
      role: 'Strategic Decision Maker',
      description: 'Handles high-level strategic decisions, governance proposals, and ecosystem direction.',
      responsibilities: [
        'Strategic planning',
        'Governance oversight',
        'Partnership decisions',
        'Resource allocation'
      ],
      status: 'Active',
      permissions: ['Governance Voting', 'Strategic Planning', 'Partnership Approval', 'Budget Control']
    },
    {
      id: 'audit',
      name: 'Audit Agent',
      icon: '🔍',
      role: 'Security & Compliance',
      description: 'Monitors transactions, ensures compliance, and maintains security standards.',
      responsibilities: [
        'Transaction monitoring',
        'Compliance verification',
        'Risk assessment',
        'Security auditing'
      ],
      status: 'Active',
      permissions: ['Transaction Review', 'Compliance Monitoring', 'Risk Assessment', 'Security Audits']
    },
    {
      id: 'oracle',
      name: 'Oracle Agent',
      icon: '🔮',
      role: 'Data Integration',
      description: 'Manages external data feeds, price oracles, and real-world data integration.',
      responsibilities: [
        'Price feed management',
        'External data integration',
        'Market analysis',
        'Data validation'
      ],
      status: 'Active',
      permissions: ['Price Oracle Control', 'Data Feed Management', 'Market Analysis', 'External APIs']
    },
    {
      id: 'rewards',
      name: 'Rewards Agent',
      icon: '🎁',
      role: 'Reward Distribution',
      description: 'Manages mining rewards, staking distributions, and incentive programs.',
      responsibilities: [
        'Mining reward distribution',
        'Staking reward calculation',
        'Incentive program management',
        'Performance tracking'
      ],
      status: 'Active',
      permissions: ['Reward Distribution', 'Staking Management', 'Incentive Control', 'Performance Metrics']
    },
    {
      id: 'developers',
      name: 'Developers Agent',
      icon: '💻',
      role: 'Development Coordination',
      description: 'Coordinates development tasks, manages code deployments, and handles technical operations.',
      responsibilities: [
        'Development coordination',
        'Code deployment',
        'Technical maintenance',
        'Bug tracking and resolution'
      ],
      status: 'Active',
      permissions: ['Code Deployment', 'Technical Operations', 'Bug Management', 'Development Planning']
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return 'text-green-400';
      case 'inactive': return 'text-red-400';
      case 'maintenance': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
          AI Agent Architecture
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Autonomous AI agents managing the XMRT ecosystem with specialized roles and responsibilities.
        </p>
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">{agent.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{agent.name}</h3>
                <p className="text-gray-400 text-sm">{agent.role}</p>
              </div>
              <div className="ml-auto">
                <span className={`text-sm font-semibold ${getStatusColor(agent.status)}`}>
                  {agent.status}
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4">{agent.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Responsibilities:</h4>
              <ul className="space-y-1">
                {agent.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-xs text-gray-400 flex items-center">
                    <span className="text-green-400 mr-2">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Permissions:</h4>
              <div className="flex flex-wrap gap-1">
                {agent.permissions.slice(0, 2).map((permission, index) => (
                  <span key={index} className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                    {permission}
                  </span>
                ))}
                {agent.permissions.length > 2 && (
                  <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded">
                    +{agent.permissions.length - 2} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Agent Communication Network */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-purple-400">
          Agent Communication Network
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Communication Protocols</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">🔗</span>
                <span>Inter-agent messaging system</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">📡</span>
                <span>Real-time status broadcasting</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-3">🔄</span>
                <span>Consensus-based decision making</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-3">⚡</span>
                <span>Emergency alert system</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Governance Structure</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-3">👑</span>
                <span>Hierarchical decision authority</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-400 mr-3">🗳️</span>
                <span>Multi-agent voting system</span>
              </li>
              <li className="flex items-center">
                <span className="text-cyan-400 mr-3">🛡️</span>
                <span>Security override protocols</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-3">📊</span>
                <span>Performance monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Agent Performance Dashboard */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-orange-400">
          Performance Dashboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-900 rounded">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-green-400">Response Time</h3>
            <p className="text-2xl font-bold text-white">&lt; 100ms</p>
            <p className="text-gray-400 text-sm">Average agent response</p>
          </div>
          <div className="text-center p-4 bg-gray-900 rounded">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold text-blue-400">Success Rate</h3>
            <p className="text-2xl font-bold text-white">99.8%</p>
            <p className="text-gray-400 text-sm">Task completion rate</p>
          </div>
          <div className="text-center p-4 bg-gray-900 rounded">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-semibold text-purple-400">Uptime</h3>
            <p className="text-2xl font-bold text-white">99.9%</p>
            <p className="text-gray-400 text-sm">System availability</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center text-red-400">
          Agent Management
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/dao"
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg text-center transition-colors"
          >
            <div className="text-2xl mb-2">🗳️</div>
            <span className="font-semibold">DAO Governance</span>
          </Link>
          <Link
            to="/contracts"
            className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg text-center transition-colors"
          >
            <div className="text-2xl mb-2">📋</div>
            <span className="font-semibold">Smart Contracts</span>
          </Link>
          <Link
            to="/analytics"
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg text-center transition-colors"
          >
            <div className="text-2xl mb-2">📊</div>
            <span className="font-semibold">Analytics</span>
          </Link>
          <Link
            to="/deployment"
            className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg text-center transition-colors"
          >
            <div className="text-2xl mb-2">🚀</div>
            <span className="font-semibold">Deploy System</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIAgents;

