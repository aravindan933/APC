import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax"; // <-- import

import MainLayout from "./components/Layout/MainLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import AcetatesManufacturing from "./pages/AcetatesManufacturing.jsx.jsx";
import PetroleumDerivatives from "./pages/PetroleumDerivatives.jsx.jsx";
import SolventsChemicals from "./pages/SolventsChemicals.jsx";
import LubricantsManufacturing from "./pages/LubricantsManufacturing.jsx";
import PolymersPlastics from "./pages/PolymersPlastics.jsx";
import WaxesJelliesWhiteOils from "./pages/WaxesJelliesWhiteOils.jsx";
import Bitumen from "./pages/Bitumen.jsx";
import Contacts from "./pages/Contacts";
import PageWrapper from "./components/PageWrapper/PageWrapper.jsx";

function App() {

  // ==========================
  // GLOBAL 3D TILT PARALLAX
  // ==========================
  useEffect(() => {
    const handleTilt = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15; // rotation strength
      const y = (e.clientY / window.innerHeight - 0.5) * 15;

      document.documentElement.style.setProperty("--tiltX", `${y * -1}deg`);
      document.documentElement.style.setProperty("--tiltY", `${x}deg`);
    };

    window.addEventListener("mousemove", handleTilt);
    return () => window.removeEventListener("mousemove", handleTilt);
  }, []);

  return (
    <div className="tilt-wrapper">
      <ParallaxProvider> {/* <-- wrap app in ParallaxProvider */}
        <Router>
          <PageWrapper>
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/acetates-manufacturing" element={<AcetatesManufacturing />} />
                <Route path="/petroleum-derivatives" element={<PetroleumDerivatives />} />
                <Route path="/solvents-chemicals" element={<SolventsChemicals />} />
                <Route path="/lubricants-manufacturing" element={<LubricantsManufacturing />} />
                <Route path="/polymers-plastics" element={<PolymersPlastics />} />
                <Route path="/waxes,-jellies-and-white-oils" element={<WaxesJelliesWhiteOils />} />
                <Route path="/bitumen,-emulsion-cutbacks" element={<Bitumen />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </MainLayout>
          </PageWrapper>
        </Router>
      </ParallaxProvider>
    </div>
  );
}

export default App;
