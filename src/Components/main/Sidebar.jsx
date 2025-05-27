// Sidebar.jsx
import { Link } from "react-router-dom";
import { FaMobileAlt, FaHeadphones, FaClock, FaCar, FaMusic, FaLaptop, FaBlender, FaBatteryFull } from "react-icons/fa";

const categories = [
  { name: "Telefon və planşetlər", icon: <FaMobileAlt />, path: "/telefon-planşet" },
  { name: "Mobil Aksesuarlar", icon: <FaHeadphones />, path: "/mobil-aksesuarlar" },
  { name: "Saatlar", icon: <FaClock />, path: "/saatlar" },
  { name: "Avtomobil aksesuarları", icon: <FaCar />, path: "/avtomobil-aksesuarlar" },
  { name: "Audio və TV aksesuarlar", icon: <FaMusic />, path: "/audio-tv" },
  { name: "Kompüter Aksesuarları", icon: <FaLaptop />, path: "/komputer-aksesuarlar" },
  { name: "Kiçik məişət texnikası", icon: <FaBlender />, path: "/meiset-texnikasi" },
  { name: "Elektron vape", icon: <FaBatteryFull />, path: "/elektron-vape", badge: "YENİ" },
];

export default function Sidebar() {
  return (
    <div className="w-full max-w-sm max-h-100 bg-white rounded-lg shadow-md p-3 space-y-1">
      {categories.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className="flex items-center justify-between p-3 hover:bg-gray-100 rounded transition"
        >
          <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </div>
          {item.badge ? (
            <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded font-semibold">
              {item.badge}
            </span>
          ) : (
            <span className="text-gray-400">{">"}</span>
          )}
        </Link>
      ))}
      <button className="w-full text-sm text-blue-600 hover:underline mt-2">
        Daha çox göstər
      </button>
    </div>
  );
}
