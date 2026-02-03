"use client";

import Link from "next/link";
import Image from "next/image";

export default function LawFirmDemoPage() {
  const practiceAreas = [
    {
      name: "Personal Injury",
      description: "Car accidents, slip & fall, medical malpractice, wrongful death",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      name: "Family Law",
      description: "Divorce, child custody, adoption, prenuptial agreements",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: "Business Law",
      description: "Contracts, business formation, mergers & acquisitions, litigation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "Criminal Defense",
      description: "DUI, drug charges, white collar crimes, federal cases",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      name: "Estate Planning",
      description: "Wills, trusts, probate, power of attorney, guardianship",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: "Real Estate",
      description: "Property transactions, disputes, landlord-tenant, zoning",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  const attorneys = [
    {
      name: "Michael K. Harrison",
      title: "Founding Partner",
      specialty: "Personal Injury, Civil Litigation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      name: "Sarah J. Chen",
      title: "Senior Partner",
      specialty: "Family Law, Estate Planning",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
    {
      name: "David R. Thompson",
      title: "Partner",
      specialty: "Criminal Defense, DUI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    },
  ];

  const results = [
    { amount: "$4.2M", type: "Medical Malpractice Settlement" },
    { amount: "$2.8M", type: "Auto Accident Verdict" },
    { amount: "$1.5M", type: "Wrongful Death Settlement" },
    { amount: "Not Guilty", type: "Federal Criminal Defense" },
  ];

  const testimonials = [
    {
      name: "Robert M.",
      text: "After my accident, Harrison Law Group fought tirelessly for my family. They secured a settlement that covered all our medical bills and lost wages. I can't thank them enough.",
      case: "Personal Injury",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Jennifer L.",
      text: "Going through a divorce was the hardest thing I've ever done. Sarah Chen was compassionate, professional, and always had my best interests at heart. She got me the custody arrangement I needed.",
      case: "Family Law",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "Thomas K.",
      text: "When I was facing serious criminal charges, David Thompson took my case when others wouldn't. His expertise and dedication resulted in all charges being dropped.",
      case: "Criminal Defense",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/law-firm-demo" className="flex items-center gap-3">
              <div className="flex items-center">
                <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <div className="ml-3">
                  <span className="text-xl font-serif font-bold text-white tracking-wide">HARRISON</span>
                  <span className="block text-xs text-amber-500 tracking-widest font-semibold">LAW GROUP</span>
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/law-firm-demo" className="text-amber-400 font-medium">Home</Link>
              <Link href="/law-firm-demo/practice-areas" className="text-slate-300 font-medium hover:text-amber-400 transition">Practice Areas</Link>
              <Link href="/law-firm-demo/attorneys" className="text-slate-300 font-medium hover:text-amber-400 transition">Attorneys</Link>
              <Link href="/law-firm-demo/results" className="text-slate-300 font-medium hover:text-amber-400 transition">Results</Link>
              <Link href="/law-firm-demo/contact" className="text-slate-300 font-medium hover:text-amber-400 transition">Contact</Link>
            </div>

            <Link
              href="/law-firm-demo/contact"
              className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded font-bold hover:bg-amber-400 transition"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop"
          alt="Law office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded text-amber-400 text-sm font-semibold mb-6">
              Trusted Legal Counsel Since 1995
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Fighting for Justice,
              <span className="block text-amber-400">
                Protecting Your Rights
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              When you&apos;re facing legal challenges, you need experienced attorneys who will fight relentlessly for your interests. We&apos;ve recovered over $50 million for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/law-firm-demo/contact"
                className="bg-amber-500 text-slate-900 px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition text-center"
              >
                Get Your Free Consultation
              </Link>
              <a
                href="tel:808-555-LAW1"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded font-bold text-lg border border-white/20 hover:bg-white/20 transition text-center"
              >
                Call (808) 555-LAW1
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-900 py-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-500">$50M+</div>
              <div className="text-slate-400 text-sm">Recovered for Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500">2,500+</div>
              <div className="text-slate-400 text-sm">Cases Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500">30+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500">5.0★</div>
              <div className="text-slate-400 text-sm">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">How We Can Help</span>
            <h2 className="text-4xl font-serif font-bold mt-2 mb-4">Practice Areas</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our attorneys have the expertise to handle a wide range of legal matters, providing personalized attention to every case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Link
                key={index}
                href="/law-firm-demo/practice-areas"
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group border border-slate-100"
              >
                <div className="w-16 h-16 rounded-lg bg-slate-900 flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{area.name}</h3>
                <p className="text-slate-600">{area.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/law-firm-demo/practice-areas"
              className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition"
            >
              View All Practice Areas
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-4xl font-serif font-bold mt-2 mb-6">
                Dedicated Advocates for Your Legal Needs
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                For over 30 years, Harrison Law Group has been a pillar of the Honolulu legal community. We combine big-firm resources with personalized attention, ensuring every client receives the dedicated representation they deserve.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">No Win, No Fee</h4>
                    <p className="text-slate-400 text-sm">For personal injury cases, you pay nothing unless we win your case.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">24/7 Availability</h4>
                    <p className="text-slate-400 text-sm">Legal emergencies don&apos;t wait. Neither do we.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Proven Track Record</h4>
                    <p className="text-slate-400 text-sm">Over $50 million recovered and 2,500+ cases won.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Personalized Attention</h4>
                    <p className="text-slate-400 text-sm">Work directly with experienced attorneys, not paralegals.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=700&fit=crop"
                alt="Attorneys meeting"
                width={600}
                height={700}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-amber-500 text-slate-900 p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Our Track Record</span>
            <h2 className="text-4xl font-serif font-bold mt-2 mb-4">Notable Case Results</h2>
            <p className="text-slate-600">Results we&apos;ve achieved for our clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={index} className="bg-slate-900 rounded-lg p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">{result.amount}</div>
                <div className="text-slate-400">{result.type}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/law-firm-demo/results"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded font-bold hover:bg-slate-800 transition"
            >
              View All Case Results
            </Link>
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Our Team</span>
            <h2 className="text-4xl font-serif font-bold mt-2 mb-4">Meet Our Attorneys</h2>
            <p className="text-slate-600">Experienced legal professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <Link
                key={index}
                href="/law-firm-demo/attorneys"
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-80">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{attorney.name}</h3>
                  <p className="text-amber-600 font-medium">{attorney.title}</p>
                  <p className="text-slate-600 text-sm mt-2">{attorney.specialty}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/law-firm-demo/attorneys"
              className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition"
            >
              Meet All Our Attorneys
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Client Stories</span>
            <h2 className="text-4xl font-serif font-bold mt-2">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-8 border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <span className="font-bold block">{testimonial.name}</span>
                    <span className="text-slate-500 text-sm">{testimonial.case}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Schedule a free, confidential consultation with one of our experienced attorneys. We&apos;ll review your case and explain your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/law-firm-demo/contact"
              className="bg-amber-500 text-slate-900 px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:808-555-LAW1"
              className="bg-white/10 text-white px-8 py-4 rounded font-bold text-lg border border-white/20 hover:bg-white/20 transition"
            >
              Call (808) 555-LAW1
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <div className="ml-2">
                  <span className="text-lg font-serif font-bold text-white">HARRISON</span>
                  <span className="block text-xs text-amber-500 font-semibold">LAW GROUP</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Serving Hawaii with integrity and excellence for over 30 years.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/law-firm-demo/practice-areas" className="hover:text-amber-400 transition">Personal Injury</Link></li>
                <li><Link href="/law-firm-demo/practice-areas" className="hover:text-amber-400 transition">Family Law</Link></li>
                <li><Link href="/law-firm-demo/practice-areas" className="hover:text-amber-400 transition">Criminal Defense</Link></li>
                <li><Link href="/law-firm-demo/practice-areas" className="hover:text-amber-400 transition">Business Law</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>100 Bishop Street, Suite 2000</li>
                <li>Honolulu, HI 96813</li>
                <li className="text-amber-500">(808) 555-LAW1</li>
                <li>info@harrisonlawgroup.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Hours</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Monday - Friday: 8AM - 6PM</li>
                <li>Saturday: By Appointment</li>
                <li>Sunday: Closed</li>
                <li className="text-amber-500 font-semibold">24/7 Emergency Line</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2026 Harrison Law Group. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
            <p className="mt-2 text-xs">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
