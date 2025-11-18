// src/pages/PolymersPlastics.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const PolymersPlastics = () => {
  const products = [
    { title: "HDPE (High Density Polyethylene)", desc: "Blow Grade, Injection Grade, HD Film Grade" },
    { title: "LDPE (Low Density Polyethylene)", desc: "Film Grade LDPE 1019, LDPE 2420D" },
    { title: "LLDPE (Linear Low Density Polyethylene)", desc: "Film Grade LLDPE 2201AA, 22501KJ" },
    { title: "Polypropylene", desc: "Homopolymer, Random Copolymer, Impact Copolymer" },
    { title: "PVC (Poly Vinyl Chloride)", desc: "PVC K65, PVC K67" },
  ];

  const benefits = [
    "End-to-End Supply & Distribution",
    "High-Quality Grades & Certifications",
    "Expert Technical Support",
    "Reliable Storage & Transportation",
    "Global Client Network",
    "Decades of Industry Experience"
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full h-96 bg-blue-600 flex items-center justify-center text-center">
        <div className="text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Polymers & Plastics
          </h1>
          <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
            <Typewriter
              options={{
                strings: [
                  "Engineering Plastics, Polymers & Resins Distribution",
                  "Complete Supply, Storage, Transportation & Quality Control",
                  "Serving Plastic Converters across UAE & Global Markets"
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
              src="/src/img/polymers.webp"
              alt="Polymers & Plastics"
              className="w-[350px] h-full rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 object-cover transition-transform duration-500 hover:scale-105"
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
                Polymers & Plastics
              </span>
            </motion.h2>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Plastics and Polymers Distribution and Trading remains one of the core competencies of the Asia Petrochem family. We offer end-to-end solutions in Supply, Storage, Transportation, and Quality Control to various plastic converters over a wide spectrum of applications.
            </p>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              From Films, Cans, Drums, Bags, Tanks, Carpets, and Pipes, we can’t imagine life without plastics. Our product map classifies grades into three main categories: Polyethylenes, Polypropylenes, and PVC.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Products
            </span>
          </h2>
          <p className="text-[#1e3a8a] text-sm md:text-base">
            Explore our range of high-quality polymer and plastic grades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md flex flex-col items-center justify-center p-4"
              style={{ width: "100%", aspectRatio: "1 / 1" }}
            >
              <div className="text-center px-2">
                <h3 className="text-xl font-semibold mb-2 text-[#1e3a8a]">{item.title}</h3>
                <p className="text-[#1e3a8a] text-sm">{item.desc}</p>
              </div>
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
          {benefits.map((b, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <p className="text-[#1e3a8a] font-semibold">{b}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PolymersPlastics;
