// "use client";
// import { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import type { Variants } from 'framer-motion';
// import { FcDocument } from "react-icons/fc";
// import { FaUserClock, FaMoneyCheckAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

// const solutions = [
//     {
//         title: "Add Your bank account.",
//         description: "Connect your bank account and get instant approval in 30 seconds eliminating lengthy waits and cumbersome paperwork.",
//         icon: "/whychoose1.png",
//         gradient: "from-blue-700 to-cyan-600",
//         delay: 0.1
//     },
//     {
//         title: "Complete Your KYC.",
//         description: "Finish your identity verification to start using your account fully. It's fast, secure, and required.",
//         icon: "whychoose2.png",
//         gradient: "from-blue-700 to-cyan-600",
//         delay: 0.2
//     },
//     {
//         title: "Instant disbursement in bank account.",
//         description: "No delays, no paperwork. The funds are available for you to use immediately.",
//         icon: "whychoose3.png",
//         gradient: "from-blue-700 to-cyan-600",
//         delay: 0.3
//     }
// ];

// const eligibilityCriteria = [
//     {
//         id: 'ageConfirmed',
//         icon: FaUserClock,
//         title: "Minimum Age Requirement",
//         description: "Applicant should be minimum 18 years old.",
//         gradient: "from-blue-500 to-cyan-600"
//     },
//     {
//         id: 'incomeConfirmed',
//         icon: FaMoneyCheckAlt,
//         title: "Stable Income Proof",
//         description: "Proof of stable income or employment.",
//         gradient: "from-emerald-500 to-teal-600"
//     },
//     {
//         id: 'employmentConfirmed',
//         icon: FaCalendarAlt,
//         title: "Employment Duration",
//         description: "Must have a minimum of three months of stable employment.",
//         gradient: "from-violet-500 to-purple-600"
//     }
// ];

// export default function Process() {
//     const [showEligibilityForm, setShowEligibilityForm] = useState(false);
//     const [formData, setFormData] = useState({
//         ageConfirmed: false,
//         incomeConfirmed: false,
//         employmentConfirmed: false,
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         dateOfBirth: '',
//         monthlyIncome: '',
//         employmentDuration: ''
//     });
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const containerVariants: Variants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.15,
//                 delayChildren: 0.2,
//                 duration: 0.8
//             }
//         }
//     };

//     const cardVariants: Variants = {
//         hidden: {
//             y: 60,
//             opacity: 0,
//         },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 15,
//                 duration: 0.7
//             }
//         },
//         hover: {
//             y: -12,
//             scale: 1.03,
//             boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
//             transition: {
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 20,
//                 duration: 0.4
//             }
//         }
//     };

//     const iconVariants: Variants = {
//         hidden: { scale: 0, rotate: -180 },
//         visible: {
//             scale: 1,
//             rotate: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 200,
//                 damping: 15,
//                 duration: 0.8
//             }
//         },
//         hover: {
//             rotate: 360,
//             scale: 1.1,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeInOut"
//             }
//         }
//     };

//     const progressBarVariants: Variants = {
//         hidden: { width: 0 },
//         visible: {
//             width: "100%",
//             transition: {
//                 duration: 1.5,
//                 delay: 0.3,
//                 ease: "easeInOut"
//             }
//         }
//     };

//     const floatAnimation = {
//         y: [-5, 5, -5],
//         transition: {
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut" as const
//         }
//     };

//     const pulseAnimation = {
//         scale: [1, 1.05, 1],
//         transition: {
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut" as const
//         }
//     };

//     const handleCheckboxChange = (id: string) => {
//         setFormData(prev => ({
//             ...prev,
//             [id]: !prev[id as keyof typeof prev]
//         }));
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         // Check if all checkboxes are checked
//         const allConfirmed = eligibilityCriteria.every(
//             criteria => formData[criteria.id as keyof typeof formData]
//         );

//         if (allConfirmed) {
//             setIsSubmitted(true);
//             // Simulate API call
//             setTimeout(() => {
//                 // Reset form after showing success
//                 // setFormData({
//                 //     ageConfirmed: false,
//                 //     incomeConfirmed: false,
//                 //     employmentConfirmed: false,
//                 //     firstName: '',
//                 //     lastName: '',
//                 //     email: '',
//                 //     phone: '',
//                 //     monthlyIncome: '',
//                 //     employmentDuration: ''
//                 // });
//                 setIsSubmitted(false);
//                 setShowEligibilityForm(false);
//             }, 3000);
//         } else {
//             alert("Please confirm all eligibility criteria before proceeding.");
//         }
//     };

//     const isAllConfirmed = eligibilityCriteria.every(
//         criteria => formData[criteria.id as keyof typeof formData]
//     );

//     return (
//         <section className="relative py-12 bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden">
//             {/* Background Elements with new animations */}
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute top-1/3 left-10% w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl">
//                     <motion.div
//                         animate={{
//                             scale: [1, 1.2, 1],
//                             opacity: [0.1, 0.2, 0.1]
//                         }}
//                         transition={{
//                             duration: 4,
//                             repeat: Infinity,
//                             ease: "easeInOut"
//                         }}
//                         className="w-full h-full rounded-full"
//                     />
//                 </div>

//                 <div className="absolute bottom-1/3 right-10% w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl">
//                     <motion.div
//                         animate={{
//                             scale: [1, 1.3, 1],
//                             opacity: [0.1, 0.15, 0.1]
//                         }}
//                         transition={{
//                             duration: 5,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                             delay: 1
//                         }}
//                         className="w-full h-full rounded-full"
//                     />
//                 </div>

//                 {/* Animated floating dots */}
//                 <div className="absolute inset-0 opacity-10">
//                     {Array.from({ length: 20 }).map((_, i) => (
//                         <motion.div
//                             key={i}
//                             className="absolute w-2 h-2 bg-blue-400 rounded-full"
//                             animate={{
//                                 y: [-10, 10, -10],
//                                 x: [-5, 5, -5]
//                             }}
//                             transition={{
//                                 duration: 3 + Math.random() * 2,
//                                 repeat: Infinity,
//                                 delay: Math.random() * 2,
//                                 ease: "easeInOut"
//                             }}
//                             style={{
//                                 left: `${Math.random() * 100}%`,
//                                 top: `${Math.random() * 100}%`,
//                             }}
//                         />
//                     ))}
//                 </div>

//                 {/* Animated grid lines */}
//                 <div className="absolute inset-0 opacity-[0.02]">
//                     <motion.div
//                         className="absolute inset-0"
//                         style={{
//                             backgroundImage: `
//                 linear-gradient(to right, #3b82f6 1px, transparent 1px),
//                 linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
//               `,
//                             backgroundSize: '80px 80px'
//                         }}
//                         animate={{
//                             backgroundPosition: ['0px 0px', '80px 80px', '0px 0px']
//                         }}
//                         transition={{
//                             duration: 20,
//                             repeat: Infinity,
//                             ease: "linear"
//                         }}
//                     />
//                 </div>
//             </div>

//             <div className="relative z-10 container mx-auto px-4">
//                 {/* Header with new animations */}
//                 <motion.div
//                     initial={{ y: 40, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{
//                         type: "spring",
//                         stiffness: 100,
//                         damping: 20,
//                         duration: 0.8
//                     }}
//                     className="text-center mb-16"
//                 >
//                     <motion.div
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         whileInView={{ scale: 1, opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2, duration: 0.5 }}
//                         className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 backdrop-blur-sm border border-emerald-200 mb-6 shadow-sm"
//                     >
//                         <motion.div
//                             animate={pulseAnimation}
//                             className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 mr-2"
//                         />
//                         <span className="text-emerald-700 text-sm font-semibold">Our Process</span>
//                     </motion.div>

//                     <motion.h2
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
//                         className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
//                     >
//                         <motion.span
//                             initial={{ y: 20, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             transition={{ duration: 0.6 }}
//                             className="text-gray-900 block"
//                         >
//                             Our Three-Step
//                         </motion.span>
//                         <motion.span
//                             initial={{ y: 20, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                             className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
//                         >
//                             Simple Process
//                         </motion.span>
//                     </motion.h2>

//                     <motion.p
//                         initial={{ y: 20, opacity: 0 }}
//                         whileInView={{ y: 0, opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6, delay: 0.4 }}
//                         className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
//                     >
//                         Clear, streamlined steps designed to deliver intelligent financial solutions with ease.
//                     </motion.p>
//                 </motion.div>

//                 {/* Solutions Grid with new card animations */}
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: "-100px" }}
//                     className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8"
//                 >
//                     {solutions.map((solution, index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardVariants}
//                             whileHover="hover"
//                             custom={index}
//                             className="group relative"
//                         >
//                             {/* Glow Border Effect with animation */}
//                             <motion.div
//                                 animate={{
//                                     opacity: [0, 0.3, 0],
//                                 }}
//                                 transition={{
//                                     duration: 3,
//                                     repeat: Infinity,
//                                     delay: index * 0.5
//                                 }}
//                                 className={`absolute -inset-0.5 bg-gradient-to-br ${solution.gradient} rounded-3xl blur`}
//                             />

//                             {/* Main Card */}
//                             <div className="relative h-full bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

//                                 {/* Number Badge with bounce animation */}
//                                 <motion.div
//                                     initial={{ scale: 0 }}
//                                     whileInView={{ scale: 1 }}
//                                     viewport={{ once: true }}
//                                     transition={{
//                                         type: "spring",
//                                         stiffness: 200,
//                                         damping: 15,
//                                         delay: index * 0.1
//                                     }}
//                                     className="absolute -top-2 -left-2 w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex items-center justify-center shadow-lg"
//                                 >
//                                     <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                                         {index + 1}
//                                     </span>
//                                 </motion.div>

//                                 {/* Icon Section with new animation */}
//                                 <motion.div
//                                     variants={iconVariants}
//                                     initial="hidden"
//                                     whileInView="visible"
//                                     whileHover="hover"
//                                     viewport={{ once: true }}
//                                     className="relative mb-8"
//                                 >
//                                     <div className={`relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${solution.gradient} p-0.5 shadow-md`}>
//                                         <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
//                                             <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient}/10 flex items-center justify-center`}>
//                                                 <img
//                                                     src={solution.icon}
//                                                     alt={solution.title}
//                                                     className="w-14 h-14 object-contain"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Floating Animation */}
//                                     <motion.div
//                                         animate={floatAnimation}
//                                         className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"
//                                     >
//                                         <motion.div
//                                             animate={pulseAnimation}
//                                             className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600"
//                                         />
//                                     </motion.div>
//                                 </motion.div>

//                                 {/* Content */}
//                                 <motion.h3
//                                     initial={{ opacity: 0, y: 10 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: index * 0.1 + 0.3 }}
//                                     whileHover={{ scale: 1.02 }}
//                                     className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 group-hover:text-transparent transition-all duration-300 min-h-[60px]"
//                                 >
//                                     <span className={`bg-gradient-to-r ${solution.gradient} bg-clip-text`}>
//                                         {solution.title}
//                                     </span>
//                                 </motion.h3>

//                                 <motion.p
//                                     initial={{ opacity: 0 }}
//                                     whileInView={{ opacity: 1 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: index * 0.1 + 0.4 }}
//                                     className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
//                                 >
//                                     {solution.description}
//                                 </motion.p>

//                                 {/* Corner Accents with glow animation */}
//                                 <motion.div
//                                     animate={{
//                                         opacity: [0, 0.5, 0],
//                                     }}
//                                     transition={{
//                                         duration: 2,
//                                         repeat: Infinity,
//                                         delay: index * 0.2
//                                     }}
//                                     className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600"
//                                 />
//                                 <motion.div
//                                     animate={{
//                                         opacity: [0, 0.5, 0],
//                                     }}
//                                     transition={{
//                                         duration: 2,
//                                         repeat: Infinity,
//                                         delay: index * 0.2 + 0.5
//                                     }}
//                                     className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600"
//                                 />
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* Stats Section with wave animation */}
//                 <motion.div
//                     initial={{ y: 40, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{
//                         duration: 0.8,
//                         delay: 0.5,
//                         staggerChildren: 0.1
//                     }}
//                     className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
//                 >
//                     {[
//                         { value: "18+", label: "Minimum Age", color: "from-blue-500 to-cyan-600" },
//                         { value: "35000+", label: "Minimum Salary", color: "from-emerald-500 to-teal-600" },
//                         { value: "3 Months+", label: "Employment Tenure", color: "from-violet-500 to-purple-600" }
//                     ].map((stat, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ scale: 0.9, opacity: 0 }}
//                             whileInView={{ scale: 1, opacity: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 + 0.5 }}
//                             whileHover={{
//                                 y: -8,
//                                 scale: 1.05,
//                                 transition: { type: "spring", stiffness: 300, damping: 20 }
//                             }}
//                             className="group relative bg-white backdrop-blur-sm border border-gray-200/80 rounded-2xl p-6 text-center cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden"
//                         >
//                             {/* Animated background wave */}
//                             <motion.div
//                                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                                 animate={{
//                                     x: ['-100%', '100%']
//                                 }}
//                                 transition={{
//                                     duration: 2,
//                                     repeat: Infinity,
//                                     ease: "linear",
//                                     delay: index * 0.3
//                                 }}
//                             />

//                             <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 relative z-10`}>
//                                 {stat.value}
//                             </div>
//                             <div className="text-gray-700 text-sm font-semibold relative z-10">{stat.label}</div>

//                             {/* Animated Underline with grow animation */}
//                             <motion.div
//                                 initial={{ width: 0 }}
//                                 whileInView={{ width: "60%" }}
//                                 whileHover={{ width: "100%" }}
//                                 transition={{ duration: 0.5, delay: 0.2 }}
//                                 className={`mt-4 h-0.5 bg-gradient-to-r ${stat.color} mx-auto`}
//                             />
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* CTA Section with bounce animation */}
//                 <motion.div
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{
//                         type: "spring",
//                         stiffness: 150,
//                         damping: 20,
//                         duration: 0.8,
//                         delay: 0.7
//                     }}
//                     className="mt-20 text-center"
//                 >
//                     <div className="inline-block max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20">
//                         <motion.div
//                             animate={{
//                                 y: [0, -5, 0],
//                             }}
//                             transition={{
//                                 duration: 4,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                             }}
//                             className="bg-gradient-to-br from-white to-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-12 shadow-2xl"
//                         >
//                             <motion.h3
//                                 initial={{ y: 20, opacity: 0 }}
//                                 whileInView={{ y: 0, opacity: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.6 }}
//                                 className="text-3xl font-bold text-gray-900 mb-6"
//                             >
//                                 Take the First Step Today
//                             </motion.h3>

//                             <motion.p
//                                 initial={{ y: 20, opacity: 0 }}
//                                 whileInView={{ y: 0, opacity: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.6, delay: 0.2 }}
//                                 className="text-gray-600 mb-8 max-w-2xl mx-auto"
//                             >
//                                 Confirm eligibility and enjoy instant, secure bank disbursement.
//                             </motion.p>

//                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                 <motion.button
//                                     onClick={() => setShowEligibilityForm(true)}
//                                     initial={{ scale: 0.9, opacity: 0 }}
//                                     whileInView={{ scale: 1, opacity: 1 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5, delay: 0.4 }}
//                                     whileHover={{
//                                         scale: 1.05,
//                                         y: -3,
//                                         transition: { type: "spring", stiffness: 400, damping: 25 }
//                                     }}
//                                     whileTap={{ scale: 0.95 }}
//                                     className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl relative overflow-hidden"
//                                 >
//                                     {/* Button shine effect */}
//                                     <motion.div
//                                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                                         animate={{
//                                             x: ['-100%', '100%']
//                                         }}
//                                         transition={{
//                                             duration: 1.5,
//                                             repeat: Infinity,
//                                             ease: "linear"
//                                         }}
//                                     />
//                                     <span className="relative z-10">Check Eligibility</span>
//                                 </motion.button>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Eligibility Form Modal */}
//             <AnimatePresence>
//                 {showEligibilityForm && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//                         onClick={() => setShowEligibilityForm(false)}
//                     >
//                         <motion.div
//                             initial={{ scale: 0.9, y: 20 }}
//                             animate={{ scale: 1, y: 0 }}
//                             exit={{ scale: 0.9, y: 20 }}
//                             onClick={(e) => e.stopPropagation()}
//                             className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//                         >
//                             <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
//                                 <div>
//                                     <h3 className="text-2xl font-bold text-gray-900">Check Your Eligibility</h3>
//                                     <p className="text-gray-600">Confirm your details to proceed with the loan application</p>
//                                 </div>
//                                 <button
//                                     onClick={() => setShowEligibilityForm(false)}
//                                     className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//                                 >
//                                     <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>

//                             <div className="p-6">
//                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                                     {/* Eligibility Criteria */}
//                                     <div className="space-y-6">
//                                         <h4 className="text-xl font-bold text-gray-900 mb-6">Eligibility Criteria</h4>

//                                         {eligibilityCriteria.map((criteria, index) => (
//                                             <motion.div
//                                                 key={criteria.id}
//                                                 initial={{ x: -20, opacity: 0 }}
//                                                 animate={{ x: 0, opacity: 1 }}
//                                                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                                                 whileHover={{ y: -4 }}
//                                                 onClick={() => handleCheckboxChange(criteria.id)}
//                                                 className={`relative group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${formData[criteria.id as keyof typeof formData]
//                                                     ? `border-transparent bg-gradient-to-br ${criteria.gradient} text-white`
//                                                     : 'border-gray-200 bg-white hover:border-gray-300'
//                                                     } shadow-lg hover:shadow-xl`}
//                                             >
//                                                 {/* Checkbox */}
//                                                 <div className="absolute -top-3 -right-3">
//                                                     <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formData[criteria.id as keyof typeof formData]
//                                                         ? 'bg-white text-green-500'
//                                                         : 'bg-gray-100 text-gray-400'
//                                                         }`}>
//                                                         {formData[criteria.id as keyof typeof formData] ? (
//                                                             <FaCheckCircle className="w-5 h-5" />
//                                                         ) : (
//                                                             <div className="w-4 h-4 rounded border-2 border-gray-300" />
//                                                         )}
//                                                     </div>
//                                                 </div>

//                                                 <div className="flex items-start space-x-4">
//                                                     <div className={`p-3 rounded-xl ${formData[criteria.id as keyof typeof formData]
//                                                         ? 'bg-white/20'
//                                                         : `bg-linear-to-br ${criteria.gradient}`
//                                                         }`}>
//                                                         <criteria.icon className={`w-6 h-6 ${formData[criteria.id as keyof typeof formData]
//                                                             ? 'text-white'
//                                                             : 'text-white'
//                                                             }`} />
//                                                     </div>

//                                                     <div className="flex-1">
//                                                         <h4 className={`font-bold text-lg mb-2 ${formData[criteria.id as keyof typeof formData]
//                                                             ? 'text-white'
//                                                             : 'text-gray-900'
//                                                             }`}>
//                                                             {criteria.title}
//                                                         </h4>
//                                                         <p className={`${formData[criteria.id as keyof typeof formData]
//                                                             ? 'text-blue-100'
//                                                             : 'text-gray-600'
//                                                             }`}>
//                                                             {criteria.description}
//                                                         </p>
//                                                     </div>
//                                                 </div>

//                                                 <div className="mt-4 flex items-center">
//                                                     <span className={`text-sm font-medium ${formData[criteria.id as keyof typeof formData]
//                                                         ? 'text-blue-100'
//                                                         : 'text-gray-500'
//                                                         }`}>
//                                                         {formData[criteria.id as keyof typeof formData] ? 'Confirmed ✓' : 'Click to confirm'}
//                                                     </span>
//                                                 </div>
//                                             </motion.div>
//                                         ))}

//                                         {/* Progress Indicator */}
//                                         <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
//                                             <div className="flex justify-between items-center mb-4">
//                                                 <span className="text-gray-700 font-semibold">Eligibility Progress</span>
//                                                 <span className="text-gray-900 font-bold">
//                                                     {eligibilityCriteria.filter(c => formData[c.id as keyof typeof formData]).length} / {eligibilityCriteria.length}
//                                                 </span>
//                                             </div>

//                                             <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
//                                                 <motion.div
//                                                     initial={{ width: 0 }}
//                                                     animate={{ width: `${(eligibilityCriteria.filter(c => formData[c.id as keyof typeof formData]).length / eligibilityCriteria.length) * 100}%` }}
//                                                     transition={{ duration: 0.5 }}
//                                                     className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
//                                                 />
//                                             </div>

//                                             {isAllConfirmed && (
//                                                 <motion.div
//                                                     initial={{ scale: 0.9, opacity: 0 }}
//                                                     animate={{ scale: 1, opacity: 1 }}
//                                                     className="mt-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl"
//                                                 >
//                                                     <div className="flex items-center">
//                                                         <FaCheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
//                                                         <span className="text-emerald-700 font-semibold">
//                                                             All criteria confirmed! You're eligible to proceed.
//                                                         </span>
//                                                     </div>
//                                                 </motion.div>
//                                             )}
//                                         </div>
//                                     </div>

//                                     {/* Application Form */}
//                                     <div>
//                                         <h4 className="text-xl font-bold text-gray-900 mb-6">Your Information</h4>

//                                         {isSubmitted ? (
//                                             <motion.div
//                                                 initial={{ scale: 0.9, opacity: 0 }}
//                                                 animate={{ scale: 1, opacity: 1 }}
//                                                 className="text-center py-12"
//                                             >
//                                                 <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
//                                                     <FaCheckCircle className="w-10 h-10 text-white" />
//                                                 </div>
//                                                 <h4 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h4>
//                                                 <p className="text-gray-600 mb-6">
//                                                     Your eligibility has been confirmed. Our team will contact you shortly.
//                                                 </p>
//                                                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                                     <button
//                                                         onClick={() => setIsSubmitted(false)}
//                                                         className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-shadow duration-300"
//                                                     >
//                                                         Submit Another Application
//                                                     </button>
//                                                     <button
//                                                         onClick={() => {
//                                                             setIsSubmitted(false);
//                                                             setShowEligibilityForm(false);
//                                                         }}
//                                                         className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300"
//                                                     >
//                                                         Close
//                                                     </button>
//                                                 </div>
//                                             </motion.div>
//                                         ) : (
//                                             <form onSubmit={handleSubmit} className="space-y-6">
//                                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                                     <div>
//                                                         <label className="block text-gray-700 text-sm font-medium mb-2">
//                                                             First Name *
//                                                         </label>
//                                                         <input
//                                                             type="text"
//                                                             name="firstName"
//                                                             value={formData.firstName}
//                                                             onChange={handleInputChange}
//                                                             required
//                                                             className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                                                             placeholder="Enter first name"
//                                                         />
//                                                     </div>
//                                                     <div>
//                                                         <label className="block text-gray-700 text-sm font-medium mb-2">
//                                                             Last Name *
//                                                         </label>
//                                                         <input
//                                                             type="text"
//                                                             name="lastName"
//                                                             value={formData.lastName}
//                                                             onChange={handleInputChange}
//                                                             required
//                                                             className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                                                             placeholder="Enter last name"
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div>
//                                                     <label className="block text-gray-700 text-sm font-medium mb-2">
//                                                         Email Address *
//                                                     </label>
//                                                     <input
//                                                         type="email"
//                                                         name="email"
//                                                         value={formData.email}
//                                                         onChange={handleInputChange}
//                                                         required
//                                                         className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                                                         placeholder="Enter email address"
//                                                     />
//                                                 </div>

//                                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                                     <div>
//                                                         <label className="block text-gray-700 text-sm font-medium mb-2">
//                                                             Phone Number *
//                                                         </label>
//                                                         <input
//                                                             type="tel"
//                                                             name="phone"
//                                                             value={formData.phone}
//                                                             onChange={handleInputChange}
//                                                             required
//                                                             className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                                                             placeholder="Enter phone number"
//                                                         />
//                                                     </div>

//                                                     <div>
//                                                         <label className="block text-gray-700 text-sm font-medium mb-2">
//                                                             Date of Birth *
//                                                         </label>
//                                                         <input
//                                                             type="date"
//                                                             name="dateOfBirth"
//                                                             value={formData.dateOfBirth}
//                                                             onChange={handleInputChange}
//                                                             required
//                                                             max={new Date().toISOString().split('T')[0]}
//                                                             className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                                                         />
//                                                         <p className="text-gray-500 text-xs mt-2">
//                                                             Must be at least 18 years old
//                                                         </p>
//                                                     </div>
//                                                 </div>

//                                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                                     <div>
//                                                         <label className="block text-gray-700 text-sm font-medium mb-2">
//                                                             Monthly Income (₹) *
//                                                         </label>
//                                                         <input
//                                                             type="number"
//                                                             name="monthlyIncome"
//                                                             value={formData.monthlyIncome}
//                                                             onChange={handleInputChange}
//                                                             required
//                                                             min="0"
//                                                             className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                                                             placeholder="e.g., 50000"
//                                                         />
//                                                     </div>
//                                                     <div>
//                                                         <label className="block text-gray-700 text-sm font-medium mb-2">
//                                                             Employment Duration *
//                                                         </label>
//                                                         <input
//                                                             type="text"
//                                                             name="employmentDuration"
//                                                             value={formData.employmentDuration}
//                                                             onChange={handleInputChange}
//                                                             required
//                                                             className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//                                                             placeholder="e.g., 6 months"
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div className="pt-4 space-y-4">
//                                                     <motion.button
//                                                         type="submit"
//                                                         disabled={!isAllConfirmed}
//                                                         whileHover={{ scale: isAllConfirmed ? 1.02 : 1 }}
//                                                         whileTap={{ scale: isAllConfirmed ? 0.98 : 1 }}
//                                                         className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${isAllConfirmed
//                                                             ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-xl shadow-lg'
//                                                             : 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                                                             }`}
//                                                     >
//                                                         {isAllConfirmed ? 'Proceed with Application' : 'Confirm All Eligibility Criteria First'}
//                                                     </motion.button>

//                                                     {!isAllConfirmed && (
//                                                         <p className="text-center text-gray-500 text-sm">
//                                                             Please confirm all eligibility criteria before proceeding.
//                                                         </p>
//                                                     )}

//                                                     {/* Reset Button */}
//                                                     <div className="flex flex-col sm:flex-row gap-3">
//                                                         <motion.button
//                                                             type="button"
//                                                             onClick={() => {
//                                                                 setFormData({
//                                                                     ageConfirmed: false,
//                                                                     incomeConfirmed: false,
//                                                                     employmentConfirmed: false,
//                                                                     firstName: '',
//                                                                     lastName: '',
//                                                                     email: '',
//                                                                     phone: '',
//                                                                     monthlyIncome: '',
//                                                                     employmentDuration: '',
//                                                                     dateOfBirth: ''
//                                                                 });
//                                                             }}
//                                                             whileHover={{ scale: 1.02 }}
//                                                             whileTap={{ scale: 0.98 }}
//                                                             className="w-full py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2"
//                                                         >
//                                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                                                             </svg>
//                                                             Reset Form
//                                                         </motion.button>

//                                                         <motion.button
//                                                             type="button"
//                                                             onClick={() => setShowEligibilityForm(false)}
//                                                             whileHover={{ scale: 1.02 }}
//                                                             whileTap={{ scale: 0.98 }}
//                                                             className="w-full py-3 rounded-xl border-2 border-red-300 text-red-600 font-semibold hover:bg-red-50 hover:border-red-400 transition-all duration-300 flex items-center justify-center gap-2"
//                                                         >
//                                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                                             </svg>
//                                                             Cancel
//                                                         </motion.button>
//                                                     </div>
//                                                 </div>
//                                             </form>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </section>
//     );
// }

"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaUserClock,
  FaMoneyCheckAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const solutions = [
  {
    title: "Add Your Bank Account",
    description:
      "Connect your bank account and get instant approval in 30 seconds eliminating lengthy waits and cumbersome paperwork.",
    icon: "/whychoose1.png",
    step: "01",
  },
  {
    title: "Complete Your KYC",
    description:
      "Finish your identity verification to start using your account fully. It's fast, secure, and required.",
    icon: "/whychoose2.png",
    step: "02",
  },
  {
    title: "Instant Disbursement",
    description:
      "No delays, no paperwork. The funds are available for you to use immediately.",
    icon: "/whychoose3.png",
    step: "03",
  },
];

const eligibilityCriteria = [
  {
    id: "ageConfirmed",
    icon: FaUserClock,
    title: "Minimum Age Requirement",
    description: "Applicant should be minimum 18 years old.",
  },
  {
    id: "incomeConfirmed",
    icon: FaMoneyCheckAlt,
    title: "Stable Income Proof",
    description: "Proof of stable income or employment.",
  },
  {
    id: "employmentConfirmed",
    icon: FaCalendarAlt,
    title: "Employment Duration",
    description: "Must have a minimum of three months of stable employment.",
  },
];

export default function Process() {
  const [showEligibilityForm, setShowEligibilityForm] = useState(false);
  const [formData, setFormData] = useState({
    ageConfirmed: false,
    incomeConfirmed: false,
    employmentConfirmed: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    monthlyIncome: "",
    employmentDuration: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckboxChange = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allConfirmed = eligibilityCriteria.every(
      (criteria) => formData[criteria.id as keyof typeof formData],
    );

    if (allConfirmed) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setShowEligibilityForm(false);
      }, 3000);
    }
  };

  const isAllConfirmed = eligibilityCriteria.every(
    (criteria) => formData[criteria.id as keyof typeof formData],
  );

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-transparent pointer-events-none" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 inline-block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Simple, Fast, and Secure
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Get the funds you need in three straightforward steps
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 ">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Step number */}
              <div className="text-5xl font-bold text-gray-200 absolute top-6 right-6">
                {solution.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <img
                  src={solution.icon}
                  alt={solution.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-100 leading-relaxed">
                {solution.description}
              </p>

              {/* Connecting line (except last) */}
              {index < solutions.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <FaArrowRight className="text-gray-300 w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { value: "18+", label: "Minimum Age" },
            { value: "₹35,000+", label: "Minimum Salary" },
            { value: "3 Months+", label: "Employment Tenure" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Check your eligibility in minutes and get instant access to funds
            </p>
            <motion.button
              onClick={() => setShowEligibilityForm(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Check Eligibility
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Eligibility Form Modal */}
      <AnimatePresence>
        {showEligibilityForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setShowEligibilityForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Check Eligibility
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Confirm your details to proceed
                  </p>
                </div>
                <button
                  onClick={() => setShowEligibilityForm(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                      Application Submitted!
                    </h4>
                    <p className="text-gray-500 mb-8">
                      Our team will contact you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setShowEligibilityForm(false);
                      }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Eligibility Criteria */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Requirements
                      </h4>

                      {eligibilityCriteria.map((criteria) => (
                        <div
                          key={criteria.id}
                          onClick={() => handleCheckboxChange(criteria.id)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            formData[criteria.id as keyof typeof formData]
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`p-2 rounded-lg ${
                                formData[criteria.id as keyof typeof formData]
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              <criteria.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-gray-900">
                                {criteria.title}
                              </h5>
                              <p className="text-sm text-gray-500 mt-1">
                                {criteria.description}
                              </p>
                            </div>
                            <div className="mt-1">
                              {formData[
                                criteria.id as keyof typeof formData
                              ] && (
                                <FaCheckCircle className="w-5 h-5 text-blue-600" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Progress */}
                      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium text-gray-900">
                            {
                              eligibilityCriteria.filter(
                                (c) => formData[c.id as keyof typeof formData],
                              ).length
                            }
                            /{eligibilityCriteria.length}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${(eligibilityCriteria.filter((c) => formData[c.id as keyof typeof formData]).length / eligibilityCriteria.length) * 100}%`,
                            }}
                            className="h-full bg-blue-600 rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Application Form */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Your Information
                      </h4>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name"
                            required
                            className="px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                          />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Last Name"
                            required
                            className="px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                          />
                        </div>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                        />

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                        />

                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                        />

                        <input
                          type="number"
                          name="monthlyIncome"
                          value={formData.monthlyIncome}
                          onChange={handleInputChange}
                          placeholder="Monthly Income (₹)"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                        />

                        <input
                          type="text"
                          name="employmentDuration"
                          value={formData.employmentDuration}
                          onChange={handleInputChange}
                          placeholder="Employment Duration (e.g., 6 months)"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                        />

                        <button
                          type="submit"
                          disabled={!isAllConfirmed}
                          className={`w-full py-3 rounded-xl font-medium transition-all ${
                            isAllConfirmed
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "bg-gray-100 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          Submit Application
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
