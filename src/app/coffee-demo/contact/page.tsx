"use client";

import { useState } from "react";
import Link from "next/link";

export default function CoffeeContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const subjects = [
    "General Inquiry",
    "Catering & Events",
    "Wholesale / Business",
    "Feedback",
    "Careers",
    "Press / Media",
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Message Sent!</h1>
          <p className="text-stone-600 mb-8">
            Thanks for reaching out. We&apos;ll get back to you within 24 hours. In the meantime, why not grab a cup of coffee?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/coffee-demo/menu"
              className="bg-amber-900 text-amber-50 px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition"
            >
              View Menu
            </Link>
            <Link
              href="/coffee-demo"
              className="bg-amber-100 text-amber-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-200 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-xl border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/coffee-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.525.713-2.863T6.7 8.65V6q0-.825.588-1.413Q7.875 4 8.7 4h6.6q.825 0 1.413.587Q17.3 5.175 17.3 6v2.65q1.275 1.15 1.988 2.487Q20 12.475 20 14v3H4zm2-2h12v-1q0-1.875-1.062-3.438Q15.875 9 14.1 8.2V6H9.9v2.2q-1.775.8-2.838 2.362Q6 12.125 6 14v1z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-amber-900">KONA BREW</span>
                <span className="text-xs text-amber-700 block -mt-1 tracking-widest">COFFEE CO.</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/coffee-demo" className="text-stone-600 font-medium hover:text-amber-900 transition">Home</Link>
              <Link href="/coffee-demo/menu" className="text-stone-600 font-medium hover:text-amber-900 transition">Menu</Link>
              <Link href="/coffee-demo/locations" className="text-stone-600 font-medium hover:text-amber-900 transition">Locations</Link>
              <Link href="/coffee-demo/about" className="text-stone-600 font-medium hover:text-amber-900 transition">Our Story</Link>
              <Link href="/coffee-demo/contact" className="text-amber-900 font-medium">Contact</Link>
            </div>

            <Link
              href="/coffee-demo/menu"
              className="bg-amber-900 text-amber-50 px-6 py-2.5 rounded-full font-semibold hover:bg-amber-800 transition"
            >
              Order Online
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-amber-100 to-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mt-2 mb-4">Contact Us</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Questions, feedback, or just want to chat about coffee? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
                <h2 className="text-2xl font-bold text-amber-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        placeholder="(808) 555-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                      >
                        <option value="">Select a topic</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                      className="rounded border-amber-300 text-amber-900 focus:ring-amber-400"
                    />
                    <span className="text-sm text-stone-600">
                      Sign me up for news, special offers, and free birthday coffee!
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-amber-900 text-amber-50 py-4 rounded-full font-bold text-lg hover:bg-amber-800 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
                <h3 className="text-lg font-bold text-amber-900 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Email</span>
                      <p className="text-amber-900 font-medium">hello@konabrew.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Phone</span>
                      <p className="text-amber-900 font-medium">(808) 555-BREW</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Response Time</span>
                      <p className="text-amber-900 font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8 pt-6 border-t border-amber-100">
                  <span className="text-stone-500 text-sm block mb-4">Follow Us</span>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 hover:bg-amber-200 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 hover:bg-amber-200 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 hover:bg-amber-200 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Rewards CTA */}
              <div className="bg-gradient-to-br from-amber-800 to-amber-950 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-amber-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Join Brew Crew</h3>
                <p className="text-amber-200 text-sm mb-6">
                  Free birthday coffee, exclusive deals, and points on every purchase.
                </p>
                <button className="w-full bg-amber-500 text-amber-950 py-3 rounded-full font-bold hover:bg-amber-400 transition">
                  Sign Up Free
                </button>
              </div>

              {/* Catering */}
              <div className="bg-amber-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-amber-900 mb-2">Need Catering?</h3>
                <p className="text-stone-600 text-sm mb-4">
                  We cater events of all sizes. Coffee bars, pastry platters, and full breakfast service available.
                </p>
                <Link
                  href="/coffee-demo/contact"
                  className="text-amber-900 font-semibold text-sm hover:text-amber-700 transition"
                >
                  Request a Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-amber-400/60 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.525.713-2.863T6.7 8.65V6q0-.825.588-1.413Q7.875 4 8.7 4h6.6q.825 0 1.413.587Q17.3 5.175 17.3 6v2.65q1.275 1.15 1.988 2.487Q20 12.475 20 14v3H4zm2-2h12v-1q0-1.875-1.062-3.438Q15.875 9 14.1 8.2V6H9.9v2.2q-1.775.8-2.838 2.362Q6 12.125 6 14v1z"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-amber-100">KONA BREW COFFEE CO.</span>
          </div>
          <p>&copy; 2026 Kona Brew Coffee Co. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
