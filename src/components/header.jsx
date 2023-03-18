/* eslint-disable react/prop-types */
import React from "react";
import "../styles/header.css";

function Header({ gameScore }) {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <p className="h1" style={{ color: "#a67100" }}>
          Pokemon memory game
        </p>
        <p className="h3" style={{ color: "#94732b", fontWeight: "bold" }}>
          Get points by clicking images that you have not clicked before
        </p>
      </div>
      <div>
        <p className="h3" style={{ color: "#94732b", fontWeight: "bold" }}>
          Score: {gameScore}
        </p>
      </div>
    </div>
  );
}

export default Header;
