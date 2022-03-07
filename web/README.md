# Web 3.0 template

This template should help get you started developing a web3.0 application with Vue.js (v3), TailwindCSS and Typescript. This is a work in progress project and I'll be adding new features.

## Requirements

This template requires de following environment variables

- VITE_BLOCKCHAIN_NETWORK_NAME: Name of the network in which the app runs (or where the smart contracts are deployed)
- VITE_BLOCKCHAIN_NETWORK_ID: Network Id in format 0xN. Rinkeby is 0x4 for example.

## Features

This projects includes multiple features out of the box including:

- Metamask wallet integration: there is a "Connect Wallet" button that triggers Metamask authorization
- State management: the metamask wallet account info is kept in a store using Pinia. That way, it can be accessed from multiple views and components.
- TailwindCSS integration
- Vue router

## Done

- [x] Identify if connected blockchain is the correct one.

## To-Do:

- [ ] Disconnect wallet button
- [ ] Support for multiple accounts instead of just one
- [ ] Support for other wallets

### How I built this project step-by-step

Created new Vite project with `npm init vite@latest web3-template-vue `

Installed all dependenciess `npm install`

Installed TailwindCSS following [the official guide](https://tailwindcss.com/docs/guides/vite)

Installed Pinia `npm i pinia` and created a basic wallet store in `src/store/wallet.ts`

Installed vue-router (v4) and created a couple of views

Created a NavBar component with the buttons to connect Metamask wallet, save wallet info in store and navigate between routes

Installed node types to use `process.env` with `npm install @types/node --save-dev`

Fixed @ imports in `vite.config.js`
