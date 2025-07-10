import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { FaBasketShopping } from "react-icons/fa6";
import { PiScalesFill } from "react-icons/pi";
import { GiHearts } from "react-icons/gi";
import { BasketContext } from "../../contexts/BasketContext";

function HeaderBottom() {
  const { basket } = useContext(BasketContext);

  return (
    <div className="bottom-bar relative">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo cursor-pointer" />
        </Link>
      </div>

      <button
        type="button"
        className="w-35 h-11 text-base font-semibold rounded bg-purple-900 text-white"
      >
        Kataloq
      </button>

      <input type="text" className="search" placeholder="Axtar..." />

      <div className="flex flex-row items-center md:space-x-4 gap-5 relative">
        <Link to="/muqayise" className="account flex flex-row items-center">
          <PiScalesFill size={24} />
        </Link>

        <Link to="/wishlist" className="account flex flex-row items-center">
          <GiHearts size={24} />
        </Link>

        {/* Basket Link */}
        <Link
          to="/basket"
          className="account flex flex-row items-center gap-2 relative"
        >
          <FaBasketShopping size={24} />
          <div>
            <p className="text-[#C1C1C1]">Məbləğ</p>
            <p className="text-[#0a0a47]">
              {basket
                .reduce((sum, item) => sum + item.price * item.count, 0)
                .toFixed(2)}
              ₼
            </p>
          </div>

          {basket.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              {basket.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default HeaderBottom;
