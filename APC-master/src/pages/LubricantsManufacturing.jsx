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

  const productRange = [
    "Diesel & Petrol Engine Oils (Monograde, Multigrade, Semi-Synthetic & Fully Synthetic)",
    "Transmission & Clutch Fluids",
    "Gear Oils in API GL4/GL5 Grades (Monograde & Multigrade)",
    "Hydraulic & Industrial Oils",
    "Antifreeze & Coolants",
    "Automotive Greases",
    "Brake Fluids in API DOT 3 & DOT 4",
  ];

  const additives = [
    "TBN Boosters 400",
    "Pour Point Depressants",
    "ZDDP (Primary & Secondary)",
    "Engine Oil Packages",
    "Transmission Oil Packages",
    "VI Improvers in EPM/EPDM/OCP Grades",
    "Dyes & Fragrances",
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* ── 1. HERO — slide up with fade ── */}
      <section className="relative w-full h-96 overflow-hidden">
        <img
          src="/img/lubricants-banner.webp"
          alt="Lubricants Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              Lubricants Manufacturing
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT — image skew-in from right + text fade from bottom ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ x: -80, opacity: 0, skewX: 6 }}
            whileInView={{ x: 0, opacity: 1, skewX: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/img/lubricants.webp"
              alt="Synol Lubricants"
              className="w-[400px] h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal">
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Synol Lubricants</span>
            </h2>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              SYNOL LUBES is the flagship brand of Asia Petrochem, providing a wide range of Automotive and Industrial Lubes, Greases, Brake Fluids, and Coolants. Our products are blended, packed, and distributed through a network of diligent partners across key countries.
            </p>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Our products meet all API Level Grades with key certificates and approvals from various inspection bodies. Apart from lubricant blending, we also distribute various components, VI polymers, additives, dyes, and fragrances used in blending applications.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6">
              <a
                href="/pdf/lubricants-brochure.pdf"
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 inline-block"
              >
                Download Lubricants Brochure
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRODUCT RANGE — two panels sliding in from opposite sides ── */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <motion.h2
          className="text-3xl md:text-4xl font-normal text-center mb-12"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 140 }}
          viewport={{ once: true }}
        >
          <span className="text-[#1e3a8a]">Our</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Product Range &amp; Additives</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <motion.div
            className="flex-1 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">Product Range</h3>
            <ul className="space-y-2">
              {productRange.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-[#1e3a8a]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">Additives &amp; Components</h3>
            <ul className="space-y-2">
              {additives.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-[#1e3a8a]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — rotate spring cards ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Synol Lubricants</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, scale: 0.6, rotate: i % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 130, damping: 12, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#1e3a8a] font-semibold">{b}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LubricantsManufacturing;
