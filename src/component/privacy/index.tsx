"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import Image from "next/image";

// app/privacy-policy/page.tsx
export default function PrivacyPolicy() {
  return (
    <div className="mt-6 min-h-screen bg-gray-50 pt-12 font-serif">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Background Image */}
        <div className="relative mb-12 rounded-xl overflow-hidden shadow-lg">
          {/* Background Image Container */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-700/80 z-0">
            {/* You can use a real image by replacing the gradient with: */}
            <Image
              src="/policy/policy.jpg"
              alt="Background"
              fill
              className="object-cover h-full"
              priority
            />
          </div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-0"></div>

          {/* Content */}
          <div className="relative z-10 text-center py-16 px-4">
            {/* <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Privacy Policies
            </h1> */}
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md ">
              Policies That Ensure Transparency, Trust & Customer Protection at
              FundsOnTime
            </p>

            {/* Decorative element */}
            <div className="mt-8 flex justify-center mt-10">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <div></div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed">
            At FTristar Fincon Credit Private Limited, we believe in responsible
            lending, ethical practices, and complete transparency in all
            customer dealings. As a Reserve Bank of India (RBI)- registered
            NBFC, we adhere to well-defined policies to safeguard customer
            interests, ensure regulatory compliance, and foster trust in every
            interaction.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            This online payment system is provided by HyperLend Pvt. Ltd . The
            FundsOnTime may update these terms from time to time and any changes
            will be effective immediately on being set out on this portal.
            Please ensure that you are aware of the current terms. The country
            of domicile of FundsOnTime is India and legal jurisdiction is New
            Delhi, India. Please read these terms carefully before using the
            online payment facility. Using the Online payment facility on this
            website indicates that you accept these terms. If you do not accept
            these terms do not use this facility.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-700">
              By registering on our website, you agree to receive marketing
              communications from Nutrabay via email, SMS, RCS, WhatsApp, push
              notifications, and other similar channels.
            </p>
          </div>

          {/* Policies Grid */}
          <div className="space-y-8">
            {/* Refund Policy */}
            <PolicyCard
              title="Refund Policy :"
              content="Refunds, if applicable, at the discretion of the Management, will only be made as per the sources of Net Banking/debit/credit card used for the original transaction. For the avoidance of doubt, nothing in this Policy shall require FundsOnTime to refund the Charges (or part thereof) unless such Charges (or part thereof) have previously been paid by the customer through online payment mode and the same has been credited into the accounts of FundsOnTime and has the approval of the Management for refund. The Refunded amount will be credited back to source account within 7 working days."
              linkText="Read More"
              pageSlug="policy/fair"
            />

            {/* Cancel and Return Policy */}
            <PolicyCard
              title="Cancel and Return Policy :"
              content="Cancel and Return, if applicable, at the discretion of the Management, will only be made as per the sources of Net Banking/debit/credit card used for the original transaction. For the avoidance of doubt, nothing in this Policy shall require FundsOnTime to Cancel and Return the Charges (or part thereof) unless such Charges (or part thereof) have previously been paid by the customer through online payment mode and the same has been credited into the accounts of FundsOnTime and has the approval of the Management for Cancel and Return. The cancellation and return will take up to 20 working days."
              linkText="Read More"
              pageSlug="policy/grievance"
            />

            {/* Privacy Policy */}
            <PolicyCard
              title="Privacy Policy:"
              content="This Privacy Policy applies to all of the Fees, Payment of Dues, Charges and related payments payable to FundsOnTime through online mode. Sometimes, we may post specific privacy notices to explain in more detail. If you have any questions about this Privacy Policy, please feel free to contact us through our email care@fundsontime.com"
              linkText="Read More"
              pageSlug="#"
            />

            {/* Changes to our Privacy Policy: */}
            <PolicyCard
              title="Changes to our Privacy Policy:"
              content="FundsOnTime reserves the entire right to modify / amend / remove this privacy statement anytime and without any reason. Nothing contained herein creates or is intended to create a contract/agreement between FundsOnTime and any user visiting the website or providing Identifying information of any kind."
              linkText="Read More"
              pageSlug="#"
            />

            {/* DND Policy: */}
            <PolicyCard
              title="DND Policy:"
              content="If you wish to stop any further sms/email alerts/contacts from our side, all you need to do is to send an email to care@fundsontime.com with your registered mobile number and you will be excluded from the ‘alerts list’."
              linkText="Read More"
              pageSlug="#"
            />

            {/* Terms of Payment: */}
            <PolicyCard
              title="Terms of Payment:"
              content={
                <>
                  1. Charges, Taxes applicable for online payment through
                  Payment Gateway will be borne by the customer. <br />
                  2. In respect of any failed transactions of any of the
                  Customers, processed through this service, the amount will be
                  refunded after deducting the transaction charges.
                </>
              }
              linkText="Read More"
              pageSlug="#"
            />
          </div>
          {/* Footer Note */}
          <div className="text-center text-gray-500 text-sm pt-6">
            <p>
              Last updated: {new Date().getFullYear()} | FundsOnTime Private
              Limited
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Policy Card Component
interface PolicyCardProps {
  title: string;
  content: ReactNode;
  linkText: string;
  pageSlug: string;
}

function PolicyCard({ title, content, linkText, pageSlug }: PolicyCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${pageSlug}`);
  };
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{content}</p>
      {/* <button
        onClick={handleClick}
        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200" >
        {linkText} →

      </button> */}
    </div>
  );
}
