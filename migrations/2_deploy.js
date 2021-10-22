const Instagram = artifacts.require("Instagram");

module.exports = async (deployer) => {
  await deployer.deploy(Instagram);
  const instagram = Instagram.deployed();
  console.log(instagram);
  console.log("Instagram contract deployed!");
};
