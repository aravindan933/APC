import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload } from 'react-icons/fa';

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center z-10">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {certificate.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {certificate.type} • Issued by {certificate.issuer}
                  </p>
                </div>
                <div className="flex gap-2">
                  {certificate.imagePath && (
                    <a
                      href={certificate.imagePath}
                      download
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      aria-label="Download certificate"
                    >
                      <FaDownload />
                    </a>
                  )}
                  <button
                    onClick={onClose}
                    className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Close modal"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {certificate.imagePath ? (
                  <img
                    src={certificate.imagePath}
                    alt={certificate.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div
                  className="text-center py-12 text-gray-500 dark:text-gray-400"
                  style={{ display: certificate.imagePath ? 'none' : 'block' }}
                >
                  Certificate image not available
                </div>
                <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p><strong>Description:</strong> {certificate.description}</p>
                  <p><strong>Issue Date:</strong> {new Date(certificate.issueDate).toLocaleDateString()}</p>
                  <p><strong>Expiry Date:</strong> {new Date(certificate.expiryDate).toLocaleDateString()}</p>
                  <p><strong>Category:</strong> {certificate.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;

