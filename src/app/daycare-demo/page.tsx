"use client";

import Link from "next/link";
import Image from "next/image";

export default function DaycareDemoPage() {
  const programs = [
    {
      name: "Infants",
      ages: "6 weeks - 12 months",
      description: "Nurturing care focused on bonding, sensory development, and establishing routines.",
      image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=400&h=300&fit=crop",
      color: "bg-pink-100 text-pink-700",
    },
    {
      name: "Toddlers",
      ages: "1 - 2 years",
      description: "Active exploration and language development through play-based learning.",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
      color: "bg-amber-100 text-amber-700",
    },
    {
      name: "Preschool",
      ages: "3 - 4 years",
      description: "Kindergarten readiness with early literacy, math concepts, and social skills.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      name: "Pre-K",
      ages: "4 - 5 years",
      description: "Advanced curriculum preparing children for kindergarten success.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      color: "bg-sky-100 text-sky-700",
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Licensed & Accredited",
      description: "State licensed and nationally accredited with the highest safety standards.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Qualified Teachers",
      description: "All lead teachers hold early childhood education degrees and CPR certification.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Play-Based Learning",
      description: "Curriculum designed around hands-on activities that make learning fun and engaging.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Daily Photo Updates",
      description: "Stay connected with your child through our parent app with daily photos and updates.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Schedules",
      description: "Full-time, part-time, and drop-in options to fit your family's needs.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Nutritious Meals",
      description: "Healthy, chef-prepared breakfast, lunch, and snacks included in tuition.",
    },
  ];

  const testimonials = [
    {
      quote: "Little Explorers has been amazing for our daughter. She's thriving academically and socially, and the teachers genuinely care about each child.",
      author: "Jennifer & Mark K.",
      child: "Parents of Emma, age 4",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
    {
      quote: "The daily updates and photos give me peace of mind at work. I can see my son is happy, learning, and well-cared for every single day.",
      author: "David L.",
      child: "Father of Kai, age 2",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      quote: "We've tried other daycares, but Little Explorers is on another level. The curriculum, the staff, the facility, everything is top-notch.",
      author: "Sarah T.",
      child: "Mother of twins, age 3",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/daycare-demo" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">Little Explorers</div>
                <div className="text-xs text-slate-500">Learning Center</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/daycare-demo" className="text-sky-600 font-medium">Home</Link>
              <Link href="/daycare-demo/programs" className="text-slate-600 font-medium hover:text-slate-800 transition">Programs</Link>
              <Link href="/daycare-demo/about" className="text-slate-600 font-medium hover:text-slate-800 transition">About Us</Link>
              <Link href="/daycare-demo/enrollment" className="text-slate-600 font-medium hover:text-slate-800 transition">Enrollment</Link>
              <Link href="/daycare-demo/contact" className="text-slate-600 font-medium hover:text-slate-800 transition">Contact</Link>
            </div>

            <Link
              href="/daycare-demo/enrollment"
              className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-6 py-2.5 rounded-full font-semibold hover:from-sky-600 hover:to-emerald-600 transition"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-emerald-50/50 to-amber-50/30" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                <span className="text-amber-600 text-lg">⭐</span>
                <span className="text-sm font-medium text-amber-800">Rated #1 Childcare in Honolulu</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Where Little Minds
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500"> Grow Big</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A nurturing environment where your child develops confidence, curiosity, and a love for learning. Now enrolling ages 6 weeks to 5 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/daycare-demo/enrollment"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:from-sky-600 hover:to-emerald-600 transition shadow-lg shadow-sky-500/25"
                >
                  Schedule a Tour
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/daycare-demo/programs"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full font-semibold border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition"
                >
                  View Programs
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-10 pt-10 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-bold text-slate-900">15+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-slate-900">4:1</div>
                  <div className="text-sm text-slate-500">Child-Teacher Ratio</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-500">Happy Families</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop"
                  alt="Happy children learning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        {["😊", "🌟", "💚"][i - 1]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Join 500+ families</div>
                    <div className="text-xs text-slate-500">who trust Little Explorers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Age-Appropriate Learning for Every Stage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From infants to pre-K, we provide developmentally appropriate curriculum that nurtures growth and prepares children for success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Link
                key={index}
                href="/daycare-demo/programs"
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${program.color} mb-3`}>
                    {program.ages}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{program.name}</h3>
                  <p className="text-slate-600 text-sm">{program.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/daycare-demo/programs"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition"
            >
              Learn More About Our Programs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Why Little Explorers</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Everything Your Child Needs to Thrive
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-emerald-100 rounded-xl flex items-center justify-center text-sky-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Parent Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Loved by Families
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.child}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Little Explorers Family?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Schedule a tour to see our facility, meet our teachers, and learn about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/daycare-demo/enrollment"
              className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-sky-50 transition shadow-lg"
            >
              Schedule a Tour
            </Link>
            <a
              href="tel:+18085551234"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Call (808) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Little Explorers</div>
                  <div className="text-xs text-slate-400">Learning Center</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Nurturing young minds since 2009. Licensed, accredited, and loved by families.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/daycare-demo/programs" className="hover:text-white transition">Infants</Link></li>
                <li><Link href="/daycare-demo/programs" className="hover:text-white transition">Toddlers</Link></li>
                <li><Link href="/daycare-demo/programs" className="hover:text-white transition">Preschool</Link></li>
                <li><Link href="/daycare-demo/programs" className="hover:text-white transition">Pre-K</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/daycare-demo/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/daycare-demo/enrollment" className="hover:text-white transition">Enrollment</Link></li>
                <li><Link href="/daycare-demo/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>(808) 555-1234</li>
                <li>hello@littleexplorers.com</li>
                <li>123 Keiki Street<br />Honolulu, HI 96815</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; 2026 Little Explorers Learning Center. Demo by <Link href="/" className="text-sky-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
