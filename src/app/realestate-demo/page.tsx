"use client";

import Link from "next/link";
import Image from "next/image";

export default function RealEstateDemoPage() {
  const featuredListings = [
    {
      id: 1,
      title: "Modern Oceanfront Villa",
      address: "123 Kahala Avenue, Kahala",
      price: "$4,850,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      status: "New Listing",
    },
    {
      id: 2,
      title: "Diamond Head Penthouse",
      address: "456 Gold Coast Drive, Waikiki",
      price: "$2,950,000",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      status: "Open House",
    },
    {
      id: 3,
      title: "Kailua Beach Cottage",
      address: "789 Lanikai Loop, Kailua",
      price: "$1,750,000",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      status: "Price Reduced",
    },
  ];

  const neighborhoods = [
    { name: "Kahala", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", listings: 24 },
    { name: "Kailua", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop", listings: 31 },
    { name: "Hawaii Kai", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&h=300&fit=crop", listings: 18 },
    { name: "Diamond Head", image: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?w=400&h=300&fit=crop", listings: 12 },
  ];

  const testimonials = [
    {
      text: "Malia made our first home purchase seamless. Her knowledge of the Kailua market was invaluable, and she negotiated a price well below asking.",
      author: "Sarah & James K.",
      detail: "Purchased in Kailua",
    },
    {
      text: "We've worked with Malia on three transactions now. She's not just our realtor, she's family. Her integrity and expertise are unmatched.",
      author: "The Chen Family",
      detail: "Repeat Clients",
    },
    {
      text: "Sold our home in 5 days for over asking price. Malia's marketing strategy and staging advice made all the difference.",
      author: "Michael T.",
      detail: "Sold in Kahala",
    },
  ];

  const stats = [
    { value: "$150M+", label: "In Sales Volume" },
    { value: "200+", label: "Homes Sold" },
    { value: "15", label: "Years Experience" },
    { value: "#1", label: "In East Oahu" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/realestate-demo" className="flex items-center gap-2">
              <div className="text-2xl font-serif">
                <span className="text-slate-800">MALIA</span>
                <span className="text-amber-600">REALTY</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/realestate-demo" className="text-slate-800 font-medium">Home</Link>
              <Link href="/realestate-demo/listings" className="text-slate-500 font-medium hover:text-slate-800 transition">Listings</Link>
              <Link href="/realestate-demo/neighborhoods" className="text-slate-500 font-medium hover:text-slate-800 transition">Neighborhoods</Link>
              <Link href="/realestate-demo/about" className="text-slate-500 font-medium hover:text-slate-800 transition">About</Link>
              <Link href="/realestate-demo/contact" className="text-slate-500 font-medium hover:text-slate-800 transition">Contact</Link>
            </div>

            <Link
              href="/realestate-demo/contact"
              className="bg-slate-800 text-white px-6 py-2.5 rounded font-medium hover:bg-slate-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
          alt="Luxury home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded text-amber-400 text-sm font-medium mb-6">
              Hawaii&apos;s Premier Luxury Real Estate
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Find Your Place in
              <span className="block text-amber-400">Paradise</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              With over 15 years of experience and $150M+ in sales, I help buyers and sellers navigate Oahu&apos;s luxury real estate market with confidence.
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-lg p-2 flex flex-col sm:flex-row gap-2 shadow-xl">
              <select className="flex-1 px-4 py-3 rounded bg-slate-50 text-slate-800 border-0 focus:ring-2 focus:ring-amber-500">
                <option>Buy</option>
                <option>Rent</option>
                <option>Sell</option>
              </select>
              <select className="flex-1 px-4 py-3 rounded bg-slate-50 text-slate-800 border-0 focus:ring-2 focus:ring-amber-500">
                <option>All Neighborhoods</option>
                <option>Kahala</option>
                <option>Kailua</option>
                <option>Hawaii Kai</option>
                <option>Diamond Head</option>
              </select>
              <select className="flex-1 px-4 py-3 rounded bg-slate-50 text-slate-800 border-0 focus:ring-2 focus:ring-amber-500">
                <option>Any Price</option>
                <option>$500K - $1M</option>
                <option>$1M - $2M</option>
                <option>$2M - $5M</option>
                <option>$5M+</option>
              </select>
              <Link
                href="/realestate-demo/listings"
                className="bg-amber-500 text-slate-900 px-8 py-3 rounded font-semibold hover:bg-amber-400 transition whitespace-nowrap"
              >
                Search Homes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-amber-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Featured Properties</span>
              <h2 className="text-4xl font-serif text-slate-800 mt-2">Exceptional Homes</h2>
            </div>
            <Link
              href="/realestate-demo/listings"
              className="mt-4 md:mt-0 text-slate-600 font-medium hover:text-amber-600 transition inline-flex items-center gap-2"
            >
              View All Listings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Link
                key={listing.id}
                href="/realestate-demo/listings"
                className="group"
              >
                <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded">
                      {listing.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white text-2xl font-serif">{listing.price}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-amber-600 transition">
                  {listing.title}
                </h3>
                <p className="text-slate-500 text-sm mb-3">{listing.address}</p>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span>{listing.beds} Beds</span>
                  <span>•</span>
                  <span>{listing.baths} Baths</span>
                  <span>•</span>
                  <span>{listing.sqft} Sq Ft</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                alt="Malia - Real Estate Agent"
                width={600}
                height={700}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-slate-900 p-6 rounded-lg shadow-lg hidden lg:block">
                <div className="text-3xl font-serif font-bold">#1</div>
                <div className="text-sm">East Oahu Agent</div>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Meet Your Agent</span>
              <h2 className="text-4xl font-serif text-slate-800 mt-2 mb-6">
                Malia Nakamura
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Born and raised on Oahu, I bring a deep understanding of Hawaii&apos;s unique real estate market and a genuine love for helping families find their perfect home. With over 15 years of experience and a background in architecture, I offer clients a distinctive perspective on property value and potential.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you&apos;re searching for an oceanfront estate, a family home in Kailua, or looking to sell your property for top dollar, I provide the expertise, market knowledge, and personalized service you deserve.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded border border-slate-200">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-slate-700">Top Producer 2020-2024</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded border border-slate-200">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-slate-700">Certified Luxury Specialist</span>
                </div>
              </div>

              <Link
                href="/realestate-demo/about"
                className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded font-medium hover:bg-slate-700 transition"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Explore</span>
            <h2 className="text-4xl font-serif text-slate-800 mt-2">Popular Neighborhoods</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {neighborhoods.map((hood, index) => (
              <Link
                key={index}
                href="/realestate-demo/neighborhoods"
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={hood.image}
                  alt={hood.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-serif text-white mb-1">{hood.name}</h3>
                  <p className="text-slate-300 text-sm">{hood.listings} Active Listings</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/realestate-demo/neighborhoods"
              className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-amber-600 transition"
            >
              View All Neighborhoods
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-amber-400 uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl font-serif text-white mt-2">Client Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <span className="text-white font-semibold block">{testimonial.author}</span>
                  <span className="text-amber-400 text-sm">{testimonial.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-10 md:p-16 text-center border border-slate-200">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-4">
              Ready to Make Your Move?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Whether you&apos;re buying, selling, or just curious about the market, I&apos;m here to help. Let&apos;s start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/realestate-demo/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white font-medium rounded hover:bg-slate-700 transition"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/realestate-demo/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 font-medium rounded hover:bg-amber-400 transition"
              >
                Get a Home Valuation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-serif mb-4">
                <span className="text-white">MALIA</span>
                <span className="text-amber-500">REALTY</span>
              </div>
              <p className="text-slate-400 text-sm">
                Hawaii&apos;s premier luxury real estate specialist. Helping families find their place in paradise since 2009.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/realestate-demo/listings" className="hover:text-amber-400 transition">All Listings</Link></li>
                <li><Link href="/realestate-demo/neighborhoods" className="hover:text-amber-400 transition">Neighborhoods</Link></li>
                <li><Link href="/realestate-demo/about" className="hover:text-amber-400 transition">About Malia</Link></li>
                <li><Link href="/realestate-demo/contact" className="hover:text-amber-400 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>(808) 555-SOLD</li>
                <li>malia@maliarealty.com</li>
                <li>123 Beachfront Plaza</li>
                <li>Honolulu, HI 96815</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Follow Along</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:bg-slate-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:bg-slate-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:bg-slate-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2026 Malia Realty. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
            <p className="mt-2 md:mt-0">License #RS-12345 | Equal Housing Opportunity</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
