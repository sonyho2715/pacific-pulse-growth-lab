"use client";

import Link from "next/link";
import Image from "next/image";

export default function SalonDemoPage() {
  const services = [
    { name: "Haircut & Style", price: "From $45", duration: "45 min" },
    { name: "Color & Highlights", price: "From $120", duration: "2-3 hrs" },
    { name: "Balayage", price: "From $200", duration: "3-4 hrs" },
    { name: "Blowout", price: "$55", duration: "45 min" },
    { name: "Men's Cut", price: "$35", duration: "30 min" },
    { name: "Beard Trim", price: "$20", duration: "15 min" },
  ];

  const stylists = [
    {
      name: "Maya Chen",
      title: "Creative Director",
      specialty: "Balayage & Color",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop",
    },
    {
      name: "Alex Rivera",
      title: "Senior Stylist",
      specialty: "Precision Cuts",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      name: "Jordan Kim",
      title: "Color Specialist",
      specialty: "Vivid & Fashion Colors",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    },
    {
      name: "Marcus Taylor",
      title: "Barber",
      specialty: "Fades & Beard Design",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop",
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Maya transformed my hair with the most beautiful balayage. I've never received so many compliments! The salon atmosphere is so chic and welcoming.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      service: "Balayage",
    },
    {
      name: "David K.",
      text: "Best barbershop experience in Honolulu. Marcus knows exactly how to do a perfect fade. The attention to detail is unmatched.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      service: "Men's Cut & Fade",
    },
    {
      name: "Emily R.",
      text: "I've been coming here for 2 years and won't go anywhere else. The team is incredibly talented and the products they use are top-notch.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      service: "Color & Style",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/salon-demo" className="flex items-center gap-3">
              <div className="text-2xl font-black tracking-tighter">
                <span className="text-rose-400">LUXE</span>
                <span className="text-white">SALON</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/salon-demo" className="text-rose-400 font-medium">Home</Link>
              <Link href="/salon-demo/services" className="text-neutral-400 font-medium hover:text-rose-400 transition">Services</Link>
              <Link href="/salon-demo/team" className="text-neutral-400 font-medium hover:text-rose-400 transition">Team</Link>
              <Link href="/salon-demo/gallery" className="text-neutral-400 font-medium hover:text-rose-400 transition">Gallery</Link>
              <Link href="/salon-demo/contact" className="text-neutral-400 font-medium hover:text-rose-400 transition">Contact</Link>
            </div>

            <Link
              href="/salon-demo/contact"
              className="bg-rose-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-rose-400 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop"
          alt="Salon interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-2 bg-rose-500/20 border border-rose-500/30 rounded-full text-rose-300 text-sm font-semibold mb-6">
            Honolulu&apos;s Premier Hair Studio
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            Where Style
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">
              Meets Artistry
            </span>
          </h1>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Experience luxury hair care with our award-winning stylists. From precision cuts to stunning color transformations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/salon-demo/contact"
              className="bg-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-400 transition"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/salon-demo/services"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-neutral-900 py-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-rose-400">15+</div>
              <div className="text-neutral-500 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-400">10K+</div>
              <div className="text-neutral-500 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-400">8</div>
              <div className="text-neutral-500 text-sm">Expert Stylists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-400">4.9★</div>
              <div className="text-neutral-500 text-sm">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Our Services</span>
            <h2 className="text-4xl font-black mt-2 mb-4">What We Offer</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              From classic cuts to bold transformations, our services are designed to bring out your best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-2xl p-6 border border-white/5 hover:border-rose-500/30 transition group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-rose-400 transition">{service.name}</h3>
                  <span className="text-rose-400 font-bold">{service.price}</span>
                </div>
                <p className="text-neutral-500 text-sm">{service.duration}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/salon-demo/services"
              className="inline-flex items-center gap-2 text-rose-400 font-bold hover:text-rose-300 transition"
            >
              View Full Service Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">The Artists</span>
            <h2 className="text-4xl font-black mt-2 mb-4">Meet Our Team</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Our stylists are passionate artists dedicated to making you look and feel amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stylists.map((stylist, index) => (
              <Link
                key={index}
                href="/salon-demo/team"
                className="group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold">{stylist.name}</h3>
                    <p className="text-rose-400 text-sm">{stylist.title}</p>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm">{stylist.specialty}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/salon-demo/team"
              className="inline-flex items-center gap-2 text-rose-400 font-bold hover:text-rose-300 transition"
            >
              Meet All Stylists
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Our Work</span>
            <h2 className="text-4xl font-black mt-2 mb-4">Style Gallery</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Browse our latest transformations and get inspired for your next look.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/40 transition-colors" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/salon-demo/gallery"
              className="inline-flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-400 transition"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Client Love</span>
            <h2 className="text-4xl font-black mt-2">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-800 rounded-2xl p-8 border border-white/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-300 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <span className="font-bold block">{testimonial.name}</span>
                    <span className="text-neutral-500 text-sm">{testimonial.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-rose-100 text-lg mb-8">
            Book your appointment today and let our expert stylists create your perfect look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/salon-demo/contact"
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition"
            >
              Book Appointment
            </Link>
            <a
              href="tel:808-555-HAIR"
              className="bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30 hover:bg-white/30 transition"
            >
              Call (808) 555-HAIR
            </a>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Visit Us</span>
              <h2 className="text-4xl font-black mt-2 mb-6">Location & Hours</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-neutral-400">
                      789 Style Street<br />
                      Honolulu, HI 96814
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <div className="text-neutral-400 space-y-1">
                      <p>Tuesday - Friday: 10am - 8pm</p>
                      <p>Saturday: 9am - 6pm</p>
                      <p>Sunday: 10am - 4pm</p>
                      <p>Monday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Contact</h3>
                    <p className="text-rose-400 font-bold text-xl">(808) 555-HAIR</p>
                    <p className="text-neutral-500 text-sm">info@luxesalon.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=600&fit=crop"
                alt="Salon interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-black tracking-tighter mb-4">
                <span className="text-rose-400">LUXE</span>
                <span className="text-white">SALON</span>
              </div>
              <p className="text-neutral-500 text-sm">
                Where style meets artistry. Honolulu&apos;s premier destination for hair care.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><Link href="/salon-demo/services" className="hover:text-rose-400 transition">Services</Link></li>
                <li><Link href="/salon-demo/team" className="hover:text-rose-400 transition">Our Team</Link></li>
                <li><Link href="/salon-demo/gallery" className="hover:text-rose-400 transition">Gallery</Link></li>
                <li><Link href="/salon-demo/contact" className="hover:text-rose-400 transition">Book Now</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>789 Style Street</li>
                <li>Honolulu, HI 96814</li>
                <li className="text-rose-400">(808) 555-HAIR</li>
                <li>info@luxesalon.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-rose-400 hover:bg-neutral-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-rose-400 hover:bg-neutral-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-rose-400 hover:bg-neutral-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-neutral-500 text-sm">
            <p>&copy; 2026 Luxe Salon. Demo by <Link href="/" className="text-rose-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
