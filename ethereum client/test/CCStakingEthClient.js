const { expect } = require("chai");
const { ethers } = require("hardhat");
const {
  constants,
} = require('@openzeppelin/test-helpers');

describe("CCStakingEthClient", function () {
  // beforeEach(async function () {
  //   this.EthClient = await ethers.getContractFactory("CCStakingEthClient");
  //   this.ethClient = await this.EthClient.attach(process.env.EthClientAddress);
		
	// })
  // it("Should be able to check balance", async function () {
  //   expect(await this.ethClient.checkStEthBalance()).to.equal(0);
  //   console.log("Passed the first one.")
  // });
  let EthClient;
  let ethClient;
  let ethClientAsDeployer;
  let provider;

  context("Wrapping", function () {
		beforeEach(async function () {
      provider = ethers.provider;
      const [deployer, author, collector] = await ethers.getSigners();
      const balance = await provider.getBalance(await deployer.getAddress());
      // console.log(balance)
      EthClient = await ethers.getContractFactory("CCStakingEthClient");
      ethClient = await EthClient.deploy(
        process.env.LIDO_ADDRESS_ROPSTEN,
        process.env.WETH_ADDRESS_ROPSTEN
      );
      await ethClient.deployed();
      // const EthClient = await ethers.getContractFactory("CCStakingEthClient");
      // const ethClient = await EthClient.deploy(
      //   process.env.LIDO_ADDRESS_ROPSTEN,
      //   process.env.WSTETH_ADDRESS_ROPSTEN
      // );
      // await ethClient.deployed();
      ethClientAsDeployer = ethClient.connect(deployer);
      await deployer.sendTransaction({to: ethClient.address, value:ethers.utils.parseEther('1.0')});

		})
		it("Should have 1 eth", async () => { 
      expect(await provider.getBalance(ethClient.address)).to.be.equal(ethers.utils.parseEther('1.0'));
		});	
		// it("Should be able to wrap", async () => { 
    //   expect(await ethClientAsDeployer.wrap()).to.be.fullfilled;
    //   expect(await ethClient.checkWrappedETHBalance()).to.be.equal(ethers.utils.parseEther('1.0'));
		// });	
	})
});
