import { motion } from 'framer-motion';
import { FaCertificate, FaCalendarAlt } from 'react-icons/fa';

const CertificateCard = ({ certificate, onView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer group"
      onClick={() => onView(certificate)}
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden">
        {certificate.imagePath ? (
          <img
            src={certificate.imagePath}
            alt={certificate.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center" style={{ display: certificate.imagePath ? 'none' : 'flex' }}>
          <FaCertificate className="text-6xl text-blue-300 dark:text-blue-600" />
        </div>
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {certificate.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          {certificate.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {certificate.type}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-3">
          <FaCalendarAlt />
          <span>Valid until {new Date(certificate.expiryDate).toLocaleDateString()}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onView(certificate);
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors text-sm font-medium"
        >
          View Certificate
        </button>
      </div>
    </motion.div>
  );
};

export default CertificateCard;

