import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import { Helmet } from "react-helmet-async";
// Animation component for fade-in effects

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

const BlogList = ({ blogs, navigateTo }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

        .font-sacramento {
          font-family: "Sacramento", cursive;
        }
      `}</style>

      {/* Hero Banner Section */}
      <section
        className="relative text-white overflow-hidden min-h-[500px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&h=600&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "170px 0 80px 0",
        }}
      >
        <Helmet>
          <title>Insights & Franchise Tips | Tea 5 cafe</title>
          <meta
            name="description"
            content="Explore our blog for industry insights, franchise tips, and tea-culture stories. Stay ahead in the café business with Tea 5 Cafe."
          />
          <meta
            name="keywords"
            content="tea cafe franchise, coffee franchise india, low investment franchise, Tea 5 cafe, franchise opportunities India, tea franchise in India"
          />
          <link rel="canonical" href="https://www.tea5cafe.com/blog" />
        </Helmet>
        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <FadeInWhenVisible>
            <h2 className="text-6xl  text-[#8dcb3f] md:text-7xl lg:text-8xl font-sacramento font-bold mb-4 text-[clamp(40px,6vw,80px)]">
              Latest
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <h2
              className="uppercase font-bold inline-block border-y border-white/50 m-0"
              style={{
                fontSize: "40px",
                lineHeight: "40px",
                letterSpacing: "10px",
                fontFamily: "serif",
                color: "#fff",
              }}
            >
              Our Story
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <nav
              aria-label="breadcrumb"
              className="mt-6 flex justify-center items-center space-x-2 text-sm"
            >
              <ol className="flex space-x-2">
                <li>
                  <a
                    href="/"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-400" aria-current="page">
                  Blogs
                </li>
              </ol>
            </nav>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Blog List Section */}
      <section
        id="section-blog"
        className="py-16 bg-[#18191b] text-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-center mb-12">
              <span className="text-4xl md:text-5xl font-bold text-white  tracking-wide">
                Latest <span className="text-[#8dcb3f]">Articles</span>
              </span>
            </h2>
          </FadeInWhenVisible>

          <motion.div
            className="w-full blog-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="blog-item flex flex-col md:flex-row items-center gap-8 mb-20"
                variants={itemVariants}
              >
                {index % 2 === 0 ? (
                  // Left content, right image
                  <>
                    <div className="w-full md:w-5/12 relative">
                      <div className="post-content">
                        <motion.div
                          className="date-box absolute top-0 left-0 w-[74px] text-center border-2 border-[#8dcb3f] z-10"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="day text-4xl font-semibold text-white pt-3">
                            {blog.date.day}
                          </div>
                          <div className="month text-white font-semibold tracking-wider py-2">
                            {blog.date.month}
                          </div>
                        </motion.div>

                        <div className="post-text pl-24 mt-2">
                          <h3 className="text-2xl font-bold mt-5 mb-4">
                            <motion.a
                              className="text-white hover:text-[#8dcb3f] transition-colors cursor-pointer inline-block"
                              whileHover={{ x: 5 }}
                            >
                              {blog.title}
                            </motion.a>
                          </h3>
                          <p className="text-gray-300 mb-6">{blog.content}</p>
                          <motion.a
                            className="btn-custom py-2 px-5 border-2 rounded-xl border-[#8dcb3f] hover:bg-[#8dcb3f] hover:text-gray-900 transition-all font-bold uppercase cursor-pointer inline-block hover:shadow-[0_20px_40px_rgba(141,203,63,0.3)]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Read More
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="w-full md:w-7/12"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                      loading="lazy"
                        src={blog.image}
                        className="rounded-2xl w-full shadow-lg"
                        alt={blog.title}
                      />
                    </motion.div>
                  </>
                ) : (
                  // Left image, right content
                  <>
                    <motion.div
                      className="w-full md:w-7/12"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={blog.image}
                        className="rounded-2xl w-full shadow-lg"
                        alt={blog.title}
                        loading="lazy"
                      />
                    </motion.div>

                    <div className="w-full md:w-5/12 relative md:pl-8">
                      <div className="post-content">
                        <motion.div
                          className="date-box absolute top-0 left-0 md:left-8 w-[74px] text-center border-2 border-[#8dcb3f] z-10"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="day text-4xl font-semibold text-white pt-3">
                            {blog.date.day}
                          </div>
                          <div className="month text-white font-semibold tracking-wider py-2">
                            {blog.date.month}
                          </div>
                        </motion.div>

                        <div className="post-text pl-24 mt-2">
                          <h3 className="text-2xl font-bold mt-5 mb-4">
                            <motion.a
                              onClick={() => navigateTo("/blog-single")}
                              className="text-white hover:text-[#8dcb3f] transition-colors cursor-pointer inline-block"
                              whileHover={{ x: 5 }}
                            >
                              {blog.title}
                            </motion.a>
                          </h3>
                          <p className="text-gray-300 mb-6">{blog.content}</p>
                          <motion.a
                            onClick={() => navigateTo("/blog-single")}
                            className="btn-custom py-2 px-5 border-2 border-[#8dcb3f] hover:bg-[#8dcb3f] hover:text-gray-900 transition-all font-bold uppercase cursor-pointer inline-block rounded-xl hover:shadow-[0_20px_40px_rgba(141,203,63,0.3)]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Read More
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

BlogList.defaultProps = {
  blogs: [
    {
      id: 1,
      date: { day: "28", month: "MAY" },
      title: "10 Reasons To Drink Coffee Every Day",
      content:
        "Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.",
      image:
        "https://madebydesignesia.com/themes/baresto/02_images/blog/pic-blog-1.jpg",
    },
    {
      id: 2,
      date: { day: "26", month: "MAY" },
      title: "10 Reasons To Drink Coffee Every Day",
      content:
        "Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.",
      image:
        "https://madebydesignesia.com/themes/baresto/02_images/blog/pic-blog-2.jpg",
    },
    {
      id: 3,
      date: { day: "24", month: "MAY" },
      title: "10 Reasons To Drink Coffee Every Day",
      content:
        "Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.",
      image:
        "https://madebydesignesia.com/themes/baresto/02_images/blog/pic-blog-3.jpg",
    },
    {
      id: 4,
      date: { day: "22", month: "MAY" },
      title: "10 Reasons To Drink Coffee Every Day",
      content:
        "Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.",
      image:
        "https://madebydesignesia.com/themes/baresto/02_images/blog/pic-blog-4.jpg",
    },
  ],
};

export default BlogList;
