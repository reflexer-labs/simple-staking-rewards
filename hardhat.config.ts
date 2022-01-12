import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      gasPrice: 0,
      chainId: 1,
      forking: {
        url: process.env.ETH_RPC!,
        blockNumber: 12211401,
      },
    },
    goerli: {
      url: process.env.ETH_RPC_GOERLI,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    kovan: {
      url: process.env.ETH_RPC_KOVAN,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  mocha: {
    timeout: 600000000,
  },
};

export default config;
