import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './components/Layout/MainLayout';
import Loader from './components/UI/Loader';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contact />} />
            </Routes>
          </MainLayout>
        </Router>
      )}
    </>
  );
}

export default App;