"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'facials', name: 'Facials' },
    { id: 'massage', name: 'Massage' },
    { id: 'body', name: 'Body Treatments' },
    { id: 'waxing', name: 'Waxing' },
    { id: 'packages', name: 'Packages' },
  ];

  const services = [
    {
      category: 'facials',
      title: 'Signature Hydrating Facial',
      description: 'Our most popular facial features deep cleansing, exfoliation, extraction, and a hydrating mask. Includes facial massage and LED light therapy.',
      duration: '60 min',
      price: 85,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
      benefits: ['Deep hydration', 'Improved skin texture', 'Reduced fine lines', 'Glowing complexion']
    },
    {
      category: 'facials',
      title: 'Anti-Aging Collagen Facial',
      description: 'Specialized treatment targeting fine lines, wrinkles, and loss of firmness. Features collagen-boosting serums and microcurrent therapy.',
      duration: '75 min',
      price: 125,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop',
      benefits: ['Reduces wrinkles', 'Firms skin', 'Boosts collagen', 'Lifts and tightens']
    },
    {
      category: 'facials',
      title: 'Acne Clearing Treatment',
      description: 'Deep pore cleansing facial designed for acne-prone skin. Includes extractions, salicylic acid peel, and high-frequency treatment.',
      duration: '60 min',
      price: 95,
      image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&h=600&fit=crop',
      benefits: ['Clears breakouts', 'Reduces oil', 'Minimizes pores', 'Prevents future acne']
    },
    {
      category: 'facials',
      title: 'Brightening Vitamin C Facial',
      description: 'Illuminate your complexion with this vitamin C-infused treatment. Perfect for dull, uneven skin tone and hyperpigmentation.',
      duration: '60 min',
      price: 110,
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=600&fit=crop',
      benefits: ['Brightens skin', 'Evens tone', 'Reduces dark spots', 'Antioxidant protection']
    },
    {
      category: 'massage',
      title: 'Swedish Massage',
      description: 'Classic relaxation massage with flowing strokes to ease tension and improve circulation. Perfect for stress relief.',
      duration: '60 min',
      price: 95,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
      benefits: ['Reduces stress', 'Eases muscle tension', 'Improves circulation', 'Promotes relaxation']
    },
    {
      category: 'massage',
      title: 'Deep Tissue Massage',
      description: 'Therapeutic massage targeting deep muscle layers. Ideal for chronic pain and muscle tension relief.',
      duration: '75 min',
      price: 115,
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=600&fit=crop',
      benefits: ['Relieves chronic pain', 'Breaks up scar tissue', 'Improves mobility', 'Reduces inflammation']
    },
    {
      category: 'massage',
      title: 'Hot Stone Massage',
      description: 'Heated basalt stones combined with massage to melt away tension and stress. Ultimate relaxation experience.',
      duration: '90 min',
      price: 135,
      image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&h=600&fit=crop',
      benefits: ['Deep relaxation', 'Melts muscle tension', 'Improves sleep', 'Detoxification']
    },
    {
      category: 'massage',
      title: 'Lomi Lomi Hawaiian Massage',
      description: 'Traditional Hawaiian massage using flowing, rhythmic movements that mimic ocean waves. Deeply spiritual and healing.',
      duration: '90 min',
      price: 145,
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=600&fit=crop',
      benefits: ['Spiritual healing', 'Full body relaxation', 'Energy flow', 'Cultural experience']
    },
    {
      category: 'body',
      title: 'Body Scrub & Wrap',
      description: 'Full body exfoliation followed by a nourishing body wrap. Leaves skin silky smooth and deeply moisturized.',
      duration: '75 min',
      price: 120,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      benefits: ['Exfoliates dead skin', 'Deep hydration', 'Silky smooth skin', 'Detoxification']
    },
    {
      category: 'body',
      title: 'Detox Seaweed Wrap',
      description: 'Mineral-rich seaweed wrap to detoxify, firm, and nourish the skin. Includes dry brushing and moisturizer application.',
      duration: '60 min',
      price: 105,
      image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&h=600&fit=crop',
      benefits: ['Detoxifies skin', 'Reduces cellulite', 'Firms and tones', 'Mineral infusion']
    },
    {
      category: 'waxing',
      title: 'Brazilian Wax',
      description: 'Professional Brazilian waxing service using high-quality wax for smooth results with minimal discomfort.',
      duration: '30 min',
      price: 65,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop',
      benefits: ['Long-lasting', 'Smooth results', 'Professional service', 'Premium wax']
    },
    {
      category: 'waxing',
      title: 'Full Legs Wax',
      description: 'Complete leg waxing from upper thighs to toes for silky smooth legs that last weeks.',
      duration: '45 min',
      price: 75,
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop',
      benefits: ['Smooth legs', '3-4 weeks results', 'Less regrowth', 'Soft skin']
    },
    {
      category: 'waxing',
      title: 'Eyebrow & Upper Lip',
      description: 'Quick and precise facial waxing to shape eyebrows and remove upper lip hair.',
      duration: '15 min',
      price: 25,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
      benefits: ['Defined brows', 'Smooth face', 'Quick service', 'Long-lasting']
    },
    {
      category: 'packages',
      title: 'Spa Day Package',
      description: 'Full day of pampering including 60-min massage, signature facial, body scrub, and lunch. The ultimate relaxation experience.',
      duration: '4 hours',
      price: 350,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
      benefits: ['Full day experience', 'Multiple treatments', 'Lunch included', 'Save $75']
    },
    {
      category: 'packages',
      title: 'Couples Retreat',
      description: 'Romantic experience for two including side-by-side massages, champagne, and chocolate-covered strawberries.',
      duration: '90 min',
      price: 320,
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=600&fit=crop',
      benefits: ['Romantic experience', 'Side-by-side', 'Champagne & treats', 'Private suite']
    },
    {
      category: 'packages',
      title: 'Bridal Package',
      description: 'Pre-wedding pampering including facial, body treatment, massage, and waxing. Look and feel your best on your big day.',
      duration: '3 hours',
      price: 425,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      benefits: ['Wedding ready', 'Multiple services', 'Glowing skin', 'Completely relaxed']
    },
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

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
              <Link href="/spa-demo/services" className="text-[#C4A76E] font-medium">Services</Link>
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

      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center text-white mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&h=600&fit=crop"
            alt="Spa services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Services</h1>
          <p className="text-xl">Discover the perfect treatment for you</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
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
                    <span className="text-[#C4A76E] font-bold">${service.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                    {categories.find(c => c.id === service.category)?.name}
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <svg className="w-4 h-4 text-[#C4A76E] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                    <Link
                      href="/spa-demo/booking"
                      className="bg-gradient-to-r from-[#C4A76E] to-[#8B7355] text-white px-6 py-2 rounded-full hover:shadow-lg transition font-medium"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#C4A76E] to-[#8B7355] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Not Sure Which Treatment is Right for You?</h2>
          <p className="text-xl mb-8">
            Our AI chatbot can help recommend the perfect treatment based on your needs and skin concerns.
          </p>
          <button
            onClick={() => {
              // This would trigger the chatbot to open
              alert('Chatbot would open here! (Already embedded on page)');
            }}
            className="bg-white text-[#C4A76E] px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl transition transform hover:scale-105"
          >
            Chat with Our AI Assistant
          </button>
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
