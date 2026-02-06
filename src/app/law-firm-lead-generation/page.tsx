import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Scale, Bot, FileText, Lock } from 'lucide-react';

export const metadata = {
  title: 'Law Firm Lead Generation & Client Intake Automation | Hawaii Attorneys',
  description: 'AI-powered lead qualification and intake for law firms. 24/7 client screening, consultation booking, case evaluation.',
};

export default function LawFirmPage() {
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
          Law Firm Lead Generation with
          <span className="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">AI Client Screening</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8">AI qualifies leads 24/7, collects case details, and books consultations automatically. Never miss a potential client.</p>
        <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg">
          See Demo <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Law Firms</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Scale, title: 'Lead Qualification', desc: 'AI asks qualifying questions, determines case fit' },
              { icon: Bot, title: '24/7 Intake', desc: 'Capture leads after hours, weekends, holidays' },
              { icon: FileText, title: 'Case Details', desc: 'Collect all initial information before consultation' },
              { icon: Lock, title: 'Confidential', desc: 'Attorney-client privilege protected, secure' },
            ].map((f) => (
              <div key={f.title} className="p-6 bg-white rounded-xl border">
                <f.icon className="w-10 h-10 text-slate-700 mb-3" />
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
            <Link href="/pricing" className="p-6 border border-slate-200 rounded-xl hover:border-slate-700 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-slate-700">View All Pricing Plans</h3>
              <p className="text-sm text-slate-600">Compare features and pricing for all plan tiers</p>
              <ArrowRight className="w-5 h-5 text-slate-700 mt-3" />
            </Link>
            <Link href="/comparison" className="p-6 border border-slate-200 rounded-xl hover:border-slate-700 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-slate-700">Compare Us to Competitors</h3>
              <p className="text-sm text-slate-600">See how we stack up against traditional agencies and DIY tools</p>
              <ArrowRight className="w-5 h-5 text-slate-700 mt-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-700 to-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Grow Your Practice</h2>
          <p className="text-slate-300 mb-8">Qualify more leads. Book more consultations. Win more cases.</p>
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
