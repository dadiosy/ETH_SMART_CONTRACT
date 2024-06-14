require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://sepolia.infura.io/v3/57222a0ec6f24c16b66be2fd05e0ecd6",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
