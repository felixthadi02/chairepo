import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

// Import all images
import image1 from '../assets/image 1.jpg';
import image2 from '../assets/image 2.jpg';
import image3 from '../assets/image 3.jpg';
import image4 from '../assets/image 4.jpg';
import image5 from '../assets/image 5.jpg';
import image6 from '../assets/image 6.jpg';
import image7 from '../assets/image 7.jpg';
import image8 from '../assets/image 8.jpg';
import image9 from '../assets/image 9.jpg';
import image10 from '../assets/image 10.jpg';
import image11 from '../assets/image 11.jpg';
import image12 from '../assets/image 12.jpg';
import image13 from '../assets/image 13.jpg';
import image14 from '../assets/image 14.jpg';
import image15 from '../assets/image 15.jpg';
import image16 from '../assets/image 16.jpg';
import image17 from '../assets/image 17.jpg';
import image18 from '../assets/image 18.jpg';
import image19 from '../assets/image 19.jpg';
import image20 from '../assets/image 20.jpg';

// Use one of the imported images as the hero icon, or keep the unsplash one
const icon = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"

// Updated gallery items using ALL imported images
const galleryItems = [
    // Tea Moments (1-5)
    { id: 1, imgSrc: image1, title: "Tea Moment 1", category: "tea" },
    { id: 2, imgSrc: image2, title: "Tea Moment 2", category: "tea" },
    { id: 3, imgSrc: image3, title: "Tea Moment 3", category: "tea" },
    { id: 4, imgSrc: image4, title: "Tea Moment 4", category: "tea" },
    { id: 5, imgSrc: image5, title: "Tea Moment 5", category: "tea" },
    
    // Cafe Interior (6-10)
    { id: 6, imgSrc: image6, title: "Cafe Interior 1", category: "cafe" },
    { id: 7, imgSrc: image7, title: "Cafe Interior 2", category: "cafe" },
    { id: 8, imgSrc: image8, title: "Cafe Interior 3", category: "cafe" },
    { id: 9, imgSrc: image9, title: "Cafe Interior 4", category: "cafe" },
    { id: 10, imgSrc: image10, title: "Cafe Interior 5", category: "cafe" },
    
    // Kitchen Views (11-15)
    { id: 11, imgSrc: image11, title: "Kitchen View 1", category: "kitchen" },
    { id: 12, imgSrc: image12, title: "Kitchen View 2", category: "kitchen" },
    { id: 13, imgSrc: image13, title: "Kitchen View 3", category: "kitchen" },
    { id: 14, imgSrc: image14, title: "Kitchen View 4", category: "kitchen" },
    { id: 15, imgSrc: image15, title: "Kitchen View 5", category: "kitchen" },
    
    // Events/Special (16-20)
    { id: 16, imgSrc: image16, title: "Special Moment 1", category: "events" },
    { id: 17, imgSrc: image17, title: "Special Moment 2", category: "events" },
    { id: 18, imgSrc: image18, title: "Special Moment 3", category: "events" },
    { id: 19, imgSrc: image19, title: "Special Moment 4", category: "events" },
    { id: 20, imgSrc: image20, title: "Special Moment 5", category: "events" },
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

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');
    const { scrollY } = useScroll();

    // Transform scroll position to opacity (fades out as you scroll down)
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);

    // Categories for filtering - Updated with Events category
    const categories = [
        { id: 'all', label: 'All Photos' },
        { id: 'tea', label: 'Tea Moments' },
        { id: 'cafe', label: 'Cafe Interior' },
        { id: 'kitchen', label: 'Kitchen Views' },
        { id: 'events', label: 'Special Moments' },
    ];

    // Filter gallery items based on category - Updated filtering logic
    const filteredItems = activeCategory === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === activeCategory);

    // Get count for each category
    const getCategoryCount = (categoryId) => {
        if (categoryId === 'all') return galleryItems.length;
        return galleryItems.filter(item => item.category === categoryId).length;
    };

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(filteredItems[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(filteredItems[newIndex]);
    };

    const goToNext = () => {
        const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(filteredItems[newIndex]);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'Escape') closeLightbox();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentIndex]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <div className="min-h-screen bg-[#18191b]">
            <Helmet>
                <title>Tea Moments and Franchise Highlights | Tea 5 cafe</title>
                <meta 
                    name="description" 
                    content="Explore our gallery filled with tea moments, cafe interiors, and franchise stories from across India. See the taste and passion behind Tea 5 cafe."
                />
                <meta 
                    name="keywords" 
                    content="tea cafe franchise, coffee franchise Hyderabad, low investment franchise, Tea 5 cafe, franchise opportunities India, tea franchise in India" 
                />
                <link rel="canonical" href="https://www.tea5cafe.com/gallery" />
            </Helmet>

            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

                .font-sacramento {
                    font-family: "Sacramento", cursive;
                }
            `}</style>

            {/* Hero Section */}
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
                            <h2 className="text-6xl text-[#8dcb3f] font-sacramento md:text-7xl lg:text-8xl font-bold mb-4">
                                Discover
                            </h2>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={0.2}>
                            <h2
                                className="uppercase font-bold inline-block border-y border-white/50 border-opacity-50 m-0"
                                style={{
                                    fontSize: '40px',
                                    lineHeight: '40px',
                                    letterSpacing: '10px',
                                    fontFamily: 'serif',
                                    color: '#fff'
                                }}
                            >
                                Gallery
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
                                    <li className="text-[#8dcb3f]">Gallery</li>
                                </ol>
                            </nav>
                        </FadeInWhenVisible>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 px-4 bg-[#1f2023]">
                <div className="container mx-auto">
                    <FadeInWhenVisible>
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                        activeCategory === category.id
                                            ? 'bg-[#8dcb3f] text-white shadow-lg shadow-[#8dcb3f]/30'
                                            : 'bg-[#2a2b2e] text-gray-300 hover:bg-[#3a3b3e]'
                                    }`}
                                >
                                    {category.label}
                                    <span className="ml-2 text-xs opacity-70">
                                        ({getCategoryCount(category.id)})
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        layout
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square"
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title || `Gallery ${item.id}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-6">
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileHover={{ y: 0, opacity: 1 }}
                                            className="text-center"
                                        >
                                            <span className="text-white text-lg font-semibold block mb-2">
                                                {item.title || `Image ${item.id}`}
                                            </span>
                                            <span className="inline-flex items-center gap-2 text-[#8dcb3f] text-sm font-medium">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                                View Full
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Corner Badge */}
                                    <div className="absolute top-4 right-4 bg-[#8dcb3f] text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {index + 1}/{filteredItems.length}
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full capitalize">
                                        {item.category}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-gray-400 text-lg">No images found in this category.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 bg-[#1f2023]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: '100+', label: 'Photos' },
                            { number: '50+', label: 'Locations' },
                            { number: '15+', label: 'Cities' },
                            { number: '1000+', label: 'Happy Customers' },
                        ].map((stat, index) => (
                            <FadeInWhenVisible key={index} delay={index * 0.1}>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-[#8dcb3f] mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-400 text-sm uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={closeLightbox}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-6 right-6 text-white hover:text-[#8dcb3f] z-50 bg-white/10 backdrop-blur-sm p-3 rounded-full transition-colors"
                        >
                            <X size={28} />
                        </motion.button>

                        {/* Previous Button */}
                        <motion.button
                            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute left-4 md:left-8 text-white hover:text-[#8dcb3f] z-50 bg-white/10 backdrop-blur-sm p-3 rounded-full transition-colors"
                        >
                            <ChevronLeft size={32} />
                        </motion.button>

                        {/* Next Button */}
                        <motion.button
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-4 md:right-8 text-white hover:text-[#8dcb3f] z-50 bg-white/10 backdrop-blur-sm p-3 rounded-full transition-colors"
                        >
                            <ChevronRight size={32} />
                        </motion.button>

                        {/* Image with Zoom Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-6xl max-h-full w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                key={selectedImage.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                src={selectedImage.imgSrc}
                                alt={selectedImage.title || `Gallery ${selectedImage.id}`}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto shadow-2xl"
                            />

                            {/* Image Info */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-center mt-6"
                            >
                                <h3 className="text-white text-xl font-semibold mb-2">
                                    {selectedImage.title || `Image ${selectedImage.id}`}
                                </h3>
                                <span className="text-gray-400 text-sm capitalize mb-2 block">
                                    {selectedImage.category}
                                </span>
                                <div className="flex items-center justify-center gap-4">
                                    <span className="text-[#8dcb3f] text-sm font-medium">
                                        {currentIndex + 1} of {filteredItems.length}
                                    </span>
                                    {/* Progress bar */}
                                    <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[#8dcb3f] rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${((currentIndex + 1) / filteredItems.length) * 100}%` }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Thumbnail Navigation */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex justify-center gap-2 mt-6 overflow-x-auto pb-4 px-4"
                            >
                                {filteredItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentIndex(index);
                                            setSelectedImage(item);
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                            currentIndex === index 
                                                ? 'border-[#8dcb3f] ring-2 ring-[#8dcb3f]/50' 
                                                : 'border-white/20 hover:border-white/50'
                                        }`}
                                    >
                                        <img
                                            src={item.imgSrc}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.button>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Keyboard Hints */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-xs hidden md:flex items-center gap-4">
                            <span>← → Navigate</span>
                            <span>ESC Close</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;