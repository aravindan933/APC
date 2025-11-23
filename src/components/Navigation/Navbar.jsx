import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "@fontsource/open-sans";

const BUSINESS_ITEMS = [
  "Acetates Manufacturing",
  "Petroleum & Derivatives",
  "Solvents & Chemicals",
  "Lubricants Manufacturing",
  "Polymers & Plastics",
  "Bitumen, Emulsion & Cutbacks",
  "Waxes, Jellies and White Oils",
];

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Business", dropdown: BUSINESS_ITEMS },
  { name: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <nav
      className="fixed w-full top-0 z-50 bg-white shadow-md"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/img/AP_Logo.webp"
            alt="Asia Petrochemicals Logo"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/100x40?text=Logo";
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center text-gray-800">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <li key={item.name} className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 hover:bg-blue-500 hover:text-white rounded transition">
                  {item.name} ▼
                </button>

                {/* Dropdown */}
                <ul className="absolute top-full left-0 bg-white shadow-md mt-1 min-w-[220px] rounded-md overflow-hidden opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem}>
                      <Link
                        to={`/${subItem.toLowerCase().replace(/ & | /g, "-")}`}
                        className="block py-2 px-4 text-gray-800 hover:bg-blue-500 hover:text-white transition"
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
                  className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded transition"
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden bg-white shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown(item.name)}
                    className="w-full text-left py-3 px-4 bg-gray-100 hover:bg-blue-500 hover:text-white transition"
                  >
                    {item.name} ▼
                  </button>

                  <AnimatePresence>
                    {mobileDropdowns[item.name] && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white"
                      >
                        {item.dropdown.map((subItem) => (
                          <li key={subItem}>
                            <Link
                              to={`/${subItem.toLowerCase().replace(/ & | /g, "-")}`}
                              className="block py-2 px-6 text-gray-800 hover:bg-blue-500 hover:text-white transition"
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
                <li key={item.name} className="border-b border-gray-200">
                  <Link
                    to={item.path}
                    className="block py-3 px-4 text-gray-800 hover:bg-blue-500 hover:text-white transition"
                    onClick={() => setMenuOpen(false)}
                  >
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
