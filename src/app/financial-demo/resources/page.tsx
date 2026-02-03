"use client";

import Link from "next/link";

export default function FinancialResourcesPage() {
  const taxDeadlines = [
    { date: "Jan 15", description: "Q4 estimated tax payment due" },
    { date: "Jan 31", description: "W-2s and 1099s must be sent to employees/contractors" },
    { date: "Mar 15", description: "S-Corp and Partnership returns due (or extension)" },
    { date: "Apr 15", description: "Individual and C-Corp returns due (or extension)" },
    { date: "Apr 15", description: "Q1 estimated tax payment due" },
    { date: "Jun 15", description: "Q2 estimated tax payment due" },
    { date: "Sep 15", description: "Q3 estimated tax payment due" },
    { date: "Sep 15", description: "Extended S-Corp and Partnership returns due" },
    { date: "Oct 15", description: "Extended Individual returns due" },
  ];

  const guides = [
    {
      title: "Small Business Tax Deductions Guide",
      description: "A comprehensive guide to maximizing your business deductions legally and effectively.",
      category: "Tax Planning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      ),
    },
    {
      title: "Retirement Planning Checklist",
      description: "Essential steps to ensure you're on track for a comfortable retirement.",
      category: "Financial Planning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "QuickBooks Setup Best Practices",
      description: "How to set up QuickBooks correctly for clean books and easy tax preparation.",
      category: "Accounting",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Hawaii GET Tax Guide for Small Business",
      description: "Understanding Hawaii's General Excise Tax and how to stay compliant.",
      category: "Tax Planning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
    },
    {
      title: "Year-End Tax Planning Strategies",
      description: "Proactive moves to make before December 31st to reduce your tax burden.",
      category: "Tax Planning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Business Entity Comparison",
      description: "LLC vs S-Corp vs C-Corp: Which structure is right for your business?",
      category: "Business Advisory",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "When should I file my taxes?",
      answer: "Individual tax returns are due April 15th, but we recommend filing as early as possible once you have all your documents. If you need more time, we can file an extension, giving you until October 15th to file (though any taxes owed are still due April 15th).",
    },
    {
      question: "How do I know if I should be an S-Corp?",
      answer: "Generally, if your business profits exceed $40,000-$50,000 annually, you may benefit from S-Corp election due to self-employment tax savings. However, this depends on many factors including your state, other income, and business structure. We recommend a consultation to analyze your specific situation.",
    },
    {
      question: "What records should I keep for my business?",
      answer: "Keep all receipts, invoices, bank statements, and financial records for at least 7 years. For employees, keep payroll records indefinitely. We recommend using cloud-based accounting software like QuickBooks to maintain organized digital records.",
    },
    {
      question: "Do I need to make estimated tax payments?",
      answer: "If you expect to owe $1,000 or more in taxes when you file your return, you generally need to make quarterly estimated payments. This applies to self-employed individuals, business owners, and those with significant investment income.",
    },
    {
      question: "What's the difference between a CPA and an accountant?",
      answer: "A CPA (Certified Public Accountant) has passed a rigorous exam, met education and experience requirements, and maintains ongoing education. CPAs can represent you before the IRS, sign audited financial statements, and are held to high ethical standards. Not all accountants are CPAs.",
    },
    {
      question: "How can I reduce my tax liability?",
      answer: "Common strategies include maximizing retirement contributions, timing income and deductions, proper business structure, taking advantage of all eligible credits and deductions, and year-round tax planning rather than just at filing time. We create customized strategies based on your situation.",
    },
  ];

  const calculators = [
    {
      name: "Tax Withholding Estimator",
      description: "Check if you're having the right amount withheld from your paycheck",
      icon: "🧮",
    },
    {
      name: "Retirement Savings Calculator",
      description: "See if you're on track for your retirement goals",
      icon: "📊",
    },
    {
      name: "Self-Employment Tax Calculator",
      description: "Estimate your self-employment tax liability",
      icon: "💼",
    },
    {
      name: "Home Office Deduction Calculator",
      description: "Calculate your potential home office deduction",
      icon: "🏠",
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
              <Link href="/financial-demo/team" className="text-slate-600 font-medium hover:text-slate-800 transition">Our Team</Link>
              <Link href="/financial-demo/resources" className="text-indigo-600 font-medium">Resources</Link>
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
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Financial Tools & Guides
            </h1>
            <p className="text-xl text-slate-600">
              Free resources to help you make informed financial decisions and stay organized throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Calendar */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2026 Tax Calendar</h2>
              <p className="text-slate-600 mb-6">
                Key deadlines to keep in mind throughout the year. Missing these dates can result in penalties and interest.
              </p>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-sm text-amber-800">
                    Need help meeting a deadline? Contact us early to ensure timely filing.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-[100px_1fr] divide-y divide-slate-200">
                  {taxDeadlines.map((deadline, index) => (
                    <div key={index} className="contents">
                      <div className="p-4 bg-indigo-50 font-semibold text-indigo-900">
                        {deadline.date}
                      </div>
                      <div className="p-4 text-slate-600">
                        {deadline.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Free Guides & Resources</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <h3 className="font-bold text-slate-900 mt-1 mb-2">{guide.title}</h3>
                    <p className="text-sm text-slate-600">{guide.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                    Download PDF
                  </span>
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Financial Calculators</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculators.map((calc, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-4">{calc.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{calc.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{calc.description}</p>
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1">
                  Use Calculator
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-sm flex-shrink-0">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have a question that's not listed here?</p>
            <Link
              href="/financial-demo/contact"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-indigo-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-indigo-200 mb-8">
            Subscribe to our newsletter for tax tips, deadline reminders, and financial insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button
              type="submit"
              className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-indigo-300 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
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
