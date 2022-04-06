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
  return <div></div>;
};
