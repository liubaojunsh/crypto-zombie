const Cryptozombies = artifacts.require("Cryptozombies");

module.exports = function(deployer) {
  deployer.deploy(Cryptozombies);
};
