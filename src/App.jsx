// src/App.jsx
import React from "react";
import HeroSection from "./components/Herosection";
import WalletAddressChart from "./components/WalletAddressChart";
import "../src/App.css"; // Import App-wide CSS

const App = () => {
  return (
    <div className="app-container">
      <HeroSection /> {/* Hero section */}
      <h2 className="graph-heading">Real-Time Monitoring Graph</h2>
      <WalletAddressChart /> {/* Wallet Address Chart */}
    </div>
  );
};

export default App;
