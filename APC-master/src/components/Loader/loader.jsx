import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalLoader = () => {
  return (
    <div className="professional-loader-wrapper">
      <div className="loader-container">
        {/* Outer rotating ring */}
        <motion.div
          className="outer-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle reverse-rotating ring */}
        <motion.div
          className="middle-ring"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner pulsating logo/core */}
        <div className="inner-core">
          <motion.div
            className="core-pulse"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="logo-text">APC</div>
        </div>

        {/* Scanning line effect */}
        <motion.div
          className="scan-line"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="loader-branding"
      >
        <span className="brand-name">Asia Petrochemicals</span>
        <div className="loading-dots">
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>.</motion.span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>.</motion.span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>.</motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfessionalLoader;
