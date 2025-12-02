// // src/pages/TestimonialsPage.jsx
// import React from 'react';
// import TestimonialCard from '../components/TestimonialCard';

// const TestimonialsPage = () => {
//   const testimonials = [
//     {
//       name: "Dr. Sarah Chen",
//       title: "Assistant Professor, Biology",
//       testimonial: "Nexus Publications transformed my research paper. Their expert guidance helped me get published in a top-tier journal. I highly recommend their services to any researcher looking to elevate their work."
//     },
//     {
//       name: "Prof. Michael Rodriguez",
//       title: "Department of Economics",
//       testimonial: "The presentation design service exceeded my expectations. My conference presentation was clear, professional, and engaging. Several colleagues asked about who designed it!"
//     },
//     {
//       name: "Dr. Jennifer Park",
//       title: "Research Scientist",
//       testimonial: "Working with Nexus Publications was a game-changer for my academic career. Their publication services helped me navigate the submission process for my first major paper, and their guidance through the reviewer feedback was invaluable."
//     },
//     {
//       name: "Ahmed Hassan, PhD",
//       title: "Associate Professor, Computer Science",
//       testimonial: "After struggling with multiple journal rejections, I turned to Nexus. Their team helped me restructure my research paper and target the right journals. Within three months, my paper was accepted at a prestigious conference."
//     },
//     {
//       name: "Dr. Emma Wilson",
//       title: "Postdoctoral Researcher",
//       testimonial: "The research writing assistance I received was outstanding. My methodology section was completely transformed, making my research approach much clearer. This service is worth every penny for early-career researchers."
//     },
//     {
//       name: "Prof. David Thompson",
//       title: "Senior Faculty, Political Science",
//       testimonial: "I've worked with many academic service providers over my 20-year career, and Nexus Publications stands out for their attention to detail and commitment to quality. They've become my go-to resource for all publication needs."
//     }
//   ];

//   return (
//     <div className="py-16 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard 
//               key={index}
//               name={testimonial.name}
//               title={testimonial.title}
//               testimonial={testimonial.testimonial}
//             />
//           ))}
//         </div>

//         {/* Statistics Section */}
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-3xl font-bold text-center mb-10">Our Impact</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
//             <div>
//               <p className="text-4xl font-bold text-green-600 mb-2">500+</p>
//               <p className="text-gray-700">Researchers Supported</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-green-600 mb-2">300+</p>
//               <p className="text-gray-700">Papers Published</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-green-600 mb-2">95%</p>
//               <p className="text-gray-700">Client Satisfaction</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-green-600 mb-2">50+</p>
//               <p className="text-gray-700">Academic Journals</p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 text-center">
//           <h2 className="text-2xl font-bold mb-4">Ready to join our success stories?</h2>
//           <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//             Experience the difference professional academic support can make in your research journey.
//             Contact us today to discuss how we can help you achieve your publication goals.
//           </p>
//           <button className="bg-green-600 text-white font-medium py-3 px-8 rounded-md hover:bg-green-700 transition-colors">
//             Contact Us Today
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsPage;



// src/pages/TestimonialsPage.jsx
// import React, { useState } from 'react';
// import TestimonialCard from '../components/TestimonialCard';

// const TestimonialsPage = ({ navigateTo }) => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const testimonials = [
//         {
//             name: "Dr. Sarah Chen",
//             title: "Assistant Professor, Biology",
//             testimonial: "Nexus Publications transformed my research paper. Their expert guidance helped me get published in a top-tier journal. I highly recommend their services to any researcher looking to elevate their work."
//         },
//         {
//             name: "Prof. Michael Rodriguez",
//             title: "Department of Economics",
//             testimonial: "The presentation design service exceeded my expectations. My conference presentation was clear, professional, and engaging. Several colleagues asked about who designed it!"
//         },
//         {
//             name: "Dr. Jennifer Park",
//             title: "Research Scientist",
//             testimonial: "Working with Nexus Publications was a game-changer for my academic career. Their publication services helped me navigate the submission process for my first major paper, and their guidance through the reviewer feedback was invaluable."
//         },
//         {
//             name: "Ahmed Hassan, PhD",
//             title: "Associate Professor, Computer Science",
//             testimonial: "After struggling with multiple journal rejections, I turned to Nexus. Their team helped me restructure my research paper and target the right journals. Within three months, my paper was accepted at a prestigious conference."
//         },
//         {
//             name: "Dr. Emma Wilson",
//             title: "Postdoctoral Researcher",
//             testimonial: "The research writing assistance I received was outstanding. My methodology section was completely transformed, making my research approach much clearer. This service is worth every penny for early-career researchers."
//         },
//         {
//             name: "Prof. David Thompson",
//             title: "Senior Faculty, Political Science",
//             testimonial: "I've worked with many academic service providers over my 20-year career, and Nexus Publications stands out for their attention to detail and commitment to quality. They've become my go-to resource for all publication needs."
//         }
//     ];

//     // Stats with animations
//     const stats = [
//         { value: 500, label: "Researchers Supported", prefix: "" },
//         { value: 300, label: "Papers Published", prefix: "" },
//         { value: 95, label: "Client Satisfaction", prefix: "", suffix: "%" },
//         { value: 50, label: "Academic Journals", prefix: "" }
//     ];

//     return (
//         <div className="pt-16 pb-24 bg-gradient-to-b from-amber-50 to-white">
//             <div className="max-w-6xl mx-auto px-4">
//                 <h1 className="text-4xl font-bold mb-4 text-center">
//                     What Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Clients</span> Say
//                 </h1>
//                 <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>

//                 {/* Featured Testimonial */}
//                 <div className="mb-16 bg-white rounded-lg shadow-xl p-8 border-t-4 border-amber-500 relative">
//                     <div className="absolute -top-5 left-10 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded">
//                         FEATURED
//                     </div>
//                     <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//                         <div className="w-24 h-24 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
//                             {testimonials[activeIndex].name.split(' ')[0][0] + testimonials[activeIndex].name.split(' ')[1][0]}
//                         </div>
//                         <div className="flex-1">
//                             <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//                                 <div>
//                                     <h3 className="text-xl font-bold text-gray-800">{testimonials[activeIndex].name}</h3>
//                                     <p className="text-amber-600">{testimonials[activeIndex].title}</p>
//                                 </div>
//                                 <div className="flex mt-2 md:mt-0">
//                                     {[0, 1, 2, 3, 4].map((index) => (
//                                         <svg key={index} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                         </svg>
//                                     ))}
//                                 </div>
//                             </div>
//                             <p className="text-gray-700 text-lg italic mb-4">"{testimonials[activeIndex].testimonial}"</p>
//                             <div className="flex justify-center md:justify-end space-x-2">
//                                 {testimonials.map((_, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => setActiveIndex(index)}
//                                         className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-amber-500' : 'bg-gray-300'} transition-colors duration-300`}
//                                         aria-label={`View testimonial ${index + 1}`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Testimonial Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//                     {testimonials.filter((_, index) => index !== activeIndex).map((testimonial, index) => (
//                         <div
//                             key={index}
//                             className="transform transition-all duration-300 hover:-translate-y-2"
//                         >
//                             <TestimonialCard
//                                 name={testimonial.name}
//                                 title={testimonial.title}
//                                 testimonial={testimonial.testimonial}
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Statistics Section */}
//                 <div className="bg-white p-10 rounded-lg shadow-xl mb-16 border-t-2 border-amber-500 relative overflow-hidden">
//                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full opacity-50"></div>
//                     <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-100 rounded-full opacity-50"></div>

//                     <h2 className="text-3xl font-bold text-center mb-4 relative z-10">Our Impact</h2>
//                     <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-10"></div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-10">
//                         {stats.map((stat, index) => (
//                             <div
//                                 key={index}
//                                 className="group hover:bg-amber-50 p-4 rounded-lg transition-colors duration-300"
//                             >
//                                 <p className="text-5xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
//                                     {stat.prefix}{stat.value}{stat.suffix}
//                                     <span className="text-3xl text-amber-400">+</span>
//                                 </p>
//                                 <p className="text-gray-700 font-medium">{stat.label}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white p-10 rounded-lg shadow-xl relative overflow-hidden">
//                     <div className="absolute inset-0 opacity-10">
//                         <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
//                             <path fill="none" d="M0 0h800v800H0z" />
//                             <path fill="#fff" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
//                             <path fill="#fff" d="M-31 229L237 261 390 382 731 737M520 660L309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
//                             <path fill="#fff" d="M520 660L309 538 295 764 731 737M520 660L309 538 40 599M520 660L309 538M520 660L126.5 879.5M520 660L731 737M520 660L295 764M520 660M309 538L40 599 295 764M309 538L295 764M309 538M295 764L126.5 879.5M295 764L731 737M295 764M731 737L126.5 879.5M731 737M126.5 879.5" />
//                         </svg>
//                     </div>


//                     {/* / When used in the Call to Action section: */}
//                     <div className="relative z-10">
//                         <h2 className="text-3xl font-bold mb-4">Ready to join our success stories?</h2>
//                         <p className="mb-8 max-w-2xl mx-auto text-white/90">
//                             Experience the difference professional academic support can make in your research journey.
//                             Contact us today to discuss how we can help you achieve your publication goals.
//                         </p>
//                         <button
//                             onClick={() => navigateTo('contact-us')}
//                             className="bg-white text-amber-600 font-medium py-3 px-10 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-amber-700/30 transform hover:-translate-y-1"
//                         >
//                             Contact Us Today
//                         </button>
//                     </div>
//                 </div>

//                 {/* <div className="mt-20 text-center">
//                     <p className="text-gray-500 mb-6">Trusted by academics from leading institutions</p>
//                     <div className="flex flex-wrap justify-center gap-8">
//                         {[1, 2, 3, 4, 5].map((index) => (
//                             <div key={index} className="backdrop-blur-sm bg-white/40 w-28 h-20 rounded-lg border border-white/60 flex items-center justify-center shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-white/60">
//                                 <div className="w-20 h-10 bg-gray-300/50 rounded flex items-center justify-center">
//                                     <div className="text-xs text-gray-500 font-semibold">UNIVERSITY {index}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     );
// };

// export default TestimonialsPage;


// src/pages/TestimonialsPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsPage = ({ navigateTo }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplay = true;

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Assistant Professor, Biology",
      testimonial: "Nexus Publications transformed my research paper. Their expert guidance helped me get published in a top-tier journal. I highly recommend their services to any researcher looking to elevate their work."
    },
    {
      name: "Prof. Michael Rodriguez",
      title: "Department of Economics",
      testimonial: "The presentation design service exceeded my expectations. My conference presentation was clear, professional, and engaging. Several colleagues asked about who designed it!"
    },
    {
      name: "Dr. Jennifer Park",
      title: "Research Scientist",
      testimonial: "Working with Nexus Publications was a game-changer for my academic career. Their publication services helped me navigate the submission process for my first major paper, and their guidance through the reviewer feedback was invaluable."
    },
    {
      name: "Ahmed Hassan, PhD",
      title: "Associate Professor, Computer Science",
      testimonial: "After struggling with multiple journal rejections, I turned to Nexus. Their team helped me restructure my research paper and target the right journals. Within three months, my paper was accepted at a prestigious conference."
    },
    {
      name: "Dr. Emma Wilson",
      title: "Postdoctoral Researcher",
      testimonial: "The research writing assistance I received was outstanding. My methodology section was completely transformed, making my research approach much clearer. This service is worth every penny for early-career researchers."
    },
    {
      name: "Prof. David Thompson",
      title: "Senior Faculty, Political Science",
      testimonial: "I've worked with many academic service providers over my 20-year career, and Nexus Publications stands out for their attention to detail and commitment to quality. They've become my go-to resource for all publication needs."
    }
  ];

  // Stats with animations
  const stats = [
    { value: 500, label: "Researchers Supported", prefix: "", suffix: "+" },
    { value: 300, label: "Papers Published", prefix: "", suffix: "+" },
    { value: 95, label: "Client Satisfaction", prefix: "", suffix: "%" },
    { value: 50, label: "Academic Journals", prefix: "", suffix: "+" }
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        handleNext();
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isAnimating]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 10) - 5;
  };

  return (
    <div className="pt-16 pb-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-center">
          What Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Clients</span> Say
        </h1>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>

        {/* Featured Testimonial */}
        <div className="mb-20 backdrop-blur-sm bg-white/90 rounded-xl shadow-2xl p-8 border border-white/50 relative overflow-hidden group">
          <div className="absolute -top-5 left-10 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
            FEATURED
          </div>
          <div className="absolute -top-3 -left-3 w-20 h-20 border-2 border-amber-200 rounded-full opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-amber-200 rounded-full opacity-40 group-hover:scale-110 transition-transform duration-500"></div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 md:h-96 w-full">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <motion.div
                        key={`avatar-${index}`}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                          rotate: randomRotateY(),
                        }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.95,
                          rotate: isActive ? 0 : randomRotateY(),
                          zIndex: isActive ? 999 : 0,
                          y: isActive ? [0, -20, 0] : 0,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                          rotate: randomRotateY(),
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className={`absolute inset-0 origin-center flex items-center justify-center ${!isActive && 'hidden'}`}
                      >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-600 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"></div>
                          <div className="absolute inset-4 bg-amber-100 bg-opacity-10 backdrop-blur-md rounded-full flex items-center justify-center">
                            <div className="text-6xl md:text-8xl font-bold text-white">
                              {testimonial.name.split(' ')[0][0] + testimonial.name.split(' ')[1][0]}
                            </div>
                          </div>
                          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <div className="flex">
                              {[0, 1, 2, 3, 4].map((starIndex) => (
                                <svg key={starIndex} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              <div className="flex flex-col justify-between h-full">
                <motion.div
                  key={`testimonial-content-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{testimonials[activeIndex].name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{testimonials[activeIndex].title}</p>
                  <div className="relative">
                    <svg className="absolute -top-6 -left-6 w-12 h-12 text-amber-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <motion.p className="text-lg text-gray-700 italic ml-4 mb-6">
                      {testimonials[activeIndex].testimonial.split(" ").map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, filter: "blur(4px)" }}
                          animate={{ opacity: 1, filter: "blur(0px)" }}
                          transition={{ duration: 0.2, delay: index * 0.01 }}
                          className="inline-block"
                        >
                          {word}&nbsp;
                        </motion.span>
                      ))}
                    </motion.p>
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-4">
                  <div className="flex space-x-2 mb-4 sm:mb-0">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (isAnimating) return;
                          setIsAnimating(true);
                          setActiveIndex(index);
                          setTimeout(() => setIsAnimating(false), 500);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
                          ? 'bg-amber-500 w-6'
                          : 'bg-gray-300 hover:bg-amber-300'
                          }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handlePrev}
                      className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg border border-amber-200 flex items-center justify-center group transition-all duration-300 transform hover:scale-105"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-amber-600 group-hover:text-amber-800 group-hover:-translate-x-1 transition-all duration-300"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg border border-amber-200 flex items-center justify-center group transition-all duration-300 transform hover:scale-105"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-amber-600 group-hover:text-amber-800 group-hover:translate-x-1 transition-all duration-300"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatePresence>
            {testimonials.filter((_, index) => index !== activeIndex).map((testimonial, index) => (
              <motion.div
                key={`card-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="backdrop-blur-sm bg-white/70 rounded-xl shadow-lg p-6 border border-white/50 h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-amber-100 rounded-full -mr-10 -mt-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="flex items-start mb-4">
                    <div className="mr-4 w-12 h-12 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      {testimonial.name.split(' ')[0][0] + testimonial.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">{testimonial.name}</h3>
                      <p className="text-amber-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic relative">
                    <svg className="absolute -top-1 -left-1 w-6 h-6 text-amber-200/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <span className="ml-4 block">{testimonial.testimonial}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-sm bg-white/60 p-12 rounded-xl shadow-2xl mb-20 border border-white/50 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-100 rounded-full opacity-50"></div>

          <h2 className="text-3xl font-bold text-center mb-4 relative z-10">Our Impact</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={`stat-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + (index * 0.1)
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        {index === 0 ? (
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        ) : index === 1 ? (
                          <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
                        ) : index === 2 ? (
                          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        ) : (
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        )}
                      </svg>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                  >
                    {stat.prefix}{stat.value}{stat.suffix}
                  </motion.p>
                  <p className="text-gray-700 font-medium mt-2">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="backdrop-blur-md bg-gradient-to-r from-amber-500/90 to-amber-600/90 text-white p-12 rounded-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h800v800H0z" />
              <path fill="#fff" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
              <path fill="#fff" d="M-31 229L237 261 390 382 731 737M520 660L309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
              <path fill="#fff" d="M520 660L309 538 295 764 731 737M520 660L309 538 40 599M520 660L309 538M520 660L126.5 879.5M520 660L731 737M520 660L295 764M520 660M309 538L40 599 295 764M309 538L295 764M309 538M295 764L126.5 879.5M295 764L731 737M295 764M731 737L126.5 879.5M731 737M126.5 879.5" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to join our success stories?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              Experience the difference professional academic support can make in your research journey.
              Contact us today to discuss how we can help you achieve your publication goals.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateTo('contact-us')}
              className="bg-white text-amber-600 font-medium py-3 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-amber-700/30 transform hover:-translate-y-1"
            >
              Contact Us Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;