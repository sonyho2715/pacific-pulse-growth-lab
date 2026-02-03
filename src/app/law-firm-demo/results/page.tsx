"use client";

import Link from "next/link";

export default function LawFirmResultsPage() {
  const featuredResults = [
    {
      amount: "$4.2 Million",
      type: "Medical Malpractice",
      description: "Settlement for a client who suffered permanent injuries due to a surgical error at a Honolulu hospital.",
      attorney: "Michael K. Harrison",
    },
    {
      amount: "$2.8 Million",
      type: "Auto Accident Verdict",
      description: "Jury verdict for a family injured by a drunk driver on H-1 freeway, covering medical expenses and lost wages.",
      attorney: "Michael K. Harrison",
    },
    {
      amount: "$1.5 Million",
      type: "Wrongful Death",
      description: "Settlement for the family of a construction worker killed due to unsafe working conditions.",
      attorney: "Robert K. Lau",
    },
    {
      amount: "Not Guilty",
      type: "Federal Criminal Defense",
      description: "Complete acquittal for client facing federal wire fraud charges with potential 20-year sentence.",
      attorney: "David R. Thompson",
    },
  ];

  const caseResults = {
    personalInjury: [
      { amount: "$4.2M", type: "Medical Malpractice - Surgical Error" },
      { amount: "$2.8M", type: "Auto Accident - DUI Defendant" },
      { amount: "$1.5M", type: "Wrongful Death - Workplace" },
      { amount: "$1.2M", type: "Slip & Fall - Commercial Property" },
      { amount: "$950K", type: "Motorcycle Accident" },
      { amount: "$875K", type: "Product Liability - Defective Equipment" },
      { amount: "$750K", type: "Pedestrian Accident" },
      { amount: "$650K", type: "Dog Bite - Severe Injury" },
      { amount: "$525K", type: "Medical Malpractice - Misdiagnosis" },
      { amount: "$475K", type: "Rear-End Collision" },
    ],
    criminalDefense: [
      { amount: "Not Guilty", type: "Federal Wire Fraud (20-year max)" },
      { amount: "Charges Dropped", type: "Drug Trafficking (Class A Felony)" },
      { amount: "Not Guilty", type: "Assault with Deadly Weapon" },
      { amount: "Reduced to Misdemeanor", type: "DUI with Injury" },
      { amount: "Case Dismissed", type: "Domestic Violence" },
      { amount: "Not Guilty", type: "Theft in the First Degree" },
      { amount: "Probation Only", type: "Embezzlement ($100K+)" },
      { amount: "Charges Dropped", type: "Sexual Assault Allegation" },
    ],
    familyLaw: [
      { amount: "Full Custody", type: "Contested Child Custody" },
      { amount: "$1.2M Settlement", type: "High-Asset Divorce" },
      { amount: "Favorable Modification", type: "Child Support Reduction" },
      { amount: "Protection Order", type: "Domestic Violence Case" },
      { amount: "Adoption Finalized", type: "Step-Parent Adoption" },
      { amount: "50/50 Custody", type: "Father's Rights Case" },
    ],
    businessLaw: [
      { amount: "$3.5M Settlement", type: "Breach of Contract" },
      { amount: "$2.1M Judgment", type: "Partnership Dispute" },
      { amount: "$1.8M", type: "Intellectual Property Infringement" },
      { amount: "Contract Voided", type: "Fraudulent Business Deal" },
      { amount: "$950K", type: "Employment Discrimination" },
      { amount: "Acquisition Complete", type: "$15M Business Sale" },
    ],
  };

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
              <Link href="/law-firm-demo/attorneys" className="text-slate-300 font-medium hover:text-amber-400 transition">Attorneys</Link>
              <Link href="/law-firm-demo/results" className="text-amber-400 font-medium">Results</Link>
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
          <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">Our Track Record</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-6">
            Case Results
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Over $50 million recovered for our clients. Here are some of the notable results we&apos;ve achieved.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-500">$50M+</div>
              <div className="text-slate-400 text-sm">Total Recovered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500">2,500+</div>
              <div className="text-slate-400 text-sm">Cases Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500">98%</div>
              <div className="text-slate-400 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500">0</div>
              <div className="text-slate-400 text-sm">Cases We Quit On</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Results */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-8">Featured Case Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredResults.map((result, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-amber-600">{result.amount}</div>
                    <div className="text-slate-900 font-semibold">{result.type}</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{result.description}</p>
                <p className="text-sm text-slate-500">Lead Attorney: <span className="font-medium text-slate-700">{result.attorney}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results by Category */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-8">Results by Practice Area</h2>

          <div className="space-y-12">
            {/* Personal Injury */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-red-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                Personal Injury
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {caseResults.personalInjury.map((result, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="text-xl font-bold text-amber-600">{result.amount}</div>
                    <div className="text-sm text-slate-600">{result.type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Criminal Defense */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </span>
                Criminal Defense
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {caseResults.criminalDefense.map((result, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="text-xl font-bold text-green-600">{result.amount}</div>
                    <div className="text-sm text-slate-600">{result.type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Family Law */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Family Law
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseResults.familyLaw.map((result, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="text-xl font-bold text-amber-600">{result.amount}</div>
                    <div className="text-sm text-slate-600">{result.type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Law */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Business Law
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseResults.businessLaw.map((result, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="text-xl font-bold text-amber-600">{result.amount}</div>
                    <div className="text-sm text-slate-600">{result.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-slate-100 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            <strong>Disclaimer:</strong> The case results listed above are examples of outcomes we have achieved for past clients. Every case is different, and prior results do not guarantee a similar outcome in your case. The information provided does not constitute legal advice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Let Us Fight for You</h2>
          <p className="text-slate-300 mb-8">
            Ready to see what our experienced attorneys can do for your case? Schedule a free, confidential consultation today.
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
