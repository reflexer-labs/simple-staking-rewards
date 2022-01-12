import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("StakingRewards");
  const contract = await Contract.deploy("0x6aEe04337Db7D94229CaacCb73C608298636Bc73", "0x6e6eA84bb2fcE17AfCE8e1117DdC708142ef51c9");

  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
