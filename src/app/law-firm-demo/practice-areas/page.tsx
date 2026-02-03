"use client";

import Link from "next/link";
import Image from "next/image";

export default function LawFirmPracticeAreasPage() {
  const practiceAreas = [
    {
      id: "personal-injury",
      name: "Personal Injury",
      tagline: "Fighting for the Compensation You Deserve",
      description: "When you've been injured due to someone else's negligence, you need an experienced advocate on your side. Our personal injury attorneys have recovered millions for accident victims across Hawaii.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=500&fit=crop",
      services: [
        "Car & Auto Accidents",
        "Motorcycle Accidents",
        "Truck Accidents",
        "Slip & Fall Injuries",
        "Medical Malpractice",
        "Wrongful Death",
        "Product Liability",
        "Workplace Injuries",
      ],
      features: [
        "No Win, No Fee - You pay nothing unless we win",
        "Free case evaluation",
        "We handle all communication with insurance companies",
        "Access to top medical experts",
      ],
    },
    {
      id: "family-law",
      name: "Family Law",
      tagline: "Protecting What Matters Most",
      description: "Family legal matters are among the most emotional and challenging situations you may face. Our compassionate family law attorneys guide you through these difficult times with care and expertise.",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=500&fit=crop",
      services: [
        "Divorce & Legal Separation",
        "Child Custody & Visitation",
        "Child Support",
        "Spousal Support / Alimony",
        "Property Division",
        "Prenuptial Agreements",
        "Adoption",
        "Domestic Violence Protection",
      ],
      features: [
        "Collaborative divorce options available",
        "Child-focused custody solutions",
        "Mediation services to reduce conflict",
        "Discreet handling of sensitive matters",
      ],
    },
    {
      id: "criminal-defense",
      name: "Criminal Defense",
      tagline: "Your Rights, Our Priority",
      description: "Facing criminal charges can be terrifying. Our aggressive defense attorneys have successfully defended thousands of clients, from misdemeanors to serious felonies. We fight to protect your freedom and future.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
      services: [
        "DUI / DWI Defense",
        "Drug Crimes",
        "Assault & Battery",
        "Theft Crimes",
        "White Collar Crimes",
        "Federal Crimes",
        "Juvenile Defense",
        "Expungement",
      ],
      features: [
        "24/7 emergency availability",
        "Former prosecutor on our team",
        "Aggressive courtroom advocacy",
        "Protecting your record and reputation",
      ],
    },
    {
      id: "business-law",
      name: "Business Law",
      tagline: "Legal Solutions for Business Success",
      description: "From startups to established enterprises, our business attorneys provide strategic legal counsel to help your business thrive. We handle everything from formation to complex litigation.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      services: [
        "Business Formation & Structure",
        "Contract Drafting & Review",
        "Mergers & Acquisitions",
        "Partnership Disputes",
        "Employment Law",
        "Intellectual Property",
        "Business Litigation",
        "Regulatory Compliance",
      ],
      features: [
        "Proactive legal strategies",
        "Cost-effective solutions for businesses of all sizes",
        "Industry-specific expertise",
        "Long-term business relationships",
      ],
    },
    {
      id: "estate-planning",
      name: "Estate Planning",
      tagline: "Securing Your Legacy",
      description: "Protect your family and assets with comprehensive estate planning. Our attorneys help you create a plan that ensures your wishes are honored and your loved ones are provided for.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
      services: [
        "Wills & Living Wills",
        "Revocable & Irrevocable Trusts",
        "Power of Attorney",
        "Healthcare Directives",
        "Probate Administration",
        "Trust Administration",
        "Guardianship",
        "Estate Tax Planning",
      ],
      features: [
        "Personalized estate plans",
        "Regular plan reviews and updates",
        "Minimize estate taxes legally",
        "Avoid probate complications",
      ],
    },
    {
      id: "real-estate",
      name: "Real Estate Law",
      tagline: "Navigating Property Matters",
      description: "Whether you're buying, selling, or dealing with property disputes, our real estate attorneys provide the guidance you need for successful transactions and resolution of conflicts.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      services: [
        "Residential Transactions",
        "Commercial Real Estate",
        "Title Issues & Disputes",
        "Landlord-Tenant Matters",
        "Zoning & Land Use",
        "Construction Disputes",
        "Foreclosure Defense",
        "Property Liens",
      ],
      features: [
        "Thorough due diligence",
        "Clear communication throughout transactions",
        "Strong negotiation skills",
        "Local market knowledge",
      ],
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
              <Link href="/law-firm-demo/practice-areas" className="text-amber-400 font-medium">Practice Areas</Link>
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
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Legal Expertise</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">
            Practice Areas
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Our attorneys bring decades of combined experience across a wide range of legal disciplines, providing comprehensive representation for all your legal needs.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {practiceAreas.map((area, index) => (
              <div
                key={area.id}
                id={area.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={area.image}
                      alt={area.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">{area.tagline}</span>
                  <h2 className="text-3xl font-serif font-bold mt-2 mb-4">{area.name}</h2>
                  <p className="text-slate-600 mb-6">{area.description}</p>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3">Services Include:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {area.services.map((service, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6 mb-6">
                    <h3 className="font-bold mb-3">Why Choose Us:</h3>
                    <ul className="space-y-2">
                      {area.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/law-firm-demo/contact"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded font-bold hover:bg-slate-800 transition"
                  >
                    Discuss Your {area.name} Case
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Not Sure Which Practice Area?</h2>
          <p className="text-slate-300 mb-8">
            Our attorneys handle a wide range of legal matters. Contact us for a free consultation and we&apos;ll connect you with the right attorney for your situation.
          </p>
          <Link
            href="/law-firm-demo/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition"
          >
            Get Your Free Consultation
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
