import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log(`Deploying contract with account: ${deployer.address}`);
  
    const Mock = await ethers.getContractFactory("MockERC20");
    const mock = await Mock.deploy();
  
    console.log(`Contract address: ${mock.address}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });