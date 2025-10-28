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
            <a href="#solution" className="text-sm font-medium hover:text-blue-600 transition">Solution</a>
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
              Stop losing money to
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                missed calls
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              AI that answers 24/7, sounds human, and converts leads while you sleep.
              <strong className="text-zinc-900 dark:text-zinc-100"> Built by an NLP expert</strong> who understands conversation psychology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/apply">
                <Button size="lg" className="text-lg px-8 h-14 shadow-xl shadow-blue-600/20">
                  Calculate Your Savings
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Watch 2-Min Demo
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
              You&apos;re bleeding money
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Every missed call is lost revenue. Here&apos;s why:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <CardTitle className="text-xl">After-Hours Calls</CardTitle>
                <CardDescription className="text-base">
                  <strong className="text-zinc-900 dark:text-zinc-100">73% won&apos;t leave voicemail.</strong><br />
                  They call your competitor instead.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <CardTitle className="text-xl">Slow Response</CardTitle>
                <CardDescription className="text-base">
                  <strong className="text-zinc-900 dark:text-zinc-100">80% choose who responds first.</strong><br />
                  Your staff can&apos;t be instant.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">🔁</span>
                </div>
                <CardTitle className="text-xl">Repetitive Questions</CardTitle>
                <CardDescription className="text-base">
                  <strong className="text-zinc-900 dark:text-zinc-100">50+ identical questions/week.</strong><br />
                  Staff time wasted on autopilot answers.
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
                <p className="text-xl font-bold text-red-600 dark:text-red-400">WITHOUT AI</p>
                <p className="text-lg text-zinc-700 dark:text-zinc-300">Call → Voicemail → Lost Forever</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">~$300/week in missed revenue</p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-2">
                  <span className="text-3xl">✓</span>
                </div>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">WITH AI</p>
                <p className="text-lg text-zinc-700 dark:text-zinc-300">Call → AI Answers → Booked</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Capture 70% of missed calls</p>
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
