"use client";

import Link from "next/link";
import Image from "next/image";

export default function CoffeeLocationsPage() {
  const locations = [
    {
      name: "Kailua",
      tagline: "The Original",
      address: "123 Kailua Road",
      city: "Kailua, HI 96734",
      phone: "(808) 555-2015",
      hours: {
        weekday: "6:00 AM - 8:00 PM",
        saturday: "6:00 AM - 8:00 PM",
        sunday: "7:00 AM - 6:00 PM",
      },
      features: ["Drive-Thru", "Outdoor Seating", "WiFi", "Roastery Tours"],
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop",
      description: "Our flagship location where it all began. Features our full roastery with Saturday morning tours.",
      parking: "Free lot behind building",
    },
    {
      name: "Waikiki",
      tagline: "The Beach Escape",
      address: "456 Kalakaua Avenue",
      city: "Honolulu, HI 96815",
      phone: "(808) 555-2018",
      hours: {
        weekday: "5:00 AM - 10:00 PM",
        saturday: "5:00 AM - 10:00 PM",
        sunday: "6:00 AM - 9:00 PM",
      },
      features: ["Ocean Views", "Extended Hours", "Full Kitchen", "WiFi"],
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
      description: "Early morning surfer specials and late-night study sessions. Our largest location with a full food menu.",
      parking: "Validated parking at Royal Hawaiian Center",
    },
    {
      name: "Chinatown",
      tagline: "The Urban Hub",
      address: "789 Hotel Street",
      city: "Honolulu, HI 96813",
      phone: "(808) 555-2020",
      hours: {
        weekday: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 5:00 PM",
        sunday: "8:00 AM - 4:00 PM",
      },
      features: ["Art Gallery", "Local Pastries", "WiFi", "Community Events"],
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
      description: "Nestled in the arts district, featuring rotating local art and collaborations with neighborhood bakeries.",
      parking: "Street parking or Harbor Court garage",
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
              <Link href="/coffee-demo" className="text-stone-600 font-medium hover:text-amber-900 transition">Home</Link>
              <Link href="/coffee-demo/menu" className="text-stone-600 font-medium hover:text-amber-900 transition">Menu</Link>
              <Link href="/coffee-demo/locations" className="text-amber-900 font-medium">Locations</Link>
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
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-amber-100 to-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Find Us</span>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mt-2 mb-4">Our Locations</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Three unique spots across Oahu, each with its own character. Come find your favorite brew spot.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 px-4 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-amber-900 text-amber-100 text-sm font-semibold rounded-full">
                        {location.tagline}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} bg-white rounded-2xl p-8 border border-amber-100`}>
                  <h2 className="text-3xl font-bold text-amber-900 mb-2">{location.name}</h2>
                  <p className="text-stone-600 mb-6">{location.description}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-amber-900">{location.address}</p>
                        <p className="text-stone-600 text-sm">{location.city}</p>
                        <p className="text-amber-700 text-sm mt-1">{location.parking}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <p className="text-stone-600"><span className="font-medium text-amber-900">Mon-Fri:</span> {location.hours.weekday}</p>
                        <p className="text-stone-600"><span className="font-medium text-amber-900">Saturday:</span> {location.hours.saturday}</p>
                        <p className="text-stone-600"><span className="font-medium text-amber-900">Sunday:</span> {location.hours.sunday}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-amber-900">{location.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {location.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-50 text-amber-800 text-sm font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-amber-900 text-amber-50 px-5 py-2.5 rounded-full font-semibold hover:bg-amber-800 transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Get Directions
                    </a>
                    <Link
                      href="/coffee-demo/menu"
                      className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-5 py-2.5 rounded-full font-semibold hover:bg-amber-200 transition"
                    >
                      Order Ahead
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Coming Soon</span>
          <h2 className="text-3xl font-bold text-amber-900 mt-2 mb-4">Kakaako - Summer 2026</h2>
          <p className="text-stone-600 max-w-xl mx-auto mb-8">
            Our fourth location is opening in the heart of Kakaako. Sign up to be the first to know when we open our doors.
          </p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-l-full border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
              <button className="bg-amber-900 text-amber-50 px-6 py-3 rounded-r-full font-semibold hover:bg-amber-800 transition">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-amber-400/60 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.525.713-2.863T6.7 8.65V6q0-.825.588-1.413Q7.875 4 8.7 4h6.6q.825 0 1.413.587Q17.3 5.175 17.3 6v2.65q1.275 1.15 1.988 2.487Q20 12.475 20 14v3H4zm2-2h12v-1q0-1.875-1.062-3.438Q15.875 9 14.1 8.2V6H9.9v2.2q-1.775.8-2.838 2.362Q6 12.125 6 14v1z"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-amber-100">KONA BREW COFFEE CO.</span>
          </div>
          <p>&copy; 2026 Kona Brew Coffee Co. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
