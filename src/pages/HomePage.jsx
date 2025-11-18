// src/pages/HomePage.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Sample data
const products = [
  { title: "Acetates Manufacturing", desc: "High-purity Ethyl, Butyl, and Methyl Acetates for coatings, adhesives, pharmaceuticals, printing inks, and chemical industries.", img: "/src/img/acetates.webp" },
  { title: "Petroleum & Derivatives", desc: "Refined fuels, lubricants, and specialty oils for automotive, marine, and industrial applications.", img: "/src/img/petroleum.jpg" },
  { title: "Solvents & Chemicals", desc: "Industrial-grade solvents, acids, and specialty chemicals for coatings, resins, cleaning agents, and chemical processes.", img: "/src/img/solvents.webp" },
  { title: "Lubricants Manufacturing", desc: "Premium hydraulic oils, engine oils, greases, and specialty lubricants engineered for automotive, industrial, and marine use.", img: "/src/img/lubricants.webp" },
  { title: "Polymers & Plastics", desc: "High-quality polymers for molding, packaging, and industrial manufacturing. Ideal for automotive, construction, and consumer products.", img: "/src/img/polymers.webp" },
  { title: "Bitumen & Emulsion", desc: "Construction-grade bitumen and emulsions for roads, coatings, waterproofing, and industrial applications with high adhesion and flexibility.", img: "/src/img/bitumen.jpg" },
  { title: "Waxes & White Oils", desc: "Cosmetic-grade waxes, jellies, and white oils for personal care, pharmaceuticals, food packaging, and industrial lubrication.", img: "/src/img/waxes.jpg" },
];

const services = [
  { icon: "🏭", title: "Manufacturing", description: "State-of-the-art production facilities for acetates, lubricants, and more." },
  { icon: "🚚", title: "Distribution", description: "Wide distribution network across GCC, Africa, and Indian Subcontinent." },
  { icon: "🛢️", title: "Trading", description: "Trading petrochemicals, base oils, fuels, and solvents globally." },
  { icon: "🌐", title: "Global Reach", description: "Exporting to over 17 countries across Africa and Middle East." },
];

const news = [
  { title: "New Facility Expansion", desc: "We are expanding our Ester Production Facility to meet rising regional demand." },
  { title: "Export Growth", desc: "Our lubricant manufacturing exports now reach over 17 countries globally." },
  { title: "Sustainability Initiatives", desc: "We are adopting eco-friendly practices across all major operations." },
];

const HomePage = () => {
  return (
    <div className="w-full text-gray-800 dark:text-gray-200 font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        <video src="/src/video/hero.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 flex items-center px-12">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">ASIA PETROCHEM</h1>
            <p className="text-lg md:text-xl text-white/90 font-medium mb-6 drop-shadow-sm">
              <Typewriter
                options={{
                  strings: [
                    "Based in UAE, a leader in Manufacturing.",
                    "Distribution & Trade of Chemicals and Downstream Petrochemicals.",
                    "Delivering high-quality products across industries.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </p>
            <motion.a
              href="#products"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
              whileHover={{ scale: 1.07, boxShadow: "0px 0px 20px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Products
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img src="/src/img/homeabout.webp" alt="About ASIA PETROCHEM" className="w-full h-auto rounded-3xl shadow-2xl border-4 border-blue-100 dark:border-blue-700 object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="flex-1 text-left">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-3xl md:text-4xl mb-6 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span className="text-[#1e3a8a]">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">ASIA PETROCHEM</span>
            </motion.h2>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className="space-y-4">
              <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify" style={{ fontFamily: "'Inter', sans-serif" }}>
                Since 1989, <strong>ASIA PETROCHEM</strong> has grown as a leader in manufacturing, distribution, and trading of petrochemicals. Serving industries like pharmaceuticals, automotive, coatings, adhesives, cosmetics, plastics, and foam manufacturing.
              </p>
              <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our Ras Al Khaimah Ester Production Facility produces high-quality Ethyl, Butyl, and Methyl Acetates. SYNOL LUBES exports premium lubricants & grease to over 17 countries. We also supply base oils, fuels, solvents, waxes, and white oils globally.
              </p>
              <p className="text-[#1e3a8a] text-base md:text-lg leading-relaxed text-justify" style={{ fontFamily: "'Inter', sans-serif" }}>
                With decades of experience, we focus on quality, innovation, and sustainability to meet the evolving needs of modern industries across the Middle East, Africa, and Indian Subcontinent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SLIDER */}
      <section id="products" className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Products</span>
          </h2>
          <p className="text-[#1e3a8a] text-sm md:text-base mt-2 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Explore our premium petrochemical products engineered for diverse industries.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
          className="pb-10"
        >
          {products.map((prod, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="group w-[300px] h-[250px] bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-[150px] w-full overflow-hidden rounded-t-2xl">
                  <img src={prod.img} alt={prod.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-start">
                  <h3 className="text-base font-semibold text-[#1e3a8a] group-hover:text-blue-600 transition" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {prod.title}
                  </h3>
                  <p className="text-[12px] md:text-sm text-[#1e3a8a] mt-2 text-justify" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {prod.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="text-[#1e3a8a]">Our</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Services</span>
          </h2>
          <p className="text-[#1e3a8a] text-sm md:text-base mt-2 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Comprehensive services and expertise to support global industries.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto justify-center items-stretch">
          {services.map((service, index) => (
            <motion.div key={index} className="flex-1 text-center px-6 py-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
              <div className="text-5xl mb-4 text-blue-700">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{service.title}</h3>
              <p className="text-[#1e3a8a]" style={{ fontFamily: "'Inter', sans-serif" }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-[#1e3a8a]" style={{ fontFamily: "'Poppins', sans-serif" }}>News & Updates</h2>
          <p className="text-[#1e3a8a] text-sm md:text-base mt-2 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>Stay updated with the latest developments at ASIA PETROCHEM.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {news.map((n, i) => (
            <motion.div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
              <h3 className="text-lg font-semibold mb-2 text-[#1e3a8a]" style={{ fontFamily: "'Poppins', sans-serif" }}>{n.title}</h3>
              <p className="text-[#1e3a8a] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{n.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
