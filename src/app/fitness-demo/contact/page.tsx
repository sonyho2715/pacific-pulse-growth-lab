"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FitnessContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
              <Link href="/fitness-demo/membership" className="text-gray-400 font-medium hover:text-orange-500 transition">Membership</Link>
            </div>

            <Link
              href="/fitness-demo/membership"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/25 transition"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Questions about membership, classes, or personal training? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-zinc-900 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="bg-zinc-900 rounded-2xl p-8">
                  <h2 className="text-2xl font-black mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                          placeholder="(808) 555-1234"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                        >
                          <option value="">Select topic...</option>
                          <option value="membership">Membership Questions</option>
                          <option value="classes">Class Information</option>
                          <option value="pt">Personal Training</option>
                          <option value="corporate">Corporate Wellness</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-none"
                        placeholder="How can we help?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                  alt="Location map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-bold text-lg">Pacific Pulse Fitness</h3>
                  <p className="text-gray-300">456 Fitness Blvd, Honolulu</p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-gray-400">
                    456 Fitness Blvd<br />
                    Honolulu, HI 96815
                  </p>
                  <a href="#" className="inline-flex items-center text-orange-500 font-medium mt-3 hover:text-orange-400">
                    Get Directions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-orange-500 font-bold text-xl">(808) 555-PUMP</p>
                  <p className="text-gray-500 text-sm mt-1">Available during business hours</p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:info@pacificpulsefitness.com" className="text-orange-500 hover:underline">
                    info@pacificpulsefitness.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Hours</h3>
                  <div className="text-gray-400 text-sm space-y-1">
                    <p>Mon - Fri: 5am - 10pm</p>
                    <p>Saturday: 6am - 8pm</p>
                    <p>Sunday: 7am - 6pm</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8">
                <h3 className="text-xl font-black mb-3">Ready to Start?</h3>
                <p className="text-orange-100 mb-6">
                  Skip the form and start your free 7-day trial today!
                </p>
                <Link
                  href="/fitness-demo/membership"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition"
                >
                  Start Free Trial
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
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
