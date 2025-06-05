import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './index.css';

// ThirdWeb Client ID with fallback
const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID || "0dcf50123825af0a59b5a3ad2be69639";

console.log('ThirdWeb Client ID:', clientId);
console.log('Environment variables:', {
  VITE_THIRDWEB_CLIENT_ID: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
  VITE_SEPOLIA_RPC_URL: import.meta.env.VITE_SEPOLIA_RPC_URL,
  VITE_ALCHEMY_API_KEY: import.meta.env.VITE_ALCHEMY_API_KEY
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThirdwebProvider 
        activeChain={Sepolia}
        clientId={clientId}
        supportedChains={[Sepolia]}
      >
        <App />
      </ThirdwebProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);

