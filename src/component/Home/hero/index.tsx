"use client";
import Link from "next/link";
import Image from "next/image";
import Solutions from "../corefeature";
import Features from "../services";
import Partners from "../partner";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Process from "../process/Process";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({
    0: false,
    1: false,
  });
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      delay: number;
      color: string;
    }>
  >([]);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: "/background/family.png",
      title: "Your Trusted Financial Partner",
      subtitle: "Empowering you with comprehensive financial solutions",
      buttonText: "Get Loan Now",
      gradient: "from-blue-600 to-orange-500",
    },
    {
      image: "/background/meeting.png",
      title: "Fast & Easy Personal Loans",
      subtitle:
        "Quick approval process with competitive rates to fuel your personal growth",
      buttonText: "Apply Now",
      gradient: "from-blue-600 to-orange-600",
    },
  ];

  // Generate particles only on client side
  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
      color:
        i % 3 === 0
          ? "bg-blue-200"
          : i % 3 === 1
            ? "bg-cyan-200"
            : "bg-emerald-200",
    }));
    setParticles(newParticles);
    setIsMounted(true);
  }, []);

  // Preload images
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new window.Image();
      img.src = slide.image;
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Simple server-side render with minimal content
  if (!isMounted) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-24 lg:pt-28 pb-12 lg:pb-20">
          <div className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-xl md:rounded-2xl overflow-hidden bg-gray-200 animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements - Client side only */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #040e66 1px, transparent 1px),
                             linear-gradient(to bottom, #040e66 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating Particles - Stable after hydration */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particle.color} opacity-30`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.cos(particle.id) * 10, 0],
            }}
            transition={{
              duration: 5 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-24 lg:pt-28 pb-12 lg:pb-20">
        {/* Slider Container */}
        <div
          className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-blue-200 bg-gray-100"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Loading Skeleton */}
          {!imagesLoaded[currentSlide] && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100">
              <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: imagesLoaded[currentSlide] ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  priority={currentSlide === 0}
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  className="object-cover"
                  onError={(e) => {
                    console.error(
                      `Failed to load image: ${slides[currentSlide].image}`,
                    );
                    setImagesLoaded((prev) => ({
                      ...prev,
                      [currentSlide]: true,
                    }));
                  }}
                  onLoadingComplete={() => {
                    setImagesLoaded((prev) => ({
                      ...prev,
                      [currentSlide]: true,
                    }));
                  }}
                />
              </div>

              {/* Responsive Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent md:from-black/60 md:via-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:from-black/50" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Content */}
          <div className="relative h-full flex items-center px-5 sm:px-6 md:px-8 lg:px-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm mb-3 md:mb-4"
              >
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-400 animate-pulse mr-1.5 md:mr-2" />
                <span className="text-white text-[10px] md:text-xs font-medium">
                  Smart Finance
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight text-white"
              >
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-4 md:mb-5 lg:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-none"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="https://loanapply.salaryanytime.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl text-sm sm:text-base md:text-lg font-semibold overflow-hidden"
                  >
                    <span
                      className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-95 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}
                    />
                    <span className="relative text-white flex items-center font-bold">
                      {slides[currentSlide].buttonText}
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1.5 sm:space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-4 sm:w-5 md:w-6 bg-white"
                    : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex absolute inset-y-0 left-2 right-2 md:left-4 md:right-4 items-center justify-between pointer-events-none">
            <button
              onClick={() => {
                setCurrentSlide(
                  (prev) => (prev - 1 + slides.length) % slides.length,
                );
                resetInterval();
              }}
              className="pointer-events-auto w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                resetInterval();
              }}
              className="pointer-events-auto w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            {
              value: "Instant",
              label: "Approval Time",
              desc: "Fast Processing",
            },
            {
              value: "₹50Cr+",
              label: "Funds Disbursed",
              desc: "Trusted by 5000+",
            },
            {
              value: "9.8/10",
              label: "Customer Rating",
              desc: "Excellent Service",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <h3 className="text-gray-800 text-xs sm:text-sm font-semibold">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-[10px] sm:text-xs hidden xs:block">
                {stat.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {["RBI Approved", "ISO Certified", "24/7 Support"].map(
            (badge, index) => (
              <div
                key={index}
                className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-[10px] sm:text-xs font-medium shadow-sm"
              >
                <div className="flex items-center space-x-1 sm:space-x-1.5">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>{badge}</span>
                </div>
              </div>
            ),
          )}
        </motion.div>
      </div>

      {/* Components */}
      <div className="relative z-10 mt-8 sm:mt-12 md:mt-16">
        <Process />
        <Solutions />
        <Features />
        <Partners />
      </div>
    </section>
  );
}
