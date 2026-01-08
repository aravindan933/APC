import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const TourNavigation = ({ tourPoints, currentIndex, onSelectPoint }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Tour Locations
      </h3>
      <div className="space-y-2">
        {tourPoints.map((point, index) => (
          <motion.button
            key={point.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectPoint(index)}
            className={`w-full text-left p-4 rounded-lg transition-all ${
              index === currentIndex
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === currentIndex
                    ? 'bg-white/20 text-white'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{point.title}</h4>
                <p className="text-sm opacity-80 flex items-center gap-1 mt-1">
                  <FaMapMarkerAlt className="text-xs" />
                  {point.location}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TourNavigation;

