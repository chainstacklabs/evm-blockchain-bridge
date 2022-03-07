const { expect } = require('chai')

const { ethers } = require('hardhat')

// Import utilities from Test Helpers
const {
  BN,
  expectEvent,
  expectRevert,
  constants,
} = require('@openzeppelin/test-helpers')

let tokenFactory, qchainstackDollarsContract, owner, bridge, user2, user3

const NAME = 'DChainstackDollars'
const SYMBOL = 'D-CHSD'

// Start test block
describe('DChainstackDollars contract', function () {
  before(async function () {
    tokenFactory = await ethers.getContractFactory('DChainstackDollars')
    ;[owner, bridge, user2, user3] = await ethers.getSigners()
    // deploy contract with bridge address
    qchainstackDollarsContract = await tokenFactory.deploy(bridge.address)
    await qchainstackDollarsContract.deployed()
  })

  it('has a name', async function () {
    expect(await qchainstackDollarsContract.name()).to.be.equal(NAME)
  })

  it('has a symbol', async function () {
    expect(await qchainstackDollarsContract.symbol()).to.be.equal(SYMBOL)
  })

  // it('Stores bridge address on deploy', async function () {
  //   expect(await qchainstackDollarsContract.bridge()).to.be.equal(
  //     bridge.address
  //   )
  // })

  it('Prevents mint method to be called', async function () {
    await expect(
      qchainstackDollarsContract.connect(user2).mint(user2.address, 1000)
    ).to.be.revertedWith(
      'DChainstackDollars: only the bridge can trigger this method!'
    )
  })

  it('Prevents burnFrom method to be called', async function () {
    await expect(
      qchainstackDollarsContract.connect(user2).burnFrom(user2.address, 1000)
    ).to.be.revertedWith(
      'DChainstackDollars: only the bridge can trigger this method!'
    )
  })

  it('Allows bridge to mint tokens for users', async function () {
    await qchainstackDollarsContract.connect(bridge).mint(user2.address, 100000)
    expect(
      await qchainstackDollarsContract.connect(user2).balanceOf(user2.address)
    ).to.be.equal(100000)
  })

  it('Prevents bridge from burning not-allowed tokens', async function () {
    await expect(
      qchainstackDollarsContract.connect(bridge).burnFrom(user2.address, 4)
    ).to.be.revertedWith('ERC20: insufficient allowance')
  })

  it('Allows bridge to burn allowed tokens from users address', async function () {
    await qchainstackDollarsContract.connect(bridge).mint(user3.address, 10)

    // allows bridge to burn
    await qchainstackDollarsContract.connect(user3).approve(bridge.address, 5)

    await qchainstackDollarsContract.connect(bridge).burnFrom(user3.address, 5)

    expect(
      await qchainstackDollarsContract.connect(bridge).balanceOf(user3.address)
    ).to.be.equal(5)
  })
})
