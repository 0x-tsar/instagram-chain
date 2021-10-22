import Web3 from "web3";
import { ethers, Contract } from "ethers";
// import CONTRACT from "./contracts/";

export const loadEthereum = async () =>
  window.addEventListener("load", () => {
    new Promise(async (resolve, reject) => {
      try {
        window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        // const instagram = await Web3.eth.Contract(
        //   CONTRACT.ABI,
        //   CONTRACT_GET_NETWORK
        // );
        resolve({ instagram, web3 });
      } catch (error) {
        console.log(error);
      }

      resolve({ instagram: undefined, web3: undefined });
    });
  });

export default loadEthereum;
