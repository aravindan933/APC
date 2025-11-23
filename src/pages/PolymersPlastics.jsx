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
    "Decades of Industry Experience"
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* HERO SECTION */}
      {/* HERO SECTION */}
    <section 
      className="relative w-full h-[450px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/public/img/polymer.jpg')" }}  // ← your banner image
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* CONTENT */}
      <div className="relative text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Polymers & Plastics
        </h1>

        <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
          <Typewriter
            options={{
              strings: [
                "Engineering Plastics, Polymers & Resins Distribution",
                "Complete Supply, Storage, Transportation & Quality Control",
                "Serving Plastic Converters across UAE & Global Markets"
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
          <div className="flex-1 flex justify-center">
            <img
              src="/public/img/polymers.webp"
              alt="Polymers & Plastics"
              className="w-[400px] h-full rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-normal"
            >
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Polymers & Plastics
              </span>
            </motion.h2>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Plastics and Polymers Distribution and Trading remains one of the core competencies of the Asia Petrochem family. We offer complete end-to-end solutions in Supply, Storage, Transportation, and Quality Control to various plastic converters over a wide spectrum of applications.
            </p>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              From Films, Cans, Drums, Bags, Tanks, Carpets, and Pipes, we can’t imagine life without plastics. Our product map classifies grades into three main categories: <strong>Polyethylenes, Polypropylenes, and PVC</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES WITH COLORED SUB-BOXES */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-center mb-12">
            <span className="text-[#1e3a8a]">Product</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Categories & Grades
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6">

            {/* POLYETHYLENES BOX */}
            <div className="flex-1 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Polyethylenes</h3>

              {/* HDPE */}
              <div className="p-4 rounded-xl mb-4 bg-teal-100 dark:bg-teal-900">
                <h4 className="font-semibold text-[#064e3b] dark:text-teal-400 mb-2">HDPE</h4>
                <div className="flex flex-wrap gap-2">
                  <a href="/public/pdf/HB0035.pdf" target="_blank" className="px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">Blow Grade HB0035 (BL3)</a>
                  <a href="/public/pdf/HM8355-(BL4).pdf" target="_blank" className="px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">Blow Grade HM8355 (BL4)</a>
                  <a href="/public/pdf/HD-52518.pdf" target="_blank" className="px-3 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">Injection HD52518</a>
                  <a href="/public/pdf/HDPE-INJECTION-60505.pdf" target="_blank" className="px-3 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">Injection HD-60505</a>
                  <a href="/public/pdf/" target="_blank" className="px-3 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">Injection HD-60507</a>
                  <a href="/public/pdf/HD-7000F-300516.pdf" target="_blank" className="px-3 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition">HD Film HD7000F</a>
                  <a href="/public/pdf/HFI5110-300516.pdf" target="_blank" className="px-3 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition">HD Film HFI5110</a>
                </div>
              </div>

              {/* LDPE */}
              <div className="p-4 rounded-xl mb-4 bg-blue-100 dark:bg-blue-900">
                <h4 className="font-semibold text-[#1e3a8a] dark:text-blue-300 mb-2">LDPE</h4>
                <div className="flex flex-wrap gap-2">
                  <a href="/public/pdf/LDPE-1019.pdf" target="_blank" className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Film Grade 1019</a>
                  <a href="/public/pdf/LDPE-2420D.pdf" target="_blank" className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Film Grade 2420D</a>
                </div>
              </div>

              {/* LLDPE */}
              <div className="p-4 rounded-xl bg-purple-100 dark:bg-purple-900">
                <h4 className="font-semibold text-[#6b21a8] dark:text-purple-300 mb-2">LLDPE</h4>
                <div className="flex flex-wrap gap-2">
                  <a href="/public/pdf/LLDPE-22501AA22501KJ.pdf" target="_blank" className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">Film Grade 2201AA, Grade 22501KJ</a>
                </div>
              </div>
            </div>

            {/* POLYPROPYLENES & PVC BOX */}
            <div className="flex-1 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Polypropylenes & PVC</h3>

              {/* Homopolymer */}
              <div className="p-4 rounded-xl mb-4 bg-pink-100 dark:bg-pink-900">
                <h4 className="font-semibold text-[#9d174d] dark:text-pink-300 mb-2">Polypropylene - Homopolymer</h4>
                <div className="flex flex-wrap gap-2">
                  <a href="/public/pdf/HP550J.pdf" target="_blank" className="px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">HP550J</a>
                  <a href="/public/pdf/HP510L.pdf" target="_blank" className="px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">HP510L</a>
                  <a href="/public/pdF/HP525J.pdf" target="_blank" className="px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">HP525J</a>
                  <a href="/public/pdf/HP552R.pdf" target="_blank" className="px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">HP552R</a>
                  <a href="/public/pdf/HP564S.pdf" target="_blank" className="px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">HP564S</a>
                </div>
              </div>

              {/* Random Copolymer */}
              <div className="p-4 rounded-xl mb-4 bg-orange-100 dark:bg-orange-900">
                <h4 className="font-semibold text-[#c2410c] dark:text-orange-300 mb-2">Polypropylene - Random Copolymer</h4>
                <a href="/public/pdf/PP548R-RANDOM-COPOLYMER.pdf" target="_blank" className="px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">PP548R</a>
              </div>

              {/* Impact Copolymer */}
              <div className="p-4 rounded-xl mb-4 bg-yellow-100 dark:bg-yellow-900">
                <h4 className="font-semibold text-[#78350f] dark:text-yellow-300 mb-2">Polypropylene - Impact Copolymer</h4>
                <a href="/public/pdf/PP440L.pdf" target="_blank" className="px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">PP440L</a>
              </div>

              {/* PVC */}
              <div className="p-4 rounded-xl bg-green-100 dark:bg-green-900">
                <h4 className="font-semibold text-[#065f46] dark:text-green-300 mb-2">PVC</h4>
                <a href="/public/pdf/PVC-K65.pdf" target="_blank" className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">PVC K65</a>
                <a href="/public/pdf/PVC-K67.pdf" target="_blank" className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">PVC K67</a>
              </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md transition-transform hover:scale-105">
              <p className="text-[#1e3a8a] font-semibold">{b}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PolymersPlastics;
