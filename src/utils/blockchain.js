import { ethers } from 'ethers';

// Contract ABIs
import XMART_ABI from '../contracts/artifacts/XMART.json';
import MoneroPool_ABI from '../contracts/artifacts/MoneroPool.json';
import CashDappIntegration_ABI from '../contracts/artifacts/CashDappIntegration.json';

// Contract addresses - these would be updated after deployment
const CONTRACT_ADDRESSES = {
  // Sepolia testnet addresses
  sepolia: {
    XMART: '0x0000000000000000000000000000000000000000',
    MoneroPool: '0x0000000000000000000000000000000000000000',
    CashDappIntegration: '0x0000000000000000000000000000000000000000'
  },
  // Local development addresses
  localhost: {
    XMART: '0x0000000000000000000000000000000000000000',
    MoneroPool: '0x0000000000000000000000000000000000000000',
    CashDappIntegration: '0x0000000000000000000000000000000000000000'
  }
};

// Get the current network
const getNetwork = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      return network.name === 'unknown' ? 'localhost' : network.name;
    } catch (error) {
      console.error("Error getting network:", error);
      return 'localhost';
    }
  }
  return 'localhost';
};

// Get contract addresses for the current network
const getContractAddresses = async () => {
  const network = await getNetwork();
  return CONTRACT_ADDRESSES[network] || CONTRACT_ADDRESSES.localhost;
};

// Get a contract instance
const getContract = async (contractName, signer = null) => {
  if (!window.ethereum) return null;
  
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const addresses = await getContractAddresses();
    const address = addresses[contractName];
    
    if (!address || address === '0x0000000000000000000000000000000000000000') {
      console.error(`Contract address for ${contractName} not set`);
      return null;
    }
    
    let abi;
    switch (contractName) {
      case 'XMART':
        abi = XMART_ABI;
        break;
      case 'MoneroPool':
        abi = MoneroPool_ABI;
        break;
      case 'CashDappIntegration':
        abi = CashDappIntegration_ABI;
        break;
      default:
        console.error(`Unknown contract: ${contractName}`);
        return null;
    }
    
    const signerOrProvider = signer ? provider.getSigner() : provider;
    return new ethers.Contract(address, abi, signerOrProvider);
  } catch (error) {
    console.error(`Error getting ${contractName} contract:`, error);
    return null;
  }
};

// Connect wallet
const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return accounts[0];
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      throw error;
    }
  } else {
    throw new Error("Ethereum wallet not found");
  }
};

// Get connected account
const getAccount = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      return accounts.length > 0 ? accounts[0] : null;
    } catch (error) {
      console.error("Error getting account:", error);
      return null;
    }
  }
  return null;
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

export {
  getNetwork,
  getContractAddresses,
  getContract,
  connectWallet,
  getAccount,
  formatAddress,
  formatDate
};

