// src/pages/LubricantsManufacturing.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const LubricantsManufacturing = () => {
  const benefits = [
    "API Certified Lubricants",
    "High Performance Additive Packages",
    "Engineered for Extreme Conditions",
    "Reliable Global Distribution",
    "Long Engine & Equipment Life",
    "Advanced Blending Technology",
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full h-96">
        <img
          src="/public/img/lubricants-banner.webp"
          alt="Lubricants Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Lubricants Manufacturing
            </h1>
            <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
              <Typewriter
                options={{
                  strings: [
                    "Automotive & Industrial Lubes",
                    "Greases, Coolants & Brake Fluids",
                    "Components, Additives, Dyes & Fragrances",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
          
          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src="/public/img/lubricants.webp"
              alt="Synol Lubricants"
              className="w-[400px] h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* ABOUT CONTENT */}
          <div className="flex-1 flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-normal"
            >
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Synol Lubricants
              </span>
            </motion.h2>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              SYNOL LUBES is the flagship brand of Asia Petrochem, providing a wide range of Automotive and Industrial Lubes, Greases, Brake Fluids, and Coolants. Our products are blended, packed, and distributed through a network of diligent partners across key countries.
            </p>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Our products meet all API Level Grades with key certificates and approvals from various inspection bodies. Apart from lubricant blending, we also distribute various components, VI polymers, additives, dyes, and fragrances used in blending applications.
            </p>

            {/* BROCHURE BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6">
              <a
                href="/src/pdf/lubricants-brochure.pdf"
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Download Lubricants Brochure
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE & ADDITIVES SECTION */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-center mb-12">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Product Range & Additives
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* PRODUCT RANGE BOX */}
            <div className="flex-1 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">Product Range</h3>
              <ul className="list-disc list-inside text-[#1e3a8a] text-base md:text-lg leading-relaxed space-y-2">
                <li>Diesel & Petrol Engine Oils (Monograde, Multigrade, Semi-Synthetic & Fully Synthetic)</li>
                <li>Transmission & Clutch Fluids</li>
                <li>Gear Oils in API GL4/GL5 Grades (Monograde & Multigrade)</li>
                <li>Hydraulic & Industrial Oils</li>
                <li>Antifreeze & Coolants</li>
                <li>Automotive Greases</li>
                <li>Brake Fluids in API DOT 3 & DOT 4</li>
              </ul>
            </div>

            {/* ADDITIVES & COMPONENTS BOX */}
            <div className="flex-1 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">Additives & Components</h3>
              <ul className="list-disc list-inside text-[#1e3a8a] text-base md:text-lg leading-relaxed space-y-2">
                <li>TBN Boosters 400</li>
                <li>Pour Point Depressants</li>
                <li>ZDDP (Primary & Secondary)</li>
                <li>Engine Oil Packages</li>
                <li>Transmission Oil Packages</li>
                <li>VI Improvers in EPM/EPDM/OCP Grades</li>
                <li>Dyes & Fragrances</li>
              </ul>
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
              Synol Lubricants
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md transition-transform hover:scale-105">
              <p className="text-[#1e3a8a] font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LubricantsManufacturing;
