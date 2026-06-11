// app/page.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoanDashboard() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [creditScore, setCreditScore] = useState(0);

  const targetLoanAmount = 75000;
  const targetPrincipal = 48000;
  const targetInterest = 2400;
  const targetCreditScore = 650;

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      // Loan amount animation
      let currentStep = 0;
      const loanTimer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out

        setLoanAmount(Math.floor(targetLoanAmount * easedProgress));

        if (currentStep >= steps) {
          clearInterval(loanTimer);
          setLoanAmount(targetLoanAmount);
        }
      }, stepDuration);

      // Principal animation
      currentStep = 0;
      const principalTimer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setPrincipal(Math.floor(targetPrincipal * easedProgress));

        if (currentStep >= steps) {
          clearInterval(principalTimer);
          setPrincipal(targetPrincipal);
        }
      }, stepDuration);

      // Interest animation
      currentStep = 0;
      const interestTimer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setInterest(Math.floor(targetInterest * easedProgress));

        if (currentStep >= steps) {
          clearInterval(interestTimer);
          setInterest(targetInterest);
        }
      }, stepDuration);

      // Credit score animation
      currentStep = 0;
      const creditTimer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCreditScore(Math.floor(targetCreditScore * easedProgress));

        if (currentStep >= steps) {
          clearInterval(creditTimer);
          setCreditScore(targetCreditScore);
        }
      }, stepDuration);

      return () => {
        clearInterval(loanTimer);
        clearInterval(principalTimer);
        clearInterval(interestTimer);
        clearInterval(creditTimer);
      };
    };

    // Start animation after a short delay
    const timer = setTimeout(animateNumbers, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl md:text-2xl">
                  R
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {/* Rupe<span className="text-blue-600">4</span>u */}
              </h1>
            </div>
            <div className="bg-linear-to-r from-green-500 to-emerald-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm md:text-base">
                  Instant transfers
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
          {/* Left-column */}
          <div className="relative bg-white backdrop-blur-sm border border-gray-200/80 rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-white to-pink-100 border border-gray-200 flex items-center justify-center p-8 shadow-inner">
              <img
                src="/man-2.png"
                alt="FundsOnTime"
                className="w-full max-w-md h-auto rounded-3xl"
              />
            </div>

            {/* Floating Badges */}
            {/* <div className="flex justify-center space-x-4 mt-8">
                            {["RBI Approved", "ISO Certified", "GDPR Compliant"].map((badge, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-300 text-sm text-gray-700 shadow-sm hover:shadow-md"
                                >
                                    {badge}
                                </motion.div>
                            ))}
                        </div> */}
          </div>

          {/* Right Column - Transfer Success */}
          <div className="">
            <div className="bg-linear-to-br from-blue-700 to-indigo-400 rounded-2xl shadow-xl p-6 md:p-8 text-white h-full">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Transfer Success!
                  </h2>
                  <p className="text-indigo-100 opacity-90 text-sm md:text-base">
                    Your loan amount has been successfully transferred to your
                    account
                  </p>
                </div>

                {/* Success Animation */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-10 h-10 md:w-12 md:h-12 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Animated circles */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-ping"></div>
                      <div className="absolute inset-2 border-4 border-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Amount Display */}
                  <div className="text-center">
                    <div className="text-sm md:text-base text-indigo-100 opacity-90 mb-2">
                      Amount Transferred
                    </div>
                    <div className="text-3xl md:text-4xl font-bold">
                      ₹{loanAmount.toLocaleString()}
                    </div>
                  </div>

                  {/* Transfer Details */}
                  <div className="mt-8 w-full">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-white/20">
                        <span className="text-sm text-indigo-100 opacity-90">
                          Transaction ID
                        </span>
                        <span className="font-medium">
                          #TX{Date.now().toString().slice(-8)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-white/20">
                        <span className="text-sm text-indigo-100 opacity-90">
                          Time
                        </span>
                        <span className="font-medium">
                          {new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-indigo-100 opacity-90">
                          Status
                        </span>
                        <span className="font-medium text-green-300">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <button className="w-full bg-white text-indigo-600 font-semibold py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    Download Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Funds will be available in your account instantly after approval
          </p>
          <p className="mt-1">
            For any queries, contact our 24/7 customer support
          </p>
        </div>
      </div>
    </div>
  );
}
