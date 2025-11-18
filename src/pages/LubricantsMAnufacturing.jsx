// src/pages/LubricantsManufacturing.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const LubricantsManufacturing = () => {
  const lubricants = [
    {
      title: "Engine Oils",
      desc: "Diesel & Petrol engine oils available in Monograde, Multigrade, Semi-Synthetic & Fully Synthetic formulations.",
      img: "/src/img/engine-oil.webp",
    },
    {
      title: "Gear Oils",
      desc: "High-performance gear oils in API GL4/GL5 grades for automotive and industrial applications.",
      img: "/src/img/gear-oil.webp",
    },
    {
      title: "Hydraulic Oils",
      desc: "Industrial and hydraulic fluids designed for heavy-duty machinery and equipment.",
      img: "/src/img/hydraulic-oil.webp",
    },
    {
      title: "Brake Fluids",
      desc: "Brake fluids meeting DOT 3 and DOT 4 specifications for optimal braking performance.",
      img: "/src/img/brake-fluid.webp",
    },
    {
      title: "Greases",
      desc: "Premium automotive and industrial greases with excellent heat and pressure resistance.",
      img: "/src/img/grease.webp",
    },
    {
      title: "Coolants & Antifreeze",
      desc: "High-grade coolants and antifreeze solutions for engine protection in all climates.",
      img: "/src/img/coolant.webp",
    },
    {
      title: "Transmission Fluids",
      desc: "Top-tier transmission & clutch fluids for smooth performance and durability.",
      img: "/src/img/transmission-fluid.webp",
    },
    {
      title: "Additives & Components",
      desc: "ZDDP, PPD, VI Improvers, TBN boosters, dyes & fragrances used in lubricant blending.",
      img: "/src/img/additives.webp",
    }
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full h-96 bg-blue-700 flex items-center justify-center text-center">
        <div className="text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Lubricants Manufacturing
          </h1>

          <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
            <Typewriter
              options={{
                strings: [
                  "Automotive & Industrial Lubricants",
                  "Greases, Coolants & Brake Fluids",
                  "Reliable Global Lubricant Supply"
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">

          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src="/src/img/lubricants-banner.webp"
              alt="Lubricants Manufacturing"
              className="w-[400px] h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* CONTENT */}
          <div className="flex-1 flex flex-col justify-center gap-4">
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
              SYNOL LUBES is the flagship brand of Asia Petrochem’s Automotive,
              Industrial Lubricants, Greases, Brake Fluids, and Coolants. Our
              products meet global API performance levels and are blended using
              advanced formulations and premium additives.
            </p>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              With a strong distribution network across key global markets, our
              lubricants are trusted for reliability, durability, and superior
              engine protection across industries.
            </p>

            {/* SINGLE BROCHURE DOWNLOAD BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-3">
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

      {/* PRODUCT GRID */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Lubricant Products
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {lubricants.map((item, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md flex flex-col items-center text-center">

              <img
                src={item.img}
                alt={item.title}
                className="w-[400px] h-[400px] object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold mb-2 text-[#1e3a8a]">
                {item.title}
              </h3>

              <p className="text-[#1e3a8a] mb-4">{item.desc}</p>
            </div>
          ))}
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
          {[
            "API Certified Lubricants",
            "High Performance Additive Packages",
            "Engineered for Extreme Conditions",
            "Reliable Global Distribution",
            "Long Engine & Equipment Life",
            "Advanced Blending Technology",
          ].map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <p className="text-[#1e3a8a] font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LubricantsManufacturing;
