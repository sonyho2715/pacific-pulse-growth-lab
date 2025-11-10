"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Demo mode - would normally send email/save to database)');
    console.log('Contact form:', formData);
  };

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
              <Link href="/spa-demo/booking" className="text-gray-700 hover:text-[#C4A76E] transition">Book Now</Link>
              <Link href="/spa-demo/gift-cards" className="text-gray-700 hover:text-[#C4A76E] transition">Gift Cards</Link>
              <Link href="/spa-demo/contact" className="text-[#C4A76E] font-medium">Contact</Link>
            </div>
            <Link
              href="/spa-demo/booking"
              className="bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white px-6 py-2 rounded-full hover:shadow-lg transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center text-white mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&h=600&fit=crop"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Get in Touch</h1>
          <p className="text-xl">We'd love to hear from you</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-serif text-gray-900 mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                      required
                    />
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
                    <label className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Question</option>
                      <option value="services">Services & Pricing</option>
                      <option value="gift-card">Gift Card Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white py-4 rounded-full text-lg font-medium hover:shadow-xl transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C4A76E] to-[#8B7355] rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Spa Lane<br />
                      Honolulu, HI 96815
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4A76E] hover:underline mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C4A76E] to-[#8B7355] rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">(808) 555-0123</p>
                    <p className="text-sm text-gray-500">Available during business hours</p>
                    <a
                      href="tel:8085550123"
                      className="text-[#C4A76E] hover:underline mt-2 inline-block"
                    >
                      Call Now →
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C4A76E] to-[#8B7355] rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">info@serenityspa.com</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                    <a
                      href="mailto:info@serenityspa.com"
                      className="text-[#C4A76E] hover:underline mt-2 inline-block"
                    >
                      Send Email →
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C4A76E] to-[#8B7355] rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">10:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Chatbot Prompt */}
              <div className="bg-gradient-to-br from-[#C4A76E] to-[#8B7355] rounded-3xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-3">Need Immediate Help?</h3>
                <p className="mb-4">
                  Our AI assistant is available 24/7 to answer questions and help you book appointments.
                </p>
                <button
                  onClick={() => alert('Chatbot would open here!')}
                  className="bg-white text-[#C4A76E] px-6 py-3 rounded-full font-medium hover:shadow-lg transition"
                >
                  Chat with AI Assistant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Honolulu</p>
          </div>

          {/* Placeholder for Google Maps */}
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-300 relative">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=900&fit=crop"
              alt="Map location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="bg-white px-8 py-4 rounded-full shadow-lg">
                <p className="text-gray-900 font-semibold">123 Spa Lane, Honolulu, HI 96815</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-block bg-[#C4A76E] text-white p-4 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Parking</h3>
              <p className="text-gray-600">Ample parking available for all guests</p>
            </div>

            <div className="text-center">
              <div className="inline-block bg-[#C4A76E] text-white p-4 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safe & Clean</h3>
              <p className="text-gray-600">Enhanced sanitation protocols</p>
            </div>

            <div className="text-center">
              <div className="inline-block bg-[#C4A76E] text-white p-4 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WiFi Available</h3>
              <p className="text-gray-600">Complimentary high-speed internet</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <details className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition">
                What is your cancellation policy?
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                We require at least 24 hours notice to cancel or reschedule your appointment. Cancellations with less than 24 hours notice may be subject to a 50% cancellation fee.
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition">
                Do you require a deposit for bookings?
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                First-time clients are required to provide a credit card to hold their reservation. A 50% deposit may be charged for spa packages or couples treatments.
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition">
                What should I wear to my appointment?
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                We provide robes, slippers, and all necessary linens. For massages and body treatments, you'll undress to your comfort level and be properly draped throughout the service.
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition">
                Can I book multiple services in one visit?
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Absolutely! We encourage combining services for the ultimate spa experience. Our AI assistant or staff can help you create the perfect spa day itinerary.
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition">
                Do gift cards expire?
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                No! Our gift cards never expire and can be used for any service or product at Serenity Spa.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif text-[#C4A76E] mb-4">Serenity Spa</h3>
              <p className="text-gray-400">
                Hawaii's premier luxury spa destination for wellness and relaxation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/spa-demo/services" className="hover:text-[#C4A76E] transition">Services</Link></li>
                <li><Link href="/spa-demo/booking" className="hover:text-[#C4A76E] transition">Book Now</Link></li>
                <li><Link href="/spa-demo/gift-cards" className="hover:text-[#C4A76E] transition">Gift Cards</Link></li>
                <li><Link href="/spa-demo/contact" className="hover:text-[#C4A76E] transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 9am - 8pm</li>
                <li>Saturday: 9am - 6pm</li>
                <li>Sunday: 10am - 5pm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Spa Lane</li>
                <li>Honolulu, HI 96815</li>
                <li>(808) 555-0123</li>
                <li>info@serenityspa.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Serenity Spa. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Powered by <a href="https://pacific-pulse-growth-lab-production.up.railway.app" className="text-[#C4A76E] hover:underline">Pacific Pulse Growth Lab</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
