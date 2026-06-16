"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import CsvTable from "../csvtable";

// app/privacy-policy/page.tsx
export default function Interest_Rate_Policy() {
  return (
    <div className="mt-6 min-h-screen bg-gray-50 pt-12 font-serif">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interest Rate <span className="text-red-700">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Policies That Ensure Transparency, Trust & Customer Protection at
            FundsOnTime
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Tristar Fincon Credit Private Limited (“the Company”), operating as
            a Non-Banking Finance Company (NBFC), is committed to adhering to
            the highest standards of regulatory compliance and fair practice.
            This policy is established in alignment with the Reserve Bank of
            India (RBI) Circular DNBS / PD / CC No. 95/ 03.05.002/ 2006-07 dated
            May 24, 2007, Notification No. DNBS. 204 / CGM (ASR)-2009 dated
            January 2, 2009, and the subsequent Guidelines on Fair Practices
            Code for NBFCs (collectively, "RBI Regulations").
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            In compliance with these regulations, which mandate the transparent
            disclosure of interest rates and risk assessment methodologies, this
            document formalizes the Company’s internal principles and procedures
            for determining interest rates, processing fees, and other charges
            for its lending products.
          </p>

          {/* Policies Grid */}
          <div className="space-y-8">
            {/* Objective of Policy */}
            <PolicyCard
              title="Objective Of Policy"
              content="To arrive at the benchmark rates to be used for different types of customer segments and to decide on the principals and approach of charging spreads to arrive at final rates charged from customers."
              linkText="Read More"
              pageSlug="policy/fair"
            />
            {/* Review of the Policy */}
            <PolicyCard
              title=" Review of the Policy"
              content="The Policy shall be reviewed once a year or in between if required due to changes required in the model, for example any addition/deletion of a particular component forming part of benchmark of calculation."
              linkText="Read More"
              pageSlug="policy/fair"
            />

            {/* Organisation Structure */}
            <PolicyCard
              title=" Organisation Structure"
              content={
                <>
                  <div>
                    <h1>I. Boards Of Directors</h1>
                    <p>
                      The Board of Directors is responsible for overseeing the
                      Interest Rate Policy. To ensure its effective execution,
                      the Board may delegate specific operational
                      responsibilities to the Asset Liability Committee (ALCO).
                    </p>
                    <br />
                    <h1>II. Assets Liability Committee</h1>
                    <p>
                      The Asset Liability Committee (ALCO) is responsible for
                      deciding changes to the benchmark interest rate. ALCO
                      shall meet monthly to review and determine the benchmark
                      rate, with all decisions reported to the Board of
                      Directors at the subsequent meeting. Individual business
                      units may establish internal pricing policies within the
                      framework of this Board-approved Interest Rate Policy to
                      determine customer-specific spreads. <br /> Any changes to
                      business level internal pricing policies(if any) would
                      need to be approved by any three people mentioned below.
                    </p>
                    <CsvTable filePath="/policy/Designation.csv" />
                  </div>
                </>
              }
              linkText="Read More"
              pageSlug="policy/fair"
            />
            {/* Interest Rate Model */}
            <PolicyCard
              title=" Interest Rate Model"
              content={
                <>
                  <div className="text-red-950">
                    <p>
                      The interest rate and yield for each loan product will be
                      determined by the Asset Liability Management Committee
                      (ALCO) periodically.
                    </p>
                    <br />
                    <p>
                      Interest rates will be based on various factors, including
                      the loan term, payment terms (monthly, quarterly, yearly),
                      repayment terms, moratorium periods, bullet payments,
                      back-ended payment schedules, and zero-coupon structured
                      loans.
                    </p>
                    <br />
                    <p>
                      Factors influencing the interest rate include the cost of
                      borrowed funds, matching tenor cost, market liquidity,
                      refinance avenues, competition offerings, customer
                      relationship tenure, disbursement costs, and other
                      cost-related elements (Cost of Fund). Additionally, credit
                      and default risk, customer segment, customer profile,
                      professional qualifications, earning and employment
                      stability, repayment ability, customer yield, risk
                      premium, primary and collateral securities, past repayment
                      track record, external ratings, creditworthiness, and
                      industry trends will also be considered.
                    </p>
                    <br />
                    <p>
                      Business costs will be factored into the interest rates,
                      including transaction complexity, capital risk weightage,
                      transaction size, borrower location, and other related
                      costs. The markup will reflect additional costs/overheads
                      and the designed margin.
                    </p>
                    <br />
                    <p>
                      The Company may use an interest rate model where the same
                      product and tenor availed during the same period may have
                      different interest rates for different customers based on
                      the factors mentioned above. Thus, interest rates may vary
                      between customers and their loans.
                    </p>
                    <br />
                    <p>
                      The annualized interest rate will be communicated to the
                      customer. Interest rates may be fixed, floating, or
                      variable. The prime lending rate for floating rates will
                      be reviewed periodically. For floating rates, the interest
                      rate will be reviewed and decided by the Company
                      periodically. The methodology for calculating the annual
                      percentage rate (AAPL) may change with ALCO's approval.
                    </p>
                    <br />
                    <p>
                      Interest rates will be computed on daily balances and
                      charged on monthly or other rests as decided by the
                      committee in accordance with applicable rules and
                      regulations.
                    </p>
                    <br />
                    <p>
                      Customers will be informed of the interest rates at the
                      time of loan sanction/availment, and the apportionment of
                      equated installments towards interest and principal dues
                      will be made available to the customer.
                    </p>
                    <br />
                    <p>
                      Changes in interest rates will be prospective, and
                      customers will be informed of any changes.
                    </p>
                    <br />
                    <p>
                      The Company may consider moratorium periods for interest
                      payment and principal repayment, with appropriate pricing
                      built in, in line with the product program.
                    </p>
                    <br />
                    <p>
                      For staggered disbursements, the interest rate will be
                      reviewed and may vary according to the prevailing rate at
                      the time of disbursement or as decided by the Company.
                    </p>
                  </div>
                </>
              }
              linkText="Read More"
              pageSlug="policy/fair"
            />

            <PolicyCard
              title="Additional Interest, Penal Interest, Charges, etc."
              content={
                <>
                  <div className=" text-red-950">
                    <p>
                      The Company may levy additional interest for adhoc
                      facilities and penal interest/default interest for any
                      delay or default in payments. Details of penal interest
                      charges for late repayment will be mentioned in the loan
                      agreement and communicated in the sanction letter.
                    </p>
                    <br />
                    <p>
                      The Company may levy processing/documentation and other
                      charges as expressly stated in the loan documents.
                      Additional financial charges such as processing charges,
                      documentation charges, cheque bouncing charges,
                      pre-payment/foreclosure charges, part disbursement
                      charges, cheque swaps, cash handling charges, RTGS/other
                      remittance charges, commitment fees, charges for issuing
                      NO DUE certificates, NOC, letters ceding charge on
                      assets/security, security swap & exchange charges, etc.,
                      will be levied as necessary. Applicable taxes, such as
                      Goods and Services Tax, will be collected at prevailing
                      rates.
                    </p>
                    <br />
                    <p>
                      Such additional interest, penal interest, and other
                      charges may vary based on the loan product, exposure
                      limit, customer segment, geographical location, and
                      generally represent the cost of rendering services to the
                      customers. Market practices will also be considered when
                      deciding the charges.
                    </p>
                    <br />
                    <p>
                      The interest rate applicable to each customer may change
                      based on the situation and the management’s perceived risk
                      on a case-by-case basis.
                    </p>
                    <br />
                    <p>
                      Changes in interest rates will be decided periodically,
                      depending on changes in benchmark rates, market
                      volatility, and competitor reviews.
                    </p>
                    <br />
                    <p>
                      Customers will be informed of changes in interest rates or
                      other charges in a manner deemed fit, as per the terms of
                      the loan documents. Any revisions in interest rates or
                      other charges will be prospective.
                    </p>
                    <br />
                    <p>
                      Claims for refunds or waivers of charges/penal
                      interest/additional interest will generally not be
                      entertained. The Company retains the sole discretion to
                      address such requests if any.
                    </p>
                  </div>
                </>
              }
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
              FundsOnTime Pvt. Ltd.
            </span>
          </p>
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
    </div>
  );
}
