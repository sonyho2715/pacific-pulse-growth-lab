import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROICalculator } from "@/components/ROICalculator";
import { ConversationMockup } from "@/components/ConversationMockup";
import { FAQ } from "@/components/FAQ";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SpotsRemaining } from "@/components/SpotsRemaining";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              PP
            </div>
            <span className="font-bold text-lg">Pacific Pulse</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition">Services</a>
            <a href="#solution" className="text-sm font-medium hover:text-blue-600 transition">AI Chatbots</a>
            <a href="#calculator" className="text-sm font-medium hover:text-blue-600 transition">ROI Calculator</a>
            <a href="#pricing" className="text-sm font-medium hover:text-blue-600 transition">Pricing</a>
            <a href="#faq" className="text-sm font-medium hover:text-blue-600 transition">FAQ</a>
          </nav>
          <Link href="/apply">
            <Button size="sm" className="shadow-lg shadow-blue-600/20">Apply Now</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section - Modern SaaS Style */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-950/20 dark:via-black dark:to-black">
        <div className="container mx-auto max-w-7xl">
          {/* Announcement Banner */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Founding Client Program • Only 8 Spots Available
              </span>
            </div>
          </div>

          {/* Main Hero */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              AI Marketing That
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Scales Your Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Complete AI solutions for Hawaii SMEs: 24/7 chatbots, automated content creation, marketing systems, and passive income streams.
              <strong className="text-zinc-900 dark:text-zinc-100"> Built by a Master NLP Coach</strong> who understands conversion psychology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/apply">
                <Button size="lg" className="text-lg px-8 h-14 shadow-xl shadow-blue-600/20">
                  See Our Solutions
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                View Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Master NLP Coach (208hrs)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Hawaii-Based Owner</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>30-Day Setup</span>
              </div>
            </div>
          </div>

          {/* Hero Visual - Conversation Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
            <div className="relative">
              <ConversationMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Card Based */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hawaii SMEs Are Drowning in Marketing
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              You know you need marketing automation. But hiring a team costs $200K+/year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <CardTitle className="text-xl">Missed Calls = Lost Revenue</CardTitle>
                <CardDescription className="text-base">
                  <strong className="text-zinc-900 dark:text-zinc-100">73% won&apos;t leave voicemail.</strong><br />
                  After-hours calls go straight to competitors.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">✍️</span>
                </div>
                <CardTitle className="text-xl">Content Takes Forever</CardTitle>
                <CardDescription className="text-base">
                  <strong className="text-zinc-900 dark:text-zinc-100">20 hours/month on blogs & social.</strong><br />
                  You need content to compete, but don&apos;t have time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <CardTitle className="text-xl">No Passive Income</CardTitle>
                <CardDescription className="text-base">
                  <strong className="text-zinc-900 dark:text-zinc-100">One income stream = risky.</strong><br />
                  You could monetize your expertise while you sleep.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Before/After Visual */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-red-50 to-green-50 dark:from-red-950/20 dark:to-green-950/20 border border-zinc-200 dark:border-zinc-800">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-2">
                  <span className="text-3xl">❌</span>
                </div>
                <p className="text-xl font-bold text-red-600 dark:text-red-400">WITHOUT AI AUTOMATION</p>
                <p className="text-lg text-zinc-700 dark:text-zinc-300">Missed calls + manual content + one revenue stream</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Overwhelmed, expensive, limited growth</p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-2">
                  <span className="text-3xl">✓</span>
                </div>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">WITH PACIFIC PULSE</p>
                <p className="text-lg text-zinc-700 dark:text-zinc-300">24/7 AI + automated content + passive income</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Scalable marketing at 1/10th the cost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <span>🤖</span> AI That Sounds Human
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your best employee.<br />
                <span className="text-zinc-600 dark:text-zinc-400">Never sleeps.</span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Built by a <strong className="text-zinc-900 dark:text-zinc-100">Master NLP Coach</strong> who understands conversation psychology. Not robotic scripts — natural conversations that build trust and convert.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "⚡", title: "Instant Response", desc: "Answers in under 1 second, 24/7/365" },
                  { icon: "📅", title: "Books Appointments", desc: "Directly to your Google Calendar or Calendly" },
                  { icon: "💬", title: "Sounds Natural", desc: "Trained on NLP principles, not rigid scripts" },
                  { icon: "📊", title: "Captures Every Lead", desc: "100% lead capture rate with contact info" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
              <div className="relative p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">U</div>
                    <p className="text-sm">Do you have availability tomorrow at 2pm?</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm">Yes! I have 2:00 PM, 2:30 PM, and 3:00 PM available tomorrow. Which time works best for you?</p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Lead captured • Booking in progress</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">U</div>
                    <p className="text-sm">2:30 works perfectly</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1">
                      <p className="text-sm">Perfect! I&apos;ve reserved 2:30 PM tomorrow. May I have your name and phone number to confirm?</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">📅 Syncing to calendar...</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-xs text-zinc-500 text-center">Conversation completed in 47 seconds at 2:14 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers Section - NEW */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-black dark:via-purple-950/10 dark:to-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete AI Marketing Solutions
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              From chatbots to complete marketing automation. Choose the package that scales your business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Starter Package */}
            <Card className="border-2 hover:border-blue-600 transition-all hover:shadow-xl relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold">POPULAR</span>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">$497</span>
                  <span className="text-zinc-500">/month</span>
                </div>
                <CardDescription>Perfect for getting started with AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>AI Chatbot (1 website)</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 lead capture</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Monthly reports</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Email support</span>
                </div>
              </CardContent>
            </Card>

            {/* Growth Package */}
            <Card className="border-2 border-purple-600 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Growth</CardTitle>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">$997</span>
                  <span className="text-zinc-500">/month</span>
                </div>
                <CardDescription>Scale with content automation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Everything in Starter, plus:</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>4 AI-written blog posts/month</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>20 social media posts/month</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Email sequences</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Landing pages</span>
                </div>
              </CardContent>
            </Card>

            {/* Scale Package */}
            <Card className="border-2 hover:border-pink-600 transition-all hover:shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Scale</CardTitle>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">$1,997</span>
                  <span className="text-zinc-500">/month</span>
                </div>
                <CardDescription>Complete marketing automation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Everything in Growth, plus:</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Full marketing automation</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Passive income system setup</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Social media automation</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support</span>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-2 border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 transition-all hover:shadow-xl bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <CardDescription>White-label & custom AI solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Everything in Scale, plus:</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom AI agent development</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Team training</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>White-label options</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated account manager</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              <strong>Founding Client Program:</strong> Get Growth package at Starter pricing ($497/month) • Only 8 spots
            </p>
            <Link href="/apply">
              <Button size="lg" className="shadow-xl shadow-purple-600/20">
                Apply for Founding Client Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-blue-950/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See what you&apos;re losing right now
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Most Hawaii businesses are missing $1,000-$5,000/month in revenue. Calculate yours:
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Content Automation Showcase - NEW */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <span>✨</span> Powered by Claude Code
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Content That Writes Itself
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              AI-powered content automation that saves 20+ hours/month while maintaining your brand voice
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-red-200 dark:border-red-900/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <span className="text-xl">❌</span>
                  </div>
                  <CardTitle className="text-xl">Manual Content Creation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-red-600 dark:text-red-400 font-mono font-bold">20hrs</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Writing 4 blog posts</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-red-600 dark:text-red-400 font-mono font-bold">10hrs</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Creating 20 social posts</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-red-600 dark:text-red-400 font-mono font-bold">5hrs</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Writing email sequences</span>
                </div>
                <div className="pt-3 mt-3 border-t border-red-200 dark:border-red-900/30">
                  <p className="text-lg font-bold text-red-600 dark:text-red-400">Total: 35 hours/month</p>
                  <p className="text-sm text-zinc-500 mt-1">That&apos;s almost a full work week!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 dark:border-green-900/30 bg-gradient-to-br from-green-50/50 to-white dark:from-green-950/10 dark:to-black">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                  <CardTitle className="text-xl">AI Content Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-green-600 dark:text-green-400 font-mono font-bold">2hrs</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Reviewing AI-written blog posts</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-green-600 dark:text-green-400 font-mono font-bold">30min</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Approving social content</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-green-600 dark:text-green-400 font-mono font-bold">30min</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Reviewing email sequences</span>
                </div>
                <div className="pt-3 mt-3 border-t border-green-200 dark:border-green-900/30">
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">Total: 3 hours/month</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-1">Save 32 hours/month = $3,200+ in value</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample AI-Generated Content */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Real AI-Generated Content Examples</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">BLOG POST</div>
                  <CardTitle className="text-lg">5 Reasons Hawaii Spas Are Embracing AI Customer Service</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">
                  <p className="mb-3">In the heart of paradise, Hawaii&apos;s spa industry is undergoing a quiet revolution. While visitors still seek...</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-green-600 dark:text-green-400">✓ SEO Optimized</span>
                    <span className="text-green-600 dark:text-green-400">✓ 1,200 words</span>
                    <span className="text-green-600 dark:text-green-400">✓ Local voice</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">SOCIAL MEDIA</div>
                  <CardTitle className="text-lg">Instagram Post</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">
                  <p className="mb-3">🌺 Ever miss a call at 2am from a tourist who can&apos;t sleep and wants a massage? Now you don&apos;t have to. Our AI answers, books, and you wake up to new revenue. #HawaiiTech #SmallBiz</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-green-600 dark:text-green-400">✓ Engaging</span>
                    <span className="text-green-600 dark:text-green-400">✓ Hashtags</span>
                    <span className="text-green-600 dark:text-green-400">✓ CTA</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-sm text-pink-600 dark:text-pink-400 font-semibold mb-2">EMAIL</div>
                  <CardTitle className="text-lg">Welcome Sequence Email 2</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">
                  <p className="mb-3"><strong>Subject:</strong> Here&apos;s what we can do for you, [Name]<br/><br/>Aloha [Name], Yesterday I told you about our AI chatbot...</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-green-600 dark:text-green-400">✓ Personalized</span>
                    <span className="text-green-600 dark:text-green-400">✓ High open rate</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8">
            <h3 className="text-2xl font-bold text-center mb-8">How Claude Code Automates Your Content</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4 text-2xl">
                  🎯
                </div>
                <h4 className="font-semibold mb-2">1. Your Strategy</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">You provide topics, keywords, and brand voice guidelines</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4 text-2xl">
                  🤖
                </div>
                <h4 className="font-semibold mb-2">2. AI Generates</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Claude Code creates blogs, social posts, and emails matching your voice</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✅
                </div>
                <h4 className="font-semibold mb-2">3. You Approve</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Review, edit if needed (most need zero changes), and approve</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 text-2xl">
                  🚀
                </div>
                <h4 className="font-semibold mb-2">4. Auto-Publish</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Content schedules and publishes automatically across all platforms</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/apply">
              <Button size="lg" className="shadow-xl shadow-purple-600/20">
                Get Content Automation →
              </Button>
            </Link>
            <p className="text-sm text-zinc-500 mt-4">Available in Growth package and above • $997/month (or $497 for founding clients)</p>
          </div>
        </div>
      </section>

      {/* Passive Income Section - NEW */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium mb-6">
              <span>💰</span> Passive Income Systems
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Monetize Your Expertise While You Sleep
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              We help Hawaii SMEs create digital products and passive income streams using AI automation
            </p>
          </div>

          {/* Case Study Example */}
          <Card className="border-2 border-amber-200 dark:border-amber-900/30 mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-950/30 dark:to-amber-950/10 p-6 border-b border-amber-200 dark:border-amber-900/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-amber-200 dark:bg-amber-900/50 flex items-center justify-center text-2xl">
                  🌺
                </div>
                <div>
                  <p className="text-sm text-amber-700 dark:text-amber-400 font-semibold">CASE STUDY</p>
                  <h3 className="text-2xl font-bold">Maui Wellness Spa</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 text-lg">The Challenge:</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Successful spa with loyal local clients, but revenue capped by appointment hours. Owner wanted to create additional income without working more hours.
                  </p>

                  <h4 className="font-bold mb-4 text-lg">What We Built:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Online Course:</strong> "Hawaiian Lomilomi Self-Massage" ($97, 150 sales = $14,550)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Membership Site:</strong> Monthly wellness tips & exclusive discounts ($27/mo, 80 members = $2,160/mo)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Affiliate Income:</strong> Curated massage tools & oils ($500-800/mo passive)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-900/30">
                  <h4 className="font-bold mb-6 text-xl text-green-900 dark:text-green-400">Results After 6 Months:</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-green-600 dark:text-green-400">$3,200/month</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">New passive income (average)</p>
                    </div>
                    <div className="pt-4 border-t border-green-200 dark:border-green-900/30">
                      <p className="text-lg font-semibold mb-2">Time Investment:</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">2 hours/month managing (we handle the rest)</p>
                    </div>
                    <div className="pt-4 border-t border-green-200 dark:border-green-900/30">
                      <p className="text-lg font-semibold mb-2">ROI:</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">$38,400/year from content she already had</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Passive Income Models */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 hover:border-amber-500 transition-all">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">📚</div>
                <CardTitle className="text-center text-lg">Online Courses</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-3">Turn your expertise into evergreen courses</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">$47-$497 per sale</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-amber-500 transition-all">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">💳</div>
                <CardTitle className="text-center text-lg">Memberships</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-3">Recurring revenue with exclusive content</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">$27-$97/month</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-amber-500 transition-all">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">📄</div>
                <CardTitle className="text-center text-lg">Digital Templates</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-3">Downloadable guides, checklists, tools</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">$17-$97 per sale</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-amber-500 transition-all">
              <CardHeader>
                <div className="text-4xl mb-3 text-center">🤝</div>
                <CardTitle className="text-center text-lg">Affiliate Systems</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-3">AI-curated product recommendations</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">10-30% commission</p>
              </CardContent>
            </Card>
          </div>

          {/* How We Help */}
          <div className="bg-white dark:bg-zinc-950 rounded-2xl border-2 border-amber-200 dark:border-amber-900/30 p-8">
            <h3 className="text-2xl font-bold text-center mb-8">How We Build Your Passive Income System</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400">
                    1
                  </div>
                  <h4 className="font-bold">Content Extraction</h4>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">We interview you and extract your unique expertise, processes, and knowledge</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400">
                    2
                  </div>
                  <h4 className="font-bold">AI Content Creation</h4>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Claude Code writes course modules, guides, templates in your voice - you just review</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400">
                    3
                  </div>
                  <h4 className="font-bold">Platform Setup & Launch</h4>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">We handle tech, payment processing, delivery - you just collect revenue</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              <strong>Setup Fee:</strong> $2,997 one-time + $497/month management (or included in Scale package)
            </p>
            <Link href="/apply">
              <Button size="lg" className="shadow-xl shadow-amber-600/20 bg-amber-600 hover:bg-amber-700 text-white">
                Start Building Passive Income →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why we&apos;re different from every other<br />AI consultant in Hawaii
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-blue-600 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <CardTitle>NLP Psychology Expert</CardTitle>
                <CardDescription>
                  208 hours of Master NLP training. I understand how people think, decide, and buy. Your AI doesn&apos;t just answer — it converts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-purple-600 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <CardTitle>Business Owner, Not Agency</CardTitle>
                <CardDescription>
                  I own multiple Hawaii businesses. I built this because I was losing money to missed calls. You work directly with me, not junior developers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-pink-600 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <CardTitle>Revenue-Capture Focused</CardTitle>
                <CardDescription>
                  Not general &quot;AI consulting.&quot; Laser-focused on one thing: capturing missed calls that become revenue. Proven ROI in 30 days.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Founding Client Program
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Get in early. Pay half. Help shape the product.
            </p>
          </div>

          <SpotsRemaining />

          <div className="mt-8">
            <Card className="border-2 border-blue-600 shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Limited Time Offer</p>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-6xl font-bold">$497</span>
                    <span className="text-2xl opacity-75">/month</span>
                  </div>
                  <p className="opacity-90">Regular price: <span className="line-through">$997/month</span></p>
                  <p className="text-sm mt-2 opacity-75">Save $6,000 in your first year</p>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Custom AI trained on YOUR business",
                    "Multi-platform: Website + Facebook + Instagram",
                    "Up to 2,000 conversations/month",
                    "Calendar integration (Google/Calendly)",
                    "100% lead capture with contact info",
                    "Bilingual support (English + Vietnamese)",
                    "Built personally by me (no outsourcing)",
                    "Monthly optimization reviews",
                    "Priority support (phone/text/email)",
                    "30-day implementation guarantee"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-l-4 border-amber-600 mb-6">
                  <h3 className="font-bold text-lg mb-3">The Catch:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 90-day minimum commitment (give it time to prove ROI)</li>
                    <li>✓ Provide detailed feedback (help me improve)</li>
                    <li>✓ Agree to be a case study if successful</li>
                    <li>✓ Record video testimonial after 90 days</li>
                  </ul>
                </div>

                <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-600 mb-6">
                  <h3 className="font-bold text-xl mb-3 text-green-900 dark:text-green-400">My 3X ROI Guarantee:</h3>
                  <p className="mb-3">
                    If after 90 days you haven&apos;t captured at least <strong>$1,491 in revenue</strong> (3X your investment), I&apos;ll give you the <strong>next 3 months FREE</strong>.
                  </p>
                  <p className="text-sm font-semibold">
                    You risk $1,491 to potentially gain $10K-$50K+ in captured revenue. Fair?
                  </p>
                </div>

                <div className="text-center">
                  <Link href="/apply">
                    <Button size="lg" className="w-full md:w-auto text-lg px-12 h-14 shadow-xl shadow-blue-600/20">
                      Apply for Founding Client Program
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </Link>
                  <p className="text-sm text-zinc-500 mt-4">No credit card required • 2-minute application</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From application to live in 30 days
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Here&apos;s exactly how it works:
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 hidden md:block"></div>

            <div className="space-y-8">
              {[
                {
                  week: "Week 1",
                  title: "Strategy & Design",
                  items: [
                    "Strategy call within 48 hours",
                    "I analyze your business, customers, pain points",
                    "Map conversation flows specific to YOUR services",
                    "You approve before we build"
                  ]
                },
                {
                  week: "Week 2",
                  title: "Build & Train",
                  items: [
                    "I personally build your AI system",
                    "Train on your FAQs, services, pricing",
                    "Integrate with your calendar and tools",
                    "You review and provide feedback"
                  ]
                },
                {
                  week: "Week 3",
                  title: "Test & Refine",
                  items: [
                    "Test with real scenarios",
                    "Your team tries it out",
                    "Refine based on feedback",
                    "Perfect before launch"
                  ]
                },
                {
                  week: "Week 4",
                  title: "Launch & Optimize",
                  items: [
                    "Soft launch with monitoring",
                    "Full deployment across platforms",
                    "Weekly check-ins first month",
                    "Continuous optimization"
                  ]
                }
              ].map((phase, index) => (
                <div key={phase.week} className="relative flex gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    {index + 1}
                  </div>
                  <Card className="flex-1 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">{phase.week}</p>
                          <CardTitle className="text-2xl">{phase.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Common questions
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Everything you need to know before applying
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            8 spots. Then pricing doubles.
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            I can only take 8-10 businesses because each gets my personal attention. When spots fill, the program closes and pricing goes to $997/month.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Get premium AI automation at 50% off",
              "Work directly with me (not a sales team)",
              "Help shape a product built for Hawaii",
              "Get results without enterprise pricing"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center justify-center gap-3 text-lg">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <Link href="/apply">
            <Button size="lg" variant="secondary" className="text-lg px-12 h-14 text-zinc-900 shadow-xl">
              Apply for Founding Client Program
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <p className="text-sm mt-4 opacity-75">or <Link href="/contact" className="underline">schedule a quick call first</Link></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-4 bg-white dark:bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  PP
                </div>
                <span className="font-bold">Pacific Pulse</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                AI automation for Hawaii service businesses
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#solution" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Solution</a></li>
                <li><a href="#calculator" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">ROI Calculator</a></li>
                <li><a href="#pricing" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">FAQ</a></li>
                <li><Link href="/apply" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Apply Now</Link></li>
                <li><Link href="/contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>sony@pacificpulsegrowth.com</li>
                <li>Hawaii, USA</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-zinc-600 dark:text-zinc-400 text-sm pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p>&copy; 2025 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
            <p className="mt-2">Built with ❤️ in Hawaii 🌺</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
