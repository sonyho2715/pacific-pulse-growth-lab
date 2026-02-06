"use client";

import { useState, useEffect } from "react";
import { DollarSign, TrendingUp, Calendar, AlertCircle } from "lucide-react";
import { PLANS } from "@/lib/plans";

interface ROIResults {
  lostRevenuePerMonth: number;
  lostRevenuePerYear: number;
  capturedRevenuePerMonth: number;
  capturedRevenuePerYear: number;
  paybackPeriods: {
    planId: string;
    planName: string;
    months: number;
    totalFirstYearCost: number;
    roi: number;
    recommended: boolean;
  }[];
}

export function ROICalculator() {
  const [avgBookingValue, setAvgBookingValue] = useState(150);
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(10);
  const [conversionRate, setConversionRate] = useState(30);
  const [results, setResults] = useState<ROIResults | null>(null);

  useEffect(() => {
    calculateROI();
  }, [avgBookingValue, missedCallsPerWeek, conversionRate]);

  const calculateROI = () => {
    // Calculate lost revenue
    const missedCallsPerMonth = missedCallsPerWeek * 4.3; // Average weeks per month
    const convertedCalls = missedCallsPerMonth * (conversionRate / 100);
    const lostRevenuePerMonth = convertedCalls * avgBookingValue;
    const lostRevenuePerYear = lostRevenuePerMonth * 12;

    // With AI automation, we capture 70% of missed opportunities
    const capturedRevenuePerMonth = lostRevenuePerMonth * 0.7;
    const capturedRevenuePerYear = capturedRevenuePerMonth * 12;

    // Calculate payback for each plan
    const paybackPeriods = PLANS.map(plan => {
      const totalFirstYearCost = plan.price.monthly * 12;
      const monthsToPayback = totalFirstYearCost / capturedRevenuePerMonth;
      const roi = ((capturedRevenuePerYear - totalFirstYearCost) / totalFirstYearCost) * 100;

      return {
        planId: plan.id,
        planName: plan.name,
        months: Math.round(monthsToPayback * 10) / 10,
        totalFirstYearCost,
        roi: Math.round(roi),
        recommended: plan.recommended || false,
      };
    });

    setResults({
      lostRevenuePerMonth,
      lostRevenuePerYear,
      capturedRevenuePerMonth,
      capturedRevenuePerYear,
      paybackPeriods,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl border border-slate-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Calculate Your Lost Revenue
        </h3>
        <p className="text-slate-600">
          See how much you're losing without 24/7 AI automation
        </p>
      </div>

      {/* Input Controls */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Average Booking Value */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Average Booking Value
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="number"
              value={avgBookingValue}
              onChange={(e) => setAvgBookingValue(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              min="0"
              step="10"
            />
          </div>
          <p className="text-xs text-slate-500 mt-1">Typical: $50-$300</p>
        </div>

        {/* Missed Calls Per Week */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Missed Calls Per Week
          </label>
          <div className="relative">
            <AlertCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="number"
              value={missedCallsPerWeek}
              onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              min="0"
              step="1"
            />
          </div>
          <p className="text-xs text-slate-500 mt-1">Typical: 5-20 calls</p>
        </div>

        {/* Conversion Rate */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Booking Conversion Rate
          </label>
          <div className="relative">
            <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="number"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              min="0"
              max="100"
              step="5"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">Typical: 20-40%</p>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-6">
          {/* Lost Revenue Alert */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-amber-900 mb-1">
                  You're Losing Revenue Right Now
                </h4>
                <p className="text-sm text-amber-700 mb-3">
                  Without 24/7 AI automation, you're missing these opportunities
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-amber-700 mb-1">Lost Per Month</p>
                    <p className="text-2xl font-bold text-amber-900">
                      {formatCurrency(results.lostRevenuePerMonth)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-amber-700 mb-1">Lost Per Year</p>
                    <p className="text-2xl font-bold text-amber-900">
                      {formatCurrency(results.lostRevenuePerYear)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* With AI Revenue Capture */}
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-emerald-900 mb-1">
                  With AI-Powered Automation
                </h4>
                <p className="text-sm text-emerald-700 mb-3">
                  Our AI captures ~70% of missed opportunities automatically
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-emerald-700 mb-1">Captured Per Month</p>
                    <p className="text-2xl font-bold text-emerald-900">
                      {formatCurrency(results.capturedRevenuePerMonth)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-emerald-700 mb-1">Captured Per Year</p>
                    <p className="text-2xl font-bold text-emerald-900">
                      {formatCurrency(results.capturedRevenuePerYear)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payback Analysis */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sky-600" />
              Payback Period by Plan
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.paybackPeriods.slice(0, 3).map((plan) => (
                <div
                  key={plan.planId}
                  className={`p-5 rounded-xl border-2 transition-all ${
                    plan.recommended
                      ? 'bg-sky-50 border-sky-500 shadow-lg scale-105'
                      : 'bg-white border-slate-200 hover:border-sky-300'
                  }`}
                >
                  {plan.recommended && (
                    <div className="text-xs font-semibold text-sky-600 mb-2 uppercase">
                      ⭐ Recommended
                    </div>
                  )}
                  <h5 className="font-bold text-slate-900 mb-4">{plan.planName}</h5>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-slate-600">Pays for itself in</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {plan.months} {plan.months === 1 ? 'month' : 'months'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600">Year 1 Investment</p>
                      <p className="text-sm font-semibold text-slate-700">
                        {formatCurrency(plan.totalFirstYearCost)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600">First Year ROI</p>
                      <p className={`text-lg font-bold ${plan.roi > 0 ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {plan.roi > 0 ? '+' : ''}{plan.roi}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-4">
              These calculations show potential revenue capture with 24/7 AI booking automation
            </p>
            <a
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition shadow-lg hover:shadow-xl"
            >
              Get Your Free Strategy Call
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
