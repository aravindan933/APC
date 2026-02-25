import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import LightRays from "../components/LightRays/LightRays";
import BoilingBubbles from "../components/Effects/BoilingBubbles";
import TourViewer from '../components/VirtualTour/TourViewer';
import TourNavigation from '../components/VirtualTour/TourNavigation';
import { tourPoints } from '../data/tourPoints';
import { FaPlay, FaMap, FaMapMarkerAlt } from 'react-icons/fa';

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const heroImages = [
  "/img/hero-industrial-1.jpg",
  "/img/hero-industrial-2.jpg",
  "/img/hero-industrial-3.jpg",
  "/img/hero-industrial-4.jpg",
  "/img/hero-industrial-5.jpg",
  "/img/hero-industrial-6.jpg",
  "/img/hero-industry-7.jpg",
  "/img/homeabout.webp",
];

const VirtualTour = () => {
  const { t } = useTranslation();
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const currentPoint = tourPoints[currentIndex];
  const hasNext = currentIndex < tourPoints.length - 1;
  const hasPrevious = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSelectPoint = (index) => {
    setCurrentIndex(index);
    setIsTourActive(true);
    setShowNavigation(false);
  };

  const handleStartTour = () => {
    setCurrentIndex(0);
    setIsTourActive(true);
  };

  const handleCloseTour = () => {
    setIsTourActive(false);
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 overflow-x-hidden selection:bg-blue-500/30">
      {/* COMMAND HUB HERO SECTION */}
      <section className="relative w-full h-[700px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
        <BoilingBubbles />

        {/* Fullscreen slideshow background */}
        <div className="absolute inset-0 z-0 hero-slideshow">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{ clickable: true }}
            navigation={true}
            className="h-full w-full"
            speed={1000}
            onSlideChange={(swiper) => setActiveHeroIndex(swiper.realIndex)}
          >
            {heroImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: `url(${img})`, backgroundColor: '#0f172a' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Light Rays */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <LightRays raysOrigin="top-center" raysColor="#3B82F6" raysSpeed={1.2} lightSpread={1.2} rayLength={2} pulsating={true} />
        </div>

        {/* Futuristic HUD Components Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
          {/* Deep Space Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.25)_0%,transparent_100%)]" />

          {/* Animated Tech Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
              backgroundSize: '100px 100px',
              perspective: '1000px',
              transform: 'rotateX(60deg) scale(2)',
              transformOrigin: 'top'
            }}
          />

          {/* Rotating High-Tech Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/5 rounded-full pointer-events-none" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-blue-500/10 rounded-full pointer-events-none"
          />

        </div>

        {/* HUD Elements Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 p-12 hidden lg:block">
          {/* Top Left Telemetry */}
          <div className="absolute top-24 left-12 border-l border-blue-500/30 pl-4 space-y-2">
            <div className="text-[10px] font-bold tracking-widest text-blue-500/50 uppercase">System Integrity</div>
            <div className="h-1 w-32 bg-blue-950 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ['80%', '95%', '85%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="h-full bg-blue-500"
              />
            </div>
            <div className="text-[10px] font-mono text-blue-400">98.4% NOMINAL</div>
          </div>

          {/* Bottom Right Coordinates */}
          <div className="absolute bottom-24 right-12 text-right border-r border-blue-500/30 pr-4 space-y-1">
            <div className="text-[10px] font-bold tracking-widest text-blue-500/50 uppercase">Satellite Sync</div>
            <div className="text-[10px] font-mono text-blue-400">SAT-ID: APC-724-G</div>
            <div className="text-[10px] font-mono text-blue-400">COORDS: 25.4740 N / 55.4075 E</div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"
              />
              Live Facility Command Hub
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter text-white">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-blue-200/40">
                {t('tour.title')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/60 font-medium max-w-3xl mx-auto tracking-wide uppercase italic mb-12">
              {t('tour.subtitle')}
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(59,130,246,0.4)',
                backgroundColor: 'rgba(59,130,246,1)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartTour}
              className="group relative bg-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl shadow-blue-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none opacity-20" />
              <FaPlay className="text-lg group-hover:scale-110 transition-transform" />
              {t('tour.startTour')}
            </motion.button>
          </motion.div>
        </div>

      </section>

      {/* COMMAND GRID SECTION */}
      <section className="py-24 px-6 md:px-12 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div>
              <div className="inline-block h-1 w-20 bg-blue-600 mb-6" />
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                Global Facility <br />
                <span className="text-blue-600">Distribution Mapping</span>
              </h2>
            </div>

            {/* Radar Toggle UI */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowNavigation(!showNavigation)}
              className="flex items-center gap-4 px-8 py-4 bg-gray-50 border border-gray-200 text-gray-700 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-gray-100 transition-all shadow-lg group"
            >
              <div className="relative w-6 h-6 border border-blue-500/50 rounded-full flex items-center justify-center p-1">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full border-t border-blue-400 rounded-full"
                />
              </div>
              {showNavigation ? 'Collapse System Map' : 'Engage System Map'}
            </motion.button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* High-Tech System Map Sidebar */}
            <AnimatePresence>
              {showNavigation && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="lg:col-span-4"
                >
                  <div className="sticky top-24">
                    <TourNavigation
                      tourPoints={tourPoints}
                      currentIndex={currentIndex}
                      onSelectPoint={handleSelectPoint}
                    />

                    {/* Fake Server Diagnostics */}
                    <div className="mt-8 p-8 bg-gray-50 border border-gray-100 rounded-[2rem] space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Server Load</span>
                        <span className="text-[10px] font-mono text-blue-600">Node-01: OK</span>
                      </div>
                      <div className="flex gap-1 h-1">
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1, delay: i * 0.05, repeat: Infinity }}
                            className={`flex-1 h-full rounded-full ${i < 12 ? 'bg-blue-500' : 'bg-gray-200'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Facility Cards Grid */}
            <div className={showNavigation ? 'lg:col-span-8' : 'lg:col-span-12'}>
              <div className={`grid grid-cols-1 ${showNavigation ? 'md:grid-cols-1 xl:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-10`}>
                {tourPoints.map((point, index) => {
                  {/* GENERATE RANDOM STATUS METRICS FOR VISUALS */ }
                  const load = 70 + Math.floor(Math.random() * 25);
                  const uptime = 99.9 + (Math.random() * 0.1);

                  return (
                    <motion.div
                      key={point.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      whileHover={{ y: -15 }}
                      onClick={() => handleSelectPoint(index)}
                      className="group relative bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:border-blue-500/30 ring-1 ring-gray-100 hover:ring-blue-500/20"
                    >
                      {/* Image Frame with Overlay */}
                      <div className="relative h-64 overflow-hidden bg-gray-100">
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent z-10" />

                        <img
                          src={point.image}
                          alt={point.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/800x600?text=APC+FACILITY';
                          }}
                        />

                        {/* ID Badge HUD */}
                        <div className="absolute top-6 left-6 z-20">
                          <div className="px-4 py-1.5 bg-black/80 backdrop-blur-md border border-blue-500/50 rounded-lg">
                            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-tighter">
                              UNIT-ID: {point.id.split('-')[1]}
                            </span>
                          </div>
                        </div>

                        {/* Status Glow */}
                        <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                          </span>
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hidden group-hover:block">Operational</span>
                        </div>
                      </div>

                      {/* Content with Hardware Metrics */}
                      <div className="p-10 relative">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-[1px] w-10 bg-blue-500/50" />
                          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-500/70">Facility Node</span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {point.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 mb-10 leading-relaxed line-clamp-2">
                          {point.description}
                        </p>

                        {/* Fake Metrics Bar HUD Style */}
                        <div className="space-y-6 pt-8 border-t border-gray-100">
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Active Load</span>
                                <span className="text-[9px] font-mono text-blue-400">{load}%</span>
                              </div>
                              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${load}%` }}
                                  transition={{ duration: 1.5, ease: 'easeOut' }}
                                  className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Uptime</span>
                                <span className="text-[9px] font-mono text-green-400">{uptime}%</span>
                              </div>
                              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.3)] w-[99%]" />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 group-hover:text-blue-400/70 transition-colors">
                            <FaMapMarkerAlt className="text-blue-500" />
                            {point.location}
                          </div>
                        </div>

                        {/* Expand Button Visual */}
                        <div className="mt-10">
                          <button className="w-full py-4 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-blue-600 transition-all duration-500 text-gray-700 group-hover:text-white font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                            Enter Facility View
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </button>
                        </div>
                      </div>

                      {/* Bottom Accent Decor */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Viewer Modal */}
      <AnimatePresence>
        {isTourActive && (
          <TourViewer
            tourPoint={currentPoint}
            onClose={handleCloseTour}
            onNext={handleNext}
            onPrevious={handlePrevious}
            hasNext={hasNext}
            hasPrevious={hasPrevious}
          />
        )}
      </AnimatePresence>
    </div>
  );
};


export default VirtualTour;

