import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { FaBasketShopping } from "react-icons/fa6";
import { PiScalesFill } from "react-icons/pi";
import { FaRegHeart, FaMobileAlt, FaPlug, FaClock, FaCar, FaTv, FaDesktop, FaSmoking } from "react-icons/fa";
import { BasketContext } from "../../contexts/BasketContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import { FiAlignLeft } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

const menuItems = [
  {
    name: "Telefon ve planşetler",
    icon: <FaMobileAlt />,
    submenu: ["Smartfonlar", "Düymeli telefonlar", "Planşetler"],
  },
  {
    name: "Mobil Aksesuarlar",
    icon: <FaPlug />,
    submenu: ["Smartfonlar", "Düymeli telefonlar", "Planşetler"],
  },
  { name: "Saatlar", icon: <FaClock /> },
  { name: "Avtomobil aksesuarları", icon: <FaCar /> },
  { name: "Audio ve TV aksesuarlar", icon: <FaTv /> },
  { name: "Komputer Aksesuarları", icon: <FaDesktop /> },
  { name: "Kiçik meişet teknikası", icon: <FaPlug /> },
  { name: "Elektron vape", icon: <FaSmoking /> },
];

function HeaderBottom() {
  const { basket } = useContext(BasketContext);
  const { wishlist } = useContext(WishlistContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bottom-bar relative">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo cursor-pointer" />
        </Link>
      </div>

      {/* Kataloq Button */}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="w-35 h-11 text-base font-semibold rounded bg-purple-900 hover:bg-purple-950 cursor-pointer text-white flex flex-row items-center justify-center gap-3"
        >
          <FiAlignLeft />
          Kataloq
        </button>

        {/* Açılan menyu */}
        {isMenuOpen && (
          <div
            className="absolute top-12 left-0 w-[350px] h-full bg-white border border-gray-300 rounded-xl shadow-md flex flex-col z-50"
            style={{ height: "450px" }}
          >
            <div className="divide-y divide-gray-200 flex flex-col flex-grow overflow-auto">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`h-[50px] relative px-4 py-3 cursor-pointer flex items-center gap-3 transition-colors ${
                    activeIndex === index
                      ? "bg-slate-900 text-white"
                      : "hover:bg-gray-100"
                  }`}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm flex-1">{item.name}</span>
                  {item.submenu && (
                    <FaChevronRight className="w-4 h-4" />
                  )}
                </div>
              ))}
              <button
                className="w-full text-sm text-blue-600 py-3 hover:underline"
                style={{ paddingTop: "20px" }}
              >
                Daha çox göster
              </button>
            </div>
          </div>
        )}
      </div>

      <input
        type="text"
        className="search border border-gray-300 rounded px-4 py-2 focus:outline-none"
        placeholder="Axtar..."
      />

      <button
        type="button"
        className="w-28 h-9 text-base font-semibold rounded text-white border-purple-900 bg-purple-900 hover:bg-purple-950 focus:ring-4 focus:outline-none text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Axtar
      </button>

      <div className="flex flex-row items-center md:space-x-4 gap-5 relative">
        {/* Müqayisə */}
        <Link to="/muqayise" className="account flex flex-row items-center relative">
          <PiScalesFill size={24} />
        </Link>

        {/* Wishlist */}
        <Link to="/wishlist" className="account flex flex-row items-center relative">
          <FaRegHeart size={24} />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[20px] h-[20px] bg-red-500 text-white text-xs font-bold rounded-full px-1 leading-none">
              {wishlist.length}
            </span>
          )}
        </Link>

        {/* Basket */}
        <Link to="/basket" className="account flex flex-row items-center gap-2 relative">
          <div className="relative">
            <FaBasketShopping size={24} />
            {basket.length > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[20px] h-[20px] bg-red-500 text-white text-xs font-bold rounded-full px-1 leading-none">
                {basket.length}
              </span>
            )}
          </div>
          <div>
            <p className="text-[#C1C1C1]">Məbləğ</p>
            <p className="text-[#0a0a47]">
              {basket
                .reduce((sum, item) => sum + item.price * item.count, 0)
                .toFixed(2)}
              ₼
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderBottom;
