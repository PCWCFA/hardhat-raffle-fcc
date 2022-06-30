const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const BASE_FEE = ethers.utils.parseEther("0.25"); //aka the premium
const GAS_PRICE_LINK = 1e9; 
// calculated value based on the gas price of the chain
// Chainlink nodes are the ones paying to return us the random numbers & upkeeps.

module.exports = async function({getNamedAccounts, deployments}) {
  const {deploy, log} = deployments; 
  const {deployer} = await getNamedAccounts();
  const args = [BASE_FEE, GAS_PRICE_LINK];

  if(developmentChains.includes(network.name)) { 
    log("Local network deploying mocks");
    await deploy("VRFCoordinatorV2Mock", { 
      from: deployer, 
      log: true, 
      args: args 
    });
    log("Mock deployed");
    log("---------------------------"); 
  }
}

module.exports.tags = ["all", "mocks"];