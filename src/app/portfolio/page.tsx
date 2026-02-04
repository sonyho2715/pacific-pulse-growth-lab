import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight, Globe, ShoppingCart, Calendar, Bot, TrendingUp, Users } from 'lucide-react';

const portfolioItems = [
  {
    id: '1',
    title: 'VietHawaii Restaurant',
    category: 'Web Application',
    description: 'Custom ordering system with real-time kitchen management, online payments, and automated customer notifications.',
    imageGradient: 'from-orange-500 to-red-500',
    icon: ShoppingCart,
    tags: ['Next.js', 'Stripe', 'Real-time Orders'],
    results: [
      { metric: '300%', label: 'Increase in online orders' },
      { metric: '45min', label: 'Saved per day on order management' },
      { metric: '4.9★', label: 'Customer satisfaction rating' },
    ],
    testimonial: {
      quote: "The ordering system transformed our business. We went from juggling phone calls to having a streamlined digital workflow.",
      author: 'Restaurant Owner',
    },
    featured: true,
  },
  {
    id: '2',
    title: 'Aloha Massage Spa',
    category: 'Booking System',
    description: 'Full-featured booking platform with staff scheduling, automated reminders, and integrated payment processing.',
    imageGradient: 'from-teal-500 to-cyan-500',
    icon: Calendar,
    tags: ['Online Booking', 'SMS Reminders', 'Staff Management'],
    results: [
      { metric: '60%', label: 'Reduction in no-shows' },
      { metric: '24/7', label: 'Online booking availability' },
      { metric: '20hrs', label: 'Saved weekly on scheduling' },
    ],
    testimonial: {
      quote: "Our no-show rate dropped dramatically with automated reminders. The booking system pays for itself.",
      author: 'Spa Owner',
    },
    featured: true,
  },
  {
    id: '3',
    title: 'Coastal Real Estate Group',
    category: 'AI Automation',
    description: 'AI-powered chatbot that qualifies leads 24/7, schedules property viewings, and integrates with their CRM.',
    imageGradient: 'from-sky-500 to-indigo-500',
    icon: Bot,
    tags: ['AI Chatbot', 'Lead Qualification', 'CRM Integration'],
    results: [
      { metric: '70%', label: 'After-hours leads captured' },
      { metric: '3min', label: 'Average response time' },
      { metric: '$50K', label: 'Additional revenue in 3 months' },
    ],
    testimonial: {
      quote: "The AI chatbot handles inquiries while we sleep. We're capturing leads we used to lose to competitors.",
      author: 'Real Estate Broker',
    },
    featured: true,
  },
  {
    id: '4',
    title: 'Pacific Fitness Studio',
    category: 'Web Application',
    description: 'Membership management system with class scheduling, payment processing, and member portal.',
    imageGradient: 'from-purple-500 to-pink-500',
    icon: Users,
    tags: ['Membership System', 'Class Booking', 'Member Portal'],
    results: [
      { metric: '40%', label: 'Increase in class attendance' },
      { metric: '95%', label: 'Member retention rate' },
      { metric: '$8K', label: 'Monthly recurring revenue added' },
    ],
    featured: false,
  },
  {
    id: '5',
    title: 'Island Auto Detail',
    category: 'Booking System',
    description: 'Online booking with service packages, add-ons, deposits, and automated appointment reminders.',
    imageGradient: 'from-slate-600 to-slate-800',
    icon: Calendar,
    tags: ['Service Packages', 'Deposits', 'Reminders'],
    results: [
      { metric: '50%', label: 'More bookings per month' },
      { metric: '80%', label: 'Deposit collection rate' },
      { metric: '2hrs', label: 'Saved daily on scheduling' },
    ],
    featured: false,
  },
  {
    id: '6',
    title: 'Maui Adventure Tours',
    category: 'E-Commerce',
    description: 'Tour booking platform with availability management, group bookings, and multi-language support.',
    imageGradient: 'from-emerald-500 to-teal-500',
    icon: Globe,
    tags: ['Tour Booking', 'Multi-language', 'Group Management'],
    results: [
      { metric: '200%', label: 'Increase in direct bookings' },
      { metric: '15%', label: 'Reduction in OTA fees' },
      { metric: '4.8★', label: 'Booking experience rating' },
    ],
    featured: false,
  },
];

const categories = ['All', 'Web Application', 'Booking System', 'AI Automation', 'E-Commerce'];

export default function PortfolioPage() {
  const featuredProjects = portfolioItems.filter(item => item.featured);
  const otherProjects = portfolioItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Pacific Pulse AI"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-bold text-slate-900">Pacific Pulse</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/#services" className="text-sm text-slate-600 hover:text-slate-900 transition">
                Services
              </Link>
              <Link href="/portfolio" className="text-sm font-medium text-sky-600">
                Portfolio
              </Link>
              <Link href="/pricing" className="text-sm text-slate-600 hover:text-slate-900 transition">
                Pricing
              </Link>
              <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900 transition">
                Blog
              </Link>
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

      {/* Header */}
      <div className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h1>
          <p className="text-lg text-sky-100">
            Real results from real businesses. See how we help companies grow with custom digital solutions.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === 'All'
                    ? 'bg-sky-500 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Projects</h2>
        <div className="space-y-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className={`relative h-80 rounded-2xl bg-gradient-to-br ${project.imageGradient} p-8 flex flex-col justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{project.category}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/20 backdrop-blur text-white text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2">
                <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.description}</p>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.results.map((result) => (
                    <div key={result.label} className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-xl font-bold text-sky-600">{result.metric}</div>
                      <div className="text-xs text-slate-500">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                {project.testimonial && (
                  <blockquote className="border-l-4 border-sky-500 pl-4 italic text-slate-600">
                    "{project.testimonial.quote}"
                    <footer className="mt-2 text-sm font-medium text-slate-900 not-italic">
                      — {project.testimonial.author}
                    </footer>
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">More Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`h-40 bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between`}>
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6">
                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded mb-3">
                  {project.category}
                </span>
                <p className="text-sm text-slate-600 mb-4">{project.description}</p>
                <div className="grid grid-cols-3 gap-2">
                  {project.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <div className="text-sm font-bold text-sky-600">{result.metric}</div>
                      <div className="text-xs text-slate-500 truncate">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '$2M+', label: 'Revenue Generated for Clients' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Systems Running Smoothly' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-sky-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-sky-100 mb-8">
            Let&apos;s discuss how we can help your business achieve similar results.
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
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition border border-white/30"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>&copy; 2026 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
