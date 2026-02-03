"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DentalDemo() {
  const [email, setEmail] = useState("");

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive exams, cleanings, and preventive care for the whole family",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
      price: "From $95",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers for your perfect smile",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop",
      price: "From $299",
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look and feel natural",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop",
      price: "From $1,500",
    },
    {
      title: "Orthodontics",
      description: "Invisalign and traditional braces for straighter, healthier teeth",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
      price: "From $3,500",
    },
    {
      title: "Emergency Care",
      description: "Same-day appointments for dental emergencies and urgent care",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
      price: "Call for pricing",
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle, kid-friendly dental care in a fun, welcoming environment",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
      price: "From $75",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Tanaka",
      text: "Dr. Lani and her team made my dental implant procedure completely painless. I was so nervous, but they took amazing care of me. My new smile looks incredible!",
      rating: 5,
      treatment: "Dental Implants",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      name: "Michael Reyes",
      text: "Best dental experience I've ever had. The office is beautiful, the staff is friendly, and they use the latest technology. Highly recommend for families!",
      rating: 5,
      treatment: "Family Dentistry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Sarah Chen",
      text: "I've been terrified of dentists my whole life, but the team here changed everything. They're patient, gentle, and truly care about your comfort.",
      rating: 5,
      treatment: "General Dentistry",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
  ];

  const insuranceLogos = [
    "Delta Dental",
    "Cigna",
    "Aetna",
    "MetLife",
    "Guardian",
    "United Healthcare",
  ];

  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "10,000+", label: "Happy Patients" },
    { value: "4.9", label: "Google Rating" },
    { value: "Same Day", label: "Emergency Care" },
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
              <Link href="/dental-demo/services" className="text-gray-700 hover:text-teal-600 transition font-medium">Services</Link>
              <Link href="/dental-demo/about" className="text-gray-700 hover:text-teal-600 transition font-medium">About Us</Link>
              <Link href="/dental-demo/contact" className="text-gray-700 hover:text-teal-600 transition font-medium">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:808-555-SMILE" className="hidden sm:flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">(808) 555-SMILE</span>
              </a>
              <Link
                href="/dental-demo/booking"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=1080&fit=crop"
            alt="Modern dental office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-sm font-medium text-teal-100">Now Accepting New Patients</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Smile,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Our Passion
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Experience gentle, personalized dental care for your whole family.
              From routine cleanings to complete smile makeovers, we&apos;re here to help you smile with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/dental-demo/booking"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
              >
                Book Your Visit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:808-555-SMILE"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:bg-white/20 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (808) 555-SMILE
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">4.9 Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-1">{stat.value}</div>
                <div className="text-teal-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From preventive care to advanced treatments, we offer everything you need for a healthy, beautiful smile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-teal-600 font-semibold">{service.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/dental-demo/booking"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold"
                  >
                    Book Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/dental-demo/services"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Dentistry Done Differently
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe going to the dentist should be a positive experience. That&apos;s why we&apos;ve created a practice
                focused on your comfort, using the latest technology in a warm, welcoming environment.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "State-of-the-Art Technology",
                    description: "Digital X-rays, 3D imaging, and laser dentistry for precise, comfortable treatment",
                  },
                  {
                    title: "Gentle, Caring Team",
                    description: "Our staff is trained in comfort techniques to ensure a relaxing experience",
                  },
                  {
                    title: "Flexible Scheduling",
                    description: "Evening and weekend appointments available to fit your busy life",
                  },
                  {
                    title: "Affordable Payment Options",
                    description: "We work with most insurance plans and offer financing for major treatments",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=1000&fit=crop"
                alt="Dentist with patient"
                width={600}
                height={750}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">500+ Reviews</div>
                    <div className="text-sm text-gray-500">on Google</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  &ldquo;The best dental experience I&apos;ve ever had. Highly recommend!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Booking Feature */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 mb-6">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-teal-300">24/7 Online Booking</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Book Your Appointment
                <span className="block text-teal-400">Anytime, Anywhere</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Our smart booking system makes scheduling your visit easy. Book online 24/7, get instant confirmations,
                and receive automatic reminders so you never miss an appointment.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Instant online booking, even after hours",
                  "Automatic appointment reminders via text & email",
                  "Easy rescheduling with one click",
                  "New patient forms online to save time",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/dental-demo/booking"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition"
              >
                Book Online Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center gap-4 pb-4 border-b border-gray-100 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Book Appointment</div>
                    <div className="text-sm text-gray-500">Select your preferred time</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Selected Service</div>
                    <div className="font-semibold text-gray-900">General Checkup & Cleaning</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Available Time</div>
                    <div className="font-semibold text-gray-900">Tomorrow, 10:00 AM</div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-xl border-2 border-teal-200">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold text-teal-700">Instant Confirmation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">Join thousands of happy, healthy smiles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-teal-600">{testimonial.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Insurance & Payment Options</h2>
            <p className="text-gray-600">We accept most major insurance plans and offer flexible financing</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {insuranceLogos.map((insurance) => (
              <div
                key={insurance}
                className="px-6 py-3 bg-white rounded-lg shadow-sm text-gray-600 font-medium"
              >
                {insurance}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Don&apos;t see your insurance? <Link href="/dental-demo/contact" className="text-teal-600 hover:underline">Contact us</Link> to verify coverage
          </p>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready for Your Best Smile?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            New patients receive a comprehensive exam, X-rays, and cleaning for just $99.
            Schedule your appointment today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dental-demo/booking"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition"
            >
              Book Your $99 New Patient Special
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <p className="text-teal-200 text-sm mt-6">Limited time offer. Call for details.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Aloha Dental</span>
              </div>
              <p className="text-gray-400">
                Hawaii&apos;s trusted family & cosmetic dental practice. Creating beautiful smiles since 2009.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dental-demo/services" className="hover:text-teal-400 transition">Services</Link></li>
                <li><Link href="/dental-demo/about" className="hover:text-teal-400 transition">About Us</Link></li>
                <li><Link href="/dental-demo/booking" className="hover:text-teal-400 transition">Book Appointment</Link></li>
                <li><Link href="/dental-demo/contact" className="hover:text-teal-400 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 8am - 6pm</li>
                <li>Saturday: 9am - 3pm</li>
                <li>Sunday: Closed</li>
                <li className="text-teal-400 font-medium">Emergency: 24/7</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Aloha Street, Suite 100</li>
                <li>Honolulu, HI 96815</li>
                <li className="text-teal-400 font-semibold">(808) 555-SMILE</li>
                <li>info@alohadental.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">&copy; 2026 Aloha Dental. All rights reserved.</p>
            <p className="text-gray-500 text-sm">
              Demo by <Link href="/" className="text-teal-400 hover:underline">Pacific Pulse Growth Lab</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
