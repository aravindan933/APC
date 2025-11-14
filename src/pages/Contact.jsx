import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFax,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Location",
      content: "Asia Petrochemicals LLC, NON FREE Zone - Exit No 119 - Al Shuhada' Rd - Al Jazeera Al Hamra - Ras Al Khaimah",
      color: "text-blue-500",
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+971 4 2384533",
      color: "text-green-500",
    },
    {
      icon: FaFax,
      title: "Fax",
      content: "+971 4 2384534",
      color: "text-purple-500",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "info@asia-petrochem.com",
      color: "text-red-500",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get in touch with Asia Petrochemicals LLC. We're here to help with
              all your petrochemical needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <info.icon className={`text-4xl ${info.color} mb-3`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {info.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Image Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                    placeholder="Product inquiry, Partnership, etc."
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  } ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FaCheckCircle size={20} />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000"
                  alt="Petrochemical Plant"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>35+ years of industry experience since 1989</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>State-of-the-art manufacturing facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Export to 17+ countries worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>ISO certified quality standards</span>
                  </li>
                  {/* <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>24/7 customer support</span>
                  </li> */}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Visit us at our headquarters in Ras Al Khaimah, UAE
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[450px]"
          >
            {/* Google Maps Embed - Replace with actual coordinates */}
            <iframe
            src="https://maps.google.com/maps?q=25.6584529,55.8006328&hl=en&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Asia Petrochemicals Location"
            />
          </motion.div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-10 text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Business Hours</h3>
            <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto justify-items-center">             
                <div>
                <p className="text-lg font-semibold mb-2">Monday - Saturday</p>
                <p className="text-white/90">9:00 AM - 6:00 PM</p>
                </div>
              {/* <div>
                <p className="text-lg font-semibold mb-2">Saturday</p>
                <p className="text-white/90">9:00 AM - 2:00 PM</p>
              </div> */}
            </div>
            <p className="mt-6 text-white/80 text-sm">
              For urgent inquiries outside business hours, please email us and
              we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;