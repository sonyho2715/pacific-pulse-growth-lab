"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function GiftCards() {
  const [amount, setAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const presetAmounts = ['50', '100', '150', '250', 'custom'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = amount === 'custom' ? customAmount : amount;
    alert(`Gift card purchase initiated! (Demo mode)\nAmount: $${finalAmount}\nRecipient: ${recipientName}`);
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
              <Link href="/spa-demo/gift-cards" className="text-[#C4A76E] font-medium">Gift Cards</Link>
              <Link href="/spa-demo/contact" className="text-gray-700 hover:text-[#C4A76E] transition">Contact</Link>
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
      <div className="relative h-[50vh] flex items-center justify-center text-white mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1920&h=800&fit=crop"
            alt="Gift cards"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Gift the Experience of Serenity</h1>
          <p className="text-xl">The perfect gift for anyone who deserves to relax</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Gift Card Preview */}
            <div className="sticky top-24">
              <div className="relative">
                {/* Gift Card Design */}
                <div className="bg-gradient-to-br from-[#C4A76E] to-[#8B7355] rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition duration-300">
                  <div className="mb-8">
                    <h2 className="text-3xl font-serif mb-2">Serenity Spa</h2>
                    <p className="text-white/80">Gift Card</p>
                  </div>

                  <div className="mb-12">
                    <div className="text-5xl font-bold mb-2">
                      ${amount === 'custom' ? (customAmount || '0') : amount}
                    </div>
                    <p className="text-white/80">Gift Card Value</p>
                  </div>

                  <div className="border-t border-white/30 pt-6">
                    <p className="text-sm text-white/80">
                      {recipientName || 'Recipient Name'}<br />
                      {message || 'Your personal message will appear here'}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>

                <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Why Choose Our Gift Cards?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4A76E] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Never expires
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4A76E] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Instant digital delivery or physical card option
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4A76E] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Valid for all services
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4A76E] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Transferable to friends and family
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4A76E] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Beautiful presentation packaging
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Purchase Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-serif text-gray-900 mb-8">Purchase Gift Card</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">Select Amount</label>
                    <div className="grid grid-cols-3 gap-3">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setAmount(amt)}
                          className={`py-4 px-4 rounded-xl border-2 transition font-medium ${
                            amount === amt
                              ? 'border-[#C4A76E] bg-[#C4A76E] text-white'
                              : 'border-gray-200 hover:border-[#C4A76E] text-gray-700'
                          }`}
                        >
                          {amt === 'custom' ? 'Custom' : `$${amt}`}
                        </button>
                      ))}
                    </div>
                    {amount === 'custom' && (
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        min="25"
                        className="w-full mt-3 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                        required
                      />
                    )}
                  </div>

                  {/* Recipient Information */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Recipient Information</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Recipient Name</label>
                        <input
                          type="text"
                          value={recipientName}
                          onChange={(e) => setRecipientName(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Recipient Email</label>
                        <input
                          type="email"
                          value={recipientEmail}
                          onChange={(e) => setRecipientEmail(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                          required
                        />
                        <p className="text-sm text-gray-500 mt-1">Gift card will be sent to this email</p>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Personal Message (Optional)</label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                          maxLength={200}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                          placeholder="Add a personal message..."
                        />
                        <p className="text-sm text-gray-500 mt-1">{message.length}/200 characters</p>
                      </div>
                    </div>
                  </div>

                  {/* Sender Information */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Your Information</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#C4A76E] focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Option */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Delivery Method</h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#C4A76E] transition">
                        <input
                          type="radio"
                          name="delivery"
                          value="instant"
                          defaultChecked
                          className="w-5 h-5 text-[#C4A76E] mr-3"
                        />
                        <div>
                          <div className="font-medium text-gray-900">Instant Delivery (Free)</div>
                          <div className="text-sm text-gray-500">Digital card sent immediately via email</div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#C4A76E] transition">
                        <input
                          type="radio"
                          name="delivery"
                          value="physical"
                          className="w-5 h-5 text-[#C4A76E] mr-3"
                        />
                        <div>
                          <div className="font-medium text-gray-900">Physical Card (+$5)</div>
                          <div className="text-sm text-gray-500">Beautifully packaged physical card shipped to recipient</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-gray-50 rounded-xl p-6 border-t">
                    <div className="flex justify-between items-center text-2xl font-bold text-gray-900">
                      <span>Total:</span>
                      <span className="text-[#C4A76E]">${amount === 'custom' ? (customAmount || '0') : amount}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white py-4 rounded-full text-lg font-medium hover:shadow-xl transition"
                  >
                    Purchase Gift Card
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Secure payment processed by Stripe. Your information is safe and encrypted.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Packages Suggestion */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Popular Gift Card Amounts</h2>
            <p className="text-xl text-gray-600">Not sure how much to give? Here are our most popular options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-3xl font-bold text-[#C4A76E] mb-4">$100</div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">Facial Treatment</h3>
              <p className="text-gray-600">Perfect for a signature facial or massage</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-[#C4A76E] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C4A76E] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-3xl font-bold text-[#C4A76E] mb-4">$250</div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">Spa Package</h3>
              <p className="text-gray-600">Multiple treatments for the ultimate experience</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-3xl font-bold text-[#C4A76E] mb-4">$500</div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">VIP Experience</h3>
              <p className="text-gray-600">Full spa day with all the luxuries</p>
            </div>
          </div>
        </div>
      </section>

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
