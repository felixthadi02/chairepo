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
// import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/11.png';
import image6 from '../assets/12.png';
import image7 from '../assets/13.png';
import image25 from '../assets/image 25.png';
import ph2 from '../assets/ph2.png';
import chaipic from '../assets/chaipic.png'
import mogito from '../assets/mogito.png'
import burger from '../assets/burger.png'
import shacks from '../assets/shacks.png'
import Rooibos from '../assets/Rooibos.png'

import FloatingWhatsapp from "./floatingWhatsup";
import { TeaCard } from "../components/TeaCard";
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
      description:
        'Rooibos Tea is a gentle herbal tea that contains no caffeine and is packed with antioxidants. It supports heart health, aids digestion, and helps with weight management, making it a perfect everyday wellness drink.',
      image: Rooibos,
      color: 'from-red-400 to-orange-400',
      displayOrder: 1,
    },
    {
      id: 2,
      name: 'Chamomile Tea',
      title: 'Relax. Restore. Rebalance.',
      description:
        'Chamomile Tea is well known for its calming properties and is ideal for relaxation and stress relief. It helps improve sleep quality, supports blood sugar balance, and eases menstrual discomfort naturally.',
      image: image22,
      color: 'from-yellow-300 to-amber-400',
      displayOrder: 3,
    },
    {
      id: 3,
      name: 'Hibiscus Tea',
      title: 'Bold Flavor, Powerful Benefits',
      description:
        'Hibiscus Tea is rich in antioxidants, vitamin C, and natural compounds that support liver health and metabolism. Its refreshing taste helps fight bacteria while offering a naturally energizing and healthy beverage.',
      // image: image23,
      image: image21,
      color: 'from-pink-400 to-rose-500',
      displayOrder: 2,
    },
    {
      id: 4,
      name: 'Blue Tea',
      title: 'Calm in Every Sip',
      description:
        'Blue Tea is naturally rich in antioxidants and is known for supporting healthy skin, improving eyesight, and promoting hair growth. Being caffeine-free, it offers a calming experience while helping the body stay refreshed and balanced.',
      image: image24,
      color: 'from-blue-400 to-indigo-500',
      displayOrder: 4,
    },
    {
      id: 5,
      name: 'Lavender Tea',
      title: 'Sip into Serenity',
      description:
        'Lavender Tea is brewed from aromatic purple buds and is loved for its soothing effect on the mind and body. It helps reduce stress, improve sleep quality, enhance mood, and support healthy skin.',
      image: image25,
      color: 'from-purple-400 to-violet-500',
      displayOrder: 5,
    },
    {
      id: 6,
      name: 'Herbal Burger Delight',
      title: 'Wholesome & Flavorful',
      description:
        'A hearty plant-based burger infused with herbs and spices. Rich in fiber and nutrients, it supports digestion and provides a satisfying, guilt-free meal option.',
      image: burger,
      color: 'from-red-400 to-orange-400',
      displayOrder: 6,
    },
    {
      id: 7,
      name: 'Classic Herbal Shake',
      title: 'Creamy Wellness Boost',
      description:
        'A smooth and refreshing herbal shake made with natural ingredients. Packed with antioxidants and essential nutrients, it helps energize the body and supports overall wellness.',
      image: shacks,
      color: 'from-red-400 to-orange-400',
      displayOrder: 7,
    },
    {
      id: 8,
      name: 'Mint Mojito Infusion',
      title: 'Fresh. Cool. Revitalizing.',
      description:
        'A refreshing mint-based mojito infusion that cools the body and aids digestion. Perfect for hydration and detox, offering a crisp taste with natural goodness.',
      image: mogito,
      color: 'from-red-400 to-orange-400',
      displayOrder: 8,
    },

    {
      id: 8,
      name: 'Rooibos Tea',
      title: 'Pure Wellness, Naturally',
      description:
        'Rooibos Tea is a gentle herbal tea that contains no caffeine and is packed with antioxidants. It supports heart health, aids digestion, and helps with weight management, making it a perfect everyday wellness drink.',
      image: burger,
      color: 'from-red-400 to-orange-400',
      displayOrder: 8,
    },
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

  const displayTeas = [...teas].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  const featuredTea = displayTeas.at(-1);
  const gridTeas = displayTeas.slice(0, -1);

  return (
    <div className="w-full hello overflow-x-hidden bg-gradient-to-br from-[#FDF8F3] via-[#F8F1E9] to-[#F0E6DA]  ">
      {/* Hero Section */}
      <FloatingWhatsapp />
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
      <section id="home" className="relative w-full overflow-hidden">
        <div className="relative w-full min-h-[100svh] md:min-h-screen">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            effect="fade"
            speed={1000}
            className="h-full"
          >
            {[
              {
                // image: image24,
                image: chaipic,
                line1: "Pure Aroma Delight",
                line2: "Crafted for True Tea Lovers",
                buttonText: "Start Your Franchise Journey",
                description:
                  "Experience the art of tea crafting at Tea5 Cafe. From classic Indian chai to exotic herbal blends, every cup is brewed with care, quality, and authentic flavor that keeps customers coming back for more.",
              },
              {
                // image: image2,
                image: image24,
                line1: "Your Tea Café. Your Brand.",
                line2: "Start a Business That Feels Like Home",
                buttonText: "Explore Franchise Options",
                description:
                  "Tea5 Cafe gives you the opportunity to run a premium tea shop under your own name, backed by a trusted brand, proven systems, and complete business support for your growth.",
              },
              {
                image: image3,
                line1: "Simple Setup. Smart Returns.",
                line2: "Designed for Easy Operations",
                buttonText: "Join Our Family",
                description:
                  "Our franchise model is built for simplicity and scalability. With easy operations, curated menus, and continuous brand support, Tea5 Cafe helps you focus on serving great tea while we support your success.",
              },
              {
                image: image4,
                // image: image24,
                line1: "Beyond a Café. A Growing Community.",
                line2: "Build Connections Over Every Cup",
                buttonText: "Become A Partner",
                description:
                  "Tea5 Cafe is not just about tea, it’s about creating a warm space where people connect, relax, and return. Be part of a fast-growing café community built on trust, taste, and togetherness.",
              },

            ].map((slide, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div className="relative w-full min-h-[100svh] md:min-h-screen">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundPosition: 'center center',
                      }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/45" />
                    </div>

                    {/* Content Container */}
                    {(slide.line1 || slide.description) && (
                      <div className="relative z-10 flex min-h-[100svh] md:min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
                        <div className="w-full max-w-4xl text-center">
                          {/* Line 1 - Main Heading */}
                          {slide.line1 && (
                            <motion.h1
                              key={`title-${index}-${isActive}`}
                              initial={{ opacity: 0, y: 80 }}
                              animate={{
                                opacity: isActive ? 1 : 0,
                                y: isActive ? 0 : 80
                              }}
                              transition={{
                                duration: 0.8,
                                delay: 0.15,
                                type: "spring",
                                stiffness: 90,
                                damping: 18,
                              }}
                              className="font-serif text-[#FFD700] leading-tight tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.1em] lg:tracking-[0.15em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2 font-bold"
                            >
                              {slide.line1.split('.').map((part, i, arr) => (
                                <span key={i}>
                                  {part}
                                  {i < arr.length - 1 && '.'}
                                  {i < arr.length - 1 && <><br className="hidden sm:block" /> </>}
                                </span>
                              ))}
                            </motion.h1>
                          )}

                          {/* Line 2 - Subtitle */}
                          {slide.line2 && (
                            <motion.p
                              key={`subtitle-${index}-${isActive}`}
                              initial={{ opacity: 0, y: 80 }}
                              animate={{
                                opacity: isActive ? 1 : 0,
                                y: isActive ? 0 : 80
                              }}
                              transition={{
                                duration: 0.8,
                                delay: 0.35,
                                type: "spring",
                                stiffness: 90,
                                damping: 18,
                              }}
                              className="mx-auto mt-3 sm:mt-4 inline-block border-y border-white/40 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 uppercase font-bold text-white font-serif text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.15em] leading-tight sm:leading-snug"
                            >
                              {slide.line2}
                            </motion.p>
                          )}

                          {/* Description */}
                          {slide.description && (
                            <motion.p
                              key={`desc-${index}-${isActive}`}
                              initial={{ opacity: 0, y: 80 }}
                              animate={{
                                opacity: isActive ? 1 : 0,
                                y: isActive ? 0 : 80
                              }}
                              transition={{
                                duration: 0.8,
                                delay: 0.55,
                                type: "spring",
                                stiffness: 90,
                                damping: 18,
                              }}
                              className="mx-auto mt-4 sm:mt-5 max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-white/90 leading-relaxed sm:leading-loose text-sm sm:text-base md:text-lg px-2 sm:px-4"
                            >
                              {slide.description}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {/* <div className="swiper-button-next !w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12 !bg-white/20 backdrop-blur-sm hover:!bg-white/30 !rounded-full transition-all duration-300 after:!text-xs sm:after:!text-sm md:after:!text-base !text-white !right-2 sm:!right-4 md:!right-6" /> */}

          {/* <div className="swiper-button-prev !w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12 !bg-white/20 backdrop-blur-sm hover:!bg-white/30 !rounded-full transition-all duration-300 after:!text-xs sm:after:!text-sm md:after:!text-base !text-white !left-2 sm:!left-4 md:!left-6" /> */}
        </div>

        <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

        .font-sacramento {
          font-family: "Sacramento", cursive;
          font-weight: 400;
          font-style: normal;
        }

        .swiper-slide {
          overflow: hidden;
        }

        /* Navigation buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        /* Prevent layout shift on mobile */
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            margin-top: 0 !important;
          }
        }
      `}</style>
      </section>



      <section className="py-16 bg-[#faf3ec] text-white">
        <div className="max-w-screen-2xl mx-auto px-4">

          {/* Header */}
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
            <h2 className="text-7xl md:text-8xl font-thin tracking-tight leading-none text-[#8dcb3f]">
              RARE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 font-normal">
                BLENDS
              </span>
            </h2>
            <p className="max-w-md text-gray-900 text-lg leading-relaxed">
              Hand-selected from the world's most exclusive tea gardens.
            </p>
          </div>

          <div className="space-y-32">

            {/* Grid teas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gridTeas.map((tea, index) => (
                <TeaCard key={tea.id} tea={tea} index={index} />
              ))}
            </div>

            {/* Featured tea (last item automatically) */}
            {/* <div className="relative overflow-hidden rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                <img
                  src={featuredTea.image}
                  alt={featuredTea.name}
                  className="w-full h-full object-cover"
                />
                <div className="p-12 lg:p-20 bg-gradient-to-r from-gray-900 to-black">
                  <span className="text-8xl font-thin text-white/10">
                    {String(featuredTea.displayOrder).padStart(2, "0")}
                  </span>
                  <h3 className="text-5xl font-thin mb-4">
                    {featuredTea.name}
                  </h3>
                  <p className="text-2xl text-purple-400 mb-6">
                    {featuredTea.title}
                  </p>
                  <p className="text-gray-300 text-lg">
                    {featuredTea.description}
                  </p>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>


      {/* <div className="rounded-xl overflow-hidden shadow-lg bg-black w-full max-w-7xl mx-auto mb-10">
        <video
          className="w-full h-full object-cover cursor-pointer"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div> */}

      {/* Favorite Coffee Section */}
      {/* <section
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
     
        <div className="absolute inset-0 "></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={coffeeControls}
            variants={fadeInUp}
          >
            <div className="text-center">
             
              <motion.h2
                className="font-sacramento text-[#8dcb3f] text-[clamp(40px,10vw,90px)] leading-none"
                initial={{ opacity: 0, y: 100 }} // start far below
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} // smooth ease-out
              >
                Favorite
              </motion.h2>

              
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
      </section> */}

      {/* Coffee Menu Section */}
      {/* <section
        className="py-20 bg-cover bg-fixed bg-center relative"
        style={{
          backgroundImage:
            "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-3.jpg')",
        }}
        data-jarallax
      >
       
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
          
              <div className="flex mb-6 font-bold text-[#8dcb3f] border-b border-white/20 pb-4">
                <div className="flex-1 text-left uppercase tracking-wider">
                  espresso
                </div>

              </div>

        
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
      </section> */}

      {/* Favorite Foods Section */}
      {/* <section
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
              Start a Franchise
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
      </section> */}
      {/* 
      <section
        className="py-16 sm:py-20 md:py-28 bg-cover bg-fixed bg-center relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/20/6c/16/206c16f3c0026aa8ddd68e980ab6401e.jpg')",
        }}
      >
    
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
              
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center lg:hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Complete <span className="text-[#8dcb3f]">Startup</span> Package
              </motion.h2>

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
      </section> */}



      {/* Customer Review Section */}
      {/* <section
        ref={reviewRef}
        className="py-20 md:py-28 relative overflow-hidden"
      >
  
        <div className="absolute inset-0 bg-gradient-to-br from-[#8dcb3f] to-[#18191b] z-0"></div>

   
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>


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

                  
                      <svg
                        className="w-10 h-10 text-[#8dcb3f]/30 mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                  
                      <motion.blockquote
                        className="text-lg text-white/90 font-medium leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {review.text}
                      </motion.blockquote>

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
      </section> */}

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
          <motion.p
            className="max-w-3xl mx-auto mb-14 text-center text-lg md:text-xl text-white/90 leading-relaxed"
            initial="hidden"
            animate={hoursControls}
            variants={fadeInUp}
          >
            We offer franchise opportunities under <span className="text-[#8dcb3f] font-semibold">your own brand name</span>,
            giving you complete ownership, identity, and freedom to grow your business independently —
            backed by our experience, systems, and support.
          </motion.p>

        </div>
      </section>


    </div>
  );
};

export default HomePage;
