"use client";
import Link from "next/link";
import Solutions from "../corefeature";
import Features from "../services";
import Partners from "../partner";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Process from "../process/Process";
import LoanDashboard from "../mobilesection";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: "/background/family.png",
      title: "Your Trusted Financial Partner",
      subtitle: "Empowering you with comprehensive financial solutions",
      buttonText: "Get Loan Now",
      gradient: "from-blue-800 to-orange-500",
      accentColor: "rgb(37, 99, 235)",
      textColor: "text-blue-800",
    },
    {
      image: "/background/meeting.png",
      title: "Fast & Easy Personal Loans",
      subtitle:
        "Quick approval process with competitive rates to fuel your personal growth and expansion",
      buttonText: "Apply Now",
      gradient: "from-blue-800 to-orange-700",
      accentColor: "rgb(5, 150, 105)",
      textColor: "text-gray-800",
    },
  ];

  // Floating particles effect - brighter version
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
    color:
      i % 3 === 0
        ? "bg-blue-200"
        : i % 3 === 1
          ? "bg-cyan-200"
          : "bg-emerald-200",
  }));

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

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetInterval();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Light Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #040e66 1px, transparent 1px),
                             linear-gradient(to bottom, #040e66 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Particles - Brighter */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particle.color} opacity-60`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.cos(particle.id) * 15, 0],
            }}
            transition={{
              duration: 4 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Gradient Orbs - Brighter */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Light Rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-b from-blue-100/30 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        {/* Slider Container */}
        <div
          className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 border border-blue-500"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Background Image with Light Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slides[currentSlide].image})`,
                }}
              />
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/70 via-white/10 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-blue-500/60 via-transparent to-transparent" />

              {/* Light Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-blue-100/10" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Content */}
          <div className="relative h-full flex items-center px-4 md:px-12 lg:px-24 ">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              {/* Animated Badge - Brighter */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className=" inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200/50 shadow-sm mb-6 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse mr-2" />
                <span className="text-blue-700 text-sm font-medium">
                  Smart Finance
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${slides[currentSlide].textColor}`}
              >
                <span
                  className={`bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}
                >
                  {slides[currentSlide].title.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://loanapply.salaryanytime.com"
                    className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold overflow-hidden"
                  >
                    {/* Button Background */}
                    <span
                      className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-95 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}
                    />

                    {/* Animated Border */}
                    <span className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-white/40 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Shine Effect */}
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <span className="relative text-white flex items-center font-bold">
                      {slides[currentSlide].buttonText}
                      <motion.svg
                        className="w-4 h-4 md:w-5 md:h-5 ml-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </motion.svg>
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <Link href="#">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300" />
                      <img
                        src="/playstore.jpg"
                        alt="Get on Google Play"
                        className="relative w-40 md:w-48 h-auto rounded-xl transform transition-transform duration-300 group-hover:translate-y-[-2px] shadow-xl border border-gray-200"
                      />
                    </div>
                  </Link> */}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Slide Indicators - Brighter */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? `bg-gradient-to-r ${slides[index].gradient}`
                      : "bg-gray-400/50 group-hover:bg-gray-600"
                  }`}
                />
                <div
                  className={`absolute -inset-1 md:-inset-2 rounded-full border-2 ${
                    index === currentSlide
                      ? "border-white/50"
                      : "border-transparent"
                  } transition-all duration-300`}
                />
              </motion.button>
            ))}
          </div>

          {/* Navigation Arrows - Brighter */}
          <div className="absolute inset-y-0 left-2 md:left-4 right-2 md:right-4 flex items-center justify-between pointer-events-none">
            <motion.button
              onClick={goToPrevSlide}
              className="pointer-events-auto group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent backdrop-blur-sm border border-gray-200 flex items-center justify-center group-hover:border-blue-500/50 transition-colors duration-300 shadow-lg">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-blue-600 transition-colors duration-300"
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
              </div>
            </motion.button>

            <motion.button
              onClick={goToNextSlide}
              className="pointer-events-auto group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent backdrop-blur-sm border border-gray-200 flex items-center justify-center group-hover:border-blue-500/50 transition-colors duration-300 shadow-lg">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-blue-600 transition-colors duration-300"
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
              </div>
            </motion.button>
          </div>
        </div>

        {/* Stats Bar - Brighter */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            {
              value: "Instant",
              label: "Approval Time",
              desc: "Fast Processing",
              gradient: "from-blue-800 to-cyan-500",
            },
            {
              value: "₹50Cr+",
              label: "Funds Disbursed",
              desc: "Trusted by 5000+ Businesses",
              gradient: "from-blue-800 to-cyan-500",
            },
            {
              value: "9.8/10",
              label: "Customer Rating",
              desc: "Excellent Service",
              gradient: "from-blue-800 to-cyan-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 md:p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-2xl md:text-3xl font-bold bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </span>
                <motion.div
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-linear-to-r from-blue-100 to-cyan-100 border border-blue-200 flex items-center justify-center"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-blue-600 text-xs md:text-sm">→</span>
                </motion.div>
              </div>
              <h3 className="text-gray-800 text-sm md:text-base font-semibold mb-1">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">{stat.desc}</p>

              {/* Progress Bar */}
              <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  className={`h-full bg-gradient-to-r ${stat.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {["RBI Approved", "ISO Certified", "24/7 Support"].map(
            (badge, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>{badge}</span>
                </div>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>

      {/* Components */}
      <div className="relative z-10 mt-12 md:mt-24">
        <Process />
        <Solutions />
        <Features />
        <Partners />
        {/* <LoanDashboard /> */}
      </div>
    </section>
  );
}
