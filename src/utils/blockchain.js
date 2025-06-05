import { getSDK, getReadOnlySDK } from './thirdwebUtils';
import { Sepolia } from "@thirdweb-dev/chains";
import { ethers } from 'ethers';

// Contract ABIs
import XMART_ABI from '../contracts/artifacts/XMART.json';
import MoneroPool_ABI from '../contracts/artifacts/MoneroPool.json';
import CashDappIntegration_ABI from '../contracts/artifacts/CashDappIntegration.json';

// Contract addresses - these would be updated after deployment
const CONTRACT_ADDRESSES = {
  // Sepolia testnet addresses
  [Sepolia.chainId]: {
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
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      return network.chainId;
    }
    return Sepolia.chainId; // Default to Sepolia
  } catch (error) {
    console.error("Error getting network:", error);
    return Sepolia.chainId; // Default to Sepolia on error
  }
};

// Get contract addresses for the current network
const getContractAddresses = async () => {
  const chainId = await getNetwork();
  return CONTRACT_ADDRESSES[chainId] || CONTRACT_ADDRESSES[Sepolia.chainId];
};

// Get a contract instance using ThirdWeb
const getContract = async (contractName, signer = null) => {
  try {
    const addresses = await getContractAddresses();
    const address = addresses[contractName];
    
    if (!address || address === '0x0000000000000000000000000000000000000000') {
      console.error(`Contract address for ${contractName} not set`);
      return null;
    }
    
    let abi;
    switch (contractName) {
      case 'XMART':
        abi = XMART_ABI.abi;
        break;
      case 'MoneroPool':
        abi = MoneroPool_ABI.abi;
        break;
      case 'CashDappIntegration':
        abi = CashDappIntegration_ABI.abi;
        break;
      default:
        console.error(`Unknown contract: ${contractName}`);
        return null;
    }
    
    if (signer) {
      const sdk = await getSDK(signer);
      return await sdk.getContract(address, abi);
    } else {
      const sdk = getReadOnlySDK();
      return await sdk.getContract(address, abi);
    }
  } catch (error) {
    console.error(`Error getting ${contractName} contract:`, error);
    return null;
  }
};

// Connect wallet using ThirdWeb
const connectWallet = async () => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
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
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
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

export {
  getNetwork,
  getContractAddresses,
  getContract,
  connectWallet,
  getAccount,
  formatAddress,
  formatDate,
  getMoneroPoolWallet
};

