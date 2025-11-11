import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFax,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const socialLinks = [
    { Icon: FaFacebook, label: "Facebook", color: "#1877F2", url: "#" },
    { Icon: FaTwitter, label: "Twitter", color: "#1DA1F2", url: "#" },
    { Icon: FaInstagram, label: "Instagram", color: "#E4405F", url: "#" },
    { Icon: FaLinkedin, label: "LinkedIn", color: "#0077B5", url: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/src/img/AP Logo.jpeg"
                alt="Asia Petrochemicals Logo"
                className="h-27 w-27 object-contain"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/80x80?text=Logo";
                }}
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Asia Petrochemicals LLC specializes in the manufacturing and
              distribution of petroleum and chemical-based products worldwide.
              Our commitment is to provide sustainable, high-quality industrial
              solutions.
            </p>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 border-b border-gray-700 pb-2">
              Our Products
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors">Acetates Manufacturing</li>
              <li className="hover:text-white transition-colors">Petroleum & Derivatives</li>
              <li className="hover:text-white transition-colors">Solvents & Chemicals</li>
              <li className="hover:text-white transition-colors">Lubricants Manufacturing</li>
              <li className="hover:text-white transition-colors">Polymers & Plastics</li>
              <li className="hover:text-white transition-colors">Bitumen, Emulsion & Cutbacks</li>
              <li className="hover:text-white transition-colors">Waxes, Jellies & White Oils</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                PO Box 76283, Ras Al Khaimah, U.A.E.
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FaPhone className="text-blue-500" /> T +971 4 2384533
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FaFax className="text-blue-500" /> F +971 4 2384534
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FaEnvelope className="text-blue-500" />
                info@asia-petrochem.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 border-b border-gray-700 pb-2">
              Newsletter
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
              {isSubscribed && (
                <p className="text-green-400 text-sm animate-fade-in">
                  ✅ Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6 gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2025. Asia Petrochemicals LLC, All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, label, color, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:scale-110 transform transition-all duration-300"
                style={{ transition: "color 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
