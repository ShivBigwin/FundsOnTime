"use client";
import { motion } from 'framer-motion';

const features = [
  {
    title: "Simple process",
    description: "Apply in minutes from any device—no paperwork, no hassle.",
    icon: "/icons/simple.png",
    gradient: "from-blue-800 to-orange-600",
    delay: 0.1
  },
  {
    title: "Quick approvals",
    description: "Know where you stand quickly, get approved in seconds, not days.",
    icon: "/icons/quick.png",
    gradient: "from-blue-800 to-orange-600",
    delay: 0.2
  },
  {
    title: "Secure",
    description: "We ensure a completely safe and secure experience.",
    icon: "/icons/secure.png",
    gradient: "from-blue-800 to-orange-600",
    delay: 0.3
  },
  {
    title: "Your Loan, Your Way",
    description: "Get a loan offer that's genuinely tailored to your unique needs and financial situation.",
    icon: "/icons/review.png",
    gradient: "from-blue-800 to-orange-600",
    delay: 0.4
  },
  {
    title: "100% Paperless work",
    description: "A fully digital experience—quick, clean, and green.",
    icon: "/icons/paperless.png",
    gradient: "from-blue-800 to-orange-600",
    delay: 0.5
  },
  {
    title: "24*7 Customer Support",
    description: "Round-the-clock assistance from our financial experts via chat, phone, or email.",
    icon: "/icons/commit.png",
    gradient: "from-blue-800 to-orange-600",
    delay: 0.6
  }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="relative py-12 bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />

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
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 backdrop-blur-sm border border-blue-200 mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 animate-pulse mr-2" />
            <span className="text-blue-700 text-sm font-semibold">Why Choose Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">
              Quick loans.
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Zero hassle.
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial solutions powered by cutting-edge technology
            to meet your unique business and personal needs
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              custom={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />

              {/* Card */}
              <div className="relative h-full bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Animated Background */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative mb-8"
                >
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient}/10 flex items-center justify-center`}>
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-10 h-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 animate-pulse" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                  <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text`}>
                    {feature.title}
                  </span>
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                  <span className={`text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mr-2`}>
                    Learn more
                  </span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm border border-blue-100 rounded-3xl p-8 shadow-xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to transform your financial future?
              </h3>
              <p className="text-gray-600">
                Join thousands of satisfied customers who trust us with their financial growth.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden shadow-lg hover:shadow-xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-white flex items-center">
                Get Started Free
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}