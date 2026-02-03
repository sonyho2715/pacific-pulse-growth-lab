"use client";

import Link from "next/link";
import Image from "next/image";

export default function RealEstateAboutPage() {
  const stats = [
    { value: "$250M+", label: "Total Sales Volume" },
    { value: "15+", label: "Years Experience" },
    { value: "400+", label: "Homes Sold" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const awards = [
    { year: "2025", title: "Top 1% of Realtors Nationwide", org: "Real Trends" },
    { year: "2024", title: "Hawaii's Best Real Estate Agent", org: "Honolulu Magazine" },
    { year: "2024", title: "Chairman's Circle Platinum", org: "Berkshire Hathaway" },
    { year: "2023", title: "Top Luxury Agent - Oahu", org: "Luxury Portfolio International" },
    { year: "2023", title: "Five Star Professional Award", org: "Hawaii Business Magazine" },
    { year: "2022", title: "Rising Star Award", org: "Honolulu Board of Realtors" },
  ];

  const certifications = [
    "Certified Luxury Home Marketing Specialist (CLHMS)",
    "Accredited Buyer's Representative (ABR)",
    "Certified Residential Specialist (CRS)",
    "Seller Representative Specialist (SRS)",
    "Graduate, REALTOR Institute (GRI)",
  ];

  const timeline = [
    {
      year: "2010",
      title: "Licensed & Started",
      description: "Obtained real estate license and joined a local brokerage, learning the fundamentals of Hawaii's unique market.",
    },
    {
      year: "2013",
      title: "First $10M Year",
      description: "Broke the $10 million sales mark, establishing a reputation for exceptional client service.",
    },
    {
      year: "2016",
      title: "Luxury Market Entry",
      description: "Earned CLHMS designation and began specializing in Oahu's luxury real estate market.",
    },
    {
      year: "2019",
      title: "Founded Malia Realty",
      description: "Launched independent brokerage to provide more personalized service to discerning clients.",
    },
    {
      year: "2022",
      title: "$50M Annual Sales",
      description: "Reached $50 million in annual sales volume with a focus on Kahala and Diamond Head properties.",
    },
    {
      year: "2025",
      title: "Top 1% Nationwide",
      description: "Recognized among the top 1% of real estate professionals in the United States.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/realestate-demo" className="flex items-center gap-2">
              <div className="text-2xl font-serif">
                <span className="text-slate-800">MALIA</span>
                <span className="text-amber-600">REALTY</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/realestate-demo" className="text-slate-500 font-medium hover:text-slate-800 transition">Home</Link>
              <Link href="/realestate-demo/listings" className="text-slate-500 font-medium hover:text-slate-800 transition">Listings</Link>
              <Link href="/realestate-demo/neighborhoods" className="text-slate-500 font-medium hover:text-slate-800 transition">Neighborhoods</Link>
              <Link href="/realestate-demo/about" className="text-slate-800 font-medium">About</Link>
              <Link href="/realestate-demo/contact" className="text-slate-500 font-medium hover:text-slate-800 transition">Contact</Link>
            </div>

            <Link
              href="/realestate-demo/contact"
              className="bg-slate-800 text-white px-6 py-2.5 rounded font-medium hover:bg-slate-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Meet Your Agent</span>
              <h1 className="text-4xl md:text-5xl font-serif text-slate-800 mt-2 mb-6">
                Malia Kahananui
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Born and raised on Oahu, I bring a deep understanding of Hawaii's neighborhoods, culture, and lifestyle to every client relationship. Real estate isn't just my profession. It's my passion for connecting people with their perfect place in paradise.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                With over 15 years of experience and $250 million in sales, I specialize in helping buyers and sellers navigate Oahu's luxury real estate market. Whether you're searching for a beachfront estate, a family home in Kailua, or an investment property, I provide the expertise, market knowledge, and personalized service you deserve.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/realestate-demo/contact"
                  className="bg-slate-800 text-white px-6 py-3 rounded font-medium hover:bg-slate-700 transition"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/realestate-demo/listings"
                  className="border-2 border-slate-800 text-slate-800 px-6 py-3 rounded font-medium hover:bg-slate-800 hover:text-white transition"
                >
                  View My Listings
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                  alt="Malia Kahananui"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-serif text-amber-600 mb-1">15+ Years</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Serving Oahu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-amber-400 mb-2">{stat.value}</div>
                <div className="text-slate-300 uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">My Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mt-2 mb-6">
              A Different Approach to Real Estate
            </h2>
            <p className="text-slate-600">
              I believe buying or selling a home should be an exciting journey, not a stressful transaction. Here's how I make that happen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Relationships First</h3>
              <p className="text-slate-600">
                I work with a limited number of clients at a time to ensure everyone receives my full attention. Many of my clients become friends, and most of my business comes from referrals.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Local Expertise</h3>
              <p className="text-slate-600">
                Growing up on Oahu gives me insights no amount of market research can provide. I know the neighborhoods, the schools, the hidden gems, and which streets flood during heavy rain.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Proactive Service</h3>
              <p className="text-slate-600">
                I don't wait for listings to hit the MLS. My network of connections often means my clients see properties before anyone else, and sellers benefit from my database of qualified buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">My Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mt-2">Career Milestones</h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-400 font-serif font-bold">
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-300 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-sm text-amber-600 font-medium mb-1">{item.year}</div>
                  <h3 className="text-xl font-serif text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Awards */}
            <div>
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Recognition</span>
              <h2 className="text-3xl font-serif text-slate-800 mt-2 mb-8">Awards & Honors</h2>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="w-16 text-center flex-shrink-0">
                      <div className="text-lg font-serif text-amber-600">{award.year}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">{award.title}</h3>
                      <p className="text-sm text-slate-500">{award.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Credentials</span>
              <h2 className="text-3xl font-serif text-slate-800 mt-2 mb-8">Certifications</h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-800 rounded-lg">
                <h3 className="text-lg font-serif text-white mb-2">Affiliated With</h3>
                <div className="text-slate-300 text-sm space-y-1">
                  <p>Honolulu Board of Realtors</p>
                  <p>National Association of Realtors</p>
                  <p>Luxury Portfolio International</p>
                  <p>Asian Real Estate Association of America</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
                  alt="Surfing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
                  alt="Beach yoga"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop"
                  alt="Community"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop"
                  alt="Hiking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Beyond Real Estate</span>
              <h2 className="text-3xl font-serif text-slate-800 mt-2 mb-6">Life in Hawaii</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                When I'm not showing homes, you'll find me enjoying everything that makes Hawaii special. I'm an avid surfer (Waikiki is my home break), practice yoga on the beach, and volunteer with Habitat for Humanity Hawaii.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I live in Kailua with my husband David, our two kids, and our golden retriever Kai. We spend weekends hiking, paddleboarding, and exploring the islands. This lifestyle is exactly why I'm so passionate about helping others find their perfect home in Hawaii.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm also deeply committed to giving back. A portion of every commission goes to local nonprofits including the Hawaii Foodbank and Surfrider Foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Let&apos;s Find Your Dream Home</h2>
          <p className="text-slate-300 mb-8">
            Whether you're buying your first home or selling a luxury estate, I'm here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/realestate-demo/contact"
              className="bg-amber-500 text-slate-900 px-8 py-4 rounded font-semibold hover:bg-amber-400 transition"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+18085551234"
              className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-slate-800 transition"
            >
              Call (808) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <div className="text-2xl font-serif mb-4">
            <span className="text-white">MALIA</span>
            <span className="text-amber-500">REALTY</span>
          </div>
          <p>&copy; 2026 Malia Realty. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
