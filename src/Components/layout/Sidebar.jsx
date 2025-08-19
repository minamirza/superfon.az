import { useState } from "react";
import {
  FaMobileAlt,
  FaClock,
  FaCar,
  FaTv,
  FaPlug,
  FaSmoking,
} from "react-icons/fa";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { FaDesktop } from "react-icons/fa6";

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

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex h-full">
      {/* Left sidebar */}
      <div className="w-[350px] h-full bg-white border rounded-xl border-gray-300 shadow-md flex flex-col">
        <div className="divide-y divide-gray-200" style={{ height: "450px" }}>
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
              {item.submenu && <ChevronRightIcon className="w-4 h-4" />}
            </div>
          ))}
          <button
            className="w-full text-sm text-blue-600 py-3 hover:underline"
            style={{ padding: "20px" }}
          >
            Daha çox göster
          </button>
        </div>
      </div>

      {/* Right side (submenu) */}
      <div className="relative">
        {activeIndex !== null && menuItems[activeIndex].submenu && (
          <div
            onMouseEnter={() => setActiveIndex(activeIndex)}
            onMouseLeave={() => setActiveIndex(null)}
            className="absolute top-0 left-0 ml-[300px] w-52 h-24 bg-white border border-gray-300 shadow-lg rounded-md p-2 space-y-1 z-10"
            style={{ paddingBlock: "10px", paddingInline: "10px" }}
          >
            {menuItems[activeIndex].submenu.map((sub, i) => (
              <div
                key={i}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
              >
                {sub}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
