import { motion } from "framer-motion";

const HomePage = () => {
  const services = [
    {
      icon: "🛢️",
      title: "Petrochemicals Manufacturing",
      description:
        "High-quality petrochemical products for pharmaceuticals, paints, adhesives, plastics, and more.",
    },
    {
      icon: "⚙️",
      title: "Lubricants & Greases",
      description:
        "Industrial and automotive lubricants under SYNOL LUBES brand, exported to 17+ countries.",
    },
    {
      icon: "🚚",
      title: "Trading & Distribution",
      description:
        "Wide distribution network for base oils, bitumen, fuels, solvents, waxes, jellies, and white oils.",
    },
    {
      icon: "💡",
      title: "Innovation & Growth",
      description:
        "State-of-the-art ester production facility, continuous expansion, and strategic alliances.",
    },
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1539185441755-769473a23570')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Asia Petrochemicals LLC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Manufacturing, Trading & Distribution of Petrochemicals since 1989
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Our Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Providing world-class petrochemical solutions with production, trading, and distribution excellence.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex-1 text-center p-8 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="text-6xl mb-4 text-blue-600">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          <motion.img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Ester Production Facility"
            className="rounded-3xl w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-gray-700 dark:text-gray-300"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              State-of-the-Art Facilities
            </h2>
            <p className="mb-4 leading-relaxed">
              Our Ester Production Facility in Ras Al Khaimah manufactures high-quality Ethyl, Butyl, and Methyl Acetates with a capacity of 36,000 MTPA.
            </p>
            <p className="mb-4 leading-relaxed">
              The Lubricants and Grease Manufacturing unit under SYNOL LUBES exports products to over 17 countries worldwide.
            </p>
            <p className="mb-4 leading-relaxed">
              Strategic alliances and continuous expansion allow us to remain leaders in the petrochemical industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 w-full bg-blue-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Partner with Asia Petrochemicals
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Join us in shaping the future of petrochemical manufacturing, trading, and distribution.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
