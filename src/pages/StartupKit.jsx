// // import React, { useState, useRef, useEffect } from "react";
// // import {
// //   motion,
// //   useInView,
// //   AnimatePresence,
// //   useScroll,
// //   useTransform,
// // } from "framer-motion";
// // import { Helmet } from "react-helmet-async";

// // const FadeInWhenVisible = ({ children, delay = 0 }) => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true, margin: "-100px" });

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
// //       transition={{ duration: 0.6, delay }}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // };

// // const FranchiseInfo = () => {
// //   const [activeStep, setActiveStep] = useState(0);
// //   const timelineRef = useRef(null);
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     // Check if device is mobile
// //     const checkMobile = () => {
// //       setIsMobile(window.innerWidth < 768);
// //     };

// //     // Initial check
// //     checkMobile();

// //     // Add event listener for window resize
// //     window.addEventListener('resize', checkMobile);

// //     // Clean up
// //     return () => window.removeEventListener('resize', checkMobile);
// //   }, []);

// //   const timelineSteps = [
// //     {
// //       id: "electronic",
// //       label: "Electronics",
// //       icon: "⚡",
// //       color: "#8dcb3f",
// //       description: "Essential electronic equipment to power your cafe",
// //       image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
// //     },
// //     {
// //       id: "materials",
// //       label: "Cafe Materials",
// //       icon: "☕",
// //       color: "#8dcb3f",
// //       description: "Premium tea and coffee ingredients",
// //       image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop",
// //     },
// //     {
// //       id: "boards",
// //       label: "Boards & Setup",
// //       icon: "📋",
// //       color: "#8dcb3f",
// //       description: "Branding and signage materials",
// //       image: "https://images.unsplash.com/photo-1572986258706-a8c0a6d0f2d0?w=800&h=600&fit=crop",
// //     },
// //     {
// //       id: "kitchen",
// //       label: "Kitchen Equipment",
// //       icon: "🔪",
// //       color: "#8dcb3f",
// //       description: "Complete kitchen setup essentials",
// //       image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
// //     },
// //     {
// //       id: "glasses",
// //       label: "Glasses Kit",
// //       icon: "🥤",
// //       color: "#8dcb3f",
// //       description: "Serving and packaging materials",
// //       image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=600&fit=crop",
// //     },
// //     {
// //       id: "interior",
// //       label: "Interior Design",
// //       icon: "🪑",
// //       color: "#8dcb3f",
// //       description: "Furniture and ambiance setup",
// //       image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
// //     },
// //     {
// //       id: "syrups",
// //       label: "Syrups",
// //       icon: "🍯",
// //       color: "#8dcb3f",
// //       description: "Flavored syrups for beverages",
// //       image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&h=600&fit=crop",
// //     },
// //   ];

// //   const materials = {
// //     electronic: [
// //       { item: "Refrigerator", qty: "1", price: "320" },
// //       { item: "Induction stove", qty: "1", price: "190" },
// //       { item: "Mixer blender", qty: "1", price: "4.5" },
// //       { item: "Sandwich Griller", qty: "1", price: "6.2" },
// //       { item: "Deep fryer", qty: "1", price: "5.0" },
// //       { item: "32 inch LED TV", qty: "1", price: "2.5" },
// //       { item: "Coffee Machine", qty: "1", price: "4.5" },
// //     ],
// //     materials: [
// //       { item: "Tea powder", qty: "400gm",},
// //       { item: "Blue tea", qty: "100gm", },
// //       { item: "Rose tea", qty: "100gm", },
// //       { item: "Rooibos", qty: "100gm", },
// //       { item: "Black tea", qty: "400gm", },
// //       { item: "Lavender", qty: "100gm", },
// //       { item: "Green tea", qty: "400gm", },
// //       { item: "Lemon grass", qty: "100gm", },
// //       { item: "Hibiscus", qty: "1 packet", },
// //       { item: "White tea", qty: "1 packet", },
// //       { item: "Coffee", qty: "5pcs", },
// //       { item: "Horlicks", qty: "25pcs", },
// //       { item: "Bournvita", qty: "1 packet", },
// //     ],
// //     boards: [
// //       { item: "Main Board", qty: "1", price: "" },
// //       { item: "Lollypop Board", qty: "1", price: "" },
// //       { item: "Photo frames", qty: "3", price: "" },
// //       { item: "Menu Board", qty: "1", price: "" },
// //       { item: "Desi Boards (As Per)", qty: "5", price: "" },
// //     ],
// //     kitchen: [
// //       { item: "Gas stove", qty: "1", price: "" },
// //       { item: "Stainless vessel", qty: "3", price: "" },
// //       { item: "Measurement cups", qty: "1 set", price: "" },
// //       { item: "Long spoons", qty: "5", price: "" },
// //       { item: "Tablespoon", qty: "10", price: "" },
// //       { item: "Ginger Crusher", qty: "1", price: "" },
// //       { item: "Peanuts crusher", qty: "1", price: "" },
// //       { item: "Lemon squeezer", qty: "1", price: "" },
// //       { item: "Ice cream scoop", qty: "2", price: "" },
// //       { item: "Chopping board", qty: "1", price: "" },
// //       { item: "Knife", qty: "2", price: "" },
// //       { item: "Scissors", qty: "1", price: "" },
// //       { item: "Tea tray", qty: "2", price: "" },
// //       { item: "Dust bin", qty: "1", price: "" },
// //     ],
// //     glasses: [
// //       { item: "Tea cups", qty: "25pcs", price: "" },
// //       { item: "300 ml glasses", qty: "10pcs", price: "" },
// //       { item: "Lids", qty: "1 box", price: "" },
// //       { item: "Straws", qty: "2 box", price: "" },
// //       { item: "Tissues", qty: "1 packet", price: "" },
// //       { item: "Silver covers", qty: "25pcs", price: "" },
// //       { item: "Thread", qty: "10pcs", price: "" },
// //       { item: "Paper packing", qty: "1", price: "" },
// //       { item: "Ice cream & Milkshakes spoons", qty: "1 box", price: "" },
// //       { item: "Tooth sticks", qty: "1 box", price: "" },
// //       { item: "Dust bin covers", qty: "3", price: "" },
// //     ],
// //     interior: [
// //       { item: "Fans", qty: "2", price: "" },
// //       { item: "Lights", qty: "5", price: "" },
// //       { item: "Chairs", qty: "8", price: "" },
// //       { item: "Tables", qty: "4", price: "" },
// //       { item: "Wooden shelf", qty: "2", price: "" },
// //       { item: "Paints", qty: "As needed", price: "" },
// //     ],
// //     syrups: [
// //       { item: "Green apple", qty: "1 bottle", price: "" },
// //       { item: "Chocolate", qty: "1 bottle", price: "" },
// //       { item: "Orange", qty: "1 bottle", price: "" },
// //       { item: "Strawberry", qty: "1 bottle", price: "" },
// //       { item: "Black currant", qty: "1 bottle", price: "" },
// //       { item: "Blue mint", qty: "1 bottle", price: "" },
// //       { item: "Choco Stick box", qty: "1 box", price: "" },
// //     ],
// //   };

// //   const franchiseBenefits = [
// //     {
// //       title: "REVENUE MAKING",
// //       description:
// //         "Consistent income from day one with our proven business model",
// //     },
// //     {
// //       title: "RAW MATERIALS",
// //       description:
// //         "Premium quality ingredients supplied directly from verified sources",
// //     },
// //     {
// //       title: "LOW INVESTMENT HIGH RETURNS",
// //       description: "Start with minimal capital and see profits within months",
// //     },
// //     {
// //       title: "SOCIAL MARKETING SUPPORT",
// //       description:
// //         "Comprehensive digital marketing assistance for maximum reach",
// //     },
// //     {
// //       title: "MINIMAL OPERATIONAL SPACE",
// //       description: "Only 90-150 sq. ft required to set up your cafe",
// //     },
// //     {
// //       title: "NO ROYALTY",
// //       description: "Keep 100% of your profits with no ongoing fees",
// //     },
// //     {
// //       title: "FREE TRAINING",
// //       description:
// //         "Comprehensive 3-day training program for you and your staff",
// //     },
// //     {
// //       title: "LIFETIME SUPPORT",
// //       description: "One-time settlement with continuous business guidance",
// //     },
// //     {
// //       title: "100% SUCCESS",
// //       description: "Proven track record with all our franchise partners",
// //     },
// //   ];

// //   const { scrollYProgress } = useScroll();
// //   const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);

// //   // Enhanced TimelineCard component with better desktop presentation
// //   const TimelineCard = ({ step, index, isLeft }) => {
// //     const cardRef = useRef(null);
// //     const isInView = useInView(cardRef, { once: true, amount: 0.1 });

// //     return (
// //       <div ref={cardRef} className="relative mb-16 md:mb-32 last:mb-0">
// //         {/* Timeline dot and connector - Desktop only */}
// //         <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
// //           <motion.div
// //             initial={{ scale: 0, rotate: -180 }}
// //             animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
// //             transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
// //             className="relative z-10"
// //           >
// //             {/* Large circle badge */}
// //             <div
// //               className="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl border-4 border-white relative overflow-hidden group"
// //               style={{
// //                 background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
// //               }}
// //             >
// //               <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-300"></div>
// //               <div className="text-center relative z-10">
// //                 <div className="text-4xl mb-1 transform group-hover:scale-110 transition-transform">
// //                   {step.icon}
// //                 </div>
// //                 <div className="text-white font-bold text-xs">
// //                   STEP {index + 1}
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Connecting line with gradient */}
// //           {index < timelineSteps.length - 1 && (
// //             <motion.div
// //               initial={{ scaleY: 0 }}
// //               animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="absolute top-28 left-1/2 transform -translate-x-1/2 w-1 h-56 origin-top"
// //               style={{
// //                 background: `linear-gradient(180deg, ${step.color}, #e0e0e0)`,
// //               }}
// //             ></motion.div>
// //           )}
// //         </div>

// //         {/* Timeline marker for mobile */}
// //         <div className="lg:hidden flex items-center justify-center mb-6">
// //           <motion.div
// //             initial={{ scale: 0 }}
// //             animate={isInView ? { scale: 1 } : { scale: 0 }}
// //             transition={{ duration: 0.6, type: "spring" }}
// //             className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl relative"
// //             style={{
// //               background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
// //             }}
// //           >
// //             <div className="text-center">
// //               <div className="text-3xl mb-1 text-white">{step.icon}</div>
// //               <div className="text-white font-bold text-xs">STEP {index + 1}</div>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* Content wrapper - Responsive Grid */}
// //         <div className="container mx-auto px-4">
// //           <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
// //             {/* Image side - Enhanced for desktop */}
// //             <motion.div
// //               initial={{
// //                 opacity: 0,
// //                 x: isLeft ? -50 : 50,
// //                 scale: 0.9,
// //               }}
// //               animate={
// //                 isInView
// //                   ? { opacity: 1, x: 0, scale: 1 }
// //                   : { opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }
// //               }
// //               transition={{ duration: 0.7, delay: 0.1 }}
// //               className={`relative ${isLeft ? "lg:order-1" : "lg:order-2"}`}
// //             >
// //               <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl group">
// //                 {/* Image with responsive height */}
// //                 <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px]">
// //                   <img
// //                     src={step.image}
// //                     alt={step.label}
// //                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
// //                     loading="lazy"
// //                   />
// //                   {/* Gradient overlay */}
// //                   <div
// //                     className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
// //                     style={{
// //                       background: `linear-gradient(135deg, ${step.color}ee, ${step.color}66)`,
// //                     }}
// //                   ></div>

// //                   {/* Floating badge - Responsive positioning */}
// //                   <motion.div
// //                     initial={{ y: 20, opacity: 0 }}
// //                     animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
// //                     transition={{ delay: 0.5 }}
// //                     className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg"
// //                   >
// //                     <div className="flex items-center gap-2 md:gap-3">
// //                       <div
// //                         className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white text-lg md:text-xl"
// //                         style={{ backgroundColor: step.color }}
// //                       >
// //                         {step.icon}
// //                       </div>
// //                       <div>
// //                         <div className="text-xs text-gray-500 font-semibold">
// //                           STEP {index + 1}
// //                         </div>
// //                         <div className="text-xs md:text-sm font-bold text-gray-800">
// //                           {step.label}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </motion.div>

// //                   {/* Item count badge - Responsive positioning */}
// //                   <motion.div
// //                     initial={{ scale: 0 }}
// //                     animate={isInView ? { scale: 1 } : { scale: 0 }}
// //                     transition={{ delay: 0.6, type: "spring" }}
// //                     className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/95 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg"
// //                   >
// //                     <div className="text-center">
// //                       <div
// //                         className="text-xl md:text-2xl font-bold"
// //                         style={{ color: step.color }}
// //                       >
// //                         {materials[step.id]?.length}
// //                       </div>
// //                       <div className="text-xs text-gray-600 font-semibold">
// //                         Items
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Content side - Enhanced for desktop */}
// //             <motion.div
// //               initial={{
// //                 opacity: 0,
// //                 x: isLeft ? 50 : -50,
// //               }}
// //               animate={
// //                 isInView
// //                   ? { opacity: 1, x: 0 }
// //                   : { opacity: 0, x: isLeft ? 50 : -50 }
// //               }
// //               transition={{ duration: 0.7, delay: 0.2 }}
// //               className={`relative ${isLeft ? "lg:order-2" : "lg:order-1"}`}
// //             >
// //               {/* Card content */}
// //               <div
// //                 className="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden border-t-4 hover:shadow-3xl transition-all duration-300"
// //                 style={{ borderColor: step.color }}
// //               >
// //                 {/* Header - Responsive padding */}
// //                 <div
// //                   className="p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden"
// //                   style={{
// //                     background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
// //                   }}
// //                 >
// //                   {/* Background pattern */}
// //                   <div className="absolute inset-0 opacity-10">
// //                     <div
// //                       className="absolute inset-0"
// //                       style={{
// //                         backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
// //                         backgroundSize: "20px 20px",
// //                       }}
// //                     ></div>
// //                   </div>

// //                   <div className="relative z-10">
// //                     <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
// //                       <div className="text-3xl sm:text-4xl lg:text-5xl">{step.icon}</div>
// //                       <div>
// //                         <div className="text-xs sm:text-sm text-white/80 font-semibold">
// //                           STEP {index + 1} OF {timelineSteps.length}
// //                         </div>
// //                         <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{step.label}</h3>
// //                       </div>
// //                     </div>
// //                     <p className="text-white/90 text-sm sm:text-base leading-relaxed">
// //                       {step.description}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Table Header - Desktop */}
// //                 <div className="hidden md:block bg-gray-100 px-6 lg:px-8 py-3 border-b border-gray-200">
// //                   <div className="grid grid-cols-12 gap-4 text-sm font-bold text-gray-600">
// //                     <div className="col-span-1">#</div>
// //                     <div className="col-span-6">Item Name</div>
// //                     <div className="col-span-3">Quantity</div>
// //                     <div className="col-span-2 text-right">Price</div>
// //                   </div>
// //                 </div>

// //                 {/* Items list - Desktop with better scrollbar */}
// //                 <div 
// //                   className="hidden md:block p-4 sm:p-6 lg:p-8 max-h-[300px] lg:max-h-[400px] overflow-y-auto"
// //                   style={{
// //                     scrollbarWidth: 'thin',
// //                     scrollbarColor: `${step.color} #f1f1f1`,
// //                   }}
// //                 >
// //                   <div className="space-y-1">
// //                     {materials[step.id]?.map((item, idx) => (
// //                       <div
// //                         key={idx}
// //                         className="grid grid-cols-12 gap-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-lg px-2 group"
// //                       >
// //                         <div className="col-span-1 flex items-center">
// //                           <div
// //                             className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform"
// //                             style={{ backgroundColor: step.color }}
// //                           >
// //                             {idx + 1}
// //                           </div>
// //                         </div>
// //                         <div className="col-span-6 flex items-center">
// //                           <span className="font-semibold text-gray-800 group-hover:text-gray-900">
// //                             {item.item}
// //                           </span>
// //                         </div>
// //                         <div className="col-span-3 flex items-center">
// //                           <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium text-gray-700 group-hover:bg-gray-200 transition-colors">
// //                             {item.qty}
// //                           </span>
// //                         </div>
// //                         <div className="col-span-2 flex items-center justify-end">
// //                           <span
// //                             className="font-bold text-lg"
// //                             style={{ color: item.price ? step.color : '#999' }}
// //                           >
// //                             {item.price ? `₹${item.price}` : "—"}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Items list - Mobile with improved touch targets */}
// //                 <div className="md:hidden p-3 space-y-2 max-h-[300px] overflow-y-auto">
// //                   {materials[step.id]?.map((item, idx) => (
// //                     <div
// //                       key={idx}
// //                       className="bg-gray-50 rounded-xl p-3 sm:p-4 border-l-4 hover:shadow-md transition-shadow touch-manipulation"
// //                       style={{ borderColor: step.color }}
// //                     >
// //                       <div className="flex items-start justify-between gap-2 sm:gap-3">
// //                         <div className="flex items-center gap-2 sm:gap-3 flex-1">
// //                           <div
// //                             className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md"
// //                             style={{ backgroundColor: step.color }}
// //                           >
// //                             {idx + 1}
// //                           </div>
// //                           <div className="flex-1">
// //                             <h4 className="text-sm font-semibold text-gray-900">
// //                               {item.item}
// //                             </h4>
// //                             <p className="text-xs text-gray-500 mt-1">
// //                               Qty: {item.qty}
// //                             </p>
// //                           </div>
// //                         </div>
// //                         <div className="text-right flex-shrink-0">
// //                           <div
// //                             className="text-base font-bold"
// //                             style={{ color: item.price ? step.color : '#999' }}
// //                           >
// //                             {item.price ? `₹${item.price}` : "—"}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Footer with total items - Responsive padding */}
// //                 <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
// //                   <div className="flex items-center justify-between">
// //                     <div className="flex items-center gap-2">
// //                       <div
// //                         className="w-3 h-3 rounded-full"
// //                         style={{ backgroundColor: step.color }}
// //                       ></div>
// //                       <span className="text-xs sm:text-sm font-semibold text-gray-700">
// //                         Total Items: {materials[step.id]?.length}
// //                       </span>
// //                     </div>
// //                     <button
// //                       className="text-xs sm:text-sm font-semibold hover:underline transition-all flex items-center gap-1 px-2 py-2 touch-manipulation"
// //                       style={{ color: step.color }}
// //                     >
// //                       View Details 
// //                       <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                       </svg>
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="bg-gradient-to-br from-gray-50 via-white to-green-50/30 min-h-screen">
// //       <Helmet>
// //         <title>Startup Kit for Tea Franchise Opportunities | Tea 5 cafe</title>
// //         <meta
// //           name="description"
// //           content="Begin your tea franchise journey with our complete startup kit. Enjoy low investment, high returns, and full business support from Tea 5 cafe."
// //         />
// //         <meta
// //           name="keywords"
// //           content="tea cafe franchise, coffee franchise india, low investment franchise, Tea 5 cafe, franchise opportunities India, tea franchise in India"
// //         />
// //         <link rel="canonical" href="https://www.tea5cafe.com/startup-kit" />
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
// //       </Helmet>

// //       <style>{`
// //         @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");
// //         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
// //         @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

// //         * {
// //           font-family: "Inter", "Poppins", sans-serif;
// //           -webkit-tap-highlight-color: transparent;
// //         }

// //         .font-sacramento {
// //           font-family: "Sacramento", cursive;
// //         }

// //         ::-webkit-scrollbar {
// //           width: 6px;
// //         }

// //         ::-webkit-scrollbar-track {
// //           background: #f1f1f1;
// //           border-radius: 10px;
// //         }

// //         ::-webkit-scrollbar-thumb {
// //           background: linear-gradient(180deg, #8dcb3f, #7bc42e);
// //           border-radius: 10px;
// //         }

// //         ::-webkit-scrollbar-thumb:hover {
// //           background: linear-gradient(180deg, #7bc42e, #6ab31d);
// //         }

// //         /* Hide scrollbar for mobile */
// //         @media (max-width: 768px) {
// //           .scrollbar-hidden {
// //             -ms-overflow-style: none;
// //             scrollbar-width: none;
// //           }

// //           .scrollbar-hidden::-webkit-scrollbar {
// //             display: none;
// //           }
// //         }

// //         /* Improve touch targets */
// //         @media (max-width: 768px) {
// //           button, a {
// //             min-height: 44px;
// //             min-width: 44px;
// //           }
// //         }

// //         /* Enhanced desktop experience */
// //         @media (min-width: 1280px) {
// //           .container {
// //             max-width: 1200px;
// //           }
// //         }

// //         @media (min-width: 1536px) {
// //           .container {
// //             max-width: 1400px;
// //           }
// //         }
// //       `}</style>

// //       {/* Hero Section - Responsive height with enhanced desktop experience */}
// //       <section className="relative min-h-[60vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
// //         <div className="absolute inset-0">
// //           <div
// //             className="absolute inset-0 bg-cover bg-center"
// //             style={{
// //               backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop')`,
// //               backgroundAttachment: "fixed",
// //             }}
// //           ></div>
// //           <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#8dcb3f]/50"></div>

// //           {/* Animated circles - Enhanced for desktop */}
// //           <motion.div
// //             animate={{
// //               scale: [1, 1.2, 1],
// //               opacity: [0.3, 0.5, 0.3],
// //             }}
// //             transition={{
// //               duration: 8,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //             }}
// //             className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 rounded-full bg-[#8dcb3f]/30 blur-3xl"
// //           ></motion.div>
// //           <motion.div
// //             animate={{
// //               scale: [1, 1.3, 1],
// //               opacity: [0.2, 0.4, 0.2],
// //             }}
// //             transition={{
// //               duration: 10,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //               delay: 1,
// //             }}
// //             className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 lg:w-[30rem] h-48 sm:h-64 md:h-96 lg:h-[30rem] rounded-full bg-[#8dcb3f]/20 blur-3xl"
// //           ></motion.div>
// //         </div>

// //         {/* Hero content - Enhanced for desktop */}
// //         <div className="relative z-10 container mx-auto px-4 py-12 md:py-24 text-center">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="max-w-5xl mx-auto"
// //           >
// //             <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
// //               Complete Franchise
// //               <span className="block text-[#8dcb3f] font-sacramento text-4xl sm:text-5xl md:text-7xl lg:text-8xl mt-2">
// //                 Startup Kit
// //               </span>
// //             </h1>
// //             <p className="text-white/90 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 lg:mb-12">
// //               Begin your journey with Tea 5 Cafe - low investment, high returns, and complete business support
// //             </p>

// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="bg-[#8dcb3f] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base lg:text-lg"
// //             >
// //               Get Started Now
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Progress Indicator - Sticky with improved desktop experience */}
// //       <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
// //         <div className="container mx-auto px-4 py-2 md:py-4">
// //           <div className="flex items-center justify-center lg:justify-start gap-2 overflow-x-auto scrollbar-hidden pb-2 -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// //             {timelineSteps.map((step, index) => (
// //               <motion.button
// //                 key={step.id}
// //                 onClick={() => {
// //                   const element = document.getElementById(`step-${index}`);
// //                   element?.scrollIntoView({ behavior: "smooth", block: "center" });
// //                 }}
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="flex items-center gap-2 px-3 sm:px-5 py-3 rounded-full border-2 transition-all whitespace-nowrap shadow-md hover:shadow-xl flex-shrink-0 min-h-[44px] min-w-[44px]"
// //                 style={{
// //                   borderColor: step.color,
// //                   backgroundColor: "white",
// //                 }}
// //               >
// //                 <span className="text-lg sm:text-xl">{step.icon}</span>
// //                 <span className="text-xs sm:text-sm font-semibold hidden sm:inline text-gray-700">
// //                   {step.label}
// //                 </span>
// //                 <span
// //                   className="text-xs font-bold px-2 py-0.5 rounded-full text-white hidden md:inline"
// //                   style={{ backgroundColor: step.color }}
// //                 >
// //                   {index + 1}
// //                 </span>
// //               </motion.button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Timeline Section - Enhanced for desktop */}
// //       <div
// //         id="timeline-start"
// //         className="py-12 md:py-20 lg:py-24 relative"
// //         ref={timelineRef}
// //       >
// //         {/* Background decoration */}
// //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //           <div className="absolute top-0 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-[#8dcb3f]/5 rounded-full blur-3xl"></div>
// //           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 lg:w-[30rem] lg:h-[30rem] bg-[#8dcb3f]/5 rounded-full blur-3xl"></div>
// //         </div>

// //         {/* Section header - Enhanced for desktop */}
// //         <motion.div
// //           className="text-center mb-12 md:mb-24 container mx-auto px-4 relative z-10"
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //         >
// //           <motion.div
// //             initial={{ scale: 0 }}
// //             whileInView={{ scale: 1 }}
// //             transition={{ type: "spring", stiffness: 200 }}
// //             className="inline-block bg-[#8dcb3f]/10 px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6"
// //           >
// //             <span className="text-[#8dcb3f] font-bold text-xs sm:text-sm lg:text-base">
// //               COMPLETE FRANCHISE KIT
// //             </span>
// //           </motion.div>
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 md:mb-6">
// //             Everything You Need to
// //             <span className="block text-[#8dcb3f] font-sacramento text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
// //               Launch & Succeed
// //             </span>
// //           </h2>
// //           <div className="h-1 w-24 md:w-32 lg:w-40 bg-[#8dcb3f] mx-auto rounded-full mb-4 md:mb-6"></div>
// //           <p className="text-gray-600 text-sm sm:text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
// //             Our comprehensive 7-step startup kit includes all equipment,
// //             materials, and support you need to open your franchise
// //           </p>
// //         </motion.div>

// //         {/* Timeline items */}
// //         <div className="relative max-w-[1920px] mx-auto">
// //           {timelineSteps.map((step, index) => (
// //             <div key={step.id} id={`step-${index}`}>
// //               <TimelineCard
// //                 step={step}
// //                 index={index}
// //                 isLeft={index % 2 === 0}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Benefits Section - Enhanced for desktop */}
// //       <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 lg:py-32 relative overflow-hidden">
// //         {/* Background patterns */}
// //         <div className="absolute inset-0 opacity-10">
// //           <div
// //             className="absolute inset-0"
// //             style={{
// //               backgroundImage: `radial-gradient(circle, #8dcb3f 1px, transparent 1px)`,
// //               backgroundSize: "50px 50px",
// //             }}
// //           ></div>
// //         </div>

// //         <div className="container mx-auto px-4 relative z-10">
// //           <motion.div
// //             className="text-center mb-12 md:mb-20 lg:mb-24"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="bg-[#8dcb3f]/20 text-[#8dcb3f] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base font-bold inline-block mb-4 sm:mb-6 border border-[#8dcb3f]/30">
// //               ⭐ WHY CHOOSE US
// //             </span>
// //             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
// //               Exclusive Franchise
// //               <span className="block text-[#8dcb3f] font-sacramento text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
// //                 Benefits & Support
// //               </span>
// //             </h2>
// //             <div className="h-1 w-16 sm:w-24 lg:w-32 bg-[#8dcb3f] mx-auto rounded-full"></div>
// //           </motion.div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
// //             {franchiseBenefits.map((benefit, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.05 }}
// //                 whileHover={{ y: -8, scale: 1.02 }}
// //                 className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 hover:border-[#8dcb3f]/50 transition-all duration-300 group relative overflow-hidden"
// //               >
// //                 {/* Gradient background on hover */}
// //                 <div className="absolute inset-0 bg-gradient-to-br from-[#8dcb3f]/0 to-[#8dcb3f]/0 group-hover:from-[#8dcb3f]/10 group-hover:to-[#8dcb3f]/5 transition-all duration-300"></div>

// //                 <div className="relative z-10">
// //                   <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#8dcb3f]/20 rounded-xl md:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
// //                     <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#8dcb3f] rounded-lg"></div>
// //                   </div>
// //                   <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-[#8dcb3f] transition-colors">
// //                     {benefit.title}
// //                   </h3>
// //                   <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
// //                     {benefit.description}
// //                   </p>
// //                 </div>

// //                 {/* Corner decoration */}
// //                 <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#8dcb3f]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* CTA Section - Enhanced for desktop */}
// //       <motion.div
// //         className="container mx-auto px-4 py-16 md:py-24 lg:py-32"
// //         initial={{ opacity: 0, scale: 0.95 }}
// //         whileInView={{ opacity: 1, scale: 1 }}
// //         viewport={{ once: true }}
// //       >
// //         <div className="bg-gradient-to-br from-[#8dcb3f] via-[#7bc42e] to-[#8dcb3f] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative">
// //           {/* Decorative elements - Enhanced for desktop */}
// //           <div className="absolute inset-0 overflow-hidden">
// //             <motion.div
// //               animate={{
// //                 rotate: [0, 360],
// //               }}
// //               transition={{
// //                 duration: 20,
// //                 repeat: Infinity,
// //                 ease: "linear",
// //               }}
// //               className="absolute -top-24 -right-24 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white/10 rounded-full"
// //             ></motion.div>
// //             <motion.div
// //               animate={{
// //                 rotate: [360, 0],
// //               }}
// //               transition={{
// //                 duration: 25,
// //                 repeat: Infinity,
// //                 ease: "linear",
// //               }}
// //               className="absolute -bottom-32 -left-32 w-64 sm:w-96 lg:w-[40rem] h-64 sm:h-96 lg:h-[40rem] bg-white/10 rounded-full"
// //             ></motion.div>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-0 relative z-10">
// //             {/* Content side - Enhanced for desktop */}
// //             <div className="p-6 sm:p-8 md:p-10 lg:p-16 xl:p-20 flex flex-col justify-center text-white">
// //               <motion.div
// //                 initial={{ x: -30, opacity: 0 }}
// //                 whileInView={{ x: 0, opacity: 1 }}
// //                 viewport={{ once: true }}
// //               >
// //                 <div className="inline-block bg-white/20 px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
// //                   <span className="text-xs sm:text-sm lg:text-base font-bold">🎯 GET STARTED TODAY</span>
// //                 </div>
// //                 <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
// //                   Ready to Begin Your
// //                   <span className="block font-sacramento text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2">
// //                     Franchise Journey?
// //                   </span>
// //                 </h3>
// //                 <p className="text-white/90 text-sm sm:text-base lg:text-xl mb-6 sm:mb-10 leading-relaxed">
// //                   Join our successful franchise network and start your
// //                   entrepreneurial journey with complete support and guidance.
// //                 </p>

// //                 <div className="space-y-3 sm:space-y-4 lg:space-y-5 mb-6 sm:mb-10">
// //                   {["93811 42553", "8466066425"].map((phone, idx) => (
// //                     <motion.a
// //                       key={idx}
// //                       href={`tel:${phone.replace(/\s/g, '')}`}
// //                       whileHover={{ x: 10, scale: 1.02 }}
// //                       whileTap={{ scale: 0.98 }}
// //                       className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all group touch-manipulation"
// //                     >
// //                       <div className="bg-white w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-[#8dcb3f] group-hover:scale-110 transition-transform shadow-lg">
// //                         <svg
// //                           className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
// //                           fill="none"
// //                           stroke="currentColor"
// //                           viewBox="0 0 24 24"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth={2}
// //                             d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
// //                           />
// //                         </svg>
// //                       </div>
// //                       <div>
// //                         <div className="text-xs lg:text-sm text-white/70 font-semibold">
// //                           CALL US NOW
// //                         </div>
// //                         <div className="text-base sm:text-xl lg:text-2xl font-bold">{phone}</div>
// //                       </div>
// //                     </motion.a>
// //                   ))}
// //                 </div>

// //                 <motion.button
// //                   whileHover={{
// //                     scale: 1.02,
// //                     boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
// //                   }}
// //                   whileTap={{ scale: 0.98 }}
// //                   className="w-full bg-white text-[#8dcb3f] font-bold py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl transition-all shadow-xl hover:shadow-2xl text-sm sm:text-lg lg:text-xl touch-manipulation"
// //                 >
// //                   Request Franchise Information
// //                 </motion.button>

// //                 <motion.div
// //                   className="mt-6 sm:mt-8 p-4 sm:p-5 lg:p-6 border-2 border-white/30 rounded-xl sm:rounded-2xl text-center backdrop-blur-sm bg-white/5"
// //                   whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
// //                 >
// //                   <p className="text-white font-bold text-base sm:text-lg lg:text-xl">
// //                     ✨ License Provided as Complimentary
// //                   </p>
// //                 </motion.div>
// //               </motion.div>
// //             </div>

// //             {/* Image side - Enhanced for desktop */}
// //             <motion.div
// //               className="relative h-[300px] sm:h-[400px] md:h-auto"
// //               initial={{ x: 30, opacity: 0 }}
// //               whileInView={{ x: 0, opacity: 1 }}
// //               viewport={{ once: true }}
// //             >
// //               <img
// //                 src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=1200&fit=crop"
// //                 alt="Contact us"
// //                 className="w-full h-full object-cover"
// //                 loading="lazy"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-[#8dcb3f]/50 to-transparent"></div>

// //               {/* Floating stats - Enhanced for desktop */}
// //               <motion.div
// //                 initial={{ y: 20, opacity: 0 }}
// //                 whileInView={{ y: 0, opacity: 1 }}
// //                 transition={{ delay: 0.3 }}
// //                 className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-4 sm:left-8 lg:left-12 right-4 sm:right-8 lg:right-12 grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6"
// //               >
// //                 {[
// //                   { number: "100+", label: "Franchises" },
// //                   { number: "95%", label: "Success Rate" },
// //                   { number: "24/7", label: "Support" },
// //                 ].map((stat, idx) => (
// //                   <div
// //                     key={idx}
// //                     className="bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-4 lg:p-6 text-center shadow-xl"
// //                   >
// //                     <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#8dcb3f] mb-0 sm:mb-1 lg:mb-2">
// //                       {stat.number}
// //                     </div>
// //                     <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 font-semibold">
// //                       {stat.label}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </div> 
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default FranchiseInfo;


// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useInView,
//   AnimatePresence,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { Helmet } from "react-helmet-async";

// const FadeInWhenVisible = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.6, delay }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const FranchiseInfo = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const timelineRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const primaryColor = "#8dcb3f"; // Richer green
//   const accentColor = "#f8b400"; // Warm accent color
//   const darkColor = "#8dcb3f"; // Dark blue-gray
//   const lightColor = "#f7f9fb"; // Off-white

//   const timelineSteps = [
//     {
//       id: "electronic",
//       label: "Electronics",
//       icon: "assets/icons/electronics.svg",
//       color: primaryColor,
//       description: "Essential electronic equipment to power your cafe",
//       image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
//     },
//     {
//       id: "materials",
//       label: "Cafe Materials",
//       icon: "assets/icons/coffee.svg",
//       color: primaryColor,
//       description: "Premium tea and coffee ingredients",
//       image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop",
//     },
//     {
//       id: "boards",
//       label: "Boards & Setup",
//       icon: "assets/icons/signage.svg",
//       color: primaryColor,
//       description: "Branding and signage materials",
//       image: "https://images.unsplash.com/photo-1572986258706-a8c0a6d0f2d0?w=800&h=600&fit=crop",
//     },
//     {
//       id: "kitchen",
//       label: "Kitchen Equipment",
//       icon: "assets/icons/kitchenware.svg",
//       color: primaryColor,
//       description: "Complete kitchen setup essentials",
//       image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
//     },
//     {
//       id: "glasses",
//       label: "Glasses Kit",
//       icon: "assets/icons/glassware.svg",
//       color: primaryColor,
//       description: "Serving and packaging materials",
//       image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=600&fit=crop",
//     },
//     {
//       id: "interior",
//       label: "Interior Design",
//       icon: "assets/icons/furniture.svg",
//       color: primaryColor,
//       description: "Furniture and ambiance setup",
//       image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
//     },
//     {
//       id: "syrups",
//       label: "Syrups",
//       icon: "assets/icons/syrup.svg",
//       color: primaryColor,
//       description: "Flavored syrups for beverages",
//       image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&h=600&fit=crop",
//     },
//   ];

//   const materials = {
//     electronic: [
//       { item: "Refrigerator", qty: "1", price: "320" },
//       { item: "Induction stove", qty: "1", price: "190" },
//       { item: "Mixer blender", qty: "1", price: "4.5" },
//       { item: "Sandwich Griller", qty: "1", price: "6.2" },
//       { item: "Deep fryer", qty: "1", price: "5.0" },
//       { item: "32 inch LED TV", qty: "1", price: "2.5" },
//       { item: "Coffee Machine", qty: "1", price: "4.5" },
//     ],
//     materials: [
//       { item: "Tea powder", qty: "400gm",},
//       { item: "Blue tea", qty: "100gm", },
//       { item: "Rose tea", qty: "100gm", },
//       { item: "Rooibos", qty: "100gm", },
//       { item: "Black tea", qty: "400gm", },
//       { item: "Lavender", qty: "100gm", },
//       { item: "Green tea", qty: "400gm", },
//       { item: "Lemon grass", qty: "100gm", },
//       { item: "Hibiscus", qty: "1 packet", },
//       { item: "White tea", qty: "1 packet", },
//       { item: "Coffee", qty: "5pcs", },
//       { item: "Horlicks", qty: "25pcs", },
//       { item: "Bournvita", qty: "1 packet", },
//     ],
//     boards: [
//       { item: "Main Board", qty: "1", price: "" },
//       { item: "Lollypop Board", qty: "1", price: "" },
//       { item: "Photo frames", qty: "3", price: "" },
//       { item: "Menu Board", qty: "1", price: "" },
//       { item: "Desi Boards (As Per)", qty: "5", price: "" },
//     ],
//     kitchen: [
//       { item: "Gas stove", qty: "1", price: "" },
//       { item: "Stainless vessel", qty: "3", price: "" },
//       { item: "Measurement cups", qty: "1 set", price: "" },
//       { item: "Long spoons", qty: "5", price: "" },
//       { item: "Tablespoon", qty: "10", price: "" },
//       { item: "Ginger Crusher", qty: "1", price: "" },
//       { item: "Peanuts crusher", qty: "1", price: "" },
//       { item: "Lemon squeezer", qty: "1", price: "" },
//       { item: "Ice cream scoop", qty: "2", price: "" },
//       { item: "Chopping board", qty: "1", price: "" },
//       { item: "Knife", qty: "2", price: "" },
//       { item: "Scissors", qty: "1", price: "" },
//       { item: "Tea tray", qty: "2", price: "" },
//       { item: "Dust bin", qty: "1", price: "" },
//     ],
//     glasses: [
//       { item: "Tea cups", qty: "25pcs", price: "" },
//       { item: "300 ml glasses", qty: "10pcs", price: "" },
//       { item: "Lids", qty: "1 box", price: "" },
//       { item: "Straws", qty: "2 box", price: "" },
//       { item: "Tissues", qty: "1 packet", price: "" },
//       { item: "Silver covers", qty: "25pcs", price: "" },
//       { item: "Thread", qty: "10pcs", price: "" },
//       { item: "Paper packing", qty: "1", price: "" },
//       { item: "Ice cream & Milkshakes spoons", qty: "1 box", price: "" },
//       { item: "Tooth sticks", qty: "1 box", price: "" },
//       { item: "Dust bin covers", qty: "3", price: "" },
//     ],
//     interior: [
//       { item: "Fans", qty: "2", price: "" },
//       { item: "Lights", qty: "5", price: "" },
//       { item: "Chairs", qty: "8", price: "" },
//       { item: "Tables", qty: "4", price: "" },
//       { item: "Wooden shelf", qty: "2", price: "" },
//       { item: "Paints", qty: "As needed", price: "" },
//     ],
//     syrups: [
//       { item: "Green apple", qty: "1 bottle", price: "" },
//       { item: "Chocolate", qty: "1 bottle", price: "" },
//       { item: "Orange", qty: "1 bottle", price: "" },
//       { item: "Strawberry", qty: "1 bottle", price: "" },
//       { item: "Black currant", qty: "1 bottle", price: "" },
//       { item: "Blue mint", qty: "1 bottle", price: "" },
//       { item: "Choco Stick box", qty: "1 box", price: "" },
//     ],
//   };

//   const franchiseBenefits = [
//     {
//       title: "REVENUE MAKING",
//       description:
//         "Consistent income from day one with our proven business model",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 2V6M12 18V22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93M22 12H18M6 12H2M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       )
//     },
//     {
//       title: "PREMIUM MATERIALS",
//       description:
//         "Premium quality ingredients supplied directly from verified sources",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H16.5C17.3284 7 18 6.32843 18 5.5V2.5C18 1.67157 17.3284 1 16.5 1H7.5C6.67157 1 6 1.67157 6 2.5V5.5C6 6.32843 6.67157 7 7.5 7H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       )
//     },
//     {
//       title: "LOW INVESTMENT, HIGH RETURNS",
//       description: "Start with minimal capital and see profits within months",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       )
//     },
//     {
//       title: "MARKETING SUPPORT",
//       description:
//         "Comprehensive digital marketing assistance for maximum reach",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M16 8.00002L18 6.00002M9 15L15 9.00002M10.5 8.5C10.5 9.32843 9.82843 10 9 10C8.17157 10 7.5 9.32843 7.5 8.5C7.5 7.67157 8.17157 7 9 7C9.82843 7 10.5 7.67157 10.5 8.5ZM16.5 15.5C16.5 16.3284 15.8284 17 15 17C14.1716 17 13.5 16.3284 13.5 15.5C13.5 14.6716 14.1716 14 15 14C15.8284 14 16.5 14.6716 16.5 15.5ZM3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       )
//     },
//     {
//       title: "MINIMAL SPACE REQUIRED",
//       description: "Only 90-150 sq. ft required to set up your cafe",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M19 9.00001H5C3.89543 9.00001 3 9.89544 3 11V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V11C21 9.89544 20.1046 9.00001 19 9.00001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           <path d="M7 9.00001V5.00001C7 4.46958 7.21071 3.96087 7.58579 3.58579C7.96086 3.21072 8.46957 3.00001 9 3.00001H15C15.5304 3.00001 16.0391 3.21072 16.4142 3.58579C16.7893 3.96087 17 4.46958 17 5.00001V9.00001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           <path d="M12 14V14.01M8 14V14.01M16 14V14.01M8 18V18.01M12 18V18.01M16 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       )
//     },
//     {
//       title: "NO ROYALTY FEES",
//       description: "Keep 100% of your profits with no ongoing fees",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M3 3L21 21M9.5 9.5C9.89632 9.1037 10.4111 8.87398 10.95 8.85H12.5M12.5 8.85C13.0389 8.87398 13.5537 9.1037 13.95 9.5C14.3398 9.88686 14.5683 10.4025 14.6 10.95C14.6 12.5 12.5 13.5 12.5 13.5M12.5 16V16.01M17 3L12 7L7 3M21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       )
//     },
//     {
//       title: "COMPREHENSIVE TRAINING",
//       description:
//         "Comprehensive 3-day training program for you and your staff",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 14L12 22M12 14L8 18M12 14L16 18M20 7V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H8M20 7L14.0093 10.9585C13.3518 11.3775 12.9225 11.5871 12.4599 11.6432C12.1457 11.6839 11.8261 11.6839 11.5118 11.6432C11.0492 11.5871 10.62 11.3775 9.96244 10.9585L4 7M20 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       )
//     },
//     {
//       title: "LIFETIME SUPPORT",
//       description: "One-time settlement with continuous business guidance",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M5.12104 17.8037C7.15267 16.6554 9.4998 16 12 16C14.5002 16 16.8473 16.6554 18.879 17.8037M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       )
//     },
//     {
//       title: "PROVEN SUCCESS",
//       description: "Proven track record with all our franchise partners",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       )
//     },
//   ];

//   const { scrollYProgress } = useScroll();
//   const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);

//   // TimelineCard component with elegant styling
//   const TimelineCard = ({ step, index, isLeft }) => {
//     const cardRef = useRef(null);
//     const isInView = useInView(cardRef, { once: true, amount: 0.1 });


//     return (
//       <div ref={cardRef} className="relative mb-16 md:mb-32 last:mb-0">
//         {/* Timeline dot and connector - Desktop only */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">


//           {/* Connecting line with gradient */}
//           {index < timelineSteps.length - 1 && (
//             <motion.div
//               initial={{ scaleY: 0 }}
//               animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="absolute top-28 left-1/2 transform -translate-x-1/2 w-1 h-56 origin-top"
//               style={{
//                 background: `linear-gradient(180deg, ${primaryColor}, ${lightColor})`,
//               }}
//             ></motion.div>
//           )}
//         </div>



//         {/* Content wrapper - Responsive Grid */}
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
//             {/* Image side */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: isLeft ? -50 : 50,
//                 scale: 0.9,
//               }}
//               animate={
//                 isInView
//                   ? { opacity: 1, x: 0, scale: 1 }
//                   : { opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }
//               }
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className={`relative ${isLeft ? "lg:order-1" : "lg:order-2"}`}
//             >
//               <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl group">
//                 {/* Image with enhanced styling */}
//                 <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px]">
//                   <img
//                     src={step.image}
//                     alt={step.label}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                     loading="lazy"
//                   />

//                   {/* Elegant gradient overlay */}
//                   <div
//                     className="absolute inset-0 opacity-70 group-hover:opacity-50 transition-opacity duration-500"
//                     style={{
//                       background: `linear-gradient(135deg, ${darkColor}ee, ${primaryColor}66)`,
//                     }}
//                   ></div>

//                   {/* Floating badge - More elegant styling */}


//                   {/* Item count badge - Enhanced styling */}
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={isInView ? { scale: 1 } : { scale: 0 }}
//                     transition={{ delay: 0.6, type: "spring" }}
//                     className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/95 backdrop-blur px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg"
//                   >
//                     <div className="text-center">
//                       <div
//                         className="text-2xl font-bold"
//                         style={{ color: primaryColor }}
//                       >
//                         {materials[step.id]?.length}
//                       </div>
//                       <div className="text-xs uppercase tracking-wider text-gray-600 font-semibold">
//                         Items
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Content side - Elegant card design */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: isLeft ? 50 : -50,
//               }}
//               animate={
//                 isInView
//                   ? { opacity: 1, x: 0 }
//                   : { opacity: 0, x: isLeft ? 50 : -50 }
//               }
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className={`relative ${isLeft ? "lg:order-2" : "lg:order-1"}`}
//             >
//               {/* Card content */}
//               <div
//                 className="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden border-t-4 hover:shadow-3xl transition-all duration-300"
//                 style={{ borderColor: primaryColor }}
//               >
//                 {/* Header - More sophisticated design */}
//                 <div
//                   className="p-6 lg:p-8 text-white relative overflow-hidden"
//                   style={{
//                     background: `linear-gradient(135deg, ${primaryColor}, ${darkColor})`,
//                   }}
//                 >
//                   {/* Subtle pattern overlay */}

//                 </div>

//                 {/* Table Header - Desktop */}
//                 <div className="hidden md:block bg-gray-50 px-6 lg:px-8 py-3 border-b border-gray-200">
//                   <div className="grid grid-cols-12 gap-4 text-sm font-bold text-gray-600">
//                     <div className="col-span-1">#</div>
//                     <div className="col-span-6">Item Name</div>
//                     <div className="col-span-3">Quantity</div>
//                     <div className="col-span-2 text-right">Price</div>
//                   </div>
//                 </div>

//                 {/* Items list - Desktop with elegant scrollbar */}
//                 <div 
//                   className="hidden md:block p-6 lg:p-8 max-h-[400px] overflow-y-auto"
//                   style={{
//                     scrollbarWidth: 'thin',
//                     scrollbarColor: `${primaryColor} #f1f1f1`,
//                   }}
//                 >
//                   <div className="space-y-2">
//                     {materials[step.id]?.map((item, idx) => (
//                       <div
//                         key={idx}
//                         className="grid grid-cols-12 gap-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-lg px-3 group"
//                       >
//                         <div className="col-span-1 flex items-center">
//                           <div
//                             className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform"
//                             style={{ backgroundColor: primaryColor }}
//                           >
//                             {idx + 1}
//                           </div>
//                         </div>
//                         <div className="col-span-6 flex items-center">
//                           <span className="font-medium text-gray-800 group-hover:text-gray-900">
//                             {item.item}
//                           </span>
//                         </div>
//                         <div className="col-span-3 flex items-center">
//                           <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium text-gray-700 group-hover:bg-gray-200 transition-colors">
//                             {item.qty}
//                           </span>
//                         </div>
//                         <div className="col-span-2 flex items-center justify-end">
//                           <span
//                             className="font-bold text-lg"
//                             style={{ color: item.price ? primaryColor : '#999' }}
//                           >
//                             {item.price ? `₹${item.price}` : "—"}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Items list - Mobile with elegant styling */}
//                 <div className="md:hidden p-4 space-y-3 max-h-[300px] overflow-y-auto">
//                   {materials[step.id]?.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-gray-50 rounded-xl p-4 border-l-4 hover:shadow-md transition-shadow touch-manipulation"
//                       style={{ borderColor: primaryColor }}
//                     >
//                       <div className="flex items-start justify-between gap-3">
//                         <div className="flex items-center gap-3 flex-1">
//                           <div
//                             className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md"
//                             style={{ backgroundColor: primaryColor }}
//                           >
//                             {idx + 1}
//                           </div>
//                           <div className="flex-1">
//                             <h4 className="text-sm font-semibold text-gray-900">
//                               {item.item}
//                             </h4>
//                             <p className="text-xs text-gray-500 mt-1">
//                               Qty: {item.qty}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-right flex-shrink-0">
//                           <div
//                             className="text-base font-bold"
//                             style={{ color: item.price ? primaryColor : '#999' }}
//                           >
//                             {item.price ? `₹${item.price}` : "—"}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Footer with total items - Elegant design */}
//                 <div className="px-6 lg:px-8 py-4 bg-gray-50 border-t border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div
//                         className="w-3 h-3 rounded-full"
//                         style={{ backgroundColor: primaryColor }}
//                       ></div>
//                       <span className="text-sm font-semibold text-gray-700">
//                         Total Items: {materials[step.id]?.length}
//                       </span>
//                     </div>
//                     <button
//                       className="text-sm font-medium flex items-center gap-1 px-3 py-1 rounded-full hover:bg-gray-100 transition-all"
//                       style={{ color: primaryColor }}
//                     >
//                       View Details 
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-white to-[#f5f9f5] min-h-screen">
//       <Helmet>
//         <title>Premium Tea Franchise Opportunities | Tea 5 cafe</title>
//         <meta
//           name="description"
//           content="Begin your tea franchise journey with our complete startup kit. Enjoy low investment, high returns, and full business support from Tea 5 cafe."
//         />
//         <meta
//           name="keywords"
//           content="tea cafe franchise, coffee franchise india, low investment franchise, Tea 5 cafe, franchise opportunities India, tea franchise in India"
//         />
//         <link rel="canonical" href="https://www.tea5cafe.com/startup-kit" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
//       </Helmet>

//       <style>{`
//         @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap");
//         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
//         @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap");

//         body {
//           font-family: "Poppins", sans-serif;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//           -webkit-tap-highlight-color: transparent;
//         }

//         h1, h2, h3, h4, h5 {
//           font-family: "Playfair Display", serif;
//         }

//         .font-cormorant {
//           font-family: "Cormorant Garamond", serif;
//         }

//         ::-webkit-scrollbar {
//           width: 6px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #f5f5f5;
//           border-radius: 10px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: ${primaryColor};
//           border-radius: 10px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: ${darkColor};
//         }

//         /* Hide scrollbar for mobile */
//         @media (max-width: 768px) {
//           .scrollbar-hidden {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }

//           .scrollbar-hidden::-webkit-scrollbar {
//             display: none;
//           }
//         }

//         /* Enhanced container width */
//         @media (min-width: 1280px) {
//           .container {
//             max-width: 1200px;
//           }
//         }

//         @media (min-width: 1536px) {
//           .container {
//             max-width: 1400px;
//           }
//         }
//       `}</style>

//       {/* Hero Section - Elegant styling */}
//       <section className="relative min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           {/* Better image with a tea/coffee related high-quality background */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop')`,
//               backgroundAttachment: "fixed",
//             }}
//           ></div>

//           {/* Sophisticated overlay gradient */}
//           <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#1a372a]/70"></div>

//           {/* Elegant animated elements */}
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.2, 0.3, 0.2],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#3a8c3f]/20 blur-3xl"
//           ></motion.div>
//           <motion.div
//             animate={{
//               scale: [1, 1.3, 1],
//               opacity: [0.1, 0.2, 0.1],
//             }}
//             transition={{
//               duration: 18,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 2,
//             }}
//             className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[#3a8c3f]/10 blur-3xl"
//           ></motion.div>
//         </div>

//         {/* Hero content - Sophisticated typography */}
//         <div className="relative z-10 container mx-auto px-4 py-24 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-5xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
//               Premium Franchise
//               <span className="block text-[#8dcb3f] font-cormorant italic text-5xl md:text-7xl lg:text-8xl mt-3 font-light">
//                 Opportunity
//               </span>
//             </h1>

//           </motion.div>
//         </div>
//       </section>


//       {/* Timeline Section - Refined styling */}
//       <div
//         id="timeline-start"
//         className="py-20 lg:py-28 relative"
//         ref={timelineRef}
//       >
//         {/* Subtle background patterns */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3a8c3f]/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#3a8c3f]/5 rounded-full blur-3xl"></div>
//         </div>

//         {/* Section header - Elegant typography */}
//         <motion.div
//           className="text-center mb-24 container mx-auto px-4 relative z-10"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="inline-block bg-[#3a8c3f]/10 px-6 py-2 rounded-full mb-6"
//           >
//             <span className="text-[#3a8c3f] font-bold text-sm uppercase tracking-wider">
//               Complete Franchise Kit
//             </span>
//           </motion.div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a2b34] mb-6">
//             Everything You Need to
//             <span className="block text-[#3a8c3f] font-cormorant italic text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 font-medium">
//               Launch & Succeed
//             </span>
//           </h2>
//           <div className="h-px w-40 bg-[#3a8c3f] mx-auto rounded-full mb-8 opacity-50"></div>
//           <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
//             Our comprehensive 7-step startup kit includes all equipment,
//             materials, and support you need to open your franchise
//           </p>
//         </motion.div>

//         {/* Timeline items */}
//         <div className="relative max-w-[1920px] mx-auto">
//           {timelineSteps.map((step, index) => (
//             <div key={step.id} id={`step-${index}`}>
//               <TimelineCard
//                 step={step}
//                 index={index}
//                 isLeft={index % 2 === 0}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Benefits Section - Sophisticated design */}
//       <div className="bg-gradient-to-br from-[#1a2b34] via-[#1e3643] to-[#0c1a20] py-20 lg:py-32 relative overflow-hidden">
//         {/* Subtle pattern background */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//               backgroundSize: "50px 50px",
//             }}
//           ></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             className="text-center mb-20 lg:mb-24"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="bg-[#3a8c3f]/20 text-[#6cb97f] px-6 py-2 rounded-full text-sm font-bold inline-block mb-6 uppercase tracking-wider">
//               Why Choose Our Franchise
//             </span>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
//               Exclusive Franchise
//               <span className="block text-[#f8b400] font-cormorant italic text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 font-medium">
//                 Benefits & Support
//               </span>
//             </h2>
//             <div className="h-px w-32 bg-[#6cb97f] mx-auto rounded-full opacity-50"></div>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
//             {franchiseBenefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="bg-white/5 backdrop-blur-sm rounded-xl p-8 lg:p-10 border border-white/10 hover:border-[#3a8c3f]/30 transition-all duration-300 group relative overflow-hidden"
//               >
//                 {/* Subtle gradient background on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#3a8c3f]/0 to-[#3a8c3f]/0 group-hover:from-[#3a8c3f]/10 group-hover:to-[#3a8c3f]/5 transition-all duration-300"></div>

//                 <div className="relative z-10">
//                   <div className="w-16 h-16 bg-[#3a8c3f]/20 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform p-3 text-white">
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-[#6cb97f] transition-colors">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-gray-300 leading-relaxed">
//                     {benefit.description}
//                   </p>
//                 </div>

//                 {/* Elegant corner decoration */}
//                 <div className="absolute top-0 right-0 w-24 h-24 bg-[#3a8c3f]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section - Sophisticated design */}
//       <motion.div
//         className="container mx-auto px-4 py-20 lg:py-28"
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//       >
//         <div className="bg-gradient-to-br from-[#8dcb3f] via-[#8dcb3f] to-[#8dcb3f] rounded-2xl overflow-hidden shadow-2xl relative">
//           {/* Subtle decorative elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               animate={{
//                 rotate: [0, 360],
//               }}
//               transition={{
//                 duration: 50,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full"
//             ></motion.div>
//             <motion.div
//               animate={{
//                 rotate: [360, 0],
//               }}
//               transition={{
//                 duration: 60,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] bg-white/5 rounded-full"
//             ></motion.div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-0 relative z-10">
//             {/* Content side - Elegant typography */}
//             <div className="p-8 lg:p-16 xl:p-20 flex flex-col justify-center text-white">
//               <motion.div
//                 initial={{ x: -30, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="inline-block bg-white/10 px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
//                   <span className="text-sm uppercase tracking-wider font-medium">Begin Your Journey</span>
//                 </div>
//                 <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
//                   Ready to Begin Your
//                   <span className="block font-cormorant italic text-5xl lg:text-6xl xl:text-7xl mt-2 text-[#f8f8f8]/95 font-medium">
//                     Franchise Journey?
//                   </span>
//                 </h3>
//                 <p className="text-white/85 text-lg lg:text-xl mb-10 leading-relaxed">
//                   Join our successful franchise network and start your
//                   entrepreneurial journey with complete support and guidance.
//                 </p>

//                 <div className="space-y-4 lg:space-y-5 mb-10">
//                   {["93811 42553", "8466066425"].map((phone, idx) => (
//                     <motion.a
//                       key={idx}
//                       href={`tel:${phone.replace(/\s/g, '')}`}
//                       whileHover={{ x: 10, scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 lg:p-6 border border-white/20 hover:bg-white/15 transition-all group"
//                     >
//                       <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#8dcb3f] group-hover:scale-110 transition-transform shadow-lg">
//                         <svg
//                           className="w-7 h-7"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M22 16.92V19.92C22 20.4704 21.7893 20.9978 21.4142 21.3729C21.0391 21.748 20.5117 21.9587 19.96 21.96C17.44 22.24 14.9 21.94 12.5 21.06C10.25 20.22 8.29 18.9 6.61 17.23C4.94 15.55 3.63 13.58 2.78 11.33C1.9 8.92997 1.6 6.37997 1.88 3.85997C1.88185 3.30839 2.09253 2.78106 2.46761 2.40601C2.84269 2.03097 3.37004 1.82032 3.92 1.81997H6.92C7.99544 1.81131 8.91599 2.56613 9.11 3.61997C9.23702 4.31298 9.44526 4.98736 9.73 5.62997C10.0281 6.31297 9.94978 7.0943 9.53 7.69997L8.13 9.09997C9.47258 11.4063 11.4437 13.3774 13.75 14.72L15.15 13.32C15.7556 12.9002 16.537 12.8219 17.22 13.12C17.8626 13.4047 18.537 13.613 19.23 13.74C20.3024 13.9369 21.0666 14.8815 21.05 15.98L22 16.92Z"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>
//                       <div>
//                         <div className="text-sm uppercase tracking-wider text-white/70">
//                           Contact Us
//                         </div>
//                         <div className="text-xl lg:text-2xl font-bold">{phone}</div>
//                       </div>
//                     </motion.a>
//                   ))}
//                 </div>

//                 <motion.button
//                   whileHover={{
//                     scale: 1.02,
//                     boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-white text-[#3a8c3f] font-bold py-5 lg:py-6 rounded-xl transition-all shadow-xl hover:shadow-2xl text-lg"
//                 >
//                   Request Franchise Information
//                 </motion.button>

//                 <motion.div
//                   className="mt-8 p-5 lg:p-6 border border-white/20 rounded-xl text-center backdrop-blur-sm bg-white/5"
//                   whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
//                 >
//                   <p className="text-white font-medium text-lg">
//                     License Provided as Complimentary
//                   </p>
//                 </motion.div>
//               </motion.div>
//             </div>

//             {/* Image side - Elegant styling */}
//             <motion.div
//               className="relative h-[400px] md:h-auto"
//               initial={{ x: 30, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=1200&fit=crop"
//                 alt="Contact us"
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#3a8c3f]/50 via-[#3a8c3f]/20 to-transparent"></div>

//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default FranchiseInfo;




import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const EquipmentPackagePage = () => {
  const icon = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);
  const equipmentCategories = [
    {
      title: "Electronic Items",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      items: [
        { name: "Deep Freezer – 320 Ltr", qty: "1" },
        { name: "Refrigerator – 190 Ltr", qty: "1" },
        { name: "Induction Stove", qty: "1" },
        { name: "Mixi (Butterfly)", qty: "1" },
        { name: "Sandwich Griller", qty: "1" },
        { name: "Deep Fryer", qty: "1" },
        { name: "LED TV – 32 inch", qty: "1" },
        { name: "Milk Boiler Machine", qty: "1" },
      ]
    },
    {
      title: "Branding & Setup",
      image: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800",
      items: [
        { name: "Main Board", qty: "1" },
        { name: "Lolly Pop Board", qty: "1" },
        { name: "Photo Frames", qty: "19" },
        { name: "Menu Board", qty: "2" },
        { name: "Design Boards", qty: "As per shop" },
      ]
    },
    {
      title: "Kitchen Equipment",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      items: [
        { name: "Gas Stove", qty: "1" },
        { name: "Milton Tea Flask", qty: "1" },
        { name: "Stainless Vessels", qty: "3" },
        { name: "Measurement Mugs", qty: "5" },
        { name: "Long Spoon", qty: "1" },
        { name: "Table Spoons", qty: "6" },
        { name: "Ginger Crushing Stone", qty: "1" },
        { name: "Tea Nets", qty: "5" },
        { name: "Lemon Squeezer", qty: "1" },
        { name: "Ice Cream Scoop", qty: "1" },
        { name: "Chopping Board", qty: "1" },
        { name: "Knives", qty: "2" },
        { name: "Scissors", qty: "2" },
        { name: "Tea Trays", qty: "2" },
        { name: "Dust Bins", qty: "2" },
        { name: "Mineral Water Set", qty: "2" },
        { name: "Wooden Shelves", qty: "6" },
        { name: "Cup Holders", qty: "12" },
        { name: "Steel Cups", qty: "12" },
        { name: "Glass Cups", qty: "6" },
        { name: "Brass Cups", qty: "15" },
        { name: "Plastic Containers", qty: "6" },
        { name: "Plastic Bowls", qty: "1" },
        { name: "Pans", qty: "2" },
        { name: "Steel Vessels", qty: "2" },
        { name: "Ice Cube Tray", qty: "1" },
        { name: "Egg Shaker", qty: "1" },
        { name: "Milk Shaker", qty: "1" },
      ]
    },
    {
      title: "Interior & Furniture",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
      items: [
        { name: "Fans", qty: "2" },
        { name: "Lights", qty: "4" },
        { name: "Chairs", qty: "6" },
        { name: "Tables", qty: "2" },
        { name: "Cash Counter", qty: "1" },
        { name: "Water Storage – 5 Ltr", qty: "1" },
      ]
    },
    {
      title: "Tea & Coffee Materials",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800",
      items: [
        { name: "Tea Powder", qty: "5 kg" },
        { name: "Blue Tea", qty: "500 gm" },
        { name: "Chamomile", qty: "500 gm" },
        { name: "Rose Tea", qty: "500 gm" },
        { name: "Rooibos", qty: "500 gm" },
        { name: "Black Tea", qty: "500 gm" },
        { name: "Lavender", qty: "500 gm" },
        { name: "Green Tea", qty: "500 gm" },
        { name: "Lemon Grass", qty: "500 gm" },
        { name: "Hibiscus", qty: "500 gm" },
        { name: "White Tea", qty: "100 gm" },
        { name: "Coffee Powder", qty: "1 kg" },
      ]
    },
    {
      title: "Beverages & Additives",
      image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=800",
      items: [
        { name: "Badam Powder", qty: "1 kg" },
        { name: "Boost", qty: "1" },
        { name: "Horlicks", qty: "1" },
        { name: "Sonti", qty: "1 packet" },
        { name: "Pepper", qty: "1" },
        { name: "Bellam Powder", qty: "1 kg" },
        { name: "Honey", qty: "1 kg" },
        { name: "Sugar", qty: "1 kg" },
        { name: "Sabja", qty: "1 packet" },
      ]
    },
    {
      title: "Syrups & Flavors",
      image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=800",
      items: [
        { name: "Mix Fruit", qty: "1 Ltr" },
        { name: "Mango", qty: "1 Ltr" },
        { name: "Green Apple", qty: "1 Ltr" },
        { name: "Chocolate", qty: "2 Ltr" },
        { name: "Orange", qty: "1 Ltr" },
        { name: "Strawberry", qty: "1 Ltr" },
        { name: "Black Current", qty: "1 Ltr" },
        { name: "Blue Mint", qty: "1 Ltr" },
        { name: "Pine Apple", qty: "1 Ltr" },
      ]
    },
    {
      title: "Snacks & Confectionery",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800",
      items: [
        { name: "KitKat", qty: "25 pcs" },
        { name: "Dairy Milk", qty: "25 pcs" },
        { name: "Oreo", qty: "1 packet" },
        { name: "Snickers", qty: "25 pcs" },
        { name: "Choco Stick Box", qty: "1" },
        { name: "Tomato Ketchup", qty: "100 pcs" },
        { name: "Mayonnaise", qty: "1" },
      ]
    },
    {
      title: "Cups & Packaging Materials",
      image: "https://i.pinimg.com/1200x/3f/d1/40/3fd1401a04e70476331c72bc4e038dc4.jpg",
      items: [
        { name: "Tea Cups (90 ml)", qty: "3,000" },
        { name: "300 ml Glasses", qty: "300" },
        { name: "Lids", qty: "300" },
        { name: "Straws", qty: "300" },
        { name: "Tissues", qty: "10 packs" },
        { name: "Silver Covers", qty: "10" },
        { name: "Thread", qty: "2" },
        { name: "Maggie Packing Boxes", qty: "100" },
        { name: "Ice Cream & Maggie Bowls", qty: "100" },
        { name: "Spoons", qty: "100" },
        { name: "Burger & Sandwich Boxes", qty: "100" },
        { name: "Tooth Sticks", qty: "1 Box" },
        { name: "Dust Bin Covers", qty: "2 Bundles" },
      ]
    }
  ];
  const FadeInWhenVisible = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div className="min-h-screen bg-[#18191b]">
      <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

                .font-sacramento {
                    font-family: "Sacramento", cursive;
                }
            `}</style>

      <section
        className="relative text-white overflow-hidden min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url(${icon})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '170px 0 80px 0'
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <motion.div
            className="text-center"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            <FadeInWhenVisible>
              <h2 className="text-3xl text-[#8dcb3f] md:text-4xl lg:text-5xl font-bold mb-4" style={{
                fontFamily: 'serif',
              }}>
                Get A Franchise On Your Own Name
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <h2
                className="uppercase font-bold inline-block border-y border-white/50 border-opacity-50 m-0"
                style={{
                  fontSize: '20px',
                  lineHeight: '20px',
                  letterSpacing: '5px',
                  fontFamily: 'serif',
                  color: '#fff'
                }}
              >
                TURN YOUR NAME INTO A BRAND
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <nav className="mt-6">
                <ol className="flex justify-center items-center space-x-3 text-sm">
                  <li>
                    <a href="/" className="hover:text-[#8dcb3f] transition-colors">
                      Home
                    </a>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li className="text-[#8dcb3f]">
                    <a href="/contact-us" className="hover:text-[#8dcb3f] transition-colors">
                      Start-up
                    </a>
                  </li>
                </ol>
              </nav>
            </FadeInWhenVisible>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {equipmentCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative bg-[#18191b] border border-white/10 rounded-xl overflow-hidden hover:border-[#8dcb3f]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading='lazy'
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18191b] via-[#18191b]/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <div className="text-[#8dcb3f] text-sm font-semibold mt-1">
                      {category.items.length} items
                    </div>
                  </div>
                </div>

                {/* Items List */}
                <div className="p-6 max-h-[400px] overflow-y-auto custom-scrollbar">
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex justify-between items-center group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.02 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-white/80 text-sm group-hover/item:text-white transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[#8dcb3f] font-semibold text-sm bg-[#8dcb3f]/10 px-2 py-1 rounded">
                          {item.qty}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                {/* <div className="p-6 pt-0">
                  <button className="w-full py-3 bg-[#8dcb3f]/10 text-[#8dcb3f] rounded-lg font-semibold hover:bg-[#8dcb3f] hover:text-[#18191b] transition-all duration-300">
                    View Details
                  </button>
                </div> */}
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8dcb3f;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9fdb4f;
        }
      `}</style>
    </div>
  );
};

export default EquipmentPackagePage;