import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaCertificate } from 'react-icons/fa';

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.5)] max-w-5xl w-full max-h-[90vh] overflow-hidden border border-white/20 dark:border-white/5 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-8 md:px-12 md:py-10 border-b border-gray-100 dark:border-gray-800 flex justify-between items-start gap-8 shrink-0">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/30">
                    {certificate?.category}
                  </span>
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Official Document</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">
                  {certificate?.title}
                </h2>
                <p className="mt-3 text-lg font-bold text-blue-600 dark:text-blue-400">
                  {certificate?.type} <span className="mx-2 text-gray-300 dark:text-gray-700">•</span> Issued by {certificate?.issuer}
                </p>
              </div>

              <div className="flex gap-3">
                {certificate?.imagePath && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={certificate?.imagePath}
                    download
                    className="w-12 h-12 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                    aria-label="Download certificate"
                  >
                    <FaDownload />
                  </motion.a>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl transition-all duration-300"
                  aria-label="Close modal"
                >
                  <FaTimes />
                </motion.button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-8 md:p-12 flex-grow scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* PDF/Image Preview */}
                <div className="lg:col-span-12 xl:col-span-8 flex justify-center">
                  <div className="relative w-full group">
                    <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full group-hover:bg-blue-600/10 transition-all" />
                    {certificate?.imagePath ? (
                      <div className="relative p-2 bg-gray-50 dark:bg-gray-800/50 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-inner overflow-hidden">
                        <img
                          src={certificate?.imagePath}
                          alt={certificate?.title}
                          className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden absolute inset-0 items-center justify-center py-20 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                          <p className="text-gray-500 font-bold">Certificate preview not available</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center py-24 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
                        <p className="text-gray-500 font-bold text-lg">No preview available</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Sidebar in grid if we had more info, or just below */}
                <div className="lg:col-span-12 xl:col-span-4 space-y-10">
                  <div>
                    <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">Description</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      {certificate?.description || (certificate?.type ? 'This certification verifies that Asia Petrochem LLC meets all international standards for ' + certificate.type.toLowerCase() + '.' : '')}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800/50">
                      <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-1">Issue Date</h4>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {certificate?.issueDate ? new Date(certificate.issueDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}
                      </p>
                    </div>
                    <div className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800/50">
                      <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-1">Expiry Date</h4>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {certificate?.expiryDate ? new Date(certificate.expiryDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}
                      </p>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="p-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[2rem] text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
                    <FaCertificate className="absolute -bottom-6 -right-6 text-9xl text-white/10 rotate-12" />
                    <h4 className="text-lg font-black mb-2 relative z-10">Verified Document</h4>
                    <p className="text-xs text-white/80 font-bold leading-relaxed relative z-10">
                      This is an official digital copy of the certificate issued by {certificate?.issuer}. For verification inquiries, please contact our quality department.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Action */}
            <div className="p-8 md:px-12 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 shrink-0 flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl font-bold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                Dismiss
              </button>
              {certificate?.imagePath && (
                <a
                  href={certificate.imagePath}
                  download
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-black shadow-lg shadow-blue-500/40 hover:bg-blue-700 active:scale-95 transition-all outline-none"
                >
                  Download Certificate
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default CertificateModal;

