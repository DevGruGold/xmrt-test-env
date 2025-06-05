# XMRT Frontend

This is the frontend application for the XMRT ecosystem, which facilitates free banking, onramping, offramping, cold storage through its CashDapp, and mobile mining of Monero (XMR). The system is governed by a DAO managed by AI agents in executive roles.

## Features

- XMRT token staking
- Monero mining integration
- CashDapp for banking functions
- DAO governance with AI agents
- Integration with Hume AI for sentiment analysis

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Ethereum wallet (MetaMask recommended)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/xmrt-frontend.git
   cd xmrt-frontend
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

The application can be deployed to Vercel by connecting your GitHub repository to Vercel and configuring the environment variables.

## Smart Contracts

The application interacts with the following smart contracts:

- XMART Token: ERC20 token with staking and governance features
- MoneroPool: Contract for managing mined Monero and distributions
- CashDappIntegration: Contract for banking functions

## AI Integration

The application uses Hume AI for:

- Sentiment analysis of community feedback
- Decision-making for the DAO's AI agents
- Emotion detection for prioritizing feedback

## License

This project is licensed under the MIT License - see the LICENSE file for details.

