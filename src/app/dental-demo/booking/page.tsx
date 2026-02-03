"use client";

import { useState } from "react";
import Link from "next/link";

export default function DentalBookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    isNewPatient: "yes",
    insurance: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "General Checkup & Cleaning",
    "Teeth Whitening",
    "Dental Implant Consultation",
    "Invisalign Consultation",
    "Emergency Dental Care",
    "Cosmetic Consultation",
    "Pediatric Dental Visit",
    "Root Canal Treatment",
    "Crown or Bridge",
    "Other",
  ];

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log("Booking submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/dental-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Aloha Dental</span>
                <span className="block text-xs text-teal-600">Family & Cosmetic Dentistry</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/dental-demo" className="text-gray-700 hover:text-teal-600 transition font-medium">Home</Link>
              <Link href="/dental-demo/services" className="text-gray-700 hover:text-teal-600 transition font-medium">Services</Link>
              <Link href="/dental-demo/about" className="text-gray-700 hover:text-teal-600 transition font-medium">About Us</Link>
              <Link href="/dental-demo/contact" className="text-gray-700 hover:text-teal-600 transition font-medium">Contact</Link>
            </div>

            <a
              href="tel:808-555-SMILE"
              className="flex items-center gap-2 text-teal-600 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (808) 555-SMILE
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointment Request Received!</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
                Thank you for booking with Aloha Dental. We&apos;ll confirm your appointment via email and text within 2 hours.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
                <h3 className="font-semibold text-gray-900 mb-4">Your Request Details</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service:</span>
                    <span className="font-medium text-gray-900">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Preferred Date:</span>
                    <span className="font-medium text-gray-900">{formData.preferredDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Preferred Time:</span>
                    <span className="font-medium text-gray-900">{formData.preferredTime}</span>
                  </div>
                </div>
              </div>
              <Link
                href="/dental-demo"
                className="inline-flex items-center gap-2 mt-8 text-teal-600 font-semibold hover:text-teal-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Book Online</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                  Schedule Your Appointment
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below and we&apos;ll confirm your appointment within 2 hours.
                  Need urgent care? Call us at <a href="tel:808-555-SMILE" className="text-teal-600 font-semibold">(808) 555-SMILE</a>.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm font-bold">1</span>
                      Personal Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                          placeholder="Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                          placeholder="(808) 555-1234"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm font-bold">2</span>
                      Appointment Details
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        >
                          <option value="">Select a service...</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        >
                          <option value="">Select a time...</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm font-bold">3</span>
                      Additional Information
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Are you a new patient?</label>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="isNewPatient"
                              value="yes"
                              checked={formData.isNewPatient === "yes"}
                              onChange={handleChange}
                              className="w-5 h-5 text-teal-600 focus:ring-teal-500"
                            />
                            <span className="text-gray-700">Yes, I&apos;m new</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="isNewPatient"
                              value="no"
                              checked={formData.isNewPatient === "no"}
                              onChange={handleChange}
                              className="w-5 h-5 text-teal-600 focus:ring-teal-500"
                            />
                            <span className="text-gray-700">No, I&apos;m returning</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider (optional)</label>
                        <input
                          type="text"
                          name="insurance"
                          value={formData.insurance}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                          placeholder="e.g., Delta Dental, Cigna, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (optional)</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                          placeholder="Any specific concerns or questions?"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-full text-lg font-semibold hover:shadow-xl transition"
                    >
                      Request Appointment
                    </button>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      We&apos;ll confirm your appointment within 2 hours via email and text.
                    </p>
                  </div>
                </form>
              </div>

              {/* Quick Info */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Office Hours",
                    text: "Mon-Fri: 8am-6pm\nSat: 9am-3pm",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Location",
                    text: "1234 Aloha Street\nHonolulu, HI 96815",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: "Emergency Line",
                    text: "(808) 555-SMILE\nAvailable 24/7",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4 text-teal-600">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2026 Aloha Dental. Demo by <Link href="/" className="text-teal-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
