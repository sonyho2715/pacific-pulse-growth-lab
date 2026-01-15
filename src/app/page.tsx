import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Zap, Globe, Bot, Calendar, ShoppingCart, Mail, BarChart3, Star, Play } from "lucide-react";

// Featured projects - lead with your best work
const featuredProjects = [
  {
    name: "VietHawaii",
    category: "Community Platform",
    description: "Directory connecting 50,000+ people with Vietnamese-owned businesses across Hawaii. Multilingual, map-integrated, SEO-optimized.",
    url: "https://viethawaii.com",
    image: "/projects/viethawaii.png",
    stats: "50K+ users",
    gradient: "from-rose-500 via-orange-500 to-amber-500",
  },
  {
    name: "Aloha Coaches",
    category: "AI-Powered SaaS",
    description: "Transformational coaching platform with Claude AI-powered sessions, Stripe subscriptions, and automated booking.",
    url: "https://www.alohacoaches.com",
    image: "/projects/alohacoaches.png",
    stats: "AI + Stripe",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    name: "Bo's Auto Detail",
    category: "Service Business",
    description: "Premium auto detailing with luxury animations, online booking, and conversion-optimized landing pages.",
    url: "https://bos-auto-detail-frontend.vercel.app",
    image: "/projects/bos-auto.png",
    stats: "40% more bookings",
    gradient: "from-amber-400 via-yellow-500 to-orange-500",
  },
];

// All projects for the grid
const allProjects = [
  {
    name: "Aloha Massage Spa",
    category: "Booking System",
    url: "https://aloha-massage-spa.vercel.app",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    name: "Benefits Resource Group",
    category: "Dashboard + Analytics",
    url: "https://benefits-resource-group.vercel.app",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Truong Viet Ngu",
    category: "Education Platform",
    url: "https://truong-viet-ngu.vercel.app",
    gradient: "from-indigo-500 to-violet-500",
  },
];

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "Next.js applications built for speed, SEO, and conversion. From landing pages to full SaaS platforms.",
    features: ["Lightning-fast performance", "Mobile-first design", "SEO optimized"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "24/7 AI chatbots and automation that capture leads, answer questions, and book appointments while you sleep.",
    features: ["Trained on your business", "Natural conversations", "Lead capture"],
  },
  {
    icon: Calendar,
    title: "Booking & Scheduling",
    description: "Online booking systems that sync with your calendar, send confirmations, and reduce no-shows.",
    features: ["Calendar sync", "Automated reminders", "Payment integration"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Payments",
    description: "Sell products and services online with Stripe. Subscriptions, one-time payments, invoicing.",
    features: ["Stripe integration", "Subscription billing", "Secure checkout"],
  },
];

const testimonials = [
  {
    quote: "The booking system increased our appointments by 40%. Customers can book 24/7 now, even when we're closed.",
    author: "Sarah K.",
    role: "Aloha Massage Spa",
    avatar: "S",
  },
  {
    quote: "Pacific Pulse understood exactly what we needed. The VietHawaii platform has connected our entire community.",
    author: "Linh N.",
    role: "Community Organizer",
    avatar: "L",
  },
  {
    quote: "Professional, fast, and they actually deliver. Our new site converts twice as many visitors into customers.",
    author: "Mike T.",
    role: "Bo's Auto Detail",
    avatar: "M",
  },
];

export default function Home() {
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
              <a href="#work" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Work</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Services</a>
              <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Pricing</Link>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Contact</a>
            </div>

            <Link
              href="/apply"
              className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero - Portfolio Led */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mini intro */}
          <div className="text-center mb-12 pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-sky-700">Available for new projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4">
              We build digital products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
                that grow businesses
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Full-stack web applications and AI automation for businesses ready to scale.
              Based in Hawaii, serving clients worldwide.
            </p>
          </div>

          {/* Featured Project - Large Showcase */}
          <div className="mb-8">
            <a
              href={featuredProjects[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/9] md:aspect-[21/9]"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredProjects[0].gradient} opacity-90`} />

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end p-6 md:p-10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium text-white">
                      {featuredProjects[0].category}
                    </span>
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium text-white">
                      {featuredProjects[0].stats}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:underline">
                    {featuredProjects[0].name}
                  </h2>
                  <p className="text-white/90 text-sm md:text-base max-w-xl hidden md:block">
                    {featuredProjects[0].description}
                  </p>
                </div>
                <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </div>

          {/* Two more featured projects */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {featuredProjects.slice(1).map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden bg-slate-100 aspect-[16/10]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium text-white">
                        {project.category}
                      </span>
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium text-white">
                        {project.stats}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:underline">
                      {project.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>

          {/* More projects grid */}
          <div className="grid grid-cols-3 gap-4">
            {allProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-lg overflow-hidden bg-slate-100 aspect-[4/3]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-85`} />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <span className="text-xs font-medium text-white/80">{project.category}</span>
                    <h3 className="text-sm font-bold text-white group-hover:underline">{project.name}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "30+", label: "Projects Delivered" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "< 1s", label: "Average Load Time" },
              { value: "24/7", label: "AI Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Everything you need to grow online
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From custom web applications to AI automation. End-to-end solutions built with modern technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-xs font-medium text-slate-600"
                    >
                      <Check className="w-3 h-3 text-emerald-500" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Highlight Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span className="text-sm font-medium text-sky-300">AI Automation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Never miss another lead.
                <span className="block text-sky-400">Even at 2am.</span>
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                Our AI chatbots are trained on your business, answer questions naturally,
                capture leads, and book appointments while you sleep.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "24/7 lead capture and qualification",
                  "Natural conversations that sound human",
                  "Appointment booking with calendar sync",
                  "Instant answers to common questions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-400 transition"
              >
                See it in action
                <Play className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              {/* Chat mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-sm mx-auto">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Business Assistant</div>
                    <div className="text-xs text-emerald-500 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Online 24/7
                    </div>
                  </div>
                </div>
                <div className="py-4 space-y-3">
                  <div className="bg-slate-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-slate-700">Hi! Do you have any openings this Saturday?</p>
                  </div>
                  <div className="bg-sky-500 rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-sm text-white">Yes! We have slots at 10am, 2pm, and 4pm. Would you like me to book one for you?</p>
                  </div>
                  <div className="bg-slate-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-slate-700">2pm works. Can I also ask about your prices?</p>
                  </div>
                  <div className="bg-sky-500 rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-sm text-white">Perfect! I'll book you for 2pm Saturday. Our services start at $75. I'll send you a confirmation with full pricing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Trusted by Hawaii businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-slate-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold text-slate-900">Built with modern technology</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-slate-500">
            {["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel", "Stripe", "Claude AI"].map((tech) => (
              <span key={tech} className="text-sm font-medium">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to build something great?
            </h2>
            <p className="text-sky-100 text-lg mb-8 max-w-xl mx-auto">
              Tell us about your project. We typically respond within 24 hours with a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition border border-white/20"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900">Pacific Pulse</span>
              </div>
              <p className="text-slate-500 text-sm">
                Building digital products that grow businesses. Based in Hawaii, serving clients worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#services" className="hover:text-slate-900 transition">Web Applications</a></li>
                <li><a href="#services" className="hover:text-slate-900 transition">AI Automation</a></li>
                <li><a href="#services" className="hover:text-slate-900 transition">E-Commerce</a></li>
                <li><a href="#services" className="hover:text-slate-900 transition">Booking Systems</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link href="/portfolio" className="hover:text-slate-900 transition">Portfolio</Link></li>
                <li><Link href="/pricing" className="hover:text-slate-900 transition">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-slate-900 transition">Contact</Link></li>
                <li><Link href="/apply" className="hover:text-slate-900 transition">Start Project</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>sony@pacificpulseai.com</li>
                <li>Hawaii, USA</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2025 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
            <p>Built with aloha in Hawaii</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
