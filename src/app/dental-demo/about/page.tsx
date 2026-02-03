"use client";

import Link from "next/link";
import Image from "next/image";

export default function DentalAboutPage() {
  const doctors = [
    {
      name: "Dr. Lani Nakamura",
      title: "Founder & Lead Dentist",
      specialties: "Cosmetic Dentistry, Dental Implants",
      bio: "Dr. Nakamura founded Aloha Dental in 2009 with a vision to bring world-class dental care to Hawaii. A graduate of UCLA School of Dentistry, she completed advanced training in cosmetic dentistry and implantology. She's passionate about helping patients achieve their dream smiles through minimally invasive techniques.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
      credentials: ["DDS, UCLA School of Dentistry", "Fellow, Academy of General Dentistry", "Invisalign Certified Provider"],
    },
    {
      name: "Dr. Kenji Tanaka",
      title: "Associate Dentist",
      specialties: "Family Dentistry, Pediatrics",
      bio: "Dr. Tanaka joined Aloha Dental in 2015, bringing his gentle approach and expertise in family dentistry. Born and raised in Honolulu, he attended University of Hawaii before earning his dental degree from University of Pacific. He's known for his patient, kid-friendly manner that makes even the most anxious patients feel at ease.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
      credentials: ["DDS, University of the Pacific", "Member, American Academy of Pediatric Dentistry", "Certified in Sedation Dentistry"],
    },
    {
      name: "Dr. Maria Santos",
      title: "Orthodontist",
      specialties: "Invisalign, Traditional Braces",
      bio: "Dr. Santos is our orthodontic specialist with over 12 years of experience creating beautiful, straight smiles. After completing her orthodontic residency at USC, she moved to Hawaii to be closer to family. She's a Diamond Invisalign Provider and stays at the forefront of orthodontic innovation.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
      credentials: ["DMD, Boston University", "Orthodontic Residency, USC", "Diamond Invisalign Provider"],
    },
  ];

  const team = [
    { name: "Sarah Kim", role: "Office Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" },
    { name: "Emily Wong", role: "Dental Hygienist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
    { name: "Jessica Lee", role: "Dental Hygienist", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop" },
    { name: "Michael Chen", role: "Dental Assistant", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { name: "Ashley Yamamoto", role: "Patient Coordinator", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" },
    { name: "David Park", role: "Insurance Specialist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" },
  ];

  const values = [
    {
      title: "Patient-Centered Care",
      description: "Every treatment plan is customized to your unique needs, goals, and comfort level.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Advanced Technology",
      description: "We invest in the latest dental technology for more accurate diagnoses and comfortable treatments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Comfort First",
      description: "From our spa-like atmosphere to gentle techniques, your comfort is always our priority.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Community Focus",
      description: "We're proud to serve Hawaii's families and give back through community health initiatives.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
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
              <Link href="/dental-demo/services" className="text-gray-700 hover:text-teal-600 transition font-medium">Services</Link>
              <Link href="/dental-demo/about" className="text-teal-600 font-medium">About Us</Link>
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
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[60vh]">
          <Image
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=800&fit=crop"
            alt="Aloha Dental Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-40 text-center text-white">
          <span className="text-sm font-semibold text-teal-300 uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
            Caring for Hawaii&apos;s Smiles
            <span className="block text-teal-400">Since 2009</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We&apos;re more than just a dental practice. We&apos;re a team of passionate professionals
            dedicated to helping you and your family achieve optimal oral health.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Built on Trust, Driven by Excellence
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Aloha Dental was founded in 2009 by Dr. Lani Nakamura with a simple mission: to provide
                    exceptional dental care in a warm, welcoming environment where patients feel like family.
                  </p>
                  <p>
                    What started as a small practice has grown into one of Honolulu&apos;s most trusted dental
                    offices, serving over 10,000 patients from across the islands. Our success is built on
                    listening to our patients, staying at the forefront of dental technology, and never
                    compromising on quality.
                  </p>
                  <p>
                    Today, our team of three dentists and dedicated support staff continues to uphold the
                    values that made Aloha Dental what it is: compassion, excellence, and a genuine love
                    for what we do.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop"
                  alt="Modern dental office"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-teal-100">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6 text-teal-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctors */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Dentists</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Meet Your Care Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced dentists are dedicated to providing you with the highest quality care
            </p>
          </div>

          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={500}
                    height={600}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
                    {doctor.specialties}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-lg text-teal-600 font-medium mb-4">{doctor.title}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{doctor.bio}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Credentials:</h4>
                    <ul className="space-y-1">
                      {doctor.credentials.map((cred, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {cred}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              The People Behind Your Smile
            </h2>
            <p className="text-gray-600">
              Our friendly staff is here to make your visit as comfortable as possible
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Meet Us?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Schedule your first visit and experience the Aloha Dental difference
          </p>
          <Link
            href="/dental-demo/booking"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition"
          >
            Book Your Appointment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2026 Aloha Dental. Demo by <Link href="/" className="text-teal-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
