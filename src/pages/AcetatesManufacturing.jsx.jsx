// src/pages/AcetatesManufacturing.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const AcetatesManufacturing = () => {
  const products = [
    {
      type: "Ethyl Acetate",
      purity: "99.9%",
      applications:
        "Flexible Packaging, Pharmaceuticals, Pesticides, Paints & Resins, Adhesives, Printing Inks, Thinners",
      tds: "/src/pdf/Ethyl-Acetate-999-TDS.pdf",
      msds: "/src/pdf/Ethyl-Acetate-999-MSDS.pdf",
      img: "/src/img/Ethyl.webp",
    },
    {
      type: "N-Butyl Acetate",
      purity: "99.9%",
      applications: "Solvent in Paint and UPR industry",
      tds: "/src/pdf/N-Butyl-Acetate-999-TDS.pdf",
      msds: "/src/pdf/N-Butyl-Acetate-999-MSDS.pdf",
      img: "/src/img/Butyul.webp",
    },
    {
      type: "Methyl Acetate",
      purity: "99%",
      applications: "Coatings, Adhesives, Pharma, Printing Inks",
      tds: "/src/pdf/Methyl-Acetate-TDS.pdf",
      msds: "/src/pdf/Methyl-Acetate-MSDS.pdf",
      img: "/src/img/Methyul.webp",
    },
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* HERO / BANNER */}
      <section className="relative w-full h-96">
        <img
          src="/src/img/EthylButylandMethylAcetates.webp"
          alt="Acetates Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
          <div className="text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Acetates Manufacturing
            </h1>
            <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
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
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT ACETATES */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/src/img/EthylButylandMethyl.webp"
              alt="Acetates Production"
              className="w-[350px] h-full rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-normal"
            >
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Acetates
              </span>
            </motion.h2>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochem is the only integrated Esterification Plant in the UAE, manufacturing high-purity Ethyl, Butyl, and Methyl Acetates. These esters are organic intermediates used directly or as precursors in fine chemicals and industrial applications.
            </p>

            <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify">
              Our plant is a 100MTPD facility based on a continuous process with a state-of-the-art PLC distribution controller. We also maintain strict fire & safety standards, have the lowest carbon footprint, and recycle effluents to optimize production efficiency.
            </p>

            {/* DOWNLOAD PDF BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
              <a
                href="/src/pdf/acetates-brochure.pdf"
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Download Brochure PDF
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Products
            </span>
          </h2>
          <p className="text-[#1e3a8a] text-sm md:text-base">
            Explore the acetate types we manufacture with high purity and industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl shadow-md flex flex-col items-center justify-between"
              style={{ width: "100%", aspectRatio: "1 / 1" }} // Square box
            >
              <img
                src={p.img}
                alt={p.type}
                className="w-full h-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#1e3a8a]">{p.type}</h3>
              <p className="text-[#1e3a8a] mb-1"><strong>Purity:</strong> {p.purity}</p>
              <p className="text-[#1e3a8a] mb-2 text-center"><strong>Applications:</strong> {p.applications}</p>
              <div className="flex gap-2 mt-2">
                <a href={p.tds} download className="px-3 py-1 bg-teal-500 text-white rounded-lg text-sm transition transform hover:scale-105">TDS</a>
                <a href={p.msds} download className="px-3 py-1 bg-teal-700 text-white rounded-lg text-sm transition transform hover:scale-105">MSDS</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS / WHY CHOOSE US */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#1e3a8a]">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Us
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {[
            "High Purity Products",
            "Reliable Supply Chain",
            "Industry Certifications",
            "Global Distribution",
            "Decades of Experience",
            "Customer Support & Technical Assistance",
          ].map((b, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <p className="text-[#1e3a8a] font-semibold">{b}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AcetatesManufacturing;
