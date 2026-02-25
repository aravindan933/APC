import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { tourPoints } from '../../data/tourPoints';

const TourViewer = ({ tourPoint, onClose, onNext, onPrevious, hasNext, hasPrevious }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setImageLoaded(false);
    setIsScanning(true);
    const timer = setTimeout(() => setIsScanning(false), 2000);
    return () => clearTimeout(timer);
  }, [tourPoint]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Cinematic Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-7xl w-full bg-[#050811] rounded-[3rem] overflow-hidden border border-blue-500/20 shadow-[0_0_100px_rgba(59,130,246,0.2)] flex flex-col md:flex-row h-[90vh] md:h-auto"
      >
        {/* Main Viewport Area */}
        <div className="relative flex-grow bg-black overflow-hidden group">
          {/* Loading / Scanning HUD Layer */}
          <AnimatePresence>
            {(isScanning || !imageLoaded) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
              >
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-2 border-t-blue-500 border-r-transparent border-b-blue-500/20 border-l-transparent rounded-full"
                  />
                  <div className="text-[10px] font-mono text-blue-400 animate-pulse">INIT_SCAN</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* VISUAL IMAGE */}
          <img
            ref={imageRef}
            src={tourPoint.image}
            alt={tourPoint.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-1000 ${imageLoaded ? 'scale-100 opacity-80' : 'scale-110 opacity-0'
              } group-hover:scale-110 group-hover:opacity-100`}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x800?text=APC+SYSTEM+VISUAL';
              setImageLoaded(true);
            }}
          />

          {/* HUD OVERLAY ELEMENTS */}
          <div className="absolute inset-0 z-20 pointer-events-none p-8 md:p-12">
            {/* Corner Bracket: Top Left */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-500/40 rounded-tl-2xl" />
            <div className="absolute top-10 left-10 text-[10px] font-mono text-blue-500/60 uppercase tracking-widest">
              Live_Node_{tourPoint.id.split('-')[1]}
            </div>

            {/* Corner Bracket: Bottom Right */}
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-blue-500/40 rounded-br-2xl" />
            <div className="absolute bottom-10 right-10 text-[10px] font-mono text-blue-500/60 text-right">
              LAT: {tourPoint.coordinates.lat} <br />
              LNG: {tourPoint.coordinates.lng}
            </div>

            {/* Center Crosshair Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center opacity-20 group-hover:opacity-50 transition-opacity">
              <div className="w-full h-[1px] bg-blue-400" />
              <div className="absolute w-[1px] h-full bg-blue-400" />
              <div className="absolute w-8 h-8 border border-blue-400 rounded-full" />
            </div>

            {/* Scrolling Telemetry Lines */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 space-y-2 opacity-30">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                  className="h-[1px] bg-blue-500"
                  style={{ width: 20 + (i * 10) + 'px' }}
                />
              ))}
            </div>

          </div>

          {/* Exit Button - Futuristic Style */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(239,68,68,1)' }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-8 right-8 z-40 bg-white/10 backdrop-blur-3xl border border-white/20 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
          >
            <FaTimes />
          </motion.button>
        </div>

        {/* HUD Control Sidebar */}
        <div className="w-full md:w-96 bg-[#0a0f1d] p-10 flex flex-col justify-between relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <FaMapMarkerAlt className="text-8xl text-blue-500" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/70">Terminal Info</span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">
              {tourPoint.title}
            </h2>

            <div className="flex items-center gap-2 text-blue-400/80 mb-8 font-mono text-sm border-b border-white/5 pb-8">
              <FaMapMarkerAlt />
              <span>{tourPoint.location}</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium opacity-80">
              {tourPoint.description}
            </p>

            {/* Technical Detail List */}
            <div className="space-y-4 border-t border-white/5 pt-8">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-gray-500 uppercase">Status</span>
                <span className="text-green-400">SYNCED_NOMINAL</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-gray-500 uppercase">Buffer</span>
                <span className="text-blue-500">4.2 TB/S</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls HUD */}
          <div className="mt-12 pt-8 border-t border-white/5 space-y-6 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className={`group flex flex-col p-4 rounded-2xl transition-all duration-300 border ${hasPrevious
                  ? 'bg-white/5 border-white/10 hover:bg-blue-500 hover:border-blue-400 text-white hover:text-gray-900'
                  : 'bg-transparent border-white/5 text-gray-700 cursor-not-allowed opacity-50'
                  }`}
              >
                <div className="text-[9px] font-bold uppercase tracking-widest mb-2 opacity-60">Prev_Node</div>
                <FaChevronLeft className="text-xl" />
              </button>

              <button
                onClick={onNext}
                disabled={!hasNext}
                className={`group flex flex-col p-4 rounded-2xl transition-all duration-300 border ${hasNext
                  ? 'bg-white/5 border-white/10 hover:bg-blue-500 hover:border-blue-400 text-white hover:text-gray-900'
                  : 'bg-transparent border-white/5 text-gray-700 cursor-not-allowed opacity-50'
                  }`}
              >
                <div className="text-[9px] font-bold uppercase tracking-widest mb-2 opacity-60">Next_Node</div>
                <FaChevronRight className="text-xl self-end" />
              </button>
            </div>

            {/* Pagination HUD */}
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${i === tourPoints?.findIndex(p => p.id === tourPoint.id)
                    ? 'w-8 bg-blue-500'
                    : 'w-2 bg-white/10'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


export default TourViewer;

