"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SalonGalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All" },
    { id: "color", name: "Color" },
    { id: "cuts", name: "Cuts" },
    { id: "balayage", name: "Balayage" },
    { id: "mens", name: "Men's" },
    { id: "bridal", name: "Bridal" },
  ];

  const galleryItems = [
    { image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop", category: "color", stylist: "Maya Chen" },
    { image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop", category: "balayage", stylist: "Maya Chen" },
    { image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=600&fit=crop", category: "cuts", stylist: "Alex Rivera" },
    { image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop", category: "color", stylist: "Jordan Kim" },
    { image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=600&fit=crop", category: "mens", stylist: "Marcus Taylor" },
    { image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop", category: "cuts", stylist: "Sophie Lee" },
    { image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop", category: "balayage", stylist: "Maya Chen" },
    { image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop", category: "mens", stylist: "Marcus Taylor" },
    { image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop", category: "color", stylist: "Jordan Kim" },
    { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop", category: "mens", stylist: "Alex Rivera" },
    { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop", category: "cuts", stylist: "Alex Rivera" },
    { image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop", category: "bridal", stylist: "Sophie Lee" },
    { image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop", category: "mens", stylist: "Marcus Taylor" },
    { image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop", category: "balayage", stylist: "Maya Chen" },
    { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop", category: "cuts", stylist: "Jake Williams" },
    { image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=600&fit=crop", category: "color", stylist: "Jordan Kim" },
    { image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop", category: "bridal", stylist: "Sophie Lee" },
    { image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop", category: "balayage", stylist: "Maya Chen" },
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/salon-demo" className="flex items-center gap-3">
              <div className="text-2xl font-black tracking-tighter">
                <span className="text-rose-400">LUXE</span>
                <span className="text-white">SALON</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/salon-demo" className="text-neutral-400 font-medium hover:text-rose-400 transition">Home</Link>
              <Link href="/salon-demo/services" className="text-neutral-400 font-medium hover:text-rose-400 transition">Services</Link>
              <Link href="/salon-demo/team" className="text-neutral-400 font-medium hover:text-rose-400 transition">Team</Link>
              <Link href="/salon-demo/gallery" className="text-rose-400 font-medium">Gallery</Link>
              <Link href="/salon-demo/contact" className="text-neutral-400 font-medium hover:text-rose-400 transition">Contact</Link>
            </div>

            <Link
              href="/salon-demo/contact"
              className="bg-rose-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-rose-400 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-6">Style Gallery</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Browse our portfolio of transformations and get inspired for your next look.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-neutral-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto gap-2 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  activeFilter === filter.id
                    ? "bg-rose-500 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src={item.image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/60 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <p className="text-white font-bold">{item.stylist}</p>
                    <p className="text-rose-400 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-4 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-rose-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-4">Follow Us on Instagram</h2>
          <p className="text-neutral-400 mb-8">
            See more of our daily work and behind-the-scenes content.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-rose-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition"
          >
            @luxesalon_hi
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Love What You See?</h2>
          <p className="text-rose-100 mb-8">
            Book your appointment and let us create your perfect look.
          </p>
          <Link
            href="/salon-demo/contact"
            className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-8 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-neutral-500 text-sm">
          <p>&copy; 2026 Luxe Salon. Demo by <Link href="/" className="text-rose-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
