// src/pages/SolventsChemicals.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const SolventsChemicals = () => {

  const categories = [
    {
      title: "Alcohols",
      items: [
        "Methanol",
        "Ethanol 96%",
        "Ethanol 99%",
        "ISO Butanol",
        "N Butanol",
        "ISO Propanol 99.9%",
        "ISO Propanol 45%",
      ],
    },
    {
      title: "Aromatics",
      items: [
        "Toluene",
        "Mix Xylene",
        "Benzene",
        "White Spirit",
        "Solvent Naphtha 100",
        "Solvent Naphtha 150",
        "Solvent Naphtha 200",
      ],
    },
    {
      title: "Glycols",
      items: ["DEG", "MEG", "TEG", "Butyl Glycol"],
    },
    {
      title: "Ketones",
      items: ["MEK", "MIBK", "Acetone", "Hexane"],
    },
    {
      title: "Monomers",
      items: ["Styrene Monomer", "Vinyl Acetate Monomer"],
    },
    {
      title: "Amines",
      items: ["TEA", "MEA", "DEA"],
    },
    {
      title: "Surfactants",
      items: ["LAB", "HAB", "DDB"],
    },
    {
      title: "Intermediates",
      items: ["Phthalic Anhydride", "Maleic Anhydride"],
    },
    {
      title: "Polyols",
      items: ["TDI 80/20"],
    },
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full h-96 bg-blue-600 flex items-center justify-center text-center">
        <div className="text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Solvents & Chemicals
          </h1>
          <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
            <Typewriter
              options={{
                strings: [
                  "Industrial-grade solvents and chemical feedstocks",
                  "Supplying UAE's paints, coatings & adhesive industries",
                  "A trusted partner for chemical distribution in the region"
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
              src="/src/img/solvents.webp"
              alt="Solvents & Chemicals"
              className="w-[350px] h-full rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* CONTENT */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-normal"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Solvents & Chemicals
              </span>
            </motion.h2>

            <p
              className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Asia Petrochem supplies a wide range of chemicals and solvents that
              serve as key feedstocks for multiple SME industries across the UAE
              and Middle East. With the growth of construction, packaging,
              coatings, and adhesive sectors, our product range has expanded to
              support local and international manufacturers in diversified
              applications.
            </p>

            <p
              className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We supply industrial-grade alcohols, aromatics, glycols, ketones,
              monomers, surfactants, and auxiliary chemicals that meet stringent
              quality standards required by the paints, coatings, resins,
              adhesives, and polymer sectors.
            </p>

            {/* PDF DOWNLOAD */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <a
                href="/src/pdf/solvents-brochure.pdf"
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Download Brochure PDF
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-normal mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Products
            </span>
          </h2>
          <p
            className="text-[#1e3a8a] text-sm md:text-base"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore our full range of solvents and chemical feedstocks.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md"
            >
              <h3
                className="text-xl font-semibold text-[#1e3a8a] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {cat.title}
              </h3>

              <ul className="text-[#1e3a8a] space-y-1 text-sm md:text-base">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-blue-100 dark:border-blue-800 pb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SolventsChemicals;
