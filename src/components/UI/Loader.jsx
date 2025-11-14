import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logoFallen, setLogoFallen] = useState(false);

  useEffect(() => {
    // Logo falls after 1 second
    const logoTimer = setTimeout(() => {
      setLogoFallen(true);
    }, 1000);

    // Progress starts after logo falls
    const progressTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(timer);
            setTimeout(() => onLoadingComplete(), 500);
            return 100;
          }
          const diff = Math.random() * 15;
          return Math.min(oldProgress + diff, 100);
        });
      }, 200);

      return () => clearInterval(timer);
    }, 1500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(progressTimer);
    };
  }, [onLoadingComplete]);

  // Generate random molecules for floating animation
  const molecules = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    x: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating Molecules/Particles */}
        {molecules.map((molecule) => (
          <motion.div
            key={molecule.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 opacity-30 blur-sm"
            style={{
              width: molecule.size,
              height: molecule.size,
              left: `${molecule.x}%`,
              top: `${molecule.initialY}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: molecule.duration,
              delay: molecule.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Company Name at Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex justify-center gap-1 mb-3">
              {["A", "s", "i", "a", " ", "P", "e", "t", "r", "o", "c", "h", "e", "m", "i", "c", "a", "l", "s"].map(
                (letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.5,
                      type: "spring",
                    }}
                    className="text-3xl md:text-5xl font-bold text-white"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                )
              )}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-blue-300 text-sm md:text-base tracking-wider"
            >
              Manufacturing Excellence Since 1989
            </motion.p>
          </motion.div>

          {/* Flask and Logo Container */}
          <div className="relative w-80 md:w-96 h-[400px] flex items-center justify-center">
            {/* Falling Logo */}
            <AnimatePresence>
              {!logoFallen && (
                <motion.div
                  initial={{ y: -600, rotate: 0, scale: 1 }}
                  animate={{ 
                    y: 120,
                    rotate: [0, 10, -10, 5, -5, 0],
                    scale: [1, 1.1, 0.9, 1.05, 1],
                  }}
                  exit={{ 
                    scale: [1, 1.2, 0],
                    opacity: [1, 1, 0],
                    y: 140,
                  }}
                  transition={{ 
                    duration: 1.2,
                    ease: [0.34, 1.56, 0.64, 1],
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  }}
                  className="absolute z-20"
                  style={{ top: "50%", left: "50%", marginLeft: "-50px", marginTop: "-50px" }}
                >
                  <div className="bg-white rounded-full p-4 shadow-2xl">
                    <img
                      src="/src/assets/logo-color.png"
                      alt="Asia Petrochemicals"
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Splash Effect when logo hits */}
            <AnimatePresence>
              {logoFallen && progress < 5 && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: Math.cos((i * Math.PI * 2) / 8) * 80,
                        y: Math.cos((i * Math.PI * 2) / 8) * 80,
                        opacity: [0, 1, 0],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute w-3 h-3 bg-blue-400 rounded-full"
                      style={{ 
                        top: "50%", 
                        left: "50%",
                        filter: "blur(2px)",
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Chemical Flask with Liquid Fill */}
            <svg
              viewBox="0 0 200 300"
              className="w-full h-auto relative z-10"
              style={{ filter: "drop-shadow(0 10px 30px rgba(59, 130, 246, 0.5))" }}
            >
              {/* Flask Outline */}
              <path
                d="M 70 20 L 70 80 L 40 180 Q 35 200 40 230 L 160 230 Q 165 200 160 180 L 130 80 L 130 20 Z"
                fill="none"
                stroke="rgba(147, 197, 253, 0.6)"
                strokeWidth="3"
              />

              {/* Flask Neck Detail */}
              <line
                x1="70"
                y1="20"
                x2="130"
                y2="20"
                stroke="rgba(147, 197, 253, 0.6)"
                strokeWidth="3"
              />

              {/* Liquid Fill (only shows after logo falls) */}
              <AnimatePresence>
                {logoFallen && (
                  <motion.path
                    d="M 70 80 L 40 180 Q 35 200 40 230 L 160 230 Q 165 200 160 180 L 130 80 Z"
                    fill="url(#liquidGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.8, 0.9, 0.8] }}
                    transition={{ duration: 0.5, times: [0, 0.3, 0.6, 1] }}
                    style={{
                      clipPath: `inset(${100 - progress * 0.85}% 0 0 0)`,
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Liquid Gradient */}
              <defs>
                <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa">
                    <animate
                      attributeName="stop-color"
                      values="#60a5fa;#3b82f6;#2563eb;#60a5fa"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>

              {/* Bubbles (only after logo falls) */}
              {logoFallen && progress > 10 && (
                <>
                  {[0, 1, 2, 3].map((i) => (
                    <motion.circle
                      key={i}
                      cx={80 + i * 12}
                      cy={230 - (progress * 1.7)}
                      r={3 + (i % 2)}
                      fill="rgba(255, 255, 255, 0.5)"
                      animate={{
                        cy: [230 - (progress * 1.7), 150 - (progress * 1.7), 100],
                        opacity: [0.6, 0.8, 0],
                        scale: [1, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2.5,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </>
              )}

              {/* Liquid Surface Wave Effect */}
              {logoFallen && progress > 5 && (
                <motion.path
                  d={`M 40 ${230 - progress * 1.7} Q 100 ${225 - progress * 1.7} 160 ${230 - progress * 1.7}`}
                  fill="none"
                  stroke="rgba(147, 197, 253, 0.8)"
                  strokeWidth="2"
                  animate={{
                    d: [
                      `M 40 ${230 - progress * 1.7} Q 100 ${225 - progress * 1.7} 160 ${230 - progress * 1.7}`,
                      `M 40 ${230 - progress * 1.7} Q 100 ${235 - progress * 1.7} 160 ${230 - progress * 1.7}`,
                      `M 40 ${230 - progress * 1.7} Q 100 ${225 - progress * 1.7} 160 ${230 - progress * 1.7}`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </svg>

            {/* Progress Percentage (shows after logo falls) */}
            {logoFallen && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="text-center">
                  <motion.p
                    className="text-5xl md:text-6xl font-bold text-white"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.3 }}
                    key={Math.floor(progress)}
                  >
                    {Math.floor(progress)}
                    <span className="text-3xl text-blue-300">%</span>
                  </motion.p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Progress Bar */}
          {logoFallen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-80 md:w-96 mt-8"
            >
              <div className="relative h-1.5 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Loading States */}
              <motion.p
                key={Math.floor(progress / 25)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-blue-200 text-sm md:text-base text-center mt-4"
              >
                {progress < 25 && "Initializing chemical processes..."}
                {progress >= 25 && progress < 50 && "Loading manufacturing data..."}
                {progress >= 50 && progress < 75 && "Preparing production facilities..."}
                {progress >= 75 && progress < 100 && "Almost ready..."}
                {progress >= 100 && "Complete! Welcome aboard."}
              </motion.p>
            </motion.div>
          )}
        </div>

        {/* Corner Accents */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-blue-500/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-blue-500/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;