import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function HeaderTop() {
  return (
    <div className="top-bar">
      <div className="left-links">
        <Link to="/magazalar">Mağazalarımız</Link>
        <Link to="/korporativ">Korporativ satış</Link>
      </div>
      <div className="right-info">
        <Link to="/kampaniyalar">
          <button className="campaign-btn">Kampaniyalar</button>
        </Link>
        <span className="phone">📞 +994 51 205 88 88</span>
        <select className="lang-select">
          <option value="az">AZ</option>
          <option value="en">EN</option>
        </select>
        <Link to="/hesab" className="account">
          👤 Hesab
        </Link>
      </div>
    </div>
  );
}

export default HeaderTop;
