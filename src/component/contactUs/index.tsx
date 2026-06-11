"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const contactCards = [
  {
    icon: "/icons/contact-phone.png",
    title: "Phone Support",
    description: "Speak directly with our financial experts",
    details: "+91-7290999972",
    gradient: "from-white to-blue-50",
    action: "tel:+91-7290999972",
    actionText: "Call Now",
  },
  {
    icon: "/icons/contact-email.png",
    title: "Email Support",
    description: "Get detailed assistance via email",
    details: "care@fundsontime.com",
    gradient: "from-white to-blue-50",
    action: "  care@fundsontime.com",
    actionText: "Send Email",
  },
  {
    icon: "/icons/contact-location.png",
    title: "Office Location",
    description: "Visit our headquarters",
    details:
      "3rd, 317, Usha Kiran Building, Azadpur Road, Azadpur, New Delhi, North West Delhi, Delhi, 110033.",
    gradient: "from-white to-blue-50",
    action: "https://maps.google.com/",
    actionText: "View on Map",
  },
];

const supportHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "Emergency Support Only" },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    hidden: { y: 30, opacity: 0 },
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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 20% 30%, #3b82f6 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, #10b981 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

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

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-orange-100 to-pink-100 backdrop-blur-sm border border-orange-200 mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-linear-to-r from-orange-500 to-pink-600 animate-pulse mr-2" />
            <span className="text-orange-700 text-sm font-semibold">
              Get in Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Contact Our</span>
            <span className="block bg-linear-to-r from-blue-800 via-blue-600 to-orange-600 bg-clip-text text-transparent">
              Support Team
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a query or need assistance with your loan application? Our team
            is here to help you with quick, clear, and professional support.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-linear-to-r ${card.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative h-full bg-blue-800 backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="mb-6"
                >
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${card.gradient} p-0.5 shadow-md`}
                  >
                    <div className="w-full h-full bg-blue-800 rounded-2xl flex items-center justify-center">
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.gradient}/10 flex items-center justify-center`}
                      >
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-8 h-8"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-white text-sm mb-4">{card.description}</p>

                <div className="mb-8">
                  <p className="text-white font-medium ">{card.details}</p>
                </div>

                {/* Action Button */}
                <motion.a
                  href={card.action}
                  target={card.action.includes("http") ? "_blank" : "_self"}
                  rel={
                    card.action.includes("http") ? "noopener noreferrer" : ""
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`fixed bottom-4 left-4 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r ${card.gradient} text-blue-800 font-semibold text-sm hover:shadow-lg transition-all duration-300 shadow-md`}
                >
                  {card.actionText}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
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

              {/* Form Container */}
              <div className="relative bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-800 to-cyan-800 flex items-center justify-center shadow-md">
                    <FaHeadset className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Send us a Message
                    </h3>
                    <p className="text-gray-600">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {submitSuccess ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r  from-blue-800 to-cyan-800 flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-gray-600">
                        Our team will contact you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
                            placeholder="Enter your phone"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Subject *
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
                          >
                            <option value="">Select a subject</option>
                            <option value="loan-application">
                              Loan Application
                            </option>
                            <option value="repayment-query">
                              Repayment Query
                            </option>
                            <option value="technical-support">
                              Technical Support
                            </option>
                            <option value="general-inquiry">
                              General Inquiry
                            </option>
                            <option value="feedback">Feedback</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-white backdrop-blur-sm border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm resize-none"
                          placeholder="Describe your query or requirement"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg flex items-center shadow-lg hover:shadow-xl ${isSubmitting ? "opacity-80 cursor-not-allowed" : ""}`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <svg
                                className="w-5 h-5 ml-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                              </svg>
                            </>
                          )}
                        </motion.button>

                        <div className="flex items-center space-x-2">
                          <FaShieldAlt className="w-5 h-5 text-emerald-500" />
                          <span className="text-gray-600 text-sm font-medium">
                            Secure & Encrypted
                          </span>
                        </div>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Support Hours */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r  from-blue-800 to-cyan-800 flex items-center justify-center shadow-md">
                    <FaClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Support Hours
                    </h3>
                    <p className="text-gray-600">We're here when you need us</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {supportHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-gray-700">{item.day}</span>
                      <span className="text-gray-900 font-semibold">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                  <p className="text-emerald-700 text-sm font-medium">
                    <span className="font-bold">Emergency Support:</span>{" "}
                    Available 24/7 for existing customers
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Answers
                </h3>

                <div className="space-y-4">
                  {[
                    "How to apply for a loan?",
                    "What documents are required?",
                    "Loan approval timeline",
                    "Repayment options",
                    "Interest rates & charges",
                  ].map((question, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group border border-transparent hover:border-blue-100"
                    >
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">
                        {question}
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-300"
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
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="/faq"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-300 text-gray-800 font-semibold hover:border-purple-300 hover:shadow-md transition-all duration-300"
                >
                  View All FAQs
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
