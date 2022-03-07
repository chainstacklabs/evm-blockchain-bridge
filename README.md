# Blockchain bridge simplified

This project contains multiple pieces to create a functional (although **not production ready**) blockchain bridge between two EVM compaticle chains.

To use these you'll need access to nodes in different chains. [Check out Chainstack website to learn more](https://chainstack.com).

## Requirements

Node.js / NPM

## Build / Compile

### Smart contracts

Create a Metamask wallet and get some tokens for your target networks. This code was tested with Ropsten and Harmony testnet. You can get [Ropsten ETH here]() and [Harmony testnet ONE here]().

Run `npm i` to install all required dependencies.

Rename `/solidity/.env.example` to `/solidity/.env` and fill in the details with your wallet address and the RPC endpoints from your Chainstack dashboard.

To deploy your contracts run `npm run deploy:ori` and `npm run deploy:dest`.

You'll get the contract address in the console.

### Front-end

Rename `/web/.env.example` to `/web/.env` and fill in the details with your wallet address, RPC endpoints and token addresses from the deployed smart contracts.

To build the front-end, run `npm i` and `npm run build` inside the web directory. You can run the front-end locally with `npm run dev` or deploy the the generated `dist` folder to any static site hosting.

### Back-end

The back-end service is required to actually run the bridge.
Rename `/backend/.env.example` to `/backend/.env` and fill in the details with your wallet address, RPC endpoints and token addresses from the deployed smart contracts.

Run `npm i` inside the backend directory. To start the back-end service run `npm start`.

Once the back-end service is running, you can use the front-end to send tokens through the bridge.
