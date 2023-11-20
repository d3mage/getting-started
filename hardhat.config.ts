import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers"

const config:HardhatUserConfig = {
  paths: {
    sources: "./src/solidity/"
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/"
    },
    sepolia: {
      url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
      accounts: ["4cbaf04fd05775d452df3bc2b5bb6a8627739e1f2da93d00c010fb7b52c336ef"]
    }
  },
}

export default config;