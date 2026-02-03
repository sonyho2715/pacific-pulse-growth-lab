import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Zap, Globe, Bot, Calendar, ShoppingCart, Mail, BarChart3, Star, Play } from "lucide-react";
import { blogPosts } from "./blog/data";

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
    url: "https://www.bosautodetail.com",
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

// Industry demo sites
const industryDemos = [
  {
    name: "Aloha Weddings",
    industry: "Wedding Planner",
    description: "Romantic elegance with planning packages, portfolio gallery, and detailed inquiry forms",
    url: "/wedding-demo",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    color: "rose",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    name: "Luxe Salon",
    industry: "Hair Salon",
    description: "Modern dark theme with service menu, team profiles, and filterable gallery",
    url: "/salon-demo",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Harrison Law Group",
    industry: "Law Firm",
    description: "Professional authority with practice areas, attorney bios, and case results",
    url: "/law-firm-demo",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    color: "amber",
    gradient: "from-slate-700 to-slate-900",
  },
  {
    name: "Sunset Shores",
    industry: "Restaurant",
    description: "Warm inviting design with full menu, reservations, and ambiance gallery",
    url: "/restaurant-demo",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Bright Smile Dental",
    industry: "Dental Practice",
    description: "Clean trustworthy design with services, team, and online booking",
    url: "/dental-demo",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    color: "sky",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    name: "Peak Performance",
    industry: "Fitness Studio",
    description: "Energetic bold design with class schedules, trainers, and membership plans",
    url: "/fitness-demo",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    color: "orange",
    gradient: "from-orange-500 to-red-600",
  },
];

const services = [
  {
    icon: Globe,
    title: "Revenue-Generating Web Apps",
    description: "Next.js applications built for speed, SEO, and conversion. From landing pages to full SaaS platforms.",
    features: ["Lightning-fast performance", "Mobile-first design", "SEO optimized"],
  },
  {
    icon: Bot,
    title: "24/7 AI Sales Assistant",
    description: "AI chatbots and automation that capture leads, answer questions, and book appointments while you sleep.",
    features: ["Trained on your business", "Natural conversations", "Lead capture"],
  },
  {
    icon: Calendar,
    title: "Automated Booking Systems",
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
    quote: "The booking system increased our appointments by 40% in the first month. We went from 12 to 47 weekly bookings. Customers can book 24/7 now, even when we're closed.",
    author: "Sarah Kimura",
    role: "Owner",
    company: "Aloha Massage Spa",
    location: "Honolulu, HI",
    avatar: "/testimonials/sarah.jpg",
    initials: "SK",
    metric: "40% more bookings",
  },
  {
    quote: "Pacific Pulse understood exactly what we needed. The VietHawaii platform has connected our entire community. Over 50,000 people now use it to find Vietnamese businesses.",
    author: "Linh Nguyen",
    role: "Community Organizer",
    company: "VietHawaii",
    location: "Oahu, HI",
    avatar: "/testimonials/linh.jpg",
    initials: "LN",
    metric: "50K+ users",
  },
  {
    quote: "Professional, fast, and they actually deliver. Our new site converts twice as many visitors into customers. Best investment we made this year.",
    author: "Mike Torres",
    role: "Owner",
    company: "Bo's Auto Detail",
    location: "Kailua, HI",
    avatar: "/testimonials/mike.jpg",
    initials: "MT",
    metric: "2x conversions",
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
              <a href="#demos" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Demos</a>
              <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Services</Link>
              <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Pricing</Link>
              <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Blog</Link>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Contact</a>
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

      {/* Hero - Portfolio Led */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mini intro */}
          <div className="text-center mb-12 pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-sm font-medium text-amber-800">February: Only 3 spots remaining</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4">
              Turn Website Visitors Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
                Booked Appointments
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
              AI-powered booking systems for Hawaii service businesses. Your website works 24/7,
              capturing leads and booking clients while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition"
              >
                Get Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition"
              >
                See Our Work
              </a>
            </div>
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

      {/* Industry Demos Section */}
      <section id="demos" className="py-20 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-4">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span className="text-sm font-medium text-sky-700">Interactive Demos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See What We Can Build For Your Industry
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore fully functional demo sites built for different industries. Click any demo to see the complete multi-page experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryDemos.map((demo) => (
              <Link
                key={demo.name}
                href={demo.url}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={demo.image}
                    alt={demo.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${demo.gradient} opacity-60`} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-800">
                      {demo.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{demo.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4">{demo.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-sky-600 group-hover:text-sky-700 transition">
                      View Demo
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Don&apos;t see your industry? We build custom solutions for any business.</p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition"
            >
              Request a Custom Demo
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
              { value: "$2.4M+", label: "Client Revenue Generated" },
              { value: "40%", label: "Avg. Booking Increase" },
              { value: "1,200+", label: "Appointments Booked" },
              { value: "24/7", label: "AI Working For You" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-sm font-medium">Vercel Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
                </svg>
                <span className="text-sm font-medium">Stripe Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-sm font-medium">Open Source Contributor</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                <span className="text-sm font-medium">SSL Secured</span>
              </div>
            </div>
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
              <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    {testimonial.metric}
                  </span>
                </div>
                <p className="text-slate-600 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-700">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-xs text-slate-500">{testimonial.location}</div>
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

      {/* Blog Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Latest Insights
              </h2>
              <p className="text-slate-600">
                Business growth strategies that actually work
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 relative overflow-hidden">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span className="text-sm font-medium text-white">Only 3 spots left for February</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book More Clients?
            </h2>
            <p className="text-sky-100 text-lg mb-4 max-w-xl mx-auto">
              Get a free 30-minute strategy call. We&apos;ll audit your current website and show you exactly how to increase bookings.
            </p>
            <p className="text-sky-200 text-sm mb-8 max-w-md mx-auto">
              No pressure, no obligation. If we&apos;re not a good fit, we&apos;ll point you in the right direction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg"
              >
                Get Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-sky-200 text-xs mt-6">
              Typical response time: under 24 hours
            </p>
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
                <li><a href="#demos" className="hover:text-slate-900 transition">Industry Demos</a></li>
                <li><Link href="/pricing" className="hover:text-slate-900 transition">Pricing</Link></li>
                <li><Link href="/blog" className="hover:text-slate-900 transition">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-slate-900 transition">Contact</Link></li>
                <li><Link href="/apply" className="hover:text-slate-900 transition">Free Strategy Call</Link></li>
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
            <p>&copy; 2026 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
            <p>Built with aloha in Hawaii</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
