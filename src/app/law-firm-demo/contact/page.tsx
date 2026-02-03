"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LawFirmContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceArea: "",
    caseDescription: "",
    preferredContact: "phone",
    bestTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/law-firm-demo" className="flex items-center gap-3">
              <div className="flex items-center">
                <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <div className="ml-3">
                  <span className="text-xl font-serif font-bold text-white tracking-wide">HARRISON</span>
                  <span className="block text-xs text-amber-500 tracking-widest font-semibold">LAW GROUP</span>
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/law-firm-demo" className="text-slate-300 font-medium hover:text-amber-400 transition">Home</Link>
              <Link href="/law-firm-demo/practice-areas" className="text-slate-300 font-medium hover:text-amber-400 transition">Practice Areas</Link>
              <Link href="/law-firm-demo/attorneys" className="text-slate-300 font-medium hover:text-amber-400 transition">Attorneys</Link>
              <Link href="/law-firm-demo/results" className="text-slate-300 font-medium hover:text-amber-400 transition">Results</Link>
              <Link href="/law-firm-demo/contact" className="text-amber-400 font-medium">Contact</Link>
            </div>

            <a
              href="tel:808-555-LAW1"
              className="flex items-center gap-2 text-amber-400 font-bold"
            >
              (808) 555-LAW1
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Get Started</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">
            Free Consultation
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Take the first step toward resolving your legal matter. Contact us for a free, confidential consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-xl p-12 shadow-lg text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Thank You!</h2>
                  <p className="text-slate-600 mb-2">Your consultation request has been received.</p>
                  <p className="text-slate-600 mb-8">
                    One of our attorneys will contact you within 24 hours to discuss your case.
                  </p>
                  <div className="bg-amber-50 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
                    <h3 className="font-bold text-amber-800 mb-2">What happens next?</h3>
                    <ol className="text-amber-700 text-sm space-y-2 list-decimal list-inside">
                      <li>An attorney will review your information</li>
                      <li>We&apos;ll call you at your preferred time</li>
                      <li>Discuss your case in complete confidence</li>
                      <li>Explain your legal options and next steps</li>
                    </ol>
                  </div>
                  <p className="text-slate-500 text-sm">
                    Need immediate assistance? Call us at{" "}
                    <a href="tel:808-555-LAW1" className="text-amber-600 font-bold">(808) 555-LAW1</a>
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-serif font-bold mb-2">Request Your Free Consultation</h2>
                  <p className="text-slate-600 mb-6">All consultations are confidential. We respect your privacy.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                          placeholder="john@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                          placeholder="(808) 555-1234"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">Type of Legal Matter *</label>
                      <select
                        required
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                      >
                        <option value="">Select practice area...</option>
                        <option value="personal-injury">Personal Injury</option>
                        <option value="family-law">Family Law / Divorce</option>
                        <option value="criminal-defense">Criminal Defense</option>
                        <option value="business-law">Business Law</option>
                        <option value="estate-planning">Estate Planning</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">Brief Description of Your Case *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.caseDescription}
                        onChange={(e) => setFormData({ ...formData, caseDescription: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition resize-none"
                        placeholder="Please provide a brief description of your legal matter..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Preferred Contact Method</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="phone"
                              checked={formData.preferredContact === "phone"}
                              onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                              className="text-amber-500 focus:ring-amber-500"
                            />
                            <span>Phone</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="email"
                              checked={formData.preferredContact === "email"}
                              onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                              className="text-amber-500 focus:ring-amber-500"
                            />
                            <span>Email</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Best Time to Call</label>
                        <select
                          value={formData.bestTime}
                          onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                        >
                          <option value="">Any time</option>
                          <option value="morning">Morning (8AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 5PM)</option>
                          <option value="evening">Evening (5PM - 7PM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-600">
                      <p>
                        <strong>Confidentiality Notice:</strong> The information you provide is protected by attorney-client privilege. We will not share your information with anyone outside our firm without your consent.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-500 text-slate-900 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition"
                    >
                      Request Free Consultation
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-slate-900 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Location</h4>
                      <p className="text-slate-400 text-sm">
                        100 Bishop Street, Suite 2000<br />
                        Honolulu, HI 96813
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:808-555-LAW1" className="text-amber-400 font-bold text-lg hover:text-amber-300">
                        (808) 555-LAW1
                      </a>
                      <p className="text-slate-400 text-sm mt-1">24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:info@harrisonlawgroup.com" className="text-amber-400 hover:text-amber-300">
                        info@harrisonlawgroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <div className="text-slate-400 text-sm">
                        <p>Monday - Friday: 8AM - 6PM</p>
                        <p>Saturday: By Appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                  alt="Office location map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold">Downtown Honolulu</p>
                  <p className="text-slate-300 text-sm">Free parking available</p>
                </div>
              </div>

              {/* Why Free */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h3 className="font-bold text-amber-800 mb-3">Why Is the Consultation Free?</h3>
                <p className="text-amber-700 text-sm">
                  We believe everyone deserves access to quality legal advice. A free consultation allows us to understand your situation and explain how we can help, with no obligation on your part.
                </p>
              </div>

              {/* Badges */}
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <p className="text-slate-500 text-sm mb-4">Recognized By</p>
                <div className="flex justify-center gap-4">
                  <div className="text-slate-400">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <span className="text-xs">Super Lawyers</span>
                  </div>
                  <div className="text-slate-400">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="text-xs">Best Lawyers</span>
                  </div>
                  <div className="text-slate-400">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-lg font-bold">A+</span>
                    </div>
                    <span className="text-xs">BBB Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <p>&copy; 2026 Harrison Law Group. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
          <p className="mt-2 text-xs">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </footer>
    </div>
  );
}
