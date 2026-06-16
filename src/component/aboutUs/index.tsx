"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiReceiveMoney } from "react-icons/gi";
import { PiBagFill } from "react-icons/pi";
import {
  MdEmergency,
  MdAccountBalance,
  MdVerified,
  MdBusiness,
} from "react-icons/md";
import React from "react";

const cards = [
  {
    icon: GiReceiveMoney,
    title: "Instant Personal Loans",
    description:
      "Quick and hassle-free loans to cover urgent personal needs such as education, medical expenses, travel, or family events. Disbursal within hours, subject to credit checks and documentation.",
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    delay: 0.1,
  },
  {
    icon: PiBagFill,
    title: "Business Loans for MSMEs",
    description:
      "Flexible financing options for micro, small, and medium enterprises to manage working capital, expand operations, or support business continuity with confidence.",
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    delay: 0.2,
  },
  {
    icon: MdEmergency,
    title: "Emergency Credit Facility",
    description:
      "Short-term loan options to help manage unplanned or urgent expenses. Designed for speed, ease, and financial security during emergencies.",
    gradient: "from-violet-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
    iconColor: "text-violet-600",
    delay: 0.3,
  },
  {
    icon: MdAccountBalance,
    title: "Income-Based Unsecured Loans",
    description:
      "Loans structured around your income profile - no collateral required. Ideal for salaried individuals and self-employed professionals seeking quick, responsible credit.",
    gradient: "from-orange-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-pink-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-600",
    delay: 0.4,
  },
  {
    icon: MdVerified,
    title: "Pre-Approved Loans",
    description:
      "Exclusively tailored for customers with strong repayment history and credit standing. Enjoy faster disbursals with little to no paperwork.",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    delay: 0.5,
  },
  {
    icon: MdBusiness,
    title: "Custom Business Solutions",
    description:
      "Tailored financial solutions designed specifically for growing businesses with unique needs and expansion plans.",
    gradient: "from-green-500 to-lime-600",
    bgColor: "bg-gradient-to-br from-green-50 to-lime-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    delay: 0.6,
  },
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -15,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-linear-to-b from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10% w-[600px] h-[600px] bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10% w-[600px] h-[600px] bg-linear-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pt-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-blue-100 to-cyan-100 backdrop-blur-sm border border-blue-200 mb-6 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-cyan-600 animate-pulse mr-2" />
            <span className="text-blue-700 text-sm font-semibold">
              About FundsOnTime
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Building Financial</span>
            <span className="block bg-linear-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Futures Together
            </span>
          </h1>

          <p className="text-xl mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for comprehensive financial solutions.
            Empowering businesses and individuals with strategic financial
            guidance and innovative solutions.
          </p>
        </motion.div>

        {/* Who We Are Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-8"
            />

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Who{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                We Are
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                FundsOnTime is a trusted digital lending platform powered by
                Tristar Fincon Credit Private Limited, an RBI-registered
                Non-Banking Financial Company (NBFC). We are committed to
                providing fast, transparent, and personalized financial
                solutions tailored to the needs of individuals and MSMEs across
                India. By combining technology with customer-centric service,
                FundsOnTime ensures a seamless borrowing experience with quick
                approvals, flexible loan options, and complete transparency at
                every step.
              </p>
              <p>
                We are committed to advancing financial inclusion by delivering
                accessible credit through technology-driven platforms, ensuring
                a seamless experience from application to disbursal. Our core
                values—integrity, responsibility, and customer-centricity—guide
                every aspect of our operations
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
          {/* Mission */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />

              {/* Content Card */}
              <div className="relative bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Making Borrowing Effortless for Everyone
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    At FundsOnTime, our mission is to make borrowing effortless
                    and transparent for everyone. We provide fast, flexible, and
                    secure personal loan solutions through a 100% digital
                    process. With a customer-first approach, we strive to
                    deliver financial support that's accessible, trustworthy,
                    and tailored to your individual needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-8 relative "
            >
              <div className=" absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-lg" />
              <img
                src="/our-mission.png"
                alt="Our Mission"
                className=" relative rounded-4xl shadow-2xl border border-gray-200 "
              />
            </motion.div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Vision Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mb-8 relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-lg" />
              <img
                src="/our-vision.png"
                alt="Our Vision"
                className="relative rounded-2xl shadow-2xl border border-gray-200"
              />
            </motion.div>

            {/* Content Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl" />

              <div className="relative bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                    <span className="text-white text-2xl">👁️</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      Our vision is to become one of India's most trusted
                      digital NBFCs by offering ethical, transparent, and
                      customer-first lending solutions. We aim to build
                      long-term relationships through responsible finance and
                      seamless digital experiences tailored to individual needs.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Our Commitment
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We are committed to integrity, regulatory compliance, and
                      delivering responsible credit with a focus on trust and
                      transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Offer Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm border border-purple-200 mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 animate-pulse mr-2" />
              <span className="text-purple-700 text-sm font-semibold">
                Our Services
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">What We</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions designed to meet your unique
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-80 scale-[0.98]"
                    : ""
                } transition-all duration-300`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-br ${card.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Card */}
                <div
                  className={`relative h-full ${card.bgColor} backdrop-blur-sm border ${card.borderColor} rounded-3xl p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Floating Number */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" as const }}
                    className="mb-6"
                  >
                    <div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} p-0.5 shadow-md`}
                    >
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient}/10 flex items-center justify-center`}
                        >
                          {React.createElement(card.icon, {
                            className: `w-8 h-8 ${card.iconColor}`,
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <span
                      className={`bg-gradient-to-r ${card.gradient} bg-clip-text`}
                    >
                      {card.title}
                    </span>
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {card.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mb-4">
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: card.delay }}
                        className={`h-full bg-linear-to-r ${card.gradient}`}
                      />
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-gray-500">Learn more</span>
                    <motion.svg
                      className="w-4 h-4 ml-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20">
            <div className="bg-gradient-to-br from-white to-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Join thousands of satisfied customers
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience the future of finance with our trusted solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-300 text-gray-800 font-semibold text-lg shadow-lg hover:shadow-xl hover:border-blue-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
