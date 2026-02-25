import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Reusable animated counter ───────────────────────────────────────────────
const Counter = ({ from, to, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = from;
    const step = Math.ceil((to - from) / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, from, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ─── Letter-by-letter reveal ─────────────────────────────────────────────────
const LetterReveal = ({ text, className }) => (
  <motion.h1
    className={className}
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
  >
    {text.split("").map((ch, i) => (
      <motion.span
        key={i}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        transition={{ ease: "easeOut" }}
        style={{ display: "inline-block", whiteSpace: ch === " " ? "pre" : "normal" }}
      >
        {ch}
      </motion.span>
    ))}
  </motion.h1>
);

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const phrases = [
    "Manufacturing Petrochemicals since 1989",
    "Trading Petrochemicals across the GCC",
    "Distributing quality chemicals worldwide",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const values = [
    { icon: "💡", title: "Innovation", description: "Pioneering advanced petrochemical solutions." },
    { icon: "🤝", title: "Collaboration", description: "Building strong industry partnerships." },
    { icon: "📈", title: "Growth", description: "Consistent expansion across regions." },
    { icon: "⚖️", title: "Integrity", description: "Ethical business practices and quality." },
  ];

  const products = [
    "Acetates Manufacturing",
    "Petroleum & Derivatives",
    "Solvents & Chemicals",
    "Lubricants Manufacturing",
    "Polymers & Plastics",
    "Bitumen, Emulsion & Cutbacks",
    "Waxes, Jellies and White Oils",
  ];

  const stats = [
    { label: "Years Experience", value: 35, suffix: "+" },
    { label: "Export Countries", value: 17, suffix: "+" },
    { label: "Production MTPA", value: 36000, suffix: "" },
    { label: "Product Lines", value: 7, suffix: "+" },
  ];

  const listItems = [
    "Over 30 years of experience in petrochemicals.",
    "Global distribution and trusted partnerships.",
    "State-of-the-art manufacturing facilities.",
    "Commitment to sustainability and innovation.",
    "Highly skilled technical team ensuring quality standards.",
    "Customer-centric approach with 24/7 support.",
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200">

      {/* ── 1. HERO — Letter-by-letter reveal + rotating subtitle ── */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/img/About.png"
          alt="Petrochemical Facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Animated gradient sweep overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ background: "linear-gradient(120deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.6) 100%)" }}
        />
        <div className="relative z-10 text-center px-6">
          <LetterReveal
            text="About Asia Petrochemicals LLC"
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white"
          />
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-white/90 font-medium"
          >
            {phrases[currentIndex]}
          </motion.p>
        </div>
      </section>

      {/* ── 2. STATS — count-up on scroll ── */}
      <section className="py-12 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white px-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-extrabold mb-1">
                <Counter from={0} to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm uppercase tracking-widest text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. WHAT WE DO — clip-path wipe from left + image zoom-in ── */}
      <section className="py-16 px-6 md:px-12 flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12">
        <motion.div
          className="md:w-1/2"
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">What We Do</h2>
          <p className="mb-4 leading-relaxed text-justify">
            ASIA PETROCHEMICALS was established in 1989 in the UAE, expanding the Group's footprint in the Middle East for Manufacturing, Trading, Distribution, and Storage of Petrochemicals, Petroleum Products, Fuels, and Polymers. Our products serve a wide range of applications including Pharmaceuticals, Industrial and Automotive Lubricants, Paints and Coatings, Aromatics, Adhesives, Food Packaging, Cosmetics, Plastics, and Foam Manufacturing.
          </p>
          <p className="mb-4 leading-relaxed text-justify">
            The company's state-of-the-art Ester Production Facility in Ras Al Khaimah, UAE, has a capacity of 36,000 MTPA for various acetates. It manufactures high-quality Ethyl, Butyl, and Methyl Acetates and is integrated with storage terminals for both feedstocks and finished products.
          </p>
          <p className="mb-4 leading-relaxed text-justify">
            The Lubricants and Grease Manufacturing unit under SYNOL LUBES exports to over 17 countries across Africa and the Middle East.
          </p>
          <p className="leading-relaxed text-justify">
            Our trading division deals in Base Oils, Bitumen, Fuels, and Solvents with a wide distribution network throughout the GCC, Africa, and the Indian Subcontinent.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ scale: 1.15, opacity: 0, rotate: -3 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/img/about.jpg"
            alt="Petrochemical Facility"
            className="w-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* ── 4. FACILITIES — slide down + parallax drift from right ── */}
      <section className="py-16 px-6 md:px-12 flex flex-col md:flex-row-reverse items-stretch max-w-7xl mx-auto gap-12 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="md:w-1/2 flex flex-col justify-center"
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">Our Facilities</h2>
          <p className="mb-4 leading-relaxed text-justify">
            Our Ester Production Facility produces high-quality acetates with integrated storage terminals, while the Lubricants and Grease Manufacturing unit under SYNOL LUBES ensures premium products exported worldwide.
          </p>
          <p className="leading-relaxed text-justify">
            The company maintains strategic alliances and consistently invests in asset development to remain at the forefront of the chemicals industry.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 h-full overflow-hidden rounded-2xl"
          initial={{ x: 120, opacity: 0, skewY: 3 }}
          whileInView={{ x: 0, opacity: 1, skewY: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/img/about2.png"
            alt="Ester Production Facility"
            className="w-full h-full object-cover shadow-lg"
          />
        </motion.div>
      </section>

      {/* ── 5. WHY CHOOSE US — staggered list items bounce in + video zoom ── */}
      <section className="py-16 px-6 md:px-12 flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12 bg-white dark:bg-gray-800">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-primary-700"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ type: "spring", stiffness: 160 }}
          >
            Why Choose Us?
          </motion.h2>
          <ul className="space-y-3">
            {listItems.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 180, damping: 14 } }
                }}
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-primary-600 flex-shrink-0" />
                <span className="text-justify">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true }}
        >
          <video
            src="/video/heroe.mp4"
            controls
            className="w-full rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* ── 6. PRODUCTS — flip-card stagger from below ── */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <motion.h2
          className="text-4xl font-bold text-center text-primary-700 mb-12"
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Products &amp; Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer border-l-4 border-primary-600"
              initial={{ opacity: 0, rotateX: -30, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-700">{product}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-justify">
                {`High-quality ${product.toLowerCase()} for industrial, commercial, and global markets, backed by strict quality control.`}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 7. CORE VALUES — radiate in from center (scale + fade) ── */}
      <section className="py-16 px-6 md:px-12 max-w-full bg-gray-50 dark:bg-gray-900">
        <motion.h2
          className="text-4xl font-bold text-center text-primary-700 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "backOut" }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex-1 text-center px-6 py-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.6, rotate: index % 2 === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 12, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 + index, ease: "easeInOut" }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-primary-700">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 8. CLOSING — cinematic fade up with blur ── */}
      <section className="py-16 px-6 md:px-12 text-center max-w-full bg-white dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary-700 mb-4">
            Excellence Through Innovation &amp; Integrity
          </h2>
          <h3 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Delivering Sustainable Solutions Across the Globe
          </h3>
          <p className="mb-4 leading-relaxed text-justify">
            Over the past three decades, ASIA PETROCHEMICALS has evolved through innovation, strategic alliances, and asset development across the chemicals spectrum — continuing to lead the petrochemical industry with quality, commitment, and customer satisfaction.
          </p>
          <p className="mb-4 leading-relaxed text-justify">
            With state-of-the-art manufacturing facilities, a highly skilled team, and a global distribution network, we ensure our clients receive reliable, safe, and innovative petrochemical solutions every time.
          </p>
          <motion.p
            className="leading-relaxed font-semibold text-primary-700"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            Join us in shaping the future of the chemical industry with excellence, sustainability, and integrity.
          </motion.p>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutUs;
