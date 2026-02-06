import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Zap, Bot, Calendar, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Outgrown Your Basic Website? Upgrade to AI Automation | Pacific Pulse',
  description: 'Ready to scale beyond a basic website? Add AI chatbots, booking automation, and revenue generation. Starting at $2,500.',
};

const signs = [
  {
    icon: DollarSign,
    title: 'Losing Revenue',
    desc: 'Missing calls after hours or when busy. No way to book online 24/7.',
  },
  {
    icon: Calendar,
    title: 'Manual Booking',
    desc: 'Still taking bookings by phone/text. Wasting 10+ hours per week on scheduling.',
  },
  {
    icon: Bot,
    title: 'No Automation',
    desc: 'Every customer question needs your personal response. Can\'t scale.',
  },
  {
    icon: TrendingUp,
    title: 'Can\'t Track ROI',
    desc: 'No analytics. No idea which marketing actually brings customers.',
  },
];

export default function OutgrownBasicWebsitePage() {
  return (
    <div className="min-h-screen bg-white">
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

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Time to Scale</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Your Basic Website Got You Started.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600">
              Now It's Time to Grow.
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            You've outgrown the $49/month brochure site. Ready for AI automation, online booking, and revenue generation? We'll upgrade you.
          </p>

          <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition">
            Get Your Upgrade Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            4 Signs You've Outgrown Your Website
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {signs.map((sign) => (
              <div key={sign.title} className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <sign.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{sign.title}</h3>
                <p className="text-slate-600">{sign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What You Get When You Upgrade
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Chatbot 24/7',
                features: ['Answer questions instantly', 'Capture lead info', 'Book appointments', 'Qualify prospects'],
                price: 'Included',
              },
              {
                title: 'Booking Automation',
                features: ['Online calendar booking', 'Automatic confirmations', 'SMS reminders', 'Stripe payments'],
                price: 'Included',
              },
              {
                title: 'Analytics & Tracking',
                features: ['See where leads come from', 'Track conversion rates', 'ROI reporting', 'Custom dashboards'],
                price: 'Included',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2 mb-6">
                  {feature.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-sm font-semibold text-emerald-600">{feature.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Upgrade Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-600 uppercase mb-2">Your Current Site</h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Basic Website</h4>
              <ul className="space-y-3 mb-6 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✗</span> No AI automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✗</span> No online booking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✗</span> No analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✗</span> Missing revenue
                </li>
              </ul>
              <p className="text-lg font-bold text-slate-900">$49-200/month</p>
              <p className="text-sm text-slate-500">Just a digital brochure</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-500 relative">
              <div className="absolute -top-3 right-4">
                <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                  Recommended
                </span>
              </div>
              <h3 className="text-sm font-semibold text-emerald-700 uppercase mb-2">Upgrade To</h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">AI Starter</h4>
              <ul className="space-y-3 mb-6 text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> AI chatbot 24/7
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Booking automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Full analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Capture more revenue
                </li>
              </ul>
              <p className="text-lg font-bold text-slate-900">$2,500 + $199/month</p>
              <p className="text-sm text-emerald-700 font-semibold">Revenue-generating machine</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition">
              Get Your Upgrade Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
            Your basic website got you started. Now upgrade to AI-powered automation that actually generates revenue.
          </p>
          <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg">
            Book Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

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
