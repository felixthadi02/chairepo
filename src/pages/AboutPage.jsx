import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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

const ZoomInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);

  const teamMembers = [
    {
      name: "Prakash Martin Rayudu",
      role: "Co-Founder & CEO",
      // image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
      socials: { facebook: true, twitter: true, instagram: true }
    },
    {
      name: "Vimala Martin Rayudu",
      role: "Co-Founder & CTO",
      // image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      socials: { facebook: true, twitter: true, instagram: true }
    },
    {
      name: "Daniel John Komanpalli",
      role: "Co-Founder & CEO",
      // image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop",
      socials: { facebook: true, twitter: true, instagram: true }
    },
    {
      name: "Sai Harsha Kakarla",
      role: "CFO & COO",
      // image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop",
      socials: { facebook: true, twitter: true, instagram: true }
    }
  ];

  return (
    <div className="min-h-screen bg-[#18191b] text-white">
      <Helmet>
        <title>Premium Tea Brand and Franchise Success | Tea 5 cafe</title>
        <meta
          name="description"
          content="Discover how a simple idea grew into one of India's most trusted tea franchise brands built on quality, trust, and growth with Tea 5 cafe."
        />
        <meta
          name="keywords"
          content="tea cafe franchise, coffee franchise india, low investment franchise, Tea 5 cafe, franchise opportunities India, tea franchise in India"
        />
        <link rel="canonical" href="https://www.tea5cafe.com/about-us" />
      </Helmet>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

        .font-sacramento {
          font-family: "Sacramento", cursive;
        }
      `}</style>

      <section
        className="relative text-white overflow-hidden min-h-[500px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/coffee.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '170px 0 80px 0'
        }}
      >
        <div className="container mx-auto px-4 relative z-10 w-full text-center">


          <FadeInWhenVisible>
            <h2 className="text-3xl text-[#8dcb3f] md:text-4xl lg:text-5xl font-bold mb-4" style={{
              fontFamily: 'serif',
            }}>
              Our Story
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
              Tea That Brings Together
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <nav aria-label="breadcrumb" className="mt-6 flex justify-center items-center space-x-2 text-sm">
              <ol className="flex space-x-2">
                <li>
                  <a href="/" className="text-white hover:text-gray-300 transition-colors">
                    Home
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-400" aria-current="page">
                  <a href="/contact-us" className="text-white hover:text-gray-300 transition-colors">
                    Contact-us
                  </a>
                </li>
              </ol>
            </nav>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Story Section */}
      <section
        className="py-20"
        style={{
          background: '#18191b',
          backgroundSize: 'cover',
          padding: '90px 0'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeInWhenVisible>
                <h2 className="text-4xl font-bold mb-6">How It Begins</h2>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.1}>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  At Tea 5 cafe, we believe great tea has the power to bring people together. Our journey began with a simple idea to serve authentic tea made with love and create a space where everyone feels welcome. From the first pour to the last sip, we focus on quality, comfort, and connection.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Started in Narsapuram, West Godavari, Ap, Tea 5 cafe soon became a favorite spot for families, friends, and entrepreneurs to relax and share good moments. Every cup is made from premium tea leaves that are carefully selected for freshness and taste.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.3}>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Tea 5 cafe is more than a tea shop. It is a growing business that connects India's tea tradition with a modern franchise model. Through our tea cafe franchise in india and across India, we help individuals start a low investment tea franchise and build a successful future.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Our goal is not only to serve tea but also to create opportunities. We believe in community growth, sustainability, and supporting every franchise partner to achieve lasting success.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-gray-400 leading-relaxed mb-4">
                  At Tea 5 cafe, every cup tells a story of trust, ambition, and togetherness.
                </p>
              </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ZoomInWhenVisible>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
                    alt="Coffee shop interior"
                    className="w-full rounded-3xl shadow-xl cursor-pointer"
                  />
                </ZoomInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#8dcb3f] rounded-3xl p-6 text-center cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,3,0.3)]"
                  >
                    <motion.h3
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold mb-2"
                    >
                      Our Outlets
                    </motion.h3>
                    <h4 className="text-lg">Across India</h4>
                  </motion.div>
                </FadeInWhenVisible>
              </div>

              <div className="space-y-4 pt-8">
                <FadeInWhenVisible delay={0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#8dcb3f] rounded-3xl p-6 text-center cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,3,0.3)]"
                  >
                    <motion.h3
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold mb-2"
                    >
                      No Royalty
                    </motion.h3>
                    {/* <h4 className="text-lg">Turnover increased</h4> */}
                  </motion.div>
                </FadeInWhenVisible>

                <ZoomInWhenVisible delay={0.3}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop"
                    alt="Coffee preparation"
                    className="w-full rounded-3xl shadow-xl cursor-pointer"
                  />
                </ZoomInWhenVisible>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/coffee.png')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
              style={{
                fontFamily: "'Sacramento', cursive",
                fontWeight: 400,
                // fontStyle: "normal",
                fontFamily: 'serif',
                fontSize: "clamp(36px, 8vw, 55px)",
                color: "#8dcb3f",
                margin: 0,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              Meet Our
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <h2
              className="uppercase font-bold inline-block border-y border-white/50 m-0"
              style={{
                fontSize: '40px',
                lineHeight: '40px',
                letterSpacing: '10px',
                fontFamily: 'serif',
                color: '#fff'
              }}
            >
              Leadership
            </h2>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Team Grid */}
      <section
        className="py-20"
        style={{
          background: '#18191b',
          backgroundSize: 'cover',
          padding: '90px 0'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative mb-6 inline-block">
                  {/* <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={member.image}

                    alt={member.name}
                    className="relative z-10 rounded-3xl w-full max-w-xs mx-auto"
                  /> */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <div className="text-[#8dcb3f] font-semibold mb-3">{member.role}</div>
                <div className="flex justify-center gap-3">
                  {member.socials.facebook && (
                    <motion.a
                      href="https://www.facebook.com/Tea5cafe"
                      whileHover={{ scale: 1.2, backgroundColor: "#8dcb3f" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center"
                    >
                      <Facebook size={18} />
                    </motion.a>
                  )}
                  {member.socials.twitter && (
                    <motion.a
                      href="https://x.com/Tea5cafe"
                      whileHover={{ scale: 1.2, backgroundColor: "#8dcb3f" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center"
                    >
                      <Twitter size={18} />
                    </motion.a>
                  )}
                  {member.socials.instagram && (
                    <motion.a
                      href="https://www.instagram.com/tea5.cafe"
                      whileHover={{ scale: 1.2, backgroundColor: "#8dcb3f" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center"
                    >
                      <Instagram size={18} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}