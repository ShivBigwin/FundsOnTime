"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

// app/privacy-policy/page.tsx
export default function Disclaimer() {
  return (
    <div className="mt-6 min-h-screen bg-gray-50 pt-12 font-serif">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Disclaimer <span className="text-red-700">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Policies That Ensure Transparency, Trust & Customer Protection at
            FundsOnTime
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Integrity and transparency form the core of Tristar Fincon Credit
            Private Limited business values. We adhere to stringent regulations
            set by oversight authorities, including the Reserve Bank of India,
            ensuring that all our loan disbursement processes maintain the
            highest standards of legality and ethical compliance.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            However, we have become aware that certain fraudulent entities are
            falsely representing themselves as being associated with FundsOnTime
            Pvt Ltd. These deceptive operations attempt to mislead individuals
            by demanding advance payments for loan approvals—a practice we
            strictly prohibit and condemn.
          </p>

          <div className="bg-yellow-50 border-l-4 border-red-900 p-4 mb-8">
            <p className="text-red-900">
              We must emphasize the critical importance of exercising extreme
              caution with any entity that demands an advance payment for a
              loan. We urge you to remain vigilant and avoid such organizations
              entirely. Please be assured that we are actively pursuing all
              available legal measures to stop these fraudulent practices and
              protect our valued customers.
            </p>
            <br />
            <p className="text-red-900">
              We are dedicated to conducting business with integrity and
              upholding openness in all of our interactions. There are never any
              up-front costs associated with loan applications or associated
              services at Tristar Fincon Credit Private Limited. Any demand for
              upfront payment coming from unapproved sources is blatantly
              fraudulent and goes against our policies.
            </p>
            <br />
            <p className="text-red-900">
              We implore you to keep an eye out for any questionable
              communications or actions. Please report any such incidents as
              soon as possible using our approved methods of communication. By
              doing this, you assist us in fortifying our anti-fraud protocols
              and enhancing the protection of your rights..
            </p>
          </div>

          {/* Policies Grid */}
          <div className="space-y-8">
            {/* Refund Policy */}
            <PolicyCard
              title=""
              content="Your awareness and collaboration are vital to maintaining the high quality and dependability of our services. We are dedicated to providing a secure and trustworthy environment for all our customers and promise to address any concerns promptly and effectively. By staying alert together, we can protect the integrity of our services, uphold the highest standards, and safeguard our entire community."
              linkText="Read More"
              pageSlug="policy/fair"
            />
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed mt-6">
            We appreciate your cooperation and dedication to maintaining the
            quality of our services.
            <br />
            <br />
            <span className="font-bold">
              Regards,
              <br />
              Tristar Fincon Credit Private Limited
            </span>
          </p>
          {/* Footer Note */}
          <div className="text-center text-gray-500 text-sm pt-6">
            <p>
              Last updated: {new Date().getFullYear()} | Tristar Fincon Credit
              Private Limited
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
