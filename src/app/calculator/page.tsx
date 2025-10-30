"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CalculatorPage() {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState("");
  const [avgBookingValue, setAvgBookingValue] = useState("");
  const [hoursOnContent, setHoursOnContent] = useState("");
  const [hourlyRate, setHourlyRate] = useState("50");

  // Calculate losses
  const weeklyCallLoss = parseInt(missedCallsPerWeek) * parseInt(avgBookingValue) || 0;
  const monthlyCallLoss = weeklyCallLoss * 4;
  const yearlyCallLoss = monthlyCallLoss * 12;

  const monthlyTimeLoss = parseInt(hoursOnContent) * parseInt(hourlyRate) || 0;
  const yearlyTimeLoss = monthlyTimeLoss * 12;

  const totalMonthlyLoss = monthlyCallLoss + monthlyTimeLoss;
  const totalYearlyLoss = yearlyCallLoss + yearlyTimeLoss;

  // Pacific Pulse savings
  const monthlySavings = totalMonthlyLoss - 497; // $497/month cost
  const yearlySavings = (totalMonthlyLoss * 12) - (497 * 12);
  const roi = monthlySavings > 0 ? ((monthlySavings / 497) * 100).toFixed(0) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                PP
              </div>
              <span className="font-bold text-lg">Pacific Pulse</span>
            </div>
          </Link>
          <Link href="/apply">
            <Button size="sm">Apply Now</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Free ROI Calculator
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How Much Revenue Are You <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Losing Right Now?</span>
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Calculate exactly how much missed calls and manual content creation are costing your Hawaii business every month
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Side */}
            <Card className="border-2 border-zinc-200 dark:border-zinc-800">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle>Enter Your Numbers</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label className="text-lg font-semibold mb-2 block">
                    1. Missed Calls & Lost Revenue
                  </Label>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="missed-calls">
                        How many calls do you miss per week? <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="missed-calls"
                        type="number"
                        value={missedCallsPerWeek}
                        onChange={(e) => setMissedCallsPerWeek(e.target.value)}
                        placeholder="e.g., 15"
                        className="text-lg mt-2"
                      />
                      <p className="text-xs text-zinc-500 mt-1">After hours, weekends, when busy</p>
                    </div>

                    <div>
                      <Label htmlFor="booking-value">
                        Average booking/customer value? <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="booking-value"
                        type="number"
                        value={avgBookingValue}
                        onChange={(e) => setAvgBookingValue(e.target.value)}
                        placeholder="e.g., 150"
                        className="text-lg mt-2"
                      />
                      <p className="text-xs text-zinc-500 mt-1">Average transaction value</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
                  <Label className="text-lg font-semibold mb-2 block">
                    2. Time Spent on Content Creation
                  </Label>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="content-hours">
                        Hours per month on blogs/social media? <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="content-hours"
                        type="number"
                        value={hoursOnContent}
                        onChange={(e) => setHoursOnContent(e.target.value)}
                        placeholder="e.g., 20"
                        className="text-lg mt-2"
                      />
                      <p className="text-xs text-zinc-500 mt-1">Writing, designing, scheduling posts</p>
                    </div>

                    <div>
                      <Label htmlFor="hourly-rate">
                        Your hourly value?
                      </Label>
                      <Input
                        id="hourly-rate"
                        type="number"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(e.target.value)}
                        placeholder="e.g., 50"
                        className="text-lg mt-2"
                      />
                      <p className="text-xs text-zinc-500 mt-1">What could you earn doing revenue-generating work instead?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Side */}
            <div className="space-y-6">
              {totalMonthlyLoss > 0 ? (
                <>
                  <Card className="border-4 border-red-500">
                    <CardHeader className="bg-red-50 dark:bg-red-950/20">
                      <CardTitle className="text-red-600 dark:text-red-400 text-center">
                        💸 Your Current Losses
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                          <span>Missed Call Revenue (monthly):</span>
                          <span className="text-2xl font-bold text-red-600">${monthlyCallLoss.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                          <span>Time Wasted on Content (monthly):</span>
                          <span className="text-2xl font-bold text-red-600">${monthlyTimeLoss.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center pt-4 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                          <span className="font-semibold">Total Monthly Loss:</span>
                          <span className="text-3xl font-bold text-red-600">${totalMonthlyLoss.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center bg-red-100 dark:bg-red-950/30 p-4 rounded-lg">
                          <span className="font-semibold">Total Yearly Loss:</span>
                          <span className="text-4xl font-bold text-red-600">${totalYearlyLoss.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-4 border-green-500">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                      <CardTitle className="text-center">
                        ✅ With Pacific Pulse AI Automation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                          <span>Monthly Cost:</span>
                          <span className="text-2xl font-bold">$497</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                          <span>Revenue Captured (70%):</span>
                          <span className="text-2xl font-bold text-green-600">+${Math.round(monthlyCallLoss * 0.7).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                          <span>Time Saved:</span>
                          <span className="text-2xl font-bold text-green-600">+${monthlyTimeLoss.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center pt-4 bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                          <span className="font-semibold">Net Monthly Gain:</span>
                          <span className="text-3xl font-bold text-green-600">+${monthlySavings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center bg-green-100 dark:bg-green-950/30 p-4 rounded-lg">
                          <span className="font-semibold">Net Yearly Gain:</span>
                          <span className="text-4xl font-bold text-green-600">+${yearlySavings.toLocaleString()}</span>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg text-center">
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Return on Investment</p>
                          <p className="text-5xl font-bold text-blue-600">{roi}%</p>
                          <p className="text-xs text-zinc-500 mt-2">ROI in first month</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
                    <CardContent className="p-6">
                      <p className="text-center text-lg mb-4">
                        <strong>Your business is losing ${totalYearlyLoss.toLocaleString()} per year.</strong>
                      </p>
                      <p className="text-center text-zinc-700 dark:text-zinc-300 mb-6">
                        Pacific Pulse can help you capture <strong className="text-green-600">${Math.round(yearlySavings).toLocaleString()}/year</strong> in additional revenue and time savings.
                      </p>
                      <Link href="/apply">
                        <Button size="lg" className="w-full text-lg">
                          Yes, I Want to Capture This Revenue →
                        </Button>
                      </Link>
                      <p className="text-xs text-center text-zinc-500 mt-4">
                        Join 5 Hawaii businesses already saving 20hrs/week • 5 founding spots left
                      </p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="border-2 border-zinc-200 dark:border-zinc-800">
                  <CardContent className="p-12 text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold mb-4">Enter Your Numbers</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Fill in the form to see how much revenue you're losing to missed calls and manual content creation
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
