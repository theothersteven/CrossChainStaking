const { expect } = require("chai");
const { ethers } = require("hardhat");
const {
  constants,
} = require('@openzeppelin/test-helpers');

describe("CCStakingEthClient", function () {
  beforeEach(async function () {
    this.EthClient = await ethers.getContractFactory("CCStakingEthClient");
    this.ethClient = await this.EthClient.attach(process.env.EthClientAddress);
		
	})
  it("Should be able to check balance", async function () {
    expect(await this.ethClient.checkStEthBalance()).to.equal(0);
    console.log("Passed the first one.")
  });

  it("Should be able to stake.", async function () {
    expect(await ethClient.stake({value: 1000000})).to.eventually.be.fullfilled;
  })
});
