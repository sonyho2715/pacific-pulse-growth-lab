"use client";

import Link from "next/link";
import Image from "next/image";

export default function PetServicesPage() {
  const groomingServices = [
    { name: "Bath & Brush", description: "Shampoo, conditioner, blow dry, brush out, ear cleaning, nail trim", price: "$45+", duration: "45-60 min" },
    { name: "Full Groom - Small", description: "Bath, haircut, style, nail trim, ear cleaning, gland expression", price: "$65+", duration: "1.5-2 hrs", note: "Under 25 lbs" },
    { name: "Full Groom - Medium", description: "Bath, haircut, style, nail trim, ear cleaning, gland expression", price: "$80+", duration: "2-2.5 hrs", note: "25-50 lbs" },
    { name: "Full Groom - Large", description: "Bath, haircut, style, nail trim, ear cleaning, gland expression", price: "$95+", duration: "2.5-3 hrs", note: "50+ lbs" },
    { name: "Puppy's First Groom", description: "Gentle introduction to grooming for puppies under 6 months", price: "$40", duration: "30 min", popular: true },
    { name: "Cat Grooming", description: "Bath, brush, nail trim, ear cleaning (sedation available)", price: "$75+", duration: "1-2 hrs" },
    { name: "Nail Trim Only", description: "Quick nail trim and file", price: "$15", duration: "15 min" },
    { name: "Teeth Brushing", description: "Gentle brushing with pet-safe toothpaste", price: "$12", duration: "10 min" },
  ];

  const spaServices = [
    { name: "Pawdicure", description: "Nail trim, file, paw pad moisturizer, massage", price: "$35", duration: "30 min", popular: true },
    { name: "Blueberry Facial", description: "Tear stain treatment with blueberry extract", price: "$15", duration: "15 min" },
    { name: "Oatmeal Soak", description: "Soothing oatmeal bath for sensitive or itchy skin", price: "$20", duration: "20 min" },
    { name: "De-Shedding Treatment", description: "Special shampoo and tools to reduce shedding up to 80%", price: "$30+", duration: "30 min", popular: true },
    { name: "Aromatherapy Session", description: "Calming lavender treatment for anxious pets", price: "$18", duration: "15 min" },
    { name: "Mud Bath", description: "Detoxifying mud treatment for coat health", price: "$40", duration: "45 min" },
    { name: "Full Spa Day", description: "Bath, groom, pawdicure, facial, aromatherapy, bandana", price: "$120+", duration: "3-4 hrs", popular: true },
  ];

  const vetServices = [
    { name: "Wellness Exam", description: "Complete physical examination and health assessment", price: "$55", duration: "30 min" },
    { name: "Vaccinations", description: "Core vaccines (DHPP, Rabies) or non-core as needed", price: "$25-45 each", duration: "15 min" },
    { name: "Microchipping", description: "Permanent ID chip with lifetime registration", price: "$50", duration: "10 min" },
    { name: "Dental Cleaning", description: "Professional cleaning under anesthesia, includes bloodwork", price: "$350+", duration: "2-3 hrs" },
    { name: "Spay/Neuter", description: "Surgical sterilization with pre-op bloodwork", price: "$250-400", duration: "Half day" },
    { name: "Sick Visit", description: "Examination and treatment for illness or injury", price: "$75+", duration: "30-60 min" },
    { name: "Senior Wellness Panel", description: "Bloodwork, urinalysis, and comprehensive exam for pets 7+", price: "$180", duration: "45 min" },
  ];

  const packages = [
    {
      name: "Puppy Package",
      description: "Everything your new pup needs for their first year",
      price: "$299",
      includes: ["3 Puppy wellness exams", "Core vaccinations", "Microchip", "2 Puppy grooms", "10% off spay/neuter"],
      savings: "Save $75",
      color: "teal",
    },
    {
      name: "Monthly Maintenance",
      description: "Keep your pet looking and feeling great year-round",
      price: "$59/mo",
      includes: ["1 Full groom per month", "Nail trims between visits", "Teeth brushing", "10% off spa add-ons", "Priority booking"],
      savings: "Save 20%",
      color: "orange",
      popular: true,
    },
    {
      name: "Senior Care Plan",
      description: "Comprehensive care for your aging companion",
      price: "$450/year",
      includes: ["2 Wellness exams", "Annual bloodwork", "Dental exam", "4 Grooming sessions", "20% off medications"],
      savings: "Save $120",
      color: "purple",
    },
  ];

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
              <Link href="/pet-demo/services" className="text-teal-700 font-medium">Services</Link>
              <Link href="/pet-demo/team" className="text-stone-600 font-medium hover:text-teal-600 transition">Our Team</Link>
              <Link href="/pet-demo/gallery" className="text-stone-600 font-medium hover:text-teal-600 transition">Gallery</Link>
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
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Services & Pricing</span>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mt-2 mb-4">Pamper Your Pet</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From basic grooming to luxury spa treatments and veterinary care. Everything your furry friend needs under one roof.
          </p>
        </div>
      </section>

      {/* Grooming Services */}
      <section className="py-16 px-4 bg-[#fefdfb]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl">✂️</span>
            <div>
              <h2 className="text-3xl font-bold text-stone-800">Grooming Services</h2>
              <p className="text-stone-500">Professional grooming for dogs and cats</p>
            </div>
          </div>

          <div className="space-y-4">
            {groomingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-teal-50 hover:border-teal-200 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-stone-800">{service.name}</h3>
                    {service.popular && (
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">Popular</span>
                    )}
                    {service.note && (
                      <span className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs font-medium rounded-full">{service.note}</span>
                    )}
                  </div>
                  <p className="text-stone-600 text-sm">{service.description}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-stone-500 text-sm">{service.duration}</span>
                  <span className="text-teal-600 font-bold text-lg whitespace-nowrap">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Services */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl">🛁</span>
            <div>
              <h2 className="text-3xl font-bold text-stone-800">Spa & Wellness</h2>
              <p className="text-stone-500">Luxury treatments for pampered pets</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {spaServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-teal-100 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-stone-800">{service.name}</h3>
                    {service.popular && (
                      <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">Popular</span>
                    )}
                  </div>
                  <span className="text-teal-600 font-bold">{service.price}</span>
                </div>
                <p className="text-stone-600 text-sm mb-2">{service.description}</p>
                <span className="text-stone-400 text-xs">{service.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vet Services */}
      <section className="py-16 px-4 bg-[#fefdfb]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl">🩺</span>
            <div>
              <h2 className="text-3xl font-bold text-stone-800">Veterinary Care</h2>
              <p className="text-stone-500">Compassionate medical care for your pet</p>
            </div>
          </div>

          <div className="space-y-4">
            {vetServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-teal-50 hover:border-teal-200 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-stone-800 mb-1">{service.name}</h3>
                  <p className="text-stone-600 text-sm">{service.description}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-stone-500 text-sm">{service.duration}</span>
                  <span className="text-teal-600 font-bold text-lg whitespace-nowrap">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🚨</span>
              <h3 className="font-bold text-red-800">Emergency Services</h3>
            </div>
            <p className="text-red-700 text-sm">
              We offer 24/7 emergency care. For after-hours emergencies, call <strong>(808) 555-PAWS</strong> and follow the prompts.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-500 to-teal-700">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-teal-200 uppercase tracking-widest">Save More</span>
            <h2 className="text-4xl font-bold text-white mt-2">Value Packages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 relative ${pkg.popular ? 'ring-4 ring-orange-400' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-stone-800 mb-2">{pkg.name}</h3>
                <p className="text-stone-600 text-sm mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-teal-600">{pkg.price}</span>
                  <span className="text-teal-600 font-medium ml-2">{pkg.savings}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                      <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pet-demo/contact"
                  className="block w-full text-center bg-teal-600 text-white py-3 rounded-full font-semibold hover:bg-teal-700 transition"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#fefdfb]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Ready to Book?</h2>
          <p className="text-stone-600 mb-8">
            Schedule online or call us. New clients get 20% off their first grooming!
          </p>
          <Link
            href="/pet-demo/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-full hover:from-teal-600 hover:to-teal-700 transition shadow-lg"
          >
            Book an Appointment
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
