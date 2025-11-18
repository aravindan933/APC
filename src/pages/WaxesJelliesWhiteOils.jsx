// src/pages/AlliedProducts.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const AlliedProducts = () => {
  const products = [
    { title: "Slack Waxes", desc: "Light and Heavy Slack Waxes" },
    { title: "Paraffin Waxes", desc: "Semi Refined & Fully Refined Grades" },
    { title: "Microcrystalline Waxes", desc: "Various Pen Grades" },
    { title: "Petroleum Jelly", desc: "Snow White Petroleum Jelly (WPJ)" },
    { title: "Liquid Paraffins", desc: "Light & Heavy Liquid Paraffin Oils" },
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

      {/* HERO SECTION */}
      <section className="relative w-full h-96 bg-green-700 flex items-center justify-center text-center">
        <div className="text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Waxes, Jellies & Allied Products
          </h1>
          <p className="text-lg md:text-xl mb-4 drop-shadow-sm">
            <Typewriter
              options={{
                strings: [
                  "A Trusted Player in Cosmetics & Pharma Raw Materials",
                  "Producers of Premium White Oils, Waxes & Petroleum Jelly",
                  "Serving Global Markets with High-Purity Petrochemical Products",
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
              src="/src/img/waxes.webp"
              alt="Waxes, Jellies & White Oils"
              className="w-[350px] h-full rounded-3xl shadow-2xl border-4 border-green-100 dark:border-green-700 object-cover transition-transform duration-500 hover:scale-105"
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
              <span className="text-[#0f5132]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Waxes, Jellies & Allied Products
              </span>
            </motion.h2>

            <p className="text-[#0f5132] text-base md:text-lg leading-relaxed text-justify">
              Asia Petrochemicals markets a wide range of products for the Cosmetics and Pharma industries, especially White Oils blended at our UAE facility. Another key product is White Petroleum Jelly (WPJ), a feedstock for major regional pharma and cosmetics manufacturers.
            </p>

            <p className="text-[#0f5132] text-base md:text-lg leading-relaxed text-justify">
              We produce Light & Heavy Liquid Paraffin Oils and handle various waxes, including Slack, Paraffin, and Microcrystalline grades. These remain core products in our portfolio, serving diverse industrial applications with uncompromised quality.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#0f5132]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Products
            </span>
          </h2>
          <p className="text-[#0f5132] text-sm md:text-base">
            Explore our high-purity waxes, white oils, jellies & allied products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md flex flex-col items-center justify-center p-4"
              style={{ width: "100%", aspectRatio: "1 / 1" }}
            >
              <div className="text-center px-2">
                <h3 className="text-xl font-semibold mb-2 text-[#0f5132]">{item.title}</h3>
                <p className="text-[#0f5132] text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            <span className="text-[#0f5132]">Why Choose</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Asia Petrochem
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <p className="text-[#0f5132] font-semibold">{b}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AlliedProducts;
