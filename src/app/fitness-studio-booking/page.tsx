import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Bot, Users, CreditCard } from 'lucide-react';

export const metadata = {
  title: 'Fitness Studio Class Booking System | Gym Automation Hawaii',
  description: 'AI-powered class booking for fitness studios, gyms, yoga studios. Handle class schedules, membership, drop-ins, packages.',
};

export default function FitnessBookingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Pacific Pulse" width={40} height={40} />
            <span className="font-bold">Pacific Pulse</span>
          </Link>
          <Link href="/apply" className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg">Free Demo</Link>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Fitness Studio Booking System with
          <span className="block bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">AI Class Management</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8">Handle class bookings, membership, drop-ins, and class packs automatically. AI answers questions 24/7.</p>
        <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg">
          See Demo <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Fitness Studios</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: 'Class Scheduling', desc: 'Members book yoga, HIIT, spin classes online' },
              { icon: Bot, title: 'AI Assistant', desc: 'Answers schedule, pricing, membership questions' },
              { icon: Users, title: 'Capacity Management', desc: 'Track class limits, waitlists automatically' },
              { icon: CreditCard, title: 'Memberships & Packs', desc: 'Sell monthly memberships, 10-class packs, drop-ins' },
            ].map((f) => (
              <div key={f.title} className="p-6 bg-white rounded-xl border">
                <f.icon className="w-10 h-10 text-orange-600 mb-3" />
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
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
            <Link href="/pricing" className="p-6 border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600">View All Pricing Plans</h3>
              <p className="text-sm text-slate-600">Compare features and pricing for all plan tiers</p>
              <ArrowRight className="w-5 h-5 text-orange-600 mt-3" />
            </Link>
            <Link href="/comparison" className="p-6 border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600">Compare Us to Competitors</h3>
              <p className="text-sm text-slate-600">See how we stack up against traditional agencies and DIY tools</p>
              <ArrowRight className="w-5 h-5 text-orange-600 mt-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-red-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Automate Your Studio</h2>
          <p className="text-orange-100 mb-8">Fill more classes. Reduce admin time. Let AI handle bookings.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg">
            Get Free Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t text-center text-sm text-slate-500">
        &copy; 2026 Pacific Pulse Growth Lab LLC
      </footer>
    </div>
  );
}
