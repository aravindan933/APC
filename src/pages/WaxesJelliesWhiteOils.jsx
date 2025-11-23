// src/pages/WaxesProducts.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const WaxesProducts = () => {
  const products = [
    {
      title: "Paraffin Waxes",
      desc: "Semi & Fully Refined Paraffin Wax",
      pdf: "/public/pdf/Semi-Fully-Refined-Paraffin-Wax.pdf",
      img: "/public/img/Semi & Fully Refined Paraffin Wax.webp", // replace with actual image
    },
    {
      title: "Petroleum Jelly",
      desc: "Snow White Petroleum Jelly",
      pdf: "/public/pdf/Snow-White-Petroleum-Jelly.pdf",
      img: "/public/img/Snow White Petroleum Jelly.webp", // replace with actual image
    },
    {
      title: "Liquid Paraffin",
      desc: "White Oil LLP 15 & White Oil Heavy",
      pdf: [
        "/public/pdf/White-Oil-LLP-15.pdf",
        "/public/pdf/White-Oil-Heavy.pdf",
      ],
      img: "/public/img/hite Oil LLP 15, White Oil Heavy.webp", // replace with actual image
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

      {/* HERO / BANNER */}
      <section className="relative w-full h-96 bg-teal-600 flex items-center justify-center text-center">
        <div className="text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Waxes, Jellies & White Oils
          </h1>
          <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
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
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">

          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src="/public/img/waxes.jpg"
              alt="Waxes, Jellies & White Oils"
              className="w-[350px] h-full rounded-3xl shadow-2xl border-4 border-teal-100 dark:border-teal-700 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* CONTENT */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-normal"
            >
              <span className="text-teal-700">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Waxes & White Oils
              </span>
            </motion.h2>

            <p className="text-blue-900 text-base md:text-lg leading-relaxed text-justify">
              A TRUSTED PLAYER IN COSMETICS, PHARMA & WAXES SECTOR. We market a range of products used in the Cosmetics and Pharma Industry, especially the various White Oils blended in our Lube Blending Facility based in UAE. Another active product is the White Petroleum Jelly (WPJ), a major feedstock to leading Pharma and Cosmetics plants in the region.
            </p>

            <p className="text-blue-900 text-base md:text-lg leading-relaxed text-justify">
              Currently, we produce two grades in White Oils: Light Liquid Paraffin and Heavy Liquid Paraffin Oils. Waxes in all kinds and forms remain one of the first products handled by the company and is still considered a prime product. We mainly manufacture and trade in the following grades:
            </p>

            <ul className="list-disc list-inside text-blue-900 text-base md:text-lg">
              <li>Slack Waxes (Light and Heavy)</li>
              <li>Paraffin Waxes (Semi Refined and Fully Refined)</li>
              <li>Microcrystalline Waxes (Various Pen Grades)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-teal-700">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Products
            </span>
          </h2>
          <p className="text-blue-900 text-sm md:text-base">
            Explore our range of high-purity waxes, petroleum jelly, and white oils.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md flex flex-col items-center justify-between p-4 transition-transform hover:scale-105"
              style={{ aspectRatio: "4 / 3" }}
            >
              <div className="w-full h-40 flex items-center justify-center mb-4 rounded-xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-700 text-center">{item.title}</h3>
              <p className="text-blue-900 text-base mb-4 text-center">{item.desc}</p>
              <div className="flex gap-2">
                {Array.isArray(item.pdf)
                  ? item.pdf.map((file, idx) => (
                      <a
                        key={idx}
                        href={file}
                        download
                        className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow transition transform hover:scale-105"
                      >
                        Download PDF
                      </a>
                    ))
                  : (
                    <a
                      href={item.pdf}
                      download
                      className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow transition transform hover:scale-105"
                    >
                      Download PDF
                    </a>
                  )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-teal-700">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Asia Petrochem
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-transform hover:scale-105">
              <p className="text-blue-900 font-semibold">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WaxesProducts;
