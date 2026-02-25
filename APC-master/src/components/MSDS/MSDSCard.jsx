import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload, FaEye } from 'react-icons/fa';

const MSDSCard = ({ document, onPreview, onDownload }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <FaFilePdf className="text-red-600 dark:text-red-400 text-2xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {document.productName}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {document.category}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          document.documentType === 'MSDS'
            ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
        }`}>
          {document.documentType}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <strong>Industries:</strong> {document.industry.join(', ')}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Last updated: {new Date(document.lastUpdated).toLocaleDateString()}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onPreview(document)}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors text-sm font-medium"
        >
          <FaEye />
          Preview
        </button>
        <a
          href={document.pdfPath}
          download
          className="flex-1 flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 rounded-lg transition-colors text-sm font-medium"
        >
          <FaDownload />
          Download
        </a>
      </div>
    </motion.div>
  );
};

export default MSDSCard;

