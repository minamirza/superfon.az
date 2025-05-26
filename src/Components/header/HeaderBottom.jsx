import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";

function HeaderBottom() {
  return (
    <div className="bottom-bar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button className="catalog-btn">☰ Kataloq</button>
      <input type="text" className="search" placeholder="Axtar..." />
      <div className="icons">
        <span>⚖️</span>
        <span>🤍</span>
        <span>🛒 0.00 ₼</span>
      </div>
    </div>
  );
}

export default HeaderBottom;
