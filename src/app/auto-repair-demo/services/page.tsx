"use client";

import Link from "next/link";

export default function AutoRepairServicesPage() {
  const serviceCategories = [
    {
      id: "maintenance",
      title: "Preventive Maintenance",
      description: "Keep your vehicle running smoothly with regular maintenance services.",
      services: [
        { name: "Conventional Oil Change", price: "$39.99", description: "Up to 5 quarts, filter included, 21-point inspection" },
        { name: "Synthetic Oil Change", price: "$69.99", description: "Up to 5 quarts full synthetic, filter included, 21-point inspection" },
        { name: "Tire Rotation", price: "$24.99", description: "Rotate all 4 tires, check tire pressure, inspect tread depth" },
        { name: "Brake Inspection", price: "FREE", description: "Visual inspection of brake pads, rotors, and brake fluid" },
        { name: "30/60/90K Service", price: "Call for quote", description: "Factory-recommended maintenance at key mileage intervals" },
        { name: "Tune-Up", price: "Starting at $149", description: "Spark plugs, filters, fluid top-offs, system checks" },
        { name: "Coolant Flush", price: "$119.99", description: "Complete cooling system flush and refill with new coolant" },
        { name: "Transmission Service", price: "$179.99", description: "Fluid exchange, filter replacement (if applicable)" },
      ],
    },
    {
      id: "brakes",
      title: "Brake Services",
      description: "Your safety is our priority. Complete brake system services.",
      services: [
        { name: "Brake Pad Replacement (Front or Rear)", price: "Starting at $149", description: "Quality brake pads, rotor inspection included" },
        { name: "Brake Pad & Rotor Package", price: "Starting at $299", description: "New pads and rotors, per axle" },
        { name: "Brake Fluid Flush", price: "$89.99", description: "Complete brake fluid exchange" },
        { name: "Brake Caliper Replacement", price: "Call for quote", description: "OEM or aftermarket calipers available" },
        { name: "Brake Line Repair", price: "Call for quote", description: "Repair or replacement of damaged brake lines" },
        { name: "ABS Diagnostics", price: "$89.99", description: "Computer diagnostics for ABS warning lights" },
      ],
    },
    {
      id: "engine",
      title: "Engine Services",
      description: "From minor repairs to major overhauls, we handle it all.",
      services: [
        { name: "Check Engine Light Diagnosis", price: "$89.99", description: "Computer scan, identify codes, detailed report" },
        { name: "Timing Belt Replacement", price: "Starting at $499", description: "Belt, tensioner, water pump (recommended)" },
        { name: "Head Gasket Repair", price: "Call for quote", description: "Complete head gasket replacement service" },
        { name: "Engine Replacement", price: "Call for quote", description: "New, rebuilt, or used engine options" },
        { name: "Fuel System Cleaning", price: "$129.99", description: "Injector cleaning, fuel system treatment" },
        { name: "Spark Plug Replacement", price: "Starting at $99", description: "4-cylinder price, additional for V6/V8" },
        { name: "Valve Cover Gasket", price: "Starting at $199", description: "Stop oil leaks at valve cover" },
        { name: "Oil Leak Diagnosis", price: "$89.99", description: "Identify source of oil leaks" },
      ],
    },
    {
      id: "electrical",
      title: "Electrical & A/C",
      description: "Keep your electronics working and stay cool in Hawaii's heat.",
      services: [
        { name: "Battery Test & Replacement", price: "Test FREE / Battery from $129", description: "Free testing, quality batteries with warranty" },
        { name: "Alternator Replacement", price: "Starting at $299", description: "New or remanufactured alternators" },
        { name: "Starter Replacement", price: "Starting at $249", description: "Diagnose and replace faulty starters" },
        { name: "A/C Recharge", price: "$149.99", description: "Evacuate and recharge with R134a refrigerant" },
        { name: "A/C Compressor Replacement", price: "Starting at $599", description: "Compressor, receiver/drier, system recharge" },
        { name: "A/C Leak Detection", price: "$89.99", description: "UV dye test to locate refrigerant leaks" },
        { name: "Power Window Repair", price: "Starting at $149", description: "Motor, regulator, or switch replacement" },
        { name: "Lighting Repair", price: "Starting at $49", description: "Headlights, taillights, turn signals" },
      ],
    },
    {
      id: "suspension",
      title: "Steering & Suspension",
      description: "Smooth rides and precise handling.",
      services: [
        { name: "Wheel Alignment", price: "$89.99", description: "4-wheel computerized alignment" },
        { name: "Strut Replacement", price: "Starting at $399", description: "Per pair, includes alignment" },
        { name: "Shock Replacement", price: "Starting at $299", description: "Per pair, quality shocks" },
        { name: "Tie Rod Replacement", price: "Starting at $149", description: "Inner or outer, includes alignment" },
        { name: "Ball Joint Replacement", price: "Starting at $199", description: "Upper or lower ball joints" },
        { name: "Power Steering Service", price: "$99.99", description: "Fluid flush, pump inspection" },
        { name: "CV Axle Replacement", price: "Starting at $249", description: "Per axle, eliminate clicking sounds" },
      ],
    },
    {
      id: "inspection",
      title: "Inspections & Diagnostics",
      description: "State inspections and comprehensive vehicle diagnostics.",
      services: [
        { name: "Hawaii State Safety Inspection", price: "$20.00", description: "Official state safety inspection" },
        { name: "Pre-Purchase Inspection", price: "$99.99", description: "150+ point inspection before you buy" },
        { name: "Computer Diagnostics", price: "$89.99", description: "Full system scan and diagnosis" },
        { name: "Road Trip Inspection", price: "$49.99", description: "Safety check before long trips" },
        { name: "Fluid Level Check", price: "FREE", description: "All fluids checked and topped off" },
      ],
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
              <Link href="/auto-repair-demo/services" className="text-white font-medium">Services</Link>
              <Link href="/auto-repair-demo/about" className="text-slate-300 font-medium hover:text-white transition">About Us</Link>
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
      <section className="pt-32 pb-12 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">Services & Pricing</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            What We Fix
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Transparent pricing on all services. No hidden fees, no surprises. Just honest auto repair.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6 overflow-x-auto py-4">
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-sm font-medium text-slate-600 hover:text-red-600 whitespace-nowrap transition"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Price Note */}
      <section className="py-6 px-4 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> Prices shown are starting prices for common vehicles. Final pricing depends on your specific vehicle make/model. We always provide a detailed estimate before any work begins.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-16 px-4 ${catIndex % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{category.title}</h2>
              <p className="text-slate-600">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-5 bg-white rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-md transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-slate-500">{service.description}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className={`font-bold ${service.price === "FREE" ? "text-green-600" : "text-red-600"}`}>
                      {service.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Warranty */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">2-Year/24,000-Mile Warranty</h2>
          <p className="text-slate-300 mb-8">
            We stand behind our work. All repairs come with our comprehensive warranty covering both parts and labor. If something goes wrong, bring it back and we'll make it right.
          </p>
          <Link
            href="/auto-repair-demo/appointments"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Schedule Service
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
