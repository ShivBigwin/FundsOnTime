// "use client";

// import { motion } from 'framer-motion';
// import { useAnimate } from 'framer-motion';

// export default function Loader() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1
//       }
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut" as const
//       }
//     }
//   };

//   const particleVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0,
//       rotate: -180
//     },
//     visible: (i: number) => ({
//       opacity: [0.2, 0.8, 0.2],
//       scale: [0, 1, 0],
//       rotate: [0, 180, 360],
//       transition: {
//         duration: 1.5,
//         delay: i * 0.1,
//         repeat: Infinity,
//         ease: "easeInOut" as const
//       }
//     })
//   };

//   const logoVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.5,
//       rotate: -180
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         duration: 0.8,
//         type: "spring" as const,
//         stiffness: 200,
//         damping: 15
//       }
//     },
//     pulse: {
//       scale: [1, 1.05, 1],
//       opacity: [1, 0.8, 1],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut" as const
//       }
//     }
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut" as const
//       }
//     }
//   };

//   const waveVariants = {
//     animate: (i: number) => ({
//       scale: [1, 1.2, 1],
//       opacity: [0.2, 0.5, 0.2],
//       transition: {
//         duration: 2,
//         delay: i * 0.2,
//         repeat: Infinity,
//         ease: "easeInOut" as const
//       }
//     })
//   };

//   const lineVariants = {
//     hidden: { width: 0 },
//     visible: {
//       width: "100%",
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut" as const
//       }
//     }
//   };

//   const dotVariants = {
//     animate: (i: number) => ({
//       y: [0, -20, 0],
//       opacity: [0.3, 1, 0.3],
//       transition: {
//         duration: 1.2,
//         delay: i * 0.2,
//         repeat: Infinity,
//         ease: "easeInOut" as const
//       }
//     })
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50"
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       variants={containerVariants}
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating particles */}
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             custom={i}
//             variants={particleVariants}
//             animate="visible"
//             className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-sky-200 to-blue-300 shadow-lg"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}

//         {/* Wave pattern */}
//         <div className="absolute bottom-0 left-0 right-0 h-32">
//           {[...Array(5)].map((_, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               variants={waveVariants}
//               animate="animate"
//               className="absolute bottom-0 h-8 bg-gradient-to-t from-sky-300/30 to-transparent rounded-full"
//               style={{
//                 left: `${i * 20}%`,
//                 width: '15%',
//                 height: `${30 + i * 10}px`
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Main loader container */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center space-y-8 p-8 rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20"
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: "easeOut" as const }}
//       >
//         {/* Animated logo/icon */}
//         <div className="relative">
//           {/* Outer ring */}
//           <motion.div
//             className="absolute inset-0 rounded-full border-4 border-sky-100"
//             animate={{
//               rotate: 360,
//               scale: [1, 1.1, 1]
//             }}
//             transition={{
//               rotate: {
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "linear" as const
//               },
//               scale: {
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut" as const
//               }
//             }}
//           />

//           {/* Middle ring */}
//           <motion.div
//             className="absolute inset-4 rounded-full border-3 border-blue-200"
//             animate={{
//               rotate: -360,
//               scale: [1, 1.05, 1]
//             }}
//             transition={{
//               rotate: {
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "linear" as const
//               },
//               scale: {
//                 duration: 1.5,
//                 repeat: Infinity,
//                 ease: "easeInOut" as const
//               }
//             }}
//           />

//           {/* Main icon */}
//           <motion.div
//             variants={logoVariants}
//             animate={["visible", "pulse"]}
//             className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-xl flex items-center justify-center"
//           >
//             {/* Animated dots inside logo */}
//             <div className="absolute inset-4 flex items-center justify-center">
//               {[...Array(4)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   custom={i}
//                   variants={dotVariants}
//                   animate="animate"
//                   className="absolute w-2 h-2 bg-white rounded-full"
//                   style={{
//                     left: `${50 + 30 * Math.cos((i * Math.PI) / 2)}%`,
//                     top: `${50 + 30 * Math.sin((i * Math.PI) / 2)}%`,
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Center dot */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.3, 1],
//                 opacity: [0.8, 1, 0.8]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 ease: "easeInOut" as const
//               }}
//               className="w-4 h-4 bg-white rounded-full"
//             />
//           </motion.div>
//         </div>

//         {/* Progress indicator */}
//         <div className="w-64 space-y-4">
//           {/* Progress bar container */}
//           <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
//             <motion.div
//               variants={lineVariants}
//               animate="visible"
//               className="h-full bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500 rounded-full relative"
//             >
//               {/* Shimmer effect */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                 animate={{
//                   x: ["-100%", "100%"]
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   ease: "linear" as const
//                 }}
//               />
//             </motion.div>
//           </div>

//           {/* Animated dots below progress bar */}
//           <div className="flex justify-center space-x-2">
//             {[...Array(3)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 animate={{
//                   scale: [1, 1.3, 1],
//                   opacity: [0.5, 1, 0.5]
//                 }}
//                 transition={{
//                   duration: 1,
//                   delay: i * 0.2,
//                   repeat: Infinity,
//                   ease: "easeInOut" as const
//                 }}
//                 className="w-2 h-2 rounded-full bg-sky-400"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Loading text */}
//         <motion.div
//           variants={textVariants}
//           className="text-center space-y-2"
//         >
//           <motion.h3
//             className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
//             animate={{
//               opacity: [0.7, 1, 0.7]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut" as const
//             }}
//           >
//             Loading
//           </motion.h3>
//           <motion.p
//             className="text-sky-500/80 font-medium"
//             animate={{
//               opacity: [0.5, 1, 0.5]
//             }}
//             transition={{
//               duration: 1.5,
//               delay: 0.2,
//               repeat: Infinity,
//               ease: "easeInOut" as const
//             }}
//           >
//             Preparing your experience
//           </motion.p>
//         </motion.div>

//         {/* Percentage counter */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, ease: "easeOut" as const }}
//           className="absolute -bottom-6"
//         >
//           <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-sky-100 shadow-lg">
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="text-sm font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"
//             >
//               100%
//             </motion.span>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Additional decorative elements around the loader */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Corner decorations */}
//         {[
//           { x: "left-4", y: "top-4" },
//           { x: "right-4", y: "top-4" },
//           { x: "left-4", y: "bottom-4" },
//           { x: "right-4", y: "bottom-4" },
//         ].map((pos, i) => (
//           <motion.div
//             key={i}
//             className={`absolute ${pos.x} ${pos.y} w-16 h-16 border-2 border-sky-200/30 rounded-lg`}
//             animate={{
//               rotate: 360,
//               scale: [0.8, 1, 0.8]
//             }}
//             transition={{
//               rotate: {
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear" as const
//               },
//               scale: {
//                 duration: 3,
//                 delay: i * 0.5,
//                 repeat: Infinity,
//                 ease: "easeInOut" as const
//               }
//             }}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadingComplete?: () => void;
  minLoadTime?: number;
}

export default function Loader({
  onLoadingComplete,
  minLoadTime = 2000,
}: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const loadingPhases = [
    { progress: 20, text: "Connecting to secure servers" },
    { progress: 40, text: "Verifying credentials" },
    { progress: 60, text: "Loading your dashboard" },
    { progress: 80, text: "Syncing latest data" },
    { progress: 100, text: "Ready to go" },
  ];

  // Initialize particles on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        id: i,
      }));
      setParticles(newParticles);
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    let currentPhase = 0;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min((elapsed / minLoadTime) * 100, 100);

      setProgress(calculatedProgress);

      // Update loading text based on progress
      for (let i = loadingPhases.length - 1; i >= 0; i--) {
        if (
          calculatedProgress >= loadingPhases[i].progress &&
          i >= currentPhase
        ) {
          currentPhase = i;
          setLoadingText(loadingPhases[i].text);
          break;
        }
      }

      if (calculatedProgress >= 100) {
        clearInterval(interval);
        setIsComplete(true);
        setTimeout(() => {
          onLoadingComplete?.();
        }, 300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [minLoadTime, onLoadingComplete]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const ringVariants: Variants = {
    animate: (i: number) => ({
      rotate: 360,
      transition: {
        duration: 3 - i * 0.5,
        repeat: Infinity,
        ease: "linear",
      },
    }),
  };

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const shimmerVariants: Variants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 0.5,
      },
    },
  };

  const dotVariants: Variants = {
    animate: (i: number) => ({
      y: [0, -12, 0],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 1,
        delay: i * 0.15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-500 via-blue-500 to-slate-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22grid%22%20width=%2260%22%20height=%2260%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M%2060%200%20L%200%200%200%2060%22%20fill=%22none%22%20stroke=%22rgba(59,130,246,0.05)%22%20stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%23grid)%22%20/%3E%3C/svg%3E')" />

        {/* Floating Particles - Only render on client side */}
        {isMounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                y: [particle.y, particle.y - 100, particle.y - 200],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
      </div>

      {/* Main Loader Card */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Rings Container */}
        <div className="relative mb-10">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-500/30"
            custom={0}
            variants={ringVariants}
            animate="animate"
            style={{ width: 120, height: 120, marginLeft: -60, marginTop: -60 }}
          />

          {/* Middle Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400/40"
            custom={1}
            variants={ringVariants}
            animate="animate"
            style={{ width: 96, height: 96, marginLeft: -48, marginTop: -48 }}
          />

          {/* Inner Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400/50"
            custom={2}
            variants={ringVariants}
            animate="animate"
            style={{ width: 72, height: 72, marginLeft: -36, marginTop: -36 }}
          />

          {/* Center Logo */}
          <motion.div
            className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center"
            variants={pulseVariants}
            animate="animate"
          >
            {/* Animated Inner Elements */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full" />
              </motion.div>
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </motion.div>

          {/* Rotating Accents */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: "center",
              }}
            >
              <div
                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                style={{
                  transform: `rotate(${i * 120}deg) translateX(70px)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Brand Name */}
        <motion.h2
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% auto" }}
        >
          FundsOnTime
        </motion.h2>

        {/* Loading Text */}
        <motion.p
          className="text-blue-300/80 text-sm font-medium mb-6"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {loadingText}
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-80 mb-4">
          <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ type: "tween", ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              animate="animate"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="flex items-center gap-1 mb-6">
          <motion.span
            className="text-2xl font-bold text-white"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={Math.floor(progress)}
          >
            {Math.floor(progress)}
          </motion.span>
          <span className="text-lg text-blue-300/80">%</span>
        </div>

        {/* Animated Dots */}
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={dotVariants}
              animate="animate"
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
            />
          ))}
        </div>

        {/* Status Message */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30"
          >
            <span className="text-xs text-green-400 font-medium">
              ✓ Loading Complete
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Decorative Corner Elements */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map(
        (corner, i) => (
          <motion.div
            key={corner}
            className={`absolute ${corner.replace("-", "-")} m-8 w-16 h-16`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path
                d={`M${corner.includes("top") ? "0" : "64"} ${
                  corner.includes("left") ? "0" : "64"
                } L${corner.includes("top") ? "0" : "64"} ${
                  corner.includes("left") ? "16" : "48"
                } M${corner.includes("left") ? "16" : "48"} ${
                  corner.includes("top") ? "0" : "64"
                } L${corner.includes("left") ? "16" : "48"} ${
                  corner.includes("top") ? "16" : "48"
                }`}
                stroke="rgba(59,130,246,0.3)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        ),
      )}
    </motion.div>
  );
}
