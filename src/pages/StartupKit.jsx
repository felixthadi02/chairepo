import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Helmet } from "react-helmet-async";

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

const FranchiseInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const timelineSteps = [
    {
      id: "electronic",
      label: "Electronics",
      icon: "⚡",
      color: "#8dcb3f",
      description: "Essential electronic equipment to power your cafe",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    },
    {
      id: "materials",
      label: "Cafe Materials",
      icon: "☕",
      color: "#8dcb3f",
      description: "Premium tea and coffee ingredients",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop",
    },
    {
      id: "boards",
      label: "Boards & Setup",
      icon: "📋",
      color: "#8dcb3f",
      description: "Branding and signage materials",
      image: "https://images.unsplash.com/photo-1572986258706-a8c0a6d0f2d0?w=800&h=600&fit=crop",
    },
    {
      id: "kitchen",
      label: "Kitchen Equipment",
      icon: "🔪",
      color: "#8dcb3f",
      description: "Complete kitchen setup essentials",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
    },
    {
      id: "glasses",
      label: "Glasses Kit",
      icon: "🥤",
      color: "#8dcb3f",
      description: "Serving and packaging materials",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=600&fit=crop",
    },
    {
      id: "interior",
      label: "Interior Design",
      icon: "🪑",
      color: "#8dcb3f",
      description: "Furniture and ambiance setup",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    },
    {
      id: "syrups",
      label: "Syrups",
      icon: "🍯",
      color: "#8dcb3f",
      description: "Flavored syrups for beverages",
      image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&h=600&fit=crop",
    },
  ];

  const materials = {
    electronic: [
      { item: "Refrigerator", qty: "1", price: "320" },
      { item: "Induction stove", qty: "1", price: "190" },
      { item: "Mixer blender", qty: "1", price: "4.5" },
      { item: "Sandwich Griller", qty: "1", price: "6.2" },
      { item: "Deep fryer", qty: "1", price: "5.0" },
      { item: "32 inch LED TV", qty: "1", price: "2.5" },
      { item: "Coffee Machine", qty: "1", price: "4.5" },
    ],
    materials: [
      { item: "Tea powder", qty: "400gm",},
      { item: "Blue tea", qty: "100gm", },
      { item: "Rose tea", qty: "100gm", },
      { item: "Rooibos", qty: "100gm", },
      { item: "Black tea", qty: "400gm", },
      { item: "Lavender", qty: "100gm", },
      { item: "Green tea", qty: "400gm", },
      { item: "Lemon grass", qty: "100gm", },
      { item: "Hibiscus", qty: "1 packet", },
      { item: "White tea", qty: "1 packet", },
      { item: "Coffee", qty: "5pcs", },
      { item: "Horlicks", qty: "25pcs", },
      { item: "Bournvita", qty: "1 packet", },
    ],
    boards: [
      { item: "Main Board", qty: "1", price: "" },
      { item: "Lollypop Board", qty: "1", price: "" },
      { item: "Photo frames", qty: "3", price: "" },
      { item: "Menu Board", qty: "1", price: "" },
      { item: "Desi Boards (As Per)", qty: "5", price: "" },
    ],
    kitchen: [
      { item: "Gas stove", qty: "1", price: "" },
      { item: "Stainless vessel", qty: "3", price: "" },
      { item: "Measurement cups", qty: "1 set", price: "" },
      { item: "Long spoons", qty: "5", price: "" },
      { item: "Tablespoon", qty: "10", price: "" },
      { item: "Ginger Crusher", qty: "1", price: "" },
      { item: "Peanuts crusher", qty: "1", price: "" },
      { item: "Lemon squeezer", qty: "1", price: "" },
      { item: "Ice cream scoop", qty: "2", price: "" },
      { item: "Chopping board", qty: "1", price: "" },
      { item: "Knife", qty: "2", price: "" },
      { item: "Scissors", qty: "1", price: "" },
      { item: "Tea tray", qty: "2", price: "" },
      { item: "Dust bin", qty: "1", price: "" },
    ],
    glasses: [
      { item: "Tea cups", qty: "25pcs", price: "" },
      { item: "300 ml glasses", qty: "10pcs", price: "" },
      { item: "Lids", qty: "1 box", price: "" },
      { item: "Straws", qty: "2 box", price: "" },
      { item: "Tissues", qty: "1 packet", price: "" },
      { item: "Silver covers", qty: "25pcs", price: "" },
      { item: "Thread", qty: "10pcs", price: "" },
      { item: "Paper packing", qty: "1", price: "" },
      { item: "Ice cream & Milkshakes spoons", qty: "1 box", price: "" },
      { item: "Tooth sticks", qty: "1 box", price: "" },
      { item: "Dust bin covers", qty: "3", price: "" },
    ],
    interior: [
      { item: "Fans", qty: "2", price: "" },
      { item: "Lights", qty: "5", price: "" },
      { item: "Chairs", qty: "8", price: "" },
      { item: "Tables", qty: "4", price: "" },
      { item: "Wooden shelf", qty: "2", price: "" },
      { item: "Paints", qty: "As needed", price: "" },
    ],
    syrups: [
      { item: "Green apple", qty: "1 bottle", price: "" },
      { item: "Chocolate", qty: "1 bottle", price: "" },
      { item: "Orange", qty: "1 bottle", price: "" },
      { item: "Strawberry", qty: "1 bottle", price: "" },
      { item: "Black currant", qty: "1 bottle", price: "" },
      { item: "Blue mint", qty: "1 bottle", price: "" },
      { item: "Choco Stick box", qty: "1 box", price: "" },
    ],
  };

  const franchiseBenefits = [
    {
      title: "REVENUE MAKING",
      description:
        "Consistent income from day one with our proven business model",
    },
    {
      title: "RAW MATERIALS",
      description:
        "Premium quality ingredients supplied directly from verified sources",
    },
    {
      title: "LOW INVESTMENT HIGH RETURNS",
      description: "Start with minimal capital and see profits within months",
    },
    {
      title: "SOCIAL MARKETING SUPPORT",
      description:
        "Comprehensive digital marketing assistance for maximum reach",
    },
    {
      title: "MINIMAL OPERATIONAL SPACE",
      description: "Only 90-150 sq. ft required to set up your cafe",
    },
    {
      title: "NO ROYALTY",
      description: "Keep 100% of your profits with no ongoing fees",
    },
    {
      title: "FREE TRAINING",
      description:
        "Comprehensive 3-day training program for you and your staff",
    },
    {
      title: "LIFETIME SUPPORT",
      description: "One-time settlement with continuous business guidance",
    },
    {
      title: "100% SUCCESS",
      description: "Proven track record with all our franchise partners",
    },
  ];

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);

  // Enhanced TimelineCard component with better desktop presentation
  const TimelineCard = ({ step, index, isLeft }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.1 });

    return (
      <div ref={cardRef} className="relative mb-16 md:mb-32 last:mb-0">
        {/* Timeline dot and connector - Desktop only */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="relative z-10"
          >
            {/* Large circle badge */}
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl border-4 border-white relative overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
              }}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-300"></div>
              <div className="text-center relative z-10">
                <div className="text-4xl mb-1 transform group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="text-white font-bold text-xs">
                  STEP {index + 1}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connecting line with gradient */}
          {index < timelineSteps.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-28 left-1/2 transform -translate-x-1/2 w-1 h-56 origin-top"
              style={{
                background: `linear-gradient(180deg, ${step.color}, #e0e0e0)`,
              }}
            ></motion.div>
          )}
        </div>

        {/* Timeline marker for mobile */}
        <div className="lg:hidden flex items-center justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl relative"
            style={{
              background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
            }}
          >
            <div className="text-center">
              <div className="text-3xl mb-1 text-white">{step.icon}</div>
              <div className="text-white font-bold text-xs">STEP {index + 1}</div>
            </div>
          </motion.div>
        </div>

        {/* Content wrapper - Responsive Grid */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Image side - Enhanced for desktop */}
            <motion.div
              initial={{
                opacity: 0,
                x: isLeft ? -50 : 50,
                scale: 0.9,
              }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }
              }
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`relative ${isLeft ? "lg:order-1" : "lg:order-2"}`}
            >
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl group">
                {/* Image with responsive height */}
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px]">
                  <img
                    src={step.image}
                    alt={step.label}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}ee, ${step.color}66)`,
                    }}
                  ></div>

                  {/* Floating badge - Responsive positioning */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg"
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white text-lg md:text-xl"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-semibold">
                          STEP {index + 1}
                        </div>
                        <div className="text-xs md:text-sm font-bold text-gray-800">
                          {step.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Item count badge - Responsive positioning */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/95 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg"
                  >
                    <div className="text-center">
                      <div
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: step.color }}
                      >
                        {materials[step.id]?.length}
                      </div>
                      <div className="text-xs text-gray-600 font-semibold">
                        Items
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content side - Enhanced for desktop */}
            <motion.div
              initial={{
                opacity: 0,
                x: isLeft ? 50 : -50,
              }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: isLeft ? 50 : -50 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`relative ${isLeft ? "lg:order-2" : "lg:order-1"}`}
            >
              {/* Card content */}
              <div
                className="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden border-t-4 hover:shadow-3xl transition-all duration-300"
                style={{ borderColor: step.color }}
              >
                {/* Header - Responsive padding */}
                <div
                  className="p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                  }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="text-3xl sm:text-4xl lg:text-5xl">{step.icon}</div>
                      <div>
                        <div className="text-xs sm:text-sm text-white/80 font-semibold">
                          STEP {index + 1} OF {timelineSteps.length}
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{step.label}</h3>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Table Header - Desktop */}
                <div className="hidden md:block bg-gray-100 px-6 lg:px-8 py-3 border-b border-gray-200">
                  <div className="grid grid-cols-12 gap-4 text-sm font-bold text-gray-600">
                    <div className="col-span-1">#</div>
                    <div className="col-span-6">Item Name</div>
                    <div className="col-span-3">Quantity</div>
                    <div className="col-span-2 text-right">Price</div>
                  </div>
                </div>

                {/* Items list - Desktop with better scrollbar */}
                <div 
                  className="hidden md:block p-4 sm:p-6 lg:p-8 max-h-[300px] lg:max-h-[400px] overflow-y-auto"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: `${step.color} #f1f1f1`,
                  }}
                >
                  <div className="space-y-1">
                    {materials[step.id]?.map((item, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-12 gap-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-lg px-2 group"
                      >
                        <div className="col-span-1 flex items-center">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: step.color }}
                          >
                            {idx + 1}
                          </div>
                        </div>
                        <div className="col-span-6 flex items-center">
                          <span className="font-semibold text-gray-800 group-hover:text-gray-900">
                            {item.item}
                          </span>
                        </div>
                        <div className="col-span-3 flex items-center">
                          <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium text-gray-700 group-hover:bg-gray-200 transition-colors">
                            {item.qty}
                          </span>
                        </div>
                        <div className="col-span-2 flex items-center justify-end">
                          <span
                            className="font-bold text-lg"
                            style={{ color: item.price ? step.color : '#999' }}
                          >
                            {item.price ? `₹${item.price}` : "—"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Items list - Mobile with improved touch targets */}
                <div className="md:hidden p-3 space-y-2 max-h-[300px] overflow-y-auto">
                  {materials[step.id]?.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-xl p-3 sm:p-4 border-l-4 hover:shadow-md transition-shadow touch-manipulation"
                      style={{ borderColor: step.color }}
                    >
                      <div className="flex items-start justify-between gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1">
                          <div
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md"
                            style={{ backgroundColor: step.color }}
                          >
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-900">
                              {item.item}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              Qty: {item.qty}
                            </p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div
                            className="text-base font-bold"
                            style={{ color: item.price ? step.color : '#999' }}
                          >
                            {item.price ? `₹${item.price}` : "—"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer with total items - Responsive padding */}
                <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: step.color }}
                      ></div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">
                        Total Items: {materials[step.id]?.length}
                      </span>
                    </div>
                    <button
                      className="text-xs sm:text-sm font-semibold hover:underline transition-all flex items-center gap-1 px-2 py-2 touch-manipulation"
                      style={{ color: step.color }}
                    >
                      View Details 
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-green-50/30 min-h-screen">
      <Helmet>
        <title>Startup Kit for Tea Franchise Opportunities | Tea 5 cafe</title>
        <meta
          name="description"
          content="Begin your tea franchise journey with our complete startup kit. Enjoy low investment, high returns, and full business support from Tea 5 cafe."
        />
        <meta
          name="keywords"
          content="tea cafe franchise, coffee franchise Hyderabad, low investment franchise, Tea 5 cafe, franchise opportunities India, tea franchise in India"
        />
        <link rel="canonical" href="https://www.tea5cafe.com/startup-kit" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Helmet>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        * {
          font-family: "Inter", "Poppins", sans-serif;
          -webkit-tap-highlight-color: transparent;
        }

        .font-sacramento {
          font-family: "Sacramento", cursive;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #8dcb3f, #7bc42e);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #7bc42e, #6ab31d);
        }
        
        /* Hide scrollbar for mobile */
        @media (max-width: 768px) {
          .scrollbar-hidden {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }
        }
        
        /* Improve touch targets */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Enhanced desktop experience */
        @media (min-width: 1280px) {
          .container {
            max-width: 1200px;
          }
        }
        
        @media (min-width: 1536px) {
          .container {
            max-width: 1400px;
          }
        }
      `}</style>

      {/* Hero Section - Responsive height with enhanced desktop experience */}
      <section className="relative min-h-[60vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop')`,
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#8dcb3f]/50"></div>
          
          {/* Animated circles - Enhanced for desktop */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 rounded-full bg-[#8dcb3f]/30 blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 lg:w-[30rem] h-48 sm:h-64 md:h-96 lg:h-[30rem] rounded-full bg-[#8dcb3f]/20 blur-3xl"
          ></motion.div>
        </div>
        
        {/* Hero content - Enhanced for desktop */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              Complete Franchise
              <span className="block text-[#8dcb3f] font-sacramento text-4xl sm:text-5xl md:text-7xl lg:text-8xl mt-2">
                Startup Kit
              </span>
            </h1>
            <p className="text-white/90 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 lg:mb-12">
              Begin your journey with Tea 5 Cafe - low investment, high returns, and complete business support
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8dcb3f] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base lg:text-lg"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Progress Indicator - Sticky with improved desktop experience */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 md:py-4">
          <div className="flex items-center justify-center lg:justify-start gap-2 overflow-x-auto scrollbar-hidden pb-2 -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {timelineSteps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => {
                  const element = document.getElementById(`step-${index}`);
                  element?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 sm:px-5 py-3 rounded-full border-2 transition-all whitespace-nowrap shadow-md hover:shadow-xl flex-shrink-0 min-h-[44px] min-w-[44px]"
                style={{
                  borderColor: step.color,
                  backgroundColor: "white",
                }}
              >
                <span className="text-lg sm:text-xl">{step.icon}</span>
                <span className="text-xs sm:text-sm font-semibold hidden sm:inline text-gray-700">
                  {step.label}
                </span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full text-white hidden md:inline"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section - Enhanced for desktop */}
      <div
        id="timeline-start"
        className="py-12 md:py-20 lg:py-24 relative"
        ref={timelineRef}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-[#8dcb3f]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 lg:w-[30rem] lg:h-[30rem] bg-[#8dcb3f]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Section header - Enhanced for desktop */}
        <motion.div
          className="text-center mb-12 md:mb-24 container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block bg-[#8dcb3f]/10 px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6"
          >
            <span className="text-[#8dcb3f] font-bold text-xs sm:text-sm lg:text-base">
              COMPLETE FRANCHISE KIT
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 md:mb-6">
            Everything You Need to
            <span className="block text-[#8dcb3f] font-sacramento text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
              Launch & Succeed
            </span>
          </h2>
          <div className="h-1 w-24 md:w-32 lg:w-40 bg-[#8dcb3f] mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Our comprehensive 7-step startup kit includes all equipment,
            materials, and support you need to open your franchise
          </p>
        </motion.div>

        {/* Timeline items */}
        <div className="relative max-w-[1920px] mx-auto">
          {timelineSteps.map((step, index) => (
            <div key={step.id} id={`step-${index}`}>
              <TimelineCard
                step={step}
                index={index}
                isLeft={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section - Enhanced for desktop */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #8dcb3f 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-[#8dcb3f]/20 text-[#8dcb3f] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base font-bold inline-block mb-4 sm:mb-6 border border-[#8dcb3f]/30">
              ⭐ WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
              Exclusive Franchise
              <span className="block text-[#8dcb3f] font-sacramento text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
                Benefits & Support
              </span>
            </h2>
            <div className="h-1 w-16 sm:w-24 lg:w-32 bg-[#8dcb3f] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {franchiseBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 hover:border-[#8dcb3f]/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8dcb3f]/0 to-[#8dcb3f]/0 group-hover:from-[#8dcb3f]/10 group-hover:to-[#8dcb3f]/5 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#8dcb3f]/20 rounded-xl md:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#8dcb3f] rounded-lg"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-[#8dcb3f] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#8dcb3f]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced for desktop */}
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24 lg:py-32"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-[#8dcb3f] via-[#7bc42e] to-[#8dcb3f] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Decorative elements - Enhanced for desktop */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-24 -right-24 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white/10 rounded-full"
            ></motion.div>
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-32 -left-32 w-64 sm:w-96 lg:w-[40rem] h-64 sm:h-96 lg:h-[40rem] bg-white/10 rounded-full"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 relative z-10">
            {/* Content side - Enhanced for desktop */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-16 xl:p-20 flex flex-col justify-center text-white">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-white/20 px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                  <span className="text-xs sm:text-sm lg:text-base font-bold">🎯 GET STARTED TODAY</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                  Ready to Begin Your
                  <span className="block font-sacramento text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2">
                    Franchise Journey?
                  </span>
                </h3>
                <p className="text-white/90 text-sm sm:text-base lg:text-xl mb-6 sm:mb-10 leading-relaxed">
                  Join our successful franchise network and start your
                  entrepreneurial journey with complete support and guidance.
                </p>

                <div className="space-y-3 sm:space-y-4 lg:space-y-5 mb-6 sm:mb-10">
                  {["93811 42553", "8466066425"].map((phone, idx) => (
                    <motion.a
                      key={idx}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all group touch-manipulation"
                    >
                      <div className="bg-white w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-[#8dcb3f] group-hover:scale-110 transition-transform shadow-lg">
                        <svg
                          className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs lg:text-sm text-white/70 font-semibold">
                          CALL US NOW
                        </div>
                        <div className="text-base sm:text-xl lg:text-2xl font-bold">{phone}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-[#8dcb3f] font-bold py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl transition-all shadow-xl hover:shadow-2xl text-sm sm:text-lg lg:text-xl touch-manipulation"
                >
                  Request Franchise Information
                </motion.button>

                <motion.div
                  className="mt-6 sm:mt-8 p-4 sm:p-5 lg:p-6 border-2 border-white/30 rounded-xl sm:rounded-2xl text-center backdrop-blur-sm bg-white/5"
                  whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
                >
                  <p className="text-white font-bold text-base sm:text-lg lg:text-xl">
                    ✨ License Provided as Complimentary
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Image side - Enhanced for desktop */}
            <motion.div
              className="relative h-[300px] sm:h-[400px] md:h-auto"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=1200&fit=crop"
                alt="Contact us"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8dcb3f]/50 to-transparent"></div>

              {/* Floating stats - Enhanced for desktop */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-4 sm:left-8 lg:left-12 right-4 sm:right-8 lg:right-12 grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6"
              >
                {[
                  { number: "100+", label: "Franchises" },
                  { number: "95%", label: "Success Rate" },
                  { number: "24/7", label: "Support" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-4 lg:p-6 text-center shadow-xl"
                  >
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#8dcb3f] mb-0 sm:mb-1 lg:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FranchiseInfo;