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
      { item: "Tea powder", qty: "400gm", price: "3,000" },
      { item: "Blue tea", qty: "100gm", price: "300" },
      { item: "Rose tea", qty: "100gm", price: "300" },
      { item: "Rooibos", qty: "100gm", price: "300" },
      { item: "Black tea", qty: "400gm", price: "100" },
      { item: "Lavender", qty: "100gm", price: "100" },
      { item: "Green tea", qty: "400gm", price: "100" },
      { item: "Lemon grass", qty: "100gm", price: "100" },
      { item: "Hibiscus", qty: "1 packet", price: "100" },
      { item: "White tea", qty: "1 packet", price: "100" },
      { item: "Coffee", qty: "5pcs", price: "100" },
      { item: "Horlicks", qty: "25pcs", price: "100" },
      { item: "Bournvita", qty: "1 packet", price: "100" },
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

  const TimelineCard = ({ step, index, isLeft }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, amount: 0.2 });

    return (
      <div className="relative mb-32 last:mb-0">
        {/* Timeline dot and connector - Desktop */}
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

        {/* Content wrapper - Desktop Grid */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image side */}
            <motion.div
              initial={{
                opacity: 0,
                x: isLeft ? -100 : 100,
                scale: 0.9,
              }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: isLeft ? -100 : 100, scale: 0.9 }
              }
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`relative ${isLeft ? "lg:order-1" : "lg:order-2"}`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {/* Image */}
                <div className="relative h-[400px] lg:h-[500px]">
                  <img
                    src={step.image}
                    alt={step.label}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}ee, ${step.color}66)`,
                    }}
                  ></div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-semibold">
                          STEP {index + 1}
                        </div>
                        <div className="text-sm font-bold text-gray-800">
                          {step.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Item count badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
                  >
                    <div className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: step.color }}
                      >
                        {materials[step.id]?.length}
                      </div>
                      <div className="text-xs text-gray-600 font-semibold">
                        Items
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative corner elements */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-20"
                    style={{
                      background: `radial-gradient(circle at top right, ${step.color}, transparent)`,
                    }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-32 h-32 opacity-20"
                    style={{
                      background: `radial-gradient(circle at bottom left, ${step.color}, transparent)`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Decorative elements around image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: step.color }}
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: step.color }}
              ></motion.div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{
                opacity: 0,
                x: isLeft ? 100 : -100,
              }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: isLeft ? 100 : -100 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`relative ${isLeft ? "lg:order-2" : "lg:order-1"}`}
            >
              {/* Card content */}
              <div
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 hover:shadow-3xl transition-all duration-300"
                style={{ borderColor: step.color }}
              >
                {/* Header */}
                <div
                  className="p-6 lg:p-8 text-white relative overflow-hidden"
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
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-5xl">{step.icon}</div>
                      <div>
                        <div className="text-sm text-white/80 font-semibold">
                          STEP {index + 1} OF {timelineSteps.length}
                        </div>
                        <h3 className="text-3xl font-bold">{step.label}</h3>
                      </div>
                    </div>
                    <p className="text-white/90 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Items list - Desktop */}
                <div className="hidden md:block p-6 lg:p-8 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded"
                  style={{
                    scrollbarColor: `${step.color} #f1f1f1`,
                  }}
                >
                  <div className="space-y-2">
                    {materials[step.id]?.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: 0.05 * idx }}
                        className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-lg px-3 group"
                      >
                        <div className="col-span-1 flex items-center">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform"
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
                          <span
                            className="bg-gray-100 px-4 py-1.5 rounded-lg text-sm font-medium text-gray-700 group-hover:bg-gray-200 transition-colors"
                          >
                            {item.qty}
                          </span>
                        </div>
                        <div className="col-span-2 flex items-center justify-end">
                          <span
                            className="font-bold text-lg"
                            style={{ color: step.color }}
                          >
                            {item.price ? `₹${item.price}` : "—"}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Items list - Mobile */}
                <div className="md:hidden p-4 space-y-3 max-h-[400px] overflow-y-auto">
                  {materials[step.id]?.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{ delay: 0.03 * idx }}
                      className="bg-gray-50 rounded-xl p-4 border-l-4 hover:shadow-md transition-shadow"
                      style={{ borderColor: step.color }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3 flex-1">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md"
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
                            style={{ color: step.color }}
                          >
                            {item.price ? `₹${item.price}` : "—"}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer with total items */}
                <div
                  className="px-6 lg:px-8 py-4 bg-gray-50 border-t border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: step.color }}
                      ></div>
                      <span className="text-sm font-semibold text-gray-700">
                        Total Items: {materials[step.id]?.length}
                      </span>
                    </div>
                    <button
                      className="text-sm font-semibold hover:underline transition-all"
                      style={{ color: step.color }}
                    >
                      View Details →
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
      </Helmet>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        * {
          font-family: "Inter", "Poppins", sans-serif;
        }

        .font-sacramento {
          font-family: "Sacramento", cursive;
        }

        ::-webkit-scrollbar {
          width: 8px;
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

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
          border-radius: 10px;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#8dcb3f]/50"></div>
          
          {/* Animated circles */}
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
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#8dcb3f]/30 blur-3xl"
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
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#8dcb3f]/20 blur-3xl"
          ></motion.div>
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          style={{ y: heroY }}
        >
          <FadeInWhenVisible delay={0.2}>
            <div className="inline-block bg-white/10 backdrop-blur-md px-8 py-3 rounded-full mb-8 border border-white/20">
              <span className="text-white text-sm font-semibold flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                7-STEP FRANCHISE JOURNEY
              </span>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Your Complete
              <span className="block text-[#8dcb3f] font-sacramento text-6xl md:text-8xl lg:text-9xl mt-4">
                Startup Kit Timeline
              </span>
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <p className="text-white/90 text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed">
              Follow our proven 7-step process to launch your successful cafe
              franchise with complete guidance and support
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(141,203,63,0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document
                    .getElementById("timeline-start")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#8dcb3f] hover:bg-[#7bc42e] text-white font-bold px-10 py-5 rounded-full text-lg shadow-2xl inline-flex items-center gap-3 group"
              >
                Start Your Journey
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-5 rounded-full text-lg border-2 border-white/30 inline-flex items-center gap-3"
              >
                <svg
                  className="w-5 h-5"
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
                Contact Us
              </motion.button>
            </div>
          </FadeInWhenVisible>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="text-white text-center">
            <div className="text-sm mb-2 font-semibold">Scroll Down</div>
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Progress Indicator - Sticky */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
            {timelineSteps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => {
                  const element = document.getElementById(`step-${index}`);
                  element?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all whitespace-nowrap shadow-md hover:shadow-xl"
                style={{
                  borderColor: step.color,
                  backgroundColor: "white",
                }}
              >
                <span className="text-xl">{step.icon}</span>
                <span className="text-sm font-semibold hidden sm:inline text-gray-700">
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

      {/* Timeline Section */}
      <div
        id="timeline-start"
        className="py-20 relative"
        ref={timelineRef}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#8dcb3f]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8dcb3f]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Section header */}
        <motion.div
          className="text-center mb-24 container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block bg-[#8dcb3f]/10 px-6 py-2 rounded-full mb-6"
          >
            <span className="text-[#8dcb3f] font-bold text-sm">
              COMPLETE FRANCHISE KIT
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Everything You Need to
            <span className="block text-[#8dcb3f] font-sacramento text-6xl md:text-7xl mt-2">
              Launch & Succeed
            </span>
          </h2>
          <div className="h-1 w-32 bg-[#8dcb3f] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Our comprehensive 7-step startup kit includes all equipment,
            materials, and support you need to open your franchise
          </p>
        </motion.div>

        {/* Timeline items */}
        <div className="relative">
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

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 relative overflow-hidden">
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
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-[#8dcb3f]/20 text-[#8dcb3f] px-6 py-3 rounded-full text-sm font-bold inline-block mb-6 border border-[#8dcb3f]/30">
              ⭐ WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Exclusive Franchise
              <span className="block text-[#8dcb3f] font-sacramento text-5xl md:text-7xl mt-2">
                Benefits & Support
              </span>
            </h2>
            <div className="h-1 w-24 bg-[#8dcb3f] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchiseBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#8dcb3f]/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8dcb3f]/0 to-[#8dcb3f]/0 group-hover:from-[#8dcb3f]/10 group-hover:to-[#8dcb3f]/5 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#8dcb3f]/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-[#8dcb3f] rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#8dcb3f] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#8dcb3f]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="container mx-auto px-4 py-24"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-[#8dcb3f] via-[#7bc42e] to-[#8dcb3f] rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Decorative elements */}
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
              className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full"
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
              className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 relative z-10">
            {/* Content side */}
            <div className="p-12 lg:p-16 flex flex-col justify-center text-white">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
                  <span className="text-sm font-bold">🎯 GET STARTED TODAY</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Begin Your
                  <span className="block font-sacramento text-5xl lg:text-6xl mt-2">
                    Franchise Journey?
                  </span>
                </h3>
                <p className="text-white/90 text-lg mb-10 leading-relaxed">
                  Join our successful franchise network and start your
                  entrepreneurial journey with complete support and guidance.
                </p>

                <div className="space-y-4 mb-10">
                  {["93811 42553", "8466066425"].map((phone, idx) => (
                    <motion.a
                      key={idx}
                      href={`tel:${phone}`}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all group"
                    >
                      <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#8dcb3f] group-hover:scale-110 transition-transform shadow-lg">
                        <svg
                          className="w-7 h-7"
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
                        <div className="text-xs text-white/70 font-semibold">
                          CALL US NOW
                        </div>
                        <div className="text-xl font-bold">{phone}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-[#8dcb3f] font-bold py-5 rounded-2xl transition-all shadow-2xl hover:shadow-3xl text-lg"
                >
                  Request Franchise Information
                </motion.button>

                <motion.div
                  className="mt-8 p-5 border-2 border-white/30 rounded-2xl text-center backdrop-blur-sm bg-white/5"
                  whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
                >
                  <p className="text-white font-bold text-lg">
                    ✨ License Provided as Complimentary
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Image side */}
            <motion.div
              className="relative h-[500px] md:h-auto"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop"
                alt="Contact us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8dcb3f]/50 to-transparent"></div>

              {/* Floating stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4"
              >
                {[
                  { number: "100+", label: "Franchises" },
                  { number: "95%", label: "Success Rate" },
                  { number: "24/7", label: "Support" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/95 backdrop-blur-md rounded-xl p-4 text-center shadow-xl"
                  >
                    <div className="text-2xl font-bold text-[#8dcb3f] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-semibold">
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