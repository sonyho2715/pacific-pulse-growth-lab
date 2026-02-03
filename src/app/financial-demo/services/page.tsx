"use client";

import Link from "next/link";

export default function FinancialServicesPage() {
  const serviceCategories = [
    {
      id: "tax",
      title: "Tax Services",
      description: "Strategic tax planning and preparation to minimize your tax burden and maximize your wealth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      ),
      services: [
        {
          name: "Individual Tax Preparation",
          description: "Comprehensive tax return preparation for individuals, including federal and state filings.",
          features: ["Federal & Hawaii state returns", "Schedule C self-employment", "Investment income reporting", "Deduction optimization"],
        },
        {
          name: "Business Tax Preparation",
          description: "Tax preparation for all business entity types, ensuring compliance and maximum deductions.",
          features: ["S-Corp & C-Corp returns", "Partnership returns", "LLC tax filings", "Multi-state filings"],
        },
        {
          name: "Tax Planning & Strategy",
          description: "Year-round tax planning to minimize liability through proactive strategies.",
          features: ["Quarterly tax projections", "Entity structure analysis", "Retirement contribution planning", "Year-end tax strategies"],
        },
        {
          name: "IRS Representation",
          description: "Expert representation for audits, notices, and tax disputes with the IRS and state agencies.",
          features: ["Audit representation", "Notice response", "Payment plans", "Penalty abatement"],
        },
      ],
    },
    {
      id: "accounting",
      title: "Accounting & Bookkeeping",
      description: "Keep your finances organized and your business compliant with our comprehensive accounting services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      services: [
        {
          name: "Monthly Bookkeeping",
          description: "Accurate and timely bookkeeping so you always know where your business stands financially.",
          features: ["Transaction categorization", "Bank reconciliation", "Accounts payable/receivable", "Monthly financial reports"],
        },
        {
          name: "Payroll Services",
          description: "Complete payroll processing including tax filings and employee management.",
          features: ["Payroll processing", "Tax deposit filings", "W-2 & 1099 preparation", "Direct deposit setup"],
        },
        {
          name: "Financial Statements",
          description: "Professionally prepared financial statements for management, lenders, or investors.",
          features: ["Income statements", "Balance sheets", "Cash flow statements", "Custom reports"],
        },
        {
          name: "QuickBooks Services",
          description: "Setup, training, and ongoing support for QuickBooks Online and Desktop.",
          features: ["Initial setup & conversion", "Custom chart of accounts", "Training & support", "Cleanup & troubleshooting"],
        },
      ],
    },
    {
      id: "planning",
      title: "Financial Planning",
      description: "Build and protect your wealth with personalized financial planning strategies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      services: [
        {
          name: "Retirement Planning",
          description: "Develop a comprehensive retirement strategy to ensure financial security in your golden years.",
          features: ["401(k) & IRA optimization", "Social Security analysis", "Retirement income planning", "Required distribution planning"],
        },
        {
          name: "Investment Advisory",
          description: "Guidance on building and managing an investment portfolio aligned with your goals.",
          features: ["Portfolio analysis", "Asset allocation", "Risk assessment", "Rebalancing strategies"],
        },
        {
          name: "Estate Planning Support",
          description: "Work with your attorney to create tax-efficient wealth transfer strategies.",
          features: ["Estate tax projections", "Trust tax returns", "Beneficiary planning", "Charitable giving strategies"],
        },
        {
          name: "Insurance Review",
          description: "Evaluate your insurance coverage to ensure adequate protection for your family and assets.",
          features: ["Life insurance analysis", "Disability coverage review", "Long-term care planning", "Policy comparison"],
        },
      ],
    },
    {
      id: "business",
      title: "Business Advisory",
      description: "Strategic guidance to help your business grow, become more profitable, and achieve long-term success.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      services: [
        {
          name: "Business Formation",
          description: "Guidance on selecting and setting up the right business structure for your situation.",
          features: ["Entity selection", "State registration", "EIN application", "Operating agreements"],
        },
        {
          name: "CFO Services",
          description: "Part-time CFO support to guide financial decisions without the full-time cost.",
          features: ["Financial strategy", "Cash flow management", "KPI tracking", "Board presentations"],
        },
        {
          name: "Business Valuation",
          description: "Professional valuations for sales, partnerships, or succession planning.",
          features: ["Market analysis", "Financial projections", "Valuation reports", "Buy/sell support"],
        },
        {
          name: "Succession Planning",
          description: "Prepare for business transition with a comprehensive succession strategy.",
          features: ["Exit strategy development", "Buyer identification", "Tax-efficient transfers", "Key employee retention"],
        },
      ],
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
              <Link href="/financial-demo/services" className="text-indigo-600 font-medium">Services</Link>
              <Link href="/financial-demo/team" className="text-slate-600 font-medium hover:text-slate-800 transition">Our Team</Link>
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
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Comprehensive Financial Solutions
            </h1>
            <p className="text-xl text-slate-600">
              From tax preparation to wealth management, we provide the expertise you need to achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto py-4">
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 whitespace-nowrap transition"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 px-4 ${catIndex % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-6 mb-12">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                {category.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{category.title}</h2>
                <p className="text-lg text-slate-600">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Note */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Transparent, Fair Pricing</h2>
          <p className="text-slate-600 mb-6">
            Our fees are based on the complexity of your situation, not hidden charges. We provide upfront quotes and work within your budget. Most individual tax returns start at $350, and monthly bookkeeping starts at $500/month.
          </p>
          <Link
            href="/financial-demo/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get a Custom Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Services You Need?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Schedule a free consultation and we'll help you identify the right solutions for your situation.
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
