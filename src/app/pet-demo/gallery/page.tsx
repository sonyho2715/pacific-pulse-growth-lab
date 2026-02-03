"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PetGalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Pets", icon: "🐾" },
    { id: "dogs", name: "Dogs", icon: "🐕" },
    { id: "cats", name: "Cats", icon: "🐈" },
    { id: "before-after", name: "Before & After", icon: "✨" },
  ];

  const galleryItems = [
    { image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop", name: "Max", breed: "Golden Retriever", category: "dogs", service: "Full Groom" },
    { image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=600&fit=crop", name: "Bella", breed: "Labrador", category: "dogs", service: "Bath & Brush" },
    { image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop", name: "Luna", breed: "Tabby Cat", category: "cats", service: "Cat Grooming" },
    { image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop", name: "Charlie", breed: "Beagle Mix", category: "dogs", service: "Spa Day" },
    { image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop", name: "Mochi", breed: "Persian Cat", category: "cats", service: "Lion Cut" },
    { image: "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=600&h=600&fit=crop", name: "Cooper", breed: "Poodle", category: "dogs", service: "Creative Groom", beforeAfter: true },
    { image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=600&fit=crop", name: "Duke", breed: "Golden Retriever", category: "dogs", service: "De-Shedding" },
    { image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop", name: "Whiskers", breed: "Orange Tabby", category: "cats", service: "Bath & Nail Trim" },
    { image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop", name: "Rocky", breed: "Dalmatian", category: "dogs", service: "Full Groom" },
    { image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&h=600&fit=crop", name: "Daisy", breed: "Shih Tzu", category: "dogs", service: "Puppy Cut", beforeAfter: true },
    { image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&h=600&fit=crop", name: "Shadow", breed: "Black Cat", category: "cats", service: "Spa Treatment" },
    { image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=600&fit=crop", name: "Buddy", breed: "Labradoodle", category: "dogs", service: "Teddy Bear Cut", beforeAfter: true },
    { image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=600&fit=crop", name: "Mittens", breed: "Calico", category: "cats", service: "Full Groom" },
    { image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&h=600&fit=crop", name: "Sadie", breed: "Husky", category: "dogs", service: "De-Shedding", beforeAfter: true },
    { image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=600&h=600&fit=crop", name: "Coco", breed: "Pomeranian", category: "dogs", service: "Show Cut" },
    { image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&h=600&fit=crop", name: "Oliver", breed: "Maine Coon", category: "cats", service: "Lion Cut" },
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : activeFilter === "before-after"
    ? galleryItems.filter(item => item.beforeAfter)
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#fefdfb] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/pet-demo" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-2xl">🐾</span>
              </div>
              <div>
                <span className="text-xl font-bold text-teal-700">Happy Tails</span>
                <span className="text-xs text-teal-500 block">Pet Spa & Wellness</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/pet-demo" className="text-stone-600 font-medium hover:text-teal-600 transition">Home</Link>
              <Link href="/pet-demo/services" className="text-stone-600 font-medium hover:text-teal-600 transition">Services</Link>
              <Link href="/pet-demo/team" className="text-stone-600 font-medium hover:text-teal-600 transition">Our Team</Link>
              <Link href="/pet-demo/gallery" className="text-teal-700 font-medium">Gallery</Link>
              <Link href="/pet-demo/contact" className="text-stone-600 font-medium hover:text-teal-600 transition">Contact</Link>
            </div>

            <Link
              href="/pet-demo/contact"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-teal-50 to-[#fefdfb]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Gallery</span>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mt-2 mb-4">Our Happy Clients</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            See the adorable transformations and happy faces that walk (and wag) out of Happy Tails every day.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition ${
                  activeFilter === filter.id
                    ? "bg-teal-600 text-white"
                    : "bg-teal-50 text-teal-700 hover:bg-teal-100"
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 bg-[#fefdfb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-lg">{item.name}</h3>
                        <p className="text-teal-200 text-sm">{item.breed}</p>
                      </div>
                      {item.beforeAfter && (
                        <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                          B&A
                        </span>
                      )}
                    </div>
                    <p className="text-teal-300 text-xs mt-1">{item.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">🐾</span>
              <p className="text-stone-500">No pets found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-500 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">See More on Instagram</h2>
          <p className="text-teal-100 mb-8">
            Follow us for daily doses of cuteness, grooming tips, and behind-the-scenes fun.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition"
          >
            @happytailshi
          </a>
        </div>
      </section>

      {/* Share Your Pet */}
      <section className="py-16 px-4 bg-[#fefdfb]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Share Your Pet&apos;s Transformation!</h2>
          <p className="text-stone-600 mb-8">
            Tag us on Instagram with #HappyTailsHI for a chance to be featured in our gallery.
          </p>
          <Link
            href="/pet-demo/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-full hover:from-teal-600 hover:to-teal-700 transition shadow-lg"
          >
            Book Your Pet&apos;s Glow-Up
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-teal-400/60 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center">
              <span className="text-lg">🐾</span>
            </div>
            <span className="text-lg font-bold text-white">Happy Tails Pet Spa</span>
          </div>
          <p>&copy; 2026 Happy Tails Pet Spa. Demo by <Link href="/" className="text-teal-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
