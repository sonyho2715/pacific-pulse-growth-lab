"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FitnessClassesPage() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const allClasses = {
    Monday: [
      { time: "5:30 AM", name: "Early Bird HIIT", trainer: "Coach Mike", duration: "45 min", intensity: "High", spots: 3 },
      { time: "6:30 AM", name: "Power Yoga", trainer: "Sarah K.", duration: "60 min", intensity: "Medium", spots: 8 },
      { time: "7:30 AM", name: "Spin Class", trainer: "DJ Chris", duration: "45 min", intensity: "High", spots: 5 },
      { time: "12:00 PM", name: "Lunch Crunch", trainer: "Coach Alex", duration: "30 min", intensity: "Medium", spots: 10 },
      { time: "5:30 PM", name: "Strength Training", trainer: "Coach Alex", duration: "60 min", intensity: "High", spots: 6 },
      { time: "6:30 PM", name: "Boxing Basics", trainer: "Coach Mike", duration: "45 min", intensity: "High", spots: 4 },
      { time: "7:30 PM", name: "Restorative Yoga", trainer: "Sarah K.", duration: "60 min", intensity: "Low", spots: 12 },
    ],
    Tuesday: [
      { time: "5:30 AM", name: "Spin Sunrise", trainer: "DJ Chris", duration: "45 min", intensity: "High", spots: 6 },
      { time: "6:30 AM", name: "Functional Fitness", trainer: "Coach Alex", duration: "60 min", intensity: "High", spots: 4 },
      { time: "9:00 AM", name: "Mommy & Me Yoga", trainer: "Sarah K.", duration: "45 min", intensity: "Low", spots: 8 },
      { time: "12:00 PM", name: "Express HIIT", trainer: "Coach Mike", duration: "30 min", intensity: "High", spots: 5 },
      { time: "5:30 PM", name: "Kickboxing", trainer: "Coach Mike", duration: "60 min", intensity: "High", spots: 3 },
      { time: "6:30 PM", name: "Barre Burn", trainer: "Sarah K.", duration: "45 min", intensity: "Medium", spots: 7 },
    ],
    Wednesday: [
      { time: "5:30 AM", name: "Early Bird HIIT", trainer: "Coach Mike", duration: "45 min", intensity: "High", spots: 4 },
      { time: "6:30 AM", name: "Power Yoga", trainer: "Sarah K.", duration: "60 min", intensity: "Medium", spots: 10 },
      { time: "7:30 AM", name: "Spin Class", trainer: "DJ Chris", duration: "45 min", intensity: "High", spots: 2 },
      { time: "12:00 PM", name: "Core Crusher", trainer: "Coach Alex", duration: "30 min", intensity: "Medium", spots: 8 },
      { time: "5:30 PM", name: "CrossFit WOD", trainer: "Coach Alex", duration: "60 min", intensity: "High", spots: 5 },
      { time: "6:30 PM", name: "Dance Cardio", trainer: "DJ Chris", duration: "45 min", intensity: "Medium", spots: 12 },
      { time: "7:30 PM", name: "Yin Yoga", trainer: "Sarah K.", duration: "75 min", intensity: "Low", spots: 15 },
    ],
    Thursday: [
      { time: "5:30 AM", name: "Spin Sunrise", trainer: "DJ Chris", duration: "45 min", intensity: "High", spots: 5 },
      { time: "6:30 AM", name: "Strength & Conditioning", trainer: "Coach Alex", duration: "60 min", intensity: "High", spots: 6 },
      { time: "9:00 AM", name: "Senior Fitness", trainer: "Sarah K.", duration: "45 min", intensity: "Low", spots: 10 },
      { time: "12:00 PM", name: "Express HIIT", trainer: "Coach Mike", duration: "30 min", intensity: "High", spots: 4 },
      { time: "5:30 PM", name: "Boxing Advanced", trainer: "Coach Mike", duration: "60 min", intensity: "High", spots: 3 },
      { time: "6:30 PM", name: "Pilates Flow", trainer: "Sarah K.", duration: "45 min", intensity: "Medium", spots: 8 },
    ],
    Friday: [
      { time: "5:30 AM", name: "Friday Burn", trainer: "Coach Mike", duration: "45 min", intensity: "High", spots: 6 },
      { time: "6:30 AM", name: "Vinyasa Flow", trainer: "Sarah K.", duration: "60 min", intensity: "Medium", spots: 9 },
      { time: "12:00 PM", name: "Lunch Lift", trainer: "Coach Alex", duration: "45 min", intensity: "High", spots: 7 },
      { time: "5:00 PM", name: "Happy Hour HIIT", trainer: "Coach Mike", duration: "45 min", intensity: "High", spots: 5 },
      { time: "6:00 PM", name: "Spin Party", trainer: "DJ Chris", duration: "60 min", intensity: "High", spots: 4 },
    ],
    Saturday: [
      { time: "7:00 AM", name: "Weekend Warrior", trainer: "Coach Mike", duration: "60 min", intensity: "High", spots: 8 },
      { time: "8:30 AM", name: "Yoga & Mimosas", trainer: "Sarah K.", duration: "75 min", intensity: "Medium", spots: 12 },
      { time: "10:00 AM", name: "Family Fitness", trainer: "Coach Alex", duration: "45 min", intensity: "Medium", spots: 15 },
      { time: "11:30 AM", name: "Spin & Sculpt", trainer: "DJ Chris", duration: "60 min", intensity: "High", spots: 6 },
      { time: "1:00 PM", name: "Open Gym", trainer: "Staff", duration: "180 min", intensity: "Varies", spots: 20 },
    ],
    Sunday: [
      { time: "8:00 AM", name: "Sunday Stretch", trainer: "Sarah K.", duration: "60 min", intensity: "Low", spots: 15 },
      { time: "9:30 AM", name: "Strength Basics", trainer: "Coach Alex", duration: "60 min", intensity: "Medium", spots: 10 },
      { time: "11:00 AM", name: "Recovery Spin", trainer: "DJ Chris", duration: "45 min", intensity: "Low", spots: 8 },
      { time: "12:30 PM", name: "Open Gym", trainer: "Staff", duration: "180 min", intensity: "Varies", spots: 20 },
    ],
  };

  const classTypes = [
    {
      name: "HIIT & Cardio",
      description: "High-intensity interval training to maximize calorie burn",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop",
      classes: ["HIIT Burn", "Kickboxing", "Boxing", "Dance Cardio"],
    },
    {
      name: "Spin & Cycling",
      description: "Indoor cycling classes with energizing music",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      classes: ["Spin Class", "Spin Sunrise", "Spin Party", "Spin & Sculpt"],
    },
    {
      name: "Yoga & Mindfulness",
      description: "Find balance and flexibility through yoga practice",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      classes: ["Power Yoga", "Vinyasa Flow", "Yin Yoga", "Restorative Yoga"],
    },
    {
      name: "Strength Training",
      description: "Build muscle and increase strength",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=400&fit=crop",
      classes: ["Strength Training", "CrossFit WOD", "Functional Fitness"],
    },
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
              <span className="text-xl font-black tracking-tight">PACIFIC PULSE</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/fitness-demo" className="text-gray-400 font-medium hover:text-orange-500 transition">Home</Link>
              <Link href="/fitness-demo/classes" className="text-white font-medium">Classes</Link>
              <Link href="/fitness-demo/trainers" className="text-gray-400 font-medium hover:text-orange-500 transition">Trainers</Link>
              <Link href="/fitness-demo/membership" className="text-gray-400 font-medium hover:text-orange-500 transition">Membership</Link>
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

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Class Schedule</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 mb-6">
            50+ Classes Weekly
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From high-intensity HIIT to restorative yoga. Find the perfect class for your goals.
          </p>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Class Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classTypes.map((type, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden group">
                <div className="relative h-40">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{type.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.classes.slice(0, 2).map((cls) => (
                      <span key={cls} className="px-2 py-1 bg-zinc-800 rounded text-xs text-gray-300">
                        {cls}
                      </span>
                    ))}
                    {type.classes.length > 2 && (
                      <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-gray-400">
                        +{type.classes.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Weekly Schedule</h2>

          {/* Day Selector */}
          <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-lg font-bold whitespace-nowrap transition ${
                  selectedDay === day
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                    : "bg-zinc-900 text-gray-400 hover:text-white"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Table */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-zinc-800 text-sm font-bold text-gray-400">
              <div className="col-span-2">Time</div>
              <div className="col-span-3">Class</div>
              <div className="col-span-2">Trainer</div>
              <div className="col-span-2">Duration</div>
              <div className="col-span-1">Level</div>
              <div className="col-span-2 text-right">Availability</div>
            </div>
            {allClasses[selectedDay as keyof typeof allClasses].map((cls, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 p-4 border-b border-zinc-800 items-center hover:bg-zinc-800/50 transition"
              >
                <div className="col-span-2 font-bold text-orange-500">{cls.time}</div>
                <div className="col-span-3 font-semibold">{cls.name}</div>
                <div className="col-span-2 text-gray-400">{cls.trainer}</div>
                <div className="col-span-2 text-gray-400">{cls.duration}</div>
                <div className="col-span-1">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    cls.intensity === "High" ? "bg-red-500/20 text-red-400" :
                    cls.intensity === "Medium" ? "bg-orange-500/20 text-orange-400" :
                    "bg-green-500/20 text-green-400"
                  }`}>
                    {cls.intensity}
                  </span>
                </div>
                <div className="col-span-2 text-right">
                  <span className={`mr-4 text-sm ${cls.spots <= 3 ? "text-red-400" : "text-green-400"}`}>
                    {cls.spots} spots
                  </span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition">
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-orange-100 mb-8">Try any class free with our 7-day trial</p>
          <Link
            href="/fitness-demo/membership"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:shadow-xl transition"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2026 Pacific Pulse Fitness. Demo by <Link href="/" className="text-orange-500 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
