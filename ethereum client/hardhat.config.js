require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
// require("@nomiclabs/hardhat-web3");
// require('@openzeppelin/hardhat-upgrades'); // for deploying and working with upgradeable contracts
const path = require("path");
require("dotenv").config({path: "./.env"});

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.9",

  paths: {
    // artifacts: "./client/src/artifacts",
    // deployments: "./client/src/deployments"
  },

  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },

  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [process.env.RINKEBY_PK]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [process.env.GOERLI_PK]
    }
  }
};
