"use client";
import logo from "@/public/images/syslogo.aab64315.png";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function NavigationBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 700);
  };

  const handleSubMenuEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenSubDropdown(title);
  };

  const handleSubMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenSubDropdown(null), 300);
  };

  const handleMobileDropdown = (title: string) => {
    setDropdownOpen((prev) => (prev === title ? null : title));
  };

  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "Services",
      dropdown: true,
      content: [
        {
          title: "Home & SME",
          subContent: ["Aba", "Calabar", "Enugu", "Ibadan", "Lagos", "Onitsha"],
        },
        {
          title: "Enterprise Connectivity",
          subContent: ["Data Center", "Cloud Services"],
        },
        {
          title: "Application Development",
          subContent: ["Web Apps", "Mobile Apps", "Software Solutions"],
        },
        {
          title: "Managed IT Services",
          subContent: ["Cybersecurity", "IT Support"],
        },
        {
          title: "IT Integration Solutions",
          subContent: ["Networking", "Hardware Solutions"],
        },
      ],
    },
    { title: "Coverage", href: "/coverage" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex justify-between px-6 md:px-[150px] bg-[#ffcce4] p-4 items-center">
      {/* Logo */}
      <div>
        <Image src={logo} width={180} height={180} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-x-8">
        {navItems.map((item) =>
          item.dropdown ? (
            <div
              key={item.title}
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="font-medium flex items-center hover:text-gray-900 cursor-pointer">
                {item.title}
                <ChevronDown size={18} />
              </div>

              {/* Main Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 bg-black text-white shadow-md w-[280px] transition-all duration-200 ease-in-out rounded-lg ${
                  openDropdown === item.title
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {item.content.map((subItem) => (
                  <div
                    key={subItem.title}
                    className="relative"
                    onMouseEnter={() => handleSubMenuEnter(subItem.title)}
                    onMouseLeave={handleSubMenuLeave}
                  >
                    <div className="px-4 py-3 border-b border-gray-700 cursor-pointer hover:bg-gray-800 transition">
                      {subItem.title}
                    </div>

                    {/* Submenu */}
                    <div
                      className={`absolute left-full top-0 ml-2 bg-black shadow-lg p-2 w-48 transition-all duration-200 ease-in-out transform rounded-lg ${
                        openSubDropdown === subItem.title
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      {subItem.subContent.map((subSubItem) => (
                        <div
                          key={subSubItem}
                          className="py-2 px-4 cursor-pointer hover:bg-gray-800 rounded-md transition"
                        >
                          <Link
                            href={`/services/${encodeURIComponent(
                              subSubItem.toLowerCase().replace(/\s+/g, "-")
                            )}`}
                          >
                            {subSubItem}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.title}
              href={item.href}
              className="font-medium hover:text-gray-900 transition-all duration-300"
            >
              {item.title}
            </Link>
          )
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="z-50 fixed right-0 top-0 h-full bg-black bg-opacity-90 text-white flex flex-col w-3/4 sm:w-1/2 md:w-1/3 py-6 px-4"
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 text-gray-800 hover:text-white"
        >
          <X size={28} className="text-white font-bold" />
        </button>

        {navItems.map((item, index) => (
          <div key={index} className="w-full mt-[10px]">
            {item.dropdown ? (
              <button
                onClick={() => handleMobileDropdown(item.title)}
                className="text-lg font-medium w-full flex justify-between items-center py-2 border-b border-gray-600"
                aria-expanded={dropdownOpen === item.title}
              >
                {item.title}
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    dropdownOpen === item.title ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                href={item.href || "#"}
                className="text-lg font-medium w-full block py-2 border-b border-gray-600"
              >
                {item.title}
              </Link>
            )}

            {item.dropdown && dropdownOpen === item.title && (
              <ul className="pl-4 flex flex-col space-y-2">
                {item.content.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={`/services/${encodeURIComponent(
                        subItem.title.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="text-gray-300 hover:text-white transition-transform transform hover:translate-x-2"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
