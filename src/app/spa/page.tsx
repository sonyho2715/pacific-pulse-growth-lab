"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AIChatbot } from "@/components/AIChatbot";

export default function SpaLandingPage() {
  const [missedCalls, setMissedCalls] = useState("");
  const [avgBooking, setAvgBooking] = useState("125");

  const monthlyLoss = (parseInt(missedCalls) || 0) * (parseInt(avgBooking) || 0) * 4;
  const yearlyLoss = monthlyLoss * 12;
  const withAI = Math.round(monthlyLoss * 0.7) - 497;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 dark:from-purple-950/20 dark:via-black dark:to-blue-950/20">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
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
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <span>🌺</span> For Hawaii Spa & Massage Businesses
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Stop Losing <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$3K+/Month</span> to After-Hours Calls
            </h1>

            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
              Your AI receptionist books massages, facials, and spa packages 24/7—even when you're closed, with clients, or asleep. <strong className="text-zinc-900 dark:text-zinc-100">Built specifically for Hawaii wellness businesses.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/apply">
                <Button size="lg" className="text-lg px-8 h-14 shadow-xl shadow-purple-600/20 bg-gradient-to-r from-purple-600 to-pink-600">
                  Get Your AI Receptionist →
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14" asChild>
                <Link href="/calculator">
                  Calculate Your Losses
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Average Spa Booking: $125</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>70% Capture Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>30-Day Setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Spa Specific */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Sound Familiar?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-red-200 dark:border-red-900/30">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">📞</div>
                <CardTitle className="text-center">After-Hours Calls Go to Voicemail</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4"><strong className="text-zinc-900 dark:text-zinc-100">Tourist calls at 8 PM</strong> (mainland time zones), gets voicemail, books competitor instead.</p>
                <p className="text-sm">You lose $125+ per missed call</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 dark:border-orange-900/30">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">💆</div>
                <CardTitle className="text-center">Can't Answer During Sessions</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4"><strong className="text-zinc-900 dark:text-zinc-100">You're with a client</strong>, phone rings, potential customer hangs up and tries someone else.</p>
                <p className="text-sm">15-20 missed calls per week</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 dark:border-yellow-900/30">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">📅</div>
                <CardTitle className="text-center">Manual Booking is Slow</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4"><strong className="text-zinc-900 dark:text-zinc-100">Back-and-forth texts/calls</strong> to find available times wastes your time and theirs.</p>
                <p className="text-sm">Customers want instant booking</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-900/30 text-center">
            <p className="text-2xl font-bold mb-4">
              Reality Check: If you miss 15 calls/week at $125 average...
            </p>
            <p className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
              You're losing $7,500/month
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              That's $90,000/year walking to your competitors
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your AI Receptionist for Hawaii Spas
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Trained on spa services, Hawaiian hospitality, and booking psychology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">What It Does:</h3>
              <div className="space-y-4">
                {[
                  { icon: "🌺", title: "Answers 24/7", desc: "Tourist calls at midnight? AI responds instantly with aloha spirit" },
                  { icon: "💆", title: "Books Appointments", desc: "Direct integration with Google Calendar or Calendly - no back-and-forth" },
                  { icon: "💬", title: "Knows Your Services", desc: "Trained on lomilomi, deep tissue, hot stone, facials, packages - explains everything" },
                  { icon: "🎯", title: "Qualifies Customers", desc: "Collects preferences, special requests, first-time vs returning guests" },
                  { icon: "📱", title: "Sends Confirmations", desc: "Automatic SMS/email confirmation with parking info, what to expect" },
                  { icon: "🌴", title: "Hawaii-Specific", desc: "Understands local culture, tourist needs, common questions about Hawaii spas" }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{item.title}</p>
                      <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl"></div>
              <Card className="relative border-2 border-purple-200 dark:border-purple-900/30">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <CardTitle>Example Conversation</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">T</div>
                    <div className="flex-1">
                      <p className="text-sm"><strong>Tourist (11 PM):</strong></p>
                      <p className="text-sm">"Hi, I'm visiting Maui tomorrow. Do you have couple's massage available around 3pm?"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm"><strong>AI Spa Assistant:</strong></p>
                      <p className="text-sm">"Aloha! Yes, we have couple's lomilomi massage available tomorrow at 3:00 PM. It's 90 minutes, $280 total. We also have private lanai seating. Would you like to book that?"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">T</div>
                    <p className="text-sm">"Perfect! Yes, book it."</p>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm">"Wonderful! May I have your names, phone number, and email to confirm?"</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900/30 text-center">
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                      ✓ Booking confirmed • $280 revenue captured at 11 PM • Customer received confirmation SMS
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 bg-purple-50 dark:bg-purple-950/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Calculate Your Spa's Lost Revenue
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
            See exactly how much you're losing to missed calls right now
          </p>

          <Card className="border-2 border-purple-200 dark:border-purple-900/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold mb-2">
                      How many calls do you miss per week?
                    </label>
                    <Input
                      type="number"
                      value={missedCalls}
                      onChange={(e) => setMissedCalls(e.target.value)}
                      placeholder="e.g., 15"
                      className="text-lg h-12"
                    />
                    <p className="text-sm text-zinc-500 mt-1">After hours, during sessions, weekends</p>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-2">
                      Average booking value?
                    </label>
                    <Input
                      type="number"
                      value={avgBooking}
                      onChange={(e) => setAvgBooking(e.target.value)}
                      placeholder="e.g., 125"
                      className="text-lg h-12"
                    />
                    <p className="text-sm text-zinc-500 mt-1">Hawaii spa average: $95-$150</p>
                  </div>
                </div>

                {monthlyLoss > 0 ? (
                  <div className="space-y-4">
                    <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border-2 border-red-200 dark:border-red-900/30">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">You're Currently Losing:</p>
                      <p className="text-4xl font-bold text-red-600 mb-1">${monthlyLoss.toLocaleString()}<span className="text-xl">/mo</span></p>
                      <p className="text-xl font-semibold text-red-600">${yearlyLoss.toLocaleString()}<span className="text-sm">/year</span></p>
                    </div>

                    <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-200 dark:border-green-900/30">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">With AI Receptionist ($497/mo):</p>
                      <p className="text-4xl font-bold text-green-600 mb-1">+${withAI.toLocaleString()}<span className="text-xl">/mo</span></p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Captures 70% of missed calls automatically</p>
                    </div>

                    <Link href="/apply">
                      <Button size="lg" className="w-full text-lg bg-gradient-to-r from-purple-600 to-pink-600">
                        Yes, Stop Losing ${monthlyLoss.toLocaleString()}/Month →
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center justify-center p-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-zinc-600 dark:text-zinc-400">Enter your numbers to see your losses</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Founding Spa Client Program
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              5 spots remaining • Spa-specific implementation
            </p>
          </div>

          <Card className="border-4 border-purple-600 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 text-center">
              <div className="text-6xl font-bold mb-2">$497<span className="text-2xl">/month</span></div>
              <p className="text-lg opacity-90">Regular $997 • Save $6,000 in Year 1</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                {[
                  "AI trained on spa/massage services (lomilomi, deep tissue, facials, etc.)",
                  "24/7 booking for walk-ins, tourists, after-hours calls",
                  "Google Calendar / Calendly integration",
                  "Captures client preferences, special requests",
                  "SMS/email confirmations automatically",
                  "Multi-language support (English, Japanese, Korean)",
                  "Handles couples massage, packages, gift certificates",
                  "Personally implemented by Sony (no outsourcing)",
                  "30-day setup guarantee",
                  "3X ROI guarantee: Capture $1,491+ in 90 days or 3 months free"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/apply">
                <Button size="lg" className="w-full text-lg h-14 bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl">
                  Apply for Founding Spa Client Program →
                </Button>
              </Link>
              <p className="text-sm text-center text-zinc-500 mt-4">No credit card required • 2-minute application</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Spa Owner FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "Will the AI understand spa-specific services like lomilomi or hot stone?",
                a: "Yes! We train the AI on YOUR specific menu - lomilomi, Swedish, deep tissue, hot stone, facials, body wraps, packages. It knows duration, pricing, special instructions (pregnancy modifications, etc.)."
              },
              {
                q: "What if the client asks something the AI doesn't know?",
                a: "The AI will say 'Let me have someone call you back about that' and immediately alerts you. But in testing, AI handles 94% of spa booking questions without human help."
              },
              {
                q: "Can it handle walk-in availability checks?",
                a: "Absolutely. Syncs with your calendar in real-time. 'Do you have a massage available in 30 minutes?' → AI checks availability and books it."
              },
              {
                q: "What about tourists who don't speak English well?",
                a: "We can add Japanese, Korean, Chinese language support. Many Hawaii spa clients are international tourists - AI handles that."
              },
              {
                q: "Does it work with my existing booking system?",
                a: "Yes. We integrate with Google Calendar, Calendly, Acuity, Square Appointments, or any calendar system. No need to change your process."
              }
            ].map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Losing Revenue to Missed Calls
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Join Hawaii spa owners who now capture after-hours bookings automatically
          </p>
          <Link href="/apply">
            <Button size="lg" className="text-xl px-12 h-16 shadow-2xl bg-gradient-to-r from-purple-600 to-pink-600">
              Get Your AI Spa Receptionist →
            </Button>
          </Link>
          <p className="text-sm text-zinc-500 mt-4">
            5 founding client spots remaining • $497/month founding rate
          </p>
        </div>
      </section>

      {/* AI Chatbot with spa-specific context */}
      <AIChatbot industry="spa" />
    </div>
  );
}
