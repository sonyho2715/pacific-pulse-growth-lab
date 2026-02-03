"use client";

import Link from "next/link";
import Image from "next/image";

export default function SalonTeamPage() {
  const stylists = [
    {
      name: "Maya Chen",
      title: "Creative Director & Owner",
      specialty: "Balayage, Color Transformations",
      bio: "With 15 years of experience and training at Vidal Sassoon Academy, Maya founded Luxe Salon to bring high-fashion hair to Honolulu. Her balayage techniques have been featured in Hawaii Magazine and she's a Redken Color Certified specialist.",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=750&fit=crop",
      instagram: "@mayachen_hair",
      certifications: ["Redken Color Certified", "Vidal Sassoon Graduate", "Balayage Specialist"],
      experience: "15 years",
    },
    {
      name: "Alex Rivera",
      title: "Senior Stylist",
      specialty: "Precision Cuts, Men's Grooming",
      bio: "Alex brings 10 years of experience from New York's top salons. Known for his attention to detail and architectural cutting techniques, he creates styles that are both modern and timeless. His specialty is creating cuts that are easy to maintain at home.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop",
      instagram: "@alexrivera_cuts",
      certifications: ["Bumble and bumble Certified", "Men's Grooming Specialist", "Texture Expert"],
      experience: "10 years",
    },
    {
      name: "Jordan Kim",
      title: "Color Specialist",
      specialty: "Vivid Colors, Color Corrections",
      bio: "Jordan is our go-to artist for bold, creative color. With specialized training in fashion colors and a passion for pushing boundaries, Jordan transforms clients into walking works of art. She's also known for her gentle color correction work.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop",
      instagram: "@jordankim_color",
      certifications: ["Pravana Vivids Certified", "Color Correction Specialist", "Pulp Riot Ambassador"],
      experience: "8 years",
    },
    {
      name: "Marcus Taylor",
      title: "Master Barber",
      specialty: "Fades, Beard Design, Hot Shaves",
      bio: "Marcus brings old-school barbering traditions with a modern twist. Trained in classic techniques and contemporary styles, he creates sharp, clean looks that last. His hot towel shaves are legendary among our male clientele.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=750&fit=crop",
      instagram: "@marcus_thebarber",
      certifications: ["Master Barber License", "Straight Razor Certified", "Men's Hair Design"],
      experience: "12 years",
    },
    {
      name: "Sophie Lee",
      title: "Stylist",
      specialty: "Blowouts, Special Occasion Styling",
      bio: "Sophie has a gift for creating volume and movement. Her blowouts are Instagram-famous and her updo skills make her the go-to stylist for weddings and special events. She also specializes in hair health and treatments.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop",
      instagram: "@sophie_blowouts",
      certifications: ["Drybar Trained", "Bridal Styling Certified", "Olaplex Specialist"],
      experience: "6 years",
    },
    {
      name: "Jake Williams",
      title: "Junior Stylist",
      specialty: "Cuts, Color, Extensions",
      bio: "The newest member of our team, Jake brings fresh energy and the latest trends from beauty school. He's passionate about continuing education and has already shown exceptional talent in both cutting and coloring.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=750&fit=crop",
      instagram: "@jake_luxesalon",
      certifications: ["Licensed Cosmetologist", "Extension Certified", "Balayage Training"],
      experience: "2 years",
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
              <Link href="/salon-demo/services" className="text-neutral-400 font-medium hover:text-rose-400 transition">Services</Link>
              <Link href="/salon-demo/team" className="text-rose-400 font-medium">Team</Link>
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
          <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">The Artists</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-6">Meet Our Team</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Our talented stylists are passionate about their craft and dedicated to making you look and feel amazing.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {stylists.map((stylist, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src={stylist.image}
                      alt={stylist.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-950 to-transparent">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-rose-400 font-medium hover:text-rose-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                        </svg>
                        {stylist.instagram}
                      </a>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-rose-400 text-sm font-semibold">{stylist.experience} Experience</span>
                  <h2 className="text-3xl font-black mt-1 mb-2">{stylist.name}</h2>
                  <p className="text-neutral-400 font-medium mb-4">{stylist.title}</p>
                  <p className="text-neutral-300 mb-6 leading-relaxed">{stylist.bio}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase text-neutral-500 mb-3">Specialties</h3>
                    <p className="text-rose-400">{stylist.specialty}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase text-neutral-500 mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {stylist.certifications.map((cert, i) => (
                        <span key={i} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/salon-demo/contact"
                    className="inline-flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-400 transition"
                  >
                    Book with {stylist.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 px-4 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Careers</span>
          <h2 className="text-3xl font-black mt-2 mb-4">Join Our Team</h2>
          <p className="text-neutral-400 mb-8">
            We&apos;re always looking for talented stylists who share our passion for excellence. Luxe Salon offers competitive compensation, continuing education, and a supportive creative environment.
          </p>
          <Link
            href="/salon-demo/contact"
            className="inline-flex items-center gap-2 text-rose-400 font-bold hover:text-rose-300 transition"
          >
            Inquire About Opportunities
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
