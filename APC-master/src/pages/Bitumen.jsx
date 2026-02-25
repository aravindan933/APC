// src/pages/Bitumen.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Bitumen = () => {
  const products = [
    { title: "Bitumen 60/70", grade: "Penetration Grade", tds: "/pdf/Bitumen-60-70.pdf", img: "/img/bitumen-60-70.jpg" },
    { title: "Bitumen 80/100", grade: "Penetration Grade", tds: "/pdf/Bitumen-80-100.pdf", img: "/img/bitumen-80-100.jpg" },
    { title: "Bitumen Cutback MC30", grade: "Cutback Grade", tds: "/pdf/Bitumen-Cutback-MC-30.pdf", img: "/img/bitumen-mc30.jpg" },
    { title: "Bitumen Cutback MC70", grade: "Cutback Grade", tds: "/pdf/Bitumen-Cutback-MC-70.pdf", img: "/img/bitumen-mc70.jpg" },
    { title: "Gilsonite", grade: "Special Product", tds: "/pdf/gilsonite.pdf", img: "/img/gilsonite.jpg" },
  ];

  const benefits = [
    "High Quality Bitumen Products",
    "Reliable Supply Chain",
    "Global Distribution Network",
    "Decades of Industry Experience",
    "Technical Support & Consultation",
    "ISO & Industry Certifications",
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* ── 1. HERO — dark sweep overlay reveal ── */}
      <section className="relative w-full h-96 overflow-hidden">
        <img
          src="/img/bitumen-banner.jpg"
          alt="Bitumen Banner"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/55 flex items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="text-white max-w-2xl px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
              Bitumen &amp; Bituminous Products
            </motion.h1>
            <div className="text-lg md:text-xl">
              <Typewriter
                options={{
                  strings: [
                    "Core Products of Asia Petrochem LLC",
                    "Penetration & Cutback Bitumen Grades",
                    "Serving Construction & Infrastructure Markets in Asia & Africa",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. ABOUT — slide down from top + image zoom ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/bitumen.jpg"
              alt="Bitumen"
              className="w-[350px] rounded-3xl shadow-2xl border-4 border-teal-100 dark:border-teal-700 object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-center gap-4"
            initial={{ y: -60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal">
              <span className="text-teal-700">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Bitumen &amp; Bituminous Products</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
              One of the core products of Asia Petrochem LLC since its inception has been Bitumen and its derived products. Over the last 15 years, we have been involved in the bulk and drummed movement of Penetration Grades of Bitumen.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
              The Cutback grades, both Rapid Cure and Medium Cure, are blended locally in UAE and supplied as supplementary to the Penetration Grades. Most end users include batching plants, road infrastructure companies, development funds, and governmental construction platforms, particularly in Asia and Africa.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
              The following grades are mostly available: Penetration Grades (60/70 and 80/100), Cutback Grades (MC30, MC70, MC3000), and Gilsonite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRODUCTS — fan-out stagger grid ── */}
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Grades</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Explore our Penetration and Cutback Bitumen grades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl shadow-md flex flex-col items-center justify-between"
              initial={{ opacity: 0, y: 60, rotate: (i % 3 - 1) * 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 130 }}
              whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
            >
              <div className="w-full h-48 flex items-center justify-center mb-4 rounded-xl overflow-hidden">
                <img src={p.img} alt={p.title} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-700 text-center">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-center">
                <strong>Grade:</strong> {p.grade}
              </p>
              <a href={p.tds} download className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-sm transition">
                Download PDF
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US — blur-fade in + pulse ring hover ── */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9 }}
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
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-b-4 border-teal-500"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 12, delay: i * 0.09 }}
              whileHover={{ scale: 1.06 }}
              viewport={{ once: true }}
            >
              <p className="text-teal-700 font-semibold">{b}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bitumen;
