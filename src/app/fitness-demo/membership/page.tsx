"use client";

import { useState } from "react";
import Link from "next/link";

export default function FitnessMembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState("unlimited");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const plans = [
    {
      id: "dropin",
      name: "Drop-In",
      price: "$25",
      period: "per class",
      description: "Perfect for visitors or trying us out",
      features: [
        "Single class access",
        "No commitment required",
        "Access to all class types",
        "Locker room access",
      ],
      notIncluded: ["Open gym access", "Guest passes", "Personal training"],
    },
    {
      id: "unlimited",
      name: "Unlimited",
      price: "$149",
      period: "per month",
      description: "Our most popular membership",
      features: [
        "Unlimited classes",
        "Open gym access",
        "1 guest pass per month",
        "Locker included",
        "Towel service",
        "Member events",
      ],
      notIncluded: ["Personal training sessions"],
      popular: true,
    },
    {
      id: "annual",
      name: "Annual Elite",
      price: "$99",
      period: "per month",
      description: "Best value for committed members",
      features: [
        "Everything in Unlimited",
        "2 PT sessions per month",
        "Priority class booking",
        "20% merchandise discount",
        "Free nutrition consultation",
        "Exclusive member lounges",
      ],
      notIncluded: [],
      savings: "Save $600/year",
    },
  ];

  const faqs = [
    {
      q: "Can I try before I commit?",
      a: "Absolutely! We offer a free 7-day trial for all new members. No credit card required to start.",
    },
    {
      q: "What if I need to cancel?",
      a: "Monthly memberships can be cancelled anytime with 30 days notice. Annual memberships can be transferred or frozen.",
    },
    {
      q: "Are there any hidden fees?",
      a: "No hidden fees. The price you see is what you pay. Optional add-ons like personal training are available.",
    },
    {
      q: "Can I freeze my membership?",
      a: "Yes! You can freeze your membership for up to 3 months per year for medical reasons or travel.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/fitness-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight">PACIFIC PULSE</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/fitness-demo" className="text-gray-400 font-medium hover:text-orange-500 transition">Home</Link>
              <Link href="/fitness-demo/classes" className="text-gray-400 font-medium hover:text-orange-500 transition">Classes</Link>
              <Link href="/fitness-demo/trainers" className="text-gray-400 font-medium hover:text-orange-500 transition">Trainers</Link>
              <Link href="/fitness-demo/membership" className="text-white font-medium">Membership</Link>
            </div>

            <a
              href="tel:808-555-PUMP"
              className="flex items-center gap-2 text-orange-500 font-bold"
            >
              (808) 555-PUMP
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span className="text-sm font-semibold text-orange-400">7-Day Free Trial - No Credit Card Required</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Membership
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join 2,500+ members transforming their lives. Start with a free trial and upgrade anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-b from-orange-500 to-red-600 ring-4 ring-orange-500 ring-offset-4 ring-offset-black scale-105"
                    : "bg-zinc-900 hover:bg-zinc-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                {plan.savings && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {plan.savings}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-orange-100" : "text-gray-400"}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={plan.popular ? "text-orange-100" : "text-gray-400"}>/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-white" : "text-orange-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.popular ? "text-white" : "text-gray-300"}>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 opacity-50">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 rounded-lg font-bold transition ${
                    plan.popular
                      ? "bg-white text-orange-600 hover:bg-gray-100"
                      : selectedPlan === plan.id
                      ? "bg-orange-500 text-white"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                >
                  {plan.id === "dropin" ? "Buy Class" : "Select Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-black mb-4">Welcome to the Family!</h2>
              <p className="text-gray-400 mb-8">
                Check your email for next steps. Your 7-day free trial starts now!
              </p>
              <Link
                href="/fitness-demo"
                className="inline-flex items-center gap-2 text-orange-500 font-bold"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black mb-4">Start Your Free Trial</h2>
                <p className="text-gray-400">
                  Selected plan: <span className="text-orange-500 font-bold">
                    {plans.find(p => p.id === selectedPlan)?.name}
                  </span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    placeholder="(808) 555-1234"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition"
                >
                  Start My Free 7-Day Trial
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  No credit card required. Cancel anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2026 Pacific Pulse Fitness. Demo by <Link href="/" className="text-orange-500 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
