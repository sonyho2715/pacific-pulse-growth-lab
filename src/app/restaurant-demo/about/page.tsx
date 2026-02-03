"use client";

import Link from "next/link";
import Image from "next/image";

export default function RestaurantAboutPage() {
  const team = [
    {
      name: "Chef Keoni Nakamura",
      title: "Executive Chef & Owner",
      bio: "Born and raised in Honolulu, Chef Keoni trained at the Culinary Institute of America before returning home to share his passion for Hawaiian cuisine. With 20 years of experience, he blends traditional island flavors with modern techniques.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop",
    },
    {
      name: "Maria Santos",
      title: "Head Pastry Chef",
      bio: "Maria brings 15 years of pastry expertise to Sunset Shores. Her creations honor Hawaiian ingredients like lilikoi, haupia, and macadamia nuts while pushing creative boundaries.",
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=500&fit=crop",
    },
    {
      name: "David Chen",
      title: "Sous Chef",
      bio: "David oversees daily kitchen operations and menu development. His background in Asian fusion brings unique perspectives to our seafood preparations.",
      image: "https://images.unsplash.com/photo-1583394293214-28ez4e40bcb6?w=400&h=500&fit=crop",
    },
    {
      name: "Emma Williams",
      title: "General Manager",
      bio: "With a decade in hospitality management, Emma ensures every guest receives the warm aloha spirit that defines Sunset Shores. She oversees service, events, and guest relations.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Locally Sourced",
      description: "We partner with local farmers, fishermen, and producers to bring the freshest ingredients to your plate while supporting our island community.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Made with Aloha",
      description: "Every dish is prepared with love and care. Our team treats each guest like ohana, creating an atmosphere of warmth and hospitality.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "Sustainable Practices",
      description: "From reef-safe seafood sourcing to composting programs, we&apos;re committed to protecting Hawaii&apos;s natural beauty for future generations.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Culinary Excellence",
      description: "Our award-winning kitchen combines classical techniques with island innovation, creating dishes that honor tradition while embracing creativity.",
    },
  ];

  const awards = [
    { year: "2024", award: "Best Restaurant in Honolulu", org: "Hawaii Magazine" },
    { year: "2023", award: "Excellence in Hospitality", org: "AAA Four Diamond" },
    { year: "2023", award: "Best Seafood Restaurant", org: "Honolulu Weekly" },
    { year: "2022", award: "Chef of the Year", org: "Hawaii Restaurant Association" },
    { year: "2022", award: "Travelers' Choice", org: "TripAdvisor" },
    { year: "2021", award: "Best Ocean View Dining", org: "Hawaii Tourism Authority" },
  ];

  const timeline = [
    {
      year: "2009",
      title: "The Beginning",
      description: "Chef Keoni opens Sunset Shores with a vision to celebrate Hawaiian cuisine in an unforgettable setting.",
    },
    {
      year: "2012",
      title: "First Recognition",
      description: "Awarded 'Best New Restaurant' by Honolulu Magazine, putting Sunset Shores on the culinary map.",
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Added oceanfront patio and private dining room, doubling our capacity to serve more guests.",
    },
    {
      year: "2018",
      title: "Farm Partnerships",
      description: "Launched direct partnerships with 15 local farms, ensuring the freshest ingredients daily.",
    },
    {
      year: "2021",
      title: "Sustainability Commitment",
      description: "Achieved Ocean Friendly Restaurant certification and implemented zero-waste kitchen practices.",
    },
    {
      year: "2024",
      title: "15 Years of Aloha",
      description: "Celebrating 15 years of serving the community with over 500,000 happy guests.",
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
              <Link href="/restaurant-demo" className="text-stone-300 font-medium hover:text-amber-400 transition">Home</Link>
              <Link href="/restaurant-demo/menu" className="text-stone-300 font-medium hover:text-amber-400 transition">Menu</Link>
              <Link href="/restaurant-demo/about" className="text-amber-400 font-medium">About</Link>
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
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=800&fit=crop"
          alt="Hawaiian sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
        <div className="relative z-10 text-center px-4">
          <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-6">
            A Taste of Aloha<br />Since 2009
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Where every meal is a celebration of Hawaii&apos;s rich culinary heritage and breathtaking natural beauty.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Our Journey</span>
              <h2 className="text-4xl font-serif font-bold mt-2 mb-6">
                From Dream to Reality
              </h2>
              <div className="prose prose-lg text-stone-600">
                <p>
                  Sunset Shores began with a simple dream: to create a place where the magic of Hawaii could be experienced through food. Chef Keoni Nakamura, after years of training on the mainland and abroad, returned home with a mission to honor the flavors of his childhood while pushing culinary boundaries.
                </p>
                <p>
                  What started as a small 40-seat restaurant has grown into one of Honolulu&apos;s most beloved dining destinations. But our commitment remains the same, serving exceptional food made with love, locally-sourced ingredients, and the true spirit of aloha.
                </p>
                <p>
                  Today, we&apos;re proud to have served over 500,000 guests and to be recognized as one of Hawaii&apos;s premier dining experiences. Yet every night, we approach service with the same passion and dedication as day one.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop"
                    alt="Chef cooking"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop"
                    alt="Food plating"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop"
                    alt="Restaurant interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300&fit=crop"
                    alt="Team gathering"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-4xl font-serif font-bold mt-2">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center mx-auto mb-4 text-amber-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-stone-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">15 Years of Excellence</span>
            <h2 className="text-4xl font-serif font-bold mt-2">Our Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-amber-200" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <span className="text-amber-600 font-bold">{item.year}</span>
                      <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>
                      <p className="text-stone-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-amber-100" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">The People Behind the Magic</span>
            <h2 className="text-4xl font-serif font-bold mt-2">Meet Our Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-amber-600 font-medium text-sm mb-3">{member.title}</p>
                  <p className="text-stone-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-4 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Recognition</span>
            <h2 className="text-4xl font-serif font-bold mt-2">Awards & Accolades</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-stone-800 rounded-xl p-6 border border-stone-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-amber-400 text-sm font-medium">{award.year}</p>
                    <h3 className="font-bold">{award.award}</h3>
                    <p className="text-stone-400 text-sm">{award.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Experience Our Story Firsthand
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Join us for a meal and become part of our continuing journey.
          </p>
          <Link
            href="/restaurant-demo/reservations"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition"
          >
            Make a Reservation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-8 px-4 border-t border-stone-800">
        <div className="max-w-7xl mx-auto text-center text-stone-500">
          <p>&copy; 2026 Sunset Shores Island Kitchen. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
