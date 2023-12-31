import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";
// Typescript
import '@openzeppelin/hardhat-upgrades';
// import "@nomiclabs/hardhat-etherscan";
// import 'solidity-coverage'

const { SEPOLIA_RPC, PRIVATE_KEY, ETHERSCAN_API } = process.env;
const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url: SEPOLIA_RPC || "",
      accounts: [PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: (ETHERSCAN_API as string) || "",
      goerli:(ETHERSCAN_API as string) || "",
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

export default config;
