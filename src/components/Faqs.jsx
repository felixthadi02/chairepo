
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from 'framer-motion';
import image25 from '../assets/Lavender.png';
const faqList = [
    {
        question: "What are your cafe timings?",
        answer:
            "Our cafe is open every day from 8:00 AM to 10:00 PM, including weekends and holidays.",
    },
    {
        question: "Do you offer home delivery?",
        answer:
            "Yes! We offer home delivery through Swiggy and Zomato. You can also call us directly for takeaway orders.",
    },
    {
        question: "Is Tea 5 Cafe vegetarian-friendly?",
        answer:
            "Absolutely! We have a wide variety of vegetarian and vegan-friendly items on our menu.",
    },
    {
        question: "Do you provide event catering?",
        answer:
            "Yes, Tea 5 Cafe offers catering for birthdays, corporate meetings, and private events. Contact us for details.",
    },
    {
        question: "Where is Tea 5 Cafe located?",
        answer:
            "We're located in the heart of the city, near NRCM Campus. You can find us on Google Maps for directions.",
    },
    {
        question: "Do you have Wi-Fi available?",
        answer:
            "Yes, we provide free high-speed Wi-Fi for all our guests. Just ask our staff for the password.",
    },
];

const Faqs = () => {
    const navigate = useNavigate();

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


    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // Individual FAQ card animation
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            {/* ✅ Global Styles for Animated Background + Sacramento Font */}
            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

                .font-sacramento {
                    font-family: "Sacramento", cursive;
                }

                /* Subtle animated grid background */
                .grid-bg {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(
                            rgba(255, 255, 255, 0.05) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255, 255, 255, 0.05) 1px,
                            transparent 1px
                        );
                    background-size: 40px 40px;
                    animation: moveGrid 20s linear infinite;
                    z-index: 0;
                    pointer-events: none;
                }

                @keyframes moveGrid {
                    from {
                        background-position: 0 0;
                    }
                    to {
                        background-position: 40px 40px;
                    }
                }
            `}</style>

            {/* ✅ HERO SECTION */}
            <section
                className="relative text-white overflow-hidden min-h-[500px] flex items-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/Lavender.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    padding: "170px 0 80px 0",
                }}
            >
                <Helmet>
                    <title>Frequently Asked Questions | Tea 5 Cafe</title>
                    <meta
                        name="description"
                        content="Find clear answers to common franchise, cafe menu, and partner support questions. Get the information you need from Tea 5 Cafe."
                    />
                    <meta
                        name="keywords"
                        content="tea cafe franchise, coffee franchise india, low investment franchise, Tea 5 cafe, franchise opportunities India, tea franchise in India"
                    />
                    <link rel="canonical" href="https://www.tea5cafe.com/faqs" />
                </Helmet>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <FadeInWhenVisible>
                        <h2 className="text-3xl text-[#8dcb3f] md:text-4xl lg:text-5xl font-bold mb-4" style={{
                            fontFamily: 'serif',
                        }}>
                            Welcome to
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
                            Tea5Cafe Faqs
                        </h2>
                    </FadeInWhenVisible>

                    <motion.nav
                        aria-label="breadcrumb"
                        className="mt-6 flex justify-center items-center text-sm space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <ol className="flex space-x-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300 transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-400" aria-current="page">
                                <a href="/contact-us" className="hover:text-[#8dcb3f] transition-colors">
                                    FAQ
                                </a>
                            </li>
                        </ol>
                    </motion.nav>
                </div>
            </section>

            {/* ✅ FAQ GRID SECTION */}
            <section className="ezy__faq16 dark py-14 md:py-24 bg-[#18191b] dark:bg-[#18191b] text-white dark:text-white relative">
                {/* Animated subtle grid overlay */}
                <div className="grid-bg"></div>

                <div className="container px-6 md:px-12 lg:px-28 mx-auto relative z-10">
                    {/* Header Section with Animation */}
                    <motion.div
                        className="grid grid-cols-12 mb-12"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="col-span-12 lg:col-span-7 text-center lg:text-left px-4">
                            <h2 className="font-bold text-[35px] leading-[45px] md:text-[45px] md:leading-[60px] text-[#8dcb3f]">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-base leading-6 font-medium text-white/70 mt-4">
                                Everything you need to know before becoming a proud Tea 5 Cafe
                                partner. If your question isn't listed, we're just a message away!
                            </p>
                        </div>
                    </motion.div>

                    {/* FAQ Cards Grid with Stagger Animation */}
                    <motion.div
                        className="grid grid-cols-12 text-center md:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {faqList.map((faq, i) => (
                            <motion.div
                                className="col-span-12 md:col-span-6 lg:col-span-4"
                                key={i}
                                variants={cardVariants}
                            >
                                <motion.div
                                    className="flex flex-col items-center md:items-start p-6 lg:p-10"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div
                                        className="bg-[#8dcb3f] text-black text-xl h-10 w-10 rounded-full flex justify-center items-center mb-6 shadow-lg shadow-[#8dcb3f]/40"
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.2,
                                            boxShadow: "0 10px 30px rgba(141, 203, 63, 0.6)"
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <FontAwesomeIcon icon={faQuestion} />
                                    </motion.div>

                                    <h5 className="text-xl font-bold mb-3 text-white">
                                        {faq.question}
                                    </h5>
                                    <p className="text-base leading-snug text-white/70">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Card with Animation */}
                    <motion.div
                        className="grid grid-cols-12 mt-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    >
                        <div className="col-span-12 text-center">
                            <motion.div
                                className="bg-[#111213] rounded-xl border border-[#8dcb3f]/30 p-6 md:py-10 lg:py-12 shadow-xl shadow-black/40 relative z-10"
                                whileHover={{
                                    borderColor: "rgba(141, 203, 63, 0.6)",
                                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.h4
                                    className="text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-3 text-[#8dcb3f]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    Have any additional questions?
                                </motion.h4>
                                <motion.p
                                    className="text-[16px] md:text-[18px] text-white/60 mb-4 max-w-2xl mx-auto"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    Reach out to our franchise support team and we'll help you start
                                    brewing success with Tea 5 Cafe.
                                </motion.p>
                                <motion.button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                        console.log("Button clicked - navigating to contact-us");
                                        navigate("/contact-us");
                                    }}
                                    className="bg-[#8dcb3f] hover:bg-[#fff] text-black font-bold py-3 px-8 rounded-full transition shadow-lg hover:text-black hover:shadow-[0_20px_40px_rgba(141,203,63,0.3)] cursor-pointer relative z-20"
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: "0 25px 50px rgba(141, 203, 63, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    Get in Touch
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div className="bg-[#8dcb3f] absolute w-full bottom-0 h-[200px] -z-10"></div>
            </section>
        </>
    );
};

export default Faqs;
