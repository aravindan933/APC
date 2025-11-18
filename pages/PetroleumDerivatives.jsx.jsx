// src/pages/PetroleumDerivatives.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const PetroleumDerivatives = () => {
  const derivatives = [
    {
      title: "Gasoline / Petrol",
      desc: "High-quality refined gasoline suitable for automotive and industrial fuel applications.",
      img: "/src/img/gasoline.webp",
    },
    {
      title: "Diesel",
      desc: "Ultra-low sulfur diesel (ULSD) used for heavy machinery, transportation, and generators.",
      img: "/src/img/diesel.webp",
    },
    {
      title: "Lubricants",
      desc: "Industrial, automotive, and marine lubricants formulated for high performance.",
      img: "/src/img/lubricants.webp",
    },
    {
      title: "Fuel Oil",
      desc: "Reliable fuel oil for marine, industrial boilers, and large-scale heating applications.",
      img: "/src/img/fuel-oil.webp",
    }
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* HERO */}
      <section className="relative w-full h-96 bg-blue-700 flex items-center justify-center text-center">
        <div className="text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Petroleum & Derivatives
          </h1>

          <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
            <Typewriter
              options={{
                strings: [
                  "High-Quality Refined Petroleum Products",
                  "Reliable Global Supply & Distribution",
                  "Marine, Automotive & Industrial Solutions"
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
              src="/src/img/petroleum.webp"
              alt="Petroleum Derivatives"
              className="w-[450px] h-[450px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 transition-transform duration-500 hover:scale-105"
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
                Petroleum & Derivatives
              </span>
            </motion.h2>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochem supplies a wide range of high-quality refined petroleum
              products used across automotive, marine, industrial, and commercial sectors.
              All our petroleum derivatives meet international quality certifications.
            </p>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              With advanced processing facilities, strong global partnerships,
              and efficient logistics, we ensure consistent quality, reliability,
              and timely delivery across global markets.
            </p>

            {/* DOWNLOAD PDF BUTTON (ONLY ONE) */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-3">
              <a
                href="/src/pdf/petroleum-brochure.pdf"
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Download Brochure PDF
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DERIVATIVES GRID */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Petroleum Products
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {derivatives.map((item, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md flex flex-col items-center text-center">

              <img
                src={item.img}
                alt={item.title}
                className="w-[300px] h-[280px] object-cover rounded-xl mb-4"
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
              Asia Petrochem
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Global Quality Compliance",
            "Reliable Large-Scale Supply",
            "Strong Logistics & Distribution Network",
            "Industrial & Marine Grade Products",
            "Trusted by Global Brands",
            "Expert Technical Support"
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

export default PetroleumDerivatives;
