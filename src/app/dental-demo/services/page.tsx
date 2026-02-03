"use client";

import Link from "next/link";
import Image from "next/image";

export default function DentalServicesPage() {
  const serviceCategories = [
    {
      category: "General Dentistry",
      description: "Preventive care and routine treatments to maintain your oral health",
      services: [
        {
          name: "Comprehensive Exam",
          description: "Thorough examination of teeth, gums, and oral tissue with digital X-rays",
          price: "$95",
          duration: "45 min",
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
        },
        {
          name: "Professional Cleaning",
          description: "Deep cleaning to remove plaque, tartar, and surface stains",
          price: "$125",
          duration: "60 min",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
        },
        {
          name: "Tooth-Colored Fillings",
          description: "Natural-looking composite fillings to repair cavities",
          price: "From $175",
          duration: "30-60 min",
          image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
        },
        {
          name: "Root Canal Therapy",
          description: "Save damaged teeth with gentle, modern root canal treatment",
          price: "From $800",
          duration: "90 min",
          image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      category: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic dental treatments",
      services: [
        {
          name: "Teeth Whitening",
          description: "Professional-grade whitening for a brighter, more confident smile",
          price: "$299",
          duration: "60 min",
          image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
        },
        {
          name: "Porcelain Veneers",
          description: "Custom-crafted veneers to reshape and perfect your teeth",
          price: "From $1,200/tooth",
          duration: "2 visits",
          image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop",
        },
        {
          name: "Dental Bonding",
          description: "Quick, affordable solution for chips, gaps, and discoloration",
          price: "From $300",
          duration: "45 min",
          image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&h=400&fit=crop",
        },
        {
          name: "Smile Makeover",
          description: "Comprehensive treatment plan to achieve your dream smile",
          price: "Custom quote",
          duration: "Consultation",
          image: "https://images.unsplash.com/photo-1581585829248-1b19085b7a61?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      category: "Restorative Dentistry",
      description: "Restore function and beauty to damaged or missing teeth",
      services: [
        {
          name: "Dental Implants",
          description: "Permanent tooth replacement that looks and feels natural",
          price: "From $3,500",
          duration: "Multiple visits",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
        },
        {
          name: "Dental Crowns",
          description: "Custom porcelain crowns to protect and strengthen teeth",
          price: "From $1,100",
          duration: "2 visits",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
        },
        {
          name: "Dental Bridges",
          description: "Replace missing teeth with natural-looking fixed bridges",
          price: "From $2,500",
          duration: "2 visits",
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
        },
        {
          name: "Dentures",
          description: "Full or partial dentures for a complete, confident smile",
          price: "From $1,500",
          duration: "3-4 visits",
          image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      category: "Orthodontics",
      description: "Straighten your teeth for improved function and aesthetics",
      services: [
        {
          name: "Invisalign",
          description: "Clear aligners for discreet, comfortable teeth straightening",
          price: "From $4,500",
          duration: "12-18 months",
          image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop",
        },
        {
          name: "Traditional Braces",
          description: "Effective orthodontic treatment for complex alignment issues",
          price: "From $3,500",
          duration: "18-24 months",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
        },
        {
          name: "Retainers",
          description: "Custom retainers to maintain your beautiful straight smile",
          price: "From $300",
          duration: "1 visit",
          image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      category: "Pediatric Dentistry",
      description: "Gentle, fun dental care designed specifically for children",
      services: [
        {
          name: "Child Exam & Cleaning",
          description: "Kid-friendly checkups in a welcoming, fun environment",
          price: "$75",
          duration: "30 min",
          image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=400&fit=crop",
        },
        {
          name: "Dental Sealants",
          description: "Protective coating to prevent cavities on back teeth",
          price: "$45/tooth",
          duration: "15 min",
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
        },
        {
          name: "Fluoride Treatment",
          description: "Strengthen enamel and protect against decay",
          price: "$35",
          duration: "10 min",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      category: "Emergency Dentistry",
      description: "Urgent care for dental emergencies when you need it most",
      services: [
        {
          name: "Same-Day Emergency Exam",
          description: "Rapid assessment and pain relief for dental emergencies",
          price: "$150",
          duration: "As needed",
          image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
        },
        {
          name: "Emergency Extraction",
          description: "Safe, comfortable tooth removal when necessary",
          price: "From $200",
          duration: "30-60 min",
          image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
        },
        {
          name: "Broken Tooth Repair",
          description: "Restore cracked or broken teeth to full function",
          price: "From $175",
          duration: "Varies",
          image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&h=400&fit=crop",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/dental-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Aloha Dental</span>
                <span className="block text-xs text-teal-600">Family & Cosmetic Dentistry</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/dental-demo" className="text-gray-700 hover:text-teal-600 transition font-medium">Home</Link>
              <Link href="/dental-demo/services" className="text-teal-600 font-medium">Services</Link>
              <Link href="/dental-demo/about" className="text-gray-700 hover:text-teal-600 transition font-medium">About Us</Link>
              <Link href="/dental-demo/contact" className="text-gray-700 hover:text-teal-600 transition font-medium">Contact</Link>
            </div>

            <Link
              href="/dental-demo/booking"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6">
            Comprehensive Dental Care
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
              For Your Whole Family
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            From routine cleanings to advanced cosmetic procedures, we offer a full range of dental services
            using the latest technology and techniques.
          </p>
          <Link
            href="/dental-demo/booking"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition"
          >
            Schedule Your Visit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.category}
          id={category.category.toLowerCase().replace(/\s+/g, "-")}
          className={`py-20 px-4 ${catIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {category.category}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-teal-600 font-semibold text-sm">{service.price}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {service.duration}
                      </span>
                      <Link
                        href="/dental-demo/booking"
                        className="text-teal-600 hover:text-teal-700 font-medium text-sm"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Special Offer */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span className="font-medium">New Patient Special</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Exam, X-Rays & Cleaning
          </h2>
          <div className="text-6xl font-bold mb-4">$99</div>
          <p className="text-xl text-teal-100 mb-8">
            Save over $200 on your first visit. Includes comprehensive exam, full digital X-rays, and professional cleaning.
          </p>
          <Link
            href="/dental-demo/booking"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition"
          >
            Claim Your Offer
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-teal-200 text-sm mt-4">*For new patients without insurance. Some restrictions apply.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Aloha Dental</span>
            </div>
            <div className="flex gap-8 text-gray-400">
              <Link href="/dental-demo" className="hover:text-teal-400 transition">Home</Link>
              <Link href="/dental-demo/services" className="hover:text-teal-400 transition">Services</Link>
              <Link href="/dental-demo/about" className="hover:text-teal-400 transition">About</Link>
              <Link href="/dental-demo/booking" className="hover:text-teal-400 transition">Book</Link>
              <Link href="/dental-demo/contact" className="hover:text-teal-400 transition">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Aloha Dental. Demo by <Link href="/" className="text-teal-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
