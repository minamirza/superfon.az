import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

function HeaderTop() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header
      className="p-4 border-b border-gray-200"
      style={{ paddingRight: "20px", paddingLeft: "20px" }}
    >
      <div className="container flex justify-between h-16 mx-auto items-center">
        {/* Sol tərəf - Mağazalarımız / Korporativ satış (yalnız lg və yuxarıda görünür) */}
        <ul className="flex gap-5 items-stretch hidden lg:flex">
          <Link to="/magazalar" className="hover:underline">
            Mağazalarımız
          </Link>
          <Link to="/korporativ" className="hover:underline">
            Korporativ satış
          </Link>
        </ul>

        {/* Sağ tərəf */}
        <div className="flex flex-row items-center md:space-x-4">
          <div className="relative flex flex-row gap-5 items-center">
            {/* Kampaniyalar (yalnız md və yuxarıda görünür) */}
            <Link to="/kampaniyalar" className="hidden md:block">
              <button
                type="button"
                className="w-28 h-9 text-base font-semibold rounded text-purple-900 hover:text-white border border-purple-900 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center"
              >
                Kampaniyalar
              </button>
            </Link>

            {/* Telefon nömrəsi */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-sm text-gray-700 hover:underline bg-none border-none cursor-pointer"
            >
              <FaPhoneAlt size={20} />
              +994 51 205 88 88
            </button>

            {/* Dil seçimi */}
            <span className="flex items-center gap-2 text-sm text-gray-700">
              <select className="lang-select hover:cursor-pointer">
                <option value="az">AZ</option>
                <option value="en">EN</option>
              </select>
            </span>

            {/* Hesab */}
            <span className="flex items-center gap-2 text-sm text-gray-700">
              <Link
                to="/login"
                className="account flex flex-row items-center gap-2"
              >
                <MdPerson size={26} />
                <div className="flex flex-col cursor-pointer">
                  <p className="text-[#C1C1C1]">Daxil ol</p>
                  <p className="text-[#0a0a47]">Hesab</p>
                </div>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderTop;
