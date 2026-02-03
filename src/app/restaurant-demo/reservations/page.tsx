"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RestaurantReservationsPage() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    partySize: "2",
    name: "",
    email: "",
    phone: "",
    occasion: "",
    specialRequests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
  ];

  const occasions = [
    "Birthday", "Anniversary", "Date Night", "Business Dinner", "Celebration", "Other",
  ];

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
              <Link href="/restaurant-demo/contact" className="text-stone-300 font-medium hover:text-amber-400 transition">Contact</Link>
            </div>

            <a
              href="tel:808-555-DINE"
              className="flex items-center gap-2 text-amber-400 font-bold"
            >
              (808) 555-DINE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&h=600&fit=crop"
            alt="Restaurant table setting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Book Your Experience</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">
            Make a Reservation
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Secure your table at Sunset Shores and prepare for an unforgettable dining experience.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Reservation Confirmed!</h2>
              <p className="text-stone-600 mb-2">Thank you, {formData.name}!</p>
              <p className="text-stone-600 mb-8">
                Your table for {formData.partySize} on {formData.date} at {formData.time} has been reserved.
                <br />
                A confirmation email has been sent to {formData.email}.
              </p>
              <div className="bg-amber-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-amber-800 mb-2">What&apos;s Next?</h3>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Check your email for confirmation details</li>
                  <li>• Arrive 10 minutes before your reservation</li>
                  <li>• Let us know if your plans change: (808) 555-DINE</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/restaurant-demo/menu"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-full font-bold hover:bg-amber-600 transition"
                >
                  View Our Menu
                </Link>
                <Link
                  href="/restaurant-demo"
                  className="inline-flex items-center justify-center gap-2 bg-stone-200 text-stone-700 px-6 py-3 rounded-full font-bold hover:bg-stone-300 transition"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-serif font-bold mb-6">Reserve Your Table</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Date *</label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Time *</label>
                        <select
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                        >
                          <option value="">Select time...</option>
                          <optgroup label="Lunch">
                            {timeSlots.slice(0, 6).map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Dinner">
                            {timeSlots.slice(6).map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    {/* Party Size */}
                    <div>
                      <label className="block text-sm font-bold mb-2">Party Size *</label>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setFormData({ ...formData, partySize: size.toString() })}
                            className={`w-12 h-12 rounded-lg font-bold transition ${
                              formData.partySize === size.toString()
                                ? "bg-amber-500 text-white"
                                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, partySize: "9+" })}
                          className={`px-4 h-12 rounded-lg font-bold transition ${
                            formData.partySize === "9+"
                              ? "bg-amber-500 text-white"
                              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                          }`}
                        >
                          9+
                        </button>
                      </div>
                      {formData.partySize === "9+" && (
                        <p className="text-sm text-amber-600 mt-2">
                          For parties of 9 or more, please call us at (808) 555-DINE
                        </p>
                      )}
                    </div>

                    {/* Contact Info */}
                    <div className="border-t border-stone-200 pt-6">
                      <h3 className="font-bold mb-4">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-bold mb-2">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                            placeholder="John Smith"
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
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                            placeholder="(808) 555-1234"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Optional */}
                    <div className="border-t border-stone-200 pt-6">
                      <h3 className="font-bold mb-4">Optional Details</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-bold mb-2">Special Occasion</label>
                          <select
                            value={formData.occasion}
                            onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                          >
                            <option value="">None</option>
                            {occasions.map((occ) => (
                              <option key={occ} value={occ}>{occ}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2">Special Requests</label>
                          <textarea
                            value={formData.specialRequests}
                            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                            rows={3}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition resize-none"
                            placeholder="Dietary restrictions, seating preferences, etc."
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-amber-500/25 transition"
                    >
                      Confirm Reservation
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold mb-4">Dining Hours</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-stone-600">Lunch</span>
                      <span className="font-medium">11:30 AM - 2:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Dinner</span>
                      <span className="font-medium">5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Sunday Brunch</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Happy Hour</span>
                      <span className="font-medium">4:00 - 6:00 PM (M-F)</span>
                    </div>
                  </div>
                </div>

                {/* Policy */}
                <div className="bg-amber-50 rounded-2xl p-6">
                  <h3 className="font-bold text-amber-800 mb-3">Reservation Policy</h3>
                  <ul className="text-amber-700 text-sm space-y-2">
                    <li>• Tables held for 15 minutes past reservation time</li>
                    <li>• Cancellations appreciated 24 hours in advance</li>
                    <li>• Large parties may require a deposit</li>
                    <li>• Outdoor seating subject to availability</li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-stone-900 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Need Help?</h3>
                  <p className="text-stone-400 text-sm mb-4">
                    Call us directly for special requests, large parties, or private events.
                  </p>
                  <a
                    href="tel:808-555-DINE"
                    className="flex items-center gap-2 text-amber-400 font-bold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (808) 555-DINE
                  </a>
                </div>

                {/* Private Dining */}
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop"
                    alt="Private dining"
                    width={400}
                    height={250}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-white mb-1">Private Dining</h3>
                    <p className="text-stone-300 text-sm mb-3">
                      Host your special event in our private dining room.
                    </p>
                    <Link
                      href="/restaurant-demo/contact"
                      className="text-amber-400 text-sm font-bold hover:text-amber-300 transition"
                    >
                      Inquire Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
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
