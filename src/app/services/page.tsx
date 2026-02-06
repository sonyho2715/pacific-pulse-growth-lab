import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Globe,
  Bot,
  Calendar,
  ShoppingCart,
  Check,
  Sparkles,
  Clock,
  Shield,
  BarChart3,
  MessageSquare,
  Mail,
  Phone,
  Star,
  TrendingUp,
  Megaphone,
  HeadphonesIcon
} from "lucide-react";


const services = [
  {
    id: "web-apps",
    icon: Globe,
    title: "Revenue-Generating Web Apps",
    tagline: "Websites that work as hard as you do",
    description: "Built with Next.js 15, React, and TypeScript. Hosted on Vercel with PostgreSQL databases on Railway. The same tech stack used by Netflix, Airbnb, and TikTok. Your website becomes your best salesperson, working 24/7.",
    features: [
      "Next.js 15 + React + TypeScript",
      "PostgreSQL database with Prisma ORM",
      "Vercel hosting with global CDN",
      "Mobile-first responsive design",
      "SEO optimized for local search",
      "Google Analytics & conversion tracking",
    ],
    pricing: {
      oneTime: { price: "Custom Quote", description: "Pricing tailored to your specific needs and scope" },
      retainer: { price: "Starting at $1,500/mo", description: "Includes hosting, updates, SEO, unlimited changes, and priority support" },
    },
    results: [
      { metric: "2x", label: "Average conversion increase" },
      { metric: "<1s", label: "Page load time" },
      { metric: "50%", label: "More organic traffic" },
    ],
    caseStudy: {
      client: "VietHawaii",
      result: "50,000+ monthly users",
      quote: "The platform has connected our entire community.",
    },
    gradient: "from-rose-500 to-orange-500",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "24/7 AI Sales Assistant",
    tagline: "Never miss another lead, even at 2am",
    description: "Powered by Claude AI (Anthropic), our chatbots understand context, handle complex conversations, and feel genuinely human. We train the AI on your services, pricing, FAQs, and brand voice so it represents your business accurately.",
    features: [
      "Claude AI with custom business training",
      "Natural language understanding & context",
      "Lead capture with CRM integration",
      "Calendar sync (Google, Calendly, Acuity)",
      "Multi-language support available",
      "Smart escalation to human when needed",
    ],
    pricing: {
      oneTime: { price: "Custom Quote", description: "Pricing based on complexity and integration requirements" },
      retainer: { price: "Starting at $1,500/mo", description: "API costs, ongoing training, optimization, and support" },
    },
    results: [
      { metric: "24/7", label: "Lead capture" },
      { metric: "90%", label: "Questions answered instantly" },
      { metric: "3x", label: "More after-hours leads" },
    ],
    caseStudy: {
      client: "Aloha Coaches",
      result: "AI handles 80% of inquiries",
      quote: "It's like having a team member who never sleeps.",
    },
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "booking",
    icon: Calendar,
    title: "Automated Booking Systems",
    tagline: "Let customers book themselves",
    description: "Custom booking systems built into your website, or integration with platforms like Calendly, Acuity, or Square Appointments. Syncs with Google Calendar, sends SMS reminders via Twilio, and accepts deposits through Stripe.",
    features: [
      "Custom-built or platform integration",
      "Google Calendar & iCal sync",
      "Twilio SMS/email reminders",
      "Stripe payment & deposit collection",
      "Multi-service and multi-staff support",
      "Custom availability rules & buffers",
    ],
    pricing: {
      oneTime: { price: "Custom Quote", description: "Pricing varies based on features and integrations needed" },
      retainer: { price: "Starting at $1,500/mo", description: "Maintenance, SMS credits, optimization, and priority support" },
    },
    results: [
      { metric: "40%", label: "More appointments" },
      { metric: "60%", label: "Fewer no-shows" },
      { metric: "10+", label: "Hours saved weekly" },
    ],
    caseStudy: {
      client: "Aloha Massage Spa",
      result: "12 to 47 weekly bookings",
      quote: "Customers can book 24/7 now, even when we're closed.",
    },
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce & Payments",
    tagline: "Sell online, get paid fast",
    description: "Stripe-powered checkout experiences with PCI-compliant security. We never store credit card data. Support for subscriptions, one-time payments, deposits, gift cards, and invoicing. Integrates with your PostgreSQL database for order management.",
    features: [
      "Stripe Checkout & Payment Intents",
      "Subscription billing with Stripe Billing",
      "PostgreSQL order/inventory management",
      "Webhook-based order processing",
      "Gift cards & discount codes",
      "PCI-DSS compliant (we never store cards)",
    ],
    pricing: {
      oneTime: { price: "Custom Quote", description: "Pricing depends on catalog size and feature requirements" },
      retainer: { price: "Starting at $1,500/mo", description: "Maintenance, transaction monitoring, optimization, and priority support" },
    },
    results: [
      { metric: "99.9%", label: "Payment success rate" },
      { metric: "2.9%", label: "Transaction fees" },
      { metric: "Instant", label: "Payouts available" },
    ],
    caseStudy: {
      client: "Multiple clients",
      result: "$500K+ processed",
      quote: "Payments just work. No hassle, no worries.",
    },
    gradient: "from-violet-500 to-purple-500",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description: "30-minute call to understand your business, goals, and challenges. We'll determine if we're a good fit.",
    icon: Phone,
  },
  {
    step: 2,
    title: "Strategy & Proposal",
    description: "Within 48 hours, you'll receive a detailed proposal with timeline, pricing, and exactly what we'll build.",
    icon: BarChart3,
  },
  {
    step: 3,
    title: "Design & Build",
    description: "We design and develop your solution with weekly check-ins. You'll see progress every step of the way.",
    icon: Sparkles,
  },
  {
    step: 4,
    title: "Launch & Support",
    description: "We launch together, train your team, and provide ongoing support to ensure your success.",
    icon: Shield,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Pacific Pulse AI"
                className="w-10 h-10"
              />
              <span className="text-lg font-bold text-slate-900">Pacific Pulse</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#work" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Work</Link>
              <Link href="/services" className="text-sm font-medium text-sky-600">Services</Link>
              <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Pricing</Link>
              <Link href="/comparison" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Compare</Link>
              <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Blog</Link>
              <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Contact</Link>
            </div>

            <Link
              href="/apply"
              className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition"
            >
              Free Strategy Call
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-6">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-medium text-sky-700">Full-service digital solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
              Grow Your Business Online
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            From custom websites to AI automation. We build the digital infrastructure that helps Hawaii service businesses attract more customers and book more appointments.
          </p>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition"
          >
            View Pricing Plans
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition"
            >
              Get Your Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#retainer-tiers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition"
            >
              View Retainer Plans
            </a>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 ${index !== services.length - 1 ? 'border-b border-slate-200' : ''}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-500 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mb-8 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">Investment</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">
                      {service.pricing.oneTime.price}
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      {service.pricing.oneTime.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <Link
                        href="/pricing"
                        className="inline-flex items-center text-sky-600 font-medium text-sm hover:text-sky-700"
                      >
                        View all pricing plans
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <span className="text-slate-300">|</span>
                      <Link
                        href="/apply"
                        className="inline-flex items-center text-sky-600 font-medium text-sm hover:text-sky-700"
                      >
                        Get custom quote
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="flex gap-8 mb-8">
                    {service.results.map((result) => (
                      <div key={result.label}>
                        <div className="text-2xl font-bold text-slate-900">{result.metric}</div>
                        <div className="text-sm text-slate-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition"
                  >
                    Get started with {service.title.split(' ')[0].toLowerCase()}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Case Study Card */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`rounded-2xl bg-gradient-to-br ${service.gradient} p-8 text-white`}>
                    <div className="text-sm font-medium text-white/80 mb-2">Case Study</div>
                    <h3 className="text-2xl font-bold mb-2">{service.caseStudy.client}</h3>
                    <div className="text-3xl font-bold mb-4">{service.caseStudy.result}</div>
                    <p className="text-white/90 italic">&ldquo;{service.caseStudy.quote}&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              From idea to launch in 4 steps
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven process that delivers results without surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-sky-600" />
                </div>
                <div className="absolute top-6 left-14 right-0 h-0.5 bg-sky-200 hidden md:block" />
                <div className="text-sm font-semibold text-sky-600 mb-1">Step {step.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Hawaii businesses choose us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Most projects launch in 2-6 weeks. We move fast without cutting corners.",
              },
              {
                icon: Shield,
                title: "Guaranteed Results",
                description: "If you don't see ROI in 90 days, we'll work for free until you do.",
              },
              {
                icon: MessageSquare,
                title: "Local Support",
                description: "Based in Hawaii, available during your business hours. No overseas call centers.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-2xl bg-slate-50">
                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span className="text-sm font-medium text-white">Only 3 spots left for February</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to grow your business?
            </h2>
            <p className="text-sky-100 text-lg mb-8 max-w-xl mx-auto">
              Book a free 30-minute strategy call. We&apos;ll show you exactly how to get more customers online.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg"
            >
              Get Your Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2026 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
            <p>Built with aloha in Hawaii</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
