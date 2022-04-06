import React, { useState } from "react";
// web3 alternative to interact w blockchain
import { ethers, BigNumber } from "ethers";
// grab abi + connect to contract
import roboPunksNFT from "./RoboPunksNFT.json";

// grabbing contract address from etherscan test net
const roboPunksNFTAddress = "0x4f3Edd111C984197583Bb4daca1df0f45ec04921";

const MainMint = ({ accounts, setAccounts }) => {
  //quantity that user is minting
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    //if web3 (MetaMask) account is detected
    if (window.ethereum) {
      //ethers will act as the Web3 point of contact
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //needed to complete minting transaction
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        // The following are all neccessary to use contract
        // contract json
        roboPunksNFTAddress,
        // abi of json
        roboPunksNFT.abi,
        signer
      );
      // report errors encountered
      try {
        //mint quantity amount is passed in contrct + solidity requires a whole "BigNumber"
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  //when we click future ( "-" ) button
  //decrement function on mint amount
  const handleDecrement = () => {
    // if its 0, return/do nothing
    if (mintAmount <= 1) return;
    // otherwise, subtract 1
    setMintAmount(mintAmount - 1);
  };

  return <div>MainMint</div>;
};

export default MainMint;
