"use client";

import Link from "next/link";
import Image from "next/image";

export default function RestaurantDemoPage() {
  const featuredDishes = [
    {
      name: "Grilled Mahi Mahi",
      description: "Fresh catch with mango salsa, coconut rice, and seasonal vegetables",
      price: "$34",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop",
      tag: "Chef's Pick",
    },
    {
      name: "Kalua Pork Tacos",
      description: "Slow-roasted pork, pineapple slaw, chipotle aioli on house tortillas",
      price: "$18",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
      tag: "Popular",
    },
    {
      name: "Ahi Poke Bowl",
      description: "Sushi-grade tuna, avocado, edamame, seaweed salad, spicy mayo",
      price: "$24",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
      tag: "Signature",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer K.",
      text: "The best dining experience in Honolulu! The sunset views paired with incredible food made our anniversary unforgettable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "Marcus T.",
      text: "We've tried every restaurant on the island, and Sunset Shores is our favorite. The Mahi Mahi is perfection.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Lisa & David M.",
      text: "From the warm aloha greeting to the last bite of dessert, everything was exceptional. Already planning our next visit!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
  ];

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
              <Link href="/restaurant-demo" className="text-amber-400 font-medium">Home</Link>
              <Link href="/restaurant-demo/menu" className="text-stone-300 font-medium hover:text-amber-400 transition">Menu</Link>
              <Link href="/restaurant-demo/about" className="text-stone-300 font-medium hover:text-amber-400 transition">About</Link>
              <Link href="/restaurant-demo/contact" className="text-stone-300 font-medium hover:text-amber-400 transition">Contact</Link>
            </div>

            <Link
              href="/restaurant-demo/reservations"
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-amber-500/25 transition"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop"
          alt="Restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-2 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-sm font-semibold mb-6">
            ✦ Award-Winning Hawaiian Cuisine ✦
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Where Ocean Meets
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
              Island Flavors
            </span>
          </h1>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Experience the taste of Hawaii with locally-sourced ingredients, stunning sunset views, and the warmth of aloha in every dish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/restaurant-demo/reservations"
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/restaurant-demo/menu"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-stone-900 py-8 border-y border-amber-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400">15+</div>
              <div className="text-stone-400 text-sm">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">4.9★</div>
              <div className="text-stone-400 text-sm">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">50K+</div>
              <div className="text-stone-400 text-sm">Happy Guests</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">#1</div>
              <div className="text-stone-400 text-sm">TripAdvisor 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">From Our Kitchen</span>
            <h2 className="text-4xl font-serif font-bold mt-2 mb-4">Signature Dishes</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Crafted with passion using the freshest local ingredients, each dish tells a story of Hawaiian tradition and culinary innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                <div className="relative h-64">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-400 text-stone-900 text-xs font-bold rounded-full">
                      {dish.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{dish.name}</h3>
                    <span className="text-amber-600 font-bold text-lg">{dish.price}</span>
                  </div>
                  <p className="text-stone-600">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/restaurant-demo/menu"
              className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section className="py-20 px-4 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">The Experience</span>
              <h2 className="text-4xl font-serif font-bold mt-2 mb-6">
                Dine with the Best Views in Honolulu
              </h2>
              <p className="text-stone-300 mb-6 leading-relaxed">
                Perched on the waterfront with panoramic ocean views, Sunset Shores offers an unforgettable dining experience. Watch the sun dip below the horizon as you savor dishes that celebrate Hawaii&apos;s rich culinary heritage.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Oceanfront seating with sunset views</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Live Hawaiian music Thursday - Sunday</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Private dining rooms available</span>
                </li>
              </ul>
              <Link
                href="/restaurant-demo/reservations"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 px-6 py-3 rounded-full font-bold hover:shadow-lg transition"
              >
                Book Your Experience
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
                    alt="Restaurant ambiance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop"
                    alt="Bar area"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=400&fit=crop"
                    alt="Plated dish"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop"
                    alt="Sunset view"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Sunday Brunch Special
          </h2>
          <p className="text-amber-100 text-lg mb-6">
            Join us for our legendary Sunday brunch featuring unlimited mimosas, live music, and our famous island breakfast buffet.
          </p>
          <div className="text-white mb-8">
            <span className="text-5xl font-bold">$49</span>
            <span className="text-amber-200">/person</span>
          </div>
          <Link
            href="/restaurant-demo/reservations"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition"
          >
            Reserve for Sunday Brunch
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Guest Reviews</span>
            <h2 className="text-4xl font-serif font-bold mt-2">What Our Guests Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <span className="font-bold">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location Preview */}
      <section className="py-20 px-4 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Visit Us</span>
              <h2 className="text-4xl font-serif font-bold mt-2 mb-6">Hours & Location</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-stone-400">123 Oceanfront Drive<br />Honolulu, HI 96815</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <div className="text-stone-400 space-y-1">
                      <p>Lunch: 11:30 AM - 2:30 PM (Daily)</p>
                      <p>Dinner: 5:00 PM - 10:00 PM (Daily)</p>
                      <p>Sunday Brunch: 10:00 AM - 2:00 PM</p>
                      <p>Happy Hour: 4:00 PM - 6:00 PM (Mon-Fri)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Reservations</h3>
                    <p className="text-amber-400 font-bold text-xl">(808) 555-DINE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-80 lg:h-auto rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop"
                alt="Restaurant exterior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Link
                  href="/restaurant-demo/contact"
                  className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition"
                >
                  Get Directions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready for an Unforgettable Meal?</h2>
          <p className="text-stone-600 text-lg mb-8">
            Reserve your table today and experience the best of Hawaiian cuisine with stunning ocean views.
          </p>
          <Link
            href="/restaurant-demo/reservations"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition"
          >
            Make a Reservation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 px-4 border-t border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-serif font-bold text-white">SUNSET SHORES</span>
                </div>
              </div>
              <p className="text-stone-400 text-sm">
                Award-winning Hawaiian cuisine with stunning oceanfront views since 2009.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-stone-400">
                <li><Link href="/restaurant-demo/menu" className="hover:text-amber-400 transition">Menu</Link></li>
                <li><Link href="/restaurant-demo/reservations" className="hover:text-amber-400 transition">Reservations</Link></li>
                <li><Link href="/restaurant-demo/about" className="hover:text-amber-400 transition">Our Story</Link></li>
                <li><Link href="/restaurant-demo/contact" className="hover:text-amber-400 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>123 Oceanfront Drive</li>
                <li>Honolulu, HI 96815</li>
                <li className="text-amber-400">(808) 555-DINE</li>
                <li>info@sunsetshores.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
            <p>&copy; 2026 Sunset Shores Island Kitchen. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
