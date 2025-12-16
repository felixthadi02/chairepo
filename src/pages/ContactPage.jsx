import React, { useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, Send } from 'lucide-react';

const icon = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600";

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

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx5M5VasnE2lkdVvkrkNFFDgKMpkVtbIyBIux666sUNsI3WFecQ3OHP2-LUw8iNmcpFNg/exec';

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    timestamp: new Date().toISOString()
                })
            });

            setShowSuccess(true);
            setShowError(false);

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setShowError(true);
            setShowSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");
                
                @media (prefers-reduced-motion: no-preference) {
                    :root {
                        scroll-behavior: smooth;
                    }
                }
                
                .font-sacramento {
                    font-family: "Sacramento", cursive;
                }
            `}</style>

            <div className="w-full bg-white/5">
                <Helmet>
                    <title>Contact Us for Franchise and Support | Tea 5 cafe</title>
                    <meta
                        name="description"
                        content="Have a question or want to start your own franchise? Contact Tea 5 cafe for details, support, and guidance. Let's brew success together."
                    />
                    <meta
                        name="keywords"
                        content="tea cafe franchise, coffee franchise Hyderabad, low investment franchise, Tea 5 cafe, franchise opportunities India, tea franchise in India"
                    />
                    <link rel="canonical" href="https://www.tea5cafe.com/contact-us" />
                </Helmet>

                {/* Hero Section */}
                <section
                    className="relative text-white overflow-hidden min-h-[500px] flex items-center"
                    style={{
                        background: '#222',
                        backgroundImage: `url(${icon})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        padding: '170px 0 80px 0'
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 z-0"></div>

                    <div className="container mx-auto px-4 relative z-10 w-full">
                        <motion.div
                            className="text-center"
                            style={{ opacity: heroOpacity, y: heroY }}
                        >
                            <FadeInWhenVisible>
                                <h2 className="text-6xl text-[#8dcb3f] md:text-7xl lg:text-8xl font-bold mb-4 font-sacramento text-[clamp(40px,6vw,80px)]">
                                    Get In
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
                                    Touch
                                </h2>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible delay={0.4}>
                                <nav aria-label="breadcrumb">
                                    <ol className="flex justify-center items-center space-x-2 text-sm mt-4">
                                        <li>
                                            <a href="/" className="text-white hover:text-gray-300 transition-colors">
                                                Home
                                            </a>
                                        </li>
                                        <li className="text-gray-400">/</li>
                                        <li className="text-gray-400" aria-current="page">
                                            Contact
                                        </li>
                                    </ol>
                                </nav>
                            </FadeInWhenVisible>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section
                    style={{
                        background: '#18191b',
                        padding: '90px 0'
                    }}
                >
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <FadeInWhenVisible>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    Send Us a <span className="text-[#8dcb3f]">Message</span>
                                </h2>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible delay={0.2}>
                                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                    Have questions about our franchise opportunities or want to learn more? 
                                    We'd love to hear from you. Fill out the form below and we'll get back to you soon.
                                </p>
                            </FadeInWhenVisible>
                        </div>

                        {/* Form Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                                <form onSubmit={handleSubmit} className="relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                        >
                                            <label className="block text-white text-sm font-medium mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8dcb3f] focus:ring-1 focus:ring-[#8dcb3f] transition-all"
                                                placeholder="John Doe"
                                            />
                                        </motion.div>

                                        {/* Email Field */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                        >
                                            <label className="block text-white text-sm font-medium mb-2">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8dcb3f] focus:ring-1 focus:ring-[#8dcb3f] transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </motion.div>

                                        {/* Phone Field - Full Width */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.3 }}
                                            className="md:col-span-2"
                                        >
                                            <label className="block text-white text-sm font-medium mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8dcb3f] focus:ring-1 focus:ring-[#8dcb3f] transition-all"
                                                placeholder="+91 98765 43210"
                                            />
                                        </motion.div>

                                        {/* Message Field - Full Width */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.4 }}
                                            className="md:col-span-2"
                                        >
                                            <label className="block text-white text-sm font-medium mb-2">
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8dcb3f] focus:ring-1 focus:ring-[#8dcb3f] transition-all resize-none"
                                                placeholder="Tell us about your inquiry..."
                                            ></textarea>
                                        </motion.div>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="mt-8"
                                    >
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                            className="w-full md:w-auto px-10 py-4 bg-[#8dcb3f] text-white font-semibold rounded-lg transition-all duration-300 shadow-[0_10px_30px_rgba(141,203,63,0.3)] hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={20} />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.div>

                                    {/* Success Message */}
                                    {showSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-6 p-4 bg-green-600/20 border border-green-600 text-green-300 rounded-lg text-center"
                                        >
                                            ✓ Your message has been sent successfully! We'll get back to you soon.
                                        </motion.div>
                                    )}

                                    {/* Error Message */}
                                    {showError && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-6 p-4 bg-red-600/20 border border-red-600 text-red-300 rounded-lg text-center"
                                        >
                                            ✗ Sorry, there was an error sending your message. Please try again.
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
                            <motion.a
                                href="mailto:contact@tea5cafe.com"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ scale: 1.05, backgroundColor: "#8dcb3f" }}
                                className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl transition-all cursor-pointer group"
                            >
                                <div className="w-12 h-12 bg-[#8dcb3f] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                                    <Mail className="text-white group-hover:text-[#8dcb3f]" size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email Us</p>
                                    <p className="text-white font-medium">tea5franchise04@gmail.com</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="tel:+919876543210"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ scale: 1.05, backgroundColor: "#8dcb3f" }}
                                className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl transition-all cursor-pointer group"
                            >
                                <div className="w-12 h-12 bg-[#8dcb3f] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                                    <Phone className="text-white group-hover:text-[#8dcb3f]" size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Call Us</p>
                                    <p className="text-white font-medium">+91 8466066425</p>
                                    <p className="text-white font-medium">+91 9381142553</p>
                                </div>
                            </motion.a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}