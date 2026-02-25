import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaRocket, FaCheckCircle, FaPlus, FaMinus, FaWhatsapp } from "react-icons/fa";

// Refactored rotating text component with proper state management
const RotatingText = ({ texts, interval = 2500 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span className="bg-cyan-300 text-black rounded-lg inline-block overflow-hidden px-2 sm:px-3 md:px-4">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const Contacts = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2500);
    setFormData({ name: "", email: "", message: "" });
  };

  const faqItems = [
    { question: "What types of petrochemical products do you manufacture?", answer: "We produce acetates, solvents, lubricants, waxes, and polymers for industries like pharmaceuticals, automotive, paints, plastics, and coatings." },
    { question: "Where are your manufacturing facilities located?", answer: "Our main Ester Production Facility is in Ras Al Khaimah, UAE, integrated with storage terminals for feedstocks and finished products." },
    { question: "How can I become a distributor or partner?", answer: "We have a wide distribution network across the GCC, Africa, and the Indian Subcontinent. Contact our team for partnership opportunities." },
    { question: "Which industries can benefit from your products?", answer: "Our products are used in pharmaceuticals, automotive lubricants, paints, adhesives, food packaging, cosmetics, plastics, and foam manufacturing." },
  ];

  const contactOptions = [
    {
      icon: <FaEnvelope size={35} />,
      title: "Email",
      text: "We reply within 24 hours",
      link: "mailto:info@asia-petrochem.com",
    },
    {
      icon: <FaPhone size={35} />,
      title: "Phone",
      text: "Speak to us directly: +971 50 899 5667",
      link: "tel:+971508995667",
    },
    {
      icon: <FaWhatsapp size={35} className="text-green-500" />,
      title: "WhatsApp",
      text: "Chat on WhatsApp",
      link: "https://wa.me/971508995667",
    },
  ];

  const stores = [
    { id: 1, name: "Ras Al Khaimah", address: "Al Jazeera Al Hamra - Ras Al Khaimah, UAE", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.4410571073213!2d55.8006328!3d25.6584529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5dd6b3cf6e5e9%3A0x2eeb279f7d587351!2sAsia%20Petrochemicals%20LLC!5e1!3m2!1sen!2sae!4v1763815752503!5m2!1sen!2sae" },
    { id: 2, name: "Dubai ", address: "Deira - Dubai, UAE", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.507423361706!2d55.3130046!3d25.269585400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434abd678efd%3A0x8acdbb1b6d1971f4!2sSuccess%20Spare%20Parts%20L.L.C!5e1!3m2!1sen!2sae!4v1763815868440!5m2!1sen!2sae" },
    { id: 3, name: "Sharjah ", address: " Hamriya Free Zone - Sharjah, UAE", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109558.6988554295!2d55.407483676689715!3d25.474018592390586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5722adf5344d%3A0xd108dee3b1ac674!2sASIA%20PETROCHEM%20FZE!5e1!3m2!1sen!2sae!4v1763816145482!5m2!1sen!2sae" },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="w-full h-[300px] flex items-center justify-center text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1500&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-white px-4"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold"
          >
            Get in <span className="text-cyan-300">Touch</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg mt-3 max-w-2xl mx-auto opacity-90"
          >
            Contact Asia Petrochemicals LLC for inquiries, support, or collaboration.
          </motion.p>
        </motion.div>
      </section>

      {/* FORM + IMAGE */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-16 px-4">
        {/* Right Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/img/Contactlogo.jpg" alt="Contact" className="w-full rounded-xl shadow-lg" />
        </motion.div>

        {/* Form with Rotating Text */}
        <motion.form
          onSubmit={handleSubmit}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-lg space-y-5"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-800 text-center leading-relaxed">
            Send a Message <RotatingText texts={["Quickly", "Securely", "Reliably"]} />
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 text-center">Fill out the form and our team will get back to you promptly.</motion.p>

          <motion.div variants={fadeUp}>
            <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
          </motion.div>
          <motion.div variants={fadeUp}>
            <input type="email" name="email" placeholder="Your Email" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
          </motion.div>
          <motion.div variants={fadeUp}>
            <textarea name="message" rows="4" placeholder="Your Message" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
          </motion.div>
          <motion.button variants={fadeUp} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">Send</motion.button>
        </motion.form>
      </section>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-3 z-50"
          >
            <FaCheckCircle className="text-xl" />
            <span className="font-bold">Message Sent Successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONNECT WITH TEAM */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          Connect With Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-10"
        >
          Choose a preferred method below to reach out for assistance or inquiries.
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {contactOptions.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ scale: 1.08 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition cursor-pointer flex flex-col items-center min-w-[200px] max-w-[250px]"
            >
              <div className="text-blue-600 mb-3 animate-bounce">{item.icon}</div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* STORES */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-2"
        >
          Visit Our Stores
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-10"
        >
          Serving local industries and distribution networks across the region.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {stores.map((store) => (
            <motion.div
              key={store.id}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
            >
              <motion.div variants={fadeUp} className="w-full h-64 overflow-hidden">
                <iframe src={store.map} className="w-full h-full border-0 transition-transform duration-700 group-hover:scale-105" allowFullScreen="" loading="lazy" title={store.name}></iframe>
              </motion.div>
              <motion.div variants={fadeUp} className="p-4 text-center">
                <h3 className="font-bold text-lg">{store.name}</h3>
                <p className="text-gray-600">{store.address}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-10"
        >
          Learn more about Asia Petrochemicals' products, services, and facilities.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqItems.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-5 rounded-xl shadow-md cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  {openFAQ === i ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-gray-400" />}
                </div>
                <AnimatePresence>
                  {openFAQ === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 mt-2 overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img src="/img/FAQ.gif" alt="Petrochemicals" className="w-full rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contacts;
