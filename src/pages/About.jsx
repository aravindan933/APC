import { motion } from "framer-motion";

const AboutUs = () => {
  const values = [
    { icon: "💡", title: "Innovation", description: "Pioneering advanced petrochemical solutions." },
    { icon: "🤝", title: "Collaboration", description: "Building strong industry partnerships." },
    { icon: "📈", title: "Growth", description: "Consistent expansion across regions." },
    { icon: "⚖️", title: "Integrity", description: "Ethical business practices and quality." },
  ];

  return (
    <div className="w-full text-gray-800 dark:text-gray-200">

      {/* Hero Section */}
      <section
        className="relative h-[60vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1539185441755-769473a23570")` }}
      >
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
            <p className="text-lg md:text-xl text-white/90">
              Manufacturing, Trading & Distribution of Petrochemicals since 1989
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 md:px-12 flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12">
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
            src="https://images.unsplash.com/photo-1549887534-4b37b9e6d3cf"
            alt="Petrochemical Facility"
            className="w-full object-cover rounded-2xl"
          />
        </motion.div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-6 md:px-12 flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto gap-12 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="md:w-1/2"
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

        <motion.img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Ester Production Facility"
          className="md:w-1/2 w-full object-cover rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-12 max-w-full">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Core Values</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex-1 text-center px-6 py-8"
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
      <section className="py-20 px-6 md:px-12 text-center max-w-full bg-gray-50 dark:bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-blue-700 mb-6"
        >
          Excellence Through Innovation & Integrity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl mx-auto leading-relaxed text-justify"
        >
          Over the past three decades, ASIA PETROCHEMICALS has evolved through innovation, strategic alliances, and asset development across the chemicals spectrum — continuing to lead the petrochemical industry with quality, commitment, and customer satisfaction.
        </motion.p>
      </section>
    </div>
  );
};

export default AboutUs;
