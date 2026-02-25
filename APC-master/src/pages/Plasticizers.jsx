// src/pages/Plasticizers.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Plasticizers = () => {
  const benefits = [
    "High-Quality Plasticizer Products",
    "Reliable Supply Chain",
    "Expert Technical Support",
    "Global Distribution Network",
    "Industry Compliance",
    "Custom Solutions",
  ];

  const features = [
    { icon: "🧪", title: "Phthalate-based", desc: "DOP, DOTP, DBP — versatile plasticizers for PVC and rubber applications." },
    { icon: "🌿", title: "Non-Phthalate", desc: "Eco-friendly alternatives meeting stringent regulatory standards." },
    { icon: "⚗️", title: "Specialty Grade", desc: "Custom plasticizer blends for specific industrial requirements." },
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* ── 1. HERO — image + horizontal slide-in text ── */}
      <section
        className="relative w-full h-[450px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: "url('/img/petroleum-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative text-white max-w-2xl px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Plasticizers
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl"
          >
            <Typewriter
              options={{
                strings: [
                  "High-Quality Plasticizer Solutions",
                  "Industrial & Commercial Applications",
                  "Reliable Supply & Distribution",
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

      {/* ── 2. ABOUT — image scale-rotate + text curtain from top ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ scale: 0.75, rotate: 8, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 110 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/petroleum-production.webp"
              alt="Plasticizers"
              className="w-[400px] rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center gap-5"
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal">
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Plasticizers</span>
            </h2>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochem provides high-quality plasticizer products for various industrial applications. Our plasticizers enhance the flexibility, durability, and workability of polymers and plastics.
            </p>
            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              We offer a comprehensive range of plasticizer solutions with full quality assurance and international compliance standards. Our products are used extensively in construction, automotive, medical, and consumer goods industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. FEATURES — radiate out with icon bounce ── */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <motion.h2
          className="text-3xl md:text-4xl font-normal text-center mb-12"
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[#1e3a8a]">Product</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Categories</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md"
              initial={{ opacity: 0, scale: 0.5, rotate: (i - 1) * 12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 12, delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }}
              >
                {f.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — cinematic blur-fade ── */}
      <section className="py-16 px-6 md:px-12">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
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
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-t-4 border-teal-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
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

export default Plasticizers;