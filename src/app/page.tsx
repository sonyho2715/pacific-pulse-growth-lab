import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Zap, Globe, Code, Smartphone, Bot, BarChart3, Mail, Calendar, ShoppingCart, Users, Star, ExternalLink } from "lucide-react";

// Portfolio projects data
const projects = [
  {
    name: "VietHawaii",
    description: "Community directory connecting people with Vietnamese-owned businesses across Hawaii",
    url: "https://viethawaii.com",
    image: "/projects/viethawaii.png",
    tags: ["Directory", "Maps", "Multilingual"],
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Aloha Coaches",
    description: "Transformational coaching platform with AI-powered sessions and subscription billing",
    url: "https://www.alohacoaches.com",
    image: "/projects/alohacoaches.png",
    tags: ["SaaS", "AI", "Subscriptions"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Aloha Massage Spa",
    description: "Spa booking and service management with online scheduling system",
    url: "https://aloha-massage-spa.vercel.app",
    image: "/projects/aloha-spa.png",
    tags: ["Booking", "Services", "Gallery"],
    color: "from-teal-500 to-emerald-500",
  },
  {
    name: "Bo's Auto Detail",
    description: "Premium auto detailing service with luxury design and smooth animations",
    url: "https://bos-auto-detail-frontend.vercel.app",
    image: "/projects/bos-auto.png",
    tags: ["Luxury", "Animation", "Booking"],
    color: "from-amber-500 to-yellow-500",
  },
  {
    name: "Benefits Resource Group",
    description: "Employee benefits management platform with analytics and PDF generation",
    url: "https://benefits-resource-group.vercel.app",
    image: "/projects/benefits.png",
    tags: ["Dashboard", "Analytics", "PDF"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Truong Viet Ngu",
    description: "Vietnamese language school platform for community education",
    url: "https://truong-viet-ngu.vercel.app",
    image: "/projects/truong.png",
    tags: ["Education", "Community", "Bilingual"],
    color: "from-indigo-500 to-violet-500",
  },
];

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Modern, fast websites built with Next.js that convert visitors into customers",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "24/7 AI chatbots trained on your business to capture leads while you sleep",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description: "Online scheduling that syncs with your calendar and sends confirmations",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Sell products and services online with Stripe payment processing",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email sequences and newsletters that nurture leads",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time dashboards showing your business performance",
  },
];

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime" },
  { value: "< 1s", label: "Load Time" },
  { value: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Pacific Pulse</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#work" className="text-sm text-zinc-400 hover:text-white transition">Work</a>
              <a href="#services" className="text-sm text-zinc-400 hover:text-white transition">Services</a>
              <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition">Pricing</Link>
              <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition">Contact</a>
            </div>

            <Link
              href="/apply"
              className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-zinc-400">Available for new projects</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              We build
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                digital products
              </span>
              that scale
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              Full-stack web applications, AI integrations, and marketing automation for businesses ready to grow. Based in Hawaii, serving clients worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 font-semibold rounded-full hover:bg-white/10 transition"
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Trust Bar */}
      <section className="py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-zinc-500 mb-8">Trusted by businesses across Hawaii</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <span className="text-xl font-bold">VietHawaii</span>
            <span className="text-xl font-bold">Aloha Coaches</span>
            <span className="text-xl font-bold">Benefits Resource Group</span>
            <span className="text-xl font-bold">Bo&apos;s Auto Detail</span>
            <span className="text-xl font-bold">Live Safe Hawaii</span>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Real projects delivering real results for real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                {/* Project Image Placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition flex items-center justify-center`}>
                  <Globe className="w-16 h-16 text-white/50" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-violet-400 transition">{project.name}</h3>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition" />
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-full text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              End-to-end solutions from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-zinc-900 rounded-2xl border border-white/5 hover:border-violet-500/50 transition group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-6 group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition">
                  <service.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Modern tools for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Next.js 15", desc: "React Framework" },
              { name: "TypeScript", desc: "Type Safety" },
              { name: "Tailwind", desc: "Styling" },
              { name: "Prisma", desc: "Database ORM" },
              { name: "PostgreSQL", desc: "Database" },
              { name: "Vercel", desc: "Hosting" },
              { name: "Railway", desc: "Infrastructure" },
              { name: "Stripe", desc: "Payments" },
              { name: "Resend", desc: "Email" },
              { name: "Claude AI", desc: "AI Integration" },
              { name: "Zod", desc: "Validation" },
              { name: "GitHub", desc: "Version Control" },
            ].map((tech) => (
              <div key={tech.name} className="text-center p-6 bg-zinc-900 rounded-xl border border-white/5">
                <div className="text-lg font-semibold mb-1">{tech.name}</div>
                <div className="text-sm text-zinc-500">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Transparent pricing for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$49",
                desc: "Perfect for small businesses",
                features: ["5-page website", "Mobile responsive", "Contact form", "Basic SEO", "48hr support"],
              },
              {
                name: "Growth",
                price: "$99",
                desc: "For businesses ready to scale",
                features: ["10+ pages", "Booking system", "Blog", "Email marketing", "24hr support"],
                popular: true,
              },
              {
                name: "Professional",
                price: "$199",
                desc: "Full-featured solution",
                features: ["Unlimited pages", "E-commerce", "AI chatbot", "Analytics", "Priority support"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl border ${
                  plan.popular
                    ? "bg-gradient-to-b from-violet-500/10 to-transparent border-violet-500/50"
                    : "bg-zinc-900 border-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-4">Most Popular</div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-zinc-500">/month</span>
                </div>
                <p className="text-zinc-400 mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-violet-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`block text-center py-3 rounded-full font-semibold transition ${
                    plan.popular
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing" className="text-violet-400 hover:text-violet-300 font-medium">
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Pacific Pulse delivered a beautiful website that perfectly captures our brand. The booking system has increased our appointments by 40%.",
                author: "Sarah K.",
                role: "Owner, Aloha Massage Spa",
              },
              {
                quote: "The AI chatbot answers questions 24/7. We're capturing leads even at 2am when tourists can't sleep and want to book tours.",
                author: "Mike T.",
                role: "Tour Operator, Maui",
              },
              {
                quote: "Professional, fast, and they understand Hawaii businesses. The VietHawaii platform has connected our entire community.",
                author: "Linh N.",
                role: "Community Organizer",
              },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-zinc-900 rounded-2xl border border-white/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to build something great?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your project. We typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 font-semibold rounded-full hover:bg-white/10 transition"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Pacific Pulse</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Building digital products that scale businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition">AI Integration</a></li>
                <li><a href="#" className="hover:text-white transition">E-Commerce</a></li>
                <li><a href="#" className="hover:text-white transition">Marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/apply" className="hover:text-white transition">Start Project</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>sony@pacificpulseai.com</li>
                <li>Hawaii, USA</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>© 2025 Pacific Pulse. All rights reserved.</p>
            <p>Built with ❤️ in Hawaii 🌺</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
