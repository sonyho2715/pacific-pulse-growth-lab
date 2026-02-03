"use client";

import { useState } from "react";
import Link from "next/link";

export default function RealEstateContactPage() {
  const [formType, setFormType] = useState<"inquiry" | "valuation">("inquiry");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    budget: "",
    timeline: "",
    neighborhoods: "",
    message: "",
    // Valuation fields
    address: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    condition: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white text-slate-800">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/realestate-demo" className="flex items-center gap-2">
                <div className="text-2xl font-serif">
                  <span className="text-slate-800">MALIA</span>
                  <span className="text-amber-600">REALTY</span>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-serif text-slate-800 mb-4">
              {formType === "inquiry" ? "Thank You for Reaching Out" : "Valuation Request Received"}
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              {formType === "inquiry"
                ? "I've received your inquiry and will get back to you within 24 hours. In the meantime, feel free to browse my listings or explore neighborhoods."
                : "I've received your home valuation request. I'll analyze your property and prepare a comprehensive market analysis within 48 hours."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/realestate-demo/listings"
                className="bg-slate-800 text-white px-6 py-3 rounded font-medium hover:bg-slate-700 transition"
              >
                Browse Listings
              </Link>
              <Link
                href="/realestate-demo"
                className="border-2 border-slate-800 text-slate-800 px-6 py-3 rounded font-medium hover:bg-slate-800 hover:text-white transition"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/realestate-demo" className="flex items-center gap-2">
              <div className="text-2xl font-serif">
                <span className="text-slate-800">MALIA</span>
                <span className="text-amber-600">REALTY</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/realestate-demo" className="text-slate-500 font-medium hover:text-slate-800 transition">Home</Link>
              <Link href="/realestate-demo/listings" className="text-slate-500 font-medium hover:text-slate-800 transition">Listings</Link>
              <Link href="/realestate-demo/neighborhoods" className="text-slate-500 font-medium hover:text-slate-800 transition">Neighborhoods</Link>
              <Link href="/realestate-demo/about" className="text-slate-500 font-medium hover:text-slate-800 transition">About</Link>
              <Link href="/realestate-demo/contact" className="text-slate-800 font-medium">Contact</Link>
            </div>

            <Link
              href="/realestate-demo/contact"
              className="bg-slate-800 text-white px-6 py-2.5 rounded font-medium hover:bg-slate-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Get Started</span>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-800 mt-2 mb-4">Let&apos;s Connect</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Whether you're ready to buy, sell, or just have questions about the Oahu market, I'm here to help.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif text-slate-800 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <a href="tel:+18085551234" className="text-slate-600 hover:text-amber-600 transition">
                      (808) 555-1234
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Available 7 days a week, 8am-8pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <a href="mailto:malia@maliarealty.com" className="text-slate-600 hover:text-amber-600 transition">
                      malia@maliarealty.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Office</h3>
                    <p className="text-slate-600">
                      4211 Waialae Avenue, Suite 300<br />
                      Honolulu, HI 96816
                    </p>
                    <p className="text-sm text-slate-500 mt-1">By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-slate-50 rounded-lg">
                <h3 className="font-serif text-lg text-slate-800 mb-3">Prefer a Call?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Schedule a complimentary consultation to discuss your real estate goals.
                </p>
                <button className="w-full bg-slate-800 text-white py-3 rounded font-medium hover:bg-slate-700 transition">
                  Book a Phone Consultation
                </button>
              </div>

              <div className="mt-6 flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition">
                  <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition">
                  <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition">
                  <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {/* Form Type Toggle */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setFormType("inquiry")}
                  className={`flex-1 py-3 px-4 rounded font-medium transition ${
                    formType === "inquiry"
                      ? "bg-slate-800 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  General Inquiry
                </button>
                <button
                  onClick={() => setFormType("valuation")}
                  className={`flex-1 py-3 px-4 rounded font-medium transition ${
                    formType === "valuation"
                      ? "bg-slate-800 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Home Valuation
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {formType === "inquiry" ? (
                  <>
                    {/* Inquiry Form */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          placeholder="(808) 555-1234"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">I&apos;m Interested In *</label>
                        <select
                          required
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                        >
                          <option value="">Select one</option>
                          <option value="buying">Buying a Home</option>
                          <option value="selling">Selling a Home</option>
                          <option value="both">Buying and Selling</option>
                          <option value="investing">Investment Property</option>
                          <option value="other">Just Have Questions</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                        >
                          <option value="">Select range</option>
                          <option value="under-1m">Under $1 Million</option>
                          <option value="1m-2m">$1M - $2M</option>
                          <option value="2m-3m">$2M - $3M</option>
                          <option value="3m-5m">$3M - $5M</option>
                          <option value="5m-10m">$5M - $10M</option>
                          <option value="10m+">$10M+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-3months">1-3 Months</option>
                          <option value="3-6months">3-6 Months</option>
                          <option value="6-12months">6-12 Months</option>
                          <option value="exploring">Just Exploring</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Neighborhoods</label>
                      <input
                        type="text"
                        value={formData.neighborhoods}
                        onChange={(e) => setFormData({ ...formData, neighborhoods: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="e.g., Kahala, Kailua, Diamond Head"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Tell Me About Your Goals</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                        placeholder="Share any details about what you're looking for, your must-haves, or questions you have..."
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Valuation Form */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                      <h3 className="font-semibold text-amber-900 mb-1">Free Home Valuation</h3>
                      <p className="text-sm text-amber-800">
                        I&apos;ll prepare a comprehensive market analysis with comparable sales, market trends, and a suggested listing price.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Property Address *</label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="123 Main St, Honolulu, HI 96815"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Property Type *</label>
                        <select
                          required
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                        >
                          <option value="">Select type</option>
                          <option value="single-family">Single Family Home</option>
                          <option value="condo">Condo/Townhouse</option>
                          <option value="multi-family">Multi-Family</option>
                          <option value="land">Land</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Bedrooms</label>
                        <select
                          value={formData.bedrooms}
                          onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6+">6+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Bathrooms</label>
                        <select
                          value={formData.bathrooms}
                          onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5+">5+</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Approximate Sq Ft</label>
                        <input
                          type="text"
                          value={formData.sqft}
                          onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          placeholder="e.g., 2,500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Property Condition</label>
                        <select
                          value={formData.condition}
                          onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                        >
                          <option value="">Select condition</option>
                          <option value="excellent">Excellent / Renovated</option>
                          <option value="good">Good</option>
                          <option value="fair">Fair / Needs Updates</option>
                          <option value="poor">Poor / Fixer-Upper</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Reason for Valuation</label>
                      <select
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                      >
                        <option value="">Select reason</option>
                        <option value="selling-soon">Planning to Sell Soon</option>
                        <option value="considering">Considering Selling</option>
                        <option value="refinance">Refinancing</option>
                        <option value="curious">Just Curious</option>
                        <option value="estate">Estate Planning</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                        placeholder="Any renovations, special features, or other details about your property..."
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-slate-900 py-4 rounded font-semibold hover:bg-amber-400 transition"
                >
                  {formType === "inquiry" ? "Send Message" : "Request Free Valuation"}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting, you agree to receive communications from Malia Realty. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Service Area</span>
              <h2 className="text-3xl font-serif text-slate-800 mt-2 mb-4">Serving All of Oahu</h2>
              <p className="text-slate-600 mb-6">
                From the North Shore to Hawaii Kai, from the Windward side to the Leeward coast, I have extensive experience throughout Oahu. My specialties include:
              </p>
              <ul className="space-y-3">
                {["Kahala & Diamond Head", "Kailua & Lanikai", "Hawaii Kai & Portlock", "Waikiki & Ala Moana", "Honolulu Metro", "North Shore"].map((area, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-200 h-80 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-slate-500">Interactive map would display here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <div className="text-2xl font-serif mb-4">
            <span className="text-white">MALIA</span>
            <span className="text-amber-500">REALTY</span>
          </div>
          <p>&copy; 2026 Malia Realty. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
