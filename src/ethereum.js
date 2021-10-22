import Web3 from "web3";
import { ethers, Contract } from "ethers";
import Instagram from "./contracts/Instagram.json";

export const loadEthereum = async () =>
  new Promise(async (resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = await new Web3(window.ethereum);
        window.ethereum.enable();
        let chainId = await window.ethereum.networkVersion;

        if (chainId !== "5777") {
          alert("change to 5777 network");
        } else {
          const instagram = new web3.eth.Contract(
            Instagram.abi,
            Instagram.networks[chainId].address
          );

          window.ethereum.on("chainChanged", (change) => {
            console.log("change it");
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", (change) => {
            window.location.reload();
          });

          resolve({ instagram, web3 });
          // return { Instagram, web3 };
        }
        resolve({ instagram: undefined, web3: undefined });
      } else {
        alert("PLEASE INSTALL METAMASK");
      }
    });
  });

export default loadEthereum;
