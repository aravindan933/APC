// src/pages/PetroleumDerivatives.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const PetroleumDerivatives = () => {
  const benefits = [
    "Global Quality Compliance",
    "Reliable Large-Scale Supply",
    "Strong Logistics & Distribution Network",
    "Industrial & Marine Grade Products",
    "Trusted by Global Brands",
    "Expert Technical Support",
  ];

  const productGroups = [
    {
      title: "Base Oils",
      img: "/img/base-oil.webp",
      files: [
        ["SN 150", "/pdf/SN-150.pdf"], ["SN 500", "/pdf/SN-200.pdf"], ["BS 150", "/pdf/BS-150.pdf"],
        ["GSN 150", "/pdf/GSN-150.pdf"], ["SN 200", "/pdf/SN-200.pdf"], ["GSN 500", "/pdf/GSN-500.pdf"],
        ["SN 600", "/pdf/SN-600.pdf"], ["Cst 4", "/pdf/Cst-4.pdf"], ["Cst 6", "/pdf/Cst-6.pdf"],
        ["Cst 8", "/pdf/Cst-8.pdf"], ["Recycle SN-150", "/pdf/Recycle-Base-Oil-SN-150.pdf"], ["Recycle SN-300", "/pdf/Recycle-Base-Oil-SN-300.pdf"],
      ],
    },
    {
      title: "Fuel Oils",
      img: "/img/fuel-oil.jpg",
      files: [["Cst 180", "/pdf/CST-180.pdf"], ["Cst 280", "/pdf/CST-280.pdf"], ["Cst 380", "/pdf/CST-380.pdf"]],
    },
    {
      title: "Sulphur",
      img: "/img/sulphur.jpg",
      files: [["Granulars Lumps", "/pdf/Granular.pdf"]],
    },
    {
      title: "Rubber Processing Oils",
      img: "/img/rubber-oil.jpg",
      files: [["Aromatic RPO", "/pdf/Aromatic-Rubber-Processing-Oil.pdf"]],
    },
    {
      title: "Waxes",
      img: "/img/waxes.jpg",
      files: [["Slack Wax", "/pdf/Slack-Waxes.pdf"], ["Residual Wax", "/pdf/Residue-Wax.pdf"]],
    },
    {
      title: "Urea & Fertilizers",
      img: "/img/Urea & Fertilizers.webp",
      files: [["Urea 46", "/pdf/Urea-46.pdf"]],
    },
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* ── 1. HERO — image zoom-out from center + fade text ── */}
      <section className="relative w-full h-96 overflow-hidden">
        <motion.img
          src="/img/petroleum-banner.jpg"
          alt="Petroleum Products Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/25 flex items-center justify-center text-center px-4">
          <motion.div
            className="text-white max-w-2xl"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Petroleum Products</h1>
            <div className="text-lg md:text-xl">
              <Typewriter
                options={{
                  strings: [
                    "High-Quality Petroleum Products",
                    "Reliable Supply & Distribution",
                    "Industrial & Commercial Solutions",
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

      {/* ── 2. ABOUT — clip-path curtain reveal + image scale ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          <motion.div
            className="flex-1 flex justify-center overflow-hidden rounded-3xl"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/img/petroleum-production.webp"
              alt="Petroleum Production"
              className="w-[400px] object-cover shadow-xl border border-gray-200 dark:border-gray-700"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center gap-5"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal">
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Petroleum Products</span>
            </h2>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochem LLC and the founding Group have over 30 years of experience in the Middle East trading essential petroleum commodities across the region. Prior to manufacturing, the Group specialized in trading Middle East origin barrels in South East Asia and ASEAN markets.
            </p>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              We specialize in shipping, chartering, storage terminal operations, and handling of fuels and distillates. Our products are delivered with full quality assurance and international compliance.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/pdf/petroleum-brochure.pdf"
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 inline-block"
              >
                Download Brochure PDF
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRODUCTS — rotateX flip stagger grid ── */}
      <section className="py-16 px-6 md:px-12">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Products</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Explore the petroleum products we supply with full specifications and downloadable files.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productGroups.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, rotateX: -20, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
            >
              <div className="w-full h-48 flex items-center justify-center mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700">
                <img src={p.img} alt={p.title} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1e3a8a] text-center">{p.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {p.files.map(([label, pdf]) => (
                  <a key={label} href={pdf} download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition whitespace-nowrap">{label}</a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — blur-to-clear stagger ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Asia Petrochem</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            We combine global experience, technical expertise, and quality assurance to provide superior petroleum products.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-b-4 border-blue-500"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              transition={{ type: "spring", stiffness: 130 }}
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

export default PetroleumDerivatives;
