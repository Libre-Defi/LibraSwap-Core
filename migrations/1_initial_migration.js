const LibraFactory = artifacts.require("LibraFactory");
const Libra_Owner_Wallet = "0xA4f3B729A4D6bea2c13d427390cfF7754273e16C"; // dev wallet
module.exports = function (deployer) {
  deployer.deploy(LibraFactory,Libra_Owner_Wallet);
};
