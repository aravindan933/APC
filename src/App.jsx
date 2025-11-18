// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import AcetatesManufacturing from "./pages/AcetatesManufacturing.jsx";
import PetroleumDerivatives from "./pages/PetroleumDerivatives.jsx";
import SolventsChemicals from "./pages/SolventsChemicals.jsx";
import LubricantsManufacturing from "./pages/LubricantsManufacturing.jsx";
import PolymersPlastics from "./pages/PolymersPlastics.jsx";
import WaxesJelliesWhiteOils from "./pages/WaxesJelliesWhiteOils.jsx";
import Bitumen from "./pages/Bitumen.jsx";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
