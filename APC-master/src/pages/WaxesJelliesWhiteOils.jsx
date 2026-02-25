// src/pages/WaxesJelliesWhiteOils.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const WaxesProducts = () => {
  const products = [
    {
      title: "Paraffin Waxes",
      desc: "Semi & Fully Refined Paraffin Wax",
      pdf: "/pdf/Semi-Fully-Refined-Paraffin-Wax.pdf",
      img: "/img/Semi & Fully Refined Paraffin Wax.webp",
    },
    {
      title: "Petroleum Jelly",
      desc: "Snow White Petroleum Jelly",
      pdf: "/pdf/Snow-White-Petroleum-Jelly.pdf",
      img: "/img/Snow White Petroleum Jelly.webp",
    },
    {
      title: "Liquid Paraffin",
      desc: "White Oil LLP 15 & White Oil Heavy",
      pdf: ["/pdf/White-Oil-LLP-15.pdf", "/pdf/White-Oil-Heavy.pdf"],
      img: "/img/hite Oil LLP 15, White Oil Heavy.webp",
    },
  ];

  const benefits = [
    "Trusted Supplier for Cosmetics & Pharma Sectors",
    "Premium White Oils & Petroleum Jelly Production",
    "High Purity Standards & International Compliance",
    "Decades of Expertise in Waxes & Allied Products",
    "Reliable Storage, Blending & Distribution Network",
    "Strong Presence Across Middle East & Global Markets",
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* ── 1. HERO — gradient bg with content scale-in ── */}
      <section className="relative w-full h-96 bg-gradient-to-br from-teal-800 to-blue-900 flex items-center justify-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
          }}
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="text-white max-w-2xl px-4 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Waxes, Jellies &amp; White Oils
          </h1>
          <div className="text-lg md:text-xl">
            <Typewriter
              options={{
                strings: [
                  "A Trusted Player in Cosmetics, Pharma & Waxes Sector",
                  "Producers of Premium White Oils & Petroleum Jelly",
                  "Serving Regional and Global Markets with High-Purity Products",
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

      {/* ── 2. ABOUT — image flip-in + text stagger lines ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/img/waxes.jpg"
              alt="Waxes, Jellies & White Oils"
              className="w-[350px] h-full rounded-3xl shadow-2xl border-4 border-teal-100 dark:border-teal-700 object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-normal"
              variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            >
              <span className="text-teal-700">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Waxes &amp; White Oils</span>
            </motion.h2>
            <motion.p
              className="text-blue-900 text-base md:text-lg leading-relaxed text-justify"
              variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            >
              A TRUSTED PLAYER IN COSMETICS, PHARMA & WAXES SECTOR. We market a range of products used in the Cosmetics and Pharma Industry, especially the various White Oils blended in our Lube Blending Facility based in UAE. Another active product is the White Petroleum Jelly (WPJ), a major feedstock to leading Pharma and Cosmetics plants in the region.
            </motion.p>
            <motion.p
              className="text-blue-900 text-base md:text-lg leading-relaxed text-justify"
              variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            >
              Currently, we produce two grades in White Oils: Light Liquid Paraffin and Heavy Liquid Paraffin Oils. We mainly manufacture and trade: Slack Waxes (Light and Heavy), Paraffin Waxes (Semi Refined and Fully Refined), Microcrystalline Waxes (Various Pen Grades).
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRODUCTS — scale-bounce with stagger ── */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-teal-700">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Products</span>
          </h2>
          <p className="text-blue-900 text-sm md:text-base">Explore our range of high-purity waxes, petroleum jelly, and white oils.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md flex flex-col items-center p-4"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 12, delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
              viewport={{ once: true }}
            >
              <div className="w-full h-40 flex items-center justify-center mb-4 rounded-xl overflow-hidden">
                <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-700 text-center">{item.title}</h3>
              <p className="text-blue-900 text-base mb-4 text-center">{item.desc}</p>
              <div className="flex gap-2 flex-wrap justify-center">
                {Array.isArray(item.pdf)
                  ? item.pdf.map((file, idx) => (
                    <a key={idx} href={file} download className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow transition">Download PDF</a>
                  ))
                  : <a href={item.pdf} download className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow transition">Download PDF</a>
                }
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — wave-in from alternating sides ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-teal-700">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Asia Petrochem</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 14, delay: i * 0.07 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <p className="text-blue-900 font-semibold">{b}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WaxesProducts;
