"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const services = [
    { id: 'sig-facial', name: 'Signature Hydrating Facial', price: 85, duration: '60 min' },
    { id: 'anti-aging', name: 'Anti-Aging Collagen Facial', price: 125, duration: '75 min' },
    { id: 'acne', name: 'Acne Clearing Treatment', price: 95, duration: '60 min' },
    { id: 'swedish', name: 'Swedish Massage', price: 95, duration: '60 min' },
    { id: 'deep-tissue', name: 'Deep Tissue Massage', price: 115, duration: '75 min' },
    { id: 'hot-stone', name: 'Hot Stone Massage', price: 135, duration: '90 min' },
    { id: 'lomi-lomi', name: 'Lomi Lomi Hawaiian Massage', price: 145, duration: '90 min' },
    { id: 'body-wrap', name: 'Body Scrub & Wrap', price: 120, duration: '75 min' },
    { id: 'brazilian', name: 'Brazilian Wax', price: 65, duration: '30 min' },
    { id: 'spa-day', name: 'Spa Day Package', price: 350, duration: '4 hours' },
    { id: 'couples', name: 'Couples Retreat', price: 320, duration: '90 min' },
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit booking
      alert('Booking submitted! (Demo mode - would normally create booking in database)');
      console.log('Booking data:', formData);
    }
  };

  const selectedService = services.find(s => s.id === formData.service);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/spa-demo" className="text-2xl font-serif text-[#C4A76E]">
                Serenity Spa
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/spa-demo" className="text-gray-700 hover:text-[#C4A76E] transition">Home</Link>
              <Link href="/spa-demo/services" className="text-gray-700 hover:text-[#C4A76E] transition">Services</Link>
              <Link href="/spa-demo/booking" className="text-[#C4A76E] font-medium">Book Now</Link>
              <Link href="/spa-demo/gift-cards" className="text-gray-700 hover:text-[#C4A76E] transition">Gift Cards</Link>
              <Link href="/spa-demo/contact" className="text-gray-700 hover:text-[#C4A76E] transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Book Your Appointment</h1>
            <p className="text-xl text-gray-600">We can't wait to pamper you!</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    step >= s
                      ? 'bg-gradient-to-r from-[#C4A76E] to-[#8B7355] border-[#C4A76E] text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  } font-semibold`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`w-24 h-1 ${
                      step > s ? 'bg-[#C4A76E]' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 text-sm text-gray-600">
              <span className="w-32 text-center">Select Service</span>
              <span className="w-32 text-center">Choose Date & Time</span>
              <span className="w-32 text-center">Your Details</span>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Select Service */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-gray-900 mb-6">Select Your Treatment</h2>

                  <div className="grid gap-4">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-center justify-between p-6 border-2 rounded-xl cursor-pointer transition ${
                          formData.service === service.id
                            ? 'border-[#C4A76E] bg-[#C4A76E]/5'
                            : 'border-gray-200 hover:border-[#C4A76E]/50'
                        }`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="service"
                            value={service.id}
                            checked={formData.service === service.id}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                            className="w-5 h-5 text-[#C4A76E] mr-4"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.duration}</div>
                          </div>
                        </div>
                        <div className="text-[#C4A76E] font-bold text-lg">${service.price}</div>
                      </label>
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.service}
                    className="w-full bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white py-4 rounded-full text-lg font-medium hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Date & Time
                  </button>
                </div>
              )}

              {/* Step 2: Select Date & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-serif text-gray-900">Choose Date & Time</h2>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[#C4A76E] hover:underline"
                    >
                      ← Back
                    </button>
                  </div>

                  {selectedService && (
                    <div className="bg-gray-50 p-4 rounded-xl mb-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-gray-900">{selectedService.name}</div>
                          <div className="text-sm text-gray-500">{selectedService.duration}</div>
                        </div>
                        <div className="text-[#C4A76E] font-bold">${selectedService.price}</div>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Select Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Select Time</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({...formData, time})}
                          className={`py-3 px-4 rounded-xl border-2 transition ${
                            formData.time === time
                              ? 'border-[#C4A76E] bg-[#C4A76E] text-white'
                              : 'border-gray-200 hover:border-[#C4A76E] text-gray-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.date || !formData.time}
                    className="w-full bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white py-4 rounded-full text-lg font-medium hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Your Details
                  </button>
                </div>
              )}

              {/* Step 3: Personal Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-serif text-gray-900">Your Information</h2>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-[#C4A76E] hover:underline"
                    >
                      ← Back
                    </button>
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-gradient-to-br from-[#C4A76E] to-[#8B7355] text-white p-6 rounded-xl mb-6">
                    <h3 className="font-semibold mb-3">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span className="font-medium">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">{formData.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{formData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{selectedService?.duration}</span>
                      </div>
                      <div className="border-t border-white/30 pt-2 mt-2 flex justify-between text-lg">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold">${selectedService?.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Special Requests (Optional)</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                      placeholder="Any allergies, preferences, or special requests..."
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-900">
                      <strong>Cancellation Policy:</strong> Please provide at least 24 hours notice to cancel or reschedule your appointment.
                      Late cancellations may be subject to a fee.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                    className="w-full bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white py-4 rounded-full text-lg font-medium hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Booking
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need help booking? Our AI assistant can help!</p>
            <button
              onClick={() => alert('Chatbot would open here!')}
              className="text-[#C4A76E] hover:underline font-medium"
            >
              Chat with us →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Serenity Spa. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Powered by <a href="https://pacific-pulse-growth-lab-production.up.railway.app" className="text-[#C4A76E] hover:underline">Pacific Pulse Growth Lab</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
