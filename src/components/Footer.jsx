// import React, { useState } from 'react';
// import { Facebook, Twitter, Rss, Dribbble, MapPin, Phone, Mail, Heart, Coffee } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import BottomBar from './BottomBar';

// export default function Footer() {
//   const [hoveredIcon, setHoveredIcon] = useState(null);

//   const socialLinks = [
//     { 
//       icon: Facebook, 
//       href: "https://www.facebook.com/Tea5cafe/", 
//       label: "Facebook",
//       bgGradient: "from-blue-500 to-blue-600"
//     },
//     { 
//       icon: Twitter, 
//       href: "https://x.com/Tea5cafe", 
//       label: "Twitter",
//       bgGradient: "from-sky-400 to-sky-500"
//     },
//     { 
//       icon: null, 
//       href: "https://www.youtube.com/@Tea5cafe", 
//       label: "YouTube",
//       bgGradient: "from-red-500 to-red-600",
//       customIcon: (
//         <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
//           <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
//         </svg>
//       )
//     },
//     { 
//       icon: Rss, 
//       href: "#", 
//       label: "RSS",
//       bgGradient: "from-orange-400 to-orange-500"
//     },
//     { 
//       icon: Dribbble, 
//       href: "#", 
//       label: "Dribbble",
//       bgGradient: "from-pink-400 to-pink-500"
//     },
//   ];

//   return (
//     <>
//       {/* Slim Wave Separator */}
//       <div className="relative">
//         <svg 
//           className="absolute bottom-full w-full h-8 md:h-12"
//           preserveAspectRatio="none"
//           viewBox="0 0 1440 74"
//         >
//           <path
//             fill="#8dcb3f"
//             d="M0,32L48,37.3C96,43,192,53,288,56C384,59,480,53,576,42.7C672,32,768,16,864,16C960,16,1056,32,1152,37.3C1248,43,1344,37,1392,34.7L1440,32L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"
//           />
//         </svg>
//       </div>

//       <footer className="relative bg-gradient-to-br from-[#8dcb3f] via-[#8dcb3f] to-[#8dcb3f] text-white overflow-hidden">
//         {/* Subtle Background Animation */}
//         <div className="absolute inset-0 overflow-hidden opacity-30">
//           <motion.div
//             className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
//             animate={{
//               x: [0, 50, 0],
//               y: [0, -30, 0],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
//         </div>

//         <div className="relative container mx-auto px-4 py-6 md:py-8">
//           {/* Compact Main Content */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

//             {/* Contact Info - Compact */}
//             <motion.div
//               className="text-center md:text-left"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20">
//                 <div className="space-y-2">
//                   <motion.div 
//                     className="flex items-center gap-2 text-sm justify-center md:justify-start"
//                     whileHover={{ x: 5 }}
//                   >
//                     <MapPin className="w-4 h-4 flex-shrink-0" />
//                     <span className="text-white/90">Collins St West, Victoria 8007</span>
//                   </motion.div>
//                   <motion.div 
//                     className="flex items-center gap-2 text-sm justify-center md:justify-start"
//                     whileHover={{ x: 5 }}
//                   >
//                     <Phone className="w-4 h-4 flex-shrink-0" />
//                     <span className="text-white/90">(208) 333 9296</span>
//                   </motion.div>
//                   <motion.div 
//                     className="flex items-center gap-2 text-sm justify-center md:justify-start"
//                     whileHover={{ x: 5 }}
//                   >
//                     <Mail className="w-4 h-4 flex-shrink-0" />
//                     <span className="text-white/90">contact-us@baresto.com</span>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Center Logo - Compact */}
//             <motion.div
//               className="flex justify-center items-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               <div className="relative">
//                 {/* Rotating Ring */}
//                 <motion.div
//                   className="absolute inset-0 rounded-full border-2 border-white/20 border-dashed"
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "linear"
//                   }}
//                 />

//                 {/* Logo */}
//                 <motion.div
//                   className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white p-0.5 shadow-xl"
//                   whileHover={{ 
//                     scale: 1.1,
//                     rotate: [0, -5, 5, 0],
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="w-full h-full rounded-full overflow-hidden">
//                     <img
//                       src="/logo2.jpg"
//                       alt="Logo"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Floating Icon */}
//                 <motion.div
//                   className="absolute -top-1 -right-1"
//                   animate={{
//                     y: [-2, 2, -2],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 >
//                   <Coffee className="w-4 h-4 text-white/80" />
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Social Links - Compact */}
//             <motion.div
//               className="flex flex-col items-center md:items-end"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20">
//                 <div className="flex gap-3 justify-center">
//                   {socialLinks.map((social, index) => (
//                     <motion.a
//                       key={index}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="relative group"
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.05 * index }}
//                       onHoverStart={() => setHoveredIcon(index)}
//                       onHoverEnd={() => setHoveredIcon(null)}
//                     >
//                       <motion.div
//                         className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${social.bgGradient} shadow-md flex items-center justify-center overflow-hidden`}
//                         whileHover={{ 
//                           scale: 1.15,
//                           rotate: 5,
//                         }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {social.customIcon || <social.icon className="w-4 h-4 text-white" />}
//                       </motion.div>

//                       {/* Compact Tooltip */}
//                       <AnimatePresence>
//                         {hoveredIcon === index && (
//                           <motion.div
//                             className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
//                             initial={{ opacity: 0, y: 5 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 5 }}
//                           >
//                             {social.label}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </motion.a>
//                   ))}
//                 </div>
//                 <motion.p
//                   className="mt-3 text-white/70 text-xs text-center italic"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   "Brewing connections ☕"
//                 </motion.p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Slim Divider */}
//           <motion.div
//             className="my-4"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//           </motion.div>

//           {/* Compact Copyright */}
//           <motion.div
//             className="text-center"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//           >
//             <p className="text-white/60 text-xs">
//               © {new Date().getFullYear()} Tea5 Café • Made with{' '}
//               <motion.span
//                 className="inline-block text-red-300"
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 1, repeat: Infinity }}
//               >
//                 ♥
//               </motion.span>
//               {' '}• All rights reserved
//             </p>
//           </motion.div>
//         </div>

//         <BottomBar />
//       </footer>
//     </>
//   );
// }


// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Rss, Dribbble, MapPin, Phone, Mail, Heart, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomBar from './BottomBar';
import logo from '../assets/logo2.jpg'
export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/Tea5cafe/",
      label: "Facebook",
      bgGradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Twitter,
      href: "https://x.com/Tea5cafe",
      label: "Twitter",
      bgGradient: "from-sky-400 to-sky-500"
    },
    {
      icon: null,
      href: "https://www.youtube.com/@Tea5cafe",
      label: "YouTube",
      bgGradient: "from-red-500 to-red-600",
      customIcon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      )
    },
    {
      icon: Rss,
      href: "https://www.tea5cafe.com/",
      label: "Website",
      bgGradient: "from-orange-400 to-orange-500"
    },
    {
      icon: Dribbble,
      href: "https://www.instagram.com/tea5.cafe",
      label: "Instagram",
      bgGradient: "from-pink-400 to-pink-500"
    },
  ];

  // Quick links for navigation
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact-us' },
  ];

  return (
    <>
      {/* Slim Wave Separator */}
      <div className="relative">
        <svg
          className="absolute bottom-full w-full h-8 md:h-12"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
        >
          <path
            fill="#8dcb3f"
            d="M0,32L48,37.3C96,43,192,53,288,56C384,59,480,53,576,42.7C672,32,768,16,864,16C960,16,1056,32,1152,37.3C1248,43,1344,37,1392,34.7L1440,32L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"
          />
        </svg>
      </div>

      <footer className="relative bg-gradient-to-br from-[#8dcb3f] via-[#8dcb3f] to-[#8dcb3f] text-white overflow-hidden">
        {/* Subtle Background Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-6 md:py-8">
          {/* Compact Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

            {/* Contact Info - Compact */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20">
                <div className="space-y-2">

                  <motion.a
                    href="tel:+918466066425"
                    className="flex items-center gap-2 text-sm justify-center md:justify-start hover:text-yellow-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/90">8466066425</span>
                  </motion.a>

                  <motion.a
                    href="tel:+919381142553"
                    className="flex items-center gap-2 text-sm justify-center md:justify-start hover:text-yellow-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/90">9381142553</span>
                  </motion.a>

                  <motion.a
                    href="mailto:contact-us@tea5cafe.com"
                    className="flex items-center gap-2 text-sm justify-center md:justify-start hover:text-yellow-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/90">tea5franchise04@gmail.com
                    </span>
                  </motion.a>
                </div>

                {/* Quick Links - Mobile visible */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {quickLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.path}
                        className="text-xs text-white/70 hover:text-white transition-colors"
                      >
                        {link.name}
                        {index < quickLinks.length - 1 && <span className="ml-2 text-white/30">•</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Logo - Compact */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/" className="relative group">
                {/* Rotating Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/20 border-dashed"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Logo */}
                <motion.div
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white p-0.5 shadow-xl"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={logo}
                      alt="Tea5 Cafe Logo"
                      className="w-full h-full object-cover"
                      loading='lazy'
                    />
                  </div>
                </motion.div>

                {/* Floating Icon */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    y: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* <Coffee className="w-4 h-4 text-white/80" /> */}
                </motion.div>
              </Link>
            </motion.div>

            {/* Social Links - Compact */}
            <motion.div
              className="flex flex-col items-center md:items-end"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20">
                <div className="flex gap-3 justify-center">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * index }}
                      onHoverStart={() => setHoveredIcon(index)}
                      onHoverEnd={() => setHoveredIcon(null)}
                    >
                      <motion.div
                        className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${social.bgGradient} shadow-md flex items-center justify-center overflow-hidden`}
                        whileHover={{
                          scale: 1.15,
                          rotate: 5,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.customIcon || <social.icon className="w-4 h-4 text-white" />}
                      </motion.div>

                      {/* Compact Tooltip */}
                      <AnimatePresence>
                        {hoveredIcon === index && (
                          <motion.div
                            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-50"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                          >
                            {social.label}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.a>
                  ))}
                </div>
                {/* <motion.p
                  className="mt-3 text-white/70 text-xs text-center italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  "Brewing connections ☕"
                </motion.p> */}
              </div>
            </motion.div>
          </div>

          {/* Slim Divider */}
          <motion.div
            className="my-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </motion.div>

          {/* Compact Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/60 text-xs">
              © {new Date().getFullYear()} Tea5 Café • Made with{' '}
              <motion.span
                className="inline-block text-red-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ♥
              </motion.span>
              {' '}• All rights reserved
            </p>

            {/* Legal Links */}
            <div className="mt-2 flex justify-center gap-4 text-white/50 text-xs">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative bottom-0 left-0 w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-t border-white/10">
          <BottomBar />
        </div>
      </footer>
    </>
  );
}