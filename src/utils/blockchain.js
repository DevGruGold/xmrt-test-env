// Simplified blockchain utilities to avoid import errors

// Contract addresses - these would be updated after deployment
const CONTRACT_ADDRESSES = {
  // Sepolia testnet addresses
  11155111: {
    XMART: import.meta.env.VITE_XMART_ADDRESS || '0x0000000000000000000000000000000000000000',
    MoneroPool: import.meta.env.VITE_MONERO_POOL_ADDRESS || '0x0000000000000000000000000000000000000000',
    CashDappIntegration: import.meta.env.VITE_CASH_DAPP_ADDRESS || '0x0000000000000000000000000000000000000000'
  },
  // Local development addresses
  31337: {
    XMART: '0x0000000000000000000000000000000000000000',
    MoneroPool: '0x0000000000000000000000000000000000000000',
    CashDappIntegration: '0x0000000000000000000000000000000000000000'
  }
};

// Get the current network
const getNetwork = async () => {
  try {
    if (window.ethereum) {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      return parseInt(chainId, 16);
    }
    return 11155111; // Default to Sepolia
  } catch (error) {
    console.error("Error getting network:", error);
    return 11155111; // Default to Sepolia on error
  }
};

// Get contract addresses for the current network
const getContractAddresses = async () => {
  const chainId = await getNetwork();
  return CONTRACT_ADDRESSES[chainId] || CONTRACT_ADDRESSES[11155111];
};

// Connect wallet
const connectWallet = async () => {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return accounts[0];
    } else {
      throw new Error("Ethereum wallet not found");
    }
  } catch (error) {
    console.error("Error connecting wallet:", error);
    throw error;
  }
};

// Get connected account
const getAccount = async () => {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      return accounts.length > 0 ? accounts[0] : null;
    }
    return null;
  } catch (error) {
    console.error("Error getting account:", error);
    return null;
  }
};

// Format address for display
const formatAddress = (address) => {
  if (!address) return '';
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

// Format date from timestamp
const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleString();
};

// Get Monero pool wallet address
const getMoneroPoolWallet = () => {
  return import.meta.env.VITE_MONERO_POOL_WALLET || 
    "46GAxLnJHpJMKwp5fuUPssKLqW2pukXuEXV9cLi8u5T8g9ENEiugbupMtjBt9jbGPtgi1EHvSxiWdDNHzpeDiTc1MFSuScD";
};

// Check if contracts are deployed
const areContractsDeployed = async () => {
  const addresses = await getContractAddresses();
  return addresses.XMART !== '0x0000000000000000000000000000000000000000';
};

export {
  getNetwork,
  getContractAddresses,
  connectWallet,
  getAccount,
  formatAddress,
  formatDate,
  getMoneroPoolWallet,
  areContractsDeployed
};

