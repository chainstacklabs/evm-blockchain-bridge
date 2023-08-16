<img width="1200" alt="Labs" src="https://user-images.githubusercontent.com/99700157/213291931-5a822628-5b8a-4768-980d-65f324985d32.png">

<p>
 <h3 align="center">Chainstack is the leading suite of services connecting developers with Web3 infrastructure</h3>
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/build-better-with-ethereum/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Ethereum.svg" /></a>&nbsp;  
  <a target="_blank" href="https://chainstack.com/build-better-with-bnb-smart-chain/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/BNB.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-polygon/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Polygon.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-avalanche/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Avalanche.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-fantom/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Fantom.svg" /></a>&nbsp;
</p>

<p align="center">
  • <a target="_blank" href="https://chainstack.com/">Homepage</a> •
  <a target="_blank" href="https://chainstack.com/protocols/">Supported protocols</a> •
  <a target="_blank" href="https://chainstack.com/blog/">Chainstack blog</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Chainstack docs</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Blockchain API reference</a> • <br> 
  • <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a> •
</p>

# EVM Blockchain bridge simplified

**[You can read the full article for this project in the Chainstack blog](https://chainstack.com/how-to-create-blockchain-bridge/)**

This project contains multiple pieces to create a functional (although **not production ready**) ERC20 blockchain bridge between two EVM-compatible chains.

It uses a wallet as an escrow and leverages the events triggered by the ERC20 tokens to burn and mint tokens on each side of the bridge

## Requirements

- Node.js at least v18.15.0— [Install Node](https://nodejs.org/en)
- You'll need access to nodes in different chains to use this bridge. [Check out the Chainstack docs to learn how to deploy nodes](https://docs.chainstack.com/docs/platform-introduction).

## Build & Compile

Create a Metamask wallet and get some tokens for your target networks. This code was tested with Sepolia and BNB testnet. You can get testnet tokens using the [Chainstack Faucet](https://faucet.chainstack.com/sepolia-faucet).

Clone the repository.

```sh
git clone https://github.com/chainstacklabs/evm-blockchain-bridge.git
```

### Deploy smart contracts

```sh
cd solidity
```

Clean install dependencies.

```sh
npm ci
```

Rename `/solidity/.env.example` to `/solidity/.env` and fill in the details with your wallet address and the RPC endpoints from your Chainstack dashboard.

To deploy your contracts, run `npm run deploy:ori` and `npm run deploy:dest`.

You'll get the contract address in the console.

> You can test the contracts running `npm run test`.

### Front-end

Navigate to the `web` directory.

```sh
cd .. && cd web
```

Clean install dependencies

```sh
npm ci
```

Rename `/web/.env.example` to `/web/.env` and fill in the details with your wallet address, RPC endpoints, and token addresses from the deployed smart contracts.

To build the front end, run `npm run build` inside the `web` directory. You can run the front end locally with `npm run dev` or deploy the generated `dist` folder to any static site hosting.

### Back-end

The back-end service is required to run the bridge.

Navigate to the `backend` directory.

```sh
cd .. && cd backend
```

Clean install dependencies

```sh
npm ci
```

Rename `/backend/.env.example` to `/backend/.env` and fill in the details with your wallet address, RPC endpoints, and token addresses from the deployed smart contracts.

To start the back-end service, run `npm start`.

Once the back-end service runs, you can use the front end to send tokens through the bridge.
