"use client";

import Link from "next/link";
import Image from "next/image";

export default function AutoRepairAboutPage() {
  const team = [
    {
      name: "Mike Tanaka",
      title: "Owner & Master Technician",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      experience: "30+ years",
      certifications: ["ASE Master Technician", "Honda & Toyota Certified", "Hybrid Specialist"],
      bio: "Mike started working on cars at his father's shop in Wahiawa. After earning his ASE Master certification, he opened Island Auto Works in 1999 with one goal: provide honest, quality repairs that people can trust.",
    },
    {
      name: "Danny Reyes",
      title: "Lead Technician",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      experience: "15 years",
      certifications: ["ASE Certified", "Diesel Specialist", "A/C Certified"],
      bio: "Danny specializes in diesel trucks and heavy-duty vehicles. When he's not under the hood, he's restoring classic cars and coaching youth baseball.",
    },
    {
      name: "Kenji Yamamoto",
      title: "Senior Technician",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      experience: "12 years",
      certifications: ["ASE Certified", "European Vehicle Specialist", "Electrical Systems"],
      bio: "Kenji trained at the BMW Performance Center before joining our team. He's our go-to for European vehicles and complex electrical diagnostics.",
    },
    {
      name: "Leilani Wong",
      title: "Service Advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      experience: "8 years",
      certifications: ["ASE Service Consultant", "Customer Service Excellence"],
      bio: "Leilani is the friendly voice you'll hear on the phone and the first face you'll see at the shop. She's committed to making sure every customer understands their repair options.",
    },
  ];

  const timeline = [
    { year: "1999", event: "Mike Tanaka opens Island Auto Works in a small 2-bay shop in Aiea" },
    { year: "2003", event: "Expanded to current 6-bay facility to meet growing demand" },
    { year: "2008", event: "Became AAA Approved Auto Repair facility" },
    { year: "2012", event: "Added hybrid and electric vehicle service capabilities" },
    { year: "2015", event: "Named NAPA AutoCare Center of the Year - Hawaii" },
    { year: "2020", event: "Upgraded to latest diagnostic equipment and added online scheduling" },
    { year: "2024", event: "Celebrating 25 years of service to Hawaii's families" },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Honesty",
      description: "We'll never recommend a repair you don't need. Period.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Quality",
      description: "We use quality parts and stand behind our work with a real warranty.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community",
      description: "We're your neighbors, invested in keeping Hawaii's families safe on the road.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Efficiency",
      description: "We respect your time and work to get you back on the road quickly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/auto-repair-demo" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Island Auto Works</div>
                <div className="text-xs text-slate-400">Honest Auto Repair Since 1999</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/auto-repair-demo" className="text-slate-300 font-medium hover:text-white transition">Home</Link>
              <Link href="/auto-repair-demo/services" className="text-slate-300 font-medium hover:text-white transition">Services</Link>
              <Link href="/auto-repair-demo/about" className="text-white font-medium">About Us</Link>
              <Link href="/auto-repair-demo/appointments" className="text-slate-300 font-medium hover:text-white transition">Appointments</Link>
              <Link href="/auto-repair-demo/contact" className="text-slate-300 font-medium hover:text-white transition">Contact</Link>
            </div>

            <Link
              href="/auto-repair-demo/appointments"
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&h=600&fit=crop"
            alt="Auto shop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            25 Years of Honest Service
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Family-owned since 1999, we've built our reputation on doing right by our customers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Island Auto Works started in 1999 when Mike Tanaka took a leap of faith and opened a small two-bay shop in Aiea. After years of working at dealerships, Mike was frustrated by the pressure to upsell unnecessary services and the impersonal assembly-line approach to repairs.
                </p>
                <p>
                  He believed there was a better way. Treat customers like family, explain what's really wrong with their car, give them honest options, and stand behind your work. Simple ideas, but revolutionary in an industry known for the opposite.
                </p>
                <p>
                  Word spread quickly. Customers appreciated being told "your brakes are fine, just dirty" instead of being sold a brake job they didn't need. They told their friends. Those friends told their friends. And Island Auto Works grew.
                </p>
                <p>
                  Today, we have a 6-bay facility with a team of ASE-certified technicians, but our approach hasn't changed. Every customer is still treated like family, every repair is still done right the first time, and every invoice still reflects honest work at fair prices.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6da53?w=800&h=600&fit=crop"
                  alt="Our shop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Stand For</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every repair, every interaction, every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our technicians have over 65 years of combined experience. They're not just certified. They're passionate about what they do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition">
                <div className="flex gap-6">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-2">{member.title}</p>
                    <p className="text-sm text-slate-500">{member.experience} experience</p>
                  </div>
                </div>
                <p className="text-slate-600 mt-4 text-sm leading-relaxed">{member.bio}</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-20 text-right flex-shrink-0">
                  <span className="text-red-500 font-bold">{item.year}</span>
                </div>
                <div className="w-px bg-slate-700 relative">
                  <div className="absolute top-1 -left-1.5 w-3 h-3 bg-red-600 rounded-full" />
                </div>
                <div className="pb-6">
                  <p className="text-slate-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Facility</h2>
            <p className="text-slate-600">State-of-the-art equipment in a clean, professional environment.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1597766659890-4ffa31f172f3?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
            ].map((src, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Facility ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { label: "Service Bays", value: "6" },
              { label: "Diagnostic Stations", value: "3" },
              { label: "Waiting Area Seats", value: "12" },
              { label: "Free WiFi", value: "Yes" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">{item.value}</div>
                <div className="text-slate-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-red-100 mb-8">
            See for yourself why thousands of Hawaii families trust Island Auto Works with their vehicles.
          </p>
          <Link
            href="/auto-repair-demo/appointments"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition"
          >
            Schedule Your First Visit
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">Island Auto Works</span>
          </div>
          <p>&copy; 2026 Island Auto Works. Demo by <Link href="/" className="text-red-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
