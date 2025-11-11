import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

const MainLayout = ({ children }) => {
  return (
    <motion.div
      className="flex flex-col min-h-screen w-full text-gray-900 dark:text-white bg-white dark:bg-black transition-colors duration-300"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
