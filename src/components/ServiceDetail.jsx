
// // src/components/ServiceDetail.jsx
// import React from 'react';

// const ServiceDetail = ({ title, description, features, isLast }) => {
//   return (
//     <div className={`flex flex-col md:flex-row ${!isLast ? 'border-b border-gray-200 pb-12' : ''}`}>
//       <div className="md:w-1/3 mb-6 md:mb-0">
//         <h2 className="text-2xl font-bold mb-2">{title}</h2>
//         <div className="h-1 w-20 bg-green-600 mb-4"></div>
//       </div>
//       <div className="md:w-2/3">
//         <p className="text-gray-600 mb-4">
//           {description}
//         </p>
//         <ul className="space-y-2 mb-6">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-start">
//               <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//         <button className="bg-green-600 text-white font-medium py-2 px-6 hover:bg-green-700 transition-colors">
//           Request Service
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;



    // // src/components/ServiceDetail.jsx - Enhanced with better styling
    // import React from 'react';

    // const ServiceDetail = ({ title, description, features, isLast }) => {
    //   return (
    //     <div className={`flex flex-col md:flex-row ${!isLast ? 'border-b border-gray-200 pb-12' : ''} transition-all duration-300 hover:bg-amber-50 p-6 rounded-lg`}>
    //       <div className="md:w-1/3 mb-6 md:mb-0">
    //         <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
    //         <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 mb-4 rounded-full"></div>
    //       </div>
    //       <div className="md:w-2/3">
    //         <p className="text-gray-600 mb-4">
    //           {description}
    //         </p>
    //         <ul className="space-y-2 mb-6">
    //           {features.map((feature, index) => (
    //             <li key={index} className="flex items-start group">
    //               <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2 group-hover:bg-amber-200 transition-colors duration-300">
    //                 <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    //                 </svg>
    //               </div>
    //               <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
    //             </li>
    //           ))}
    //         </ul>
    //         <button className="bg-amber-600 text-white font-medium py-2 px-6 rounded-md hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-0.5">
    //           Request Service
    //         </button>
    //       </div>
    //     </div>
    //   );
    // };

    // export default ServiceDetail;


//     // src/components/ServiceDetail.jsx - Enhanced with better styling
// import React from 'react';

// const ServiceDetail = ({ title, description, features, ia }) => {
//   return (
//     <div className={`flex flex-col md:flex-row ${!isLast ? 'border-b border-gray-200 pb-12' : ''} transition-all duration-300 hover:bg-amber-50 p-6 rounded-lg`}>
//       <div className="md:w-1/3 mb-6 md:mb-0">
//         <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
//         <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 mb-4 rounded-full"></div>
//       </div>
//       <div className="md:w-2/3">
//         <p className="text-gray-600 mb-4">
//           {description}
//         </p>
//         <ul className="space-y-2 mb-6">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-start group">
//               <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2 group-hover:bg-amber-200 transition-colors duration-300">
//                 <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
//             </li>
//           ))}
//         </ul>
//         <button className="bg-amber-600 text-white font-medium py-2 px-6 rounded-md hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-0.5">
//           Request Service
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;

// src/components/ServiceDetail.jsx - Enhanced with better styling and images
import React from 'react';

const ServiceDetail = ({ title, description, features, image, isLast }) => {
  return (
    <div className={`flex flex-col md:flex-row ${!isLast ? 'border-b border-gray-200 pb-12 mb-12' : ''} transition-all duration-300 hover:bg-amber-50 p-6 rounded-lg`}>
      <div className="md:w-1/3 mb-6 md:mb-0">
        {/* Image container */}
        <div className="mb-6 rounded-lg overflow-hidden shadow-md">
          <img 
            src={image || "/api/placeholder/400/300"} 
            alt={title}
            loading='lazy'
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 mb-4 rounded-full"></div>
      </div>
      
      <div className="md:w-2/3 md:pl-8">
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2 group-hover:bg-amber-200 transition-colors duration-300">
                <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="bg-amber-600 text-white font-medium py-2 px-6 rounded-md hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-0.5">
          Request Service
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;