import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Helmet } from 'react-helmet-async';
import "../index.css"
import video from "../assets/video1.mp4"
import image21 from '../assets/1.png';
import image22 from '../assets/2.png';
import image23 from '../assets/3.png';
import image24 from '../assets/4.png';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/11.png';
import image6 from '../assets/12.png';
import image7 from '../assets/13.png';
import ph2 from '../assets/ph2.png';
import FloatingWhatsapp from "./floatingWhatsup";
const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  // Refs for scroll animations
  const storyRef = useRef(null);
  const featuresRef = useRef(null);
  const coffeeRef = useRef(null);
  const foodRef = useRef(null);
  const galleryRef = useRef(null);
  const reviewRef = useRef(null);
  const hoursRef = useRef(null);

  // Controls for animations
  const storyControls = useAnimation();
  const featuresControls = useAnimation();
  const coffeeControls = useAnimation();
  const foodControls = useAnimation();
  const galleryControls = useAnimation();
  const reviewControls = useAnimation();
  const hoursControls = useAnimation();
  const statsRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [counters, setCounters] = useState([
    { current: 0, target: 14000, suffix: "+", label: "Happy Customers" },
    { current: 0, target: 120, suffix: "+", label: "Coffee Varieties" },
    { current: 0, target: 35, suffix: "+", label: "Event Packages" },
    { current: 0, target: 4, suffix: "", label: "Award-Winning Chefs" },
  ]);
  // Intersection Observer for stats section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          startCounting();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isStatsVisible]);

  // Counter animation logic
  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    counters.forEach((counter, index) => {
      let currentStep = 0;
      const increment = counter.target / steps;

      const timer = setInterval(() => {
        currentStep++;

        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          if (currentStep < steps) {
            newCounters[index] = {
              ...newCounters[index],
              current: Math.floor(increment * currentStep),
            };
          } else {
            newCounters[index] = {
              ...newCounters[index],
              current: counter.target,
            };
            clearInterval(timer);
          }
          return newCounters;
        });
      }, stepDuration + index * 50); // Stagger each counter slightly
    });
  };

  // Format number with K for thousands
  const formatNumber = (num, suffix) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K" + suffix;
    }
    return num + suffix;
  };
  // Check if elements are in view
  const storyInView = useInView(storyRef, { once: false, threshold: 0.2 });
  const featuresInView = useInView(featuresRef, {
    once: false,
    threshold: 0.2,
  });
   const teas = [
    {
      id: 1,
      name: 'Rooibos Tea',
      title: 'Pure Wellness, Naturally',
      description: 'Rooibos Tea is a gentle herbal tea that contains no caffeine and is packed with antioxidants. It supports heart health, aids digestion, and helps with weight management, making it a perfect everyday wellness drink.',
      image: image21,
      color: 'from-red-400 to-orange-400'
    },
    {
      id: 2,
      name: 'Chamomile Tea',
      title: 'Relax. Restore. Rebalance.',
      description: 'Chamomile Tea is well known for its calming properties and is ideal for relaxation and stress relief. It helps improve sleep quality, supports blood sugar balance, and eases menstrual discomfort naturally.',
      image: image22,
      color: 'from-yellow-300 to-amber-400'
    },
    {
      id: 3,
      name: 'Hibiscus Tea',
      title: 'Bold Flavor, Powerful Benefits',
      description: 'Hibiscus Tea is rich in antioxidants, vitamin C, and natural compounds that support liver health and metabolism. Its refreshing taste helps fight bacteria while offering a naturally energizing and healthy beverage.',
      image: image23,
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 4,
      name: 'Blue Tea',
      title: 'Calm in Every Sip',
      description: 'Blue Tea is naturally rich in antioxidants and is known for supporting healthy skin, improving eyesight, and promoting hair growth. Being caffeine-free, it offers a calming experience while helping the body stay refreshed and balanced.',
      image: image24,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 5,
      name: 'Lavender Tea',
      title: 'Sip into Serenity',
      description: 'Lavender Tea is brewed from aromatic purple buds and is loved for its soothing effect on the mind and body. It helps reduce stress, improve sleep quality, enhance mood, and support healthy skin.',
      image: image21, // Reusing image or add image25
      color: 'from-purple-400 to-violet-500'
    }
  ];
  const coffeeInView = useInView(coffeeRef, { once: false, threshold: 0.2 });
  const foodInView = useInView(foodRef, { once: false, threshold: 0.2 });
  const galleryInView = useInView(galleryRef, { once: false, threshold: 0.2 });
  const reviewInView = useInView(reviewRef, { once: false, threshold: 0.2 });
  const hoursInView = useInView(hoursRef, { once: false, threshold: 0.2 });

  // Handle scroll for parallax and animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger animations when sections come into view
  useEffect(() => {
    if (storyInView) storyControls.start("visible");
    if (featuresInView) featuresControls.start("visible");
    if (coffeeInView) coffeeControls.start("visible");
    if (foodInView) foodControls.start("visible");
    if (galleryInView) galleryControls.start("visible");
    if (reviewInView) reviewControls.start("visible");
    if (hoursInView) hoursControls.start("visible");
  }, [
    storyInView,
    featuresInView,
    coffeeInView,
    foodInView,
    galleryInView,
    reviewInView,
    hoursInView,
    storyControls,
    featuresControls,
    coffeeControls,
    foodControls,
    galleryControls,
    reviewControls,
    hoursControls,
  ]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full hello overflow-x-hidden bg-gradient-to-br from-[#FDF8F3] via-[#F8F1E9] to-[#F0E6DA]  ">
      {/* Hero Section */}
      <FloatingWhatsapp/>
      <Helmet>
        <title>Best Low Investment Tea Franchise in India | Tea 5 Cafe</title>
        <meta
          name="description"
          content="Start your Tea 5 cafe franchise in India. Enjoy low investment, high returns, and premium tea blends from one of India’s fastest-growing tea brands."
        />
        <meta
          name="keywords"
          content="tea cafe franchise, coffee franchise Hyderabad, low investment franchise, Tea 5 cafe, franchise opportunities India, tea franchise in India"
        />
      </Helmet>
<section className="relative h-screen" id="home">
  <section className="relative w-full h-[100vh]">
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{ delay: 3000 }}
      loop
      effect="fade"
      speed={1000}
      className="h-full"
      onSlideChange={(swiper) => {
        const activeIndex = swiper.realIndex;
      }}
    >
      {[
        {
          image: image1,
          line1: "Dream Blend",
          line2: "Flavour",
          buttonText: "Start Your Franchise Journey",
          description:
            "Tea 5 cafe serves passion in every cup. Enjoy rich blends and rewarding franchise opportunities with a trusted brand loved for quality across India.",
        },
        {
          image: image2,
          line1: "Brew Success",
          line2: "Growth",
          buttonText: "Explore Franchise Options",
          description:
            "Transform your entrepreneurial dreams into reality with Tea 5. Our proven business model offers low investment, high returns, and comprehensive support for success.",
        },
        {
          image: image3,
          line1: "Pure Aroma",
          line2: "Delight",
          buttonText: "Join Our Family",
          description:
            "Experience the art of tea crafting at Tea 5 cafe. From classic chai to exotic blends, we bring authentic flavors that keep customers coming back for more.",
        },
        {
          image: image4,
          line1: "Sip & Thrive",
          line2: "Passion",
          buttonText: "Become A Partner",
          description:
            "Join India's fastest-growing tea franchise network. With 50+ successful outlets and counting, Tea 5 cafe is your gateway to a profitable and fulfilling business venture.",
        },
        {
          image: image5,
          line1: "Sip & Thrive",
          line2: "Passion",
          buttonText: "Become A Partner",
          description:
            "Join India's fastest-growing tea franchise network. With 50+ successful outlets and counting, Tea 5 cafe is your gateway to a profitable and fulfilling business venture.",
        },
        {
          image: image6,
          line1: "Sip & Thrive",
          line2: "Passion",
          buttonText: "Become A Partner",
          description:
            "Join India's fastest-growing tea franchise network. With 50+ successful outlets and counting, Tea 5 cafe is your gateway to a profitable and fulfilling business venture.",
        },
        {
          image: image7,
          line1: "Sip & Thrive",
          line2: "Passion",
          buttonText: "Become A Partner",
          description:
            "Join India's fastest-growing tea franchise network. With 50+ successful outlets and counting, Tea 5 cafe is your gateway to a profitable and fulfilling business venture.",
        },
      ].map((slide, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Content wrapper with responsive padding */}
              <div className="absolute inset-0 flex flex-col justify-center items-center pt-10 md:pt-16 lg:pt-24 overflow-hidden">
                {/* Text container with responsive margins */}
                <div className="text-center px-4 sm:px-6 mx-auto max-w-3xl mt-4 md:mt-12 lg:mt-20 w-full">
                  {/* First line - responsive font size */}
                  <motion.h1
                    key={`title-${index}-${isActive}`}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 90,
                      damping: 20,
                    }}
                    className="text-[#8dcb3f] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[100px] leading-[1] sm:leading-[1.1] m-0 tracking-wide font-sacramento"
                  >
                    {slide.line1}
                  </motion.h1>

                  {/* Second line - responsive with no absolute positioning */}
                  <motion.p
                    key={`subtitle-${index}-${isActive}`}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      type: "spring",
                      stiffness: 90,
                      damping: 20,
                    }}
                    className="uppercase font-bold inline-block border-y border-white/50 m-0"
                    style={{
                      fontSize: "40px",
                      lineHeight: "40px",
                      letterSpacing: "10px",
                      fontFamily: "serif",
                      color: "#fff",
                    }}
                  >
                    {slide.line2}
                  </motion.p>

                  {/* Description with responsive width and font size */}
                  <motion.p
                    key={`desc-${index}-${isActive}`}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      type: "spring",
                      stiffness: 90,
                      damping: 20,
                    }}
                    className="text-white mt-4 md:mt-6 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed"
                  >
                    {slide.description}
                  </motion.p>

                  {/* CTA Button - responsive sizing */}
                  <motion.a
                    key={`button-${index}-${isActive}`}
                    href="#menu"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 100,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 1.1,
                      type: "spring",
                      stiffness: 90,
                      damping: 20,
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#7ab832",
                    }}
                    className="mt-6 md:mt-8 inline-block px-6 md:px-8 py-2 md:py-3 bg-[#8dcb3f] text-white text-sm md:text-base rounded-full transition-all duration-300"
                  >
                    {slide.buttonText}
                  </motion.a>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </section>

  {/* Make sure the font is imported */}
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

    .font-sacramento {
      font-family: "Sacramento", cursive;
      font-weight: 400;
      font-style: normal;
    }

    /* Custom Swiper arrow styles */
    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 18px !important;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    /* Media queries for arrow sizes on different screens */
    @media (max-width: 768px) {
      .swiper-button-next:after,
      .swiper-button-prev:after {
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .swiper-button-next:after,
      .swiper-button-prev:after {
        font-size: 12px !important;
      }
    }

    /* Hide any overflow to prevent scrollbars during animations */
    .swiper-slide {
      overflow: hidden;
    }
  `}</style>
</section>

      {/*our story*/}
      <section
        ref={storyRef}
        className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
        id="about"
      >
        {/* Premium background with grain texture and gradient */}
        <div className="absolute inset-0  opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40 mix-blend-soft-light"></div>

        {/* Golden accent line */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8dcb3f]/50 to-transparent"
          style={{ top: "15%" }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="container mx-auto px-6 sm:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section header with premium typography */}
            <motion.div
              className="text-center mb-16 md:mb-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="inline-block mb-3"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[#8dcb3f] text-sm tracking-[0.3em] uppercase font-light border-b border-[#8dcb3f]/30 pb-2 px-4">
                  Since 2010
                </span>
              </motion.div>

              <motion.h2
                className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#3A2A18] mt-4 mb-6 mx-auto max-w-4xl leading-tight font-light"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                The{" "}
                <span className="text-[#8dcb3f] italic font-normal">
                  Craft
                </span>{" "}
                Behind Every Cup
              </motion.h2>

              <motion.div
                className="h-[3px] w-20 bg-gradient-to-r from-[#8dcb3f]/20 via-[#8dcb3f] to-[#8dcb3f]/20 mx-auto my-6"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 80, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              <motion.p
                className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-light"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A journey of passion, dedication, and the love for perfect tea.
              </motion.p>
              <motion.p
                className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-light mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Every cup at Tea 5 cafe is made with care, blending authentic flavor, freshness, and a deep respect for India’s tea culture. Our goal is simple: to serve quality tea that brings people together and creates a lasting impression.              </motion.p>
            </motion.div>

            {/* Content container with golden accent */}
            <div className="relative">
              {/* Diagonal golden accent line */}
              <motion.div
                className="absolute w-[1px] h-[85%] bg-gradient-to-b from-transparent via-[#8dcb3f]/50 to-transparent -left-2 top-[5%] hidden lg:block"
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
                {/* Image column with premium presentation */}
                <motion.div
                  className="relative order-1"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  {/* Main image with floating frame effect */}
                  <div className="relative mx-auto max-w-md lg:max-w-full aspect-[4/5] overflow-visible">
                    {/* Decorative pattern behind image */}
                    <motion.div
                      className="absolute top-4 left-4 right-4 bottom-4 border border-[#8dcb3f]/20 rounded-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />

                    {/* Shadow layer */}
                    <motion.div
                      className="absolute top-6 left-6 -bottom-6 -right-6 bg-[#8dcb3f]/5 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />

                    {/* Main image container */}
                    <motion.div
                      className="relative z-10 rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(209,107,2,0.3)]"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 30px 70px -15px rgba(209, 107, 2, 0.35)",
                        transition: { duration: 0.5 },
                      }}
                    >
                      <motion.div className="aspect-[4/5] w-full overflow-hidden relative">
                        {/* Image */}
                        <motion.img
                          src={ph2}
                          alt="Our coffee journey"
                          className="w-full h-full object-cover"
                          initial={{
                            scale: 1.2,
                            filter: "saturate(0.8) brightness(0.9)",
                          }}
                          whileInView={{
                            scale: 1,
                            filter: "saturate(1.1) brightness(1.05)",
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          whileHover={{
                            scale: 1.05,
                            filter: "saturate(1.2) brightness(1.1)",
                            transition: { duration: 1.2 },
                          }}
                        />

                        {/* Elegant gradient overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                        />
                      </motion.div>

                      {/* Premium badge overlay */}
                      <motion.div
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 shadow-lg"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1 }}
                      >
                        <p className="text-[#8dcb3f] text-xs font-medium">
                          Premium Quality
                        </p>
                      </motion.div>

                      {/* Caption */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <p className="text-xl font-serif mb-1">Our Heritage</p>
                        <p className="text-sm font-light opacity-90">
                          Handcrafted with passion since 2010
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* Floating coffee icon */}
                    {/* <motion.div
                      className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-white shadow-[0_15px_35px_rgba(209,107,2,0.25)] flex items-center justify-center z-20"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 1.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(209,107,2,0.3)",
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div className="w-12 h-12 text-[#8dcb3f]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
                        </svg>
                      </div>
                    </motion.div> */}
                    <motion.div
                      className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white shadow-[0_15px_35px_rgba(209,107,2,0.25)] flex items-center justify-center z-20"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 1.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(24,25,27,0.3)",
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <img
                        src="https://www.mrchai.in/images/background/franchise.webp" // replace with your actual cup image path
                        alt="Cup Icon"
                        className="w-35 h-35 object-contain"
                      />
                    </motion.div>

                  </div>
                </motion.div>

                {/* Text column with premium content presentation */}
                <motion.div
                  className="order-2"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  {/* Content container */}
                  <div className="relative">
                    {/* Stylized quote mark */}
                    <motion.div
                      className="absolute -top-20 -left-4 text-[#8dcb3f] opacity-10 text-9xl font-serif transform -rotate-6"
                      initial={{ opacity: 0, scale: 0.5, x: -30 }}
                      whileInView={{ opacity: 0.1, scale: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    >
                      ❝
                    </motion.div>

                    {/* Main story content */}
                    <div className="relative z-10">
                      {/* Story title with animated line */}
                      <motion.div
                        className="mb-8 relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#3A2A18] font-light leading-tight mb-3">
                          A Sensory{" "}
                          <span className="text-[#8dcb3f] italic">Journey</span>{" "}
                          Through Every Cup
                        </h3>
                        <motion.div
                          className="h-[2px] w-20 bg-gradient-to-r from-[#8dcb3f] to-[#8dcb3f]/10"
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: 80, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        />
                      </motion.div>

                      {/* Story paragraphs */}
                      <div className="space-y-6 text-gray-700">
                        <motion.p
                          className="text-base sm:text-lg leading-relaxed font-light"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          In the heart of Hyderabad, Tea 5 cafe brings people together with the warmth of authentic tea and meaningful conversations. Every cup is brewed with care, using handpicked tea leaves to deliver freshness, purity, and a taste that lasts
                        </motion.p>

                        <motion.p
                          className="text-base sm:text-lg leading-relaxed font-light"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        >
                          Tea 5 cafe is one of the most trusted <b className="text-[#93ce49]">tea cafe franchise in Hyderabad</b>  and a growing name across India. With a <b className="text-[#93ce49]">low investment tea franchise</b> , entrepreneurs can start a profitable business backed by a brand known for quality and consistency.
                        </motion.p>
                      </div>

                      {/* Features/highlights list */}
                      <motion.div
                        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        {[
                          {
                            icon: "M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z",
                            title: "Ethically Sourced",
                            description: "All ingredients are selected with responsibility to maintain freshness and quality."
                          },
                          {
                            icon: "M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z",
                            title: "Master Roasters",
                            description: "Every recipe is created to bring out the best tea flavors in India."
                          },
                          {
                            icon: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3Z",
                            title: "Flavor Artistry",
                            description: " We help every partner establish and grow a successful Tea 5 cafe franchise in India."
                          },
                          {
                            icon: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",
                            title: "Quality Selection",
                            description: " Every outlet follows the same standard to ensure the perfect cup each time."
                          },
                        ].map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                          >
                            <div className="w-10 h-10 rounded-full bg-[#8dcb3f]/10 flex items-center justify-center flex-shrink-0 mt-1">
                              <svg
                                className="w-5 h-5 text-[#8dcb3f]"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d={feature.icon} />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[#3A2A18] font-medium mb-1">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-600 font-light">
                                {feature.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* CTA buttons */}
                      <motion.div
                        className="mt-10 flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <motion.a
                          href="#menu"
                          className="px-8 py-3 bg-[#8dcb3f] text-white rounded-full shadow-lg shadow-[#8dcb3f]/20 hover:shadow-[#8dcb3f]/30 hover:bg-[#c05e00] transition-all duration-300"
                          whileHover={{
                            scale: 1.03,
                            boxShadow:
                              "0 10px 25px -5px rgba(209, 107, 2, 0.4)",
                            transition: { duration: 0.3 },
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Our Menu
                        </motion.a>

                        <motion.a
                          href="#about"
                          className="px-8 py-3 border-2 border-[#8dcb3f] text-[#8dcb3f] rounded-full hover:bg-[#8dcb3f]/5 transition-all duration-300"
                          whileHover={{
                            scale: 1.03,
                            backgroundColor: "rgba(209, 107, 2, 0.05)",
                            transition: { duration: 0.3 },
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Learn More
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="py-16 bg-[#faf3ec] text-white">
  <div className="max-w-screen-2xl mx-auto px-4">
    {/* Section Header */}
    <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
      <div>
        <h2 className="text-7xl md:text-8xl font-thin tracking-tight leading-none mb-2 text-[#8dcb3f]">
          RARE<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 font-normal">BLENDS</span>
        </h2>
      </div>
      <div className="max-w-md">
        <p className="text-gray-900 text-lg leading-relaxed">
          Hand-selected from the world's most exclusive tea gardens. Each blend tells a story of terroir and tradition.
        </p>
      </div>
    </div>

    {/* Asymmetric Grid */}
    <div className="space-y-32">
      
      {/* Row 1 - Rooibos Feature */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 relative group">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={teas[0].image}
              alt={teas[0].name}
              className="w-full h-[600px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
          </div>
          <div className="absolute top-8 left-8">
            <span className="text-9xl font-thin text-white">01</span>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6 lg:pl-12">
          <span className="inline-block px-4 py-1 border border-amber-500 text-amber-500 text-xs tracking-widest text-[#8dcb3f]">
            SOUTH AFRICAN ORIGIN
          </span>
          <h3 className="text-5xl font-thin text-[#8dcb3f]">{teas[0].name}</h3>
          <p className="text-2xl text-amber-400 font-light">{teas[0].title}</p>
          <p className="text-gray-900 leading-relaxed text-lg">{teas[0].description}</p>
          <button className="group flex items-center gap-4 text-white hover:text-amber-400 transition-colors">
            <span className="text-sm tracking-widest">EXPLORE</span>
            <div className="w-12 h-[1px] bg-white group-hover:bg-amber-400 group-hover:w-20 transition-all"></div>
          </button>
        </div>
      </div>

      {/* Row 2 - Chamomile & Hibiscus Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group overflow-hidden">
          <div className="h-[500px] relative rounded-xl">
            <img
              src={teas[1].image}
              alt={teas[1].name}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-yellow-900/20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 p-12">
              <span className="text-6xl font-thin text-white/20">02</span>
              <h3 className="text-4xl font-thin mb-2 text-[#8dcb3f]">{teas[1].name}</h3>
              <p className="text-yellow-400 text-xl mb-4">{teas[1].title}</p>
              <p className="text-gray-300 line-clamp-3">{teas[1].description}</p>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <div className="h-[500px] relative rounded-xl">
            <img
              src={teas[2].image}
              alt={teas[2].name}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-pink-900/30 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 p-12">
              <span className="text-6xl font-thin text-white/20">03</span>
              <h3 className="text-4xl font-thin mb-2 text-[#8dcb3f]">{teas[2].name}</h3>
              <p className="text-pink-400 text-xl mb-4">{teas[2].title}</p>
              <p className="text-gray-300 line-clamp-3">{teas[2].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 - Blue Tea Feature */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
         
          <h3 className="text-5xl font-thin text-[#8dcb3f]">{teas[3].name}</h3>
          <p className="text-2xl text-blue-400 font-light">{teas[3].title}</p>
          <p className="text-gray-900 leading-relaxed text-lg">{teas[3].description}</p>

        </div>
        <div className="lg:col-span-8 relative group order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={teas[3].image}
              alt={teas[3].name}
              className="w-full h-[500px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          </div>
          <div className="absolute top-8 right-8">
            <span className="text-9xl font-thin text-white/10">04</span>
          </div>
        </div>
      </div>

      {/* Row 4 - Lavender Horizontal */}
      <div className="relative overflow-hidden rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[400px]">
          <div className="relative h-[400px] lg:h-full">
            <img
              src={teas[4].image}
              alt={teas[4].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay"></div>
          </div>
          <div className="p-12 lg:p-20 bg-gradient-to-r from-gray-900 to-black">
            <span className="text-8xl font-thin text-white/10">05</span>
            <h3 className="text-5xl font-thin mb-4">{teas[4].name}</h3>
            <p className="text-2xl text-purple-400 font-light mb-6">{teas[4].title}</p>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">{teas[4].description}</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                LEARN MORE
              </button>
              <button className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-all">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

      <div className="rounded-xl overflow-hidden shadow-lg bg-black w-full max-w-7xl mx-auto mb-10">
        <video
          className="w-full h-full object-cover cursor-pointer"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Favorite Coffee Section */}
      <section
        ref={coffeeRef}
        className="py-16 sm:py-24 md:py-32 bg-cover bg-center text-white relative"
        id="menu"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 "></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={coffeeControls}
            variants={fadeInUp}
          >
            <div className="text-center">
              {/* First Line - Elegant Script Style */}
              <motion.h2
                className="font-sacramento text-[#8dcb3f] text-[clamp(40px,10vw,90px)] leading-none"
                initial={{ opacity: 0, y: 100 }} // start far below
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} // smooth ease-out
              >
                Favorite
              </motion.h2>

              {/* Second Line - Bold Title */}
              <motion.h2
                className="uppercase font-bold inline-block border-y border-white/50 m-0"
                style={{
                  fontSize: "40px",
                  lineHeight: "40px",
                  letterSpacing: "10px",
                  fontFamily: "serif",
                  color: "#fff",
                }}
              >
                Coffee
              </motion.h2>
            </div>

            <motion.div
              className="h-1 w-20 md:w-24 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#8dcb3f] to-[#8dcb3f]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "6rem", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />

            <motion.p
              className="text-gray-300 max-w-xl mx-auto mt-5 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Expertly crafted beverages using sustainably sourced beans from
              around the world
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coffee Menu Section */}
      <section
        className="py-20 bg-cover bg-fixed bg-center relative"
        style={{
          backgroundImage:
            "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-3.jpg')",
        }}
        data-jarallax
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-black/40 backdrop-blur-sm border border-white/10">
              {/* Header */}
              <div className="flex mb-6 font-bold text-[#8dcb3f] border-b border-white/20 pb-4">
                <div className="flex-1 text-left uppercase tracking-wider">
                  espresso
                </div>
                
              </div>

              {/* Menu items */}
              <div className="space-y-1">
                {[
                  {
                    name: "Espresso",
                    description: "Espresso, where passion meets perfection.",
                    medium: "1.75",
                    large: "2.20",
                  },
                  {
                    name: "Mocchiato",
                    description:
                      "The perfect harmony of espresso and sweetness",
                    medium: "1.94",
                    large: "2.25",
                  },
                  {
                    name: "Classic Cappucino",
                    description: "A timeless delight brewed just for you.",
                    medium: "2.90",
                    large: "3.90",
                  },
                  {
                    name: "Cappucino",
                    description: "Where rich espresso meets frothy perfection.",
                    medium: "3.15",
                    large: "4.15",
                  },
                  {
                    name: "Mocha latte",
                    description: "The perfect blend of chocolate and espresso.",
                    medium: "3.45",
                    large: "4.35",
                  },
                  {
                    name: "Caramel late",
                    description:
                      "Where smooth espresso meets golden caramel bliss.",
                    medium: "3.45",
                    large: "4.35",
                  },
                  {
                    name: "Cafe americano",
                    description: "The essence of pure coffee bliss.",
                    medium: "2.25",
                    large: "3.50",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex py-4 border-b border-white/10 items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ backgroundColor: "rgba(209, 107, 2, 0.15)" }}
                  >
                    <div className="flex-1 pr-3">
                      <div className="font-medium text-white">{item.name}</div>
                      <span className="block text-xs text-gray-400 mt-1">
                        {item.description}
                      </span>
                    </div>
                   
                  </motion.div>
                ))}
              </div>

              <div className="h-8 mt-4"></div>

              <motion.a
                href="#menu"
                className="px-6 sm:px-8 py-3 border-2 border-[#8dcb3f] text-[#8dcb3f] hover:bg-[#8dcb3f] hover:text-white transition-all duration-300 inline-flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Menu
                <svg
                  className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Favorite Foods Section */}
      <section
        ref={foodRef}
        className="py-28 bg-cover bg-center text-white relative"
        style={{
          backgroundImage:
            "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-4.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={foodControls}
            variants={fadeInUp}
          >
            <h2 className="text-[#8dcb3f]  mb-4 font-bold font-sacramento text-[clamp(40px,6vw,80px)]">
              StartUp Kit
            </h2>
            <motion.h2
              className="uppercase font-bold inline-block border-y border-white/50 m-0"
              style={{
                fontSize: "40px",
                lineHeight: "40px",
                letterSpacing: "10px",
                fontFamily: "serif",
                color: "#ffffff",
              }}
            >
              Coffee
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* Foods Menu Section */}
      <section
        className="py-16 sm:py-20 md:py-28 bg-cover bg-fixed bg-center relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/20/6c/16/206c16f3c0026aa8ddd68e980ab6401e.jpg')",
        }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="w-full max-w-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Title visible only on mobile/tablet */}
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center lg:hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Complete <span className="text-[#8dcb3f]">Startup</span> Package
              </motion.h2>

              {/* Electronics Section */}
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-2xl border border-white/10 mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex mb-6 font-bold text-[#8dcb3f] border-b border-white/20 pb-4">
                  <div className="flex-1 text-left uppercase tracking-wider">
                    Electronic Equipment
                  </div>
                </div>

                {[
                  { name: "Deep Freezer", description: "320 Ltr commercial capacity", qty: "1", highlight: true },
                  { name: "Refrigerator", description: "190 Ltr for daily storage", qty: "1" },
                  { name: "Induction Stove", description: "Energy efficient cooking", qty: "1" },
                  { name: "Mixi (Butterfly)", description: "Professional blending", qty: "1", highlight: true },
                  { name: "Sandwich Griller", description: "Quick snack preparation", qty: "1" },
                  { name: "Deep Fryer", description: "Commercial grade", qty: "1" },
                  { name: "LED TV 32 inch", description: "Customer entertainment", qty: "1" },
                  { name: "Milk Boiler Machine", description: "Automatic milk preparation", qty: "1", highlight: true },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex py-4 border-b border-white/10 items-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      backgroundColor: "rgba(141, 203, 63, 0.1)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center">
                        <h4 className="font-medium text-white">{item.name}</h4>
                        {item.highlight && (
                          <span className="ml-2 bg-[#8dcb3f] text-[#18191b] text-xs px-1.5 py-0.5 rounded font-semibold">
                            Essential
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Kitchen Equipment Section */}
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-2xl border border-white/10 mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex mb-6 font-bold text-[#8dcb3f] border-b border-white/20 pb-4">
                  <div className="flex-1 text-left uppercase tracking-wider">
                    Kitchen & Service Items
                  </div>
                </div>

                {[
                  { name: "Gas Stove", description: "Commercial burner", qty: "1", highlight: true },
                  { name: "Milton Tea Flask", description: "Premium insulated", qty: "1" },
                  { name: "Stainless Vessels Set", description: "Multiple sizes included", qty: "5" },
                  { name: "Measurement Mugs", description: "Precise measurements", qty: "5" },
                  { name: "Ginger Crushing Stone", description: "Traditional preparation", qty: "1" },
                  { name: "Tea Nets & Strainers", description: "Professional grade", qty: "5", highlight: true },
                  { name: "Brass & Steel Cups", description: "Mixed serving set", qty: "27" },
                  { name: "Glass Cups", description: "Premium serving", qty: "6" },
                  { name: "Chopping Board & Knives", description: "Food prep essentials", qty: "Set", highlight: true },
                  { name: "Storage Solutions", description: "Containers, shelves, holders", qty: "24" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex py-4 border-b border-white/10 items-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      backgroundColor: "rgba(141, 203, 63, 0.1)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center">
                        <h4 className="font-medium text-white">{item.name}</h4>
                        {item.highlight && (
                          <span className="ml-2 bg-[#8dcb3f] text-[#18191b] text-xs px-1.5 py-0.5 rounded font-semibold">
                            Essential
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tea & Coffee Materials Section */}
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-2xl border border-white/10 mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex mb-6 font-bold text-[#8dcb3f] border-b border-white/20 pb-4">
                  <div className="flex-1 text-left uppercase tracking-wider">
                    Premium Tea & Coffee Collection
                  </div>
                </div>

                {[
                  { name: "Tea Powder Premium", description: "High quality blend", qty: "5 kg", highlight: true },
                  { name: "Specialty Teas", description: "Blue, Chamomile, Rose, Rooibos", qty: "500g each" },
                  { name: "Classic Teas", description: "Black, Green, White varieties", qty: "600g total", highlight: true },
                  { name: "Herbal Collection", description: "Lavender, Lemongrass, Hibiscus", qty: "1.5 kg" },
                  { name: "Coffee Powder", description: "Premium arabica blend", qty: "1 kg", highlight: true },
                  { name: "Badam Powder", description: "Almond powder mix", qty: "1 kg" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex py-4 border-b border-white/10 items-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      backgroundColor: "rgba(141, 203, 63, 0.1)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center">
                        <h4 className="font-medium text-white">{item.name}</h4>
                        {item.highlight && (
                          <span className="ml-2 bg-[#8dcb3f] text-[#18191b] text-xs px-1.5 py-0.5 rounded font-semibold">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Syrups & Flavors Section */}
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-2xl border border-white/10 mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex mb-6 font-bold text-[#8dcb3f] border-b border-white/20 pb-4">
                  <div className="flex-1 text-left uppercase tracking-wider">
                    Syrups & Beverages
                  </div>
                </div>

                {[
                  { name: "Chocolate Syrup", description: "Premium double quantity", qty: "2 Ltr", highlight: true },
                  { name: "Fruit Syrups", description: "Mango, Orange, Strawberry, Pineapple", qty: "1L each" },
                  { name: "Special Flavors", description: "Blue Mint, Black Current, Green Apple", qty: "1L each", highlight: true },
                  { name: "Mix Fruit Blend", description: "Special house blend", qty: "1 Ltr" },
                  { name: "Health Drinks", description: "Boost, Horlicks included", qty: "2 units" },
                  { name: "Natural Sweeteners", description: "Honey, Jaggery powder, Sugar", qty: "3 kg total", highlight: true },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex py-4 border-b border-white/10 items-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      backgroundColor: "rgba(141, 203, 63, 0.1)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center">
                        <h4 className="font-medium text-white">{item.name}</h4>
                        {item.highlight && (
                          <span className="ml-2 bg-[#8dcb3f] text-[#18191b] text-xs px-1.5 py-0.5 rounded font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Packaging & Branding Section */}
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-2xl border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex mb-6 font-bold text-[#8dcb3f] border-b border-white/20 pb-4">
                  <div className="flex-1 text-left uppercase tracking-wider">
                    Packaging & Branding Setup
                  </div>
                </div>

                {[
                  { name: "Tea Cups Package", description: "90ml disposable cups", qty: "3,000 pcs", highlight: true },
                  { name: "Glasses & Lids", description: "300ml glasses with covers", qty: "300 sets" },
                  { name: "Branding Boards", description: "Main, menu, lollipop boards", qty: "Complete", highlight: true },
                  { name: "Photo Frames", description: "Interior decoration set", qty: "19 pcs" },
                  { name: "Packaging Boxes", description: "Burger, sandwich, maggie boxes", qty: "300 total" },
                  { name: "Furniture Setup", description: "Tables, chairs, counter", qty: "Complete", highlight: true },
                  { name: "Chocolates Stock", description: "KitKat, Dairy Milk, Snickers, Oreo", qty: "100 pcs" },
                  { name: "Service Items", description: "Straws, tissues, spoons, napkins", qty: "Bulk" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex py-4 border-b border-white/10 items-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      backgroundColor: "rgba(141, 203, 63, 0.1)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center">
                        <h4 className="font-medium text-white">{item.name}</h4>
                        {item.highlight && (
                          <span className="ml-2 bg-[#8dcb3f] text-[#18191b] text-xs px-1.5 py-0.5 rounded font-semibold">
                            Included
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-gray-400 text-center sm:text-left">
                    * 250+ items turnkey solution
                  </div>

                  <motion.a
                    href="#contact-us"
                    className="px-6 py-3 bg-[#8dcb3f] text-[#18191b] hover:bg-[#9fdb4f] transition-all duration-300 inline-flex items-center gap-2 group rounded-md font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Complete Package
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Package Summary */}
              <motion.div
                className="mt-6 bg-[#8dcb3f]/20 backdrop-blur-sm p-4 rounded-lg border border-[#8dcb3f]/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center text-white">
                  <p className="text-sm mb-2">Complete Franchise Package Includes:</p>
                  <div className="flex flex-wrap justify-center gap-3 text-xs">
                    <span className="bg-white/10 px-3 py-1 rounded">✓ 250+ Items</span>
                    <span className="bg-white/10 px-3 py-1 rounded">✓ Full Branding</span>
                    <span className="bg-white/10 px-3 py-1 rounded">✓ Interior Setup</span>
                    <span className="bg-white/10 px-3 py-1 rounded">✓ Training & Support</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 border-t-2 border-l-2 border-[#8dcb3f] transform -rotate-45"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        ref={galleryRef}
        className="py-16 sm:py-24  relative overflow-hidden"
        id="gallery"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#8dcb3f]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#8dcb3f]/5 rounded-full blur-3xl"></div>

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={galleryControls}
            variants={fadeInUp}
          >
            <motion.span
              className="uppercase font-bold inline-block border-y border-white/50 m-0"
              style={{
                fontSize: "40px",
                lineHeight: "40px",
                letterSpacing: "10px",
                fontFamily: "serif",
                color: "#8dcb3f",
              }}
            >
              Our Story
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8dcb3f]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.span>

            <motion.h3
              className="text-4xl sm:text-5xl md:text-6xl mt-6 font-bold text-[#8dcb3f] mb-4 font-sacramento text-[clamp(40px,6vw,80px)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Culinary Gallery
            </motion.h3>

            <motion.p
              className="max-w-2xl mx-auto text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Feast your eyes on our exquisite dishes, crafted with passion and
              artistry. Each creation tells a story of flavor, tradition, and
              innovation.
            </motion.p>

            {/* Category filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {["All", "Coffee", "Pastries", "Main Course", "Desserts"].map(
                (category, index) => (
                  <motion.button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${index === 0
                      ? "bg-[#8dcb3f] text-white"
                      : "bg-white/80 text-gray-700 hover:bg-[#8dcb3f]/10"
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Masonry grid layout */}
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
              initial="hidden"
              animate={galleryControls}
              variants={staggerChildren}
            >
              {[
                {
                  id: 1,
                  img: "https://i.pinimg.com/1200x/ae/69/2f/ae692f00a207ded5b8c9655681c6cf34.jpg",
                  title: "Signature Coffee",
                  height: "h-[250px] sm:h-[280px]",
                },
                {
                  id: 2,
                  img: "https://i.pinimg.com/736x/73/ef/e9/73efe902c531d2326c4f14b8c69b8fe0.jpg",
                  title: "Artisan Pastries",
                  height: "h-[350px] sm:h-[400px]",
                },
                {
                  id: 3,
                  img: "https://i.pinimg.com/736x/a6/21/40/a621408f03f2b1fb254629d81a7a6218.jpg",
                  title: "Fresh Ingredients",
                  height: "h-[300px]",
                },
                {
                  id: 4,
                  img: "https://i.pinimg.com/736x/2c/77/b3/2c77b32e45bf878baed1d1938ebb133a.jpg",
                  title: "Gourmet Desserts",
                  height: "h-[280px] sm:h-[320px]",
                },
                {
                  id: 5,
                  img: "https://i.pinimg.com/736x/46/8d/f7/468df78b2c349aac7e10e83853fdcdfd.jpg",
                  title: "Premium Blends",
                  height: "h-[250px]",
                },
                {
                  id: 6,
                  img: "https://i.pinimg.com/736x/e3/25/31/e325316debe22f5234e1c50d42e3a52f.jpg",
                  title: "Delicious Treats",
                  height: "h-[320px] sm:h-[360px]",
                },
                {
                  id: 7,
                  img: "https://i.pinimg.com/1200x/02/3d/44/023d4477676a81cc33432286a6f26962.jpg",
                  title: "Morning Favorites",
                  height: "h-[260px]",
                },
                {
                  id: 8,
                  img: "https://i.pinimg.com/736x/c9/f3/e5/c9f3e5c62c913c96a4556cafa66268d6.jpg",
                  title: "Perfect Brew",
                  height: "h-[290px] sm:h-[330px]",
                },
                {
                  id: 9,
                  img: "https://i.pinimg.com/1200x/02/3d/44/023d4477676a81cc33432286a6f26962.jpg",
                  title: "Bakery Selection",
                  height: "h-[270px]",
                },
                {
                  id: 10,
                  img: "https://i.pinimg.com/736x/f0/3e/7b/f03e7b7f7d263f51d9c075b9e0d92437.jpg",
                  title: "Coffee Art",
                  height: "h-[310px]",
                },
                {
                  id: 11,
                  img: "https://i.pinimg.com/1200x/4c/05/11/4c051173e1006c99c86265b2b3536a7b.jpg",
                  title: "Coffee Art",
                  height: "h-[310px]",
                },
                {
                  id: 12,
                  img: "https://i.pinimg.com/1200x/3f/cc/b1/3fccb1412bb85b910b75a3d1af42a078.jpg",
                  title: "Coffee Art",
                  height: "h-[310px]",
                },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  className={`${item.height} mb-4 w-full break-inside-avoid rounded-xl overflow-hidden relative group`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: "easeOut" },
                    },
                  }}
                >
                  {/* Image with parallax effect on hover */}
                  <div className="absolute inset-0">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{
                        scale: 1.08,
                        transition: { duration: 0.8 },
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Overlay with gradual transition */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 sm:p-5">
                    <motion.h4 className="text-white font-bold text-lg sm:text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {item.title}
                    </motion.h4>

                    <motion.div className="mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-all duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-all duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#gallery"
              className="px-8 py-3 bg-gradient-to-r from-[#8dcb3f] to-[#8dcb3f]/90 text-white rounded-full hover:from-[#8dcb3f] hover:to-[#8dcb3f]/90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Full Gallery</span>
              <svg
                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>

            <p className="text-gray-500 text-sm mt-4">
              Discover more of our delicious creations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customer Review Section */}
      <section
        ref={reviewRef}
        className="py-20 md:py-28 relative overflow-hidden"
      >
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8dcb3f] to-[#18191b] z-0"></div>

        {/* Decorative patterns and elements */}
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>

        {/* Large quotation mark decorative element */}
        <div className="absolute -left-20 top-10 text-[200px] leading-none font-serif text-white opacity-10 z-0">
          "
        </div>
        <div className="absolute -right-20 bottom-10 text-[200px] leading-none font-serif text-white opacity-10 z-0 rotate-180">
          "
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
            initial={{ opacity: 0 }}
            animate={reviewControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            {/* Left side - Image collage */}
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              animate={reviewControls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              <div className="relative h-[400px] md:h-[500px]">
                {/* Main image */}
                <motion.div
                  className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={reviewControls}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.3 },
                    },
                  }}
                >
                  <img
                    src="https://madebydesignesia.com/themes/baresto/02_images/background/bg-side-1.jpg"
                    alt="Coffee shop ambiance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </motion.div>

                {/* Secondary image */}
                <motion.div
                  className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={reviewControls}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.5 },
                    },
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1453614512568-c4024d13c247"
                    alt="Coffee preparation"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-[#8dcb3f] text-white px-4 py-3 rounded-xl shadow-lg z-10 font-bold"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={reviewControls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      rotate: -5,
                      transition: { duration: 0.6, delay: 0.7 },
                    },
                  }}
                >
                  <div className="text-sm">Customer Satisfaction</div>
                  <div className="text-2xl">98%</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Reviews */}
            <motion.div
              className="w-full lg:w-3/5"
              initial="hidden"
              animate={reviewControls}
              variants={fadeInUp}
            >
              <motion.div
                className="text-center lg:text-left mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={reviewControls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <h2 className="text-[#8dcb3f] text-xl md:text-2xl font-bold relative inline-block mb-2">
                  What People Say
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8dcb3f]/50"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Customer Reviews
                </h3>
              </motion.div>

              <Swiper
                autoplay={{ delay: 5000 }}
                loop={true}
                pagination={{
                  clickable: true,
                  bulletActiveClass: "bg-white",
                  bulletClass:
                    "inline-block w-3 h-3 rounded-full bg-white/30 mx-1 transition-all duration-300",
                }}
                spaceBetween={30}
                className="review-slider"
              >
                {[
                  {
                    text: "As a busy professional, I rely on my morning coffee to kickstart my day. The rich, smooth taste and heavenly aroma never fail to perk me up and get me ready to tackle whatever the day throws at me. It's like a little slice of heaven in a cup!",
                    name: "Jenna Smith",
                    role: "Marketing Director",
                    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                    rating: 5,
                  },
                  {
                    text: "This café has become my second home. The ambiance is perfect for both work and relaxation, and the staff remembers my order every time. Their signature latte is worth every penny - I've never tasted anything quite like it elsewhere.",
                    name: "Michael Chen",
                    role: "Software Engineer",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                    rating: 5,
                  },
                  {
                    text: "I've been to cafés all over the world, and this one stands out for its attention to detail. The beans are ethically sourced, the pastries are made fresh daily, and the atmosphere feels both elegant and welcoming. A true gem!",
                    name: "Sarah Johnson",
                    role: "Travel Blogger",
                    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                    rating: 4,
                  },
                ].map((review, index) => (
                  <SwiperSlide key={index} className="pb-12">
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      {/* Rating stars */}
                      <div className="flex mb-5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-400"
                              }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote icon */}
                      <svg
                        className="w-10 h-10 text-[#8dcb3f]/30 mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      {/* Review text */}
                      <motion.blockquote
                        className="text-lg text-white/90 font-medium leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {review.text}
                      </motion.blockquote>

                      {/* Reviewer info */}
                      <div className="mt-8 flex items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#8dcb3f]/30">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-[#8dcb3f] text-lg">
                            {review.name}
                          </div>
                          <div className="text-white/80 text-sm">
                            {review.role}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Call to action */}
              <motion.div
                className="mt-10 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#8dcb3f] font-medium rounded-full hover:bg-[#8dcb3f] hover:text-white transition-all duration-300 shadow-lg group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Share Your Experience</span>
                  <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section
        ref={hoursRef}
        className="py-28 bg-cover bg-center text-white relative"
        style={{
          backgroundImage:
            "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-6.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={hoursControls}
            variants={fadeInUp}
          >
            <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold font-sacramento text-[clamp(60px,10vw,100px)]">
              We are
            </h2>
            <h3
              className="uppercase font-bold inline-block border-y border-white/50 m-0"
              style={{
                fontSize: "40px",
                lineHeight: "40px",
                letterSpacing: "10px",
                fontFamily: "serif",
                color: "#fff",
              }}
            >
              Open
            </h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              animate={hoursControls}
              variants={staggerChildren}
            >
              {[
                {
                  days: "Mon - Thu",
                  hours: "10:30AM - 9:30PM",
                },
                {
                  days: "Friday",
                  hours: "10:00AM - 10:30PM",
                },
                {
                  days: "Sat - Sun",
                  hours: "09:30AM - 11:00PM",
                },
              ].map((schedule, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-black bg-opacity-30 backdrop-blur-sm p-8 rounded-lg"
                  variants={fadeInScale}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <span className="text-[#8dcb3f] font-bold text-xl block mb-3">
                    {schedule.days}
                  </span>
                  <div className="text-2xl">{schedule.hours}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;
