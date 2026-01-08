import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MSDSCard from '../components/MSDS/MSDSCard';
import MSDSSearch from '../components/MSDS/MSDSSearch';
import { msdsDocuments, categories, documentTypes, industries } from '../data/msdsData';
import { FaFilePdf } from 'react-icons/fa';

const MSDSTDSViewer = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [previewDocument, setPreviewDocument] = useState(null);

  const filteredDocuments = useMemo(() => {
    return msdsDocuments.filter((doc) => {
      const matchesSearch =
        doc.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.industry.some((ind) => ind.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
      const matchesType = selectedType === 'All' || doc.documentType === selectedType;
      const matchesIndustry =
        selectedIndustry === 'All' || doc.industry.includes(selectedIndustry);

      return matchesSearch && matchesCategory && matchesType && matchesIndustry;
    });
  }, [searchTerm, selectedCategory, selectedType, selectedIndustry]);

  const handlePreview = (document) => {
    setPreviewDocument(document);
    window.open(document.pdfPath, '_blank');
  };

  const handleDownload = (document) => {
    const link = document.createElement('a');
    link.href = document.pdfPath;
    link.download = `${document.productName}-${document.documentType}.pdf`;
    link.click();
  };

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
            {t('msds.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl opacity-90"
          >
            {t('msds.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <MSDSSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedIndustry={selectedIndustry}
            onIndustryChange={setSelectedIndustry}
            categories={categories}
            documentTypes={documentTypes}
            industries={industries}
          />

          {/* Results Count */}
          <div className="mb-6 text-gray-600 dark:text-gray-400">
            Found {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
          </div>

          {/* Documents Grid */}
          {filteredDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((document) => (
                <MSDSCard
                  key={document.id}
                  document={document}
                  onPreview={handlePreview}
                  onDownload={handleDownload}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FaFilePdf className="text-6xl text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {t('msds.noResults')}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MSDSTDSViewer;

