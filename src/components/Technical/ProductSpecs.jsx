import { motion } from 'framer-motion';
import { FaFlask, FaIndustry, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ProductSpecs = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <FaFlask className="text-blue-600 dark:text-blue-400 text-2xl" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          {product.productName}
        </h3>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
          {product.category}
        </span>
      </div>

      {/* Properties */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Physical & Chemical Properties
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.entries(product.properties).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <span className="text-gray-600 dark:text-gray-400 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}:
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
          <FaIndustry />
          Applications
        </h4>
        <div className="flex flex-wrap gap-2">
          {product.applications.map((app) => (
            <span
              key={app}
              className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm"
            >
              {app}
            </span>
          ))}
        </div>
      </div>

      {/* Compatibility */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
          <FaCheckCircle />
          Compatibility Notes
        </h4>
        <p className="text-gray-600 dark:text-gray-400">{product.compatibility.join('. ')}</p>
      </div>
    </motion.div>
  );
};

export default ProductSpecs;

