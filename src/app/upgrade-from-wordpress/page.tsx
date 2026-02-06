import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, Clock, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

export const metadata = {
  title: 'Upgrade from WordPress to AI-Powered Booking Automation | Pacific Pulse',
  description: 'Ready to leave WordPress behind? Get AI-powered booking automation with modern tech. 2-6 week migration. 90-day ROI guarantee.',
};

const wpProblems = [
  'Slow loading times (3-5 seconds)',
  'Constant plugin updates and conflicts',
  'Security vulnerabilities',
  'No AI chatbot integration',
  'Limited booking automation',
  'Expensive hosting and maintenance',
  'Poor mobile performance',
  'SEO limitations',
];

const pacificPulsebenefits = [
  'Lightning-fast (<1s load time)',
  'Zero maintenance - we handle it',
  'Enterprise-grade security built-in',
  'AI chatbot trained on your business',
  'Full booking automation with calendar sync',
  'Included hosting + SSL + CDN',
  'Mobile-first responsive design',
  'Built for SEO from day one',
];

export default function UpgradeFromWordPressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Pacific Pulse" width={40} height={40} className="w-10 h-10" />
              <span className="text-lg font-bold text-slate-900">Pacific Pulse</span>
            </Link>
            <Link href="/apply" className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition">
              Free Strategy Call
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-6">
            <Zap className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">WordPress Migration Specialists</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Outgrown WordPress?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
              Upgrade to AI-Powered Automation
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Stop wrestling with plugins, slow load times, and security issues. Migrate to modern AI-powered booking automation in 2-6 weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition">
              Get Free Migration Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/comparison" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition">
              Compare Options
            </Link>
          </div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Leave WordPress Problems Behind
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WordPress Problems */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">WordPress Issues</h3>
              </div>
              <ul className="space-y-3">
                {wpProblems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pacific Pulse Benefits */}
            <div className="p-8 bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl border-2 border-sky-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Pacific Pulse Solution</h3>
              </div>
              <ul className="space-y-3">
                {pacificPulsebenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Smooth Migration in 4 Steps
          </h2>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Content Audit', desc: 'We review your WordPress site and identify what to migrate, improve, or retire.' },
              { step: 2, title: 'Design & Build', desc: 'Rebuild your site with modern tech stack + AI automation. You review weekly progress.' },
              { step: 3, title: 'Content Migration', desc: 'We migrate your content, images, and SEO data. Zero downtime during switch.' },
              { step: 4, title: 'Launch & Support', desc: 'We handle DNS, redirects, and training. 30 days of launch support included.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-sky-600">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Migration Pricing
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            WordPress migration included in all plans. No extra fees.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { name: 'AI Starter', price: '$2,500', monthly: '$199/mo', pages: '8 pages + AI' },
              { name: 'Growth', price: '$3,500', monthly: '$149/mo', pages: '15 pages + AI + Marketing' },
              { name: 'Professional', price: '$6,000', monthly: '$397/mo', pages: 'Unlimited + Full AI' },
            ].map((plan) => (
              <div key={plan.name} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-slate-900 mb-1">{plan.price}</div>
                <div className="text-sm text-slate-600 mb-4">{plan.monthly}</div>
                <p className="text-sm text-slate-700">{plan.pages}</p>
              </div>
            ))}
          </div>

          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition">
            Get Your Free Migration Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Migration FAQs
          </h2>

          <div className="space-y-6">
            {[
              { q: 'Will my SEO rankings drop?', a: 'No. We implement proper 301 redirects and maintain all SEO metadata. Most clients see ranking improvements within 30 days due to faster page speed.' },
              { q: 'What happens to my WordPress content?', a: 'We migrate all pages, posts, images, and media. You keep full access to your old site until you\'re 100% satisfied with the new one.' },
              { q: 'How long does migration take?', a: '2-6 weeks depending on site size. Simple sites (5-10 pages) take 2-3 weeks. Complex sites (20+ pages) take 4-6 weeks.' },
              { q: 'Can I keep my domain and email?', a: 'Yes! Your domain stays with your current registrar. We just point it to the new site. Email is unaffected.' },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Leave WordPress Behind?
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-xl mx-auto">
            Get a free migration quote and strategy call. We'll show you exactly what's possible.
          </p>
          <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg">
            Book Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200 bg-white">
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
