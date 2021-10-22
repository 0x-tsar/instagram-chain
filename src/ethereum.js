import Web3 from "web3";
import { ethers, Contract } from "ethers";
// import CONTRACT from "./contracts/";

export const loadEthereum = async () =>
  window.addEventListener("load", () => {
    new Promise(async (resolve, reject) => {
      if (window.ethereum) {
        const web3 = await new Web3(window.ethereum);
        window.ethereum.enable();
        let chainId = await window.ethereum.networkVersion;

        if (chainId !== "5777") {
          alert("change to 5777 network");
        } else {
          // const cards = new web3.eth.Contract(
          //   Cards.abi,
          //   Cards.networks[chainId].address
          // );

          window.ethereum.on("chainChanged", (change) => {
            console.log("change it");
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", (change) => {
            window.location.reload();
          });
        }

        // const instagram = await Web3.eth.Contract(
        //   CONTRACT.ABI,
        //   CONTRACT_GET_NETWORK
        // );
        resolve({ instagram, web3 });
      }
      resolve({ instagram: undefined, web3: undefined });
    });
  });

export default loadEthereum;

// export const loadEthereum = async () =>
//   new Promise(async (resolve, reject) => {
//     window.addEventListener("load", async () => {
//       if (window.ethereum) {
//         const web3 = await new Web3(window.ethereum);
//         window.ethereum.enable();
//         let chainId = await window.ethereum.networkVersion;

//         if (chainId !== "5777") {
//           alert("change to 5777 network");
//         } else {
//           const cards = new web3.eth.Contract(
//             Cards.abi,
//             Cards.networks[chainId].address
//           );

//           window.ethereum.on("chainChanged", (change) => {
//             console.log("change it");
//             window.location.reload();
//           });

//           window.ethereum.on("accountsChanged", (change) => {
//             window.location.reload();
//           });

//           resolve({ cards, web3 });
//           // return { cards, web3 };
//         }
//         resolve({ cards: undefined, web3: undefined });
//       } else {
//         alert("PLEASE INSTALL METAMASK");
//       }
//     });
//   });

// export default loadEthereum;
