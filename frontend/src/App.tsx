// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import ProjectsPage from './pages/ProjectsPage';
// import GalleryPage from './pages/GalleryPage';
// import ContactPage from './pages/ContactPage';
// import LoginPage from './pages/LoginPage';
// import NotFoundPage from './pages/NotFoundPage';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/projects" element={<ProjectsPage />} />
//           <Route path="/gallery" element={<GalleryPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  const location = useLocation();
  const hideLayoutRoutes = ['/login'];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
