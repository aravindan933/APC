import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/loader"; // Ensure this path is correct

// Accept children safely
const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on every route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // loader duration in ms

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading ? <Loader /> : children || null} {/* fallback to null if children is undefined */}
    </>
  );
};

export default PageWrapper;
