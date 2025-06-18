import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { PiScalesFill } from "react-icons/pi";
import { GiHearts } from "react-icons/gi";

function HeaderBottom() {
  return (
    <div className="bottom-bar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button
        type="button"
        className="w-35 h-11 text-base font-semibold rounded bg-purple-900 text-white"
      >
        Kataloq
      </button>
      <input type="text" className="search" placeholder="Axtar..." />
      <div className="flex flex-row items-center md:space-x-4 gap-5">
        <Link to="/muqayise" className="account flex flex-row items-center">
          <PiScalesFill size={24} />
        </Link>
        <Link to="/wishlist" className="account flex flex-row items-center">
          <GiHearts size={24} />
        </Link>
        <Link to="/basket" className="account flex flex-row items-center gap-2">
          <FaBasketShopping size={24} />
          <div>
            <p className="text-[#C1C1C1]">Mebleg</p>
            <p className="text-[#0a0a47]">0.00</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderBottom;
