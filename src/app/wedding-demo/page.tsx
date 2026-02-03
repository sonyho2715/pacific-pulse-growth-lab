"use client";

import Link from "next/link";
import Image from "next/image";

export default function WeddingDemoPage() {
  const services = [
    {
      name: "Full Planning",
      description: "From engagement to 'I do', we handle every detail",
      price: "From $8,000",
      icon: "💍",
    },
    {
      name: "Partial Planning",
      description: "We step in to bring your vision to life",
      price: "From $4,500",
      icon: "✨",
    },
    {
      name: "Day-of Coordination",
      description: "Relax and enjoy while we manage your day",
      price: "From $2,000",
      icon: "📋",
    },
  ];

  const portfolio = [
    {
      couple: "Sarah & James",
      venue: "Sunset Beach Resort",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    },
    {
      couple: "Emily & Michael",
      venue: "Historic Plantation Estate",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop",
    },
    {
      couple: "Jessica & David",
      venue: "Mountain View Gardens",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
    },
    {
      couple: "Amanda & Chris",
      venue: "Oceanfront Villa",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
    },
  ];

  const testimonials = [
    {
      couple: "Rachel & Tom",
      text: "Aloha Weddings made our dream day come true. Every detail was perfect, and we didn't have to stress about a thing. Our guests are still talking about it!",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&h=100&fit=crop",
      venue: "Kualoa Ranch",
    },
    {
      couple: "Michelle & Kevin",
      text: "Working with this team was the best decision we made. They understood our vision instantly and executed it flawlessly. Worth every penny!",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=100&h=100&fit=crop",
      venue: "Four Seasons Resort",
    },
    {
      couple: "Lisa & Brandon",
      text: "From the venue selection to the last dance, everything was magical. They handled vendors, timelines, and family drama with grace!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      venue: "Haiku Gardens",
    },
  ];

  const featuredVendors = [
    "Four Seasons Resort",
    "Kualoa Ranch",
    "Haiku Gardens",
    "Sunset Beach Resort",
    "Royal Hawaiian Hotel",
    "Lanikuhonua",
  ];

  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/wedding-demo" className="flex items-center gap-2">
              <span className="text-2xl font-serif italic text-stone-800">Aloha</span>
              <span className="text-2xl font-serif text-rose-400">Weddings</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/wedding-demo" className="text-rose-400 font-medium">Home</Link>
              <Link href="/wedding-demo/services" className="text-stone-600 font-medium hover:text-rose-400 transition">Services</Link>
              <Link href="/wedding-demo/portfolio" className="text-stone-600 font-medium hover:text-rose-400 transition">Portfolio</Link>
              <Link href="/wedding-demo/about" className="text-stone-600 font-medium hover:text-rose-400 transition">About</Link>
              <Link href="/wedding-demo/contact" className="text-stone-600 font-medium hover:text-rose-400 transition">Contact</Link>
            </div>

            <Link
              href="/wedding-demo/contact"
              className="bg-rose-400 text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-500 transition"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
          alt="Wedding ceremony"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6">
            Hawaii&apos;s Premier Wedding Planners
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Where Love Stories
            <span className="block italic text-rose-300">Come to Life</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Creating unforgettable celebrations in paradise. Let us craft the wedding of your dreams with aloha spirit and attention to every detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wedding-demo/contact"
              className="bg-rose-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-rose-500 transition"
            >
              Start Planning Your Day
            </Link>
            <Link
              href="/wedding-demo/portfolio"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-lg border border-white/30 hover:bg-white/30 transition"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif text-rose-400">200+</div>
              <div className="text-stone-500 text-sm mt-1">Weddings Planned</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-rose-400">15</div>
              <div className="text-stone-500 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-rose-400">50+</div>
              <div className="text-stone-500 text-sm mt-1">Venue Partners</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-rose-400">5★</div>
              <div className="text-stone-500 text-sm mt-1">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-4">Planning Packages</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Whether you need full planning or just day-of coordination, we have the perfect package for your dream wedding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-stone-100 text-center"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-2">{service.name}</h3>
                <p className="text-stone-600 mb-4">{service.description}</p>
                <p className="text-rose-400 font-semibold text-lg">{service.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/wedding-demo/services"
              className="inline-flex items-center gap-2 text-rose-400 font-medium hover:text-rose-500 transition"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-4">Real Weddings</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Browse our portfolio of beautiful celebrations across Hawaii&apos;s most stunning venues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((wedding, index) => (
              <Link
                key={index}
                href="/wedding-demo/portfolio"
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <Image
                  src={wedding.image}
                  alt={wedding.couple}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-serif text-xl">{wedding.couple}</h3>
                  <p className="text-white/80 text-sm">{wedding.venue}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/wedding-demo/portfolio"
              className="inline-flex items-center gap-2 bg-rose-400 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-500 transition"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-6">
                Your Vision, Our Expertise
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                With over 15 years of experience creating magical moments in Hawaii, we bring an unmatched level of care, creativity, and local expertise to every wedding we plan.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Attention</h3>
                    <p className="text-stone-600">We take on a limited number of weddings to ensure each couple receives our undivided attention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Local Expertise</h3>
                    <p className="text-stone-600">Deep relationships with Hawaii&apos;s best venues and vendors mean exclusive access and special perks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Stress-Free Experience</h3>
                    <p className="text-stone-600">We handle the logistics so you can enjoy the journey to your big day.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop"
                alt="Wedding planning"
                width={600}
                height={800}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-serif text-rose-400">200+</div>
                <div className="text-stone-600 text-sm">Happy Couples</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Love Letters</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-2">From Our Couples</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#faf9f7] rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.couple}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <span className="font-semibold block">{testimonial.couple}</span>
                    <span className="text-stone-500 text-sm">{testimonial.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Partners */}
      <section className="py-16 px-4 bg-[#faf9f7] border-y border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Preferred Venues</span>
            <h3 className="text-2xl font-serif mt-2">Our Venue Partners</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-stone-400">
            {featuredVendors.map((vendor, index) => (
              <span key={index} className="font-medium">{vendor}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4">
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&h=600&fit=crop"
          alt="Wedding celebration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let&apos;s create something beautiful together. Schedule a complimentary consultation.
          </p>
          <Link
            href="/wedding-demo/contact"
            className="inline-flex items-center gap-2 bg-rose-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-rose-500 transition"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-4">
                <span className="text-2xl font-serif italic text-white">Aloha</span>
                <span className="text-2xl font-serif text-rose-400"> Weddings</span>
              </div>
              <p className="text-stone-400 text-sm">
                Creating unforgettable celebrations in paradise since 2009.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li><Link href="/wedding-demo/services" className="hover:text-rose-400 transition">Services</Link></li>
                <li><Link href="/wedding-demo/portfolio" className="hover:text-rose-400 transition">Portfolio</Link></li>
                <li><Link href="/wedding-demo/about" className="hover:text-rose-400 transition">About Us</Link></li>
                <li><Link href="/wedding-demo/contact" className="hover:text-rose-400 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>123 Romance Lane</li>
                <li>Honolulu, HI 96815</li>
                <li className="text-rose-400">(808) 555-LOVE</li>
                <li>hello@alohaweddings.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Follow Our Love Stories</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-rose-400 hover:bg-stone-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-rose-400 hover:bg-stone-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
            <p>&copy; 2026 Aloha Weddings. Demo by <Link href="/" className="text-rose-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
