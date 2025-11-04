"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AIChatbot } from "@/components/AIChatbot";

export default function AutoDetailLandingPage() {
  const [missedCalls, setMissedCalls] = useState("");
  const [avgDetail, setAvgDetail] = useState("200");

  const monthlyLoss = (parseInt(missedCalls) || 0) * (parseInt(avgDetail) || 0) * 4;
  const yearlyLoss = monthlyLoss * 12;
  const withAI = Math.round(monthlyLoss * 0.7) - 497;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-zinc-50 dark:from-blue-950/20 dark:via-black dark:to-zinc-950">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                PP
              </div>
              <span className="font-bold text-lg">Pacific Pulse</span>
            </div>
          </Link>
          <Link href="/apply">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span>🚗</span> For Hawaii Auto Detailing Businesses
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Turn Every Call Into <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Booked Details</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
              Your AI booking assistant answers calls 24/7, quotes packages, and schedules details instantly. <strong className="text-zinc-900 dark:text-zinc-100">Never lose a customer to voicemail again.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/apply">
                <Button size="lg" className="text-lg px-8 h-14 shadow-xl shadow-blue-600/20 bg-gradient-to-r from-blue-600 to-cyan-600">
                  Book More Details Automatically →
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14" asChild>
                <Link href="/calculator">
                  See What You're Losing
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Average Detail: $150-$250</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Works While You Detail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Auto Detailers Lose Customers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-red-200 dark:border-red-900/30">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">📱</div>
                <CardTitle className="text-center">Hands Are Dirty</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4"><strong className="text-zinc-900 dark:text-zinc-100">You're waxing a car</strong>, phone rings, you can't answer. Customer calls next detailer on Google.</p>
                <p className="text-sm">30% of calls = missed opportunities</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 dark:border-orange-900/30">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">❓</div>
                <CardTitle className="text-center">Quote Requests Take Forever</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4"><strong className="text-zinc-900 dark:text-zinc-100">"How much for full detail?"</strong> You need to see car, ask questions, call back later. Customer books elsewhere.</p>
                <p className="text-sm">Slow quotes = lost sales</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 dark:border-yellow-900/30">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">🌙</div>
                <CardTitle className="text-center">After-Hours = Nothing</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4"><strong className="text-zinc-900 dark:text-zinc-100">Customer researches at night</strong>, calls at 8 PM, gets voicemail. Books with 24/7 competitor instead.</p>
                <p className="text-sm">Lose premium weekend slots</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-900/30 text-center">
            <p className="text-2xl font-bold mb-4">
              If you miss 12 calls/week at $200 average detail...
            </p>
            <p className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
              That's $9,600/month gone
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              $115,200/year to competitors with better availability
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your AI Detailing Assistant
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Handles quotes, booking, and customer questions while you work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">What It Does:</h3>
              <div className="space-y-4">
                {[
                  { icon: "💬", title: "Instant Quotes", desc: "AI knows your packages - basic wash ($50), interior detail ($150), full detail ($250), ceramic coating add-ons" },
                  { icon: "📅", title: "Books Appointments", desc: "Checks your calendar, offers available times, confirms booking instantly" },
                  { icon: "🚗", title: "Qualifies Vehicles", desc: "Asks: sedan/SUV/truck? How dirty? Special needs? Interior only? Gives accurate pricing" },
                  { icon: "⏰", title: "Works 24/7", desc: "Customer calls at 10 PM? AI answers, quotes, and books - you wake up to confirmed appointments" },
                  { icon: "📍", title: "Handles Logistics", desc: "Drop-off or mobile? Location? Pickup time? AI covers all the details" },
                  { icon: "💳", title: "Payment Info", desc: "Explains deposit requirements, accepted payment methods, cancellation policy" }
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-3xl blur-3xl"></div>
              <Card className="relative border-2 border-blue-200 dark:border-blue-900/30">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <CardTitle>Real Conversation Example</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">C</div>
                    <div className="flex-1">
                      <p className="text-sm">"Hi, how much for a full detail on my Tacoma? It's pretty dirty from the beach."</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm">"For a Tacoma full detail (exterior + interior deep clean), it's $220. That includes wash, wax, interior vacuum, seat shampoo, dashboard treatment. Sand cleanup is included. Want to book?"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">C</div>
                    <p className="text-sm">"Yeah. What's your availability this Saturday?"</p>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm">"Saturday I have 9 AM and 2 PM open. Which works better?"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">C</div>
                    <p className="text-sm">"9 AM. Where do I drop off?"</p>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm">"Perfect! Saturday 9 AM for $220. Our location is [address]. I'll text you confirmation with directions. What's your name and phone?"</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900/30 text-center">
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                      ✓ $220 detail booked • Customer received SMS confirmation • Your Saturday slot is filled
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-blue-950/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Calculate Your Lost Revenue
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
            How much are missed calls costing your detail shop?
          </p>

          <Card className="border-2 border-blue-200 dark:border-blue-900/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold mb-2">
                      Missed calls per week?
                    </label>
                    <Input
                      type="number"
                      value={missedCalls}
                      onChange={(e) => setMissedCalls(e.target.value)}
                      placeholder="e.g., 12"
                      className="text-lg h-12"
                    />
                    <p className="text-sm text-zinc-500 mt-1">When you're busy detailing, after hours</p>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-2">
                      Average detail value?
                    </label>
                    <Input
                      type="number"
                      value={avgDetail}
                      onChange={(e) => setAvgDetail(e.target.value)}
                      placeholder="e.g., 200"
                      className="text-lg h-12"
                    />
                    <p className="text-sm text-zinc-500 mt-1">Average price across all services</p>
                  </div>
                </div>

                {monthlyLoss > 0 ? (
                  <div className="space-y-4">
                    <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border-2 border-red-200 dark:border-red-900/30">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Current Monthly Loss:</p>
                      <p className="text-4xl font-bold text-red-600 mb-1">${monthlyLoss.toLocaleString()}</p>
                      <p className="text-xl font-semibold text-red-600">${yearlyLoss.toLocaleString()}/year</p>
                    </div>

                    <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-200 dark:border-green-900/30">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">With AI ($497/mo):</p>
                      <p className="text-4xl font-bold text-green-600 mb-1">+${withAI.toLocaleString()}/mo</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">70% of missed calls captured</p>
                    </div>

                    <Link href="/apply">
                      <Button size="lg" className="w-full text-lg bg-gradient-to-r from-blue-600 to-cyan-600">
                        Stop Losing ${monthlyLoss.toLocaleString()}/Month →
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center justify-center p-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                    <div className="text-center">
                      <div className="text-6xl mb-4">💸</div>
                      <p className="text-zinc-600 dark:text-zinc-400">Enter your numbers above</p>
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
              Founding Auto Detailer Program
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Hawaii's first AI booking system built for detailers
            </p>
          </div>

          <Card className="border-4 border-blue-600 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 text-center">
              <div className="text-6xl font-bold mb-2">$497<span className="text-2xl">/month</span></div>
              <p className="text-lg opacity-90">Regular $997 • Founding rate locked forever</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                {[
                  "AI trained on auto detailing services (wash, wax, interior, full detail, ceramic coating)",
                  "Instant quote generation based on vehicle type and service",
                  "24/7 booking - capture after-hours and weekend calls",
                  "Calendar integration (Google Calendar, Calendly, etc.)",
                  "Handles drop-off and mobile detail logistics",
                  "Collects vehicle info, special requests automatically",
                  "SMS confirmations with location and what to expect",
                  "Personally built by Sony (no outsourcing)",
                  "30-day setup",
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
                <Button size="lg" className="w-full text-lg h-14 bg-gradient-to-r from-blue-600 to-cyan-600 shadow-xl">
                  Apply Now →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Auto Detailer FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can it handle different vehicle sizes (sedan vs SUV vs truck)?",
                a: "Yes! AI asks what type of vehicle and adjusts pricing automatically. Sedan full detail $180, SUV $210, Truck $230, etc. You set the pricing matrix."
              },
              {
                q: "What if someone asks about ceramic coating or paint correction?",
                a: "AI knows your premium services too. It can quote ceramic coating, paint correction, headlight restoration - any service you offer. We train it on YOUR menu."
              },
              {
                q: "Will it work for mobile detailing?",
                a: "Absolutely. AI asks: drop-off or mobile? If mobile, it collects location, asks about power/water access, quotes mobile fee. Perfect for mobile detailers."
              },
              {
                q: "Can customers see photos of past work?",
                a: "Yes! We can integrate your Instagram or before/after gallery. AI says 'Check out recent work at [your instagram]' or links to portfolio."
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
            Never Miss Another Detail Booking
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Let AI handle quotes and booking while you focus on making cars shine
          </p>
          <Link href="/apply">
            <Button size="lg" className="text-xl px-12 h-16 shadow-2xl bg-gradient-to-r from-blue-600 to-cyan-600">
              Get Your AI Booking Assistant →
            </Button>
          </Link>
        </div>
      </section>

      {/* AI Chatbot with auto-detail specific context */}
      <AIChatbot industry="auto-detail" />
    </div>
  );
}
