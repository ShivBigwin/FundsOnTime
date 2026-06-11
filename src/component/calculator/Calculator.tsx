"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  Calendar,
  IndianRupee,
  TrendingUp,
  Clock,
  ShieldCheck,
  Calculator,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function ShortTermLoanCalculator() {
  // Form state
  const [loanAmount, setLoanAmount] = useState<number>(50000);
  const [interestRate, setInterestRate] = useState<number>(1.0);
  const [loanTenureDays, setLoanTenureDays] = useState<number>(30);
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [dailyInterest, setDailyInterest] = useState<number>(0);
  const [pieData, setPieData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"calculator" | "breakdown">(
    "calculator",
  );

  // Constants
  const MIN_AMOUNT = 10000;
  const MAX_AMOUNT = 100000;
  const MIN_INTEREST = 0.6;
  const MAX_INTEREST = 1.5;
  const MIN_TENURE = 7; // Minimum 7 days
  const MAX_TENURE = 45;

  // Colors matching the gradient theme
  const COLORS = {
    primary: "#3B82F6",
    secondary: "#06B6D4",
    success: "#10B981",
    warning: "#F59E0B",
    gradient: "from-blue-600 to-cyan-500",
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatCompactCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  // Calculate repayment
  const calculateRepayment = useCallback(() => {
    const principal = loanAmount;
    const dailyRate = interestRate / 100;
    const days = loanTenureDays;

    // Simple interest calculation for short-term loans
    const totalInterestValue = principal * dailyRate * days;
    const totalPaymentValue = principal + totalInterestValue;
    const dailyInterestValue = totalInterestValue / days;

    setTotalInterest(Math.round(totalInterestValue));
    setTotalPayment(Math.round(totalPaymentValue));
    setDailyInterest(Math.round(dailyInterestValue));

    // For short-term loans, repayment is typically a single payment at the end
    setEmi(Math.round(totalPaymentValue));

    const principalPercentage = (principal / totalPaymentValue) * 100;
    const interestPercentage = (totalInterestValue / totalPaymentValue) * 100;

    setPieData([
      {
        name: "Principal Amount",
        value: principal,
        percentage: principalPercentage.toFixed(1),
        color: COLORS.primary,
      },
      {
        name: "Interest Amount",
        value: totalInterestValue,
        percentage: interestPercentage.toFixed(1),
        color: COLORS.secondary,
      },
    ]);
  }, [loanAmount, interestRate, loanTenureDays]);

  useEffect(() => {
    calculateRepayment();
  }, [calculateRepayment]);

  // Calculate daily breakdown
  const dailyBreakdown = useMemo(() => {
    const days = Math.min(loanTenureDays, 45);
    const dailyInterestAmt = totalInterest / days;
    const dailyPrincipalAmt = loanAmount / days;

    const schedule = [];
    let remainingPrincipal = loanAmount;

    for (let day = 1; day <= days; day++) {
      const interestForDay = remainingPrincipal * (interestRate / 100);
      const principalForDay = dailyPrincipalAmt;
      remainingPrincipal -= principalForDay;

      if (remainingPrincipal < 0) remainingPrincipal = 0;

      schedule.push({
        day,
        interestPaid: interestForDay,
        principalPaid: principalForDay,
        remaining: remainingPrincipal,
        totalPaid: interestForDay + principalForDay,
      });
    }

    return schedule;
  }, [loanAmount, interestRate, loanTenureDays, totalInterest]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= MIN_AMOUNT && value <= MAX_AMOUNT) {
      setLoanAmount(value);
    }
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= MIN_INTEREST && value <= MAX_INTEREST) {
      setInterestRate(value);
    }
  };

  const handleTenureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= MIN_TENURE && value <= MAX_TENURE) {
      setLoanTenureDays(value);
    }
  };

  const quickSelect = (amount: number, rate?: number, tenure?: number) => {
    setLoanAmount(amount);
    if (rate) setInterestRate(rate);
    if (tenure) setLoanTenureDays(tenure);
  };

  const resetCalculator = () => {
    setLoanAmount(50000);
    setInterestRate(1.0);
    setLoanTenureDays(30);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Instant Short-Term Loan
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-cyan-800 bg-clip-text text-transparent">
            Short-Term Loan Calculator
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Calculate your repayment amount for loans up to 45 days with
            competitive interest rates
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Calculator Inputs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Loan Parameters
                </h3>
                <button
                  onClick={resetCalculator}
                  className="text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </button>
              </div>

              <div className="space-y-8">
                {/* Loan Amount */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-blue-600" />
                      Loan Amount
                    </label>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={MIN_AMOUNT}
                    max={MAX_AMOUNT}
                    step="1000"
                    value={loanAmount}
                    onChange={handleAmountChange}
                    className="w-full h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>₹10K</span>
                    <span>₹25K</span>
                    <span>₹50K</span>
                    <span>₹75K</span>
                    <span>₹1L</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (
                          !isNaN(val) &&
                          val >= MIN_AMOUNT &&
                          val <= MAX_AMOUNT
                        ) {
                          setLoanAmount(val);
                        }
                      }}
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                      INR
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Min: ₹10,000 | Max: ₹1,00,000
                  </div>
                </motion.div>

                {/* Interest Rate - Daily */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-cyan-600" />
                      Daily Interest Rate
                    </label>
                    <span className="text-2xl font-bold text-cyan-600">
                      {interestRate.toFixed(2)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={MIN_INTEREST}
                    max={MAX_INTEREST}
                    step="0.05"
                    value={interestRate}
                    onChange={handleInterestChange}
                    className="w-full h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0.6%</span>
                    <span>0.8%</span>
                    <span>1.0%</span>
                    <span>1.2%</span>
                    <span>1.5%</span>
                  </div>
                  <div className="text-xs text-gray-500 bg-blue-50 rounded-lg p-2">
                    <span className="font-medium">Note:</span> This is the daily
                    interest rate charged on the principal amount
                  </div>
                </motion.div>

                {/* Loan Tenure - Days */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      Loan Tenure
                    </label>
                    <span className="text-2xl font-bold text-emerald-600">
                      {loanTenureDays} Days
                    </span>
                  </div>
                  <input
                    type="range"
                    min={MIN_TENURE}
                    max={MAX_TENURE}
                    step="1"
                    value={loanTenureDays}
                    onChange={handleTenureChange}
                    className="w-full h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>7d</span>
                    <span>15d</span>
                    <span>30d</span>
                    <span>45d</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-50 rounded-xl p-2 text-center">
                      <span className="text-gray-500">Weeks</span>
                      <div className="font-semibold text-gray-800">
                        {(loanTenureDays / 7).toFixed(1)} weeks
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-2 text-center">
                      <span className="text-gray-500">Months</span>
                      <div className="font-semibold text-gray-800">
                        {(loanTenureDays / 30).toFixed(1)} months
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Select Buttons */}
                <motion.div variants={itemVariants}>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    Common Loan Scenarios
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Small", amount: 15000, rate: 0.8, tenure: 15 },
                      {
                        label: "Standard",
                        amount: 50000,
                        rate: 1.0,
                        tenure: 30,
                      },
                      { label: "Large", amount: 85000, rate: 1.2, tenure: 45 },
                    ].map((preset) => (
                      <button
                        key={preset.label}
                        onClick={() =>
                          quickSelect(preset.amount, preset.rate, preset.tenure)
                        }
                        className="py-2 px-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 border border-gray-100 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-600"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="border-t border-gray-100 bg-gray-50/50 p-6">
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Quick Disbursal", value: "24 Hours", icon: Zap },
                  {
                    label: "Min Interest",
                    value: "0.6%/day",
                    icon: TrendingUp,
                  },
                  { label: "Max Tenure", value: "45 Days", icon: Calendar },
                  {
                    label: "No Hidden Fees",
                    value: "Guaranteed",
                    icon: ShieldCheck,
                  },
                ].map((feature) => (
                  <div key={feature.label} className="text-center">
                    <feature.icon className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">{feature.label}</div>
                    <div className="text-xs font-semibold text-gray-800 mt-0.5">
                      {feature.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Tab Navigation */}
            <div className="flex gap-2 bg-white rounded-xl p-1 border border-gray-100 shadow-sm">
              {[
                {
                  id: "calculator",
                  label: "Repayment Summary",
                  icon: Calculator,
                },
                { id: "breakdown", label: "Daily Breakdown", icon: Calendar },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-800 to-cyan-800 text-white shadow-md"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "calculator" ? (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Total Repayment Card */}
                  <div className="bg-gradient-to-br from-blue-800 to-cyan-800 rounded-2xl p-8 text-white shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-100">
                        Total Repayment Amount
                      </span>
                      <Clock className="w-5 h-5 text-blue-200" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                      {formatCurrency(totalPayment)}
                    </div>
                    <p className="text-blue-100 mb-6">
                      Due after {loanTenureDays} days
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-sm text-blue-200 mb-1">
                          Principal Amount
                        </div>
                        <div className="text-xl font-bold">
                          {formatCurrency(loanAmount)}
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-sm text-blue-200 mb-1">
                          Total Interest
                        </div>
                        <div className="text-xl font-bold">
                          {formatCurrency(totalInterest)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        label: "Daily Interest",
                        value: formatCurrency(dailyInterest),
                        color: "blue",
                        sub: "per day",
                      },
                      {
                        label: "Interest Rate",
                        value: `${interestRate.toFixed(2)}%`,
                        color: "cyan",
                        sub: "daily",
                      },
                      {
                        label: "Interest/Principal",
                        value: `${((totalInterest / loanAmount) * 100).toFixed(
                          1,
                        )}%`,
                        color: "teal",
                        sub: "of principal",
                      },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center"
                      >
                        <div className="text-xs text-gray-500 mb-1">
                          {metric.label}
                        </div>
                        <div
                          className={`text-lg font-bold text-${metric.color}-600`}
                        >
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {metric.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Payment Distribution */}
                  <div className="bg-white rounded-xl border border-gray-100 p-5">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      Payment Distribution
                    </h4>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-sm text-gray-600">Principal</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-cyan-400" />
                        <span className="text-sm text-gray-600">Interest</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{
                          width: `${(loanAmount / totalPayment) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-xl">
                      <div className="text-xs text-blue-700 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Your total repayment includes{" "}
                        {formatCurrency(loanAmount)} principal +{" "}
                        {formatCurrency(totalInterest)} interest
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="breakdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Pie Chart */}
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      Interest vs Principal
                    </h3>

                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percentage }) => `${percentage}%`}
                            outerRadius="80%"
                            innerRadius="55%"
                            fill="#8884d8"
                            dataKey="value"
                            paddingAngle={4}
                            strokeWidth={2}
                            stroke="#ffffff"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value) => [
                              formatCurrency(value as number),
                              "Amount",
                            ]}
                            contentStyle={{
                              borderRadius: "12px",
                              border: "1px solid #e5e7eb",
                              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                            }}
                          />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Daily Breakdown Table */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Daily Interest Breakdown
                      </h4>
                      <div className="max-h-64 overflow-y-auto rounded-xl border border-gray-100">
                        <table className="w-full text-sm">
                          <thead className="bg-gray-50 sticky top-0">
                            <tr className="text-gray-600">
                              <th className="px-4 py-2 text-left">Day</th>
                              <th className="px-4 py-2 text-right">
                                Daily Interest
                              </th>
                              <th className="px-4 py-2 text-right">
                                Cumulative
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {dailyBreakdown.slice(0, 15).map((item, idx) => (
                              <tr
                                key={idx}
                                className="border-t border-gray-50 hover:bg-gray-50/50"
                              >
                                <td className="px-4 py-2 font-medium text-gray-700">
                                  Day {item.day}
                                </td>
                                <td className="px-4 py-2 text-right text-orange-500">
                                  {formatCurrency(item.interestPaid)}
                                </td>
                                <td className="px-4 py-2 text-right text-gray-600">
                                  {formatCurrency(
                                    dailyBreakdown
                                      .slice(0, idx + 1)
                                      .reduce(
                                        (sum, d) => sum + d.interestPaid,
                                        0,
                                      ),
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {dailyBreakdown.length > 15 && (
                          <div className="px-4 py-2 text-center text-xs text-gray-400 border-t">
                            +{dailyBreakdown.length - 15} more days
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Early Repayment Benefit */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-emerald-800">
                          Early Repayment Benefit
                        </div>
                        <div className="text-sm text-emerald-700">
                          Pay back in{" "}
                          <strong>
                            {Math.floor(loanTenureDays * 0.7)} days
                          </strong>{" "}
                          and save approximately{" "}
                          <strong>{formatCurrency(totalInterest * 0.3)}</strong>{" "}
                          on interest.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-800">
                    Ready to get instant funds?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Apply in minutes, get money in your account
                  </p>
                </div>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-800 to-cyan-800 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    Apply Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 rounded-xl border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 text-sm"
                  >
                    Calculate EMI
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-400">
            *Interest rates range from 0.6% to 1.5% per day. Loan amounts from
            ₹10,000 to ₹1,00,000. Tenure from 7 to 45 days. Terms and conditions
            apply.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
