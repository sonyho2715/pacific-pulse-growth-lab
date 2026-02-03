"use client";

import Link from "next/link";
import Image from "next/image";

export default function PetTeamPage() {
  const team = [
    {
      name: "Dr. Sarah Kim",
      role: "Lead Veterinarian & Co-Owner",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop",
      bio: "Dr. Kim graduated from UC Davis School of Veterinary Medicine and has been caring for Hawaii's pets for over 15 years. She founded Happy Tails with the vision of combining top-tier veterinary care with grooming services under one roof.",
      specialties: ["Small Animal Medicine", "Geriatric Care", "Preventive Medicine"],
      certifications: ["DVM, UC Davis", "Fear Free Certified", "AAHA Member"],
      pets: "2 cats: Mochi and Wasabi",
    },
    {
      name: "Mike Torres",
      role: "Head Groomer & Co-Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
      bio: "Mike has been grooming professionally for 20 years and is a two-time Best in Show winner at the World Grooming Championship. He's passionate about teaching the next generation of groomers and specializes in creative styling.",
      specialties: ["Creative Grooming", "Show Cuts", "Hand Stripping"],
      certifications: ["Certified Master Groomer (NDGAA)", "Fear Free Certified", "Pet CPR Certified"],
      pets: "1 standard poodle: Prince",
    },
    {
      name: "Emma Chen",
      role: "Senior Pet Stylist",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&h=600&fit=crop",
      bio: "Emma specializes in working with anxious and senior pets. Her gentle approach and calming presence have earned her a loyal following of pet parents whose furry friends need extra patience and care.",
      specialties: ["Anxious Pets", "Senior Dogs", "Cats"],
      certifications: ["Certified Pet Groomer", "Fear Free Elite Certified", "Cat Grooming Specialist"],
      pets: "3 rescue cats and 1 senior beagle",
    },
    {
      name: "Dr. James Tanaka",
      role: "Associate Veterinarian",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop",
      bio: "Dr. Tanaka joined Happy Tails after completing his residency at a specialty hospital in San Francisco. He brings expertise in surgery and dentistry, and is known for his warm bedside manner with both pets and their parents.",
      specialties: ["Surgery", "Dentistry", "Emergency Medicine"],
      certifications: ["DVM, Colorado State", "ACVS Surgical Resident", "Veterinary Dental Practitioner"],
      pets: "2 golden retrievers: Sunny and Bear",
    },
    {
      name: "Lisa Nakamura",
      role: "Pet Stylist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop",
      bio: "Lisa discovered her passion for grooming while volunteering at a local shelter. She completed her training under Mike and specializes in breed-specific cuts and Asian fusion styling.",
      specialties: ["Breed-Specific Cuts", "Asian Fusion", "Doodle Coats"],
      certifications: ["Certified Pet Groomer", "Fear Free Certified", "Doodle Specialist"],
      pets: "1 goldendoodle: Coconut",
    },
    {
      name: "David Park",
      role: "Veterinary Technician",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop",
      bio: "David is our lead vet tech with over 10 years of experience. He assists with surgeries, manages our pharmacy, and is the friendly face you'll see during most veterinary visits.",
      specialties: ["Surgical Assistance", "Lab Work", "Patient Care"],
      certifications: ["Licensed Veterinary Technician", "VTS Anesthesia", "Pet CPR Instructor"],
      pets: "2 cats and a bearded dragon",
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
              <Link href="/pet-demo/services" className="text-stone-600 font-medium hover:text-teal-600 transition">Services</Link>
              <Link href="/pet-demo/team" className="text-teal-700 font-medium">Our Team</Link>
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
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Our Team</span>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mt-2 mb-4">Pet Lovers at Heart</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Every member of our team shares one thing in common: a genuine love for animals. Meet the passionate professionals who will care for your furry family members.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4 bg-[#fefdfb]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {team.map((member, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl font-bold text-stone-800 mb-1">{member.name}</h2>
                  <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-stone-600 mb-6 leading-relaxed">{member.bio}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase text-stone-400 mb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase text-stone-400 mb-2">Certifications</h3>
                    <ul className="space-y-1">
                      {member.certifications.map((cert, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                          <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 p-4 bg-teal-50 rounded-xl">
                    <span className="text-2xl">🐾</span>
                    <div>
                      <span className="text-xs text-teal-600 font-medium">Pet Parent To:</span>
                      <p className="text-stone-700 font-medium">{member.pets}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Careers</span>
          <h2 className="text-3xl font-bold text-stone-800 mt-2 mb-4">Join Our Pack</h2>
          <p className="text-stone-600 mb-8">
            We&apos;re always looking for passionate pet lovers to join our team. Competitive pay, great benefits, and the best coworkers (the furry kind).
          </p>
          <Link
            href="/pet-demo/contact"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition"
          >
            View Open Positions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
