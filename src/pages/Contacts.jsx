import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaEnvelope, FaPhone, FaRocket, FaCheckCircle, FaPlus, FaMinus } from "react-icons/fa";

// Simple rotating text component
const RotatingText = ({ texts, interval = 2000 }) => {
  const [index, setIndex] = useState(0);
  setTimeout(() => setIndex((prev) => (prev + 1) % texts.length), interval);

  return (
    <span className="px-2 sm:px-3 md:px-4 bg-cyan-300 text-black rounded-lg inline-block">
      {texts[index]}
    </span>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
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
    { icon: <FaComments size={35} />, title: "Live Chat", text: "Instant real-time support" },
    { icon: <FaEnvelope size={35} />, title: "Email", text: "We reply within 24 hours" },
    { icon: <FaPhone size={35} />, title: "Phone", text: "Speak to us directly" },
    { icon: <FaRocket size={35} />, title: "Technical Support", text: "Quick technical help" },
  ];

  const stores = [
    { id: 1, name: "Dubai Store", address: "Business Bay, Dubai, UAE", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115402.123!2d55.112!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMDYnMzkuOCJF!5e0!3m2!1sen!2sae!4v1700000000000" },
    { id: 2, name: "Abu Dhabi Store", address: "Corniche, Abu Dhabi, UAE", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115782.123!2d54.3773!3d24.4539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI3JzEzLjAiTiA1NMKwMjInNDIuMSJF!5e0!3m2!1sen!2sae!4v1700000000000" },
    { id: 3, name: "Sharjah Store", address: "Al Majaz, Sharjah, UAE", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116200.321!2d55.398!3d25.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzQ2LjciTiA1NcKwMjMnNTMuNyJF!5e0!3m2!1sen!2sae!4v1700000000000" },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="w-full h-[300px] bg-cover bg-center flex items-center justify-center text-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1500&q=80')"}}>
        <div className="absolute inset-0 bg-black/50" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-lg mt-3 max-w-2xl mx-auto opacity-90">Contact Asia Petrochemicals LLC for inquiries, support, or collaboration.</p>
        </motion.div>
      </section>

      {/* FORM + IMAGE */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-16 px-4">
        {/* Right Image */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }}>
          <img src="/src/img/Contactlogo.webp" alt="Contactlogo" className="w-full rounded-xl shadow-lg" />
        </motion.div>

        {/* Form with Rotating Text */}
        <motion.form onSubmit={handleSubmit} variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }} className="bg-white p-8 rounded-xl shadow-lg space-y-5">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Send a Message <RotatingText texts={["Quickly", "Securely", "Reliably"]} /></h2>
          <p className="text-gray-600 text-center">Fill out the form and our team will get back to you promptly.</p>

          <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded-lg" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full border p-3 rounded-lg" required />
          <textarea name="message" rows="4" placeholder="Your Message" className="w-full border p-3 rounded-lg" required />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Send</button>
        </motion.form>
      </section>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50">
          <FaCheckCircle />
          <span>Message Sent Successfully!</span>
        </motion.div>
      )}

      {/* CONNECT WITH TEAM */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Connect With Our Team</h2>
        <p className="text-center text-gray-600 mb-10">Choose a preferred method below to reach out for assistance or inquiries.</p>
        <div className="grid md:grid-cols-4 gap-8">
          {contactOptions.map((item, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.08 }} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition cursor-pointer">
              <div className="text-blue-600 mb-3 animate-bounce">{item.icon}</div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STORES */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Visit Our Stores</h2>
        <p className="text-center text-gray-600 mb-10">Serving local industries and distribution networks across the region.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {stores.map((store) => (
            <motion.div key={store.id} variants={fadeUp} initial="hidden" whileInView="visible" whileHover={{ scale: 1.02 }} className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
              <div className="w-full h-64">
                <iframe src={store.map} className="w-full h-full border-0" allowFullScreen="" loading="lazy" title={store.name}></iframe>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{store.name}</h3>
                <p className="text-gray-600">{store.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-10">Learn more about Asia Petrochemicals' products, services, and facilities.</p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <motion.div key={i} className="bg-white p-5 rounded-xl shadow-md cursor-pointer" variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.5, delay: i * 0.1 }} onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  {openFAQ === i ? <FaMinus /> : <FaPlus />}
                </div>
                <AnimatePresence>
                  {openFAQ === i && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-gray-600 mt-2">
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <img src="/src/img/FAQ.gif" alt="Petrochemicals" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contacts;
