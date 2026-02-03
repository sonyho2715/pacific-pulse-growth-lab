"use client";

import Link from "next/link";
import Image from "next/image";

export default function SalonServicesPage() {
  const serviceCategories = [
    {
      name: "Haircuts & Styling",
      description: "Precision cuts and styling for every look",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop",
      services: [
        { name: "Women's Haircut & Style", price: "$65+", duration: "60 min", description: "Includes consultation, shampoo, cut, and blowout" },
        { name: "Men's Haircut", price: "$35+", duration: "30 min", description: "Classic or modern cuts tailored to your style" },
        { name: "Children's Cut (12 & under)", price: "$25+", duration: "20 min", description: "Patient styling for our youngest clients" },
        { name: "Bang Trim", price: "$15", duration: "15 min", description: "Quick touch-up between appointments" },
        { name: "Blowout", price: "$55+", duration: "45 min", description: "Shampoo and professional blowout styling" },
        { name: "Special Occasion Style", price: "$85+", duration: "60 min", description: "Updos, braids, and formal styling" },
      ],
    },
    {
      name: "Color Services",
      description: "From subtle to bold, we create your perfect color",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
      services: [
        { name: "Single Process Color", price: "$95+", duration: "90 min", description: "All-over color application" },
        { name: "Root Touch-Up", price: "$75+", duration: "60 min", description: "Color refresh for regrowth" },
        { name: "Partial Highlights", price: "$120+", duration: "2 hrs", description: "Face-framing or top highlights" },
        { name: "Full Highlights", price: "$180+", duration: "3 hrs", description: "Complete highlight transformation" },
        { name: "Balayage", price: "$220+", duration: "3-4 hrs", description: "Hand-painted, natural-looking highlights" },
        { name: "Color Correction", price: "Consultation", duration: "Varies", description: "Fixing previous color mishaps" },
        { name: "Vivid/Fashion Colors", price: "$200+", duration: "3+ hrs", description: "Bold, vibrant color transformations" },
        { name: "Gloss Treatment", price: "$45+", duration: "30 min", description: "Shine and tone enhancement" },
      ],
    },
    {
      name: "Treatments & Conditioning",
      description: "Restore and rejuvenate your hair health",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop",
      services: [
        { name: "Deep Conditioning", price: "$35+", duration: "20 min", description: "Intensive moisture treatment" },
        { name: "Keratin Treatment", price: "$300+", duration: "3 hrs", description: "Smoothing treatment for frizz-free hair" },
        { name: "Olaplex Treatment", price: "$50+", duration: "30 min", description: "Bond-building hair repair" },
        { name: "Scalp Treatment", price: "$45+", duration: "30 min", description: "Exfoliating and nourishing scalp care" },
        { name: "Hair Botox", price: "$200+", duration: "2 hrs", description: "Deep repair and shine restoration" },
      ],
    },
    {
      name: "Texture Services",
      description: "Permanent waves, relaxers, and texture transformation",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop",
      services: [
        { name: "Permanent Wave", price: "$150+", duration: "2-3 hrs", description: "Classic curls and waves" },
        { name: "Relaxer", price: "$120+", duration: "2 hrs", description: "Straightening treatment" },
        { name: "Relaxer Touch-Up", price: "$85+", duration: "90 min", description: "Regrowth treatment" },
        { name: "Brazilian Blowout", price: "$350+", duration: "3 hrs", description: "Smoothing treatment with shine" },
      ],
    },
    {
      name: "Barbering",
      description: "Classic and modern grooming for men",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop",
      services: [
        { name: "Classic Cut", price: "$35", duration: "30 min", description: "Traditional barbershop haircut" },
        { name: "Skin Fade", price: "$40", duration: "40 min", description: "Precision fade to skin" },
        { name: "Beard Trim", price: "$20", duration: "15 min", description: "Shape and detail beard" },
        { name: "Beard Design", price: "$30", duration: "30 min", description: "Custom beard shaping and styling" },
        { name: "Hot Towel Shave", price: "$35", duration: "30 min", description: "Classic straight razor shave" },
        { name: "Cut + Beard Combo", price: "$50", duration: "45 min", description: "Full haircut and beard service" },
      ],
    },
    {
      name: "Extensions",
      description: "Add length, volume, or both",
      image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=400&fit=crop",
      services: [
        { name: "Tape-In Extensions", price: "$400+", duration: "2 hrs", description: "Semi-permanent, natural look" },
        { name: "Sew-In Extensions", price: "$300+", duration: "3 hrs", description: "Braided weft method" },
        { name: "Clip-In Extensions", price: "$200+", duration: "1 hr", description: "Removable instant length" },
        { name: "Extension Maintenance", price: "$100+", duration: "1 hr", description: "Move-up and care" },
        { name: "Extension Removal", price: "$75+", duration: "1 hr", description: "Safe and gentle removal" },
      ],
    },
  ];

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
              <Link href="/salon-demo/services" className="text-rose-400 font-medium">Services</Link>
              <Link href="/salon-demo/team" className="text-neutral-400 font-medium hover:text-rose-400 transition">Team</Link>
              <Link href="/salon-demo/gallery" className="text-neutral-400 font-medium hover:text-rose-400 transition">Gallery</Link>
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
          <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Service Menu</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-6">Our Services</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            From classic cuts to bold transformations, our expert stylists deliver exceptional results every time.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {serviceCategories.map((category, index) => (
              <div key={index} id={category.name.toLowerCase().replace(/\s+/g, '-')}>
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-1">
                    <div className="sticky top-28">
                      <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h2 className="text-2xl font-black mb-2">{category.name}</h2>
                      <p className="text-neutral-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      {category.services.map((service, i) => (
                        <div
                          key={i}
                          className="bg-neutral-900 rounded-xl p-6 border border-white/5 hover:border-rose-500/30 transition"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold">{service.name}</h3>
                            <span className="text-rose-400 font-bold whitespace-nowrap ml-4">{service.price}</span>
                          </div>
                          <p className="text-neutral-400 text-sm mb-2">{service.description}</p>
                          <span className="text-neutral-500 text-xs">{service.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 px-4 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-8 text-center">Booking Policies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800 rounded-xl p-6 border border-white/5">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Cancellation Policy
              </h3>
              <p className="text-neutral-400 text-sm">
                Please provide at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 border border-white/5">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consultations
              </h3>
              <p className="text-neutral-400 text-sm">
                Complimentary consultations are available for color corrections, extensions, and major transformations.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 border border-white/5">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Payment
              </h3>
              <p className="text-neutral-400 text-sm">
                We accept all major credit cards, Apple Pay, and cash. Gratuity is not included in service prices.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 border border-white/5">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pricing
              </h3>
              <p className="text-neutral-400 text-sm">
                Prices may vary based on hair length, thickness, and complexity. Final pricing confirmed at consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Book?</h2>
          <p className="text-rose-100 mb-8">
            Schedule your appointment online or give us a call.
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
