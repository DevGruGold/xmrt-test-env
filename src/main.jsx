import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App.jsx';
import './index.css';

// ThirdWeb Client ID
const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID || "0dcf50123825af0a59b5a3ad2be69639";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider 
      activeChain={Sepolia}
      clientId={clientId}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);

