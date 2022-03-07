require('@nomiclabs/hardhat-waffle')

//load env file
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  paths: {
    sources: './contracts',
    artifacts: '../web/src/artifacts',
    tests: './test',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      chainId: 5777,
      url: 'http://127.0.0.1:7545',
    },
    origin: {
      url: process.env.DEPLOY_ENDPOINT_ORIGIN,
      accounts: [process.env.DEPLOY_ACC_KEY],
    },
    destination: {
      url: process.env.DEPLOY_ENDPOINT_DESTINATION,
      accounts: [process.env.DEPLOY_ACC_KEY],
    },
    // rinkeby: {
    //   url: process.env.DEPLOY_KEY_RINKEBY,
    //   accounts: [process.env.DEPLOY_ACC_RINKEBY],
    // },
  },
}
