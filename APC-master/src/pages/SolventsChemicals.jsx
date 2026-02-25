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

  const categories = [
    {
      name: "Alcohols", color: "teal",
      items: [
        { label: "Methanol", pdf: "/pdf/Methanol.pdf" },
        { label: "Ethanol 96%", pdf: "/pdf/Ethanol-96.pdf" },
        { label: "Ethanol 99%", pdf: "/pdf/Ethanol-99.pdf" },
        { label: "ISO Butanol", pdf: "/pdf/ISO-Butanol.pdf" },
        { label: "N Butanol", pdf: "/pdf/N-Butanol.pdf" },
        { label: "ISO Propanol 99.9%", pdf: "/pdf/ISO-Propanol-99.pdf" },
        { label: "ISO Propanol 45%", pdf: "/pdf/ISO-Propanol-45.pdf" },
      ],
    },
    {
      name: "Aromatics", color: "blue",
      items: [
        { label: "Toluene", pdf: "/pdf/Toluene.pdf" },
        { label: "Mix Xylene", pdf: "/pdf/Mix-Xylene.pdf" },
        { label: "Benzene", pdf: "/pdf/Benzene.pdf" },
        { label: "White Spirit", pdf: "/pdf/White-Spirit.pdf" },
        { label: "Solvent Naphtha 100", pdf: "/pdf/Solvent-Naphtha-100.pdf" },
        { label: "Solvent Naphtha 150", pdf: "/pdf/Solvent-Naphtha-150.pdf" },
        { label: "Solvent Naphtha 200", pdf: "/pdf/Solvent-Naphtha-200.pdf" },
      ],
    },
    {
      name: "Glycols", color: "indigo",
      items: [
        { label: "DEG", pdf: "/pdf/DEG-DI-Ethylene-Glycol.pdf" },
        { label: "MEG", pdf: "/pdf/MEG-Mono-Ethylene-Glycol.pdf" },
        { label: "TEG", pdf: "/pdf/TEG-Tri-Ethylene-Glycol.pdf" },
      ],
    },
    {
      name: "Ketones", color: "purple",
      items: [
        { label: "MEK", pdf: "/pdf/MEK-Methyl-Ethyl-Ketone.pdf" },
        { label: "MIBK", pdf: "/pdf/MIBK-Methyl-Isobutyl-Ketone.pdf" },
        { label: "Acetone", pdf: "/pdf/Acetone.pdf" },
        { label: "Hexane", pdf: "/pdf/Hexane.pdf" },
      ],
    },
    {
      name: "Monomers", color: "pink",
      items: [
        { label: "Styrene Monomer", pdf: "/pdf/Styrene-Monomer.pdf" },
        { label: "Vinyl Acetate Monomer", pdf: "/pdf/Vinyl-Acetate-Monomer.pdf" },
      ],
    },
    {
      name: "Amines", color: "orange",
      items: [
        { label: "TEA", pdf: "/pdf/TEA-TRIETHANOLAMINE.pdf" },
        { label: "MEA", pdf: "/pdf/MEA-Monoethanolamine.pdf" },
        { label: "DEA", pdf: "/pdf/DEA-Diethanolamine.pdf" },
      ],
    },
    {
      name: "Surfactants", color: "cyan",
      items: [
        { label: "LAB", pdf: "/pdf/linear-alkyl-benzene.pdf" },
        { label: "HAB", pdf: "/pdf/HAB-Heavy-Alkyl-Benzene.pdf" },
        { label: "DDB", pdf: "/pdf/DO-Docyl-Benzene.pdf" },
      ],
    },
    {
      name: "Intermediates", color: "lime",
      items: [
        { label: "Phthalic Anhydride", pdf: "/pdf/Phthalic-Anhydride.pdf" },
        { label: "Maleic Anhydride", pdf: "/pdf/Maleic-Anhydride.pdf" },
      ],
    },
    {
      name: "Polyols", color: "yellow",
      items: [
        { label: "TDI 80/20", pdf: "/pdf/TDI-Toluene-Di-Isocyanates.pdf" },
      ],
    },
  ];

  const colorMap = {
    teal: "bg-teal-500 hover:bg-teal-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    indigo: "bg-indigo-500 hover:bg-indigo-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    pink: "bg-pink-500 hover:bg-pink-600",
    orange: "bg-orange-500 hover:bg-orange-600",
    cyan: "bg-cyan-500 hover:bg-cyan-600",
    lime: "bg-lime-600 hover:bg-lime-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
  };

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* ── 1. HERO — diagonal gradient wipe ── */}
      <section className="relative w-full h-96 overflow-hidden">
        <img
          src="/img/solvents.jpg"
          alt="Solvents & Chemicals Banner"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,100,100,0.4) 100%)" }}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            className="text-white max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Solvents &amp; Chemicals</h1>
            <div className="text-lg md:text-xl">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. ABOUT — image perspective tilt + text from below ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, rotateY: 25, perspective: 600 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/img/solvents.webp"
              alt="Solvents & Chemicals"
              className="w-[350px] h-full rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal">
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Solvents &amp; Chemicals</span>
            </h2>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochem supplies a wide range of chemicals and solvents that serve as key feedstocks for multiple SME industries across the UAE and Middle East. With the growth of construction, packaging, coatings, and adhesive sectors, our product range has expanded to support local and international manufacturers in diversified applications.
            </p>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              We supply industrial-grade alcohols, aromatics, glycols, ketones, monomers, surfactants, and auxiliary chemicals that meet stringent quality standards required by the paints, coatings, resins, adhesives, and polymer sectors.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
              <a
                href="/pdf/ASIA PETROCHEMICALS PROFILE.pdf"
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 inline-block"
              >
                Download Brochure PDF
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRODUCTS — category cards cascade in ── */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Products</span>
          </h2>
          <p className="text-[#1e3a8a] text-sm md:text-base">Click on the product to download its respective MSDS/TDS PDF.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <a
                    key={j}
                    href={item.pdf}
                    download
                    className={`px-3 py-1 ${colorMap[cat.color]} text-white rounded-lg text-sm transition`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — stagger from bottom ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Asia Petrochem</span>
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-l-4 border-teal-500"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140 } },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <p className="text-[#1e3a8a] font-semibold">{b}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default SolventsChemicals;
