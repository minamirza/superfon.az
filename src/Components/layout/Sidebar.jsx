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
    name: "Telefon və planşetlər",
    icon: <FaMobileAlt />,
    submenu: ["Smartfonlar", "Düyməli telefonlar", "Planşetlər"],
  },
  {
    name: "Mobil Aksesuarlar",
    icon: <FaPlug />,
        submenu: ["Smartfonlar", "Düyməli telefonlar", "Planşetlər"],

  },
  {
    name: "Saatlar",
    icon: <FaClock />,
  },
  {
    name: "Avtomobil aksesuarları",
    icon: <FaCar />,
  },
  {
    name: "Audio və TV aksesuarlar",
    icon: <FaTv />,
  },
  {
    name: "Kompüter Aksesuarları",
    icon: <FaDesktop />,
  },
  {
    name: "Kiçik məişət texnikası",
    icon: <FaPlug />,
  },
  {
    name: "Elektron vape",
    icon: <FaSmoking />,
  },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex h-[450px]">
      {/* Sol sidebar */}
      <div className="w-[300px] bg-white border rounded-xl border-gray-300 shadow-md flex flex-col justify-around p-5">
        {menuItems.map((item, index) => (
          <div
            key={item.name}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`relative px-4 py-3 h-30 cursor-pointer flex items-center gap-3 ${
              activeIndex === index ? "bg-slate-900 text-white" : "hover:bg-gray-100"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
            {item.submenu && <ChevronRightIcon className="w-4 h-4 ml-auto" />}
          </div>
        ))}

        <button className="w-full text-sm text-blue-600 mt-4 py-2 hover:underline">
          Daha çox göstər
        </button>
      </div>

      {/* Sağ tərəf (submenu) */}
      <div className="relative">
        {activeIndex !== null && menuItems[activeIndex].submenu && (
          <div
            onMouseEnter={() => setActiveIndex(activeIndex)}
            onMouseLeave={() => setActiveIndex(null)}
            className="absolute top-0 left-0 ml-[300px] w-52 h-26 flex flex-col justify-around bg-white border border-gray-300 shadow-lg rounded-md p-2 space-y-1"
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
