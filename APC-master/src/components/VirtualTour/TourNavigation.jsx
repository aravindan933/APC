import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const TourNavigation = ({ tourPoints, currentIndex, onSelectPoint }) => {
  return (
    <div className="bg-[#0a0f1d] border border-white/5 rounded-[2rem] shadow-2xl p-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <FaMapMarkerAlt className="text-6xl text-blue-500" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
          <h3 className="text-xs font-bold text-white uppercase tracking-[0.3em]">
            System Nodes
          </h3>
        </div>

        <div className="space-y-4">
          {tourPoints.map((point, index) => (
            <motion.button
              key={point.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectPoint(index)}
              className={`w-full text-left p-5 rounded-2xl transition-all duration-500 group relative overflow-hidden ${index === currentIndex
                ? 'bg-blue-500 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)]'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
            >
              {/* Pulsing Active Layer */}
              {index === currentIndex && (
                <motion.div
                  layoutId="activeRadarNode"
                  className="absolute inset-0 bg-white opacity-20"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-colors duration-500 ${index === currentIndex
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white'
                    }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm tracking-tight">{point.title}</h4>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 transition-colors ${index === currentIndex ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                    {point.location}
                  </p>
                </div>

                {index === currentIndex && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-white"
                  />
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Global System Metric Decor */}
        <div className="mt-10 pt-8 border-t border-white/5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Network Latency</span>
            <span className="text-[9px] font-mono text-blue-500">12ms</span>
          </div>
          <div className="grid grid-cols-10 gap-1 h-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`h-full rounded-sm ${i < 7 ? 'bg-blue-500/40' : 'bg-white/5'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default TourNavigation;

