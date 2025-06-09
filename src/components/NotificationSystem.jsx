import React, { useState, useEffect } from 'react';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'info', duration = 5000) => {
    const id = Date.now();
    const notification = { id, message, type, duration };
    
    setNotifications(prev => [...prev, notification]);
    
    setTimeout(() => {
      removeNotification(id);
    }, duration);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const typeStyles = {
    success: 'bg-green-600 border-green-500',
    error: 'bg-red-600 border-red-500',
    warning: 'bg-yellow-600 border-yellow-500',
    info: 'bg-blue-600 border-blue-500'
  };

  const typeIcons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`${typeStyles[notification.type]} border-l-4 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 max-w-sm`}
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl">{typeIcons[notification.type]}</span>
            <div className="flex-1">
              <p className="text-white font-medium">{notification.message}</p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Global notification function
window.showNotification = (message, type = 'info', duration = 5000) => {
  const event = new CustomEvent('showNotification', {
    detail: { message, type, duration }
  });
  window.dispatchEvent(event);
};

export default NotificationSystem;

