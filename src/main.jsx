import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App.jsx';
import './index.css';

// ThirdWeb Client ID with fallback
const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID || "0dcf50123825af0a59b5a3ad2be69639";

// Sepolia RPC URL with fallback
const rpcUrl = import.meta.env.VITE_SEPOLIA_RPC_URL || "https://sepolia.infura.io/v3/c843a693bc5d43d1aee471d2491f2414";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider 
      activeChain={Sepolia}
      clientId={clientId}
      supportedChains={[Sepolia]}
      sdkOptions={{
        alchemyApiKey: import.meta.env.VITE_ALCHEMY_API_KEY || "HPua2YZ0vA5Yj8XTJH1j8HNVYvMWbifr",
        infuraApiKey: rpcUrl.includes("infura") ? rpcUrl.split("/").pop() : undefined,
      }}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);

