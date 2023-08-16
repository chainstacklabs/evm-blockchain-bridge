const BRIDGE_WALLET = process.env.BRIDGE_WALLET
const ORIGIN_TOKEN_CONTRACT_ADDRESS = process.env.ORIGIN_TOKEN_CONTRACT_ADDRESS
const DESTINATION_TOKEN_CONTRACT_ADDRESS =
  process.env.DESTINATION_TOKEN_CONTRACT_ADDRESS

const mintTokens = async (provider, contract, amount, address) => {
  try {
    const trx = contract.methods.mint(address, amount)

    const gas = await trx.estimateGas({ from: BRIDGE_WALLET })
    console.log('gas :>> ', gas)
    const gasPrice = await provider.eth.getGasPrice()
    console.log('gasPrice :>> ', gasPrice)
    const data = trx.encodeABI()
    console.log('data :>> ', data)
    const nonce = await provider.eth.getTransactionCount(BRIDGE_WALLET)

    console.log('nonce :>> ', nonce)

    const trxData = {
      // trx is sent from the bridge wallet
      from: BRIDGE_WALLET,
      // destination of the transaction is the ERC20 token address
      to: DESTINATION_TOKEN_CONTRACT_ADDRESS,

      data,
      gas,
      gasPrice,
      nonce,
    }

    console.log('Transaction ready to be sent')

    const receipt = await provider.eth.sendTransaction(trxData)
    console.log(`Transaction sent, hash is ${receipt.transactionHash}`)
    console.log(
      `mintTokens > You can see this transaction in ${process.env.DESTINATION_EXPLORER}${receipt.transactionHash}`
    )
  } catch (error) {
    console.error('Error in mintTokens >', error)
    return false
  }
}

const transferToEthWallet = async (provider, contract, amount, address) => {
  try {
    console.log('Transfering tokens to ETH wallet 💸💸💸💸💸')
    console.log('address :>> ', address)
    console.log('amount :>> ', amount)
    const trx = contract.methods.transfer(address, amount)

    const gas = await trx.estimateGas({ from: BRIDGE_WALLET })
    console.log('gas :>> ', gas)
    const gasPrice = await provider.eth.getGasPrice()
    console.log('gasPrice :>> ', gasPrice)
    const data = trx.encodeABI()
    console.log('data :>> ', data)
    const nonce = await provider.eth.getTransactionCount(BRIDGE_WALLET)

    console.log('nonce :>> ', nonce)

    const trxData = {
      // trx is sent from the bridge wallet
      from: BRIDGE_WALLET,
      // destination of the transaction is the ERC20 token address
      to: ORIGIN_TOKEN_CONTRACT_ADDRESS,
      // data contains the amount and receiver params for transfer
      data,
      // TO TEST!!!
      gas: Math.ceil(gas * 1.2),
      gasPrice,
      nonce,
    }

    // console.log('signedTrx :>> ', signedTrx.rawTransaction)

    console.log('Transaction ready to be sent')

    const receipt = await provider.eth.sendTransaction(trxData)
    console.log(`Transaction sent, hash is ${receipt.transactionHash}`)
    console.log(
      `transferToEthWallet > You can see this transaction in ${process.env.ORIGIN_EXPLORER}${receipt.transactionHash}`
    )
    return true
  } catch (error) {
    console.error('Error in transferToEthWallet >', error)
    return false
  }
}
const approveForBurn = async (provider, contract, amount) => {
  try {
    console.log('Approving token burn 🔥🔥🔥🔥🔥')
    console.log('amount :>> ', amount)
    console.log('contract.options.address :>> ', contract.options.address)
    const trx = contract.methods.approve(BRIDGE_WALLET, amount)

    const gas = await trx.estimateGas({ from: BRIDGE_WALLET })
    console.log('gas :>> ', gas)
    const gasPrice = await provider.eth.getGasPrice()
    console.log('gasPrice :>> ', gasPrice)
    const data = trx.encodeABI()
    console.log('data :>> ', data)
    const nonce = await provider.eth.getTransactionCount(BRIDGE_WALLET)

    console.log('nonce :>> ', nonce)

    const trxData = {
      // trx is sent from the bridge wallet
      from: BRIDGE_WALLET,
      // destination of the transaction is the ERC20 token address
      to: contract.options.address,
      data,
      // hardcoded gasPrice as estimation is not correct
      gas: 60000,
      gasPrice,
      nonce,
    }

    console.log('Transaction ready to be sent')

    const receipt = await provider.eth.sendTransaction(trxData)
    console.log(`Transaction sent, hash is ${receipt.transactionHash}`)
    console.log(
      `approveForBurn > You can see this transaction in ${process.env.DESTINATION_EXPLORER}${receipt.transactionHash}`
    )
    return true
  } catch (err) {
    console.error('Error in approveForBurn > ', err)
    return false
  }
}

const burnTokens = async (provider, contract, amount) => {
  try {
    console.log('Burning tokens from wallet 🔥🔥🔥🔥🔥')
    console.log('amount :>> ', amount)
    console.log('contract.options.address :>> ', contract.options.address)
    const trx = contract.methods.burnFrom(BRIDGE_WALLET, amount)

    const gas = await trx.estimateGas({ from: BRIDGE_WALLET })
    console.log('gas :>> ', gas)
    const gasPrice = await provider.eth.getGasPrice()
    console.log('gasPrice :>> ', gasPrice)
    const data = trx.encodeABI()
    console.log('data :>> ', data)
    const nonce = await provider.eth.getTransactionCount(BRIDGE_WALLET)

    console.log('nonce :>> ', nonce)

    const trxData = {
      // trx is sent from the bridge wallet
      from: BRIDGE_WALLET,
      // destination of the transaction is the ERC20 token address
      to: contract.options.address,
      data,
      // hardcoded gasPrice as estimation is not correct
      gas,
      gasPrice,
      nonce,
    }

    console.log('Transaction ready to be sent')

    const receipt = await provider.eth.sendTransaction(trxData)
    console.log(`Transaction sent, hash is ${receipt.transactionHash}`)
    console.log(
      `burnTokens > You can see this transaction in ${process.env.DESTINATION_EXPLORER}${receipt.transactionHash}`
    )
    return true
  } catch (err) {
    console.error('Error in burnTokens > ', err)
    return false
  }
}

module.exports = {
  mintTokens,
  approveForBurn,
  burnTokens,
  transferToEthWallet,
}
