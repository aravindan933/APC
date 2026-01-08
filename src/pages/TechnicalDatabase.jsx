import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductSpecs from '../components/Technical/ProductSpecs';
import CompatibilityChart from '../components/Technical/CompatibilityChart';
import { technicalSpecs, compatibilityMatrix } from '../data/technicalSpecs';
import { FaSearch, FaDatabase } from 'react-icons/fa';

const TechnicalDatabase = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = technicalSpecs.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative w-full h-64 bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-center px-4">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('technical.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl opacity-90"
          >
            {t('technical.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products by name or category..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Product List */}
          {!selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProduct(product)}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <FaDatabase className="text-blue-600 dark:text-blue-400 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {product.productName}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {product.category}
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors text-sm font-medium">
                    View Specifications
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Product Details */}
          {selectedProduct && (
            <div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="mb-4 text-blue-600 dark:text-blue-400 hover:underline"
              >
                ← Back to Products
              </button>
              <ProductSpecs product={selectedProduct} />
            </div>
          )}

          {/* Compatibility Chart */}
          {!selectedProduct && (
            <div className="mt-12">
              <CompatibilityChart compatibilityData={compatibilityMatrix} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TechnicalDatabase;

