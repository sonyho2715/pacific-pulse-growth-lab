'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, Sparkles, Loader2 } from 'lucide-react';
import { PLANS, getYearlySavingsPercent, type Plan, type PlanTier } from '@/lib/plans';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [loadingPlan, setLoadingPlan] = useState<PlanTier | null>(null);

  const handleCheckout = async (planId: PlanTier) => {
    // Enterprise goes to contact
    if (planId === 'enterprise') {
      window.location.href = '/contact?plan=enterprise';
      return;
    }

    setLoadingPlan(planId);
    try {
      const response = await fetch('/api/stripe/website-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: planId,
          billingCycle,
          includeSetupFee: true,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else if (data.error) {
        // Stripe not configured - fall back to contact
        console.warn('Checkout not available:', data.message);
        window.location.href = `/contact?plan=${planId}&billing=${billingCycle}`;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      window.location.href = `/contact?plan=${planId}&billing=${billingCycle}`;
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto px-4">
          Choose the plan that fits your business. All plans include hosting, SSL, and ongoing support.
        </p>

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
            <span className="ml-1.5 text-xs text-green-600 font-semibold">Save 20%</span>
          </span>
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
              isLoading={loadingPlan === plan.id}
              onCheckout={() => handleCheckout(plan.id)}
            />
          ))}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <FeatureComparison />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-slate-300 mb-8">
            Schedule a free consultation and we&apos;ll help you choose the perfect plan for your business.
          </p>
          <Link
            href="/contact?source=pricing"
            className="inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  billingCycle,
  isLoading,
  onCheckout
}: {
  plan: Plan;
  billingCycle: 'monthly' | 'yearly';
  isLoading: boolean;
  onCheckout: () => void;
}) {
  const price = billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly;
  const savings = getYearlySavingsPercent(plan);

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

      <div className="text-center mb-6">
        <h3 className={`text-xl font-bold mb-1 ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>
          {plan.name}
        </h3>
        <p className={`text-sm ${plan.recommended ? 'text-sky-100' : 'text-slate-500'}`}>
          {plan.tagline}
        </p>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-4xl font-bold ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>
            ${price}
          </span>
          <span className={`text-sm ${plan.recommended ? 'text-sky-100' : 'text-slate-500'}`}>
            /month
          </span>
        </div>
        {billingCycle === 'yearly' && (
          <p className={`text-xs mt-1 ${plan.recommended ? 'text-sky-100' : 'text-green-600'}`}>
            Save {savings}% with yearly billing
          </p>
        )}
        <p className={`text-xs mt-2 ${plan.recommended ? 'text-sky-100' : 'text-slate-500'}`}>
          + ${plan.price.setup} one-time setup
        </p>
      </div>

      <button
        onClick={onCheckout}
        disabled={isLoading}
        className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${
          plan.recommended
            ? 'bg-white text-sky-600 hover:bg-sky-50'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </span>
        ) : (
          plan.cta
        )}
      </button>

      <div className="mt-6 space-y-3">
        <p className={`text-xs font-semibold uppercase tracking-wide ${plan.recommended ? 'text-sky-100' : 'text-slate-400'}`}>
          What&apos;s included:
        </p>
        {plan.features.website.slice(0, 6).map((feature) => (
          <div key={feature.name} className="flex items-start gap-2">
            {feature.included ? (
              <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.recommended ? 'text-sky-100' : 'text-green-500'}`} />
            ) : (
              <X className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.recommended ? 'text-sky-200' : 'text-slate-300'}`} />
            )}
            <span className={`text-sm ${
              feature.included
                ? plan.recommended ? 'text-white' : 'text-slate-700'
                : plan.recommended ? 'text-sky-200' : 'text-slate-400'
            }`}>
              {feature.name}
              {feature.description && feature.included && (
                <span className={`ml-1 ${plan.recommended ? 'text-sky-100' : 'text-slate-500'}`}>
                  ({feature.description})
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
  const categories = [
    { key: 'website', label: 'Website Features' },
    { key: 'marketing', label: 'Marketing & Email' },
    { key: 'support', label: 'Support' },
    { key: 'integrations', label: 'Integrations' },
  ] as const;

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Compare All Features
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-6 font-semibold text-slate-900">Features</th>
                {PLANS.map((plan) => (
                  <th key={plan.id} className="text-center py-4 px-4">
                    <span className={`font-semibold ${plan.recommended ? 'text-sky-600' : 'text-slate-900'}`}>
                      {plan.name}
                    </span>
                    <div className="text-sm text-slate-500">${plan.price.monthly}/mo</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <>
                  <tr key={category.key} className="bg-slate-50">
                    <td colSpan={5} className="py-3 px-6 font-semibold text-slate-700 text-sm uppercase tracking-wide">
                      {category.label}
                    </td>
                  </tr>
                  {PLANS[0].features[category.key].map((feature, idx) => (
                    <tr key={`${category.key}-${idx}`} className="border-t border-slate-100">
                      <td className="py-3 px-6 text-slate-700">{feature.name}</td>
                      {PLANS.map((plan) => {
                        const planFeature = plan.features[category.key].find(f => f.name === feature.name);
                        return (
                          <td key={plan.id} className="text-center py-3 px-4">
                            {planFeature?.included ? (
                              planFeature.limit || planFeature.description ? (
                                <span className="text-sm text-slate-700">
                                  {planFeature.limit || planFeature.description}
                                </span>
                              ) : (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              )
                            ) : (
                              <X className="w-5 h-5 text-slate-300 mx-auto" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: 'What happens after I sign up?',
      answer: 'After signing up, you will receive a welcome email with next steps. We will schedule a kickoff call to discuss your business needs, gather content, and begin the design process. Most websites launch within 2-3 weeks.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle. We will prorate any differences.',
    },
    {
      question: 'What is included in the setup fee?',
      answer: 'The setup fee covers initial website design, content migration, domain configuration, email setup, and launch support. It is a one-time fee that ensures your site is professionally configured.',
    },
    {
      question: 'Do I own my website?',
      answer: 'Yes, you own all your content, design assets, and data. If you ever decide to leave, we will provide a full export of your website and help with the transition.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards through Stripe. For Enterprise plans, we also offer invoice billing with NET-30 terms.',
    },
    {
      question: 'Is there a contract or commitment?',
      answer: 'Monthly plans can be cancelled anytime with 30 days notice. Yearly plans are billed annually and offer significant savings. There are no long-term contracts.',
    },
  ];

  return (
    <div className="py-16">
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
