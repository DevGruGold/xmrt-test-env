# XMRT Frontend

This is the frontend application for the XMRT ecosystem, which facilitates free banking, onramping, offramping, cold storage through its CashDapp, and mobile mining of Monero (XMR). The system is governed by a DAO managed by AI agents in executive roles.

## Features

- XMRT token staking
- Monero mining integration
- CashDapp for banking functions
- DAO governance with AI agents
- Integration with ThirdWeb SDK for Web3 functionality

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Ethereum wallet (MetaMask recommended)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DevGruGold/xmrt-test-env.git
   cd xmrt-test-env
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Edit the `.env` file with your configuration values.

## Environment Variables

The following environment variables are required:

- `VITE_SEPOLIA_RPC_URL`: Sepolia testnet RPC URL
- `VITE_ALCHEMY_API_KEY`: Alchemy API key for alternative RPC provider
- `VITE_THIRDWEB_CLIENT_ID`: ThirdWeb Client ID
- `VITE_MONERO_POOL_WALLET`: Monero pool wallet address
- `VITE_XMART_ADDRESS`: Deployed XMART token contract address
- `VITE_MONERO_POOL_ADDRESS`: Deployed MoneroPool contract address
- `VITE_CASH_DAPP_ADDRESS`: Deployed CashDappIntegration contract address

## Development

To start the development server:

```bash
npm run dev
```

## Building for Production

To build the application for production:

```bash
npm run build
```

## Deployment

The application can be deployed to Vercel by connecting your GitHub repository to Vercel and configuring the environment variables. See the [vercel-deployment-guide.md](vercel-deployment-guide.md) for detailed instructions.

## Smart Contracts

The application interacts with the following smart contracts:

- XMART Token: ERC20 token with staking and governance features
- MoneroPool: Contract for managing mined Monero and distributions
- CashDappIntegration: Contract for banking functions

See the [testnet-deployment-guide.md](testnet-deployment-guide.md) for instructions on deploying the smart contracts to the Sepolia testnet.

## ThirdWeb Integration

The application uses ThirdWeb SDK for:

- Wallet connection and management
- Smart contract interaction
- Transaction handling
- Chain management

## License

This project is licensed under the MIT License - see the LICENSE file for details.




<!-- XMRT Footer -->
---

## 🔐 About XMRT

**Financial Privacy. Liberty. Blockchain.**

XMRT is dedicated to building the infrastructure for a financially free future through:

- 🛡️ **Privacy-First Technology** - Your financial data belongs to you
- ⛓️ **Blockchain Solutions** - Decentralized, trustless, and transparent
- 🔒 **Cryptographic Security** - State-of-the-art encryption and privacy protocols
- 💎 **DeFi Integration** - Access to decentralized financial services
- 🌐 **Web3 Development** - Building the decentralized internet
- 🚀 **Financial Liberty** - Empowering individuals with financial sovereignty

### 🔗 Connect with XMRT

- 🌐 Website: [https://xmrt.io](https://xmrt.io)
- 📧 Email: xmrtsolutions@gmail.com
- 🐦 Twitter: @XMRT_io
- 💬 Telegram: t.me/XMRT_Official

**"Code is Law. Privacy is Right. Liberty is Essential."**

*Building Financial Freedom, One Block at a Time* 🚀
