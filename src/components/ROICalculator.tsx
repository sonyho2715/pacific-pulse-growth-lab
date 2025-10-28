"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function ROICalculator() {
  const [callsPerDay, setCallsPerDay] = useState(20);
  const [missedPercent, setMissedPercent] = useState(30);
  const [avgCustomerValue, setAvgCustomerValue] = useState(150);
  const [conversionRate, setConversionRate] = useState(40);

  const [results, setResults] = useState({
    missedCustomersPerMonth: 0,
    lostRevenuePerMonth: 0,
    lostRevenuePerYear: 0,
    capturedCustomersPerMonth: 0,
    additionalRevenuePerMonth: 0,
    additionalRevenuePerYear: 0,
    roi: 0,
    paybackWeeks: 0,
  });

  useEffect(() => {
    // Calculate missed opportunities
    const missedCallsPerDay = callsPerDay * (missedPercent / 100);
    const missedCallsPerMonth = missedCallsPerDay * 30;

    const missedCustomersPerMonth = missedCallsPerMonth * (conversionRate / 100);
    const lostRevenuePerMonth = missedCustomersPerMonth * avgCustomerValue;
    const lostRevenuePerYear = lostRevenuePerMonth * 12;

    // Calculate with AI
    const capturedCustomersPerMonth = missedCustomersPerMonth * 0.7; // 70% capture rate with AI
    const additionalRevenuePerMonth = capturedCustomersPerMonth * avgCustomerValue;
    const additionalRevenuePerYear = additionalRevenuePerMonth * 12;

    // ROI calculations
    const monthlyInvestment = 497;
    const roi = additionalRevenuePerMonth / monthlyInvestment;
    const paybackWeeks = (monthlyInvestment / (additionalRevenuePerMonth / 4.33));

    setResults({
      missedCustomersPerMonth: Math.round(missedCustomersPerMonth),
      lostRevenuePerMonth: Math.round(lostRevenuePerMonth),
      lostRevenuePerYear: Math.round(lostRevenuePerYear),
      capturedCustomersPerMonth: Math.round(capturedCustomersPerMonth),
      additionalRevenuePerMonth: Math.round(additionalRevenuePerMonth),
      additionalRevenuePerYear: Math.round(additionalRevenuePerYear),
      roi: roi,
      paybackWeeks: Math.round(paybackWeeks * 10) / 10,
    });
  }, [callsPerDay, missedPercent, avgCustomerValue, conversionRate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">See What You&apos;re Losing Right Now</CardTitle>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Adjust the sliders to match your business
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Input Section */}
        <div className="space-y-6 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="space-y-3">
            <Label className="flex justify-between">
              <span>How many calls/messages do you get per day?</span>
              <span className="font-bold text-blue-600">{callsPerDay}</span>
            </Label>
            <input
              type="range"
              min="5"
              max="100"
              value={callsPerDay}
              onChange={(e) => setCallsPerDay(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
          </div>

          <div className="space-y-3">
            <Label className="flex justify-between">
              <span>What % go unanswered after hours or when busy?</span>
              <span className="font-bold text-blue-600">{missedPercent}%</span>
            </Label>
            <input
              type="range"
              min="10"
              max="80"
              value={missedPercent}
              onChange={(e) => setMissedPercent(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
          </div>

          <div className="space-y-3">
            <Label className="flex justify-between">
              <span>What&apos;s your average customer value?</span>
              <span className="font-bold text-blue-600">{formatCurrency(avgCustomerValue)}</span>
            </Label>
            <input
              type="range"
              min="50"
              max="1000"
              step="25"
              value={avgCustomerValue}
              onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
          </div>

          <div className="space-y-3">
            <Label className="flex justify-between">
              <span>How many would book if you responded instantly?</span>
              <span className="font-bold text-blue-600">{conversionRate}%</span>
            </Label>
            <input
              type="range"
              min="20"
              max="80"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Currently Missing */}
          <div className="p-6 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20">
            <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">
              You&apos;re Currently Missing:
            </h3>
            <div className="space-y-2">
              <p className="text-lg">
                → <span className="font-bold">{results.missedCustomersPerMonth}</span> potential customers per month
              </p>
              <p className="text-lg">
                → Estimated lost revenue: <span className="font-bold">{formatCurrency(results.lostRevenuePerMonth)}</span> per month
              </p>
              <p className="text-xl font-bold text-red-700 dark:text-red-400 mt-3">
                → Annual opportunity cost: {formatCurrency(results.lostRevenuePerYear)}
              </p>
            </div>
          </div>

          {/* With AI */}
          <div className="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">
              With 24/7 AI Answering:
            </h3>
            <div className="space-y-2">
              <p className="text-lg">
                → Capture <span className="font-bold">{results.capturedCustomersPerMonth}</span> additional customers/month
              </p>
              <p className="text-lg">
                → Additional revenue: <span className="font-bold">{formatCurrency(results.additionalRevenuePerMonth)}</span> per month
              </p>
              <p className="text-xl font-bold text-green-700 dark:text-green-400 mt-3">
                → Annual impact: {formatCurrency(results.additionalRevenuePerYear)}
              </p>
            </div>
          </div>

          {/* ROI Summary */}
          <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
            <div className="space-y-3">
              <p className="text-lg">
                Your AI investment: <span className="font-bold">$497/month</span>
              </p>
              <p className="text-lg">
                → ROI: <span className="font-bold text-2xl">{results.roi.toFixed(2)}x</span> return on investment
              </p>
              <p className="text-lg">
                → Payback period: <span className="font-bold text-2xl">{results.paybackWeeks} weeks</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Button size="lg" className="text-lg px-8" asChild>
            <a href="#application">Apply for Founding Client Program</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
