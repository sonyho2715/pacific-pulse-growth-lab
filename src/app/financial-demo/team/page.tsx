"use client";

import Link from "next/link";
import Image from "next/image";

export default function FinancialTeamPage() {
  const leadership = [
    {
      name: "James Nakamura",
      title: "Managing Partner, CPA, CFP",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
      bio: "James founded Summit Financial Group in 1999 with a vision of providing personalized financial guidance to Hawaii families and businesses. With over 30 years of experience, he specializes in complex tax planning and business advisory.",
      credentials: ["CPA (Hawaii, California)", "Certified Financial Planner (CFP)", "MBA, University of Hawaii"],
      specialties: ["Business Tax Strategy", "Succession Planning", "Wealth Management"],
      email: "james@summitfinancial.com",
    },
    {
      name: "Sarah Chen",
      title: "Partner, CPA, MST",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
      bio: "Sarah leads our tax practice with expertise in individual and business taxation. She's known for her proactive approach to tax planning and her ability to explain complex strategies in simple terms.",
      credentials: ["CPA (Hawaii)", "Master of Science in Taxation", "Enrolled Agent (EA)"],
      specialties: ["Individual Tax Planning", "Real Estate Taxation", "IRS Representation"],
      email: "sarah@summitfinancial.com",
    },
    {
      name: "Michael Torres",
      title: "Partner, CPA, CFA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      bio: "Michael heads our financial planning and investment advisory services. His analytical approach and deep market knowledge help clients build and protect their wealth for future generations.",
      credentials: ["CPA (Hawaii)", "Chartered Financial Analyst (CFA)", "Certified Financial Planner (CFP)"],
      specialties: ["Retirement Planning", "Investment Advisory", "Estate Planning"],
      email: "michael@summitfinancial.com",
    },
  ];

  const team = [
    {
      name: "Lisa Wong",
      title: "Senior Tax Manager, CPA",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
      credentials: ["CPA", "EA"],
      specialties: ["Business Taxation", "Multi-State Returns"],
    },
    {
      name: "David Kim",
      title: "Senior Accountant, CPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      credentials: ["CPA", "QuickBooks ProAdvisor"],
      specialties: ["Bookkeeping", "Financial Statements"],
    },
    {
      name: "Jennifer Yamamoto",
      title: "Financial Planner, CFP",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop",
      credentials: ["CFP", "ChFC"],
      specialties: ["Retirement Planning", "Insurance Analysis"],
    },
    {
      name: "Robert Tanaka",
      title: "Tax Specialist, EA",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
      credentials: ["EA", "CTEC"],
      specialties: ["Individual Taxes", "IRS Resolution"],
    },
    {
      name: "Amanda Lee",
      title: "Staff Accountant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      credentials: ["BS Accounting", "QuickBooks Certified"],
      specialties: ["Payroll", "AP/AR Management"],
    },
    {
      name: "Kevin Pham",
      title: "Junior Accountant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      credentials: ["BS Finance", "CPA Candidate"],
      specialties: ["Bookkeeping", "Tax Preparation"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/financial-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">Summit Financial</div>
                <div className="text-xs text-slate-500 -mt-0.5">GROUP</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/financial-demo" className="text-slate-600 font-medium hover:text-slate-800 transition">Home</Link>
              <Link href="/financial-demo/services" className="text-slate-600 font-medium hover:text-slate-800 transition">Services</Link>
              <Link href="/financial-demo/team" className="text-indigo-600 font-medium">Our Team</Link>
              <Link href="/financial-demo/resources" className="text-slate-600 font-medium hover:text-slate-800 transition">Resources</Link>
              <Link href="/financial-demo/contact" className="text-slate-600 font-medium hover:text-slate-800 transition">Contact</Link>
            </div>

            <Link
              href="/financial-demo/contact"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Meet the Experts Behind Your Success
            </h1>
            <p className="text-xl text-slate-600">
              Our team of certified professionals brings decades of combined experience to help you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-12">Leadership Team</h2>

          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                  <p className="text-indigo-600 font-medium mb-4">{leader.title}</p>
                  <p className="text-slate-600 mb-6 leading-relaxed">{leader.bio}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">Credentials</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.credentials.map((credential, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">Specialties</h4>
                    <ul className="space-y-2">
                      {leader.specialties.map((specialty, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600">
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {leader.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-12">Our Professional Staff</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{member.name}</h3>
                    <p className="text-sm text-indigo-600 mb-2">{member.title}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.credentials.map((cred, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Specialties</p>
                  <p className="text-sm text-slate-600">{member.specialties.join(" • ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Integrity",
                description: "We act with honesty and transparency in every interaction.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Excellence",
                description: "We pursue the highest standards in everything we do.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Relationships",
                description: "We build lasting partnerships based on trust and respect.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Education",
                description: "We empower clients with knowledge to make informed decisions.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Schedule a free consultation to discuss your financial goals.
          </p>
          <Link
            href="/financial-demo/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">Summit Financial Group</span>
          </div>
          <p>&copy; 2026 Summit Financial Group. Demo by <Link href="/" className="text-indigo-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
