import Link from 'next/link';
import Image from 'next/image';
import { Check, X, ArrowRight, Zap, Shield, Code, Clock } from 'lucide-react';

export const metadata = {
  title: 'Compare Pacific Pulse vs Traditional Agencies & DIY Tools | Honest Comparison',
  description: 'See how Pacific Pulse AI-powered booking automation compares to traditional web agencies and DIY website builders. Honest 12-point feature comparison.',
};

const comparisons = [
  {
    feature: 'Setup Time',
    traditional: '3-6 months',
    diy: '5 minutes (template)',
    pacificPulse: '2-6 weeks (custom)',
    winner: 'pacific',
  },
  {
    feature: 'AI Chatbot',
    traditional: '❌ Not included',
    diy: '✅ Basic (generic)',
    pacificPulse: '✅ Advanced (custom trained)',
    winner: 'pacific',
  },
  {
    feature: 'Code Ownership',
    traditional: '❌ Proprietary platform',
    diy: '❌ Locked to platform',
    pacificPulse: '✅ You own everything',
    winner: 'pacific',
  },
  {
    feature: 'ROI Guarantee',
    traditional: '❌ None',
    diy: '❌ None',
    pacificPulse: '✅ 90-day money-back',
    winner: 'pacific',
  },
  {
    feature: 'Local Hawaii Support',
    traditional: 'Maybe',
    diy: '❌ Self-service only',
    pacificPulse: '✅ Based in Honolulu',
    winner: 'pacific',
  },
  {
    feature: 'Direct Developer Access',
    traditional: '❌ Account managers only',
    diy: '❌ No access',
    pacificPulse: '✅ Senior developers',
    winner: 'pacific',
  },
  {
    feature: 'Technology Stack',
    traditional: 'WordPress/proprietary',
    diy: 'Proprietary templates',
    pacificPulse: 'Next.js (Netflix/Airbnb tech)',
    winner: 'pacific',
  },
  {
    feature: 'Booking Automation',
    traditional: '❌ Or basic add-on',
    diy: '❌ Limited integrations',
    pacificPulse: '✅ Fully integrated',
    winner: 'pacific',
  },
  {
    feature: 'Monthly Cost',
    traditional: '$0-500+',
    diy: '$49-149',
    pacificPulse: '$79-997 (tier-based)',
    winner: 'diy',
  },
  {
    feature: 'Setup Cost',
    traditional: '$5,000-50,000',
    diy: '$0-500',
    pacificPulse: '$1,500-10,000',
    winner: 'diy',
  },
  {
    feature: 'Customization',
    traditional: '✅ High (slow)',
    diy: '❌ Template-only',
    pacificPulse: '✅ High (fast)',
    winner: 'pacific',
  },
  {
    feature: 'Performance',
    traditional: 'Slow (WordPress)',
    diy: 'Variable',
    pacificPulse: '<1s load time',
    winner: 'pacific',
  },
];

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Pacific Pulse"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-bold text-slate-900">Pacific Pulse</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Services</Link>
              <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Pricing</Link>
              <Link href="/comparison" className="text-sm font-medium text-sky-600">Compare</Link>
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

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-6">
            <Zap className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-medium text-sky-700">Honest Comparison</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            How We Compare to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
              Traditional Agencies & DIY Tools
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            We're not right for everyone. Here's an honest comparison so you can make the best choice for your business.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-bold text-slate-700">Traditional Agency</th>
                  <th className="text-center p-4 font-bold text-slate-700">DIY Tool</th>
                  <th className="text-center p-4 font-bold text-sky-600 bg-sky-50 rounded-t-xl">
                    Pacific Pulse
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-slate-100 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                  >
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-center text-slate-600 text-sm">{row.traditional}</td>
                    <td className="p-4 text-center text-slate-600 text-sm">{row.diy}</td>
                    <td className={`p-4 text-center text-sm font-semibold ${row.winner === 'pacific' ? 'bg-sky-50 text-sky-900' : 'bg-sky-50/50 text-slate-700'}`}>
                      {row.pacificPulse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose Each Option */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            When to Choose Each Option
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Traditional Agency */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Traditional Agency</h3>
              <p className="text-slate-600 mb-6">
                Best for large enterprises with complex requirements and big budgets.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Budget: $50K+</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Timeline: 6-12 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Large team, enterprise needs</span>
                </li>
              </ul>
            </div>

            {/* DIY Tool */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">DIY Tool</h3>
              <p className="text-slate-600 mb-6">
                Best for side hustles, personal brands, or businesses just testing an idea.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Budget: Under $500</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Timeline: Same day</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Comfortable with templates</span>
                </li>
              </ul>
            </div>

            {/* Pacific Pulse */}
            <div className="p-8 bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl border-2 border-sky-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full">
                  Best Value
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pacific Pulse</h3>
              <p className="text-slate-600 mb-6">
                Best for service businesses ready to scale with AI automation and custom solutions.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Budget: $1.5K-10K setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Timeline: 2-6 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Want AI + custom + fast</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Unique Position */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Unique Position
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                90-Day ROI Guarantee
              </h3>
              <p className="text-slate-600">
                If you don't get at least 10 new bookings in your first 90 days, we'll refund your first three months. No other agency offers this guarantee.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                You Own Everything
              </h3>
              <p className="text-slate-600">
                All code, designs, and data are yours. Leave anytime with a full export. No vendor lock-in.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                AI-First Approach
              </h3>
              <p className="text-slate-600">
                While agencies add AI as an afterthought, we build AI automation into every project from day one.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Fast + Custom
              </h3>
              <p className="text-slate-600">
                Launch in 2-6 weeks with fully custom solutions. Not 6 months (agencies) or same-day templates (DIY tools).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Explore Solutions for Your Industry</h2>
            <p className="text-slate-600">See how we help specific businesses like yours</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/spa-booking-system" className="p-5 border border-slate-200 bg-white rounded-xl hover:border-teal-500 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-1 group-hover:text-teal-600 text-sm">Spas & Massage</h3>
              <p className="text-xs text-slate-600">24/7 booking automation</p>
            </Link>
            <Link href="/dental-practice-automation" className="p-5 border border-slate-200 bg-white rounded-xl hover:border-blue-500 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 text-sm">Dental Practices</h3>
              <p className="text-xs text-slate-600">HIPAA-compliant booking</p>
            </Link>
            <Link href="/law-firm-lead-generation" className="p-5 border border-slate-200 bg-white rounded-xl hover:border-slate-700 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-1 group-hover:text-slate-700 text-sm">Law Firms</h3>
              <p className="text-xs text-slate-600">AI client screening</p>
            </Link>
            <Link href="/fitness-studio-booking" className="p-5 border border-slate-200 bg-white rounded-xl hover:border-orange-500 hover:shadow-lg transition group">
              <h3 className="font-bold text-slate-900 mb-1 group-hover:text-orange-600 text-sm">Fitness Studios</h3>
              <p className="text-xs text-slate-600">Class scheduling</p>
            </Link>
          </div>
          <div className="text-center mt-6">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700">
              View All Pricing Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See If We're a Good Fit?
            </h2>
            <p className="text-sky-100 text-lg mb-8 max-w-xl mx-auto">
              Book a free 30-minute strategy call. We'll be honest about whether we can help your business.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg"
            >
              Get Your Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200">
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
