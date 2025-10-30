"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RestaurantLandingPage() {
  const [missedCalls, setMissedCalls] = useState("");
  const [avgCheck, setAvgCheck] = useState("75");

  const monthlyLoss = (parseInt(missedCalls) || 0) * (parseInt(avgCheck) || 0) * 4;
  const yearlyLoss = monthlyLoss * 12;
  const withAI = Math.round(monthlyLoss * 0.7) - 497;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50 dark:from-amber-950/20 dark:via-black dark:to-orange-950/20">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium mb-6">
              <span>🍽️</span> For Hawaii Restaurants
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Fill Every Table with <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">AI Reservations</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
              Your AI host takes reservations 24/7—even during dinner rush, after closing, and from mainland tourists calling at midnight. <strong className="text-zinc-900 dark:text-zinc-100">Never lose a booking to voicemail again.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/apply">
                <Button size="lg" className="text-lg px-8 h-14 shadow-xl shadow-amber-600/20 bg-gradient-to-r from-amber-600 to-orange-600">
                  Get Your AI Restaurant Host →
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14" asChild>
                <Link href="/calculator">
                  Calculate Lost Revenue
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Average Check: $50-$100</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Books During Rush Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Answers Menu Questions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Hawaii Restaurants Lose Reservations
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-red-200 dark:border-red-900/30">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">⏰</div>
                <CardTitle className="text-center">Busy During Dinner Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4"><strong className="text-zinc-900 dark:text-zinc-100">6 PM rush</strong>—host is seating guests, phone rings 15 times, no one can answer. Reservation goes to the restaurant across the street.</p>
                <p className="text-sm">Peak hours = missed bookings</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 dark:border-orange-900/30">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">🌙</div>
                <CardTitle className="text-center">After-Hours Tourist Calls</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4"><strong className="text-zinc-900 dark:text-zinc-100">Mainland tourists call at 11 PM</strong> (8 PM their time) to book tomorrow's dinner. Voicemail. They book somewhere else.</p>
                <p className="text-sm">Tourists want instant confirmation</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 dark:border-yellow-900/30">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">📋</div>
                <CardTitle className="text-center">Menu Questions Lost</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4"><strong className="text-zinc-900 dark:text-zinc-100">"Do you have gluten-free?"</strong> No one answers. Customer with dietary restrictions books at competitor who picked up.</p>
                <p className="text-sm">Simple questions = lost tables</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-900/30 text-center">
            <p className="text-2xl font-bold mb-4">
              If you miss 20 reservation calls/week at $75 average check...
            </p>
            <p className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
              You're losing $6,000/month
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              That's $72,000/year in tables going unfilled
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your AI Restaurant Host
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Takes reservations, answers menu questions, handles special requests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">What It Does:</h3>
              <div className="space-y-4">
                {[
                  { icon: "📅", title: "Books Reservations 24/7", desc: "Party of 4 at 7 PM? AI checks availability, confirms table instantly, sends confirmation" },
                  { icon: "🍽️", title: "Answers Menu Questions", desc: "Handles: 'Do you have vegan options?' 'Is the poke raw?' 'What's the catch of the day?' Trained on YOUR menu" },
                  { icon: "🎉", title: "Handles Special Requests", desc: "Birthday celebrations, outdoor seating preferences, dietary restrictions, high chairs, anniversaries" },
                  { icon: "⏱️", title: "Manages Wait Times", desc: "'How long is the wait for walk-ins?' AI checks current capacity and gives accurate estimates" },
                  { icon: "📱", title: "Sends Confirmations", desc: "Automatic SMS/email with reservation details, parking info, dress code if applicable" },
                  { icon: "🌴", title: "Tourist-Friendly", desc: "Explains local dishes, recommends popular items, handles 'What's poke?' questions with aloha spirit" }
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
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-3xl blur-3xl"></div>
              <Card className="relative border-2 border-amber-200 dark:border-amber-900/30">
                <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                  <CardTitle>Real Reservation Example</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">G</div>
                    <div className="flex-1">
                      <p className="text-sm"><strong>Guest (9:30 PM):</strong></p>
                      <p className="text-sm">"Hi, do you have a table for 6 available tomorrow at 7 PM? We have 2 kids, need high chairs."</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm"><strong>AI Host:</strong></p>
                      <p className="text-sm">"Yes! I have a table for 6 available at 7:00 PM tomorrow. I'll note you need 2 high chairs. Would you prefer indoor or outdoor seating?"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">G</div>
                    <p className="text-sm">"Outdoor if possible. Also, do you have gluten-free options?"</p>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm">"Perfect! I've reserved an outdoor table. Yes, we have several gluten-free options including grilled fish, salads, and gluten-free pasta. May I have your name and phone number to confirm?"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">G</div>
                    <p className="text-sm">"Sarah Martinez, 808-555-1234"</p>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm">"All set, Sarah! Party of 6, outdoor table, 7:00 PM tomorrow, 2 high chairs. I'm texting you confirmation now with our location and parking info. See you tomorrow!"</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900/30 text-center">
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                      ✓ Table booked at 9:30 PM • $450+ potential revenue secured • Customer received SMS confirmation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 bg-amber-50 dark:bg-amber-950/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Calculate Your Restaurant's Lost Revenue
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
            How much are you losing to missed reservation calls?
          </p>

          <Card className="border-2 border-amber-200 dark:border-amber-900/30">
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
                      placeholder="e.g., 20"
                      className="text-lg h-12"
                    />
                    <p className="text-sm text-zinc-500 mt-1">During rush, after hours, when host is busy</p>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-2">
                      Average check per table?
                    </label>
                    <Input
                      type="number"
                      value={avgCheck}
                      onChange={(e) => setAvgCheck(e.target.value)}
                      placeholder="e.g., 75"
                      className="text-lg h-12"
                    />
                    <p className="text-sm text-zinc-500 mt-1">Include drinks, appetizers, desserts</p>
                  </div>
                </div>

                {monthlyLoss > 0 ? (
                  <div className="space-y-4">
                    <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border-2 border-red-200 dark:border-red-900/30">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Monthly Loss:</p>
                      <p className="text-4xl font-bold text-red-600 mb-1">${monthlyLoss.toLocaleString()}</p>
                      <p className="text-xl font-semibold text-red-600">${yearlyLoss.toLocaleString()}/year</p>
                    </div>

                    <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-200 dark:border-green-900/30">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">With AI Host ($497/mo):</p>
                      <p className="text-4xl font-bold text-green-600 mb-1">+${withAI.toLocaleString()}/mo</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">70% of calls converted to reservations</p>
                    </div>

                    <Link href="/apply">
                      <Button size="lg" className="w-full text-lg bg-gradient-to-r from-amber-600 to-orange-600">
                        Fill ${monthlyLoss.toLocaleString()} in Empty Tables →
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center justify-center p-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-zinc-600 dark:text-zinc-400">Enter your numbers</p>
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
              Founding Restaurant Program
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              First 5 Hawaii restaurants get founding rate forever
            </p>
          </div>

          <Card className="border-4 border-amber-600 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 text-center">
              <div className="text-6xl font-bold mb-2">$497<span className="text-2xl">/month</span></div>
              <p className="text-lg opacity-90">Regular $997 • 50% off locked in forever</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                {[
                  "AI trained on your menu, specials, dietary options",
                  "24/7 reservation booking during dinner rush and after hours",
                  "Answers menu questions (gluten-free, vegan, allergies, local dishes)",
                  "Handles special requests: birthdays, anniversaries, outdoor seating",
                  "Calendar integration (OpenTable, Resy, Google Calendar, or manual)",
                  "SMS/email confirmations with parking, dress code info",
                  "Wait time management for walk-ins",
                  "Multi-language support for international tourists",
                  "Personally implemented by Sony (no outsourcing)",
                  "30-day setup guarantee",
                  "3X ROI guarantee: Fill $1,491+ in tables in 90 days or 3 months free"
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
                <Button size="lg" className="w-full text-lg h-14 bg-gradient-to-r from-amber-600 to-orange-600 shadow-xl">
                  Apply for Founding Restaurant Program →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Restaurant Owner FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "Will it work during our busiest dinner hours?",
                a: "That's exactly when you need it most. While your host is seating the 6 PM rush, AI is taking reservations for 7:30 PM. No more missed calls during peak service."
              },
              {
                q: "Can it answer specific menu questions?",
                a: "Yes! We train it on YOUR menu. 'Do you have poke?' 'Is the fish raw?' 'Gluten-free pasta?' 'What's in the kalua pork?' AI knows every dish, ingredient, and dietary option."
              },
              {
                q: "What about special dietary restrictions?",
                a: "AI handles: vegan, vegetarian, gluten-free, dairy-free, nut allergies, pescatarian. It knows which dishes fit and can suggest modifications based on your menu."
              },
              {
                q: "Does it work with OpenTable or Resy?",
                a: "Yes, we integrate with OpenTable, Resy, Google Calendar, or your existing system. If you manage reservations manually, AI adds to your calendar and texts you."
              },
              {
                q: "What if someone asks about parking or dress code?",
                a: "AI knows all your restaurant info - parking (valet/street/lot), dress code (casual/aloha attire/dressy), location, hours. It sends this in confirmation texts automatically."
              },
              {
                q: "Can it handle large party reservations?",
                a: "Yes! AI asks party size, offers appropriate times, notes special requests (birthdays, anniversaries). For parties over your threshold (e.g., 10+), AI says 'Let me have someone call you' and alerts you."
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
            Fill Every Table, Every Night
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Join Hawaii restaurants capturing after-hours reservations automatically
          </p>
          <Link href="/apply">
            <Button size="lg" className="text-xl px-12 h-16 shadow-2xl bg-gradient-to-r from-amber-600 to-orange-600">
              Get Your AI Restaurant Host →
            </Button>
          </Link>
          <p className="text-sm text-zinc-500 mt-4">
            5 founding spots • $497/month locked forever • 30-day setup
          </p>
        </div>
      </section>
    </div>
  );
}
