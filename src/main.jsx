import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './index.css';

// ThirdWeb Client ID with fallback
const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID || "0dcf50123825af0a59b5a3ad2be69639";

// WalletConnect Project ID (Reown)
const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || "6054bd6688c6860ed806775db1c24f15";

console.log('ThirdWeb Client ID:', clientId);
console.log('WalletConnect Project ID:', walletConnectProjectId);
console.log('Environment variables:', {
  VITE_THIRDWEB_CLIENT_ID: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
  VITE_WALLETCONNECT_PROJECT_ID: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
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
        dAppMeta={{
          name: "XMRT Test Environment",
          description: "XMRT DAO and Mining Pool Test Environment",
          logoUrl: "https://xmrt-test-env.vercel.app/vite.svg",
          url: "https://xmrt-test-env.vercel.app",
          isDarkMode: true,
        }}
        walletConnectV2={{
          projectId: walletConnectProjectId,
          metadata: {
            name: "XMRT Test Environment",
            description: "XMRT DAO and Mining Pool Test Environment",
            url: "https://xmrt-test-env.vercel.app",
            icons: ["https://xmrt-test-env.vercel.app/vite.svg"],
          },
        }}
      >
        <App />
      </ThirdwebProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);

