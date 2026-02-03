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
  Phone
} from "lucide-react";

export const metadata = {
  title: "Services | Pacific Pulse Growth Lab",
  description: "Web applications, AI automation, booking systems, and e-commerce solutions for Hawaii businesses. See how we help service businesses grow.",
};

const services = [
  {
    id: "web-apps",
    icon: Globe,
    title: "Revenue-Generating Web Apps",
    tagline: "Websites that work as hard as you do",
    description: "Custom Next.js applications built for speed, SEO, and conversion. Your website becomes your best salesperson, working 24/7 to attract and convert visitors.",
    features: [
      "Lightning-fast load times (under 1 second)",
      "Mobile-first responsive design",
      "SEO optimized for local search",
      "Conversion-focused layouts",
      "Analytics and tracking built-in",
      "Easy content management",
    ],
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
    description: "AI chatbots trained on your business that capture leads, answer questions, and book appointments while you sleep. Like having a receptionist who never takes a break.",
    features: [
      "Trained on your specific business",
      "Natural, human-like conversations",
      "Automatic lead capture and qualification",
      "Appointment scheduling with calendar sync",
      "Instant answers to common questions",
      "Escalation to human when needed",
    ],
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
    description: "Online booking systems that sync with your calendar, send automatic confirmations and reminders, and drastically reduce no-shows. Stop playing phone tag with customers.",
    features: [
      "Real-time calendar sync (Google, iCal)",
      "Automatic email & SMS confirmations",
      "Smart reminder sequences",
      "Online payment integration",
      "Multi-service and multi-staff support",
      "Custom booking rules and availability",
    ],
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
    description: "Sell products and services online with secure Stripe integration. Subscriptions, one-time payments, gift cards, and invoicing. All with beautiful checkout experiences.",
    features: [
      "Secure Stripe payment processing",
      "Subscription and recurring billing",
      "Gift card and voucher systems",
      "Invoice generation and tracking",
      "Multiple currency support",
      "PCI-compliant security",
    ],
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
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">Pacific Pulse</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#work" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Work</Link>
              <Link href="/services" className="text-sm font-medium text-sky-600">Services</Link>
              <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Pricing</Link>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition"
            >
              Get Your Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition"
            >
              View Pricing
            </Link>
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
                    className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition"
                  >
                    Get started with {service.title.toLowerCase()}
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
