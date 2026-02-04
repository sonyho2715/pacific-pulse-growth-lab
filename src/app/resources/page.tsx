import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowRight, FileText, Video, BookOpen, Wrench, CheckCircle } from 'lucide-react';

const resources = [
  {
    id: 'web-app-checklist',
    title: 'Web App Launch Checklist',
    description: 'Everything you need before launching your custom web application. From performance optimization to security audits.',
    type: 'Checklist',
    icon: CheckCircle,
    category: 'Web Development',
    downloadable: true,
  },
  {
    id: 'booking-system-guide',
    title: 'The Complete Guide to Online Booking Systems',
    description: 'How to choose, implement, and optimize a booking system for your service business. Includes comparison of popular solutions.',
    type: 'Guide',
    icon: BookOpen,
    category: 'Booking Systems',
    downloadable: true,
  },
  {
    id: 'ai-chatbot-playbook',
    title: 'AI Chatbot Implementation Playbook',
    description: 'Step-by-step guide to implementing AI chatbots that capture leads and handle customer inquiries 24/7.',
    type: 'Playbook',
    icon: FileText,
    category: 'AI Automation',
    downloadable: true,
  },
  {
    id: 'stripe-setup-tutorial',
    title: 'Stripe Payments Setup Tutorial',
    description: 'Video walkthrough of setting up Stripe payments, subscriptions, and invoicing for your business.',
    type: 'Video',
    icon: Video,
    category: 'E-Commerce',
    downloadable: false,
  },
  {
    id: 'website-performance-toolkit',
    title: 'Website Performance Optimization Toolkit',
    description: 'Tools and techniques we use to achieve 95+ PageSpeed scores on every project.',
    type: 'Toolkit',
    icon: Wrench,
    category: 'Web Development',
    downloadable: true,
  },
  {
    id: 'conversion-optimization-guide',
    title: 'Conversion Rate Optimization Guide',
    description: 'Proven strategies to turn more visitors into customers. Based on real data from our client projects.',
    type: 'Guide',
    icon: BookOpen,
    category: 'Business Growth',
    downloadable: true,
  },
];

const categories = ['All', 'Web Development', 'Booking Systems', 'AI Automation', 'E-Commerce', 'Business Growth'];

export default function ResourcesPage() {
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
              <Link href="/portfolio" className="text-sm text-slate-600 hover:text-slate-900 transition">
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
            Free Resources
          </h1>
          <p className="text-lg text-sky-100">
            Guides, checklists, and tools to help you build and grow your digital presence
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

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-32 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center border-b border-slate-100">
                <resource.icon className="w-12 h-12 text-sky-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded">
                    {resource.category}
                  </span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition">
                  {resource.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {resource.description}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700 transition">
                  {resource.downloadable ? (
                    <>
                      <Download className="w-4 h-4" />
                      Download Free
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      Watch Now
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            More Resources Coming Soon
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We&apos;re working on video tutorials, case study breakdowns, and interactive tools.
            Subscribe to our newsletter to get notified when new resources are available.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 border-y border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Downloads' },
              { value: '6', label: 'Free Resources' },
              { value: '50+', label: 'Pages of Content' },
              { value: '100%', label: 'Actionable Advice' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-sky-600 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-sky-100 mb-8">
            Resources are great for learning. But when you&apos;re ready to build, we&apos;re here to help.
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
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition border border-white/30"
            >
              View Our Work
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
