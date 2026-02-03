"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WeddingContactPage() {
  const [formData, setFormData] = useState({
    partnerOne: "",
    partnerTwo: "",
    email: "",
    phone: "",
    weddingDate: "",
    flexible: false,
    guestCount: "",
    venue: "",
    budget: "",
    package: "",
    referral: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const budgetOptions = [
    "Under $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $200,000",
    "$200,000+",
    "Not sure yet",
  ];

  const packageOptions = [
    "Full Planning & Design",
    "Partial Planning",
    "Day-of Coordination",
    "Not sure - help me decide",
  ];

  const referralOptions = [
    "Google Search",
    "Instagram",
    "Pinterest",
    "The Knot",
    "Wedding Wire",
    "Venue Referral",
    "Friend/Family",
    "Other",
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif mb-4">We&apos;re So Excited!</h1>
          <p className="text-stone-600 mb-6">
            Thank you for reaching out. We&apos;ll review your inquiry and get back to you within 24-48 hours to schedule your complimentary consultation.
          </p>
          <p className="text-stone-500 text-sm mb-8">
            In the meantime, feel free to browse our portfolio for more inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wedding-demo/portfolio"
              className="bg-rose-400 text-white px-6 py-3 rounded-full font-medium hover:bg-rose-500 transition"
            >
              View Portfolio
            </Link>
            <Link
              href="/wedding-demo"
              className="bg-stone-100 text-stone-800 px-6 py-3 rounded-full font-medium hover:bg-stone-200 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/wedding-demo" className="flex items-center gap-2">
              <span className="text-2xl font-serif italic text-stone-800">Aloha</span>
              <span className="text-2xl font-serif text-rose-400">Weddings</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/wedding-demo" className="text-stone-600 font-medium hover:text-rose-400 transition">Home</Link>
              <Link href="/wedding-demo/services" className="text-stone-600 font-medium hover:text-rose-400 transition">Services</Link>
              <Link href="/wedding-demo/portfolio" className="text-stone-600 font-medium hover:text-rose-400 transition">Portfolio</Link>
              <Link href="/wedding-demo/about" className="text-stone-600 font-medium hover:text-rose-400 transition">About</Link>
              <Link href="/wedding-demo/contact" className="text-rose-400 font-medium">Contact</Link>
            </div>

            <Link
              href="/wedding-demo/contact"
              className="bg-rose-400 text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-500 transition"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-rose-50 to-[#faf9f7]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Let&apos;s Connect</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-2 mb-6">Start Your Journey</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Tell us about your dream wedding and we&apos;ll schedule a complimentary consultation to discuss how we can make it a reality.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-serif mb-6">Wedding Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Couple Names */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Partner One Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.partnerOne}
                        onChange={(e) => setFormData({ ...formData, partnerOne: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                        placeholder="First & Last Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Partner Two Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.partnerTwo}
                        onChange={(e) => setFormData({ ...formData, partnerTwo: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                        placeholder="First & Last Name"
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Wedding Date */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                    />
                    <label className="flex items-center gap-2 mt-2">
                      <input
                        type="checkbox"
                        checked={formData.flexible}
                        onChange={(e) => setFormData({ ...formData, flexible: e.target.checked })}
                        className="rounded border-stone-300 text-rose-400 focus:ring-rose-400"
                      />
                      <span className="text-sm text-stone-600">Date is flexible</span>
                    </label>
                  </div>

                  {/* Guest Count & Venue */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Estimated Guest Count
                      </label>
                      <input
                        type="text"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                        placeholder="e.g., 100-150"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Venue (if selected)
                      </label>
                      <input
                        type="text"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                        placeholder="Venue name or 'Need help'"
                      />
                    </div>
                  </div>

                  {/* Budget & Package */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Package Interest
                      </label>
                      <select
                        value={formData.package}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                      >
                        <option value="">Select package</option>
                        {packageOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      value={formData.referral}
                      onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                    >
                      <option value="">Select option</option>
                      {referralOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Tell Us About Your Vision *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition resize-none"
                      placeholder="Share your wedding dreams, style inspirations, any special requests, or questions you have for us..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-rose-400 text-white py-4 rounded-full font-medium text-lg hover:bg-rose-500 transition"
                  >
                    Send Inquiry
                  </button>

                  <p className="text-center text-stone-500 text-sm">
                    We typically respond within 24-48 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-serif text-xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Email</span>
                      <p className="text-stone-800">hello@alohaweddings.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Phone</span>
                      <p className="text-stone-800">(808) 555-LOVE</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Studio</span>
                      <p className="text-stone-800">123 Romance Lane</p>
                      <p className="text-stone-800">Honolulu, HI 96815</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-stone-100">
                  <span className="text-stone-500 text-sm block mb-4">Follow Our Work</span>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-rose-100 hover:text-rose-400 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-rose-100 hover:text-rose-400 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-rose-100 hover:text-rose-400 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-rose-50 rounded-2xl p-8">
                <h3 className="font-serif text-xl mb-4">Quick Answers</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-stone-800">How soon should I inquire?</p>
                    <p className="text-stone-600">12-18 months for full planning, 6-9 months for coordination.</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Is the consultation free?</p>
                    <p className="text-stone-600">Yes! We offer a complimentary 30-minute call.</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Do you travel?</p>
                    <p className="text-stone-600">We specialize in Hawaii but can travel for destination weddings.</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop"
                  alt="Wedding flowers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-stone-500 text-sm">
          <div className="mb-4">
            <span className="text-xl font-serif italic text-white">Aloha</span>
            <span className="text-xl font-serif text-rose-400"> Weddings</span>
          </div>
          <p>&copy; 2026 Aloha Weddings. Demo by <Link href="/" className="text-rose-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
