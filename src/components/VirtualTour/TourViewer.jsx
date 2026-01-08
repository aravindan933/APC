import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';

const TourViewer = ({ tourPoint, onClose, onNext, onPrevious, hasNext, hasPrevious }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setImageLoaded(false);
  }, [tourPoint]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative max-w-6xl w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
          aria-label="Close tour"
        >
          <FaTimes />
        </button>

        {/* Image Container */}
        <div className="relative h-[60vh] bg-gray-900">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          <img
            ref={imageRef}
            src={tourPoint.image}
            alt={tourPoint.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x600?text=Facility+Image';
              setImageLoaded(true);
            }}
          />
        </div>

        {/* Info Section */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {tourPoint.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt />
                <span>{tourPoint.location}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {tourPoint.description}
          </p>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={onPrevious}
              disabled={!hasPrevious}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                hasPrevious
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed'
              }`}
            >
              <FaChevronLeft />
              Previous
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                hasNext
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
              <FaChevronRight />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TourViewer;

