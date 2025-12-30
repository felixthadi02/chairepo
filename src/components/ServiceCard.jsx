

// // src/components/ServiceCard.jsx - Enhanced with animations and better hover effects
// import React from 'react';

// const ServiceCard = ({ title, description, onClick }) => {
//   return (
//     <div className="bg-white p-6 shadow-md rounded-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-2 border-amber-500 group">
//       <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600 transition-colors duration-300">{title}</h3>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <button 
//         onClick={onClick} 
//         className="text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-300 inline-flex items-center"
//       >
//         Learn more 
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default ServiceCard;



import React from 'react';

const ServiceCard = ({ title, description, image, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full border-b-4 border-amber-500 relative group cursor-pointer"
      onClick={onClick}
    >
      {/* Overlay gradient for consistent style */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60 pointer-events-none"></div>
      
      {/* Image container with fixed height */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading='lazy'
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay on image for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Title on image */}
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">
          {title}
        </h3>
      </div>
      
      {/* Description container */}
      <div className="p-6">
        <p className="text-[#5a7a9a] mb-4">{description}</p>
        <div className="flex items-center text-amber-500 font-medium group-hover:text-amber-600 transition-colors duration-300">
          Learn more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
