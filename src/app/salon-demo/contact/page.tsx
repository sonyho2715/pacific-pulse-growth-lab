"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SalonContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stylist: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const stylists = [
    "Maya Chen",
    "Alex Rivera",
    "Jordan Kim",
    "Marcus Taylor",
    "Sophie Lee",
    "Jake Williams",
    "No Preference",
  ];

  const services = [
    "Haircut & Style",
    "Men's Cut",
    "Color - Single Process",
    "Highlights",
    "Balayage",
    "Color Correction",
    "Blowout",
    "Special Occasion Style",
    "Keratin Treatment",
    "Extensions",
    "Beard Trim/Design",
    "Consultation",
  ];

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/salon-demo" className="flex items-center gap-3">
              <div className="text-2xl font-black tracking-tighter">
                <span className="text-rose-400">LUXE</span>
                <span className="text-white">SALON</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/salon-demo" className="text-neutral-400 font-medium hover:text-rose-400 transition">Home</Link>
              <Link href="/salon-demo/services" className="text-neutral-400 font-medium hover:text-rose-400 transition">Services</Link>
              <Link href="/salon-demo/team" className="text-neutral-400 font-medium hover:text-rose-400 transition">Team</Link>
              <Link href="/salon-demo/gallery" className="text-neutral-400 font-medium hover:text-rose-400 transition">Gallery</Link>
              <Link href="/salon-demo/contact" className="text-rose-400 font-medium">Contact</Link>
            </div>

            <a
              href="tel:808-555-HAIR"
              className="flex items-center gap-2 text-rose-400 font-bold"
            >
              (808) 555-HAIR
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Book Your Visit</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-6">Get In Touch</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Ready for your transformation? Book an appointment online or contact us with any questions.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-neutral-900 rounded-2xl p-12 text-center border border-white/5">
                  <div className="w-20 h-20 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-black mb-4">Booking Request Received!</h2>
                  <p className="text-neutral-400 mb-8">
                    We&apos;ll confirm your appointment within 2 hours during business hours.
                    <br />Check your email at {formData.email} for confirmation.
                  </p>
                  <div className="bg-neutral-800 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                    <h3 className="font-bold mb-3">Your Request:</h3>
                    <div className="space-y-2 text-sm text-neutral-400">
                      <p><span className="text-neutral-300">Service:</span> {formData.service}</p>
                      <p><span className="text-neutral-300">Stylist:</span> {formData.stylist}</p>
                      <p><span className="text-neutral-300">Date:</span> {formData.date}</p>
                      <p><span className="text-neutral-300">Time:</span> {formData.time}</p>
                    </div>
                  </div>
                  <Link
                    href="/salon-demo"
                    className="inline-flex items-center gap-2 text-rose-400 font-bold hover:text-rose-300"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5">
                  <h2 className="text-2xl font-black mb-6">Book an Appointment</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-800 rounded-xl border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-800 rounded-xl border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                          placeholder="(808) 555-1234"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-800 rounded-xl border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                        placeholder="you@email.com"
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Service *</label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-800 rounded-xl border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                        >
                          <option value="">Select service...</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Preferred Stylist</label>
                        <select
                          value={formData.stylist}
                          onChange={(e) => setFormData({ ...formData, stylist: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-800 rounded-xl border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                        >
                          <option value="">Select stylist...</option>
                          {stylists.map((stylist) => (
                            <option key={stylist} value={stylist}>{stylist}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date/Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-neutral-800 rounded-xl border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Preferred Time *</label>
                        <select
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-800 rounded-xl border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                        >
                          <option value="">Select time...</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-bold mb-2">Additional Notes</label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-800 rounded-xl border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition resize-none"
                        placeholder="Anything we should know? (inspiration photos, hair history, etc.)"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-rose-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-rose-400 transition"
                    >
                      Request Appointment
                    </button>

                    <p className="text-neutral-500 text-sm text-center">
                      We&apos;ll contact you to confirm your appointment within 2 hours.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold mb-6">Contact Info</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-neutral-400 text-sm">
                        789 Style Street<br />
                        Honolulu, HI 96814
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:808-555-HAIR" className="text-rose-400 font-bold text-lg hover:text-rose-300">
                        (808) 555-HAIR
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:hello@luxesalon.com" className="text-rose-400 hover:text-rose-300">
                        hello@luxesalon.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hours</h4>
                      <div className="text-neutral-400 text-sm space-y-1">
                        <p>Tue - Fri: 10am - 8pm</p>
                        <p>Saturday: 9am - 6pm</p>
                        <p>Sunday: 10am - 4pm</p>
                        <p>Monday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                  alt="Location map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold">Downtown Honolulu</p>
                  <p className="text-neutral-300 text-sm">Street parking available</p>
                </div>
              </div>

              {/* Social */}
              <div className="bg-neutral-900 rounded-2xl p-6 border border-white/5 text-center">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-rose-400 hover:bg-neutral-700 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-rose-400 hover:bg-neutral-700 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-rose-400 hover:bg-neutral-700 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-8 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-neutral-500 text-sm">
          <p>&copy; 2026 Luxe Salon. Demo by <Link href="/" className="text-rose-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
