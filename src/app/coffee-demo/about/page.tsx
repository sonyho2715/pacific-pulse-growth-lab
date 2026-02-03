"use client";

import Link from "next/link";
import Image from "next/image";

export default function CoffeeAboutPage() {
  const values = [
    {
      title: "Quality First",
      description: "We never compromise on beans. 100% Hawaiian coffee, sourced directly from farmers we know by name.",
      icon: "🌟",
    },
    {
      title: "Fresh Daily",
      description: "Our beans never sit on shelves. We roast in small batches every morning for peak flavor.",
      icon: "🔥",
    },
    {
      title: "Community Roots",
      description: "We support local farmers, hire local talent, and invest in the neighborhoods we serve.",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      description: "Compostable cups, local sourcing, and partnerships with farms using regenerative practices.",
      icon: "🌱",
    },
  ];

  const timeline = [
    { year: "2015", title: "The Beginning", description: "Opened our first tiny roastery in Kailua with a single espresso machine and big dreams." },
    { year: "2017", title: "Direct Trade", description: "Established partnerships with Kona coffee farmers, cutting out middlemen for better quality and fairer prices." },
    { year: "2018", title: "Waikiki Opens", description: "Expanded to our second location, bringing specialty coffee to visitors and locals alike." },
    { year: "2020", title: "Community Support", description: "Survived the pandemic by pivoting to delivery and providing free coffee to healthcare workers." },
    { year: "2022", title: "Chinatown Arts", description: "Opened our third location in Chinatown's arts district, featuring rotating local exhibitions." },
    { year: "2026", title: "Growing Family", description: "Preparing to open our fourth location in Kakaako and launching our wholesale program." },
  ];

  const team = [
    {
      name: "Kai Nakamura",
      role: "Founder & Head Roaster",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      bio: "Former tech worker who fell in love with coffee on a trip to Big Island farms. Left his desk job to pursue the perfect cup.",
    },
    {
      name: "Malia Chen",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop",
      bio: "Restaurant industry veteran who keeps all three locations running smoothly. Known for her legendary organizational skills.",
    },
    {
      name: "Jake Williams",
      role: "Lead Barista Trainer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      bio: "Certified Q Grader and latte art champion. Responsible for training our baristas to be the best on the island.",
    },
  ];

  const farmPartners = [
    { name: "Hualalai Estate", location: "Kona, Big Island", specialty: "Classic Kona" },
    { name: "Makua Coffee", location: "Ka'u, Big Island", specialty: "Ka'u Reserve" },
    { name: "Kualoa Farms", location: "Oahu", specialty: "Oahu Grown" },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-xl border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/coffee-demo" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.525.713-2.863T6.7 8.65V6q0-.825.588-1.413Q7.875 4 8.7 4h6.6q.825 0 1.413.587Q17.3 5.175 17.3 6v2.65q1.275 1.15 1.988 2.487Q20 12.475 20 14v3H4zm2-2h12v-1q0-1.875-1.062-3.438Q15.875 9 14.1 8.2V6H9.9v2.2q-1.775.8-2.838 2.362Q6 12.125 6 14v1z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-amber-900">KONA BREW</span>
                <span className="text-xs text-amber-700 block -mt-1 tracking-widest">COFFEE CO.</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/coffee-demo" className="text-stone-600 font-medium hover:text-amber-900 transition">Home</Link>
              <Link href="/coffee-demo/menu" className="text-stone-600 font-medium hover:text-amber-900 transition">Menu</Link>
              <Link href="/coffee-demo/locations" className="text-stone-600 font-medium hover:text-amber-900 transition">Locations</Link>
              <Link href="/coffee-demo/about" className="text-amber-900 font-medium">Our Story</Link>
              <Link href="/coffee-demo/contact" className="text-stone-600 font-medium hover:text-amber-900 transition">Contact</Link>
            </div>

            <Link
              href="/coffee-demo/menu"
              className="bg-amber-900 text-amber-50 px-6 py-2.5 rounded-full font-semibold hover:bg-amber-800 transition"
            >
              Order Online
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-amber-100 to-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mt-2 mb-4">Rooted in Hawaii</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From a tiny roastery to Oahu&apos;s favorite coffee destination. Here&apos;s how we got here.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-4 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                It Started With a Farm Visit
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  In 2014, Kai Nakamura was a software engineer burning out in Silicon Valley. On a vacation to Hawaii, he visited a small Kona coffee farm and everything changed.
                </p>
                <p>
                  He tasted coffee straight from the roaster, beans harvested that morning, and realized he&apos;d never truly experienced coffee before. The flavors were alive, complex, nothing like the stale commodity coffee he&apos;d been drinking for years.
                </p>
                <p>
                  Six months later, Kai had quit his job, moved to Kailua, and opened Kona Brew with a secondhand roaster and a dream: to share the magic of truly fresh, Hawaiian-grown coffee with everyone.
                </p>
                <p>
                  Today, we&apos;re proud to work directly with the farmers who inspired us, roast fresh every morning, and serve our community with the same passion that started it all.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=700&fit=crop"
                alt="Coffee beans"
                width={600}
                height={700}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">What We Believe</span>
            <h2 className="text-4xl font-bold text-amber-900 mt-2">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Our Journey</span>
            <h2 className="text-4xl font-bold text-amber-900 mt-2">The Kona Brew Story</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-20 md:pl-0`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
                      <span className="text-amber-500 font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold text-amber-900 mt-1 mb-2">{item.title}</h3>
                      <p className="text-stone-600 text-sm">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#faf8f5] transform -translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 bg-amber-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-amber-300 uppercase tracking-widest">The Team</span>
            <h2 className="text-4xl font-bold text-white mt-2">Meet the Crew</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-amber-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-amber-300 text-sm mb-3">{member.role}</p>
                  <p className="text-amber-100/80 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Partners */}
      <section className="py-24 px-4 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Direct Trade</span>
            <h2 className="text-4xl font-bold text-amber-900 mt-2 mb-4">Our Farm Partners</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We buy directly from Hawaiian farmers, ensuring quality beans and fair prices. No middlemen, just relationships built on trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {farmPartners.map((farm, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-amber-100 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-amber-900">{farm.name}</h3>
                <p className="text-stone-500 text-sm">{farm.location}</p>
                <p className="text-amber-700 text-sm font-medium mt-2">{farm.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Come Taste the Difference</h2>
          <p className="text-stone-600 mb-8">
            Visit any of our three locations and experience what makes Kona Brew special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/coffee-demo/locations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-900 text-amber-50 font-bold rounded-full hover:bg-amber-800 transition"
            >
              Find a Location
            </Link>
            <Link
              href="/coffee-demo/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-900 font-semibold rounded-full border border-amber-200 hover:bg-amber-50 transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-amber-400/60 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21v-2h18v2H2zm2-4v-3q0-1.525.713-2.863T6.7 8.65V6q0-.825.588-1.413Q7.875 4 8.7 4h6.6q.825 0 1.413.587Q17.3 5.175 17.3 6v2.65q1.275 1.15 1.988 2.487Q20 12.475 20 14v3H4zm2-2h12v-1q0-1.875-1.062-3.438Q15.875 9 14.1 8.2V6H9.9v2.2q-1.775.8-2.838 2.362Q6 12.125 6 14v1z"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-amber-100">KONA BREW COFFEE CO.</span>
          </div>
          <p>&copy; 2026 Kona Brew Coffee Co. Demo by <Link href="/" className="text-amber-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
