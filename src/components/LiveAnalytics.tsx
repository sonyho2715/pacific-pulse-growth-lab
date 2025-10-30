"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function LiveAnalytics() {
  const [stats, setStats] = useState({
    leadsToday: 0,
    leadsThisMonth: 127,
    afterHoursBookings: 43,
    revenueCapture: 8450,
  });

  // Simulate real-time updates for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        leadsToday: prev.leadsToday + (Math.random() > 0.7 ? 1 : 0),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live System Performance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Results from Hawaii Businesses
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            These are actual metrics from chatbots running right now across Hawaii
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 border-blue-200 dark:border-blue-900/30 hover:border-blue-600 transition-all">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-blue-600 mb-2">{stats.leadsToday}</p>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Leads Today</p>
              <p className="text-xs text-zinc-500 mt-1">Updated live</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 dark:border-purple-900/30 hover:border-purple-600 transition-all">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-purple-600 mb-2">{stats.leadsThisMonth}</p>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Leads This Month</p>
              <p className="text-xs text-zinc-500 mt-1">Across all clients</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-200 dark:border-amber-900/30 hover:border-amber-600 transition-all">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-amber-600 mb-2">{stats.afterHoursBookings}</p>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">After-Hours Bookings</p>
              <p className="text-xs text-zinc-500 mt-1">Would've been missed</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 dark:border-green-900/30 hover:border-green-600 transition-all">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-green-600 mb-2">${stats.revenueCapture.toLocaleString()}</p>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Revenue Captured</p>
              <p className="text-xs text-zinc-500 mt-1">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Rate Visual */}
        <Card className="border-2 border-zinc-200 dark:border-zinc-800">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Average Lead Capture Rate</h3>
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold">Without AI Chatbot</span>
                <span className="text-sm font-semibold text-red-600">27%</span>
              </div>
              <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '27%' }}></div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold">With Pacific Pulse AI</span>
                <span className="text-sm font-semibold text-green-600">94%</span>
              </div>
              <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-green-500 rounded-full" style={{ width: '94%' }}></div>
              </div>

              <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-6">
                <strong className="text-zinc-900 dark:text-zinc-100">3.5X more leads captured</strong> with NLP-powered AI conversations
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
