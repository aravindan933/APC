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
    "Strategic Location Access",
  ];

  const capabilities = [
    { icon: "🏭", title: "Tank Storage", desc: "Dedicated tanks for bulk liquid chemicals with full temperature control." },
    { icon: "🔒", title: "Safety Systems", desc: "Advanced fire suppression, leak detection, and emergency response systems." },
    { icon: "🚢", title: "Marine Access", desc: "Direct jetty access for vessel loading & unloading operations." },
    { icon: "📋", title: "Quality Control", desc: "On-site lab testing and product quality certification before dispatch." },
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* ── 1. HERO — scanning scan-line effect + scale ── */}
      <section
        className="relative w-full h-[450px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: "url('/img/petroleum-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        {/* Animated scan bar */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-teal-400/40"
          initial={{ top: "0%" }}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative text-white max-w-2xl px-4 z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, scale: 1.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Chemical Storage Terminal
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl"
          >
            <Typewriter
              options={{
                strings: [
                  "Advanced Storage & Terminal Services",
                  "Safe Chemical Handling & Management",
                  "Reliable Logistics Solutions",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 2. ABOUT — stagger paragraph lines ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          <motion.div
            className="flex-1 flex justify-center overflow-hidden rounded-3xl"
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            whileInView={{ clipPath: "inset(0 0 0 0%)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/img/petroleum-production.webp"
              alt="Chemical Storage Terminal"
              className="w-[400px] object-cover shadow-xl border border-gray-200 dark:border-gray-700"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-normal"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Chemical Storage Terminal</span>
            </motion.h2>
            <motion.p
              className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Asia Petrochem operates state-of-the-art chemical storage terminals with advanced safety systems and compliance with international standards. Our facilities provide secure storage and handling of various chemical products.
            </motion.p>
            <motion.p
              className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              We offer comprehensive terminal services including storage, blending, quality control, and logistics management for our clients across the region. Our strategic location ensures efficient access to major shipping routes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. CAPABILITIES — icon bounce stagger ── */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <motion.h2
          className="text-3xl md:text-4xl font-normal text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 130 }}
          viewport={{ once: true }}
        >
          <span className="text-[#1e3a8a]">Our</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Capabilities</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {capabilities.map((c, i) => (
            <motion.div
              key={i}
              className="flex gap-5 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 14, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl flex-shrink-0"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 + i * 0.3, ease: "easeInOut" }}
              >
                {c.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-1">{c.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — rotating spring cards ── */}
      <section className="py-16 px-6 md:px-12">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Asia Petrochem</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg"
              initial={{ opacity: 0, rotate: i % 2 === 0 ? -15 : 15, scale: 0.7 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 140, damping: 12, delay: i * 0.08 }}
              whileHover={{ scale: 1.06, rotate: 1 }}
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

export default ChemicalStorageTerminal;