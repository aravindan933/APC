// src/pages/HomePage.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// WhatsApp Button
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

const products = [
  {
    title: "Acetates & Esters",
    desc: "High-purity Ethyl Acetate, N-Butyl Acetate, Methyl Acetate and N-Propyl Acetate produced at our Ras Al Khaimah ester facility for coatings, adhesives, printing inks, pharmaceuticals and specialty industries.",
    img: "/img/acetates.webp",
  },
  {
    title: "Ultra-Refined White Oils & Mineral Oils",
    desc: "White oils, light liquid paraffin, microcrystalline waxes and specialty refined base oils for cosmetics, pharmaceuticals, food packaging and industrial lubrication.",
    img: "/public/img/white.webp",
  },
  {
    title: "Solvents & Chemical Intermediates",
    desc: "Comprehensive solvent portfolio including ethanol (all grades), methanol, glycol ethers, toluene, xylene, n-hexane, solvent naphtha, ketones and specialty ethers for coatings, resin, and industrial processes.",
    img: "/img/solvents.webp",
  },
  {
    title: "Lubricants & Greases",
    desc: "Premium engine oils, transmission fluids, industrial oils, automotive greases and specialty formulations manufactured and blended for automotive, industrial and marine applications under strict quality controls.",
    img: "/img/lubricants.webp",
  },
  {
    title: "Polymers, Plastics & Additives",
    desc: "Polymers, plasticisers and additives for molding, extrusion, and engineering applications — serving construction, automotive and packaging industries.",
    img: "/img/polymers.webp",
  },
  {
    title: "Bitumen, Emulsions & Road Products",
    desc: "Construction-grade bitumen, emulsions and cutbacks for roads, waterproofing and industrial coatings with proven adhesion and weather resistance.",
    img: "/img/bitumen.jpg",
  },
  {
    title: "Bulk Storage & Terminal Services",
    desc: "Terminal services at Hamriyah Free Zone — 50,000 CBM storage capacity, hazardous and non-hazardous tanks, ship/barge pipelines, ISO-tank loading/unloading, drumming and container filling for seamless logistics and exports.",
    img: "/public/img/bulk.jpeg",
  },
];

const services = [
  {
    icon: "🏭",
    title: "Manufacturing",
    description: "State-of-the-art production for acetates, lubricants, white oils and plasticisers with strict QC and regulatory compliance.",
  },
  {
    icon: "🚚",
    title: "Distribution",
    description: "Regional and global distribution network serving GCC, Africa and the Indian subcontinent with reliable logistics.",
  },
  {
    icon: "🛢️",
    title: "Terminal & Storage",
    description: "Bulk storage, blending, drumming and ISO-tank services at our Hamriyah terminal for efficient supply chain operations.",
  },
  {
    icon: "🌐",
    title: "Trading & Exports",
    description: "International trading and supply of petrochemicals, solvents and specialty products to diverse industries worldwide.",
  },
];

const news = [
  {
    title: "Facility Capacity Upgrade",
    desc: "We have increased ester production capacity to meet rising regional and export demand.",
  },
  {
    title: "Expanded Export Markets",
    desc: "Our lubricant and white oil exports now reach multiple new countries across Africa and the Middle East.",
  },
  {
    title: "Operational Safety Improvements",
    desc: "New automation and safety systems implemented at our Ras Al Khaimah and Hamriyah facilities.",
  },
];

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif", color: "#1f2937" }}>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src="/video/heroe.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              ASIA PETROCHEM
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-medium mb-6">
              <Typewriter
                options={{
                  strings: [
                    "Based in UAE — Leaders in manufacturing.",
                    "Producers and distributors of solvents & petrochemicals.",
                    "Quality products for global industries.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </p>

            <motion.a
              href="/public/pdf/ASIA PETROCHEMICALS PROFILE.pdf"
              className="inline-block px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Our Products
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <img
              src="/img/homeabout.webp"
              alt="About ASIA PETROCHEM"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>

          <div className="flex-1 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-2xl md:text-3xl mb-4 font-semibold text-[#1e3a8a]"
            >
              About Asia Petrochemicals LLC (APC)
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="space-y-4 text-justify text-sm md:text-base leading-relaxed"
            >
              <p>
                <strong>Asia Petrochemicals LLC (APC)</strong>, established in <strong>1989</strong>, is a UAE-based industrial group with multiple manufacturing and distribution verticals. APC is a leading producer and distributor of solvents, petrochemicals, lubricants, esters, waxes and white oils for regional and global markets.
              </p>
              <p>
                APC operates one of the UAE’s key Solvent Refining and Esters Manufacturing Units in Ras Al Khaimah with a production capacity of <strong>40,000 MTPA</strong>. Our Lubricants Blending & Packaging Facility produces high-quality lubricants and greases for automotive, industrial and specialty applications, exported globally.
              </p>
              <p>
                The Group also owns a Bulk Liquid Chemical Storage Terminal in Hamriyah Free Zone Phase-1, Sharjah with a total storage capacity of <strong>50,000 CBM</strong>. The terminal supports in-house logistics, imports and distribution and is equipped with Class 3 certified storage, dedicated ship/barge pipelines, automated ISO-tank handling and drumming/container filling facilities.
              </p>
              <p>
                APC remains committed to investment in infrastructure, product quality and sustainable operations to serve customers across the Middle East, Africa and the Indian Subcontinent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a8a]">Our Products</h2>
          <p className="mt-2 text-sm md:text-base text-[#374151] max-w-2xl mx-auto">
            A broad portfolio spanning solvents, refined oils, lubricants, polymers, bitumen products and integrated terminal services.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={35}
          loop={true}
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
          grabCursor={true}
        >
          {products.map((prod, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 h-[300px] flex flex-col"
              >
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={prod.img}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col h-[240px]">
                  <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2 line-clamp-1">{prod.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed flex-1">{prod.desc}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* SERVICES */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a8a]">Our Services</h2>
          <p className="mt-2 text-sm md:text-base text-[#374151] max-w-2xl mx-auto">
            End-to-end solutions from manufacturing to logistics and global distribution.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-6 rounded-xl border border-gray-100 text-center"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-[#374151]">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a8a]">News & Updates</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <h3 className="font-semibold text-[#1e3a8a] mb-2">{n.title}</h3>
              <p className="text-sm text-[#374151]">{n.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
