'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Check, X, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { PLANS, getMonthlyPrice, getYearlySavingsPercent, getTotalFirstYear, type Plan, type PlanTier } from '@/lib/plans';
import { ROICalculator } from '@/components/ROICalculator';

// FAQ Schema for SEO featured snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does the monthly retainer cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your monthly retainer is an all-inclusive package covering website hosting, SSL certificate, ongoing maintenance, content updates, security patches, analytics, and support. Everything you need for a complete digital presence with predictable monthly costs."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a setup fee or contract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No setup fees or long-term contracts. You pay only the monthly retainer, and you can cancel with 30 days notice. Yearly plans are billed annually and offer ~17% savings."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Starter plans typically launch in 2-3 weeks. Growth and Scale projects take 4-6 weeks. Full-Service is scoped individually. We provide a detailed timeline during your free strategy call."
      }
    },
    {
      "@type": "Question",
      "name": "Do I own my website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you own all your content, design assets, and data. If you ever leave, we provide a full export of everything."
      }
    }
  ]
};

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#work" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Work</Link>
              <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Services</Link>
              <Link href="/pricing" className="text-sm font-medium text-sky-600">Pricing</Link>
              <Link href="/comparison" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Compare</Link>
              <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Blog</Link>
              <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Contact</Link>
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

      {/* Header */}
      <div className="pt-16 pb-8 text-center px-4">
        {/* Anchor Pricing */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
          <Check className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-medium text-emerald-800">Save $10K+ compared to traditional agencies</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Predictable monthly retainer. All-inclusive packages with hosting, maintenance, support, and ongoing updates.
        </p>

        {/* ROI Guarantee */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl max-w-2xl mx-auto">
          <p className="text-amber-900 font-semibold">
            90-Day ROI Guarantee
          </p>
          <p className="text-amber-800 text-sm mt-1">
            If you don&apos;t get at least 10 new bookings in your first 90 days, we&apos;ll refund your first three months. No questions asked.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              billingCycle === 'yearly' ? 'bg-sky-500' : 'bg-slate-300'
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-7' : ''
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
            Yearly
            <span className="ml-1.5 text-xs text-emerald-600 font-semibold">Save ~17%</span>
          </span>
        </div>
      </div>

      {/* ROI Calculator Teaser */}
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <div className="text-center text-slate-600 text-sm">
          <span className="font-medium">See your ROI:</span> Use our calculator below to see how quickly each plan pays for itself based on your business metrics.
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </div>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* What's Included Section */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Every plan includes
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            No hidden fees. Your monthly covers everything you need to stay online and growing.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Hosting', description: 'Fast, reliable hosting on Vercel with 99.9% uptime' },
              { title: 'SSL Certificate', description: 'Secure HTTPS for your site, included free' },
              { title: 'Analytics', description: 'See how visitors use your site with built-in tracking' },
              { title: 'Support', description: 'Email support with guaranteed response times' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <FeatureComparison />

      {/* FAQ Section */}
      <FAQ />

      {/* Trust & Guarantee Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">90-Day ROI Guarantee</h3>
              <p className="text-sm text-slate-600">10+ new bookings or your first 3 months refunded</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">No Long-Term Contracts</h3>
              <p className="text-sm text-slate-600">Cancel monthly plans anytime with 30 days notice</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">You Own Everything</h3>
              <p className="text-sm text-slate-600">Full ownership of design, code, and content</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-sm font-medium text-white">Only 3 spots left for February</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-sky-100 mb-8">
            Schedule a free 30-minute consultation. We&apos;ll audit your current setup and recommend the best path forward.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg"
          >
            Get Your Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-sky-200 text-sm mt-4">No obligation. We&apos;ll tell you honestly if we&apos;re a good fit.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>&copy; 2026 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function PricingCard({
  plan,
  billingCycle,
}: {
  plan: Plan;
  billingCycle: 'monthly' | 'yearly';
}) {
  const monthlyPrice = getMonthlyPrice(plan, billingCycle);
  const savings = getYearlySavingsPercent(plan);
  const firstYearTotal = getTotalFirstYear(plan, billingCycle);

  return (
    <div
      className={`relative rounded-2xl p-6 ${
        plan.recommended
          ? 'bg-sky-500 text-white ring-4 ring-sky-500 ring-offset-2'
          : 'bg-white border border-slate-200'
      }`}
    >
      {plan.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
            <Sparkles className="w-3 h-3" />
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-1 ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>
          {plan.name}
        </h3>
        <p className={`text-sm ${plan.recommended ? 'text-sky-100' : 'text-slate-500'}`}>
          {plan.tagline}
        </p>
      </div>

      {/* Monthly Retainer */}
      <div className="mb-6 pb-6 border-b border-dashed ${plan.recommended ? 'border-sky-400' : 'border-slate-200'}">
        <div className={`text-xs uppercase tracking-wide mb-1 ${plan.recommended ? 'text-sky-200' : 'text-slate-400'}`}>
          Monthly retainer
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>
            ${monthlyPrice}
          </span>
          <span className={`text-sm ${plan.recommended ? 'text-sky-100' : 'text-slate-500'}`}>
            /month
          </span>
        </div>
        {billingCycle === 'yearly' && (
          <p className={`text-xs mt-1 ${plan.recommended ? 'text-sky-100' : 'text-emerald-600'}`}>
            Save {savings}% with yearly billing
          </p>
        )}
      </div>

      {/* First Year Total */}
      <div className={`text-xs mb-6 ${plan.recommended ? 'text-sky-100' : 'text-slate-500'}`}>
        First year total: <span className="font-semibold">${firstYearTotal.toLocaleString()}</span>
      </div>

      <Link
        href={`/apply?plan=${plan.id}`}
        className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
          plan.recommended
            ? 'bg-white text-sky-600 hover:bg-sky-50'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        {plan.cta}
      </Link>

      <div className="mt-6 space-y-3">
        <p className={`text-xs font-semibold uppercase tracking-wide ${plan.recommended ? 'text-sky-100' : 'text-slate-400'}`}>
          Key features:
        </p>
        {[
          plan.features.website.find(f => f.name === 'Custom Website'),
          plan.features.website.find(f => f.name === 'Booking System'),
          plan.features.automation.find(f => f.name === 'AI Chatbot'),
          plan.features.automation.find(f => f.name === 'Email Marketing'),
          plan.features.support.find(f => f.name === 'Content Updates'),
        ].filter(Boolean).map((feature) => (
          <div key={feature!.name} className="flex items-start gap-2">
            {feature!.included ? (
              <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.recommended ? 'text-sky-100' : 'text-emerald-500'}`} />
            ) : (
              <X className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.recommended ? 'text-sky-200' : 'text-slate-300'}`} />
            )}
            <span className={`text-sm ${
              feature!.included
                ? plan.recommended ? 'text-white' : 'text-slate-700'
                : plan.recommended ? 'text-sky-200' : 'text-slate-400'
            }`}>
              {feature!.name}
              {feature!.included && feature!.description && (
                <span className={`ml-1 ${plan.recommended ? 'text-sky-100' : 'text-slate-500'}`}>
                  ({feature!.description})
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureComparison() {
  const featureData = [
    {
      category: 'WEBSITE FEATURES',
      features: [
        { name: 'Custom Website Design', starter: true, growth: true, scale: true, fullService: true },
        { name: 'Mobile Responsive', starter: true, growth: true, scale: true, fullService: true },
        { name: 'SSL Certificate & Security', starter: true, growth: true, scale: true, fullService: true },
        { name: 'Website Hosting (Vercel)', starter: true, growth: true, scale: true, fullService: true },
        { name: 'Monthly Maintenance & Updates', starter: true, growth: true, scale: true, fullService: true },
        { name: 'SEO Optimization', starter: 'Basic', growth: 'Advanced', scale: 'Advanced', fullService: 'Advanced' },
        { name: 'Google Analytics', starter: 'Basic', growth: 'Advanced', scale: 'Advanced', fullService: 'Advanced' },
        { name: 'Blog/Content Management', starter: false, growth: true, scale: true, fullService: true },
        { name: 'Booking System', starter: false, growth: 'Basic', scale: 'Advanced', fullService: 'Advanced' },
        { name: 'E-commerce/Online Store', starter: false, growth: false, scale: true, fullService: true },
        { name: 'Performance Optimization', starter: false, growth: true, scale: true, fullService: true },
        { name: 'A/B Testing & Optimization', starter: false, growth: false, scale: true, fullService: true },
        { name: 'Conversion Rate Optimization', starter: false, growth: false, scale: true, fullService: true },
        { name: 'Custom Integrations', starter: false, growth: false, scale: false, fullService: true },
        { name: 'Priority Development Queue', starter: false, growth: false, scale: false, fullService: true },
      ],
    },
    {
      category: 'AUTOMATION & AI',
      features: [
        { name: 'AI Chatbot (Claude AI)', starter: false, growth: false, scale: 'Add $500/mo', fullService: 'Included' },
        { name: 'Email Marketing', starter: false, growth: '2,500 contacts', scale: '10,000 contacts', fullService: 'Unlimited' },
        { name: 'Social Media Posting', starter: false, growth: '3x/week', scale: '5x/week', fullService: 'Daily' },
        { name: 'Marketing Automation Workflows', starter: false, growth: false, scale: true, fullService: true },
        { name: 'Automated Booking Notifications', starter: false, growth: true, scale: true, fullService: true },
        { name: 'Paid Ads Management', starter: false, growth: false, scale: false, fullService: true },
        { name: 'Lead Capture & CRM Integration', starter: false, growth: 'Basic', scale: 'Advanced', fullService: 'Advanced' },
      ],
    },
    {
      category: 'SUPPORT & UPDATES',
      features: [
        { name: 'Email Support', starter: '48hr response', growth: '24hr response', scale: '12hr response', fullService: '4hr response' },
        { name: 'Phone Support', starter: false, growth: false, scale: true, fullService: 'Direct line' },
        { name: 'Content Updates', starter: '2/month', growth: '5/month', scale: 'Unlimited', fullService: 'Unlimited' },
        { name: 'Strategy Calls', starter: false, growth: 'Monthly', scale: 'Bi-weekly', fullService: 'Weekly' },
        { name: 'Dedicated Account Manager', starter: false, growth: false, scale: false, fullService: true },
        { name: 'Quarterly Business Reviews', starter: false, growth: false, scale: false, fullService: true },
        { name: 'Training & Onboarding', starter: 'Self-service', growth: 'Guided', scale: 'White glove', fullService: 'White glove' },
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
          Compare All Features
        </h2>
        <p className="text-center text-slate-600 mb-8">
          All plans include hosting, SSL, backups, and security. Need something custom? <Link href="/contact" className="text-sky-600 hover:text-sky-700 font-semibold">Contact us for personalization.</Link>
        </p>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-6 font-semibold text-slate-900 sticky left-0 bg-white z-10">Features</th>
                <th className="text-center py-4 px-4">
                  <span className="font-semibold text-slate-900">Starter</span>
                  <div className="text-sm text-slate-500">$1,500/mo</div>
                </th>
                <th className="text-center py-4 px-4 bg-sky-50">
                  <span className="font-semibold text-sky-600">Growth</span>
                  <div className="text-sm text-sky-600 font-medium">$2,500/mo</div>
                  <div className="text-xs text-sky-600 mt-1">⭐ Recommended</div>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="font-semibold text-slate-900">Scale</span>
                  <div className="text-sm text-slate-500">$3,500/mo</div>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="font-semibold text-slate-900">Full-Service</span>
                  <div className="text-sm text-slate-500">$5,000/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {featureData.map((section) => (
                <>
                  <tr key={section.category} className="bg-slate-50">
                    <td colSpan={5} className="py-3 px-6 font-semibold text-slate-700 text-sm uppercase tracking-wide">
                      {section.category}
                    </td>
                  </tr>
                  {section.features.map((feature, idx) => (
                    <tr key={`${section.category}-${idx}`} className="border-t border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-6 text-slate-700 sticky left-0 bg-white">{feature.name}</td>
                      <td className="text-center py-3 px-4">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-slate-700">{feature.starter}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4 bg-sky-50/50">
                        {typeof feature.growth === 'boolean' ? (
                          feature.growth ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium text-slate-700">{feature.growth}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {typeof feature.scale === 'boolean' ? (
                          feature.scale ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-slate-700">{feature.scale}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {typeof feature.fullService === 'boolean' ? (
                          feature.fullService ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-slate-700">{feature.fullService}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
              {/* One-Time Service Option */}
              <tr className="bg-amber-50 border-t-2 border-amber-200">
                <td className="py-4 px-6 font-semibold text-slate-900 sticky left-0 bg-amber-50">
                  One-Time Service
                  <div className="text-xs font-normal text-slate-600 mt-1">No monthly commitment required</div>
                </td>
                <td colSpan={4} className="text-center py-4 px-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold">
                    Contact for custom quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="text-xs text-slate-600 mt-1">Website builds, migrations, or specific projects</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Not sure which plan fits your needs? We'll help you choose the right solution.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition shadow-lg"
          >
            Get Your Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: 'What does the monthly retainer cover?',
      answer: 'Your monthly retainer is an all-inclusive package covering website hosting, SSL certificate, ongoing maintenance, content updates, security patches, analytics, and support. Everything you need for a complete digital presence with predictable monthly costs.',
    },
    {
      question: 'Is there a setup fee or contract?',
      answer: 'No setup fees or long-term contracts. You pay only the monthly retainer, and you can cancel with 30 days notice. Yearly plans are billed annually and offer ~17% savings.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes! You can upgrade anytime and we will adjust your retainer for the new service level. Downgrades take effect at your next billing cycle. We make plan changes simple and transparent.',
    },
    {
      question: 'How long does it take to get started?',
      answer: 'Starter plans typically launch in 2-3 weeks. Growth and Scale projects take 4-6 weeks. Full-Service is scoped individually. We provide a detailed timeline during your free strategy call.',
    },
    {
      question: 'What if I want to cancel?',
      answer: 'Monthly plans can be cancelled anytime with 30 days notice. Yearly plans are billed annually. If you cancel, we will help you export your content and transition to another provider.',
    },
    {
      question: 'Do I own my website?',
      answer: 'Yes, you own all your content, design assets, and data. If you ever leave, we provide a full export of everything.',
    },
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
