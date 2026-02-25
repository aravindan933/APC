import { motion } from 'framer-motion';
import { FaCertificate, FaCalendarAlt } from 'react-icons/fa';

const CertificateCard = ({ certificate, onView }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        layout: { duration: 0.4 }
      }}
      className="group relative h-full"
      onClick={() => onView(certificate)}
    >
      <motion.div
        whileHover={{
          y: -12,
          rotateX: 4,
          rotateY: -4,
          transition: { type: 'spring', stiffness: 400, damping: 25 }
        }}
        className="relative bg-white/70 dark:bg-gray-900/40 backdrop-blur-2xl border border-white/30 dark:border-white/5 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-full transform-gpu"
        style={{ perspective: 1200 }}
      >
        {/* SUBTLE BORDER BEAM EFFECT */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-700">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(59,130,246,0.2)_180deg,transparent_360deg)]"
          />
        </div>

        {/* Card Content Wrapper */}
        <div className="relative z-10 bg-white/60 dark:bg-gray-950/60 m-[1px] rounded-[2.5rem] flex flex-col h-full">
          {/* Visual Header / Image - Refined (No Scanline) */}
          <div className="relative h-60 w-full overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-900/5 dark:to-indigo-900/5">
            <div className="absolute inset-0 flex items-center justify-center p-12">
              {certificate.imagePath ? (
                <motion.img
                  src={certificate.imagePath}
                  alt={certificate.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-1000 ease-out"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className="absolute inset-0 flex items-center justify-center" style={{ display: certificate.imagePath ? 'none' : 'flex' }}>
                <FaCertificate className="text-8xl text-blue-200/30 dark:text-blue-600/10" />
              </div>
            </div>

            {/* Subtle ID Badge */}
            <div className="absolute top-6 right-8">
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600/40 dark:text-blue-400/30">
                #{certificate.id.split('-')[1]}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-10 flex flex-col flex-grow">
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-6 bg-blue-500/50" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                  {certificate.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-500 group-hover:text-blue-600">
                {certificate.title}
              </h3>

              <p className="text-sm font-medium text-gray-500/80 dark:text-gray-400/80 mb-8">
                {certificate.type}
              </p>

              <div className="flex items-center gap-4 py-6 border-t border-gray-100/50 dark:border-white/5">
                <div className="w-10 h-10 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaCalendarAlt className="text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-400 dark:text-gray-600 uppercase font-bold tracking-tighter">Expiry Date</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-300">
                    {new Date(certificate.expiryDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>

            {/* Refined Action Button */}
            <div className="mt-8">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onView(certificate);
                }}
                className="w-full relative py-4 rounded-2xl overflow-hidden transition-all duration-500 group/btn"
              >
                <div className="absolute inset-0 bg-gray-900 dark:bg-white group-hover/btn:bg-blue-600 transition-colors duration-500" />
                <span className="relative z-10 font-bold text-[11px] uppercase tracking-[0.15em] text-white dark:text-gray-900 flex items-center justify-center gap-2">
                  View Certificate
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


export default CertificateCard;
