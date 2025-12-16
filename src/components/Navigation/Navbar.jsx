import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "@fontsource/open-sans";

const BUSINESS_ITEMS = [
  "Acetates Manufacturing",
  "Petroleum & Derivatives",
  "Solvents & Chemicals",
  "Lubricants Manufacturing",
  "Polymers & Plastics",
  "Bitumen, Emulsion & Cutbacks",
  "Waxes, Jellies and White Oils",
  "Plasticizers",
  "Chemical Storage Terminal"
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
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-none shadow-none"
      }`}
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.img
            src="/img/AP_Logo.webp"
            alt="Asia Petrochemicals Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/100x40?text=Logo";
            }}
            whileHover={{ scale: 1.1 }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-2 items-center transition-colors duration-300 ${
          scrolled ? "text-gray-800" : "text-white"
        }`}>
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <li 
                key={item.name} 
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 relative group">
                  <span className={`relative z-10 transition-colors ${
                    hoveredItem === item.name 
                      ? 'text-white' 
                      : scrolled 
                        ? 'text-gray-800' 
                        : 'text-white'
                  }`}>
                    {item.name}
                  </span>
                  <motion.span
                    animate={{ rotate: hoveredItem === item.name ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`relative z-10 transition-colors ${
                      hoveredItem === item.name 
                        ? 'text-white' 
                        : scrolled 
                          ? 'text-gray-800' 
                          : 'text-white'
                    }`}
                  >
                    ▼
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: hoveredItem === item.name ? 1 : 0,
                      opacity: hoveredItem === item.name ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white/95 backdrop-blur-md shadow-xl mt-2 min-w-[240px] rounded-xl overflow-hidden border border-gray-100 z-50"
                    >
                      {item.dropdown.map((subItem, idx) => (
                        <motion.li
                          key={subItem}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            to={`/${subItem.toLowerCase().replace(/ & | /g, "-")}`}
                            className="block py-3 px-5 text-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white transition-all duration-200"
                          >
                            {subItem}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg transition-all duration-300 group block"
                >
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute inset-0 bg-blue-100 rounded-lg"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className={`relative z-10 transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? scrolled 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-blue-300 font-semibold'
                      : scrolled
                        ? 'text-gray-800 group-hover:text-white'
                        : 'text-white group-hover:text-blue-300'
                  }`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl focus:outline-none p-2 transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? "✕" : "☰"}
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200"
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
    </motion.nav>
  );
};

export default Navbar;
