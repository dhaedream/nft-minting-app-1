import React, { useState } from "react";

const Navbar = ({ accounts, setAccounts }) => {
  //if there is an account, this boolean will be true
  //which will mean that it is connected
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  return (
    <div>
      {/* left side - Social Media icons*/}
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Email</div>

      {/* Right Side - Sections and Connect */}
      <div>About</div>
      <div>Mimnt</div>
      <div>Team</div>

      {/* Connect  */}
      {isConnected ? (
        <p>Connected</p>
      ) : (
        <button onClick={connectAccount}>Connect MetaMask</button>
      )}
    </div>
  );
};

export default Navbar;
