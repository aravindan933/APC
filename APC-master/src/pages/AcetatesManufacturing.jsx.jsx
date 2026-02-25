// src/pages/AcetatesManufacturing.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const AcetatesManufacturing = () => {
  const products = [
    {
      type: "Ethyl Acetate",
      purity: "99.9%",
      applications: "Flexible Packaging, Pharmaceuticals, Pesticides, Paints & Resins, Adhesives, Printing Inks, Thinners",
      tds: "/pdf/Ethyl-Acetate-999-TDS.pdf",
      msds: "/pdf/Ethyl-Acetate-999-MSDS.pdf",
      img: "/img/Ethyl.jpg",
    },
    {
      type: "N-Butyl Acetate",
      purity: "99.9%",
      applications: "Solvent in Paint and UPR industry",
      tds: "/pdf/N-Butyl-Acetate-999-TDS.pdf",
      msds: "/pdf/N-Butyl-Acetate-999-MSDS.pdf",
      img: "/img/N-Butyl Acetate.webp",
    },
    {
      type: "Methyl Acetate",
      purity: "99%",
      applications: "Coatings, Adhesives, Pharma, Printing Inks",
      tds: "/pdf/Methyl-Acetate-TDS.pdf",
      msds: "/pdf/Methyl-Acetate-MSDS.pdf",
      img: "/img/Methyul.webp",
    },
  ];

  const benefits = [
    "High Purity Products",
    "Reliable Supply Chain",
    "Industry Certifications",
    "Global Distribution",
    "Decades of Experience",
    "Customer Support & Technical Assistance",
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* ── 1. HERO — parallax zoom + typewriter ── */}
      <section className="relative w-full h-96 overflow-hidden">
        <motion.img
          src="/img/EthylButylandMethylAcetates.webp"
          alt="Acetates Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <motion.div
            className="text-white max-w-2xl px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Acetates Manufacturing
            </h1>
            <div className="text-lg md:text-xl drop-shadow-sm">
              <Typewriter
                options={{
                  strings: [
                    "Sole manufacturer of Ethyl, Butyl & Methyl Acetates in UAE",
                    "High-quality esters for multiple industrial applications",
                    "Advanced continuous process & strong quality control",
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

      {/* ── 2. ABOUT — clip-path wipe from left + image rotate-in ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/img/EthylButylandMethyl.webp"
              alt="Acetates Production"
              className="w-[350px] rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center gap-4"
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal">
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Acetates</span>
            </h2>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochem is the only integrated Esterification Plant in the UAE, manufacturing high-purity Ethyl, Butyl, and Methyl Acetates. These esters are organic intermediates used directly or as precursors in fine chemicals and industrial applications.
            </p>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Our plant is a 100MTPD facility based on a continuous process with a state-of-the-art PLC distribution controller. We maintain strict fire & safety standards, have a low carbon footprint, and recycle effluents to optimize production efficiency.
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

      {/* ── 3. PRODUCTS — stagger flip-in cards ── */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Products</span>
          </h2>
          <p className="text-[#1e3a8a] text-sm md:text-base">
            Explore the acetate types we manufacture with high purity and industrial applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl shadow-md flex flex-col items-center justify-between border-t-4 border-teal-500"
              initial={{ opacity: 0, rotateX: -25, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.12)" }}
              viewport={{ once: true }}
            >
              <div className="w-full h-48 flex items-center justify-center mb-4 rounded-xl overflow-hidden">
                <img src={p.img} alt={p.type} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1e3a8a] text-center">{p.type}</h3>
              <p className="text-[#1e3a8a] mb-1"><strong>Purity:</strong> {p.purity}</p>
              <p className="text-[#1e3a8a] mb-2 text-center"><strong>Applications:</strong> {p.applications}</p>
              <div className="flex gap-2 mt-auto">
                <a href={p.tds} download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition">TDS</a>
                <a href={p.msds} download className="px-3 py-1 bg-teal-700 text-white rounded-lg text-sm hover:bg-teal-800 transition">MSDS</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — spring stagger from right ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Us</span>
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 160, damping: 14 } },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-[#1e3a8a] font-semibold">{b}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default AcetatesManufacturing;
