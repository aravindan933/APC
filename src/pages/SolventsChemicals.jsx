// src/pages/SolventsChemicals.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const SolventsChemicals = () => {

  const benefits = [
    "High-quality chemical feedstocks",
    "Reliable supply & distribution across UAE & Middle East",
    "Products compliant with international safety & quality standards",
    "Dedicated technical & regulatory support",
    "Trusted by SME and large-scale industrial manufacturers",
    "Extensive portfolio covering solvents, monomers, glycols & auxiliaries",
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

{/* HERO SECTION WITH BANNER IMAGE */}
<section className="relative w-full h-96">
  <img
    src="/public/img/solvents.jpg" // your banner image for solvents & chemicals
    alt="Solvents & Chemicals Banner"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 flex items-center justify-center text-center px-4">
    <div className="text-white max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Solvents & Chemicals
      </h1>
      <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
        <Typewriter
          options={{
            strings: [
              "Industrial-grade solvents and chemical feedstocks",
              "Supplying UAE's paints, coatings & adhesive industries",
              "A trusted partner for chemical distribution in the region",
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          <div className="flex-1 flex justify-center">
            <img
              src="/img/solvents.webp"
              alt="Solvents & Chemicals"
              className="w-[350px] h-full rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center gap-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-normal"
            >
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Solvents & Chemicals
              </span>
            </motion.h2>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochem supplies a wide range of chemicals and solvents that
              serve as key feedstocks for multiple SME industries across the UAE
              and Middle East. With the growth of construction, packaging,
              coatings, and adhesive sectors, our product range has expanded to
              support local and international manufacturers in diversified
              applications.
            </p>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              We supply industrial-grade alcohols, aromatics, glycols, ketones,
              monomers, surfactants, and auxiliary chemicals that meet stringent
              quality standards required by the paints, coatings, resins,
              adhesives, and polymer sectors.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
              <a
                href="/public/pdf/ASIA PETROCHEMICALS PROFILE.pdf"
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Download Brochure PDF
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Products
            </span>
          </h2>
          <p className="text-[#1e3a8a] text-sm md:text-base">
            Click on the product to download its respective MSDS/TDS PDF.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ALCOHOLS */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Alcohols</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/public/pdf/Methanol.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Methanol</a>
              <a href="/public/pdf/Ethanol-96.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Ethanol 96%</a>
              <a href="/public/pdf/Ethanol-99.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Ethanol 99%</a>
              <a href="/public/pdf/ISO-Butanol.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">ISO Butanol</a>
              <a href="/public/pdf/N-Butanol.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">N Butanol</a>
              <a href="/public/pdf/ISO-Propanol-99.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">ISO Propanol 99.9%</a>
              <a href="/public/pdf/ISO-Propanol-45.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">ISO Propanol 45%</a>
            </div>
          </div>

          {/* AROMATICS */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Aromatics</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/public/pdf/Toluene.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Toluene</a>
              <a href="/public/pdf/Mix-Xylene.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Mix Xylene</a>
              <a href="/public/pdf/Benzene.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Benzene</a>
              <a href="/public/pdf/White-Spirit.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">White Spirit</a>
              <a href="/public/pdf/Solvent-Naphtha-100.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Solvent Naphtha 100</a>
              <a href="/public/pdf/Solvent-Naphtha-150.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Solvent Naphtha 150</a>
              <a href="/public/pdf/Solvent-Naphtha-200.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Solvent Naphtha 200</a>
            </div>
          </div>

          {/* GLYCOLS */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Glycols</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/public/pdf/DEG-DI-Ethylene-Glycol.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">DEG</a>
              <a href="/public/pdf/MEG-Mono-Ethylene-Glycol.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">MEG</a>
              <a href="/public/pdf/TEG-Tri-Ethylene-Glycol.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">TEG</a>
            </div>
          </div>

          {/* KETONES */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Ketones</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/public/pdf/MEK-Methyl-Ethyl-Ketone.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">MEK</a>
              <a href="/public/pdf/MIBK-Methyl-Isobutyl-Ketone.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">MIBK</a>
              <a href="/public/pdf/Acetone.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Acetone</a>
              <a href="/public/pdf/Hexane.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Hexane</a>
            </div>
          </div>

          {/* MONOMERS */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Monomers</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/public/pdf/Styrene-Monomer.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Styrene Monomer</a>
              <a href="/public/pdf/Vinyl-Acetate-Monomer.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Vinyl Acetate Monomer</a>
            </div>
          </div>

          {/* AMINES */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Amines</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/public/pdf/TEA-TRIETHANOLAMINE.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">TEA</a>
              <a href="/public/pdf/MEA-Monoethanolamine.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">MEA</a>
              <a href="/public/pdf/DEA-Diethanolamine.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">DEA</a>
            </div>
          </div>

          {/* SURFACTANTS */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Surfactants</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/public/pdf/linear-alkyl-benzene.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">LAB</a>
              <a href="/public/pdf/HAB-Heavy-Alkyl-Benzene.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">HAB</a>
              <a href="/public/pdf/DO-Docyl-Benzene.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">DDB</a>
            </div>
          </div>

          {/* INTERMEDIATES */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Intermediates</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/public/pdf/Phthalic-Anhydride.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Phthalic Anhydride</a>
              <a href="/public/pdf/Maleic-Anhydride.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">Maleic Anhydride</a>
            </div>
          </div>

          {/* POLYOLS */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Polyols</h3>
            <div className="flex flex-wrap gap-2">
              <a href="/public/pdf/TDI-Toluene-Di-Isocyanates.pdf" download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">TDI 80/20</a>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg transition-transform hover:scale-105">
              <p className="text-[#1e3a8a] font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SolventsChemicals;
