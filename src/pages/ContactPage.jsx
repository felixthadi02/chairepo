import React, { useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

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

    // Scroll-based fade effect
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

        // Replace this URL with your Google Apps Script Web App URL
        // const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwKyMxh0zMLet6Q7c0ZSLphxaxfsUnCN4HqqfLH7Hg0Z_iyCtg3KNy4B8QLNrCX9VU0/exec';
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

            // With no-cors, we can't read the response, so we assume success
            setShowSuccess(true);
            setShowError(false);

            // Reset form
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
                        content="Have a question or want to start your own franchise? Contact Tea 5 cafe for details, support, and guidance. Let’s brew success together."
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
                                            <a href="#" className="text-white hover:text-gray-300 transition-colors">
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

                {/* Contact Form - Full Width */}
                <section
                    style={{
                        background: '#18191b',
                        backgroundSize: 'cover',
                        padding: '90px 0'
                    }}
                >
                    <div className="w-full px-4 md:px-8 lg:px-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Location - Left Side */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="lg:col-span-4 text-white text-center lg:text-left"
                            >
                                <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
                                <p className="leading-relaxed text-gray-300">
                                    Collins Street West, Victoria 8007 Australia<br />
                                    T. (208) 333 9296<br />
                                    E. contact-us@baresto.com
                                </p>
                            </motion.div>

                            {/* Form - Right Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="lg:col-span-8"
                            >
                                <form onSubmit={handleSubmit} className="relative z-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {/* Left Column */}
                                        <div className="space-y-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#8dcb3f] transition-colors"
                                                    placeholder="Your Name *"
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#8dcb3f] transition-colors"
                                                    placeholder="Your Email *"
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#8dcb3f] transition-colors"
                                                    placeholder="Your Phone *"
                                                />
                                            </div>
                                        </div>

                                        {/* Right Column */}
                                        <div>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={7}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#8dcb3f] transition-colors resize-none"
                                                placeholder="Your Message *"
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="mt-6"
                                    >
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                            className="px-8 py-3 text-white font-semibold transition-all duration-300 rounded shadow-[0_20px_40px_rgba(141,203,63,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                                            style={{
                                                background: isSubmitting ? '#666' : '#8dcb3f',
                                                border: 'none',
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isSubmitting) {
                                                    e.currentTarget.style.background = '#ffffff';
                                                    e.currentTarget.style.color = '#000';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isSubmitting) {
                                                    e.currentTarget.style.background = '#8dcb3f';
                                                    e.currentTarget.style.color = '#fff';
                                                }
                                            }}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </motion.button>
                                    </motion.div>

                                    {/* Success Message */}
                                    {showSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-6 p-4 bg-green-600/20 border border-green-600 text-green-300 rounded"
                                        >
                                            ✓ Your message has been sent successfully!
                                        </motion.div>
                                    )}

                                    {/* Error Message */}
                                    {showError && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-6 p-4 bg-red-600/20 border border-red-600 text-red-300 rounded"
                                        >
                                            ✗ Sorry, there was an error sending your message. Please try again.
                                        </motion.div>
                                    )}
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}