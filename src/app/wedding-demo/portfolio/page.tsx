"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WeddingPortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Weddings" },
    { id: "beach", name: "Beach" },
    { id: "garden", name: "Garden" },
    { id: "estate", name: "Estate" },
    { id: "resort", name: "Resort" },
  ];

  const weddings = [
    {
      couple: "Sarah & James",
      venue: "Sunset Beach Resort",
      location: "North Shore, Oahu",
      category: "beach",
      featured: true,
      description: "An intimate sunset ceremony with tropical elegance. Sarah and James wanted their day to feel effortlessly romantic, with soft florals and candlelight against the ocean backdrop.",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=400&h=300&fit=crop",
      ],
      guestCount: 85,
      season: "Summer",
    },
    {
      couple: "Emily & Michael",
      venue: "Historic Plantation Estate",
      location: "Kualoa Ranch, Oahu",
      category: "estate",
      featured: true,
      description: "A grand celebration surrounded by Hawaii's majestic mountains. Emily and Michael dreamed of a wedding that honored tradition while embracing natural beauty.",
      images: [
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      ],
      guestCount: 150,
      season: "Fall",
    },
    {
      couple: "Jessica & David",
      venue: "Haiku Gardens",
      location: "Kaneohe, Oahu",
      category: "garden",
      featured: false,
      description: "A whimsical garden celebration filled with lush tropical flowers and intimate moments. The natural beauty of Haiku Gardens created a fairytale setting.",
      images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=300&fit=crop",
      ],
      guestCount: 75,
      season: "Spring",
    },
    {
      couple: "Amanda & Chris",
      venue: "Four Seasons Resort",
      location: "Ko Olina, Oahu",
      category: "resort",
      featured: true,
      description: "Luxurious elegance by the lagoon. Amanda and Chris wanted a celebration that combined world-class hospitality with the magic of Hawaii.",
      images: [
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      ],
      guestCount: 120,
      season: "Winter",
    },
    {
      couple: "Rachel & Tom",
      venue: "Lanikuhonua",
      location: "Ko Olina, Oahu",
      category: "beach",
      featured: false,
      description: "Cultural traditions met modern romance at this stunning oceanfront estate. Rachel and Tom incorporated meaningful Hawaiian customs into their celebration.",
      images: [
        "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      ],
      guestCount: 100,
      season: "Summer",
    },
    {
      couple: "Michelle & Kevin",
      venue: "Royal Hawaiian Hotel",
      location: "Waikiki, Oahu",
      category: "resort",
      featured: false,
      description: "Old Hawaii glamour at the iconic Pink Palace. Michelle and Kevin embraced the historic elegance of one of Waikiki's most beloved landmarks.",
      images: [
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=300&fit=crop",
      ],
      guestCount: 200,
      season: "Spring",
    },
    {
      couple: "Lisa & Brandon",
      venue: "Turtle Bay Resort",
      location: "North Shore, Oahu",
      category: "resort",
      featured: false,
      description: "Rustic elegance on the North Shore. Lisa and Brandon wanted a relaxed celebration that captured the laid-back spirit of surf culture.",
      images: [
        "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      ],
      guestCount: 90,
      season: "Fall",
    },
    {
      couple: "Megan & Jason",
      venue: "Kualoa Ranch",
      location: "Kaneohe, Oahu",
      category: "estate",
      featured: false,
      description: "Adventure meets romance at this legendary ranch. Megan and Jason's celebration featured stunning mountain backdrops and a touch of wild Hawaii.",
      images: [
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop",
      ],
      guestCount: 110,
      season: "Summer",
    },
  ];

  const filteredWeddings = activeFilter === "all"
    ? weddings
    : weddings.filter(w => w.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/wedding-demo" className="flex items-center gap-2">
              <span className="text-2xl font-serif italic text-stone-800">Aloha</span>
              <span className="text-2xl font-serif text-rose-400">Weddings</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/wedding-demo" className="text-stone-600 font-medium hover:text-rose-400 transition">Home</Link>
              <Link href="/wedding-demo/services" className="text-stone-600 font-medium hover:text-rose-400 transition">Services</Link>
              <Link href="/wedding-demo/portfolio" className="text-rose-400 font-medium">Portfolio</Link>
              <Link href="/wedding-demo/about" className="text-stone-600 font-medium hover:text-rose-400 transition">About</Link>
              <Link href="/wedding-demo/contact" className="text-stone-600 font-medium hover:text-rose-400 transition">Contact</Link>
            </div>

            <Link
              href="/wedding-demo/contact"
              className="bg-rose-400 text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-500 transition"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-rose-50 to-[#faf9f7]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Our Work</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-2 mb-6">Real Weddings</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Browse our collection of love stories brought to life across Hawaii&apos;s most beautiful venues.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
                  activeFilter === filter.id
                    ? "bg-rose-400 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {filteredWeddings.map((wedding, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="grid lg:grid-cols-2">
                  {/* Images */}
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="col-span-2">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <Image
                          src={wedding.images[0]}
                          alt={wedding.couple}
                          fill
                          className="object-cover"
                        />
                        {wedding.featured && (
                          <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={wedding.images[1]}
                        alt={`${wedding.couple} detail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={wedding.images[2]}
                        alt={`${wedding.couple} moment`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-rose-400 text-sm font-medium uppercase tracking-widest mb-2">
                      {wedding.category} Wedding
                    </span>
                    <h2 className="text-3xl font-serif mb-2">{wedding.couple}</h2>
                    <p className="text-stone-500 mb-4">{wedding.venue} • {wedding.location}</p>
                    <p className="text-stone-600 mb-6 leading-relaxed">{wedding.description}</p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="bg-stone-50 px-4 py-2 rounded-lg">
                        <span className="text-stone-500 text-xs block">Guests</span>
                        <span className="font-semibold">{wedding.guestCount}</span>
                      </div>
                      <div className="bg-stone-50 px-4 py-2 rounded-lg">
                        <span className="text-stone-500 text-xs block">Season</span>
                        <span className="font-semibold">{wedding.season}</span>
                      </div>
                      <div className="bg-stone-50 px-4 py-2 rounded-lg">
                        <span className="text-stone-500 text-xs block">Style</span>
                        <span className="font-semibold capitalize">{wedding.category}</span>
                      </div>
                    </div>

                    <Link
                      href="/wedding-demo/contact"
                      className="inline-flex items-center gap-2 text-rose-400 font-medium hover:text-rose-500 transition self-start"
                    >
                      Plan a Similar Wedding
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWeddings.length === 0 && (
            <div className="text-center py-16">
              <p className="text-stone-500">No weddings found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif text-rose-400">200+</div>
              <div className="text-stone-500 text-sm mt-1">Weddings Planned</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-rose-400">50+</div>
              <div className="text-stone-500 text-sm mt-1">Venues</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-rose-400">15</div>
              <div className="text-stone-500 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-rose-400">100%</div>
              <div className="text-stone-500 text-sm mt-1">Happy Couples</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=600&fit=crop"
          alt="Wedding florals"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-4">
            Your Story Could Be Next
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let us create your dream celebration in paradise.
          </p>
          <Link
            href="/wedding-demo/contact"
            className="inline-flex items-center gap-2 bg-rose-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-rose-500 transition"
          >
            Start Planning Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-stone-500 text-sm">
          <div className="mb-4">
            <span className="text-xl font-serif italic text-white">Aloha</span>
            <span className="text-xl font-serif text-rose-400"> Weddings</span>
          </div>
          <p>&copy; 2026 Aloha Weddings. Demo by <Link href="/" className="text-rose-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
