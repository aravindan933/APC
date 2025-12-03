"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import LightRays from "../components/LightRays/LightRays";
import "swiper/css";
import "swiper/css/pagination";

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

// Hero Slider Slides
const heroSlides = [
  {
    title: "Manufacturing Petrochemicals",
    subtitle: "High-quality solutions for industries worldwide",
    images: ["/img/homeabout.webp", "/img/homeabout2.webp"],
  },
  {
    title: "Trading Petrochemicals Across the GCC",
    subtitle: "Reliable supply chain & global distribution",
    images: ["/img/homeabout2.webp", "/img/homeabout3.webp"],
  },
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

  return (
    <div className="relative font-sans text-slate-900">
      {/* HERO SLIDER WITH LIGHT RAYS */}
      <section className="relative w-full h-[700px] flex items-center justify-center bg-white overflow-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FF0F0FFF"
          raysSpeed={1.2}
          lightSpread={1}
          rayLength={2}
          pulsating={true}
        />
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveHeroIndex(swiper.realIndex)}
          className="h-full w-full relative z-10"
        >
          {heroSlides.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="max-w-7xl mx-auto px-6 md:px-20 h-full flex flex-col md:flex-row items-center justify-center gap-15">
                <div className="flex-1 text-left z-20">
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                    {slide.title}
                  </h1>
                  <div className="mb-6 text-lg md:text-xl text-slate-100">
                    <Typewriter
                      options={{
                        strings: [slide.subtitle],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 40,
                      }}
                    />
                  </div>
                  <a
                    href="#products"
                    className="inline-block px-6 py-3 bg-sky-600 text-white font-medium rounded-lg shadow hover:bg-sky-700 transition"
                  >
                    Explore Products
                  </a>
                </div>
                <div className="flex-1 relative flex justify-center gap-8 z-10">
                  {slide.images.map((img, idx) => (
                    <motion.img
                      key={idx}
                      src={img}
                      alt={`hero-${idx}`}
                      className="w-[350px] h-[300px] rounded-2xl shadow-2xl object-cover"
                      style={{
                        y: y,
                        x: x,
                        scale: scale,
                        opacity: opacity,
                        rotate: idx === 0 ? -5 : 5,
                      }}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ABOUT SECTION */}
      <section
        ref={aboutSectionRef}
        className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img
              ref={aboutImageRef}
              src={heroSlides[activeHeroIndex].images[0]}
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

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
