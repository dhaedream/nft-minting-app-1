import React, { useState } from "react";
import "./App.css";
import MainMint from "./MainMint";
import NavBar from "./Navbar";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
