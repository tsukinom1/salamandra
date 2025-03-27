"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface IDropdownProps {
  title: string;
  links: { label: string; href: string }[];
  btnClass: string
}

export default function Dropdown({ title, links, btnClass = "" }: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Кнопка для открытия меню */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 text-lg font-medium ${btnClass}`}
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 text-red-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-lg">
          <ul className="py-2 text-gray-700">
            {links.map((link, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href={link.href} className="block w-full">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
