"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FitnessDemo() {
  const [email, setEmail] = useState("");

  const classes = [
    {
      name: "HIIT Burn",
      time: "6:00 AM",
      duration: "45 min",
      trainer: "Coach Mike",
      intensity: "High",
      spots: 4,
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop",
    },
    {
      name: "Power Yoga",
      time: "7:30 AM",
      duration: "60 min",
      trainer: "Sarah K.",
      intensity: "Medium",
      spots: 8,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    },
    {
      name: "Spin Class",
      time: "12:00 PM",
      duration: "45 min",
      trainer: "DJ Chris",
      intensity: "High",
      spots: 2,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    },
    {
      name: "Strength Training",
      time: "5:30 PM",
      duration: "60 min",
      trainer: "Coach Alex",
      intensity: "High",
      spots: 6,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=400&fit=crop",
    },
  ];

  const trainers = [
    {
      name: "Mike Torres",
      specialty: "HIIT & Functional Training",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop",
      certifications: "NASM, CrossFit L2",
    },
    {
      name: "Sarah Kim",
      specialty: "Yoga & Mindfulness",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
      certifications: "RYT-500, Meditation",
    },
    {
      name: "Alex Johnson",
      specialty: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop",
      certifications: "CSCS, USA Weightlifting",
    },
    {
      name: "Chris Martinez",
      specialty: "Spin & Cardio",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop",
      certifications: "Spinning Certified, ACE",
    },
  ];

  const membershipPlans = [
    {
      name: "Drop-In",
      price: "$25",
      period: "per class",
      features: ["Single class access", "No commitment", "All class types"],
      popular: false,
    },
    {
      name: "Unlimited",
      price: "$149",
      period: "per month",
      features: ["Unlimited classes", "Open gym access", "1 guest pass/month", "Locker included"],
      popular: true,
    },
    {
      name: "Annual",
      price: "$99",
      period: "per month",
      features: ["Everything in Unlimited", "2 PT sessions/month", "Priority booking", "Merchandise discount"],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Jennifer L.",
      text: "I've tried every gym in Honolulu. Pacific Pulse is different. The trainers actually care, the community is incredible, and I've never been in better shape.",
      result: "Lost 30 lbs in 4 months",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      name: "David K.",
      text: "The 6am HIIT class is the best way to start my day. Coach Mike pushes you just enough, and the energy is unmatched.",
      result: "5x per week member",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Michelle T.",
      text: "As a busy mom, I needed flexible class times and childcare. Pacific Pulse has both, plus the yoga classes have been life-changing for my stress levels.",
      result: "Member for 2+ years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
  ];

  const stats = [
    { value: "50+", label: "Weekly Classes" },
    { value: "8", label: "Expert Trainers" },
    { value: "2,500+", label: "Active Members" },
    { value: "4.9", label: "Google Rating" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/fitness-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight">PACIFIC PULSE</span>
                <span className="block text-xs text-orange-500 font-semibold tracking-widest">FITNESS STUDIO</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/fitness-demo" className="text-white font-medium hover:text-orange-500 transition">Home</Link>
              <Link href="/fitness-demo/classes" className="text-gray-400 font-medium hover:text-orange-500 transition">Classes</Link>
              <Link href="/fitness-demo/trainers" className="text-gray-400 font-medium hover:text-orange-500 transition">Trainers</Link>
              <Link href="/fitness-demo/membership" className="text-gray-400 font-medium hover:text-orange-500 transition">Membership</Link>
              <Link href="/fitness-demo/contact" className="text-gray-400 font-medium hover:text-orange-500 transition">Contact</Link>
            </div>

            <Link
              href="/fitness-demo/membership"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/25 transition"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="Gym interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-semibold text-orange-400">7-Day Free Trial Available</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-none">
              TRANSFORM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                YOUR BODY
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Hawaii&apos;s premier fitness studio. 50+ weekly classes, world-class trainers,
              and a community that pushes you to be your best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/fitness-demo/membership"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl hover:shadow-orange-500/25 transition transform hover:scale-105"
              >
                Start Your Free Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/fitness-demo/classes"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-bold border border-white/20 hover:bg-white/20 transition"
              >
                View Class Schedule
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 border-2 border-black flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-orange-500 fill-orange-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-400">2,500+ members strong</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1">{stat.value}</div>
                <div className="text-orange-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Classes */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Schedule</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">Today&apos;s Classes</h2>
            </div>
            <Link
              href="/fitness-demo/classes"
              className="hidden md:inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition"
            >
              Full Schedule
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl overflow-hidden group hover:ring-2 hover:ring-orange-500 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cls.image}
                    alt={cls.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      cls.intensity === "High" ? "bg-red-500" : "bg-orange-500"
                    }`}>
                      {cls.intensity}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold">{cls.name}</h3>
                    <p className="text-gray-400 text-sm">{cls.trainer}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{cls.time}</span>
                    </div>
                    <span className="text-gray-400">{cls.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold ${cls.spots <= 3 ? "text-red-400" : "text-green-400"}`}>
                      {cls.spots} spots left
                    </span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              href="/fitness-demo/classes"
              className="inline-flex items-center gap-2 text-orange-500 font-bold"
            >
              View Full Schedule
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Membership</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start with a free 7-day trial. No commitment, cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-b from-orange-500 to-red-600 ring-4 ring-orange-500 ring-offset-4 ring-offset-black"
                    : "bg-zinc-900"
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`text-lg ${plan.popular ? "text-orange-100" : "text-gray-400"}`}>
                    /{plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-white" : "text-orange-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.popular ? "text-white" : "text-gray-300"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/fitness-demo/membership"
                  className={`block w-full py-4 rounded-lg font-bold text-center transition ${
                    plan.popular
                      ? "bg-white text-orange-600 hover:bg-gray-100"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                  {plan.popular ? "Start Free Trial" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Meet Your Trainers</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Certified professionals dedicated to helping you reach your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-orange-500 rounded-full text-xs font-bold mb-2">
                      {trainer.certifications}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{trainer.name}</h3>
                <p className="text-gray-400">{trainer.specialty}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/fitness-demo/trainers"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-bold transition"
            >
              Meet All Trainers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Real Results</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-orange-500 fill-orange-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-orange-500 font-semibold">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ready to Transform?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join 2,500+ members who have changed their lives. Your first week is on us.
          </p>
          <Link
            href="/fitness-demo/membership"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition"
          >
            Start Your Free 7-Day Trial
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-orange-200 text-sm mt-4">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-16 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-black">PACIFIC PULSE</span>
              </div>
              <p className="text-gray-400">
                Hawaii&apos;s premier fitness studio. Transform your body, transform your life.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/fitness-demo/classes" className="hover:text-orange-500 transition">Classes</Link></li>
                <li><Link href="/fitness-demo/trainers" className="hover:text-orange-500 transition">Trainers</Link></li>
                <li><Link href="/fitness-demo/membership" className="hover:text-orange-500 transition">Membership</Link></li>
                <li><Link href="/fitness-demo/contact" className="hover:text-orange-500 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mon - Fri: 5am - 10pm</li>
                <li>Saturday: 6am - 8pm</li>
                <li>Sunday: 7am - 6pm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>456 Fitness Blvd</li>
                <li>Honolulu, HI 96815</li>
                <li className="text-orange-500 font-semibold">(808) 555-PUMP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-gray-500">
            <p>&copy; 2026 Pacific Pulse Fitness. Demo by <Link href="/" className="text-orange-500 hover:underline">Pacific Pulse Growth Lab</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
