import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotating subtitle phrases
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

  return (
    <div className="w-full text-gray-800 dark:text-gray-200">

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/src/img/About.png"
          alt="Petrochemical Facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
              About Asia Petrochemicals LLC
            </h1>
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-white/90 font-medium h-6 md:h-8"
            >
              {phrases[currentIndex]}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 px-6 md:px-12 flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">What We Do</h2>
          <p className="mb-4 leading-relaxed text-justify">
            ASIA PETROCHEMICALS was established in 1989 in the UAE, expanding the Group’s footprint in the Middle East for Manufacturing, Trading, Distribution, and Storage of Petrochemicals, Petroleum Products, Fuels, and Polymers. Our products serve a wide range of applications including Pharmaceuticals, Industrial and Automotive Lubricants, Paints and Coatings, Aromatics, Adhesives, Food Packaging, Cosmetics, Plastics, and Foam Manufacturing.
          </p>
          <p className="mb-4 leading-relaxed text-justify">
            The company’s state-of-the-art Ester Production Facility in Ras Al Khaimah, UAE, has a capacity of 36,000 MTPA for various acetates. It manufactures high-quality Ethyl, Butyl, and Methyl Acetates and is integrated with storage terminals for both feedstocks and finished products.
          </p>
          <p className="mb-4 leading-relaxed text-justify">
            The Lubricants and Grease Manufacturing unit under SYNOL LUBES exports to over 17 countries across Africa and the Middle East.
          </p>
          <p className="mb-4 leading-relaxed text-justify">
            Our trading division deals in Base Oils, Bitumen, Fuels, and Solvents with a wide distribution network throughout the GCC, Africa, and the Indian Subcontinent. We also produce Waxes, Jellies, and Paraffin White Oils for various applications.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/src/img/Aboutus.webp"
            alt="Petrochemical Facility"
            className="w-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Facilities */}
      <section className="py-12 px-6 md:px-12 flex flex-col md:flex-row-reverse items-stretch max-w-7xl mx-auto gap-12 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Our Facilities</h2>
          <p className="mb-4 leading-relaxed text-justify">
            Our Ester Production Facility produces high-quality acetates with integrated storage terminals, while the Lubricants and Grease Manufacturing unit under SYNOL LUBES ensures premium products exported worldwide.
          </p>
          <p className="mb-4 leading-relaxed text-justify">
            The company maintains strategic alliances and consistently invests in asset development to remain at the forefront of the chemicals industry.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 h-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/src/img/AboutFacility.jpg"
            alt="Ester Production Facility"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 md:px-12 flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12 bg-white dark:bg-gray-800">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <motion.span
              animate={{ color: ["#1E3A8A", "#10B981", "#1E3A8A"] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              Why Choose Us?
            </motion.span>
          </h2>
          <ul className="list-disc list-inside space-y-3 text-justify">
            <li>Over 30 years of experience in petrochemicals.</li>
            <li>Global distribution and trusted partnerships.</li>
            <li>State-of-the-art manufacturing facilities.</li>
            <li>Commitment to sustainability and innovation.</li>
            <li>Highly skilled technical team ensuring quality standards.</li>
            <li>Customer-centric approach with 24/7 support.</li>
          </ul>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video
            src="/src/video/hero.mp4"
            controls
            className="w-full rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Products & Services */}
      <section className="py-12 px-6 md:px-12 bg-white dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Products & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">{product}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                {`High-quality ${product.toLowerCase()} for industrial, commercial, and global markets, backed by strict quality control and sustainable practices.`}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 px-6 md:px-12 max-w-full">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Core Values</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex-1 text-center px-6 py-8 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-6xl mb-4 text-blue-700">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
{/* Closing Statement */}
<section className="py-12 px-6 md:px-12 text-center max-w-full bg-gray-50 dark:bg-gray-900">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-3xl mx-auto"
  >
    <h2 className="text-4xl font-bold text-blue-700 mb-4">
      Excellence Through Innovation & Integrity
    </h2>
    <h3 className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
      Delivering Sustainable Solutions Across the Globe
    </h3>
    <p className="mb-4 leading-relaxed text-justify">
      Over the past three decades, ASIA PETROCHEMICALS has evolved through innovation, strategic alliances, and asset development across the chemicals spectrum — continuing to lead the petrochemical industry with quality, commitment, and customer satisfaction.
    </p>
    <p className="mb-4 leading-relaxed text-justify">
      With state-of-the-art manufacturing facilities, a highly skilled team, and a global distribution network, we ensure our clients receive reliable, safe, and innovative petrochemical solutions every time.
    </p>
    <p className="leading-relaxed text-justify font-semibold text-blue-700">
      Join us in shaping the future of the chemical industry with excellence, sustainability, and integrity.
    </p>
  </motion.div>
</section>

    </div>
  );
};

export default AboutUs;
