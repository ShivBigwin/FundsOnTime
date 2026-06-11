"use client";
import { motion } from 'framer-motion';

const solutions = [
  {
    title: "Easy and Rapid Loan process",
    description: "Apply quickly and easily with no paperwork required.",
    icon: "/icons/rapid.png",
    gradient: "from-blue-700 to-cyan-600",
    delay: 0.1
  },
  {
    title: "Instant Disbursement",
    description: "Click. Confirm. Receive. Your funds are transferred instantly.",
    icon: "/icons/instant.png",
    gradient: "from-blue-700 to-cyan-600",
    delay: 0.2
  },
  {
    title: "Trusted financial partner",
    description: "The trusted choice for fair and straightforward lending.",
    icon: "/icons/trust.png",
    gradient: "from-blue-700 to-cyan-600",
    delay: 0.3
  }
];

export default function Solutions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="relative py-12 bg-linear-to-b from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-10% w-80 h-80 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10% w-80 h-80 bg-linear-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl" />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 12 }).map((_, i) => (
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
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 backdrop-blur-sm border border-emerald-200 mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 animate-pulse mr-2" />
            <span className="text-emerald-700 text-sm font-semibold">Core Features</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">
              Built for the modern
            </span>
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              salaried professional.
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Smart financial solutions for every dream and need—because whatever your goal, there’s a loan built for you.
          </p>
        </motion.div>

        {/* Core Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Glow Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${solution.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />

              {/* Main Card */}
              <div className="relative h-full bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

                {/* Number Badge */}
                <div className="absolute -top-2 -left-2 w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {index + 1}
                  </span>
                </div>

                {/* Icon Section */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" as const }}
                  className="relative mb-8"
                >
                  <div className={`relative w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${solution.gradient} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient}/10 flex items-center justify-center`}>
                        <img
                          src={solution.icon}
                          alt={solution.title}
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Animation */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                    className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 animate-pulse" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 group-hover:text-transparent transition-all duration-300 min-h-[60px]"
                >
                  <span className={`bg-gradient-to-r ${solution.gradient} bg-clip-text`}>
                    {solution.title}
                  </span>
                </motion.h3>

                <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {solution.description}
                </p>

                {/* Progress Indicator */}
                <div className="mb-4">
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2, delay: solution.delay }}
                      className={`h-full bg-gradient-to-r ${solution.gradient}`}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>0%</span>
                    <span className="text-gray-700 font-medium">Feature Complete</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { value: "99.8%", label: "Accuracy Rate", color: "from-blue-500 to-cyan-600" },
            { value: "2min", label: "Avg. Assessment", color: "from-emerald-500 to-teal-600" },
            // { value: "256-bit", label: "Encryption", color: "from-violet-500 to-purple-600" },
            { value: "24/7", label: "Support Coverage", color: "from-orange-500 to-pink-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white backdrop-blur-sm border border-gray-200/80 rounded-2xl p-6 text-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`text-3xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-700 text-sm font-semibold">{stat.label}</div>

              {/* Animated Underline */}
              <div className={`mt-4 w-0 group-hover:w-full h-0.5 bg-linear-to-r ${stat.color} transition-all duration-500 mx-auto`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="inline-block max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20">
            <div className="bg-gradient-to-br from-white to-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to experience the future of finance?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join over 10,000 businesses that trust our intelligent financial infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-300 text-gray-800 font-semibold text-lg shadow-lg hover:shadow-xl hover:border-blue-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}