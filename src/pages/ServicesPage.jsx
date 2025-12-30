// // src/pages/ServicesPage.jsx
// import React from 'react';
// import ServiceDetail from '../components/ServiceDetail';

// const ServicesPage = () => {
//   const services = [
//     {
//       title: "Publication Services",
//       description: "Transform your research into published work with our expert guidance. Our publication services assist you in navigating the complex world of academic publishing.",
//       features: [
//         "Journal selection and targeting",
//         "Manuscript formatting and preparation",
//         "Submission guidance and support",
//         "Response to reviewer comments"
//       ]
//     },
//     {
//       title: "Research Writing",
//       description: "Elevate your research with our expert writing assistance. We help researchers articulate their findings clearly and effectively for academic audiences.",
//       features: [
//         "Literature review assistance",
//         "Methodology and results sections",
//         "Discussion and conclusion writing",
//         "Professional editing and proofreading"
//       ]
//     },
//     {
//       title: "Presentation Design",
//       description: "Craft impactful presentations that captivate your audience. Our design experts help you communicate complex ideas effectively in visual formats.",
//       features: [
//         "Conference presentation design",
//         "Visual data representation",
//         "Academic poster creation",
//         "Slide deck optimization"
//       ]
//     }
//   ];

//   return (
//     <div>
//       {/* Services Header */}
//       <div className="bg-gray-900 text-white py-16">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h1 className="text-4xl font-bold mb-4">Our Services</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Comprehensive academic support services to help you excel in your research and publications.
//           </p>
//         </div>
//       </div>

//       {/* Services List */}
//       <div className="py-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 gap-12">
//             {services.map((service, index) => (
//               <ServiceDetail 
//                 key={index}
//                 title={service.title}
//                 description={service.description}
//                 features={service.features}
//                 isLast={index === services.length - 1}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Process Section */}
//       <div className="py-16 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
//               <h3 className="text-xl font-semibold mb-2">Consultation</h3>
//               <p className="text-gray-600">We discuss your needs and goals to understand how we can best support your academic journey.</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
//               <h3 className="text-xl font-semibold mb-2">Proposal</h3>
//               <p className="text-gray-600">We develop a tailored plan with clear deliverables, timeline, and pricing for your project.</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
//               <h3 className="text-xl font-semibold mb-2">Execution</h3>
//               <p className="text-gray-600">Our experts work on your project, maintaining regular communication and updates.</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
//               <h3 className="text-xl font-semibold mb-2">Delivery</h3>
//               <p className="text-gray-600">We provide the completed work with an opportunity for revisions and ongoing support.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="py-16">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
//           <div className="bg-white shadow-md p-6 rounded-lg mb-6">
//             <h3 className="text-xl font-semibold mb-2">How do I know which service is right for me?</h3>
//             <p className="text-gray-700">
//               During our initial consultation, we'll discuss your research goals and challenges to determine which services will best meet your needs. We often customize our service packages to address specific requirements.
//             </p>
//           </div>
          
//           <div className="bg-white shadow-md p-6 rounded-lg mb-6">
//             <h3 className="text-xl font-semibold mb-2">What is your typical turnaround time?</h3>
//             <p className="text-gray-700">
//               Turnaround times vary depending on the service and project scope. For editing and proofreading, we typically deliver within 5-7 business days. For more comprehensive services like research writing or publication assistance, we'll provide a detailed timeline during consultation.
//             </p>
//           </div>
          
//           <div className="bg-white shadow-md p-6 rounded-lg mb-6">
//             <h3 className="text-xl font-semibold mb-2">Do you work with researchers in all disciplines?</h3>
//             <p className="text-gray-700">
//               Yes, our team includes experts from various academic backgrounds, allowing us to support researchers across disciplines including STEM, social sciences, humanities, and more. We'll match you with a specialist in your field.
//             </p>
//           </div>
          
//           <div className="bg-white shadow-md p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">What if I'm not satisfied with the results?</h3>
//             <p className="text-gray-700">
//               Your satisfaction is our priority. All our services include a revision period where you can provide feedback and request changes. We're committed to working with you until you're completely satisfied with the deliverables.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;


// src/pages/ServicesPage.jsx
import React, { useState } from 'react';
import ServiceDetail from '../components/ServiceDetail';
import bgImg2 from "../assets/bg2.webp";
import bgImg1 from "../assets/bg1.webp";

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Publication Services",
      image: bgImg1,
      description: "Transform your research into published work with our expert guidance. Our publication services assist you in navigating the complex world of academic publishing.",
      features: [
        "Journal selection and targeting",
        "Manuscript formatting and preparation",
        "Submission guidance and support",
        "Response to reviewer comments"
      ]
    },
    {
      title: "Research Writing",
      image: bgImg1,
      description: "Elevate your research with our expert writing assistance. We help researchers articulate their findings clearly and effectively for academic audiences.",
      features: [
        "Literature review assistance",
        "Methodology and results sections",
        "Discussion and conclusion writing",
        "Professional editing and proofreading"
      ]
    },
    {
      title: "Presentation Design",
      image: bgImg2,
      description: "Craft impactful presentations that captivate your audience. Our design experts help you communicate complex ideas effectively in visual formats.",
      features: [
        "Conference presentation design",
        "Visual data representation",
        "Academic poster creation",
        "Slide deck optimization"
      ]
    },    {
        title: "Publication Services",
        image: bgImg1,
        description: "Transform your research into published work with our expert guidance. Our publication services assist you in navigating the complex world of academic publishing.",
        features: [
          "Journal selection and targeting",
          "Manuscript formatting and preparation",
          "Submission guidance and support",
          "Response to reviewer comments"
        ]
      },
      {
        title: "Publication Services",
        image: bgImg1,
        description: "Transform your research into published work with our expert guidance. Our publication services assist you in navigating the complex world of academic publishing.",
        features: [
          "Journal selection and targeting",
          "Manuscript formatting and preparation",
          "Submission guidance and support",
          "Response to reviewer comments"
        ]
      },
      {
        title: "Publication Services",
        image: bgImg1,
        description: "Transform your research into published work with our expert guidance. Our publication services assist you in navigating the complex world of academic publishing.",
        features: [
          "Journal selection and targeting",
          "Manuscript formatting and preparation",
          "Submission guidance and support",
          "Response to reviewer comments"
        ]
      }
  ];

  const faqs = [
    {
      question: "How do I know which service is right for me?",
      answer: "During our initial consultation, we'll discuss your research goals and challenges to determine which services will best meet your needs. We often customize our service packages to address specific requirements."
    },
    {
      question: "What is your typical turnaround time?",
      answer: "Turnaround times vary depending on the service and project scope. For editing and proofreading, we typically deliver within 5-7 business days. For more comprehensive services like research writing or publication assistance, we'll provide a detailed timeline during consultation."
    },
    {
      question: "Do you work with researchers in all disciplines?",
      answer: "Yes, our team includes experts from various academic backgrounds, allowing us to support researchers across disciplines including STEM, social sciences, humanities, and more. We'll match you with a specialist in your field."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "Your satisfaction is our priority. All our services include a revision period where you can provide feedback and request changes. We're committed to working with you until you're completely satisfied with the deliverables."
    }
  ];

  return (
    <div>
    {/* Services Header */}
<div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-20 relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Our <span className="text-amber-300">Services</span>
    </h1>
    <div className="w-24 h-1 mx-auto bg-amber-400 rounded-full mb-6"></div>
    <p className="text-xl max-w-3xl mx-auto text-amber-50">
      Comprehensive academic support services to help you excel in your research and publications.
    </p>
  </div>
</div>

      {/* Services List */}
      <div className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div key={index} className="transform transition-all duration-500 hover:-translate-y-2">
                <ServiceDetail 
                  title={service.title}
                  image={service.image}
                  description={service.description}
                  features={service.features}
                  isLast={index === services.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-100 opacity-30"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4">Our Process</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Process Step 1 */}
            <div className="text-center relative group">
              <div className="absolute top-12 left-1/2 right-0 h-0.5 bg-amber-200 hidden md:block -z-10"></div>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:shadow-amber-300/50 transition-all duration-300 group-hover:scale-110">1</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-300">Consultation</h3>
              <p className="text-gray-600">We discuss your needs and goals to understand how we can best support your academic journey.</p>
            </div>
            
            {/* Process Step 2 */}
            <div className="text-center relative group">
              <div className="absolute top-12 left-0 right-1/2 h-0.5 bg-amber-200 hidden md:block -z-10"></div>
              <div className="absolute top-12 left-1/2 right-0 h-0.5 bg-amber-200 hidden md:block -z-10"></div>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:shadow-amber-300/50 transition-all duration-300 group-hover:scale-110">2</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-300">Proposal</h3>
              <p className="text-gray-600">We develop a tailored plan with clear deliverables, timeline, and pricing for your project.</p>
            </div>
            
            {/* Process Step 3 */}
            <div className="text-center relative group">
              <div className="absolute top-12 left-0 right-1/2 h-0.5 bg-amber-200 hidden md:block -z-10"></div>
              <div className="absolute top-12 left-1/2 right-0 h-0.5 bg-amber-200 hidden md:block -z-10"></div>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:shadow-amber-300/50 transition-all duration-300 group-hover:scale-110">3</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-300">Execution</h3>
              <p className="text-gray-600">Our experts work on your project, maintaining regular communication and updates.</p>
            </div>
            
            {/* Process Step 4 */}
            <div className="text-center relative group">
              <div className="absolute top-12 left-0 right-1/2 h-0.5 bg-amber-200 hidden md:block -z-10"></div>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:shadow-amber-300/50 transition-all duration-300 group-hover:scale-110">4</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-300">Delivery</h3>
              <p className="text-gray-600">We provide the completed work with an opportunity for revisions and ongoing support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>
          
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg mb-6 border-l-4 border-amber-500 transition-all duration-300"
            >
              <button 
                className="text-xl font-semibold mb-2 text-left w-full flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-amber-600 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`text-gray-700 mt-2 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {faq.answer}
              </div>
              <div className={`text-gray-700 ${activeIndex === index ? 'hidden' : 'block'}`}>
                {faq.answer.length > 100 ? `${faq.answer.substring(0, 100)}...` : faq.answer}
              </div>
            </div>
          ))}
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">Still have questions about our services?</p>
            <a href="/contact-us" className="bg-amber-600 text-white font-medium py-3 px-8 rounded-md inline-block hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;