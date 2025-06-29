import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const menuItems = [
  {
    title: "Options",
    submenu: [
      { title: "Edit", href: "#" },
      { title: "Duplicate", href: "#" },
    ],
  },
  {
    title: "More",
    submenu: [
      { title: "Archive", href: "#" },
      { title: "Move", href: "#" },
    ],
  },
  {
    title: "Share",
    submenu: [
      { title: "Share", href: "#" },
      { title: "Add to favorites", href: "#" },
    ],
  },
  {
    title: "Delete",
    submenu: [{ title: "Delete", href: "#" }],
  },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return ( 
      <div className="flex h-[500px]">
        {/* Sidebar */}
        <div className="w-[350px] bg-white border rounded-2xl border-gray-300 flex flex-col">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative cursor-pointer px-4 py-3 h-10 hover:bg-gray-200 flex items-center justify-between"
            >
              <span className="text-gray-900 font-semibold">{item.title}</span>
              <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Dropdown submenu */}
        <div className="relative">
          {activeIndex !== null && (
            <div
              onMouseEnter={() => setActiveIndex(activeIndex)}
              onMouseLeave={() => setActiveIndex(null)}
              className="absolute top-0 left-0 ml-48 w-48 bg-white border border-gray-300 shadow-lg rounded-md"
            >
              {menuItems[activeIndex].submenu.map((subitem, i) => (
                <a
                  key={i}
                  href={subitem.href}
                  className="block px-4 py-2 h-10 text-gray-700 hover:bg-gray-100"
                >
                  {subitem.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
  );
}
