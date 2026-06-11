"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const partners = [
  {
    title: "ABC",
    description:
      "Apply effortlessly and get approved in minutes with our partner. Secure transactions, quick disbursal, and a hassle-free process tailored for your urgent financial needs.",
    icon: "/icons/icon1.svg",
    link: "#",
    gradient: "from-blue-500 to-cyan-600",
    logo: "/logos/5minloan.png",
    stats: [
      { value: "2min", label: "Avg. Approval" },
      { value: "₹10L+", label: "Max Loan" },
      { value: "24/7", label: "Availability" },
    ],
  },
  {
    title: "XYZ",
    description:
      "Experience seamless loan approvals with our partner. Ideal for personal or emergency expenses, this service ensures fast access to money with minimal paperwork.",
    icon: "/icons/icon2.svg",
    link: "#",
    gradient: "from-emerald-500 to-teal-600",
    logo: "/logos/speedoloan.png",
    stats: [
      { value: "5min", label: "Processing" },
      { value: "₹5L+", label: "Disbursed" },
      { value: "99%", label: "Satisfaction" },
    ],
  },
];

export default function Partners() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative py-12 bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-10% w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10% w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />

        {/* Animated Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 15 }).map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm border border-purple-200 mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 animate-pulse mr-2" />
            <span className="text-purple-700 text-sm font-semibold">
              Trusted Partners
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Instant Loans with</span>
            <span className="block bg-linear-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Trusted Partners
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partnering with industry leaders to deliver fast, secure, and
            reliable financial solutions
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24"
        >
          {/* {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              Glow Effect

              <div className={`absolute -inset-0.5 bg-linear-to-r ${partner.gradient} rounded-4xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

              Main Card

              <div className="relative bg-white backdrop-blur-sm border border-gray-200/80 rounded-4xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                
                Partner Header

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${partner.gradient} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <img
                          src={partner.icon}
                          alt={partner.title}
                          className="w-10 h-10"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{partner.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-600 text-sm font-medium">Active Partner</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    className="relative"
                  >
                    <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-gray-50 to-white border border-gray-300 flex items-center justify-center group cursor-pointer shadow-sm hover:shadow-md">
                        <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </Link>
                  </motion.div>
                </div>

                Description

                <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {partner.description}
                </p>

                Stats

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {partner.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-200/80 shadow-sm hover:shadow-md"
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${partner.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm mt-1 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                Visit Button

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                    <div className={`w-full py-4 rounded-xl bg-gradient-to-r ${partner.gradient} text-white font-semibold text-center cursor-pointer flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                      <span>Visit {partner.title}</span>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </div>
                  </Link>
                </motion.div>

                Decorative Elements

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full translate-y-16 -translate-x-16" />
              </div>
            </motion.div>
          ))} */}
        </motion.div>

        {/* Company Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />

              {/* Logo Container */}
              <div className="relative bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center p-8 shadow-inner">
                  <img
                    src="/smiling-man.png"
                    alt="FundsOnTime"
                    className="w-full max-w-md h-auto"
                  />
                </div>

                {/* Floating Badges */}
                <div className="flex justify-center space-x-4 mt-8">
                  {["RBI Approved", "ISO Certified", "GDPR Compliant"].map(
                    (badge, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-300 text-sm text-gray-700 shadow-sm hover:shadow-md"
                      >
                        {badge}
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* First Section */}
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 1 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-6"
              />

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Where{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Technology
                </span>{" "}
                Meets
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Customer Needs!
                </span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                FundsOnTime is a 100% paperless, fully digital lending platform
                that uses cutting-edge technology to deliver fast, secure, and
                customized personal loan solutions — tailored to your urgent
                financial needs.
              </p>
            </div>

            {/* Second Section */}
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6"
              />

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Trusted Partner
                </span>{" "}
                for
                <span className="block bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Instant Personal Loans
                </span>
              </h3>

              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  FundsOnTime is your reliable financial partner, offering
                  instant personal loans customized to suit your individual
                  requirements. We are committed to making credit accessible,
                  quick, and hassle-free for everyone.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "10k+", label: "Happy Customers" },
                  { value: "₹50Cr+", label: "Loans Disbursed" },
                  { value: "4.8★", label: "Customer Rating" },
                  { value: "99.9%", label: "Uptime" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md"
                  >
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-block max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20">
            <div className="bg-gradient-to-br from-white to-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to get started with our trusted partners?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Choose the perfect solution for your financial needs from our
                network of verified partners
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Compare All Partners
                </motion.button> */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-br from-blue-700 to-blue-300 border border-gray-300 text-gray-800 font-semibold text-lg shadow-lg hover:shadow-xl hover:border-blue-300"
                >
                  Contact Our Team
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
