import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  PhoneIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const BUSINESS_ITEMS = [
  "Acetates Manufacturing",
  "Petroleum & Derivatives",
  "Solvents & Chemicals",
  "Lubricants Manufacturing",
  "Polymers & Plastics",
  "Bitumen, Emulsion & Cutbacks",
  "Waxes, Jellies and White Oils",
];

const NAV_ICONS = {
  Home: <HomeIcon className="w-5 h-5 mr-2 inline-block" />,
  "About Us": <UsersIcon className="w-5 h-5 mr-2 inline-block" />,
  "Our Business": <BuildingStorefrontIcon className="w-5 h-5 mr-2 inline-block" />,
  Networks: <UsersIcon className="w-5 h-5 mr-2 inline-block" />,
  Enquiries: <EnvelopeIcon className="w-5 h-5 mr-2 inline-block" />,
  Careers: <BriefcaseIcon className="w-5 h-5 mr-2 inline-block" />,
  Contacts: <PhoneIcon className="w-5 h-5 mr-2 inline-block" />,
};

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Business", dropdown: BUSINESS_ITEMS },
  { name: "Networks", path: "/networks" },
  { name: "Enquiries", path: "/enquiries" },
  { name: "Careers", path: "/careers" },
  { name: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-100");
    }
  }, [darkMode]);

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/src/img/AP_Logo.webp"
            alt="Asia Petrochemicals Logo"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/100x40?text=Logo";
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center text-gray-800 dark:text-gray-100">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <li key={item.name} className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 hover:bg-blue-500 hover:text-white rounded transition">
                  {item.name} <ChevronDownIcon className="w-4 h-4" />
                </button>
                <ul className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-md mt-1 min-w-[220px] rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem}>
                      <Link
                        to={`/${subItem.toLowerCase().replace(/ & | /g, "-")}`}
                        className="block py-2 px-4 text-gray-800 dark:text-gray-100 hover:bg-blue-500 hover:text-white transition"
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center px-4 py-2 hover:bg-blue-500 hover:text-white rounded transition"
                >
                  {item.name}
                </Link>
              </li>
            )
          )}

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-gray-200 text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden bg-white dark:bg-gray-900 shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => toggleMobileDropdown(item.name)}
                    className="w-full text-left flex items-center py-3 px-4 bg-gray-800 text-white hover:bg-blue-500 rounded transition"
                  >
                    {NAV_ICONS[item.name]}
                    {item.name} <ChevronDownIcon className="w-4 h-4 inline-block ml-1" />
                  </button>
                  <AnimatePresence>
                    {mobileDropdowns[item.name] && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white dark:bg-gray-800"
                      >
                        {item.dropdown.map((subItem) => (
                          <li key={subItem}>
                            <Link
                              to={`/${subItem.toLowerCase().replace(/ & | /g, "-")}`}
                              className="block py-2 px-6 text-gray-800 dark:text-gray-100 hover:bg-blue-500 hover:text-white transition"
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.name} className="border-b border-gray-200 dark:border-gray-700">
                  <Link
                    to={item.path}
                    className="flex items-center py-3 px-4 text-gray-800 dark:text-gray-100 hover:bg-blue-500 hover:text-white rounded transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {NAV_ICONS[item.name]}
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
