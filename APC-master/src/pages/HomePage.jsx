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
import FloatingBubbles from "../components/Effects/FloatingBubbles";
import BoilingBubbles from "../components/Effects/BoilingBubbles";

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
const heroImages = [
  "/img/hero-industrial-1.jpg",
  "/img/hero-industrial-2.jpg",
  "/img/hero-industrial-3.jpg",
  "/img/hero-industrial-4.jpg",
  "/img/hero-industrial-5.jpg",
  "/img/hero-industrial-6.jpg",
  "/img/hero-industry-7.jpg",
  "/img/homeabout.webp",
];

// Group Verticals Data
const groupVerticals = [
  { name: "Acetates Manufacturing", color: "bg-primary-700", path: "/acetates-manufacturing" },
  { name: "Petroleum & Derivatives", color: "bg-secondary-600", path: "/petroleum-derivatives" },
  { name: "Solvents & Chemicals", color: "bg-primary-600", path: "/solvents-chemicals" },
  { name: "Lubricants Manufacturing", color: "bg-secondary-700", path: "/lubricants-manufacturing" },
  { name: "Polymers & Plastics", color: "bg-primary-500", path: "/polymers-plastics" },
  { name: "Bitumen, Emulsion & Cutbacks", color: "bg-secondary-500", path: "/bitumen,-emulsion-cutbacks" },
  { name: "Waxes, Jellies and White Oils", color: "bg-primary-800", path: "/waxes,-jellies-and-white-oils" },
  { name: "Plasticizers", color: "bg-secondary-800", path: "/plasticizers" },
  { name: "Chemical Storage Terminal", color: "bg-primary-900", path: "/chemical-storage-terminal" },
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
  const parallaxImgRef = useRef(null);
  const heroContentRef = useRef(null);
  const productRefs = useRef([]);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    // Parallax animation for the decorative image
    if (parallaxImgRef.current) {
      gsap.to(parallaxImgRef.current, {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 520,
        ease: "none",
      });
    }

    // Fade out hero content on scroll
    // Hero content animation is handled by framer-motion for entrance,
    // and we removed the scroll-based fade-out to keep it "proper".

    // About Image Animation
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

    // About Text Animation
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

  const socialMediaLinks = [
    { Icon: FaFacebook, label: "Facebook", bgColor: "#1877F2", url: "#", iconColor: "white" },
    { Icon: FaTwitter, label: "X (Twitter)", bgColor: "#000000", url: "#", iconColor: "white" },
    { Icon: FaLinkedin, label: "LinkedIn", bgColor: "#0077B5", url: "#", iconColor: "white" },
    { Icon: FaYoutube, label: "YouTube", bgColor: "#FF0000", url: "#", iconColor: "white" },
    { Icon: FaInstagram, label: "Instagram", bgColor: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)", url: "#", iconColor: "white", isGradient: true },
    { Icon: FaEnvelope, label: "Email", bgColor: "#9CA3AF", url: "mailto:info@asia-petrochem.com", iconColor: "white" },
  ];

  return (
    <div className="relative font-sans text-slate-900">
      {/* Social Media Sidebar */}
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
            style={{ background: bgColor }}
          >
            <Icon size={18} style={{ color: iconColor }} />
          </motion.a>
        ))}
      </div>

      {/* HERO SECTION */}
      <section id="hero" className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        <BoilingBubbles />

        {/* Fullscreen slideshow background */}
        <div className="absolute inset-0 z-0 hero-slideshow">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{ clickable: true }}
            navigation={true}
            className="h-full w-full"
            speed={1000}
            onSlideChange={(swiper) => setActiveHeroIndex(swiper.realIndex)}
          >
            {heroImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: `url(${img})`, backgroundColor: '#0f172a' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        {/* Light Rays */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <LightRays raysOrigin="top-center" raysColor="#3B82F6" raysSpeed={1.2} lightSpread={1.2} rayLength={2} pulsating={true} />
        </div>

        {/* Hero Content */}
        <div ref={heroContentRef} className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight"
          >
            <span className="block text-xl md:text-2xl uppercase tracking-[0.3em] font-semibold text-blue-400 mb-6 antialiased">
              Asia Petrochemicals LLC
            </span>
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Fueling Global
            </span>
            <span className="block text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] mt-2">
              Industries
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 max-w-xl"
          >
            <p className="text-lg md:text-xl text-white font-semibold leading-relaxed mb-6">
              The Global Leading Manufacturers And Suppliers of <br className="hidden md:block" /> High Performance, High Quality Chemical Products since 1989.
            </p>
            <div className="w-24 h-1.5 bg-blue-500 mb-6 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
              ASIA PETROCHEMICALS LLC, based in UAE is one of the fastest growing names in Manufacturing, Distribution &amp; International Trade of Chemicals and Downstream Petrochemicals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-start gap-6 mt-10"
          >
            <a href="#products" className="px-12 py-4 bg-blue-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-lg">
              Explore Products
            </a>
            <a href="#about" className="px-12 py-4 bg-white/5 backdrop-blur-xl text-white font-bold rounded-full border-2 border-white/50 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-lg">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" ref={aboutSectionRef} className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img
              ref={aboutImageRef}
              src={heroImages[activeHeroIndex]}
              alt="About Image"
              className="w-[400px] h-[400px] rounded-xl shadow-xl object-cover transition-all duration-700"
            />
          </div>
          <div className="flex-1 text-left about-text">
            <h2 className="text-2xl md:text-3xl mb-4 font-semibold text-primary-900">
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

      {/* PRODUCTS SECTION */}
      <section id="products" className="relative w-full bg-white pb-[28vh]">
        <div className="max-w-6xl mx-auto text-center mb-16 pt-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A broad portfolio spanning solvents, refined oils, lubricants, polymers, bitumen products and integrated terminal services.
          </p>
        </div>

        {
          products.map((prod, i) => (
            <div
              key={i}
              ref={(el) => (productRefs.current[i] = el)}
              className="product-card sticky top-24 bg-white rounded-2xl shadow-xl px-6 py-10 flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-10 mb-10"
            >
              <div className={`prod-content max-w-md ${i % 2 !== 0 ? "md:order-2" : "md:order-1"} flex-1`}>
                <h3 className="text-2xl font-semibold text-primary-900 mb-3">{prod.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prod.desc}</p>
              </div>
              <div className={`flex-shrink-0 ${i % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
                <img src={prod.img} alt={prod.title} className="prod-img w-[200px] h-[200px] object-cover rounded-xl shadow-lg" />
              </div>
            </div>
          ))
        }
      </section >

      {/* SERVICES SECTION */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-900">Our Services</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            End-to-end solutions from manufacturing to logistics and global distribution.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-primary-900">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section >

      {/* NEWS SECTION */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-900">News & Updates</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="font-bold text-primary-900 mb-3 text-lg">{n.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{n.desc}</p>
            </motion.div>
          ))}
        </div>
      </section >

      {/* VERTICALS SECTION */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
        <FloatingBubbles />
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, theme('colors.primary.900') 1px, transparent 0)`,
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 mb-4">Group Verticals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our specialized business divisions</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {groupVerticals.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link to={v.path} className="block h-full">
                  <div className={`${v.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]" />
                    <div className="relative z-10">
                      <h3 className="text-white font-bold text-xl leading-tight mb-4 drop-shadow-md">{v.name}</h3>
                      <div className="w-10 h-1 bg-white/30 rounded-full group-hover:w-16 transition-all duration-300" />
                    </div>
                    <div className="relative z-10 flex justify-end">
                      <span className="text-white/80 group-hover:text-white transition-colors">Learn more →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      <WhatsAppButton />
    </div>
  );
}
