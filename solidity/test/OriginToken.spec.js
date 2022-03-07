const { expect } = require('chai')

const { ethers } = require('hardhat')

// Import utilities from Test Helpers
const {
  BN,
  expectEvent,
  expectRevert,
  constants,
} = require('@openzeppelin/test-helpers')

let tokenFactory, chainstackDollarsContract, owner, user1, user2, user3

const NAME = 'ChainstackDollars'
const SYMBOL = 'CHSD'
const TOTAL_SUPPLY = '100'
const TOTAL_SUPPLY_DECIMALS = '100000000000000000000'

// Start test block
describe('ChainstackDollars contract', function () {
  before(async function () {
    tokenFactory = await ethers.getContractFactory('ChainstackDollars')
    ;[owner, user1, user2, user3] = await ethers.getSigners()
    chainstackDollarsContract = await tokenFactory.deploy(
      NAME,
      SYMBOL,
      TOTAL_SUPPLY
    )
    await chainstackDollarsContract.deployed()
  })

  it('retrieve returns a value previously stored', async function () {
    // Use large integer comparisons
    expect(await chainstackDollarsContract.totalSupply()).to.be.equal(
      ethers.BigNumber.from(TOTAL_SUPPLY_DECIMALS)
    )
  })

  it('has a name', async function () {
    expect(await chainstackDollarsContract.name()).to.be.equal(NAME)
  })

  it('has a symbol', async function () {
    expect(await chainstackDollarsContract.symbol()).to.be.equal(SYMBOL)
  })

  it('assigns the initial total supply to the creator', async function () {
    expect(
      await chainstackDollarsContract.balanceOf(owner.address)
    ).to.be.equal(ethers.BigNumber.from(TOTAL_SUPPLY_DECIMALS))
  })
})
