"use client";

import Link from "next/link";
import Image from "next/image";

export default function RealEstateNeighborhoodsPage() {
  const neighborhoods = [
    {
      name: "Kahala",
      tagline: "Oahu's Most Prestigious Address",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      description: "Home to some of Hawaii's most exclusive estates, Kahala offers quiet tree-lined streets, pristine beaches, and proximity to world-class dining at the Kahala Hotel. This established neighborhood attracts those seeking privacy, space, and sophistication.",
      stats: { avgPrice: "$3.2M", listings: 24, avgSqft: "3,800" },
      highlights: ["Private Beach Access", "Top-Rated Schools", "Luxury Estates", "Golf Course Adjacent"],
    },
    {
      name: "Kailua",
      tagline: "Beach Town Living at Its Finest",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      description: "Consistently rated one of America's best beaches, Kailua offers the perfect blend of small-town charm and outdoor lifestyle. From waterfront estates to family-friendly neighborhoods, Kailua has something for everyone who dreams of beach living.",
      stats: { avgPrice: "$1.8M", listings: 31, avgSqft: "2,400" },
      highlights: ["World-Famous Beach", "Kayaking & Paddleboarding", "Vibrant Town Center", "Family-Friendly"],
    },
    {
      name: "Hawaii Kai",
      tagline: "Marina Living with Mountain Views",
      image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&h=600&fit=crop",
      description: "East Oahu's master-planned community offers incredible value with marina homes, golf courses, and stunning Koko Head views. Perfect for families and outdoor enthusiasts who want space, amenities, and easy access to Hanauma Bay.",
      stats: { avgPrice: "$1.1M", listings: 18, avgSqft: "2,100" },
      highlights: ["Marina Community", "Multiple Golf Courses", "Near Hanauma Bay", "Great Value"],
    },
    {
      name: "Diamond Head",
      tagline: "Iconic Views, Timeless Elegance",
      image: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?w=800&h=600&fit=crop",
      description: "Living in the shadow of Hawaii's most recognizable landmark means waking up to spectacular views every day. This sought-after neighborhood offers a mix of luxury condos and historic homes just minutes from Waikiki.",
      stats: { avgPrice: "$2.4M", listings: 12, avgSqft: "2,200" },
      highlights: ["Iconic Views", "Near Kapiolani Park", "Historic Homes", "Walking Distance to Waikiki"],
    },
    {
      name: "Lanikai",
      tagline: "Paradise Found",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      description: "Often called Hawaii's most beautiful beach, Lanikai is an ultra-exclusive enclave of beachfront estates and hillside homes with breathtaking Mokulua Islands views. Properties here rarely come to market and command premium prices.",
      stats: { avgPrice: "$4.5M", listings: 6, avgSqft: "3,200" },
      highlights: ["Pristine Beach", "Mokulua Islands Views", "Ultra-Exclusive", "Limited Inventory"],
    },
    {
      name: "Portlock",
      tagline: "Oceanfront Grandeur",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      description: "Hawaii Kai's most prestigious pocket, Portlock features dramatic oceanfront estates perched on lava rock cliffs. These architectural masterpieces offer unparalleled privacy, swimming pools, and direct ocean access.",
      stats: { avgPrice: "$6.8M", listings: 4, avgSqft: "5,500" },
      highlights: ["Oceanfront Estates", "Private Ocean Access", "Gated Properties", "Architectural Gems"],
    },
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
              <Link href="/realestate-demo" className="text-slate-500 font-medium hover:text-slate-800 transition">Home</Link>
              <Link href="/realestate-demo/listings" className="text-slate-500 font-medium hover:text-slate-800 transition">Listings</Link>
              <Link href="/realestate-demo/neighborhoods" className="text-slate-800 font-medium">Neighborhoods</Link>
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
      <section className="pt-32 pb-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Area Guides</span>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-800 mt-2 mb-4">Explore Neighborhoods</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            From beachfront luxury to family-friendly communities, discover the unique character of Oahu&apos;s most desirable areas.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {neighborhoods.map((hood, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-80 lg:h-[450px] rounded-lg overflow-hidden">
                    <Image
                      src={hood.image}
                      alt={hood.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="text-amber-400 text-sm font-medium">{hood.tagline}</span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl font-serif text-slate-800 mb-4">{hood.name}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{hood.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-50 p-4 rounded">
                      <div className="text-xl font-serif text-amber-600">{hood.stats.avgPrice}</div>
                      <div className="text-xs text-slate-500 uppercase">Avg. Price</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded">
                      <div className="text-xl font-serif text-amber-600">{hood.stats.listings}</div>
                      <div className="text-xs text-slate-500 uppercase">Active Listings</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded">
                      <div className="text-xl font-serif text-amber-600">{hood.stats.avgSqft}</div>
                      <div className="text-xs text-slate-500 uppercase">Avg. Sq Ft</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {hood.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-amber-50 text-amber-800 text-sm rounded border border-amber-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/realestate-demo/listings"
                    className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition"
                  >
                    View {hood.name} Listings
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-slate-800 mb-4">Not Sure Which Neighborhood Is Right for You?</h2>
          <p className="text-slate-600 mb-8">
            Let&apos;s talk about your lifestyle, priorities, and budget. I&apos;ll help you find the perfect match.
          </p>
          <Link
            href="/realestate-demo/contact"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded font-medium hover:bg-slate-700 transition"
          >
            Schedule a Neighborhood Tour
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <div className="text-2xl font-serif mb-4">
            <span className="text-white">MALIA</span>
            <span className="text-amber-500">REALTY</span>
          </div>
          <p>&copy; 2026 Malia Realty. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
