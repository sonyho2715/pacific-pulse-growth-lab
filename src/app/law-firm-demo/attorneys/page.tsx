"use client";

import Link from "next/link";
import Image from "next/image";

export default function LawFirmAttorneysPage() {
  const attorneys = [
    {
      name: "Michael K. Harrison",
      title: "Founding Partner",
      specialty: "Personal Injury, Civil Litigation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop",
      bio: "Michael founded Harrison Law Group in 1995 with a mission to provide exceptional legal representation to Hawaii's residents. With over 30 years of experience, he has recovered more than $30 million for personal injury victims. Michael is known for his aggressive courtroom advocacy and unwavering commitment to his clients.",
      education: [
        "J.D., University of Hawaii William S. Richardson School of Law, 1992",
        "B.A., Political Science, UCLA, 1989",
      ],
      barAdmissions: ["Hawaii State Bar", "U.S. District Court, District of Hawaii", "U.S. Court of Appeals, Ninth Circuit"],
      memberships: [
        "Hawaii State Bar Association",
        "American Association for Justice",
        "Hawaii Trial Lawyers Association (Past President)",
      ],
      awards: [
        "Super Lawyers, 2015-2024",
        "Best Lawyers in America, Personal Injury, 2018-2024",
        "Top 100 Trial Lawyers, National Trial Lawyers",
      ],
      email: "mharrison@harrisonlawgroup.com",
      phone: "(808) 555-1001",
    },
    {
      name: "Sarah J. Chen",
      title: "Senior Partner",
      specialty: "Family Law, Estate Planning",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop",
      bio: "Sarah brings compassion and strategic thinking to every family law case. She joined Harrison Law Group in 2005 and has since helped hundreds of families navigate divorce, custody disputes, and estate planning matters. Sarah is a certified family law specialist and trained mediator who believes in finding solutions that protect families while minimizing conflict.",
      education: [
        "J.D., Stanford Law School, 2003",
        "B.A., Psychology, University of Hawaii at Manoa, 2000",
      ],
      barAdmissions: ["Hawaii State Bar", "California State Bar (inactive)"],
      memberships: [
        "Hawaii State Bar Association, Family Law Section (Chair)",
        "American Academy of Matrimonial Lawyers",
        "Hawaii Mediators Association",
      ],
      awards: [
        "Super Lawyers, 2018-2024",
        "Top 50 Women Lawyers in Hawaii",
        "Excellence in Family Law Award, HSBA 2022",
      ],
      email: "schen@harrisonlawgroup.com",
      phone: "(808) 555-1002",
    },
    {
      name: "David R. Thompson",
      title: "Partner",
      specialty: "Criminal Defense, DUI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop",
      bio: "Before joining the defense side, David spent 8 years as a prosecutor in the Honolulu Prosecutor's Office. This experience gives him unique insight into how the prosecution builds cases, allowing him to craft powerful defense strategies. David has successfully defended clients in over 1,000 criminal cases, including complex federal matters.",
      education: [
        "J.D., Georgetown University Law Center, 2004",
        "B.S., Criminal Justice, University of Maryland, 2001",
      ],
      barAdmissions: ["Hawaii State Bar", "U.S. District Court, District of Hawaii"],
      memberships: [
        "Hawaii State Bar Association, Criminal Law Section",
        "National Association of Criminal Defense Lawyers",
        "Hawaii Association of Criminal Defense Lawyers",
      ],
      awards: [
        "Super Lawyers, 2019-2024",
        "10 Best Criminal Defense Attorneys, American Institute of Criminal Law Attorneys",
        "Avvo Clients' Choice Award, 2020-2024",
      ],
      email: "dthompson@harrisonlawgroup.com",
      phone: "(808) 555-1003",
    },
    {
      name: "Jennifer M. Nakamura",
      title: "Partner",
      specialty: "Business Law, Real Estate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop",
      bio: "Jennifer advises businesses of all sizes on corporate matters, real estate transactions, and commercial litigation. With an MBA in addition to her law degree, she brings a business-focused perspective to legal challenges. Jennifer has closed over $500 million in real estate transactions and helped launch dozens of successful Hawaii businesses.",
      education: [
        "J.D., UC Berkeley School of Law, 2008",
        "MBA, UC Berkeley Haas School of Business, 2008",
        "B.A., Economics, Stanford University, 2004",
      ],
      barAdmissions: ["Hawaii State Bar", "California State Bar"],
      memberships: [
        "Hawaii State Bar Association, Business Law Section",
        "Hawaii Association of Realtors (Legal Counsel)",
        "Chamber of Commerce of Hawaii",
      ],
      awards: [
        "Rising Stars, Super Lawyers, 2015-2019",
        "40 Under 40, Pacific Business News",
        "Best Commercial Real Estate Attorney, Honolulu Magazine 2023",
      ],
      email: "jnakamura@harrisonlawgroup.com",
      phone: "(808) 555-1004",
    },
    {
      name: "Robert K. Lau",
      title: "Associate",
      specialty: "Personal Injury, Workers' Compensation",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop",
      bio: "Robert is a dedicated advocate for injured workers and accident victims. Since joining the firm in 2018, he has recovered over $5 million for his clients. Robert's attention to detail and thorough case preparation have earned him a reputation for excellence among clients and colleagues alike.",
      education: [
        "J.D., University of Hawaii William S. Richardson School of Law, 2016",
        "B.A., History, University of Hawaii at Manoa, 2013",
      ],
      barAdmissions: ["Hawaii State Bar"],
      memberships: [
        "Hawaii State Bar Association",
        "Hawaii Trial Lawyers Association",
        "Workers' Compensation Section, HSBA",
      ],
      awards: [
        "Rising Stars, Super Lawyers, 2021-2024",
        "Top 40 Under 40 Trial Lawyers",
      ],
      email: "rlau@harrisonlawgroup.com",
      phone: "(808) 555-1005",
    },
    {
      name: "Amanda L. Reyes",
      title: "Associate",
      specialty: "Family Law, Immigration",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&h=750&fit=crop",
      bio: "Amanda is fluent in Spanish and Tagalog, allowing her to serve Hawaii's diverse community. She handles family law matters with sensitivity and also assists clients with immigration-related family issues. Amanda is passionate about helping families stay together and navigate complex legal systems.",
      education: [
        "J.D., Santa Clara University School of Law, 2019",
        "B.A., International Relations, USC, 2016",
      ],
      barAdmissions: ["Hawaii State Bar", "U.S. Immigration Court"],
      memberships: [
        "Hawaii State Bar Association",
        "American Immigration Lawyers Association",
        "Filipino Lawyers Association of Hawaii",
      ],
      awards: [
        "Pro Bono Service Award, HSBA 2022",
        "Emerging Lawyer, Hawaii Women Lawyers",
      ],
      email: "areyes@harrisonlawgroup.com",
      phone: "(808) 555-1006",
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
              <Link href="/law-firm-demo" className="text-slate-300 font-medium hover:text-amber-400 transition">Home</Link>
              <Link href="/law-firm-demo/practice-areas" className="text-slate-300 font-medium hover:text-amber-400 transition">Practice Areas</Link>
              <Link href="/law-firm-demo/attorneys" className="text-amber-400 font-medium">Attorneys</Link>
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
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Our Team</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">
            Meet Our Attorneys
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Our team of experienced attorneys brings diverse expertise and a shared commitment to achieving the best possible outcomes for our clients.
          </p>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {attorneys.map((attorney, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-lg">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="relative h-96 lg:h-auto">
                    <Image
                      src={attorney.image}
                      alt={attorney.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <div className="mb-6">
                      <h2 className="text-2xl font-serif font-bold">{attorney.name}</h2>
                      <p className="text-amber-600 font-semibold">{attorney.title}</p>
                      <p className="text-slate-600">{attorney.specialty}</p>
                    </div>

                    <p className="text-slate-600 mb-6">{attorney.bio}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-sm uppercase text-slate-500 mb-2">Education</h3>
                        <ul className="space-y-1 text-sm text-slate-600">
                          {attorney.education.map((edu, i) => (
                            <li key={i}>{edu}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-sm uppercase text-slate-500 mb-2">Bar Admissions</h3>
                        <ul className="space-y-1 text-sm text-slate-600">
                          {attorney.barAdmissions.map((bar, i) => (
                            <li key={i}>{bar}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-sm uppercase text-slate-500 mb-2">Memberships</h3>
                        <ul className="space-y-1 text-sm text-slate-600">
                          {attorney.memberships.map((mem, i) => (
                            <li key={i}>{mem}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-sm uppercase text-slate-500 mb-2">Awards & Recognition</h3>
                        <ul className="space-y-1 text-sm text-slate-600">
                          {attorney.awards.map((award, i) => (
                            <li key={i}>{award}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                      <a
                        href={`mailto:${attorney.email}`}
                        className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {attorney.email}
                      </a>
                      <a
                        href={`tel:${attorney.phone}`}
                        className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {attorney.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-slate-300 mb-8">
            Schedule a free consultation with one of our experienced attorneys today.
          </p>
          <Link
            href="/law-firm-demo/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <p>&copy; 2026 Harrison Law Group. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
