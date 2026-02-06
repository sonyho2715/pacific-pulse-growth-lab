import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Bot, MessageSquare, CreditCard, Clock, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Spa & Massage Booking System with AI Automation | Pacific Pulse Hawaii',
  description: 'AI-powered booking system for spas and massage therapy businesses in Hawaii. 24/7 online booking, automated reminders, no-show reduction. Case study: 12→47 weekly bookings.',
};

export default function SpaBookingSystemPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Pacific Pulse" width={40} height={40} />
              <span className="text-lg font-bold">Pacific Pulse</span>
            </Link>
            <Link href="/apply" className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition">
              Free Demo
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            AI-Powered Booking System for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Spas & Massage Therapy
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Let clients book appointments 24/7. AI answers questions, captures leads, and reduces no-shows automatically.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-lg mb-8">
            <span className="text-sm font-semibold text-emerald-900">Case Study: Aloha Massage Spa went from 12 → 47 weekly bookings</span>
          </div>
          <div>
            <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
              See Live Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Everything Your Spa Needs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: '24/7 Online Booking', desc: 'Clients book anytime via website, even when you\'re closed. Syncs with Google Calendar instantly.' },
              { icon: Bot, title: 'AI Receptionist', desc: 'Answers questions about services, pricing, availability. Never miss a lead at 2am again.' },
              { icon: MessageSquare, title: 'Auto Reminders', desc: 'SMS & email confirmations and reminders. Reduce no-shows by 60%.' },
              { icon: CreditCard, title: 'Deposit Collection', desc: 'Collect deposits via Stripe. Reduce no-shows even further with skin in the game.' },
              { icon: Clock, title: 'Multi-Service Support', desc: 'Handle Swedish, Deep Tissue, Hot Stone, etc. Different durations and pricing per service.' },
              { icon: TrendingUp, title: 'Analytics Dashboard', desc: 'See which services book most, peak hours, revenue trends. Make data-driven decisions.' },
            ].map((feature) => (
              <div key={feature.title} className="p-6 bg-white rounded-xl border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real Results from Hawaii Spas</h2>
          <div className="p-8 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl border-2 border-teal-500 mb-8">
            <div className="text-sm font-semibold text-teal-700 mb-2">Aloha Massage Spa, Honolulu</div>
            <div className="text-4xl font-bold text-slate-900 mb-4">12 → 47 weekly bookings</div>
            <p className="text-slate-700 italic">"Customers can book 24/7 now, even when we're closed. The AI answers all the common questions so we don't have to."</p>
          </div>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
            Get Your Free Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Pricing for Spas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">AI Starter</h3>
              <div className="text-3xl font-bold text-slate-900 mb-1">$2,500</div>
              <div className="text-sm text-slate-600 mb-4">+ $199/month</div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ AI chatbot + booking</li>
                <li>✓ Up to 3 services</li>
                <li>✓ SMS reminders</li>
                <li>✓ Stripe deposits</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border-2 border-teal-500">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Professional</h3>
              <div className="text-3xl font-bold text-slate-900 mb-1">$6,000</div>
              <div className="text-sm text-slate-600 mb-4">+ $397/month</div>
              <ul className="space-y-2 text-sm text-slate-700 font-medium">
                <li>✓ Everything in AI Starter</li>
                <li>✓ Unlimited services</li>
                <li>✓ Multi-location support</li>
                <li>✓ Advanced AI training</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Have Questions?</h2>
            <p className="text-slate-600">Check out these resources to learn more</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/pricing" className="p-6 border border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-600">View All Pricing Plans</h3>
              <p className="text-sm text-slate-600">Compare features and pricing for all plan tiers</p>
              <ArrowRight className="w-5 h-5 text-teal-600 mt-3" />
            </Link>
            <Link href="/comparison" className="p-6 border border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-600">Compare Us to Competitors</h3>
              <p className="text-sm text-slate-600">See how we stack up against traditional agencies and DIY tools</p>
              <ArrowRight className="w-5 h-5 text-teal-600 mt-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-teal-500 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Spa Bookings?</h2>
          <p className="text-teal-100 text-lg mb-8">Book a free demo. We'll show you exactly how it works for your spa.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 shadow-lg">
            Schedule Free Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center text-sm text-slate-500">
          <p>&copy; 2026 Pacific Pulse Growth Lab LLC. Serving Hawaii spas with aloha.</p>
        </div>
      </footer>
    </div>
  );
}
