import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CertificateCard from '../components/Certificates/CertificateCard';
import CertificateModal from '../components/Certificates/CertificateModal';
import { certificates, certificateCategories } from '../data/certificates';

const Certificates = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCertificates =
    selectedCategory === 'All'
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const categoryCounts = certificateCategories.reduce((acc, cat) => {
    acc[cat] = cat === 'All'
      ? certificates.length
      : certificates.filter(c => c.category === cat).length;
    return acc;
  }, {});

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-[#050811] text-gray-800 dark:text-gray-200 selection:bg-blue-500/30 overflow-x-hidden">
      {/* Premium Holographic Hero Section - Refined */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-[#020617]">
        {/* Refined Holographic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.3)_0%,transparent_100%)]" />

          {/* Animated Grid - More Subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15, y: [0, -30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              perspective: '1200px',
              transform: 'rotateX(55deg) scale(2)',
              transformOrigin: 'top'
            }}
          />

          {/* Floating Data Nodes - Refined */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-blue-400 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.4, 0],
                y: ['0%', '100%']
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Professional Fonts: font-bold instead of font-black, tracking-tight */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-blue-100/40">
                {t('certificates.title')}
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl text-blue-100/50 font-medium max-w-2xl mx-auto tracking-[0.1em] uppercase">
              {t('certificates.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Sophisticated Corner Accents */}
        <div className="absolute top-12 left-12 w-12 h-12 border-t border-l border-white/10 rounded-tl-2xl z-10" />
        <div className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-white/10 rounded-br-2xl z-10" />
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Awesome & Unique Filter Section - "Orbit Pill" Style */}
          <div className="flex flex-col items-center mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1.5 bg-gray-100/50 dark:bg-white/5 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-full shadow-[0_30px_100px_rgba(0,0,0,0.1)] flex flex-wrap justify-center gap-1"
            >
              {/* Background Moving Glow */}
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <motion.div
                  animate={{
                    x: ['-20%', '120%'],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-2xl"
                />
              </div>

              {certificateCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-700 flex items-center gap-3 overflow-hidden ${selectedCategory === category
                      ? 'text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                >
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="awesomeFilterTab"
                      className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 shadow-[0_10px_20px_rgba(37,99,235,0.3)] z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                  <motion.span
                    animate={{
                      scale: selectedCategory === category ? 1.1 : 1,
                      backgroundColor: selectedCategory === category ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.05)'
                    }}
                    className="relative z-10 px-2 py-0.5 rounded-full text-[10px] font-black"
                  >
                    {categoryCounts[category]}
                  </motion.span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Certificates Grid with Super Smooth AnimatePresence */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredCertificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  onView={handleViewCertificate}
                />
              ))}
            </AnimatePresence>
          </motion.div>


          {filteredCertificates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-block p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl">
                <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
                  No certificates found in this category.
                </p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="mt-4 text-blue-600 font-bold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal Integration */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};


export default Certificates;

