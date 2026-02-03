"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PetContactPage() {
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    breed: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    newClient: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    "Full Grooming",
    "Bath & Brush",
    "Spa Package",
    "Nail Trim Only",
    "Veterinary Exam",
    "Vaccinations",
    "Dental Cleaning",
    "Other / Not Sure",
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#fefdfb] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-stone-800 mb-4">Booking Request Received!</h1>
          <p className="text-stone-600 mb-2">
            Thanks for choosing Happy Tails! We&apos;ll confirm your appointment within 24 hours.
          </p>
          <p className="text-teal-600 font-medium mb-8">
            New clients get 20% off their first grooming!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pet-demo/services"
              className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
            >
              View Services
            </Link>
            <Link
              href="/pet-demo"
              className="bg-teal-50 text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-teal-100 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefdfb] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/pet-demo" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-2xl">🐾</span>
              </div>
              <div>
                <span className="text-xl font-bold text-teal-700">Happy Tails</span>
                <span className="text-xs text-teal-500 block">Pet Spa & Wellness</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/pet-demo" className="text-stone-600 font-medium hover:text-teal-600 transition">Home</Link>
              <Link href="/pet-demo/services" className="text-stone-600 font-medium hover:text-teal-600 transition">Services</Link>
              <Link href="/pet-demo/team" className="text-stone-600 font-medium hover:text-teal-600 transition">Our Team</Link>
              <Link href="/pet-demo/gallery" className="text-stone-600 font-medium hover:text-teal-600 transition">Gallery</Link>
              <Link href="/pet-demo/contact" className="text-teal-700 font-medium">Contact</Link>
            </div>

            <Link
              href="/pet-demo/contact"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-teal-50 to-[#fefdfb]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Book an Appointment</span>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mt-2 mb-4">Let&apos;s Pamper Your Pet!</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4 bg-[#fefdfb]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-teal-50">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">Appointment Request</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Owner Info */}
                  <div>
                    <h3 className="font-semibold text-stone-700 mb-4 flex items-center gap-2">
                      <span>👤</span> Your Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.ownerName}
                          onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-stone-700 mb-1">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                          placeholder="(808) 555-0000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pet Info */}
                  <div>
                    <h3 className="font-semibold text-stone-700 mb-4 flex items-center gap-2">
                      <span>🐾</span> Pet Information
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Pet&apos;s Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.petName}
                          onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                          placeholder="Buddy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Pet Type *</label>
                        <select
                          required
                          value={formData.petType}
                          onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                        >
                          <option value="">Select</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Breed</label>
                        <input
                          type="text"
                          value={formData.breed}
                          onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                          placeholder="Golden Retriever"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Appointment */}
                  <div>
                    <h3 className="font-semibold text-stone-700 mb-4 flex items-center gap-2">
                      <span>📅</span> Appointment Details
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Service *</label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                        >
                          <option value="">Select service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Preferred Date</label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Preferred Time</label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Special Notes or Requests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition resize-none"
                      placeholder="Any allergies, behavioral notes, or special requests..."
                    />
                  </div>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.newClient}
                      onChange={(e) => setFormData({ ...formData, newClient: e.target.checked })}
                      className="rounded border-teal-300 text-teal-600 focus:ring-teal-400"
                    />
                    <span className="text-sm text-stone-600">
                      This is my first visit (New clients get 20% off grooming!)
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-4 rounded-full font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition shadow-lg"
                  >
                    Request Appointment
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-teal-50">
                <h3 className="text-lg font-bold text-stone-800 mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Address</span>
                      <p className="text-stone-800 font-medium">123 Pawsome Street</p>
                      <p className="text-stone-800">Honolulu, HI 96815</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📞</span>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Phone</span>
                      <p className="text-teal-600 font-bold">(808) 555-PAWS</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">✉️</span>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Email</span>
                      <p className="text-stone-800">hello@happytailshi.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🕒</span>
                    </div>
                    <div>
                      <span className="text-stone-500 text-sm">Hours</span>
                      <p className="text-stone-800">Mon-Fri: 8am - 6pm</p>
                      <p className="text-stone-800">Sat: 9am - 5pm</p>
                      <p className="text-stone-800">Sun: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Client Offer */}
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-2">New Client Special!</h3>
                <p className="text-orange-100 mb-4">
                  First-time visitors get 20% off their first grooming service.
                </p>
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                  Auto-applied at checkout
                </span>
              </div>

              {/* Quick FAQ */}
              <div className="bg-teal-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-stone-800 mb-4">Quick Answers</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-stone-800">Do I need to bring anything?</p>
                    <p className="text-stone-600">Just your pet! We provide everything else.</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">How long does grooming take?</p>
                    <p className="text-stone-600">1-3 hours depending on service and pet size.</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Is my pet up to date on shots?</p>
                    <p className="text-stone-600">We require proof of rabies vaccination.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-teal-400/60 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center">
              <span className="text-lg">🐾</span>
            </div>
            <span className="text-lg font-bold text-white">Happy Tails Pet Spa</span>
          </div>
          <p>&copy; 2026 Happy Tails Pet Spa. Demo by <Link href="/" className="text-teal-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
