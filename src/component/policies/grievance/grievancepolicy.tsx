"use client";
import { JSX, useState } from "react";

export default function GrievanceRedressalPolicy() {
  type SectionKey = keyof typeof sections;

  const [activeSection, setActiveSection] =
    useState<SectionKey>("introduction");

  const [mobileOpen, setMobileOpen] = useState(false);

  const sections: any = {
    introduction: {
      title: "Introduction And Policy Statement",
      content: `
        <img src="/policy/Gr-intro.jpg" alt="" />
        <p class="mt-4">Tristar Fincon Credit Private Limited (“the Company”) is a Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India (“RBI”). As a responsible financial institution committed to ethical business practices and regulatory compliance, FundsOnTime places the highest priority on providing transparent, fair, and customer-centric services.</p><br/>
        <p>In line with its mission to uphold the highest standards of customer satisfaction and financial integrity, the Company acknowledges that a robust grievance redressal mechanism is an integral part of corporate governance and financial services delivery. This mechanism is designed not only to address customer complaints, concerns, and disputes but also to identify systemic gaps and ensure continuous improvement.</p><br/>
        <p>This Grievance Redressal Policy (“Policy”) is formulated in accordance with the applicable provisions of the RBI Master Directions on NBFCs, the Fair Practices Code, and the Reserve Bank – Integrated Ombudsman Scheme, 2021. The Policy aims to provide a structured, transparent, and responsive process for resolving customer grievances while ensuring regulatory adherence, customer protection, and institutional accountability.</p><br/>
        <p>The Policy underscores FundsOnTime's unwavering commitment to uphold trust, enhance service efficiency, and ensure that all customer interactions are addressed in a timely, fair, and equitable manner. It also ensures that customers are informed about their rights, the available redressal mechanisms, and the proper channels to escalate their concerns.</p>
      `,
    },

    objectives: {
      title: "Policy Objective and Guiding Intent",
      content: `
        <h1 class="text-sm underline underline-offset-3">The Grievance Redressal Policy has been formulated with the following objectives</h1>
        <div class="mt-4 shadow-md p-4">
         <div class="flex " >
         <p class=" p-3 rounded-l-2xl text-center bg-linear-to-bl text-white font-semibold text-2xl from-blue-950 to-blue-800 ">01</p>
         <p class="  p-3 rounded-r-2xl text-xl text-center text-black pl-4 clip-inset-left bg-gray-200">Ensure Fairness and Equity</p>
         </div>
         <p class="mt-2 text-sm">To guarantee that every customer is treated with dignity, fairness, and impartiality, irrespective of their socio-economic background, financial status, or the nature of their complaint.</p>
       </div>

       <div class="mt-4 shadow-md p-4">
         <div class="flex " >
         <p class=" p-3 rounded-l-2xl text-center bg-linear-to-bl text-white font-semibold text-2xl from-blue-950 to-blue-800 ">02</p>
         <p class="  p-3 rounded-r-2xl text-xl text-center text-black pl-4 clip-inset-left bg-gray-200">Establish a Formal Redressal Framework</p>
         </div>
         <p class="mt-2 text-sm">To define a well-structured and transparent grievance handling process across all business units, ensuring clarity in roles and responsibilities.</p>
       </div>

       <div class="mt-4 shadow-md p-4">
         <div class="flex " >
         <p class=" p-3 rounded-l-2xl text-center bg-linear-to-bl text-white font-semibold text-2xl from-blue-950 to-blue-800 ">03</p>
         <p class="  p-3 rounded-r-2xl text-xl text-center text-black pl-4 clip-inset-left bg-gray-200">Promote Accountability and Efficiency</p>
         </div>
         <p class="mt-2 text-sm">To fix accountability on designated officers for timely resolution of complaints and ensure that customer grievances are handled by competent, trained personnel.</p>
       </div>

       <div class="mt-4 shadow-md p-4">
         <div class="flex " >
         <p class=" p-3 rounded-l-2xl text-center bg-linear-to-bl text-white font-semibold text-2xl from-blue-950 to-blue-800 ">04</p>
         <p class="  p-3 rounded-r-2xl text-xl text-center text-black pl-4 clip-inset-left bg-gray-200">Regulatory Compliance</p>
         </div>
         <p class="mt-2 text-sm">To comply with the guidelines and instructions issued by the RBI from time to time relating to the redressal of customer grievances, customer protection, and financial consumer rights.</p>
       </div>

       <div class="mt-4 shadow-md p-4">
         <div class="flex " >
         <p class="p-3 rounded-l-2xl text-center bg-linear-to-bl text-white font-semibold text-2xl from-blue-950 to-blue-800 ">05</p>
         <p class="  p-3 rounded-r-2xl text-xl text-center text-black pl-4 clip-inset-left bg-gray-200">Customer Empowerment</p>
         </div>
         <p class="mt-2 text-sm">To guarantee that every customer is treated with dignity, fairness, and impartiality, irrespective of their socio-economic background, financial status, or the nature of their complaint.</p>
       </div>

       <div class="mt-4 shadow-md p-4">
         <div class="flex " >
         <p class=" p-3 rounded-l-2xl text-center bg-linear-to-bl text-white font-semibold text-2xl from-blue-950 to-blue-800 ">06</p>
         <p class="  p-3 rounded-r-2xl text-xl text-center text-black pl-4 clip-inset-left bg-gray-200">Systemic Improvements</p>
         </div>
         <p class="mt-2 text-sm">To guarantee that every customer is treated with dignity, fairness, and impartiality, irrespective of their socio-economic background, financial status, or the nature of their complaint.</p>
       </div>

       <div class="mt-4 shadow-md p-4">
         <div class="flex w-fit h-fit text-center" >
         <p class="  p-3 rounded-l-2xl  bg-linear-to-bl text-white font-semibold text-2xl from-blue-950 to-blue-800">07</p>
         <p class="  p-3 rounded-r-2xl text-xl t text-black pl-4 clip-inset-left bg-gray-200">Facilitate Escalation Mechanisms</p>
         </div>
         <p class="mt-2 text-sm">To guarantee that every customer is treated with dignity, fairness, and impartiality, irrespective of their socio-economic background, financial status, or the nature of their complaint.</p>
       </div>
      `,
    },
    scope: {
      title: "Policy Scope And Coverage Parameter",
      content: `
         <div class="bg-linear-to-br from-blue-950 to-blue-700 p-4 rounded-xl ">
         <h1 class="text-xl font-semibold text-white mb-2"> POLICY SCOPE AND COVERAGE PARAMETERS</h1>
         <p class="text-lg  text-white ">This Policy is comprehensive in its application and encompasses the following dimensions:</p>
         </div>

         <div class="bg-linear-to-br from-white to-gray-50 p-4 rounded-xl shadow-md mt-4 relative">
         <img src="/icons/user.png" alt="" class="absolute top-0 right-0"/>
         <h1 class="text-xl  text-black mb-2"> Applicability to All Customers</h1>
         <p class="text-sm  text-black ">The Policy covers all existing customers, prospective applicants, and third-party stakeholders (such as guarantors and co-applicants) who interact with the Company for availing its financial products or services.</p>
         </div>

         <div class="bg-linear-to-br from-white to-gray-50 p-4 rounded-xl shadow-md mt-4 relative">
         <img src="/icons/t1.png" alt="" class="absolute top-0 right-0"/>
         <h1 class="text-xl  text-black mb-2"> Geographical and Operational Scope</h1>
         <p class="text-sm  text-black ">It applies to all offices, branches, business correspondents, agents, and digital platforms of FundsOnTime, irrespective of geographic location.</p>
         </div>

         <div class="bg-linear-to-br from-white to-gray-50 p-4 rounded-xl shadow-md mt-4 relative">
         <img src="/icons/t2.png" alt="" class="absolute top-0 right-0"/>
         <h1 class="text-xl  text-black mb-2">Coverage of Products and Services</h1>
         <p class="text-sm  text-black ">The Policy covers all aspects of the Company's business operations including loan origination, sanction, disbursement, servicing, collections, foreclosure, settlements, and post-closure documentation.</p>
         </div>

         <div class="bg-linear-to-br from-white to-gray-50 p-4 rounded-xl shadow-md mt-4 relative">
         <img src="/icons/t3.png" alt="" class="absolute top-0 right-0"/>
         <h1 class="text-xl  text-black mb-2">Channels of Complaint Registration</h1>
         <p class="text-sm  text-black ">The Policy includes provisions for receiving complaints through all official channels such as telephone, in-person visits, postal correspondence, e-mail communication, and any other digital/online modes made available by the Company</p>
         </div>

         <div class="bg-linear-to-br from-white to-gray-50 p-4 rounded-xl shadow-md mt-4 relative">
         <img src="/icons/t4.png" alt="" class="absolute top-0 right-0"/>
         <h1 class="text-xl  text-black mb-2">Nature of Complaints</h1>
         <ul class=" text-sm  text-black">This includes complaints related to:
            <li class="mt-4 text-sm  text-black ">1. Delay or deficiency in service delivery.</li>
            <li class="text-sm  text-black ">2. Unfair or unclear terms of the loan agreement.</li>
            <li class="text-sm  text-black ">3. Non-disclosure of applicable charges.</li>
            <li class="text-sm  text-black ">4. Staff misbehavior or lack of responsiveness.</li>
            <li class="text-sm  text-black ">5. Issues related to repayments, refunds, payment acknowledgements.</li>
            <li class="text-sm  text-black ">6. Data breaches or misuse of personal information.</li>
            <li class="text-sm  text-black ">7. Non-compliance with RBI-mandated customer rights and protections.</li>
         </ul>
         </div>

         <div class="bg-linear-to-br from-white to-gray-50 p-4 rounded-xl shadow-md mt-4 relative">
         <img src="/icons/t5.png" alt="" class="absolute top-0 right-0"/>
         <h1 class="text-xl  text-black mb-2"> Internal and External Stakeholders</h1>
         <p class="text-sm  text-black ">While primarily focused on external customers, the Policy also applies internally to all employees and management personnel of the Company responsible for customer service, back-office processing, credit operations, and regulatory compliance.</p>
         </div>

      `,
    },
    principles: {
      title: "Principles governing Grievance Redressal",
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="font-semibold text-lg mb-4">1. Fair Practice Guidelines For NBFC's:</h3>
             <img src="/policy/commitment.png" alt="" class="mt-8 mb-8" />
             <img src="/policy/transparency.png" alt="" class="mt-8"/>
             <img src="/policy/transparency2.png" alt="" />
             <img src="/policy/accessibility.png" alt="" />
             <img src="/policy/confidential.png" alt="" />
             <img src="/policy/systematic.jpg" alt="" />
             <img src="/policy/disciplinary.jpg" alt="" />
             <img src="/policy/customer.jpg" alt="" />
             
          </div>

          
      `,
    },
    recognize: {
      title: "Recognized Grounds For Grievance Filling",
      content: `
       <div class="text-center">
       <h1 class="text-2xl font-semibold">Confidential Handling of Complaints</h1>
       <p class="text-gray-400">Customers may raise complaints on the following grounds, among others</p>
       </div>
       <div class="grid grid-cols-1 md:grid-cols-4  mt-8">

       <div>
       <div class=" items-center">
            <img src="/icons/a1.png" alt="" class="w-24 h-24 mb-4 ml-8"/>
            <p>Non-receipt or delayed issuance of loan sanction letters, agreements, or related documentation.</p>
       </div>
       <div class="mt-4">
            <img src="/icons/a5.png" alt="" class="w-24 h-24 mb-4  ml-8"/>
            <p>Non-receipt or delayed issuance of loan sanction letters, agreements, or related documentation.</p>
       </div>
       </div>

       <div>
       <div class=" items-center">
            <img src="/icons/a2.png" alt="" class="w-24 h-24 mb-4  ml-8"/>
            <p>Non-receipt or delayed issuance of loan sanction letters, agreements, or related documentation.</p>
       </div>
       <div class="mt-4">
            <img src="/icons/a6.png" alt="" class="w-24 h-24 mb-4  ml-8"/>
            <p>Non-receipt or delayed issuance of loan sanction letters, agreements, or related documentation.</p>
       </div>
       </div>

       <div>
       <div class=" items-center">
            <img src="/icons/a3.png" alt="" class="w-24 h-24 mb-4  ml-8"/>
            <p>Non-receipt or delayed issuance of loan sanction letters, agreements, or related documentation.</p>
       </div>
       <div class="mt-4">
            <img src="/icons/a7.png" alt="" class="w-24 h-24 mb-4  ml-8"/>
            <p>Non-receipt or delayed issuance of loan sanction letters, agreements, or related documentation.</p>
       </div>
       </div>

       <div>
       <div class=" items-center">
            <img src="/icons/a4.png" alt="" class="w-24 h-24 mb-4  ml-8"/>
            <p>Non-receipt or delayed issuance of loan sanction letters, agreements, or related documentation.</p>
       </div>
       <div class="mt-4">
            <img src="/icons/a8.png" alt="" class="w-24 h-24 mb-4  ml-8"/>
            <p>Non-receipt or delayed issuance of loan sanction letters, agreements, or related documentation.</p>
       </div>
       </div>
       </div>
      `,
    },

    channel: {
      title: "Designated Channels for Submitting Complaints",
      content: `
      <div class="text-center">
        <h1 class="text-2xl font-semibold">DESIGNATED CHANNELS FOR SUBMITTING COMPLAINTS</h1>
        <p class="text-gray-400">Customers can raise their complaints through the following means</p>
      </div>
      <div class=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class= " flex justify-center items-center">
            <div class=" ">
            <h1 class="font-semibold text-lg  mt-4">In Person or By Post <br/> Registered Address</h1>
            <p class="h-1 w-44 rounded-full bg-linear-to-r from-green-400 to-red-400 mb-4"></p>
            <p class="mb-4">3rd, 317, Usha Kiran Building, <br/> Azadpur Road,Azadpur,<br/>North West Delhi,Delhi, 110033, India</p>
            <p><b class="font-bold">Time:</b> 10:00 AM to 6:00 PM <br/>(Monday to Saturday, <br/>excluding public holidays)</p>
            </div></div>

            <div class="mt-2">
            <div class="mt-4 flex ">
            <div class=" w-fit bg-emerald-500 rounded-l-xl flex justify-center items-center">
            <img src="/icons/email.png" alt="" class="p-4" />
            </div>
             <div class=" rounded-r-xl bg-gray-100 w-full">
             <h1 class="ml-8 mt-4 font-semibold ">E-Mail:</h1>
             <p class="ml-8 mt-8 mb-4">  care@fundsontime.com</p>
             </div> 
            </div>

            <div>
            <div class="mt-4 flex ">
            <div class=" w-fit bg-cyan-600 rounded-l-xl flex justify-center items-center">
            <img src="/icons/call.png" alt=""  class="p-4" />
            </div>
            
             <div class=" rounded-r-xl bg-gray-100 w-full">
             <h1 class="ml-8 mt-4 font-semibold ">Contact number:</h1>
             <p class="ml-8 mt-8 mb-4">+91 9599032524</p>
             </div> 
            </div>
            </div>

            <div><div class="mt-4 flex ">
            <div class=" w-fit bg-red-400 rounded-l-xl flex justify-center items-center">
            <img src="/icons/calling.png" alt=""  class="p-4" />
            </div>
             <div class=" rounded-r-xl bg-gray-100 w-full">
             <h1 class="ml-8 mt-4 font-semibold ">E-Mail:</h1>
             <p class="ml-8 mt-8 mb-4">  care@fundsontime.com</p>
             </div> 
            </div></div>
            </div>
      </div>

      <div>
      <img src="/policy/detail.png" alt="" class="mt-4"  />
      </div>
      `,
    },

    timeframe: {
      title: "Grievance Redressal Timeframe",
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

    escalation: {
      title: "Complaints Handling Procedure and Escalation Levels",
      content: `
      <img src="/policy/responsibility.jpg" alt="" />
      `,
    },
    ombudsman: {
      title: "Recourse  to Reserve Bank Of India Ombudsman",
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
    complaint: {
      title: "Resolution Framework For Critical Complaint Categories",
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
    reporting: {
      title: "Internal Reporting And Governance Of Grievances",
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
    confidentiality: {
      title: "Confidentiality Assurance and Data Privacy Protocol",
      content: `
      <img src="/policy/responsibility.jpg" alt="" />
      `,
    },
    amendments: {
      title: "Review Mechanism and Plicy Amendments",
      content: `
      <img src="/policy/responsibility.jpg" alt="" />
      `,
    },
    disclosure: {
      title: "Public Disclosure and Customer Awareness",
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

  // Section icons for better visual representation
  //   const sectionIcons = {
  //     introduction: (
  //       <img src="/icons/Gr1.png" alt="" />
  //     ),
  //     objectives: (
  //       <img src="/icons/Gr2.png" alt="" />
  //     ),
  //     scope: (
  //       <img src="/icons/Gr3.png" alt="" />
  //     ),
  //     principles: (
  //       <img src="/icons/Gr3.png" alt="" />
  //     ),
  //     recognize: (
  //       <img src="/icons/Gr5.png" alt="" />
  //     ),
  //     channel: (
  //       <img src="/icons/fair-Gr6.png" alt="" />
  //     ),
  //     timeframe: (
  //       <img src="/icons/Gr7.png" alt="" />
  //     ),
  //     escalation: (
  //       <img src="/icons/Gr8.png" alt="" />
  //     ),
  //     ombudsman: (
  //       <img src="/icons/Gr9.png" alt="" />
  //     ),
  //     complaint: (
  //       <img src="/icons/Gr10.png" alt="" />
  //     ),
  //     reporting: (
  //      <img src="/icons/Gr10.png" alt="" />
  //     ),
  //      confidentiality: (
  //       <img src="/icons/Gr10.png" alt="" />
  //     ),
  //     amendments: (
  //      <img src="/icons/Gr10.png" alt="" />
  //     ),
  //     disclosure: (
  //      <img src="/icons/Gr10.png" alt="" />
  //     )
  //   };
  const sectionIcons: Record<SectionKey, JSX.Element> = {
    introduction: <img src="/icons/Gr1.png" alt="" />,
    objectives: <img src="/icons/Gr2.png" alt="" />,
    scope: <img src="/icons/Gr3.png" alt="" />,
    principles: <img src="/icons/Gr3.png" alt="" />,
    recognize: <img src="/icons/Gr5.png" alt="" />,
    channel: <img src="/icons/Gr6.png" alt="" />,
    timeframe: <img src="/icons/Gr7.png" alt="" />,
    escalation: <img src="/icons/Gr8.png" alt="" />,
    ombudsman: <img src="/icons/Gr9.png" alt="" />,
    complaint: <img src="/icons/Gr10.png" alt="" />,
    reporting: <img src="/icons/Gr10.png" alt="" />,
    confidentiality: <img src="/icons/Gr10.png" alt="" />,
    amendments: <img src="/icons/Gr10.png" alt="" />,
    disclosure: <img src="/icons/Gr10.png" alt="" />,
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
                      href="mailto:  care@fundsontime.com"
                      className="underline font-semibold"
                    >
                      care@fundsontime.com
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
