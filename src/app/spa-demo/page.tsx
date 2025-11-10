"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function SpaDemo() {
  const [email, setEmail] = useState('');

  const services = [
    {
      title: 'Luxury Facials',
      description: 'Rejuvenate your skin with our signature facial treatments',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
      price: 'From $85',
      duration: '60 min'
    },
    {
      title: 'Massage Therapy',
      description: 'Relax and unwind with our therapeutic massage services',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
      price: 'From $95',
      duration: '75 min'
    },
    {
      title: 'Body Treatments',
      description: 'Luxurious body wraps and exfoliating treatments',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      price: 'From $120',
      duration: '90 min'
    },
    {
      title: 'Waxing Services',
      description: 'Professional waxing services for smooth, beautiful skin',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=600&fit=crop',
      price: 'From $25',
      duration: '30 min'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The best spa experience I\'ve ever had! The staff is incredibly knowledgeable and the treatments are divine.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      text: 'I come here every month for my facial. My skin has never looked better! Highly recommend.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      text: 'A true oasis of relaxation. The atmosphere is perfect and the massage was exactly what I needed.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-serif text-[#C4A76E]">Serenity Spa</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/spa-demo" className="text-gray-700 hover:text-[#C4A76E] transition">Home</Link>
              <Link href="/spa-demo/services" className="text-gray-700 hover:text-[#C4A76E] transition">Services</Link>
              <Link href="/spa-demo/booking" className="text-gray-700 hover:text-[#C4A76E] transition">Book Now</Link>
              <Link href="/spa-demo/gift-cards" className="text-gray-700 hover:text-[#C4A76E] transition">Gift Cards</Link>
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

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=1080&fit=crop"
            alt="Luxury spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in">
            Welcome to Serenity
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Where luxury meets wellness. Experience Hawaii's premier spa destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/spa-demo/booking"
              className="bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl transition transform hover:scale-105"
            >
              Book Your Treatment
            </Link>
            <Link
              href="/spa-demo/gift-cards"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium border-2 border-white/50 hover:bg-white/30 transition"
            >
              Gift Cards
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Indulge in our carefully curated treatments designed to restore, rejuvenate, and refresh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-[#C4A76E] font-semibold">{service.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{service.duration}</span>
                    <Link
                      href="/spa-demo/booking"
                      className="text-[#C4A76E] hover:text-[#8B7355] font-medium"
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/spa-demo/services"
              className="inline-block bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* AI Chatbot Feature Highlight */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#C4A76E] to-[#8B7355] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Anytime, Anywhere</h2>
              <p className="text-xl mb-6 text-white/90">
                Our AI-powered chatbot is available 24/7 to help you book appointments,
                answer questions, and recommend the perfect treatment for your needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Instant appointment booking, even after hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Personalized treatment recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Answers to all your spa questions instantly</span>
                </li>
              </ul>
              <p className="text-lg italic">
                "The chatbot made booking so easy! I booked my appointment at 11pm
                and got confirmed within seconds." - Happy Customer
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
                alt="AI assistance"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="font-semibold mb-2">Try it now!</p>
                <p className="text-sm text-gray-600">
                  Click the chat button in the bottom right corner to experience our AI assistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#C4A76E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">First Visit Special</h2>
          <p className="text-2xl mb-8 text-gray-300">
            Save 20% on your first treatment
          </p>
          <p className="text-lg mb-8 text-gray-400">
            New clients receive 20% off any facial, massage, or body treatment.
            Book your appointment today and experience the Serenity difference.
          </p>
          <Link
            href="/spa-demo/booking"
            className="inline-block bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white px-12 py-4 rounded-full text-lg font-medium hover:shadow-2xl transition transform hover:scale-105"
          >
            Claim Your Discount
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Stay in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to receive exclusive offers, wellness tips, and spa updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-[#C4A76E] focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
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

      {/* AI Chatbot Widget - Load from your existing embed */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const iframe = document.createElement('iframe');
              iframe.src = 'https://pacific-pulse-growth-lab-production.up.railway.app/embed-chatbot.html';
              iframe.style.cssText = 'position:fixed;bottom:0;right:0;width:100%;height:100%;border:none;pointer-events:none;z-index:999999';
              iframe.id = 'pacific-pulse-chatbot-iframe';
              iframe.style.pointerEvents = 'none';
              iframe.addEventListener('load', function() {
                this.contentWindow.document.body.style.pointerEvents = 'auto';
              });
              document.body.appendChild(iframe);
            })();
          `
        }}
      />
    </div>
  );
}
