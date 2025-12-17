

// import React, { useState, useEffect } from "react";
// import icon from "../assets/logo.png";

// const Header = ({ currentPage, navigateTo }) => {
//   // Track scroll position
//   const [scrollY, setScrollY] = useState(0);
//   // New state for mobile menu
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Navigation items
//   const navItems = [
//     { title: "Home", link: "home" },
//     { title: "StartUp Kit", link: "startupkit" },
//     { title: "About", link: "about" },
//     { title: "Gallery", link: "gallery" },
//     { title: "FAQs", link: "faqs" },
//     { title: "Blog", link: "blog" },
//     { title: "Contact", link: "contact-us" }
//   ];

//   const leftNavItems = navItems.slice(0, 3);
//   const rightNavItems = navItems.slice(3);

//   // Determine header state
//   const isTop = scrollY < 50;
//   const isSmaller = scrollY > 100;

//   // Header classes - always green background when scrolled
//   const headerClasses = `
//     fixed w-full transition-all duration-500 z-50
//     ${!isTop ? "bg-[#8dcb3f] shadow-md" : "transparent"}
//   `;

//   // Background gradient for when at top
//   const gradientStyle = isTop ? {
//     background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)"
//   } : {};

//   return (
//     <header
//       className={headerClasses}
//       style={gradientStyle}
//     >
//       <div className="w-full mx-auto">
//         {/* Main Navigation - Hidden on mobile */}
//         <nav className="h-full">
//           <ul
//             id="mainmenu"
//             className="hidden md:flex justify-center items-center h-full text-center mx-auto relative"
//             style={{ padding: isSmaller ? '0' : '50px 0 0 0', transition: 'all 0.3s ease' }}
//           >
//             {/* Left side nav items */}
//             {leftNavItems.map((item, index) => (
//               <li key={`left-${index}`} className="relative inline-block text-center">
//                 <a
//                   href={`#${item.link}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     navigateTo(item.link);
//                   }}
//                   className={`
//                     inline-block font-semibold transition-all
//                     ${currentPage === item.link 
//                       ? (isTop ? "text-yellow-300" : "text-white rounded-md") 
//                       : (isTop 
//                         ? "text-white hover:text-yellow-300" 
//                         : "text-gray-800 hover:text-white  rounded-md")
//                     }
//                   `}
//                   style={{ padding: isSmaller ? '18px 20px' : '18px 20px' }}
//                 >
//                   {item.title}
//                 </a>
//               </li>
//             ))}

//             {/* Center Logo */}
//             <li className="logo_pos inline-block mx-10 transition-all duration-300 relative">
//               <img
//                 src={icon}
//                 alt="Logo"
//                 className={`
//                   c_logo_light transition-all duration-300
//                   ${isSmaller ? 'h-[45px]' : 'h-[105px]'}

//                 `}
//                 onClick={() => navigateTo("home")}
//                 style={{
//                   cursor: 'pointer',
//                   marginTop: isSmaller ? '10px' : '-15px',
//                   marginLeft: '40px',
//                   marginRight: '40px'
//                 }}
//               />
//             </li>

//             {/* Right side nav items */}
//             {rightNavItems.map((item, index) => (
//               <li key={`right-${index}`} className="relative inline-block text-center">
//                 <a
//                   href={`#${item.link}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     navigateTo(item.link);
//                   }}
//                   className={`
//                     inline-block font-semibold transition-all
//                     ${currentPage === item.link 
//                       ? (isTop ? "text-yellow-300" : "text-white  rounded-md") 
//                       : (isTop 
//                         ? "text-white hover:text-yellow-300" 
//                         : "text-gray-800 hover:text-white  rounded-md")
//                     }
//                   `}
//                   style={{ padding: isSmaller ? '18px 20px' : '18px 20px' }}
//                 >
//                   {item.title}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile menu container - green background */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden absolute top-full left-0 w-full bg-[#8dcb3f] shadow-lg z-50">
//               <ul className="flex flex-col w-full">
//                 {[...leftNavItems, ...rightNavItems].map((item, index) => (
//                   <li key={`mobile-${index}`} className="w-full border-b border-black border-opacity-10">
//                     <a
//                       href={`#${item.link}`}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         navigateTo(item.link);
//                         setIsMobileMenuOpen(false);
//                       }}
//                       className={`
//                         block font-semibold py-4 px-6 transition-all
//                         ${currentPage === item.link 
//                           ? "text-white bg-black bg-opacity-15" 
//                           : "text-gray-800 hover:text-white hover:bg-black hover:bg-opacity-10"
//                         }
//                       `}
//                     >
//                       {item.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </nav>

//         {/* Mobile header container */}
//         <div className="md:hidden h-[70px] flex items-center justify-between px-4">
//           {/* Mobile Logo */}
//           <div className="flex items-center">
//             <img
//               src={icon}
//               alt="Logo"
//               className={`h-12 ${!isTop ? ' ' : ''}`}
//               onClick={() => navigateTo("home")}
//               style={{ cursor: 'pointer' }}
//             />
//           </div>

//           {/* Mobile Navigation Button */}
//           <div className="flex items-center">
//             <button
//               className={`focus:outline-none p-2 transition-colors ${
//                 isTop ? "text-white" : "text-gray-800 hover:text-white"
//               }`}
//               onClick={toggleMobileMenu}
//               aria-label="Toggle menu"
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMobileMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import icon from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  // Track scroll position
  const [scrollY, setScrollY] = useState(0);
  // New state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items with proper routes
  const navItems = [
    { title: "Home", link: "/" },
    { title: "StartUp Kit", link: "/startup-kit" },
    { title: "About", link: "/about" },
    { title: "Gallery", link: "/gallery" },
    { title: "FAQs", link: "/faqs" },
    // { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact-us" }
  ];

  const leftNavItems = navItems.slice(0, 3);
  const rightNavItems = navItems.slice(3);

  // Determine header state
  const isTop = scrollY < 50;
  const isSmaller = scrollY > 100;

  // Header classes - always green background when scrolled
  const headerClasses = `
    fixed w-full transition-all duration-500 z-50
    ${!isTop ? "bg-[#8dcb3f] shadow-md" : "transparent"}
  `;

  // Background gradient for when at top
  const gradientStyle = isTop ? {
    background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)"
  } : {};

  return (
    <header
      className={headerClasses}
      style={gradientStyle}
    >
      <div className="w-full mx-auto">
        {/* Main Navigation - Hidden on mobile */}
        <nav className="h-full">
          <ul
            id="mainmenu"
            className="hidden md:flex justify-center items-center h-full text-center mx-auto relative"
            style={{ padding: isSmaller ? '0' : '50px 0 0 0', transition: 'all 0.3s ease' }}
          >
            {/* Left side nav items */}
            {leftNavItems.map((item, index) => (
              <li key={`left-${index}`} className="relative inline-block text-center">
                <Link
                  to={item.link}
                  className={`
                    inline-block font-semibold transition-all
                    ${currentPage === item.link
                      ? (isTop ? "text-yellow-300" : "text-white rounded-md")
                      : (isTop
                        ? "text-white hover:text-yellow-300"
                        : "text-gray-800 hover:text-white rounded-md")
                    }
                  `}
                  style={{ padding: isSmaller ? '18px 20px' : '18px 20px' }}
                >
                  {item.title}
                </Link>
              </li>
            ))}

            {/* Center Logo */}
            <li className="logo_pos inline-block mx-10 transition-all duration-300 relative">
              <Link to="/">
                <img
                  src={icon}
                  alt="Logo"
                  className={`
                    c_logo_light transition-all duration-300
                    ${isSmaller ? 'h-[45px]' : 'h-[105px]'}
                  `}
                  style={{
                    cursor: 'pointer',
                    marginTop: isSmaller ? '10px' : '-15px',
                    marginLeft: '40px',
                    marginRight: '40px'
                  }}
                />
              </Link>
            </li>

            {/* Right side nav items */}
            {rightNavItems.map((item, index) => (
              <li key={`right-${index}`} className="relative inline-block text-center">
                <Link
                  to={item.link}
                  className={`
                    inline-block font-semibold transition-all
                    ${currentPage === item.link
                      ? (isTop ? "text-yellow-300" : "text-white rounded-md")
                      : (isTop
                        ? "text-white hover:text-yellow-300"
                        : "text-gray-800 hover:text-white rounded-md")
                    }
                  `}
                  style={{ padding: isSmaller ? '18px 20px' : '18px 20px' }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu container - green background */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#8dcb3f] shadow-lg z-50">
              <ul className="flex flex-col w-full">
                {navItems.map((item, index) => (
                  <li key={`mobile-${index}`} className="w-full border-b border-black border-opacity-10">
                    <Link
                      to={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        block font-semibold py-4 px-6 transition-all
                        ${currentPage === item.link
                          ? "text-white bg-black bg-opacity-15"
                          : "text-gray-800 hover:text-white hover:bg-black hover:bg-opacity-10"
                        }
                      `}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* Mobile header container */}
        <div className="md:hidden h-[70px] flex items-center justify-between px-4">
          {/* Mobile Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={icon}
                alt="Logo"
                className={`h-12 ${!isTop ? ' ' : ''}`}
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center">
            <button
              className={`focus:outline-none p-2 transition-colors ${isTop ? "text-white" : "text-gray-800 hover:text-white"
                }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;