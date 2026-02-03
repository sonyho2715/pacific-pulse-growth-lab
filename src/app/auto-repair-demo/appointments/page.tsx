"use client";

import { useState } from "react";
import Link from "next/link";

export default function AutoRepairAppointmentsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    mileage: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    symptoms: "",
    leaveCar: "yes",
  });

  const serviceTypes = [
    "Oil Change",
    "Brake Service",
    "Check Engine Light",
    "A/C Service",
    "Tune-Up",
    "State Inspection",
    "Tire Service",
    "Battery/Electrical",
    "Transmission Service",
    "Steering/Suspension",
    "General Repair",
    "Pre-Purchase Inspection",
    "Other",
  ];

  const timeSlots = [
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/auto-repair-demo" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Island Auto Works</div>
                  <div className="text-xs text-slate-400">Honest Auto Repair Since 1999</div>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Appointment Request Received!
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              We'll call you within 2 hours to confirm your appointment. If you need immediate assistance, call us at (808) 555-1234.
            </p>
            <div className="bg-slate-800 p-6 rounded-xl mb-8 text-left">
              <h3 className="font-semibold text-white mb-4">What Happens Next:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                  We'll review your request and check availability
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                  You'll receive a confirmation call within 2 hours
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                  Bring your vehicle at the confirmed time
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                  We'll diagnose and provide a detailed estimate before any work
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/auto-repair-demo/services"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
              >
                View Services & Pricing
              </Link>
              <Link
                href="/auto-repair-demo"
                className="border-2 border-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:border-slate-500 transition"
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/auto-repair-demo" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Island Auto Works</div>
                <div className="text-xs text-slate-400">Honest Auto Repair Since 1999</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/auto-repair-demo" className="text-slate-300 font-medium hover:text-white transition">Home</Link>
              <Link href="/auto-repair-demo/services" className="text-slate-300 font-medium hover:text-white transition">Services</Link>
              <Link href="/auto-repair-demo/about" className="text-slate-300 font-medium hover:text-white transition">About Us</Link>
              <Link href="/auto-repair-demo/appointments" className="text-white font-medium">Appointments</Link>
              <Link href="/auto-repair-demo/contact" className="text-slate-300 font-medium hover:text-white transition">Contact</Link>
            </div>

            <a href="tel:+18085551234" className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">(808) 555-1234</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">Schedule Service</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Fill out the form below and we'll confirm your appointment within 2 hours. Walk-ins are also welcome!
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                Contact Information
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="(808) 555-1234"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                Vehicle Information
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Year *</label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="2020"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Make *</label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="Toyota"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Model *</label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="Camry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mileage</label>
                  <input
                    type="text"
                    value={formData.mileage}
                    onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="75,000"
                  />
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                Service Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed *</label>
                  <select
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Describe the Problem or Service Needed
                  </label>
                  <textarea
                    rows={4}
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none resize-none"
                    placeholder="Any symptoms, warning lights, noises, or specific concerns..."
                  />
                </div>
              </div>
            </div>

            {/* Scheduling */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                Preferred Schedule
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time *</label>
                  <select
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Can you leave your car with us?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="leaveCar"
                      value="yes"
                      checked={formData.leaveCar === "yes"}
                      onChange={(e) => setFormData({ ...formData, leaveCar: e.target.value })}
                      className="w-4 h-4 text-red-600"
                    />
                    <span className="text-slate-700">Yes, I can leave it</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="leaveCar"
                      value="no"
                      checked={formData.leaveCar === "no"}
                      onChange={(e) => setFormData({ ...formData, leaveCar: e.target.value })}
                      className="w-4 h-4 text-red-600"
                    />
                    <span className="text-slate-700">I need to wait</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition text-lg"
            >
              Request Appointment
            </button>

            <p className="text-sm text-slate-500 text-center">
              We'll call you within 2 hours to confirm your appointment. Walk-ins are also welcome during business hours.
            </p>
          </form>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
              <p className="text-slate-600 text-sm">Mon-Fri: 7:30am - 5:30pm</p>
              <p className="text-slate-600 text-sm">Saturday: 8:00am - 2:00pm</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600 text-sm">98-123 Kamehameha Hwy</p>
              <p className="text-slate-600 text-sm">Aiea, HI 96701</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Need It Sooner?</h3>
              <p className="text-slate-600 text-sm">Call us directly at</p>
              <a href="tel:+18085551234" className="text-red-600 font-semibold">(808) 555-1234</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">Island Auto Works</span>
          </div>
          <p>&copy; 2026 Island Auto Works. Demo by <Link href="/" className="text-red-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
