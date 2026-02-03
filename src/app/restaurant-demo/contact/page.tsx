"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RestaurantContactPage() {
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
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/restaurant-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-white tracking-wide">SUNSET SHORES</span>
                <span className="block text-xs text-amber-400 tracking-widest">ISLAND KITCHEN</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/restaurant-demo" className="text-stone-300 font-medium hover:text-amber-400 transition">Home</Link>
              <Link href="/restaurant-demo/menu" className="text-stone-300 font-medium hover:text-amber-400 transition">Menu</Link>
              <Link href="/restaurant-demo/about" className="text-stone-300 font-medium hover:text-amber-400 transition">About</Link>
              <Link href="/restaurant-demo/contact" className="text-amber-400 font-medium">Contact</Link>
            </div>

            <Link
              href="/restaurant-demo/reservations"
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-amber-500/25 transition"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question, feedback, or want to plan a special event.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Message Sent!</h3>
                  <p className="text-stone-600">Thank you for reaching out. We&apos;ll respond within 24 hours.</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
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
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                          placeholder="(808) 555-1234"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                        >
                          <option value="">Select topic...</option>
                          <option value="reservation">Reservation Inquiry</option>
                          <option value="private-event">Private Event</option>
                          <option value="catering">Catering Request</option>
                          <option value="feedback">Feedback</option>
                          <option value="careers">Careers</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-amber-500/25 transition"
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
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-bold text-white text-lg">Sunset Shores Island Kitchen</h3>
                  <p className="text-stone-300">123 Oceanfront Drive, Honolulu</p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-stone-600">
                    123 Oceanfront Drive<br />
                    Honolulu, HI 96815
                  </p>
                  <a href="#" className="inline-flex items-center text-amber-600 font-medium mt-3 hover:text-amber-700">
                    Get Directions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-amber-600 font-bold text-xl">(808) 555-DINE</p>
                  <p className="text-stone-500 text-sm mt-1">Reservations & General Inquiries</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:info@sunsetshores.com" className="text-amber-600 hover:underline">
                    info@sunsetshores.com
                  </a>
                  <p className="text-stone-500 text-sm mt-1">We respond within 24 hours</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Hours</h3>
                  <div className="text-stone-600 text-sm space-y-1">
                    <p>Lunch: 11:30 AM - 2:30 PM</p>
                    <p>Dinner: 5:00 PM - 10:00 PM</p>
                    <p>Sunday Brunch: 10:00 AM - 2:00 PM</p>
                    <p>Happy Hour: 4:00 - 6:00 PM (M-F)</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-white mb-3">Ready to Dine?</h3>
                <p className="text-amber-100 mb-6">
                  Skip the form and book your table directly online.
                </p>
                <Link
                  href="/restaurant-demo/reservations"
                  className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition"
                >
                  Make a Reservation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events Section */}
      <section className="py-16 px-4 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop"
                alt="Private dining room"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Special Occasions</span>
              <h2 className="text-3xl font-serif font-bold mt-2 mb-4">Private Dining & Events</h2>
              <p className="text-stone-300 mb-6">
                From intimate celebrations to corporate gatherings, our private dining room accommodates parties of 10-40 guests with customized menus and dedicated service.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customized prix-fixe menus
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ocean view private room
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated event coordinator
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Audio/visual equipment available
                </li>
              </ul>
              <a
                href="mailto:events@sunsetshores.com"
                className="inline-flex items-center gap-2 bg-amber-500 text-stone-900 px-6 py-3 rounded-full font-bold hover:bg-amber-400 transition"
              >
                Inquire About Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Join Our Team</span>
          <h2 className="text-3xl font-serif font-bold mt-2 mb-4">We&apos;re Hiring!</h2>
          <p className="text-stone-600 mb-8">
            Looking for passionate individuals to join our ohana. We offer competitive pay, meal benefits, and growth opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-white rounded-full text-stone-700 font-medium shadow-sm">Line Cook</span>
            <span className="px-4 py-2 bg-white rounded-full text-stone-700 font-medium shadow-sm">Server</span>
            <span className="px-4 py-2 bg-white rounded-full text-stone-700 font-medium shadow-sm">Bartender</span>
            <span className="px-4 py-2 bg-white rounded-full text-stone-700 font-medium shadow-sm">Host/Hostess</span>
          </div>
          <a
            href="mailto:careers@sunsetshores.com"
            className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition"
          >
            Send your resume to careers@sunsetshores.com
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-8 px-4 border-t border-stone-800">
        <div className="max-w-7xl mx-auto text-center text-stone-500">
          <p>&copy; 2026 Sunset Shores Island Kitchen. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
