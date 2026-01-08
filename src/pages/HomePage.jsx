"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import LightRays from "../components/LightRays/LightRays";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./HomePage.css";

gsap.registerPlugin(ScrollTrigger);

// About Section Content
const aboutContent = {
  title: "About Asia Petrochemicals LLC (APC)",
  paragraphs: [
    "Asia Petrochemicals LLC (APC), established in 1989, is a UAE-based industrial group with multiple manufacturing and distribution verticals. APC is a leading producer and distributor of solvents, petrochemicals, lubricants, esters, waxes and white oils for regional and global markets.",
    "APC operates one of the UAE’s key Solvent Refining and Esters Manufacturing Units in Ras Al Khaimah with a production capacity of 40,000 MTPA. Our Lubricants Blending & Packaging Facility produces high-quality lubricants and greases for automotive, industrial and specialty applications, exported globally.",
    "The Group also owns a Bulk Liquid Chemical Storage Terminal in Hamriyah Free Zone Phase-1, Sharjah with a total storage capacity of 50,000 CBM. The terminal supports in-house logistics, imports and distribution and is equipped with Class 3 certified storage, dedicated ship/barge pipelines, automated ISO-tank handling and drumming/container filling facilities.",
    "APC remains committed to investment in infrastructure, product quality and sustainable operations to serve customers across the Middle East, Africa and the Indian Subcontinent.",
  ],
};

// Hero Images - Industrial facility images
// NOTE: Please add these images to public/img/ folder:
// - hero-industrial-1.jpg (worm gear lubrication)
// - hero-industrial-2.jpg (storage tanks with "DISTILLAT" labels)
// - hero-industrial-3.jpg (facility overview with "ap" logo building)
// - hero-industrial-4.jpg (blue valves and piping)
// - hero-industrial-5.jpg (facility with yellow staircase)
// - hero-industrial-6.jpg (piping close-up)
// Using fallback images until new ones are added
const heroImages = [
  "/img/hero-industrial-1.jpg", // Worm gear lubrication
  "/img/hero-industrial-2.jpg", // Storage tanks
  "/img/hero-industrial-3.jpg", // Facility overview
  "/img/hero-industrial-4.jpg", // Piping and valves
  "/img/hero-industrial-5.jpg", // Facility building
  "/img/hero-industrial-6.jpg", // Piping close-up
  // Fallback images if above don't exist
  "/img/hero-industry-7.jpg",
  "/img/homeabout.webp",
];

// Group Verticals Data
const groupVerticals = [
  { name: "Acetates Manufacturing", color: "bg-red-500", path: "/acetates-manufacturing" },
  { name: "Petroleum & Derivatives", color: "bg-purple-500", path: "/petroleum-derivatives" },
  { name: "Solvents & Chemicals", color: "bg-green-500", path: "/solvents-chemicals" },
  { name: "Lubricants Manufacturing", color: "bg-yellow-500", path: "/lubricants-manufacturing" },
  { name: "Polymers & Plastics", color: "bg-cyan-500", path: "/polymers-plastics" },
  { name: "Bitumen, Emulsion & Cutbacks", color: "bg-violet-500", path: "/bitumen,-emulsion-cutbacks" },
  { name: "Waxes, Jellies and White Oils", color: "bg-orange-500", path: "/waxes,-jellies-and-white-oils" },
  { name: "Plasticizers", color: "bg-pink-500", path: "/plasticizers" },
  { name: "Chemical Storage Terminal", color: "bg-teal-500", path: "/chemical-storage-terminal" },
];

// Products, Services, News
const products = [
  {
    title: "Acetates & Esters",
    desc: "High-purity Ethyl Acetate, N-Butyl Acetate, Methyl Acetate and N-Propyl Acetate produced at our Ras Al Khaimah ester facility.",
    img: "/img/acetates.webp",
  },
  {
    title: "Ultra-Refined White Oils & Mineral Oils",
    desc: "White oils, light liquid paraffin, microcrystalline waxes and specialty refined base oils for cosmetics and pharmaceuticals.",
    img: "/img/white.webp",
  },
  {
    title: "Solvents & Chemical Intermediates",
    desc: "Comprehensive solvent portfolio including ethanol, methanol, glycol ethers, toluene, xylene, n-hexane and ketones.",
    img: "/img/solvents.webp",
  },
  {
    title: "Lubricants & Greases",
    desc: "Premium engine oils, transmission fluids, industrial oils, automotive greases and specialty formulations.",
    img: "/img/lubricants.webp",
  },
];

const services = [
  {
    icon: "🏭",
    title: "Manufacturing",
    description:
      "State-of-the-art production for acetates, lubricants, white oils and plasticisers with strict QC and regulatory compliance.",
  },
  {
    icon: "🚚",
    title: "Distribution",
    description:
      "Regional and global distribution network serving GCC, Africa and the Indian subcontinent with reliable logistics.",
  },
  {
    icon: "🛢️",
    title: "Terminal & Storage",
    description:
      "Bulk storage, blending, drumming and ISO-tank services at our Hamriyah terminal for efficient supply chain operations.",
  },
  {
    icon: "🌐",
    title: "Trading & Exports",
    description:
      "International trading and supply of petrochemicals, solvents and specialty products to diverse industries worldwide.",
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

export default function HomePage() {
  const aboutImageRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const { scrollY } = useScroll();
  const heroHeight = 700;
  const y = useTransform(scrollY, [0, heroHeight], [0, 300]);
  const x = useTransform(scrollY, [0, heroHeight], [0, -200]);
  const scale = useTransform(scrollY, [0, heroHeight], [1, 0.5]);
  const opacity = useTransform(scrollY, [0, heroHeight / 2], [1, 1]);

  const productRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      aboutImageRef.current,
      { opacity: 0, x: 150, y: -150, scale: 1.1, rotation: 5 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".about-text",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    productRefs.current.forEach((card, i) => {
      if (!card) return;
      const img = card.querySelector(".prod-img");
      const content = card.querySelector(".prod-content");

      gsap.fromTo(
        img,
        { opacity: 0, y: -150 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );

      gsap.fromTo(
        content,
        { opacity: 0, x: i % 2 === 0 ? -160 : 160 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 80%" },
        }
      );

      gsap.to(card, {
        y: () => i * -100,
        scale: () => 1 - i * 0.05,
        scrollTrigger: {
          trigger: card,
          start: "top top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });
    });
  }, []);

  // Social media links
  const socialMediaLinks = [
    { 
      Icon: FaFacebook, 
      label: "Facebook", 
      bgColor: "#1877F2", 
      url: "#",
      iconColor: "white"
    },
    { 
      Icon: FaTwitter, 
      label: "X (Twitter)", 
      bgColor: "#000000", 
      url: "#",
      iconColor: "white"
    },
    { 
      Icon: FaLinkedin, 
      label: "LinkedIn", 
      bgColor: "#0077B5", 
      url: "#",
      iconColor: "white"
    },
    { 
      Icon: FaYoutube, 
      label: "YouTube", 
      bgColor: "#FF0000", 
      url: "#",
      iconColor: "white"
    },
    { 
      Icon: FaInstagram, 
      label: "Instagram", 
      bgColor: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)", 
      url: "#",
      iconColor: "white",
      isGradient: true
    },
    { 
      Icon: FaEnvelope, 
      label: "Email", 
      bgColor: "#9CA3AF", 
      url: "mailto:info@asia-petrochem.com",
      iconColor: "white"
    },
  ];

  return (
    <div className="relative font-sans text-slate-900">
      {/* Fixed Social Media Sidebar - Right Side */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1.5 pr-0">
        {socialMediaLinks.map(({ Icon, label, bgColor, url, iconColor, isGradient }, index) => (
          <motion.a
            key={label}
            href={url}
            target={url.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, x: -5 }}
            className="w-11 h-11 flex items-center justify-center text-white rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            style={{
              background: isGradient ? bgColor : bgColor,
            }}
          >
            <Icon size={18} style={{ color: iconColor }} />
          </motion.a>
        ))}
      </div>

      {/* MODERN HERO SECTION WITH IMAGE SLIDESHOW */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Image Slideshow - Full Screen */}
        <div className="absolute inset-0 z-0 hero-slideshow">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            slidesPerView={1}
            loop
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="h-full w-full"
            speed={1000}
          >
            {heroImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full">
                  {/* Image with overlay */}
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url(${img})`,
                      backgroundColor: '#1e293b' // Fallback color if image fails to load
                    }}
                  >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Light Rays Effect - Subtle */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#3B82F6"
            raysSpeed={1.2}
            lightSpread={1.2}
            rayLength={2}
            pulsating={true}
          />
        </div>

        {/* Hero Content - Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              <span className="block mb-1 text-2xl md:text-3xl lg:text-4xl">Welcome to</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Asia Petrochemicals
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl mt-3 font-semibold text-blue-200">
                - UAE
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3">
              The Global Leading Manufacturers And Suppliers of High Performace, High Quality Chemical Products.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              ASIA PETROCHEMICALS LLC, based in UAE is one of the fastest growing name in Manufacturing, Distribution & International Trade of Chemicals and Downstream Petrochemicals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <a
              href="#products"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 text-lg"
            >
              Explore Products
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-lg"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div> */}
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        ref={aboutSectionRef}
        className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img
              ref={aboutImageRef}
              src={heroImages[0] || "/img/homeabout.webp"}
              alt="About Image"
              className="w-[400px] h-[400px] rounded-xl shadow-xl object-cover transition-all duration-700"
            />
          </div>
          <div className="flex-1 text-left about-text">
            <h2 className="text-2xl md:text-3xl mb-4 font-semibold text-[#1e3a8a]">
              {aboutContent.title}
            </h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-justify">
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION (GSAP Scroll-Stack) */}
      <section id="products" className="relative w-full bg-white pb-[28vh]">
        <h1 className="text-3xl font-bold text-center text-[#1e3a8a] mb-8 pt-10">
          Our Products
        </h1>
        <p className="mt-2 text-sm md:text-base text-[#374151] max-w-2xl mx-auto">
          A broad portfolio spanning solvents, refined oils, lubricants,
          polymers, bitumen products and integrated terminal services.
        </p>

        {products.map((prod, i) => (
          <div
            key={i}
            ref={(el) => (productRefs.current[i] = el)}
            className="product-card sticky top-24 
            bg-white rounded-2xl shadow-xl px-6 py-10 
            flex flex-col md:flex-row items-center 
            max-w-4xl mx-auto gap-10"
          >
            <div
              className={`prod-content max-w-md ${
                i % 2 !== 0 ? "order-2 text-right" : "order-1 text-right"
              }`}
            >
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-3">
                {prod.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{prod.desc}</p>
            </div>
            <img
              src={prod.img}
              className="prod-img w-[150px] h-[150px] object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a8a]">
            Our Services
          </h2>
          <p className="mt-2 text-sm md:text-base text-[#374151] max-w-2xl mx-auto">
            End-to-end solutions from manufacturing to logistics and global
            distribution.
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

      {/* NEWS SECTION */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a8a]">
            News & Updates
          </h2>
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

      {/* GROUP VERTICALS SECTION */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1e3a8a 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1e3a8a] mb-4">
              Group Verticals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of specialized business divisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {groupVerticals.map((vertical, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <Link to={vertical.path}>
                  <div className={`${vertical.color} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:rotate-1 relative overflow-hidden`}>
                    {/* Diagonal Stripes Pattern */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        rgba(255,255,255,0.1) 10px,
                        rgba(255,255,255,0.1) 20px
                      )`
                    }}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
                        {vertical.name}
                      </h3>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="absolute bottom-4 right-4 text-white text-2xl"
                    >
                      →
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
