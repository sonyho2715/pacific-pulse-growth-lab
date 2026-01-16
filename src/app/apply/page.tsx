'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check, Zap, ArrowRight, ArrowLeft, Building2, User, Phone, Mail, Calendar, Sparkles } from 'lucide-react';
import { PLANS, getMonthlyPrice, getTotalFirstYear, type PlanTier } from '@/lib/plans';

type Step = 1 | 2 | 3 | 4;

// Wrapper component to handle Suspense boundary for useSearchParams
export default function ApplyPage() {
  return (
    <Suspense fallback={<ApplyPageLoading />}>
      <ApplyPageContent />
    </Suspense>
  );
}

function ApplyPageLoading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-600">Loading...</p>
      </div>
    </div>
  );
}

function ApplyPageContent() {
  const searchParams = useSearchParams();
  const preselectedPlan = searchParams.get('plan') as PlanTier | null;

  const [currentStep, setCurrentStep] = useState<Step>(preselectedPlan ? 2 : 1);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [formData, setFormData] = useState({
    selectedPlan: preselectedPlan || '',
    businessName: '',
    yourName: '',
    phone: '',
    email: '',
    businessType: '',
    website: '',
    projectGoals: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const selectedPlanData = PLANS.find(p => p.id === formData.selectedPlan);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((currentStep + 1) as Step);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((currentStep - 1) as Step);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          billingCycle,
          planDetails: selectedPlanData ? {
            name: selectedPlanData.name,
            projectFee: selectedPlanData.price.project,
            monthlyFee: getMonthlyPrice(selectedPlanData, billingCycle),
            firstYearTotal: getTotalFirstYear(selectedPlanData, billingCycle),
          } : null,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setCurrentStep(4);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">Pacific Pulse</span>
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Start Your Project
          </h1>
          <p className="text-lg text-sky-100">
            Tell us about your business and we&apos;ll create a custom solution
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      {currentStep < 4 && (
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              {[
                { step: 1, label: 'Choose Plan' },
                { step: 2, label: 'Your Business' },
                { step: 3, label: 'Review' },
              ].map((item, idx) => (
                <div key={item.step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                        currentStep >= item.step
                          ? 'bg-sky-500 text-white'
                          : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      {currentStep > item.step ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        item.step
                      )}
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium ${
                        currentStep >= item.step ? 'text-sky-600' : 'text-slate-400'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div
                      className={`flex-1 h-1 mx-4 rounded ${
                        currentStep > item.step ? 'bg-sky-500' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Step 1: Plan Selection */}
        {currentStep === 1 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Choose Your Package
              </h2>
              <p className="text-slate-600">
                Select the plan that best fits your business needs
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
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

            <div className="grid md:grid-cols-2 gap-4">
              {PLANS.filter(p => p.id !== 'enterprise').map((plan) => {
                const monthlyPrice = getMonthlyPrice(plan, billingCycle);
                const isSelected = formData.selectedPlan === plan.id;

                return (
                  <button
                    key={plan.id}
                    onClick={() => setFormData({ ...formData, selectedPlan: plan.id })}
                    className={`relative p-6 rounded-xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50 ring-2 ring-sky-500 ring-offset-2'
                        : 'border-slate-200 hover:border-sky-300 bg-white'
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                          <Sparkles className="w-3 h-3" />
                          POPULAR
                        </span>
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                        <p className="text-sm text-slate-500">{plan.tagline}</p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-sky-500 bg-sky-500' : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                        Project Fee
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        ${plan.price.project.toLocaleString()}
                      </div>
                    </div>

                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                        Monthly
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-slate-900">${monthlyPrice}</span>
                        <span className="text-sm text-slate-500">/month</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        plan.features.website.find(f => f.name === 'Custom Website'),
                        plan.features.website.find(f => f.name === 'Booking System'),
                        plan.features.automation.find(f => f.name === 'AI Chatbot'),
                      ].filter(Boolean).slice(0, 3).map((feature) => (
                        <div key={feature!.name} className="flex items-center gap-2 text-sm">
                          {feature!.included ? (
                            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-slate-200 flex-shrink-0" />
                          )}
                          <span className={feature!.included ? 'text-slate-700' : 'text-slate-400'}>
                            {feature!.name}
                            {feature!.included && feature!.description && (
                              <span className="text-slate-500 ml-1">({feature!.description})</span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Enterprise Option */}
            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
              <p className="text-sm text-slate-600">
                Need a custom solution?{' '}
                <Link href="/contact?plan=enterprise" className="text-sky-600 font-semibold hover:underline">
                  Contact us for Enterprise pricing
                </Link>
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                disabled={!formData.selectedPlan}
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Business Information */}
        {currentStep === 2 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Tell Us About Your Business
              </h2>
              <p className="text-slate-600">
                We&apos;ll use this to customize your solution
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Building2 className="w-4 h-4 inline mr-2" />
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Your Business Name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.yourName}
                    onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(808) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@business.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition bg-white"
                  >
                    <option value="">Select business type</option>
                    <option value="restaurant-cafe">Restaurant / Cafe</option>
                    <option value="spa-wellness">Spa / Wellness</option>
                    <option value="salon-beauty">Salon / Beauty</option>
                    <option value="auto-services">Auto Services</option>
                    <option value="professional-services">Professional Services</option>
                    <option value="retail">Retail / E-commerce</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourbusiness.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What are your main goals for this project? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.projectGoals}
                    onChange={(e) => setFormData({ ...formData, projectGoals: e.target.value })}
                    placeholder="e.g., Get more online bookings, showcase our menu, capture leads..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition resize-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    When would you like to launch? *
                  </label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (within 2-3 weeks)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible / Not sure</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-6 py-3 text-slate-600 font-semibold hover:text-slate-900 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={
                  !formData.businessName ||
                  !formData.yourName ||
                  !formData.phone ||
                  !formData.email ||
                  !formData.businessType ||
                  !formData.projectGoals ||
                  !formData.timeline
                }
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Review Application
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {currentStep === 3 && selectedPlanData && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Review Your Application
              </h2>
              <p className="text-slate-600">
                Please confirm everything looks correct
              </p>
            </div>

            <div className="space-y-6">
              {/* Plan Summary */}
              <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-xl border border-sky-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Selected Plan</h3>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-2xl font-bold text-sky-600">{selectedPlanData.name}</p>
                    <p className="text-slate-600">{selectedPlanData.tagline}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">Project Fee</div>
                    <div className="text-2xl font-bold text-slate-900">
                      ${selectedPlanData.price.project.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-500 mt-2">
                      + ${getMonthlyPrice(selectedPlanData, billingCycle)}/month
                      {billingCycle === 'yearly' && ' (yearly billing)'}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-sky-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">First year total:</span>
                    <span className="font-bold text-slate-900">
                      ${getTotalFirstYear(selectedPlanData, billingCycle).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Business Info Summary */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Business Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Business Name:</span>
                    <p className="font-medium text-slate-900">{formData.businessName}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Contact:</span>
                    <p className="font-medium text-slate-900">{formData.yourName}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Email:</span>
                    <p className="font-medium text-slate-900">{formData.email}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Phone:</span>
                    <p className="font-medium text-slate-900">{formData.phone}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Business Type:</span>
                    <p className="font-medium text-slate-900 capitalize">{formData.businessType.replace('-', ' ')}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Timeline:</span>
                    <p className="font-medium text-slate-900 capitalize">{formData.timeline.replace('-', ' ')}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-slate-500">Project Goals:</span>
                    <p className="font-medium text-slate-900">{formData.projectGoals}</p>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold">1</span>
                    <span>We&apos;ll review your application within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                    <span>Schedule a free discovery call to discuss your project in detail</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold">3</span>
                    <span>Receive a custom proposal with timeline and deliverables</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold">4</span>
                    <span>Begin your project once you approve the proposal</span>
                  </li>
                </ol>
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  Something went wrong. Please try again or email{' '}
                  <a href="mailto:sony@pacificpulseai.com" className="font-semibold underline">
                    sony@pacificpulseai.com
                  </a>{' '}
                  directly.
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-6 py-3 text-slate-600 font-semibold hover:text-slate-900 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {currentStep === 4 && submitStatus === 'success' && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Application Received!
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
              Thank you, {formData.yourName}! We&apos;ve received your application and will be in touch within 24 hours.
            </p>

            <div className="bg-sky-50 rounded-xl border border-sky-200 p-6 mb-8 max-w-md mx-auto text-left">
              <h3 className="font-bold text-slate-900 mb-3">What to expect:</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  Confirmation email sent to {formData.email}
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  Personal call from Sony within 24 hours
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  Custom proposal after discovery call
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition"
              >
                Return to Homepage
              </Link>
              <p className="text-sm text-slate-500">
                Questions? Email{' '}
                <a href="mailto:sony@pacificpulseai.com" className="text-sky-600 hover:underline">
                  sony@pacificpulseai.com
                </a>
              </p>
            </div>
          </div>
        )}
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
