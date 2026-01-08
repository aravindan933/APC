// src/pages/ChemicalStorageTerminal.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const ChemicalStorageTerminal = () => {
  const benefits = [
    "State-of-the-Art Storage Facilities",
    "Safe & Secure Handling",
    "Compliance with International Standards",
    "Expert Logistics Management",
    "24/7 Monitoring & Support",
    "Strategic Location Access"
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">
      {/* HERO SECTION */}
      <section 
        className="relative w-full h-[450px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/img/petroleum-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Chemical Storage Terminal
          </h1>
          <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
            <Typewriter
              options={{
                strings: [
                  "Advanced Storage & Terminal Services",
                  "Safe Chemical Handling & Management",
                  "Reliable Logistics Solutions"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          <div className="flex-1 flex justify-center">
            <img
              src="/img/petroleum-production.webp"
              alt="Chemical Storage Terminal"
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
                Chemical Storage Terminal
              </span>
            </motion.h2>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochem operates state-of-the-art chemical storage terminals with advanced safety systems and compliance with international standards. Our facilities provide secure storage and handling of various chemical products.
            </p>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              We offer comprehensive terminal services including storage, blending, quality control, and logistics management for our clients across the region.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Asia Petrochem
            </span>
          </h2>
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

export default ChemicalStorageTerminal;