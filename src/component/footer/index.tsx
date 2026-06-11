// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import ChatBot from "../chatbot";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const footerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut" as const,
//       },
//     },
//   };

//   const socialLinks = [
//     {
//       icon: "/social/facebook.png",
//       href: "https://facebook.com/profile.php?id=61580553355990",
//       label: "Facebook",
//       color: "from-blue-500 to-blue-700",
//     },
//     {
//       icon: "/social/instagram.png",
//       href: "https://instagram.com/funds-on-time/",
//       label: "Instagram",
//       color: "from-pink-500 to-purple-600",
//     },
//     {
//       icon: "/social/x.png",
//       href: "https://x.com",
//       label: "X (Twitter)",
//       color: "from-gray-800 to-black",
//     },
//   ];

//   const policies = [
//     // { title: "Interest Policy", href: "/policy/Interest_Rate_Policy.pdf" },
//     { title: "KYC Policy", href: "/policy/KYC_Policy.pdf" },
//     { title: "Interest Rate Policy", href: "/policy/interestRate" },
//     { title: "Grievance Redressal Policy", href: "/policy/grievance" },
//     { title: "Fair Practices Code", href: "/policy/fair" },
//   ];

//   const quickLinks = [
//     { title: "Home", href: "/" },
//     { title: "Services", href: "/services" },
//     { title: "Contact", href: "/contactUs" },
//     // { title: "Our Team", href: "/team" },
//     // { title: "Company History", href: "/history" }
//   ];

//   return (
//     <footer className="relative bg-linear-to-b from-gray-50 via-white to-gray-100 pt-20 pb-12 overflow-hidden border-t border-gray-200">
//       {/* Background Elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
//         <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-100/30 to-transparent" />

//         {/* Floating Particles */}
//         <div className="absolute inset-0 opacity-5">
//           {Array.from({ length: 20 }).map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDuration: `${3 + Math.random() * 4}s`,
//                 animationDelay: `${Math.random() * 2}s`,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="relative z-10 container mx-auto px-4">
//         <motion.div
//           variants={footerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12"
//         >
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="inline-block mb-6"
//             >
//               {/* <Link href="/" className="flex items-center space-x-4 group">
//                 <div className="relative">
//                   <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
//                   <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
//                     <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
//                       <img
//                         src="FOTlogo3.png"
//                         alt="FundsOnTime"
//                         className="w-13 h-12"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                     FundsOnTime
//                   </span>
//                   <div className="flex items-center space-x-2 mt-1">
//                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                     <span className="text-green-600 text-sm font-medium">
//                       Trusted Since 2024
//                     </span>
//                   </div>
//                 </div>
//               </Link> */}
//               <Link href="#" className="flex items-center space-x-2">
//                 <div className="w-50 h-10 flex items-center justify-center">
//                   <img src="FOTlogo3.png" alt="" />
//                 </div>
//                 {/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                 FundsOnTime
//               </span> */}
//               </Link>
//             </motion.div>

//             <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
//               Your trusted partner for comprehensive financial solutions. We
//               empower businesses and individuals with strategic financial
//               guidance and innovative solutions.
//             </p>

//             {/* Social Links */}
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -5, scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="relative group"
//                 >
//                   <div
//                     className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
//                   />
//                   <Link
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="relative w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:border-transparent shadow-sm hover:shadow-md"
//                     aria-label={social.label}
//                   >
//                     <img
//                       src={social.icon}
//                       alt={social.label}
//                       className="w-10 h-10  group-hover:opacity-100 transition-opacity duration-300"
//                     />
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-300">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <Link
//                     href={link.href}
//                     className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium"
//                   >
//                     <div className="w-1 h-1 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {link.title}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Policy */}

//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-300">
//               Our Policies
//             </h3>
//             <ul className="space-y-3">
//               {policies.map((policy, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <a
//                     href={policy.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium"
//                   >
//                     <div className="w-1 h-1 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {policy.title}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* About */}
//           {/* <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-300">About</h3>
//             <ul className="space-y-3">
//               {aboutLinks.map((link, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <Link
//                     href={link.href}
//                     className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium"
//                   >
//                     <div className="w-1 h-1 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {link.title}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </div> */}

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-300">
//               Contact Us
//             </h3>
//             <ul className="space-y-4">
//               <motion.li whileHover={{ x: 5 }} className="flex items-start">
//                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mr-3 mt-1 shadow-sm">
//                   <span className="text-blue-600">📧</span>
//                 </div>
//                 <div>
//                   <div className="text-gray-500 text-sm font-medium">Email</div>
//                   <a
//                     href="  care@fundsontime.com"
//                     className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium"
//                   >
//                     care@fundsontime.com
//                   </a>
//                 </div>
//               </motion.li>

//               <motion.li whileHover={{ x: 5 }} className="flex items-start">
//                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mr-3 mt-1 shadow-sm">
//                   <span className="text-emerald-600">📞</span>
//                 </div>
//                 <div>
//                   <div className="text-gray-500 text-sm font-medium">Phone</div>
//                   <a
//                     href="tel:18003092760"
//                     className="text-gray-900 hover:text-emerald-600 transition-colors duration-300 font-medium"
//                   >
//                     +91-7290999972
//                   </a>
//                 </div>
//               </motion.li>

//               <motion.li whileHover={{ x: 5 }} className="flex items-start">
//                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mr-3 mt-1 shadow-sm">
//                   <span className="text-purple-600">📍</span>
//                 </div>
//                 <div>
//                   <div className="text-gray-500 text-sm font-medium">
//                     Address
//                   </div>
//                   <div className="text-gray-700 text-sm leading-relaxed font-medium">
//                     3rd, 317, Usha Kiran Building, Azadpur Road,
//                     <br />
//                     Azadpur, New Delhi, North West Delhi,
//                     <br />
//                     Delhi, 110033, India
//                   </div>
//                 </div>
//               </motion.li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* Newsletter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-12"
//         >
//           <div className="max-w-2xl mx-auto">
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                 Stay Updated with Financial Insights
//               </h3>
//               <p className="text-gray-600">
//                 Subscribe to our newsletter for the latest financial trends and
//                 updates
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-6 py-4 rounded-xl bg-white backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-800 to-cyan-800 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
//               >
//                 Subscribe
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Divider */}
//         <div className="relative h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8" />

//         {/* Bottom Bar */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-gray-500 text-sm text-center md:text-left">
//             <p className="font-medium">
//               © {currentYear} FundsOnTime All rights reserved.
//               <span className="hidden md:inline"> | </span>
//               <span className="block md:inline mt-2 md:mt-0 md:ml-2">
//                 Registered with RBI as NBFC - FundsOnTime
//               </span>
//             </p>
//           </div>

//           <div className="flex items-center space-x-6">
//             <Link
//               href="/privacy"
//               className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 font-medium"
//             >
//               Privacy Policy
//             </Link>
//             {/* <Link
//               href="/terms"
//               className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 font-medium"
//             >
//               Terms of Service
//             </Link> */}
//             <Link
//               href="/disclaimer"
//               className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 font-medium"
//             >
//               Disclaimer
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Floating Chat Button */}
//       {/* <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 1 }}
//         className="fixed bottom-6 right-6 z-50"
//       >
//         <motion.button
//           whileHover={{ scale: 1.1, rotate: 5 }}
//           whileTap={{ scale: 0.9 }}
//           className="group relative"
//         >
//           <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
//           <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/30">
//             <span className="text-white text-2xl">💬</span>
//           </div>
//           <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 border-2 border-white animate-ping shadow-sm" />
//         </motion.button>
//       </motion.div> */}
//       {/* <ChatBot /> */}
//     </footer>
//   );
// }
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMounted, setIsMounted] = useState(false);
  const [randomDots, setRandomDots] = useState<
    Array<{
      left: string;
      top: string;
      animationDuration: string;
      animationDelay: string;
      id: number;
    }>
  >([]);

  useEffect(() => {
    // Generate random dots only on client side
    const dots = Array.from({ length: 20 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${3 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 2}s`,
      id: i,
    }));
    setRandomDots(dots);
    setIsMounted(true);
  }, []);

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const socialLinks = [
    {
      icon: "/social/facebook.png",
      href: "https://facebook.com/profile.php?id=61580553355990",
      label: "Facebook",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: "/social/instagram.png",
      href: "https://instagram.com/funds-on-time/",
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: "/social/x.png",
      href: "https://x.com",
      label: "X (Twitter)",
      color: "from-gray-800 to-black",
    },
  ];

  const policies = [
    { title: "KYC Policy", href: "/policy/KYC_Policy.pdf" },
    { title: "Interest Rate Policy", href: "/policy/interestRate" },
    { title: "Grievance Redressal Policy", href: "/policy/grievance" },
    { title: "Fair Practices Code", href: "/policy/fair" },
  ];

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contactUs" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 pt-20 pb-12 overflow-hidden border-t border-gray-200">
      {/* Background Elements - Client-side only */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-100/30 to-transparent" />

          {/* Floating Particles */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            {randomDots.map((dot) => (
              <div
                key={dot.id}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: dot.left,
                  top: dot.top,
                  animation: `float ${dot.animationDuration} ease-in-out infinite`,
                  animationDelay: dot.animationDelay,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block mb-6"
            >
              <Link href="#" className="flex items-center space-x-2">
                <div className="w-50 h-10 flex items-center justify-center">
                  <img src="FOTlogo3.png" alt="FundsOnTime Logo" />
                </div>
              </Link>
            </motion.div>

            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Your trusted partner for comprehensive financial solutions. We
              empower businesses and individuals with strategic financial
              guidance and innovative solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:border-transparent shadow-sm hover:shadow-md"
                    aria-label={social.label}
                  >
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-10 h-10 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-300">
              Our Policies
            </h3>
            <ul className="space-y-3">
              {policies.map((policy, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href={policy.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {policy.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-300">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mr-3 mt-1 shadow-sm">
                  <span className="text-blue-600">📧</span>
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-medium">Email</div>
                  <a
                    href="mailto:care@fundsontime.com"
                    className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    care@fundsontime.com
                  </a>
                </div>
              </motion.li>

              <motion.li whileHover={{ x: 5 }} className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mr-3 mt-1 shadow-sm">
                  <span className="text-emerald-600">📞</span>
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-medium">Phone</div>
                  <a
                    href="tel:+9172XXXXXX72"
                    className="text-gray-900 hover:text-emerald-600 transition-colors duration-300 font-medium"
                  >
                    +91-7290999972
                  </a>
                </div>
              </motion.li>

              <motion.li whileHover={{ x: 5 }} className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mr-3 mt-1 shadow-sm">
                  <span className="text-purple-600">📍</span>
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-medium">
                    Address
                  </div>
                  <div className="text-gray-700 text-sm leading-relaxed font-medium">
                    3rd, 317, Usha Kiran Building, Azadpur Road,
                    <br />
                    Azadpur, New Delhi, North West Delhi,
                    <br />
                    Delhi, 110033, India
                  </div>
                </div>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Stay Updated with Financial Insights
              </h3>
              <p className="text-gray-600">
                Subscribe to our newsletter for the latest financial trends and
                updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-800 to-cyan-800 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm text-center md:text-left">
            <p className="font-medium">
              © {currentYear} FundsOnTime All rights reserved.
              <span className="hidden md:inline"> | </span>
              <span className="block md:inline mt-2 md:mt-0 md:ml-2">
                Registered with RBI as NBFC - FundsOnTime
              </span>
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 font-medium"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      {/* Add keyframes to global CSS instead of style jsx */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          75% {
            transform: translateY(10px) translateX(-5px);
          }
        }
      `}</style>
    </footer>
  );
}
