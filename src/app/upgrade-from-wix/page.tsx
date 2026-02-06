import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, CheckCircle, XCircle } from 'lucide-react';

export const metadata = {
  title: 'Upgrade from Wix to AI-Powered Custom Solutions | Pacific Pulse',
  description: 'Outgrown Wix templates? Get custom AI-powered booking automation. Own your code. 2-6 week migration.',
};

const wixLimitations = [
  'Limited customization (template-based)',
  'No code ownership - locked to Wix platform',
  'Expensive for advanced features ($29-$500/mo)',
  'No real AI integration (just chatbot widget)',
  'Limited booking automation',
  'SEO limitations hurt rankings',
  'Can\'t integrate with custom tools',
  'Slow page speeds',
];

const customBenefits = [
  'Fully custom design (no templates)',
  'You own all code - leave anytime',
  'All-inclusive pricing ($199-997/mo)',
  'Advanced AI trained on your business',
  'Full booking automation + calendar sync',
  'Built for SEO from ground up',
  'Custom integrations with any tool',
  '<1s load times guaranteed',
];

export default function UpgradeFromWixPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 mb-6">
            <Zap className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Wix to Custom Migration</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Outgrown Wix Templates?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600">
              Break Free with Custom AI Automation
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Stop being limited by templates. Own your code. Get AI-powered booking automation built exactly for your business.
          </p>

          <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition">
            Get Your Freedom Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Businesses Leave Wix
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Wix Limitations</h3>
              </div>
              <ul className="space-y-3">
                {wixLimitations.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border-2 border-violet-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Custom Solution</h3>
              </div>
              <ul className="space-y-3">
                {customBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Cost Comparison
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Wix Costs (Annual)</h3>
              <div className="space-y-2 text-left mb-4">
                <p className="text-slate-700">Business Basic: $27/mo = <span className="font-bold">$324/yr</span></p>
                <p className="text-slate-700">Business Unlimited: $32/mo = <span className="font-bold">$384/yr</span></p>
                <p className="text-slate-700">Business VIP: $59/mo = <span className="font-bold">$708/yr</span></p>
                <p className="text-slate-700">+ Custom domain</p>
                <p className="text-slate-700">+ Apps & plugins</p>
                <p className="text-slate-700">+ Premium support</p>
              </div>
              <p className="text-xl font-bold text-slate-900">Total: $500-1,200/yr</p>
              <p className="text-sm text-slate-600 mt-2">Still template-based. No AI. Limited features.</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-2 border-violet-500">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Pacific Pulse (Annual)</h3>
              <div className="space-y-2 text-left mb-4">
                <p className="text-slate-700">Growth Plan: $2,500/mo = <span className="font-bold">$30,000/yr</span></p>
                <p className="text-slate-700">✓ SEO optimization</p>
                <p className="text-slate-700">✓ Social media posting (3x/week)</p>
                <p className="text-slate-700">✓ Email marketing (2,500 contacts)</p>
                <p className="text-slate-700">✓ Monthly strategy calls</p>
                <p className="text-slate-700">✓ Custom design + you own the code</p>
              </div>
              <p className="text-xl font-bold text-violet-900">$30,000/yr</p>
              <p className="text-sm text-violet-700 mt-2 font-semibold">No setup fees. Cancel anytime. Fully custom + managed marketing.</p>
            </div>
          </div>

          <p className="text-lg text-slate-700 mb-8">
            <span className="font-bold">ROI:</span> At $2,500/mo, you need just 17 bookings/month at $150 each to break even. Our Growth plan typically drives 30-50+ bookings monthly with SEO + social media.
          </p>

          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition">
            Calculate Your ROI
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Learn More</h2>
            <p className="text-slate-600">Explore these resources before making your decision</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/pricing" className="p-6 border border-slate-200 rounded-xl hover:border-violet-500 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-violet-600">View All Pricing Plans</h3>
              <p className="text-sm text-slate-600">Compare features and pricing for all plan tiers</p>
              <ArrowRight className="w-5 h-5 text-violet-600 mt-3" />
            </Link>
            <Link href="/comparison" className="p-6 border border-slate-200 rounded-xl hover:border-violet-500 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-violet-600">Compare Us to Competitors</h3>
              <p className="text-sm text-slate-600">See how we stack up against traditional agencies and DIY tools</p>
              <ArrowRight className="w-5 h-5 text-violet-600 mt-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Own Your Website. Own Your Future.
          </h2>
          <p className="text-violet-100 text-lg mb-8 max-w-xl mx-auto">
            Break free from Wix templates. Get a custom AI-powered solution you actually own.
          </p>
          <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg">
            Get Your Free Quote
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
