import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const CompatibilityChart = ({ compatibilityData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Chemical Compatibility Matrix
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-200 font-semibold">
                Chemical
              </th>
              <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-200 font-semibold">
                Compatible With
              </th>
              <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-200 font-semibold">
                Incompatible With
              </th>
            </tr>
          </thead>
          <tbody>
            {compatibilityData.map((item, index) => (
              <motion.tr
                key={item.chemical}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="py-4 px-4 font-semibold text-gray-800 dark:text-gray-200">
                  {item.chemical}
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-2">
                    {item.compatible.map((comp) => (
                      <span
                        key={comp}
                        className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm"
                      >
                        <FaCheckCircle className="text-xs" />
                        {comp}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-2">
                    {item.incompatible.map((incomp) => (
                      <span
                        key={incomp}
                        className="flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-sm"
                      >
                        <FaTimesCircle className="text-xs" />
                        {incomp}
                      </span>
                    ))}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CompatibilityChart;

