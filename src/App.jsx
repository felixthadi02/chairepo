// import React from 'react'
// // import ComingSoonPage from './comingSoon/ComingSoon'
// import NotFound from './pages/NotFound'

// function App() {
//   return (
//     <div>
//       <NotFound/>
//     </div>
//   )
// }

// export default App


// // src/App.jsx
// import React, { useState } from 'react';
// import Header from './components/Header';
// import MobileMenu from './components/MobileMenu';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import TestimonialsPage from './pages/TestimonialsPage';
// import ContactPage from './pages/ContactPage';
// import Footer from './components/Footer';
// import Gallery from './components/Gallery';
// import BlogList from './pages/BlogPage';
// import Tea5Story from './components/Faqs';
// import StartupKit from './pages/StartupKit';
// const App = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState('home');

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const navigateTo = (page) => {
//     setCurrentPage(page);
//     setMobileMenuOpen(false);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="min-h-screen font-sans">
//       <Header
//         currentPage={currentPage}
//         navigateTo={navigateTo}
//         toggleMobileMenu={toggleMobileMenu}
//       />

//       {mobileMenuOpen && (
//         <MobileMenu
//           currentPage={currentPage}
//           navigateTo={navigateTo}
//           toggleMobileMenu={toggleMobileMenu}
//         />
//       )}

//       <main>
//         {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
//         {currentPage === 'startupkit' && <StartupKit/>}
//         {currentPage === 'about' && <AboutPage />}
//         {currentPage === 'gallery' && <Gallery />}
//         {currentPage === 'blog' && <BlogList navigateTo={navigateTo} />}
//         {currentPage === 'testimonials' && <TestimonialsPage navigateTo={navigateTo} />}
//         {currentPage === 'services' && <ServicesPage />}
//         {currentPage === 'contact-us' && <ContactPage />}
//         {currentPage === "faqs" && (<Tea5Story />)}

//       </main>

//       <Footer navigateTo={navigateTo} />
//     </div>
//   );
// };

// export default App;



// src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import TestimonialsPage from './pages/TestimonialsPage';
// import ContactPage from './pages/ContactPage';
// import Footer from './components/Footer';
// import Gallery from './components/Gallery';
// import BlogList from './pages/BlogPage';
// import Tea5Story from './components/Faqs';
// import StartupKit from './pages/StartupKit';

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen font-sans">
//         <Header />

//         <main>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/startup-kit" element={<StartupKit />} />
//             <Route path="/about-us" element={<AboutPage />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/blog" element={<BlogList />} />
//             <Route path="/testimonials" element={<TestimonialsPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/contact-us" element={<ContactPage />} />
//             <Route path="/faqs" element={<Tea5Story />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import BlogList from './pages/BlogPage';
import Tea5Story from './components/Faqs';
import StartupKit from './pages/StartupKit';
import ScrollToTop from './components/ScrollToTop';
// Remove this line: import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="min-h-screen font-sans flex flex-col ">
        <ScrollToTop />

        {/* Main content with padding for fixed header */}
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/startup-kit" element={<StartupKit />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/faqs" element={<Tea5Story />} />
            {/* Inline 404 component */}
            <Route path="*" element={
              <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center">
                  <h1 className="text-6xl md:text-8xl font-bold text-[#8dcb3f] mb-4">404</h1>
                  <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
                    Page Not Found
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                  </p>
                  <Link
                    to="/"
                    className="inline-block bg-[#8dcb3f] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Go Back Home
                  </Link>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;