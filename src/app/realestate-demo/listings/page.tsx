"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RealEstateListingsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Properties" },
    { id: "house", name: "Houses" },
    { id: "condo", name: "Condos" },
    { id: "luxury", name: "Luxury" },
  ];

  const listings = [
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
      type: "house",
      luxury: true,
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
      type: "condo",
      luxury: true,
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
      type: "house",
      luxury: false,
    },
    {
      id: 4,
      title: "Hawaii Kai Marina Home",
      address: "321 Marina Way, Hawaii Kai",
      price: "$1,295,000",
      beds: 4,
      baths: 2.5,
      sqft: "2,100",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      status: "Active",
      type: "house",
      luxury: false,
    },
    {
      id: 5,
      title: "Waikiki Luxury Condo",
      address: "888 Kalakaua Ave #3201, Waikiki",
      price: "$1,850,000",
      beds: 2,
      baths: 2,
      sqft: "1,650",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      status: "New Listing",
      type: "condo",
      luxury: true,
    },
    {
      id: 6,
      title: "Portlock Oceanfront Estate",
      address: "555 Portlock Road, Hawaii Kai",
      price: "$8,500,000",
      beds: 6,
      baths: 5,
      sqft: "6,500",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      status: "Exclusive",
      type: "house",
      luxury: true,
    },
    {
      id: 7,
      title: "Kailua Family Home",
      address: "444 Maunawili Road, Kailua",
      price: "$1,450,000",
      beds: 4,
      baths: 3,
      sqft: "2,300",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      status: "Active",
      type: "house",
      luxury: false,
    },
    {
      id: 8,
      title: "Ala Moana High-Rise",
      address: "1001 Kapiolani Blvd #1801, Honolulu",
      price: "$895,000",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      status: "Active",
      type: "condo",
      luxury: false,
    },
    {
      id: 9,
      title: "Black Point Estate",
      address: "789 Black Point Road, Kahala",
      price: "$12,000,000",
      beds: 7,
      baths: 6,
      sqft: "8,200",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      status: "Exclusive",
      type: "house",
      luxury: true,
    },
  ];

  const filteredListings = activeFilter === "all"
    ? listings
    : activeFilter === "luxury"
    ? listings.filter(l => l.luxury)
    : listings.filter(l => l.type === activeFilter);

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
              <Link href="/realestate-demo/listings" className="text-slate-800 font-medium">Listings</Link>
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
      <section className="pt-32 pb-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Browse Properties</span>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-800 mt-2 mb-4">Available Listings</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Explore our curated selection of exceptional properties across Oahu&apos;s most desirable neighborhoods.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded font-medium text-sm transition ${
                    activeFilter === filter.id
                      ? "bg-slate-800 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <div className="text-sm text-slate-500">
              {filteredListings.length} properties found
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="group cursor-pointer">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 text-xs font-bold rounded ${
                      listing.status === "Exclusive" ? "bg-slate-800 text-white" :
                      listing.status === "New Listing" ? "bg-amber-500 text-slate-900" :
                      listing.status === "Open House" ? "bg-emerald-500 text-white" :
                      "bg-white text-slate-800"
                    }`}>
                      {listing.status}
                    </span>
                    {listing.luxury && (
                      <span className="px-3 py-1 bg-amber-500/90 text-slate-900 text-xs font-bold rounded">
                        Luxury
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-2xl font-serif drop-shadow-lg">{listing.price}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-amber-600 transition mb-1">
                  {listing.title}
                </h3>
                <p className="text-slate-500 text-sm mb-3">{listing.address}</p>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {listing.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    {listing.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {listing.sqft} Sq Ft
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Don&apos;t See What You&apos;re Looking For?</h2>
          <p className="text-slate-300 mb-8">
            Many of my listings never hit the public market. Contact me for access to exclusive off-market properties.
          </p>
          <Link
            href="/realestate-demo/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded font-semibold hover:bg-amber-400 transition"
          >
            Contact Me for Exclusive Listings
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
