import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

function HeaderTop() {
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto items-center">
        <ul className="flex gap-5 items-stretch hidden space-x-3 lg:flex">
          <Link to="/magazalar">Mağazalarımız</Link>
          <Link to="/korporativ">Korporativ satış</Link>
        </ul>
        <div className="flex flex-row items-center md:space-x-4">
          <div className="relative flex flex-row gap-5">
            <Link to="/kampaniyalar">
              <button
                type="button"
                class="w-28 h-9 text-base font-semibold rounded text-purple-900 hover:text-white border border-purple-900 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Kampaniyalar
              </button>{""}
            </Link>
            <span className="flex items-center gap-2 text-sm text-gray-700">
              <FaPhoneAlt size={20} />
              +994 51 205 88 88
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-700">
              <select className="lang-select">
                <option value="az">AZ</option>
                <option value="en">EN</option>
              </select>
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-700">
              <Link
                to="/hesab"
                className="account flex flex-row items-center gap-2"
              >
                <MdPerson size={26} />
                <div className="flex flex-col">
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
