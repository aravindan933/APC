import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TourViewer from '../components/VirtualTour/TourViewer';
import TourNavigation from '../components/VirtualTour/TourNavigation';
import { tourPoints } from '../data/tourPoints';
import { FaPlay, FaMap, FaMapMarkerAlt } from 'react-icons/fa';

const VirtualTour = () => {
  const { t } = useTranslation();
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

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
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-center px-4">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('tour.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 mb-8"
          >
            {t('tour.subtitle')}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={handleStartTour}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
          >
            <FaPlay />
            {t('tour.startTour')}
          </motion.button>
        </div>
      </section>

      {/* Tour Points Overview */}
      <section className="py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              Facility Locations
            </h2>
            <button
              onClick={() => setShowNavigation(!showNavigation)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <FaMap />
              {showNavigation ? 'Hide Map' : 'Show Map'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Navigation Sidebar */}
            {showNavigation && (
              <div className="lg:col-span-1">
                <TourNavigation
                  tourPoints={tourPoints}
                  currentIndex={currentIndex}
                  onSelectPoint={handleSelectPoint}
                />
              </div>
            )}

            {/* Tour Points Grid */}
            <div className={showNavigation ? 'lg:col-span-2' : 'lg:col-span-3'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tourPoints.map((point, index) => (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => handleSelectPoint(index)}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                      <img
                        src={point.image}
                        alt={point.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=Facility';
                        }}
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {point.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {point.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Viewer Modal */}
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
    </div>
  );
};

export default VirtualTour;

