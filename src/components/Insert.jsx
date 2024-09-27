import React from "react";
import './insert.css'; // Import the corresponding CSS

function Insert() {
  return (
    <div className="wallet-container">
      <div className="wallet-box">
        <form className="wallet-form">
          <h2>Wallet Address</h2>
          <input type="text" placeholder="Type your Wallet Address" />

          <h2>Wallet Id</h2>
          <div className="password-field">
            <input type="password" placeholder="Type your wallet Id" />
            <span className="eye-icon">&#128065;</span> {/* Eye icon for password */}
          </div>

          <button type="submit" className="search-btn">SEARCH</button>
        </form>
      </div>
    </div>
  );
}

export default Insert;