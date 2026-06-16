"use client";

import { JSX, useState } from "react";

export default function FairPracticePolicy() {
  type SectionKey = keyof typeof sections;

  const [activeSection, setActiveSection] =
    useState<SectionKey>("introduction");

  const [mobileOpen, setMobileOpen] = useState(false);

  const sections: any = {
    introduction: {
      title: "Introduction",
      content: `
        <img src="/policy/md.png" alt="" />
        <p class="mt-4">Tristar Fincon Credit Private Limited is a Non-Banking Financial Company (NBFC), registered with the Reserve Bank of India (RBI) as a non-deposit taking, non-systemically important NBFC. The Company is primarily engaged in providing personal loans, MSME finance, and other financial services.</p></br>
        
        <p>The Policy has been formulated in accordance with the guidelines issued by the Reserve Bank of India for Non-Banking Financial Companies (NBFCs). This Policy is applicable to all FundsOnTime's products and services.</p>
      `,
    },

    purpose: {
      title: "Purpose",
      content: `
        <p>The purpose of this Fair Practices Code (FPC) is to:</p>
         <img src="/policy/purpose.png" alt="" />
         <div >
         <p class=" text-sm text-center p-4 bg-red-200 text-red-500">**The Code applies to all business operations of the Company and ensures equal access to all eligible borrowers without bias based on caste, creed, religion, gender, or any other discriminatory factor.</p>
         </div>
       
      `,
    },
    definitions: {
      title: "Definitions",
      content: `
         <img src="/policy/defination.png" alt="" />
      `,
    },

    commitments: {
      title: "Key Commitments",
      content: `
       <img src="/policy/key-commitms.png" alt="" />
      `,
    },
    principles: {
      title: "Principles governing Grievance Redressal",
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="font-semibold text-lg mb-4">1. Fair Practice Guidelines For NBFC's:</h3>
             <img src="/policy/fair-practice.png" alt="" />
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-4">2. Loan Appraisal and Terms/Conditions:</h3>
            <div class=" grid grid-cols-1 md:grid-cols-3  gap-4 ">
              <div>
                <img src="/policy/loanappraisal1.png" alt="" class="mb-4" />
                <img src="/policy/loanappraisal2.png" alt="" />
              </div>

              <div>
                 <img src="/policy/loanappraisal3.png" alt="" class="mb-4" />
                 <img src="/policy/loanappraisal4.png" alt="" />
              </div>

               <div>
                <img src="/policy/loanappraisal5.png" alt="" class="mb-4"/>
                <img src="/policy/loanappraisal6.png" alt="" />
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-2">3. Loan Disbursement and Changes in Terms:</h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <img src="/policy/LD1.png" alt="" />
            <img src="/policy/LD2.png" alt="" />
            <img src="/policy/LD3.png" alt="" />
            <img src="/policy/LD4.png" alt="" />
            </div>
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-2">4. Post-Disbursement Monitoring:</h3>
            <img src="/policy/post-disb.png" alt="" />
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-2">5.General Provision:</h3>
            <img src="/policy/general-provisions.jpg" alt="" />
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-2">6.Confidentiality of Information:</h3>
            <img src="/policy/confidentiality.png" alt="" />
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-2">7.Language And Communication:</h3>
            <img src="/policy/language.png" alt="" />
          </div>
        </div>
      `,
    },
    penal: {
      title: "Penal Charges",
      content: `
      <img src="/policy/penal-charges.png" alt="" />
      `,
    },

    fairpractice: {
      title: "Fair Practice Code For Micro-Finance Loan",
      content: `
      <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="text-sm">
      <p>i.The FPC in vernacular language shall be displayed in its office and branch premises, as well as on the company's website.</p>
      <p>ii.Train field staff to inquire about borrower income and existing debt.</p>
      <p>iii.Any borrower training offered will be free.</p>
      <p>iv.Display minimum, maximum, and average microfinance interest rates prominently in offices, vernacular literature, and on the website.</p>
      <p>v.The loan agreement and displayed FPC (office, branch, website) will declare the company's accountability for inappropriate employee (including outsourced) behaviour and commitment to timely grievance redressal.</p>
      <p>vi.No security deposit or margin will be collected from borrowers.</p>
      <p>vii.The company will use a standard microfinance loan agreement, preferably in the local language.</p>
      <p>viii.All loan terms and conditions will be disclosed in the loan agreement.</p>
      <p>ix.The loan card will clearly show: a simplified pricing factsheet, all loan terms, borrower identification, repayment acknowledgements (including final discharge), the grievance redressal system and nodal officer contact details.</p>
      <p>x.Non-credit products issued shall be with full consent of the borrowers and fee structure shall be communicated in the loan card itself.</p>
      <p>xi.All entries in the loan card shall be in the vernacular language or the language as understood by the borrower.</p>
      
      </div>
      <div>
        <img src="/policy/fair.png" alt="" />
      </div>
      </div>
      <img src="/policy/non-coercive.png" alt="" class="mt-4" />
      `,
    },

    responsibility: {
      title: "Responsibility Of The Board",
      content: `
      <img src="/policy/responsibility.jpg" alt="" />
      `,
    },
    grievance: {
      title: "Grievance Redressal Mechanism",
      content: `
        <div class="space-y-4">
          <p>FundsOnTime shall establish a robust grievance redressal framework.</p>
           <p>Key highlights include:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
             <img src="/policy/GR1.png" alt="" />
              <img src="/policy/GR2.png" alt="" />
               <img src="/policy/GR3.png" alt="" />
          </div>
        </div>
      `,
    },
    review: {
      title: "Review Of The Policy",
      content: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class=" ">
        <img src="/policy/fr2.png" alt="" "/>  
        </div>
        <div class="  inset-0 flex items-center justify-center ">
        <p class="mt-">This FPC shall be reviewed annually or earlier if mandated by changes in RBI regulations. The Board will ensure the continued relevance and effectiveness of this Code through appropriate modifications from time to time.</p>
        </div>
      </div>
         
      `,
    },
    force: {
      title: "Force Majure",
      content: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class=" ">
        <img src="/policy/fr1.png" alt="" "/>  
        </div>
        <div class="  inset-0 flex items-center justify-center ">
        <p class="mt-">In exceptional cases of Force Majeure (natural disasters, pandemics, war, regulatory actions, etc.), the commitments under this Code may not be fully enforceable. However, the Company shall make best efforts to fulfill its obligations under such conditions.</p>
        </div>
      </div>
         
      `,
    },
    disclaimer: {
      title: "Disclaimer",
      content: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="  inset-0 flex items-center justify-center ">
        <p class="mt-">In exceptional cases of Force Majeure (natural disasters, pandemics, war, regulatory actions, etc.), the commitments under this Code may not be fully enforceable. However, the Company shall make best efforts to fulfill its obligations under such conditions.</p>
        </div>
        <div class=" ">
        <img src="/policy/disclaimer.png" alt="" "/>  
        </div>
      </div>
      `,
    },
  };

  const sectionIcons: Record<SectionKey, JSX.Element> = {
    definitions: <img src="/icons/info.png" alt="" />,
    purpose: <img src="/icons/target.png" alt="" />,
    introduction: <img src="/icons/report1.png" alt="" />,
    commitments: <img src="/icons/commit.png" alt="" />,
    penal: <img src="/icons/penal.png" alt="" />,
    fairpractice: <img src="/icons/fair-practice.png" alt="" />,
    responsibility: <img src="/icons/responsibility.png" alt="" />,
    principles: <img src="/icons/principles.png" alt="" />,
    grievance: <img src="/icons/grievance.png" alt="" />,
    review: <img src="/icons/review.png" alt="" />,
    force: <img src="/icons/force.png" alt="" />,
    disclaimer: <img src="/icons/risk.png" alt="" />,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Sidebar for mobile view */}
          <div className="lg:hidden flex justify-between items-center mb-4 px-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md bg-blue-900 text-white"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Header */}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 ">
          <div
            className={`lg:w-1/4 ${mobileOpen ? "block" : "hidden"} lg:block`}
          >
            <div className="bg-linear-to-b from-blue-950 to-blue-800 rounded-lg shadow-sm border border-gray-200 sticky top-8">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white text-center mb-4">
                  Contents
                </h2>

                <nav className="space-y-2">
                  {Object.entries(sections).map(([key, section]: any) => (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveSection(key);
                        setMobileOpen(false); // close sidebar when clicking
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                        activeSection === key
                          ? "bg-transparent text-blue-300"
                          : "text-white hover:bg-blue-950 hover:text-white"
                      }`}
                    >
                      <span
                        className={`shrink-0 ${
                          activeSection === key
                            ? "text-blue-300"
                            : "text-gray-400"
                        }`}
                      >
                        {sectionIcons[key]}
                      </span>
                      <span>{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">
                    {sections[activeSection as keyof typeof sections].title}
                  </h2>
                </div>
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html:
                      sections[activeSection as keyof typeof sections].content,
                  }}
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start">
                <div className="shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-800">
                    Need Help?
                  </h3>
                  <p className="mt-2 text-blue-700">
                    If you have any questions about our Fair Practice Policy or
                    need assistance, please contact our Grievance Redressal
                    Officer at{" "}
                    <a
                      href="mailto:grievance@salaryanytime.com"
                      className="underline font-semibold"
                    >
                      care@salaryanytime.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
