import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import About from './pages/About';
// Import other pages as needed
// import OurBusiness from './pages/OurBusiness';
// import Networks from './pages/Networks';
// import Enquiries from './pages/Enquiries';
// import Careers from './pages/Careers';
// import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* Uncomment and add other pages when ready */}
          {/* <Route path="/our-business" element={<OurBusiness />} /> */}
          {/* <Route path="/networks" element={<Networks />} /> */}
          {/* <Route path="/enquiries" element={<Enquiries />} /> */}
          {/* <Route path="/careers" element={<Careers />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
