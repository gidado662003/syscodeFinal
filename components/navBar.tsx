"use client";

import logo from "@/public/images/syslogo.aab64315.png";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavItem {
  title: string;
  href?: string;
  dropdown?: boolean;
  content?: {
    title: string;
    subContent: string[];
  }[];
}

export function NavigationBar() {
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState<string | null>(null);
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

  const handleMobileSubDropdown = (title: string) => {
    setSubDropdownOpen((prev) => (prev === title ? null : title));
  };

  // slug is readable URL
  const generateSlug = (str: string) => {
    console.log(str);
    if (str === "Home & SME") return "home-sme";
    const acronyms = ["SAAS"];

    if (str === "MPLS/VPN") return "vpn";

    if (acronyms.includes(str)) return str;
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const navItems: NavItem[] = [
    { title: "Home", href: "/" },
    {
      title: "Services",
      dropdown: true,
      content: [
        {
          title: "Home & SME",
          subContent: ["aba", "calabar", "enugu", "ibadan", "lagos", "onitsha"],
        },
        {
          title: "Enterprise Connectivity",
          subContent: [
            "Dedicated Internet",
            "MPLS/VPN",
            "Global IP Transit Internet",
          ],
        },
        {
          title: "Application Development",
          subContent: [
            "Website Development",
            "Web Application",
            "Enterprise Application",
          ],
        },
        {
          title: "Managed IT Services",
          subContent: [
            "SAAS",
            "Cloud Service",
            "End Point Protection",
            "Data Center",
            "Managed Firewall",
          ],
        },
        {
          title: "IT Integration Solutions",
          subContent: ["IT Infrastructure Deployment", "IT Collaboration"],
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
      <div>
        <Image src={logo} width={180} height={180} alt="logo" />
      </div>

      <div className="hidden capitalize md:flex gap-x-8">
        {navItems.map((item) => (
          <div key={item.title} className="relative">
            {item.dropdown ? (
              <div
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <button className="font-medium text-black cursor-pointer transition-all duration-300 flex items-center gap-1">
                  {item.title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === item.title && item.content && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-black shadow-lg rounded-md py-2 z-50"
                  >
                    {item.content.map((contentItem) => (
                      <div
                        key={contentItem.title}
                        className="relative px-4 py-2 cursor-pointer text-white hover:bg-gray-800 transition-colors"
                        onMouseEnter={() =>
                          handleSubMenuEnter(contentItem.title)
                        }
                        onMouseLeave={handleSubMenuLeave}
                      >
                        <div className="flex justify-between items-center">
                          <span>{contentItem.title}</span>
                          {contentItem.subContent && (
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                openSubDropdown === contentItem.title
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </div>

                        {contentItem.subContent &&
                          openSubDropdown === contentItem.title && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="absolute left-full top-0 ml-1 w-56 bg-black shadow-lg rounded-md py-2 z-50"
                            >
                              {contentItem.subContent.map((subItem) => (
                                <Link
                                  key={subItem}
                                  href={`/services/${generateSlug(
                                    contentItem.title
                                  )}/${generateSlug(subItem)}`}
                                  className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors"
                                >
                                  {subItem}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ) : (
              <Link
                href={item.href || "#"}
                className="font-medium hover:text-gray-900 transition-all duration-300"
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={() => setMobileOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="z-50 fixed right-0 top-0 h-full bg-black bg-opacity-90 text-white flex flex-col w-3/4 sm:w-1/2 md:w-1/3 py-6 px-4 overflow-y-auto"
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 text-white"
          title="close"
        >
          <X size={28} />
        </button>

        <div className="mt-10 space-y-4">
          {navItems.map((item) => (
            <div key={item.title} className="w-full">
              {item.dropdown ? (
                <div className="mb-2">
                  <button
                    onClick={() => handleMobileDropdown(item.title)}
                    className="text-lg font-medium w-full flex justify-between items-center py-2 px-2 rounded hover:bg-gray-800 transition"
                  >
                    {item.title}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        dropdownOpen === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen === item.title && item.content && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-700">
                      {item.content.map((contentItem) => (
                        <div key={contentItem.title} className="w-full">
                          <button
                            onClick={() =>
                              handleMobileSubDropdown(contentItem.title)
                            }
                            className="w-full text-left text-gray-300 hover:text-white transition flex justify-between items-center py-1 px-2 rounded hover:bg-gray-800"
                          >
                            {contentItem.title}
                            {contentItem.subContent && (
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  subDropdownOpen === contentItem.title
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            )}
                          </button>

                          {subDropdownOpen === contentItem.title &&
                            contentItem.subContent && (
                              <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-600">
                                {contentItem.subContent.map((subItem) => (
                                  <Link
                                    key={subItem}
                                    href={`/services/${generateSlug(
                                      contentItem.title
                                    )}/${generateSlug(subItem)}`}
                                    className="block py-1 px-2 text-gray-400 hover:text-white transition rounded hover:bg-gray-800"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {subItem}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="text-lg font-medium w-full block py-2 px-2 rounded hover:bg-gray-800 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
