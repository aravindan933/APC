// src/pages/PolymersPlastics.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const PolymersPlastics = () => {
  const benefits = [
    "End-to-End Supply & Distribution",
    "High-Quality Grades & Certifications",
    "Expert Technical Support",
    "Reliable Storage & Transportation",
    "Global Client Network",
    "Decades of Industry Experience",
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* ── 1. HERO — bg image + content sweep up ── */}
      <section
        className="relative w-full h-[450px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: "url('/img/polymer.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative text-white max-w-2xl px-4"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.34, 1.2, 0.64, 1] }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Polymers &amp; Plastics</h1>
          <div className="text-lg md:text-xl">
            <Typewriter
              options={{
                strings: [
                  "Engineering Plastics, Polymers & Resins Distribution",
                  "Complete Supply, Storage, Transportation & Quality Control",
                  "Serving Plastic Converters across UAE & Global Markets",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── 2. ABOUT — sliding panels from opposite sides ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/img/polymers.webp"
              alt="Polymers & Plastics"
              className="w-[400px] h-full rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center gap-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal">
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Polymers &amp; Plastics</span>
            </h2>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Plastics and Polymers Distribution and Trading remains one of the core competencies of the Asia Petrochem family. We offer complete end-to-end solutions in Supply, Storage, Transportation, and Quality Control to various plastic converters over a wide spectrum of applications.
            </p>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              From Films, Cans, Drums, Bags, Tanks, Carpets, and Pipes, we can't imagine life without plastics. Our product map classifies grades into three main categories: <strong>Polyethylenes, Polypropylenes, and PVC</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRODUCTS — accordion-style fade-in columns ── */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <motion.h2
          className="text-3xl md:text-4xl font-normal text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 130, damping: 12 }}
          viewport={{ once: true }}
        >
          <span className="text-[#1e3a8a]">Product</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Categories &amp; Grades</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          {/* Polyethylenes */}
          <motion.div
            className="flex-1 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            whileInView={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Polyethylenes</h3>
            <div className="p-4 rounded-xl mb-4 bg-teal-100 dark:bg-teal-900">
              <h4 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">HDPE</h4>
              <div className="flex flex-wrap gap-2">
                {["Blow Grade HB0035 (BL3)|/pdf/HB0035.pdf", "Blow Grade HM8355 (BL4)|/pdf/HM8355-(BL4).pdf", "Injection HD52518|/pdf/HD-52518.pdf", "Injection HD-60505|/pdf/HDPE-INJECTION-60505.pdf", "HD Film HD7000F|/pdf/HD-7000F-300516.pdf", "HD Film HFI5110|/pdf/HFI5110-300516.pdf"].map((item) => {
                  const [label, pdf] = item.split("|");
                  return <a key={label} href={pdf} target="_blank" rel="noreferrer" className="px-3 py-1 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700 transition">{label}</a>;
                })}
              </div>
            </div>
            <div className="p-4 rounded-xl mb-4 bg-blue-100 dark:bg-blue-900">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">LDPE</h4>
              <div className="flex flex-wrap gap-2">
                <a href="/pdf/LDPE-1019.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">Film Grade 1019</a>
                <a href="/pdf/LDPE-2420D.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">Film Grade 2420D</a>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-purple-100 dark:bg-purple-900">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">LLDPE</h4>
              <div className="flex flex-wrap gap-2">
                <a href="/pdf/LLDPE-22501AA22501KJ.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition">Film Grade 22501AA, 22501KJ</a>
              </div>
            </div>
          </motion.div>

          {/* Polypropylenes & PVC */}
          <motion.div
            className="flex-1 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            whileInView={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Polypropylenes &amp; PVC</h3>
            <div className="p-4 rounded-xl mb-4 bg-pink-100 dark:bg-pink-900">
              <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">PP - Homopolymer</h4>
              <div className="flex flex-wrap gap-2">
                {["HP550J", "HP510L", "HP525J", "HP552R", "HP564S"].map((g) => (
                  <a key={g} href={`/pdf/${g}.pdf`} target="_blank" rel="noreferrer" className="px-3 py-1 bg-pink-600 text-white rounded-lg text-sm hover:bg-pink-700 transition">{g}</a>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl mb-4 bg-orange-100 dark:bg-orange-900">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">PP - Random Copolymer</h4>
              <a href="/pdf/PP548R-RANDOM-COPOLYMER.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 transition">PP548R</a>
            </div>
            <div className="p-4 rounded-xl mb-4 bg-yellow-100 dark:bg-yellow-900">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">PP - Impact Copolymer</h4>
              <a href="/pdf/PP440L.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700 transition">PP440L</a>
            </div>
            <div className="p-4 rounded-xl bg-green-100 dark:bg-green-900">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">PVC</h4>
              <div className="flex gap-2">
                <a href="/pdf/PVC-K65.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition">PVC K65</a>
                <a href="/pdf/PVC-K67.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition">PVC K67</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — radiate from center ── */}
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Asia Petrochem</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 14, delay: i * 0.08 }}
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

export default PolymersPlastics;
