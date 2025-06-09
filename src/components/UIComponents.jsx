import React, { useState, useEffect } from 'react';

const LoadingSpinner = ({ size = 'md', color = 'orange' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    orange: 'border-orange-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    purple: 'border-purple-500'
  };

  return (
    <div className={`${sizeClasses[size]} border-2 border-gray-300 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}></div>
  );
};

const StatusIndicator = ({ status, label }) => {
  const statusConfig = {
    online: { color: 'bg-green-400', animation: 'animate-pulse' },
    offline: { color: 'bg-red-400', animation: '' },
    warning: { color: 'bg-yellow-400', animation: 'animate-pulse' },
    loading: { color: 'bg-blue-400', animation: 'animate-pulse' }
  };

  const config = statusConfig[status] || statusConfig.offline;

  return (
    <div className="flex items-center space-x-2">
      <div className={`w-3 h-3 rounded-full ${config.color} ${config.animation}`}></div>
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
};

const ProgressBar = ({ progress, color = 'orange', showPercentage = true }) => {
  const colorClasses = {
    orange: 'bg-gradient-to-r from-orange-500 to-red-500',
    blue: 'bg-gradient-to-r from-blue-500 to-purple-500',
    green: 'bg-gradient-to-r from-green-500 to-emerald-500'
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        {showPercentage && (
          <span className="text-sm text-gray-300">{progress}%</span>
        )}
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ease-out ${colorClasses[color]}`}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        ></div>
      </div>
    </div>
  );
};

const AnimatedCounter = ({ target, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return (
    <span className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const GlowButton = ({ children, onClick, variant = 'primary', size = 'md', disabled = false, loading = false }) => {
  const baseClasses = 'relative overflow-hidden font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';
  
  const variants = {
    primary: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white focus:ring-orange-500 shadow-lg hover:shadow-orange-500/25',
    secondary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-blue-500/25',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95';

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses}`}
    >
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {loading && <LoadingSpinner size="sm" color="white" />}
        <span>{children}</span>
      </span>
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      )}
    </button>
  );
};

const FloatingCard = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const PulseEffect = ({ children, color = 'orange' }) => {
  const colorClasses = {
    orange: 'shadow-orange-500/50',
    blue: 'shadow-blue-500/50',
    green: 'shadow-green-500/50',
    purple: 'shadow-purple-500/50'
  };

  return (
    <div className={`animate-pulse ${colorClasses[color]} shadow-lg`}>
      {children}
    </div>
  );
};

const HoverCard = ({ children, className = '' }) => {
  return (
    <div className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}>
      {children}
    </div>
  );
};

const GradientText = ({ children, gradient = 'primary' }) => {
  const gradients = {
    primary: 'bg-gradient-to-r from-orange-400 via-red-500 to-pink-400',
    secondary: 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400',
    success: 'bg-gradient-to-r from-green-400 to-emerald-500',
    warning: 'bg-gradient-to-r from-yellow-400 to-orange-500'
  };

  return (
    <span className={`${gradients[gradient]} bg-clip-text text-transparent font-bold`}>
      {children}
    </span>
  );
};

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap ${positions[position]} transition-opacity duration-200`}>
          {content}
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export {
  LoadingSpinner,
  StatusIndicator,
  ProgressBar,
  AnimatedCounter,
  GlowButton,
  FloatingCard,
  PulseEffect,
  HoverCard,
  GradientText,
  Tooltip
};

