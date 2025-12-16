// src/pages/PetroleumDerivatives.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const PetroleumDerivatives = () => {
  const benefits = [
    "Global Quality Compliance",
    "Reliable Large-Scale Supply",
    "Strong Logistics & Distribution Network",
    "Industrial & Marine Grade Products",
    "Trusted by Global Brands",
    "Expert Technical Support",
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">
      {/* HERO */}
      <section className="relative w-full h-96">
        <img
          src="/img/petroleum-banner.jpg"
          alt="Petroleum Products Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Petroleum Products
            </h1>
            <div className="text-lg md:text-xl drop-shadow-sm">
              <Typewriter
                options={{
                  strings: [
                    "High-Quality Petroleum Products",
                    "Reliable Supply & Distribution",
                    "Industrial & Commercial Solutions",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          <div className="flex-1 flex justify-center">
            <img
              src="/img/petroleum-production.webp"
              alt="Petroleum Production"
              className="w-[400px] rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-normal"
            >
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Petroleum Products
              </span>
            </motion.h2>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochem LLC and the founding Group have over 30 years of experience in the Middle East trading essential petroleum commodities across the region. Prior to manufacturing, the Group specialized in trading Middle East origin barrels in South East Asia and ASEAN markets.
            </p>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              We specialize in shipping, chartering, storage terminal operations, and handling of fuels and distillates. Our products are delivered with full quality assurance and international compliance.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-3">
              <a
                href="/pdf/petroleum-brochure.pdf"
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Download Brochure PDF
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Products
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Explore the petroleum products we supply with full specifications and downloadable files.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Base Oils */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="w-full h-48 flex items-center justify-center mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700">
              <img src="/img/base-oil.webp" alt="Base Oils" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1e3a8a] text-center">Base Oils</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <a href="/pdf/SN-150.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">SN 150.pdf</a>
              <a href="/pdf/SN-200.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">SN 500.pdf</a>
              <a href="/pdf/BS-150.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">BS 150.pdf</a>
              <a href="/pdf/GSN-150.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">GSN 150.pdf</a>
              <a href="/pdf/SN-200.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">SN 200.pdf</a>
              <a href="/pdf/GSN-500.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">GSN 500.pdf</a>
              <a href="/pdf/SN-600.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">SN 600.pdf</a>
              <a href="/pdf/Cst-4.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Cst 4.pdf</a>
              <a href="/pdf/Cst-6.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Cst 6.pdf</a>
              <a href="/pdf/Cst-8.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Cst 8.pdf</a>
              <a href="/pdf/Recycle-Base-Oil-SN-150.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Recycle Base Oil SN-150.pdf</a>
              <a href="/pdf/Recycle-Base-Oil-SN-300.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Recycle Base Oil SN-300.pdf</a>
            </div>
          </div>

          {/* Fuel Oils */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="w-full h-48 flex items-center justify-center mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700">
              <img src="/img/fuel-oil.jpg" alt="Fuel Oils" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1e3a8a] text-center">Fuel Oils</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <a href="/pdf/CST-180.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Cst 180.pdf</a>
              <a href="/pdf/CST-280.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Cst 280.pdf</a>
              <a href="/pdf/CST-380.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Cst 380.pdf</a>
            </div>
          </div>

          {/* Sulphur */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="w-full h-48 flex items-center justify-center mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700">
              <img src="/img/sulphur.jpg" alt="Sulphur" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1e3a8a] text-center">Sulphur</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <a href="/pdf/Granular.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Granulars Lumps.pdf</a>
            </div>
          </div>

          {/* Rubber Processing Oils */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="w-full h-48 flex items-center justify-center mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700">
              <img src="/img/rubber-oil.jpg" alt="Rubber Processing Oils" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1e3a8a] text-center">Rubber Processing Oils</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <a href="/pdf/Aromatic-Rubber-Processing-Oil.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Aromatic Rubber Processing Oil.pdf</a>
            </div>
          </div>

          {/* Waxes */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="w-full h-48 flex items-center justify-center mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700">
              <img src="/img/waxes.jpg" alt="Waxes" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1e3a8a] text-center">Waxes</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <a href="/pdf/Slack-Waxes.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Slack Wax.pdf</a>
              <a href="/pdf/Residue-Wax.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Residual Wax.pdf</a>
            </div>
          </div>

          {/* Urea & Fertilizers */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="w-full h-48 flex items-center justify-center mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700">
              <img src="/img/Urea & Fertilizers.webp" alt="Urea & Fertilizers" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1e3a8a] text-center">Urea & Fertilizers</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <a href="/pdf/Urea-46.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">Urea.pdf</a>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Asia Petrochem
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            We combine global experience, technical expertise, and quality assurance to provide superior petroleum products across international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg transition-transform hover:scale-105"
            >
              <p className="text-[#1e3a8a] font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PetroleumDerivatives;
