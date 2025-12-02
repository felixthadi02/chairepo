// // src/components/MobileMenu.jsx
// import React from 'react';

// const MobileMenu = ({ currentPage, navigateTo, toggleMobileMenu }) => {
//   return (
//     <div className="fixed inset-0 bg-white z-50 flex flex-col p-5 md:hidden">
//       <div className="flex justify-end mb-6">
//         <button onClick={toggleMobileMenu} className="focus:outline-none">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
//       <div className="flex flex-col space-y-6">
//         <button 
//           onClick={() => navigateTo('home')}
//           className={currentPage === 'home' 
//             ? "text-green-600 font-medium border-b border-gray-200 pb-3 text-left" 
//             : "text-gray-700 hover:text-green-600 border-b border-gray-200 pb-3 text-left"
//           }
//         >
//           Home
//         </button>
//         <button 
//           onClick={() => navigateTo('about')}
//           className={currentPage === 'about' 
//             ? "text-green-600 font-medium border-b border-gray-200 pb-3 text-left" 
//             : "text-gray-700 hover:text-green-600 border-b border-gray-200 pb-3 text-left"
//           }
//         >
//           About
//         </button>
//         <button 
//           onClick={() => navigateTo('services')}
//           className={currentPage === 'services' 
//             ? "text-green-600 font-medium border-b border-gray-200 pb-3 text-left" 
//             : "text-gray-700 hover:text-green-600 border-b border-gray-200 pb-3 text-left"
//           }
//         >
//           Services
//         </button>
//         <button 
//           onClick={() => navigateTo('testimonials')}
//           className={currentPage === 'testimonials' 
//             ? "text-green-600 font-medium border-b border-gray-200 pb-3 text-left" 
//             : "text-gray-700 hover:text-green-600 border-b border-gray-200 pb-3 text-left"
//           }
//         >
//           Testimonials
//         </button>
//         <button 
//           onClick={() => navigateTo('contact-us')}
//           className="border border-gray-900 text-center p-3 font-medium"
//         >
//           CONTACT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;



// src/components/MobileMenu.jsx
import React from 'react';

const MobileMenu = ({ currentPage, navigateTo, toggleMobileMenu }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col md:hidden">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md" onClick={toggleMobileMenu}></div>

      {/* Menu content with glass effect */}
      <div className="relative ml-auto h-full w-4/5 max-w-sm bg-white/90 backdrop-blur-sm shadow-2xl flex flex-col p-6 animate-slide-in">
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none w-10 h-10 rounded-full flex items-center justify-center bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-1">
          {['home', 'about', 'services', 'testimonials'].map((page) => (
            <button
              key={page}
              onClick={() => navigateTo(page)}
              className={`
                py-4 px-4 text-left rounded-lg transition-all duration-300
                ${currentPage === page
                  ? "bg-amber-50 text-amber-600 font-medium border-l-4 border-amber-500"
                  : "text-gray-700 hover:bg-amber-50/50 hover:text-amber-600 border-l-4 border-transparent"
                }
              `}
            >
              <div className="flex items-center">
                <span className="capitalize text-lg">{page}</span>
                {currentPage === page && (
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </button>
          ))}

          <div className="pt-6">
            <button
              onClick={() => navigateTo('contact-us')}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-amber-600/30 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              CONTACT US
            </button>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-auto pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="w-9 h-9 rounded-full backdrop-blur-sm bg-white/20 border border-amber-200/50 flex items-center justify-center hover:bg-amber-600/80 hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full backdrop-blur-sm bg-white/20 border border-amber-200/50 flex items-center justify-center hover:bg-amber-600/80 hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full backdrop-blur-sm bg-white/20 border border-amber-200/50 flex items-center justify-center hover:bg-amber-600/80 hover:text-white transition-all duration-300 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Nexus Publications
          </p>
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS for the animation
/*
@keyframes slide-in {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.animate-slide-in {
  animation: slide-in 0.3s ease-out forwards;
}
*/

export default MobileMenu;