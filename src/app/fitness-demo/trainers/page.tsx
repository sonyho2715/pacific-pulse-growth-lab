"use client";

import Link from "next/link";
import Image from "next/image";

export default function FitnessTrainersPage() {
  const trainers = [
    {
      name: "Mike Torres",
      title: "Head Coach & HIIT Specialist",
      specialty: "HIIT, Functional Training, Boxing",
      bio: "Mike brings 12 years of experience and endless energy to every class. A former collegiate athlete, he discovered his passion for coaching after helping friends transform their fitness. His high-energy HIIT classes are legendary, and his boxing fundamentals program has helped hundreds learn proper form.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop",
      certifications: ["NASM Certified Personal Trainer", "CrossFit Level 2", "USA Boxing Coach", "TRX Certified"],
      classes: ["Early Bird HIIT", "Boxing Basics", "Boxing Advanced", "Kickboxing"],
      quote: "Every rep counts. Every drop of sweat is progress.",
      social: { instagram: "@coachmike_pp", twitter: "@coachmike" },
    },
    {
      name: "Sarah Kim",
      title: "Yoga & Mindfulness Director",
      specialty: "Yoga, Pilates, Meditation",
      bio: "Sarah's journey to yoga began during a stressful corporate career when she discovered the transformative power of mindful movement. After 500 hours of training in Bali and India, she returned to Hawaii to share her practice. Her classes blend traditional yoga with modern fitness principles.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop",
      certifications: ["RYT-500 Yoga Alliance", "Certified Meditation Instructor", "Pilates Mat Certified", "Prenatal Yoga Certified"],
      classes: ["Power Yoga", "Vinyasa Flow", "Restorative Yoga", "Yin Yoga", "Barre Burn"],
      quote: "Breathe deeply, move mindfully, live fully.",
      social: { instagram: "@sarahkim_yoga", twitter: "@sarahkimyoga" },
    },
    {
      name: "Alex Johnson",
      title: "Strength & Conditioning Coach",
      specialty: "Strength Training, CrossFit, Olympic Lifting",
      bio: "Alex competed as a powerlifter for 8 years before transitioning to coaching. With a degree in Exercise Science and multiple certifications, he brings a scientific approach to strength training. His programming has helped everyone from beginners to competitive athletes achieve their strength goals.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop",
      certifications: ["CSCS (Certified Strength & Conditioning Specialist)", "USA Weightlifting Level 2", "CrossFit Level 2", "Precision Nutrition L1"],
      classes: ["Strength Training", "CrossFit WOD", "Functional Fitness", "Lunch Lift"],
      quote: "Strength isn't just physical—it's the foundation of confidence.",
      social: { instagram: "@coachalex_strong", twitter: "@alexj_fitness" },
    },
    {
      name: "Chris Martinez",
      title: "Spin & Cardio Specialist",
      specialty: "Indoor Cycling, Dance Cardio, Endurance",
      bio: "Chris brings the party to every spin class with his DJ background and infectious energy. A former triathlete, he understands endurance training inside and out. His spin classes are famous for their playlists and his ability to push riders beyond what they thought possible.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop",
      certifications: ["Spinning® Certified", "ACE Personal Trainer", "Les Mills RPM Certified", "First Aid/CPR"],
      classes: ["Spin Class", "Spin Sunrise", "Spin Party", "Recovery Spin", "Dance Cardio"],
      quote: "The only bad workout is the one you didn't do.",
      social: { instagram: "@djchris_spin", twitter: "@chrismartinez" },
    },
    {
      name: "Lisa Nakamura",
      title: "Nutrition Coach & Personal Trainer",
      specialty: "Nutrition Coaching, Weight Loss, Body Transformation",
      bio: "Lisa combines her background in nutrition science with personal training to offer a holistic approach to fitness. After her own 60-pound weight loss journey, she became passionate about helping others achieve sustainable transformations through proper nutrition and exercise.",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=800&fit=crop",
      certifications: ["Precision Nutrition L2", "NASM Certified Personal Trainer", "Behavior Change Specialist", "Weight Loss Specialist"],
      classes: ["Personal Training", "Nutrition Consultations", "Body Transformation Program"],
      quote: "You can't out-train a bad diet. Let's fix both.",
      social: { instagram: "@lisa_transforms", twitter: "@lisanakamura" },
    },
    {
      name: "David Park",
      title: "Recovery & Mobility Specialist",
      specialty: "Stretching, Mobility, Injury Prevention",
      bio: "David spent 10 years as a physical therapy assistant before joining Pacific Pulse. His expertise in mobility and recovery helps members prevent injuries and optimize their training. His recovery sessions have become essential for serious athletes in our community.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop",
      certifications: ["FMS Certified", "NASM Corrective Exercise Specialist", "Stretch Therapy Certified", "Foam Rolling Specialist"],
      classes: ["Sunday Stretch", "Recovery Sessions", "Mobility Workshop"],
      quote: "Recovery isn't optional—it's where progress happens.",
      social: { instagram: "@davidpark_mobility", twitter: "@davidpark" },
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
              <Link href="/fitness-demo/classes" className="text-gray-400 font-medium hover:text-orange-500 transition">Classes</Link>
              <Link href="/fitness-demo/trainers" className="text-white font-medium">Trainers</Link>
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
          <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Our Team</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 mb-6">
            Meet Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Expert Trainers
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our certified professionals are dedicated to helping you achieve your fitness goals safely and effectively.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      width={600}
                      height={800}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-orange-400 italic">&ldquo;{trainer.quote}&rdquo;</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-block px-4 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-4">
                    {trainer.specialty}
                  </div>
                  <h2 className="text-3xl font-black mb-2">{trainer.name}</h2>
                  <p className="text-orange-500 font-semibold mb-6">{trainer.title}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{trainer.bio}</p>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-300">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3">Classes</h3>
                    <div className="flex flex-wrap gap-2">
                      {trainer.classes.map((cls, i) => (
                        <span key={i} className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm text-orange-400">
                          {cls}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Train with the Best</h2>
          <p className="text-orange-100 mb-8">Start your free trial and experience what expert coaching can do for you</p>
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
