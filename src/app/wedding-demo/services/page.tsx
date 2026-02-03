"use client";

import Link from "next/link";
import Image from "next/image";

export default function WeddingServicesPage() {
  const packages = [
    {
      name: "Full Planning & Design",
      price: "From $8,000",
      description: "Our signature experience for couples who want every detail handled with care. From the moment you say 'yes' to the moment you say 'I do', we're by your side.",
      features: [
        "Unlimited planning meetings & communication",
        "Complete vendor sourcing & management",
        "Custom design concept & styling",
        "Budget creation & tracking",
        "Timeline & logistics management",
        "Wedding day coordination (10+ hours)",
        "Rehearsal coordination",
        "Guest management & RSVP tracking",
        "Hotel room blocks & transportation",
        "Welcome bags & signage design",
      ],
      popular: true,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    },
    {
      name: "Partial Planning",
      price: "From $4,500",
      description: "Perfect for couples who've started planning but need expert guidance to bring it all together beautifully.",
      features: [
        "Up to 8 planning meetings",
        "Vendor recommendations & bookings",
        "Design direction & styling",
        "Timeline creation",
        "Wedding day coordination (8 hours)",
        "Rehearsal coordination",
        "Vendor confirmation & management",
        "Day-of emergency kit",
      ],
      popular: false,
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop",
    },
    {
      name: "Day-of Coordination",
      price: "From $2,000",
      description: "For the organized couple who has everything planned but wants to relax and enjoy their day.",
      features: [
        "2 planning meetings",
        "Timeline creation & distribution",
        "Vendor confirmation (1 week prior)",
        "Rehearsal coordination",
        "Wedding day coordination (8 hours)",
        "Setup & breakdown oversight",
        "Day-of emergency kit",
        "Point of contact for vendors",
      ],
      popular: false,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
    },
  ];

  const addOns = [
    { name: "Destination Wedding Management", price: "+$2,500", description: "Additional coordination for out-of-state celebrations" },
    { name: "Rehearsal Dinner Planning", price: "+$1,500", description: "Full planning for your welcome celebration" },
    { name: "Welcome Party Coordination", price: "+$1,000", description: "Kick off the festivities with style" },
    { name: "Day-After Brunch", price: "+$800", description: "Send off your guests with aloha" },
    { name: "Honeymoon Planning", price: "+$500", description: "Let us plan your post-wedding adventure" },
    { name: "Additional Coordination Hours", price: "$150/hr", description: "Extended coverage for longer celebrations" },
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "We start with a complimentary call to understand your vision, style, and priorities.",
    },
    {
      step: 2,
      title: "Proposal",
      description: "We'll create a custom proposal tailored to your specific needs and budget.",
    },
    {
      step: 3,
      title: "Planning",
      description: "Once you're on board, we dive into creating your dream celebration.",
    },
    {
      step: 4,
      title: "Celebration",
      description: "Relax and enjoy every moment while we handle the details.",
    },
  ];

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
              <Link href="/wedding-demo/services" className="text-rose-400 font-medium">Services</Link>
              <Link href="/wedding-demo/portfolio" className="text-stone-600 font-medium hover:text-rose-400 transition">Portfolio</Link>
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
          <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-2 mb-6">Planning Packages</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Every love story is unique. Choose the level of support that fits your needs, and let us handle the rest.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    {pkg.popular && (
                      <div className="absolute top-4 left-4 bg-rose-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <h2 className="text-3xl font-serif">{pkg.name}</h2>
                    <span className="text-rose-400 font-semibold text-xl">{pkg.price}</span>
                  </div>
                  <p className="text-stone-600 mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-stone-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/wedding-demo/contact"
                    className="inline-flex items-center gap-2 bg-rose-400 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-500 transition"
                  >
                    Inquire About {pkg.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 px-4 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Enhancements</span>
            <h2 className="text-4xl font-serif mt-2 mb-4">Add-On Services</h2>
            <p className="text-stone-600">
              Customize your package with these additional services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-stone-100 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{addon.name}</h3>
                  <span className="text-rose-400 font-semibold whitespace-nowrap ml-4">{addon.price}</span>
                </div>
                <p className="text-stone-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl font-serif mt-2 mb-4">Our Process</h2>
            <p className="text-stone-600">
              A simple, stress-free journey to your perfect day.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif text-rose-400">{step.step}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-stone-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 px-4 bg-rose-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Questions?</span>
            <h2 className="text-4xl font-serif mt-2 mb-4">Frequently Asked</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">How far in advance should we book?</h3>
              <p className="text-stone-600 text-sm">
                We recommend booking 12-18 months in advance for full planning, and 6-9 months for partial planning or day-of coordination. However, we can accommodate shorter timelines when available.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">Do you travel for destination weddings?</h3>
              <p className="text-stone-600 text-sm">
                While we specialize in Hawaii weddings, we do travel for destination celebrations. Additional travel fees apply for mainland and international weddings.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">What&apos;s included in the consultation?</h3>
              <p className="text-stone-600 text-sm">
                Our complimentary consultation is a 30-minute call where we learn about your vision, discuss your needs, and determine which package is the best fit. No pressure, just conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-4">Ready to Start Planning?</h2>
          <p className="text-stone-600 mb-8">
            Schedule your complimentary consultation and let&apos;s create something beautiful together.
          </p>
          <Link
            href="/wedding-demo/contact"
            className="inline-flex items-center gap-2 bg-rose-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-rose-500 transition"
          >
            Schedule Consultation
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
