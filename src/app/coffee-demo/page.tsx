"use client";

import Link from "next/link";
import Image from "next/image";

export default function CoffeeDemoPage() {
  const featuredDrinks = [
    {
      name: "Kona Sunrise Latte",
      description: "Our signature drink with 100% Kona coffee, vanilla, and a hint of macadamia",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
      badge: "Signature",
    },
    {
      name: "Cold Brew Flight",
      description: "Sample three of our single-origin cold brews from around the world",
      price: "$9.00",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop",
      badge: "Popular",
    },
    {
      name: "Matcha Paradise",
      description: "Ceremonial grade matcha with oat milk and a touch of honey",
      price: "$5.75",
      image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop",
      badge: "New",
    },
  ];

  const locations = [
    { name: "Kailua", address: "123 Kailua Road", hours: "6am - 8pm" },
    { name: "Waikiki", address: "456 Kalakaua Ave", hours: "5am - 10pm" },
    { name: "Chinatown", address: "789 Hotel Street", hours: "7am - 6pm" },
  ];

  const testimonials = [
    {
      text: "Best coffee on the island, hands down. The Kona Sunrise is my daily ritual now.",
      author: "Jessica M.",
      location: "Kailua Regular",
    },
    {
      text: "Finally, a coffee shop that takes their craft seriously. The cold brew is unreal.",
      author: "David K.",
      location: "Coffee Enthusiast",
    },
    {
      text: "Love the vibe here. Great wifi, friendly staff, and the pastries are incredible.",
      author: "Sarah L.",
      location: "Remote Worker",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-xl border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/coffee-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.525.713-2.863T6.7 8.65V6q0-.825.588-1.413Q7.875 4 8.7 4h6.6q.825 0 1.413.587Q17.3 5.175 17.3 6v2.65q1.275 1.15 1.988 2.487Q20 12.475 20 14v3H4zm2-2h12v-1q0-1.875-1.062-3.438Q15.875 9 14.1 8.2V6H9.9v2.2q-1.775.8-2.838 2.362Q6 12.125 6 14v1z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-amber-900">KONA BREW</span>
                <span className="text-xs text-amber-700 block -mt-1 tracking-widest">COFFEE CO.</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/coffee-demo" className="text-amber-900 font-medium">Home</Link>
              <Link href="/coffee-demo/menu" className="text-stone-600 font-medium hover:text-amber-900 transition">Menu</Link>
              <Link href="/coffee-demo/locations" className="text-stone-600 font-medium hover:text-amber-900 transition">Locations</Link>
              <Link href="/coffee-demo/about" className="text-stone-600 font-medium hover:text-amber-900 transition">Our Story</Link>
              <Link href="/coffee-demo/contact" className="text-stone-600 font-medium hover:text-amber-900 transition">Contact</Link>
            </div>

            <Link
              href="/coffee-demo/menu"
              className="bg-amber-900 text-amber-50 px-6 py-2.5 rounded-full font-semibold hover:bg-amber-800 transition"
            >
              Order Online
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop"
          alt="Coffee shop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 via-amber-950/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-amber-100/20 backdrop-blur-sm border border-amber-200/30 rounded-full text-amber-100 text-sm font-medium mb-6">
              Locally Roasted in Hawaii
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Coffee Worth
              <span className="block text-amber-300">Waking Up For</span>
            </h1>
            <p className="text-xl text-amber-100/90 mb-8 leading-relaxed">
              From the slopes of Mauna Loa to your morning cup. We source, roast, and brew the finest Hawaiian coffee with aloha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/coffee-demo/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-amber-950 font-bold rounded-full hover:bg-amber-400 transition"
              >
                View Our Menu
              </Link>
              <Link
                href="/coffee-demo/locations"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition"
              >
                Find a Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-amber-900 text-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-300">100%</div>
              <div className="text-sm text-amber-200/80">Kona Coffee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-300">3</div>
              <div className="text-sm text-amber-200/80">Island Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-300">2015</div>
              <div className="text-sm text-amber-200/80">Est. Honolulu</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-300">50K+</div>
              <div className="text-sm text-amber-200/80">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-24 px-4 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Fan Favorites</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-2 mb-4">Must-Try Drinks</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Crafted with care, served with aloha. These are the drinks our regulars can&apos;t live without.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDrinks.map((drink, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-amber-950 text-xs font-bold rounded-full">
                      {drink.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-amber-900">{drink.name}</h3>
                    <span className="text-amber-700 font-bold">{drink.price}</span>
                  </div>
                  <p className="text-stone-600 text-sm">{drink.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/coffee-demo/menu"
              className="inline-flex items-center gap-2 text-amber-900 font-semibold hover:text-amber-700 transition"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=700&fit=crop"
                alt="Coffee roasting"
                width={600}
                height={700}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-900 text-amber-100 p-6 rounded-xl shadow-lg hidden lg:block">
                <div className="text-3xl font-bold">Since</div>
                <div className="text-amber-300 text-4xl font-bold">2015</div>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl font-bold text-amber-900 mt-2 mb-6">
                Rooted in Hawaii,
                <span className="block">Crafted with Love</span>
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                What started as a tiny roastery in Kailua has grown into Oahu&apos;s favorite coffee destination. We work directly with farmers on the Big Island, roast in small batches, and serve every cup with the aloha spirit that makes Hawaii special.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Our beans never sit on shelves. We roast fresh daily, ensuring you taste coffee at its peak. It&apos;s the kind of quality you can only get from people who truly love what they do.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-amber-900">100%</div>
                  <div className="text-xs text-stone-500">Hawaiian Beans</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-amber-900">Daily</div>
                  <div className="text-xs text-stone-500">Fresh Roasted</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-amber-900">Direct</div>
                  <div className="text-xs text-stone-500">Farm Trade</div>
                </div>
              </div>

              <Link
                href="/coffee-demo/about"
                className="inline-flex items-center gap-2 bg-amber-900 text-amber-50 px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition"
              >
                Read Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-24 px-4 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Visit Us</span>
            <h2 className="text-4xl font-bold text-amber-900 mt-2 mb-4">Find Your Local Brew</h2>
            <p className="text-stone-600">Three locations across Oahu, each with its own unique vibe.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Link
                key={index}
                href="/coffee-demo/locations"
                className="group bg-white p-8 rounded-2xl border border-amber-100 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition">
                  <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-1">{location.name}</h3>
                <p className="text-stone-600 text-sm mb-2">{location.address}</p>
                <p className="text-amber-700 text-sm font-medium">{location.hours}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/coffee-demo/locations"
              className="inline-flex items-center gap-2 text-amber-900 font-semibold hover:text-amber-700 transition"
            >
              View All Locations & Hours
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-amber-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-300 uppercase tracking-widest">Reviews</span>
            <h2 className="text-4xl font-bold text-white mt-2">What Our Regulars Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-amber-800/50 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-amber-100 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <span className="font-semibold text-white block">{testimonial.author}</span>
                  <span className="text-amber-300 text-sm">{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty CTA */}
      <section className="py-24 px-4 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-800 to-amber-950 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-700/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-600/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join the Brew Crew
              </h2>
              <p className="text-amber-200 mb-8 max-w-md mx-auto">
                Earn points on every purchase, get birthday rewards, and enjoy exclusive member perks. It&apos;s free to join.
              </p>
              <Link
                href="/coffee-demo/contact"
                className="inline-flex items-center gap-2 bg-amber-500 text-amber-950 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.525.713-2.863T6.7 8.65V6q0-.825.588-1.413Q7.875 4 8.7 4h6.6q.825 0 1.413.587Q17.3 5.175 17.3 6v2.65q1.275 1.15 1.988 2.487Q20 12.475 20 14v3H4zm2-2h12v-1q0-1.875-1.062-3.438Q15.875 9 14.1 8.2V6H9.9v2.2q-1.775.8-2.838 2.362Q6 12.125 6 14v1z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-bold text-amber-100">KONA BREW</span>
                  <span className="text-xs text-amber-400 block -mt-1">COFFEE CO.</span>
                </div>
              </div>
              <p className="text-amber-300/70 text-sm">
                Locally roasted, lovingly brewed. Hawaii&apos;s favorite coffee since 2015.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-amber-100 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-amber-300/70">
                <li><Link href="/coffee-demo/menu" className="hover:text-amber-300 transition">Menu</Link></li>
                <li><Link href="/coffee-demo/locations" className="hover:text-amber-300 transition">Locations</Link></li>
                <li><Link href="/coffee-demo/about" className="hover:text-amber-300 transition">Our Story</Link></li>
                <li><Link href="/coffee-demo/contact" className="hover:text-amber-300 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-amber-100 mb-4">Hours</h4>
              <ul className="space-y-2 text-sm text-amber-300/70">
                <li>Mon-Fri: 5am - 8pm</li>
                <li>Saturday: 6am - 8pm</li>
                <li>Sunday: 7am - 6pm</li>
                <li className="text-amber-400">Hours vary by location</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-amber-100 mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center text-amber-300 hover:bg-amber-700 hover:text-amber-100 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center text-amber-300 hover:bg-amber-700 hover:text-amber-100 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center text-amber-300 hover:bg-amber-700 hover:text-amber-100 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 pt-8 text-center text-amber-400/60 text-sm">
            <p>&copy; 2026 Kona Brew Coffee Co. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
