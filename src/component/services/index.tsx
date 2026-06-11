"use client";

import Link from "next/link";
import { title } from "process";
import { text } from "stream/consumers";

const whychoose = [
  {
    icon: "whychoose1.png",
    text: "RBI-Registered NBFC with responsible and ethical lending practices",
  },
  {
    icon: "whychoose2.png",
    text: "Real-time eligibility check with instant decisions",
  },
  {
    icon: "whychoose3.png",
    text: " Transparent pricing with no hidden fees",
  },
  {
    icon: "whychoose4.png",
    text: "Dedicated support for post-loan servicing and queries",
  },
];

const docs = {
  section1: {
    title: "What You'll Need to Apply",
    items: [
      {
        id: 1,
        text: "PAN Card & Aadhaar Card (or equivalent government-issued ID)",
        icon: "panandaadhar.png",
      },
      {
        id: 2,
        text: "PAN Card & Aadhaar Card (or equivalent government-issued ID)",
        icon: "bankstatement.png",
      },
      {
        id: 3,
        text: "PAN Card & Aadhaar Card (or equivalent government-issued ID)",
        icon: "salaryslip.png",
      },
      {
        id: 4,
        text: "PAN Card & Aadhaar Card (or equivalent government-issued ID)",
        icon: "linkedmobile.png",
      },
    ],
  },

  section2: {
    title: "Who Can Apply for a Loan?",
    items: [
      {
        id: 1,
        text: "Indian Citizen",
        icon: "indiancitizen.png",
      },
      {
        id: 2,
        text: "Age: 21 years and above",
        icon: "age.png",
      },
      {
        id: 3,
        text: "Salaried employment in the private or government sector",
        icon: "salariedemployee.png",
      },
      {
        id: 4,
        text: "Minimum monthly income: ₹35,000",
        icon: "monthlyincome.png",
      },
    ],
  },
};

export default function Services() {
  return (
    <>
      <div className="font-serif min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden w-full bg-gradient-to-r from-blue-100 to-cyan-100 py-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-10 right-1/4 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm">
              Our Services
            </h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Instant Personal Loans for Salaried Professionals
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Quick, Paperless & Collateral-Free Loans up to ₹1,00,000 —
                Disbursed in Minutes
              </p>
              <Link
                href="termsandconditions"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Apply Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Personal Loans That Put You First
              </h1>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  A personal loan from FundsOnTime Private Limited offers
                  immediate financial relief when you need it the most — without
                  collateral, with minimal documentation, and in just a few
                  minutes.
                </p>
                <p>
                  Whether you are facing an emergency, an unplanned expense, or
                  require short-term funds, our quick and transparent credit
                  solution helps you bridge your need with ease.
                </p>
                <p>
                  Our personal loans are designed to be accessible, secure, and
                  compliant with all applicable RBI guidelines. We support
                  salaried individuals by offering fast, short-term loans that
                  can be repaid on the next salary date — helping you stay
                  financially confident.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              <img
                src="services1.webp"
                alt="Personal Loan Services"
                className="w-full h-auto rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6 rounded-b-3xl">
                <div className="text-white text-lg font-semibold">
                  Fast & Secure Digital Process
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="services2.webp"
                alt="Loan Features Visualization"
                className="w-full h-auto rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Features Grid */}
            <div className="space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center lg:text-left">
                Key Loan Features at a Glance
              </h1>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="divide-y divide-gray-100">
                  {[
                    { label: "Loan Amount", value: "Upto ₹1,00,000" },
                    { label: "Loan Tenure", value: "1 Month" },
                    {
                      label: "Application Time",
                      value: "As fast as 5 to 30 minutes",
                    },
                    {
                      label: "Approval Process",
                      value: "100% digital and paperless",
                    },
                    {
                      label: "Repayment",
                      value: "Single payment due on your next salary date",
                    },
                    {
                      label: "Eligibility Check",
                      value: "Real-time assessment with minimal inputs",
                    },
                    {
                      label: "No Collaterals required",
                      value: "No documents needed",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="group hover:bg-blue-50/50 transition-colors duration-200"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 p-6">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mr-4">
                            <span className="text-blue-600 font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div className="font-semibold text-gray-800">
                            {feature.label}
                          </div>
                        </div>
                        <div className="flex items-center sm:justify-end mt-2 sm:mt-0">
                          <div className="text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                            {feature.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Required Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents Required
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and straightforward documentation process for quick
              approval
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="services3.webp"
                alt="Documentation Process"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Subject to credit appraisal and document verification as per
              company policy and RBI guidelines.
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(docs).map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mr-4">
                    <span className="text-2xl">
                      {sectionIndex === 0 ? "📄" : "👤"}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-6">
                  {section.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start group hover:bg-blue-50/50 p-3 rounded-xl transition-colors duration-200"
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mr-4 shadow-sm">
                        <img
                          src={item.icon}
                          alt={item.icon}
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-800 font-medium">
                          {item.text}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose FundsOnTime & Features Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Why Choose FundsOnTime */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mr-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Why Choose FundsOnTime?
                </h2>
              </div>
              <div className="space-y-6">
                {whychoose.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start group hover:bg-blue-50/50 p-4 rounded-xl transition-colors duration-200"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mr-4 shadow-sm">
                      <img
                        src={info.icon}
                        alt={info.icon}
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-800 font-medium">
                        {info.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mr-4 shadow-sm">
                  <span className="text-2xl text-blue-600">✨</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Key Benefits
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    icon: "⚡",
                    title: "Instant Approval",
                    desc: "Get approved within minutes with our automated system",
                  },
                  {
                    icon: "🔒",
                    title: "Secure & Safe",
                    desc: "Bank-level security with encrypted transactions",
                  },
                  {
                    icon: "💰",
                    title: "Flexible Repayment",
                    desc: "Choose repayment options that suit your cash flow",
                  },
                  {
                    icon: "📱",
                    title: "Mobile First",
                    desc: "Complete the entire process from your smartphone",
                  },
                  {
                    icon: "👨‍💼",
                    title: "Dedicated Support",
                    desc: "24/7 customer support for all your queries",
                  },
                  {
                    icon: "📊",
                    title: "No Hidden Charges",
                    desc: "Complete transparency in pricing and fees",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mr-4">
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {feature.title}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {feature.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Your Personal Loan?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have trusted FundsOnTime
              for their financial needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="termsandconditions"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Apply Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
