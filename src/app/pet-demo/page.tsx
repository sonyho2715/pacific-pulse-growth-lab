"use client";

import Link from "next/link";
import Image from "next/image";

export default function PetDemoPage() {
  const services = [
    {
      name: "Full Grooming",
      description: "Bath, haircut, nail trim, ear cleaning, and more",
      price: "From $65",
      icon: "✂️",
    },
    {
      name: "Spa Packages",
      description: "Luxury treatments for pampered pets",
      price: "From $85",
      icon: "🛁",
    },
    {
      name: "Basic Wellness",
      description: "Vaccinations, checkups, and preventive care",
      price: "From $45",
      icon: "💉",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Kim",
      role: "Lead Veterinarian",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      specialty: "Small Animals",
    },
    {
      name: "Mike Torres",
      role: "Head Groomer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      specialty: "Creative Styling",
    },
    {
      name: "Emma Chen",
      role: "Pet Stylist",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop",
      specialty: "Anxious Pets",
    },
  ];

  const gallery = [
    { image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop", pet: "Max", breed: "Golden Retriever" },
    { image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop", pet: "Bella", breed: "Labrador" },
    { image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop", pet: "Luna", breed: "Tabby Cat" },
    { image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop", pet: "Charlie", breed: "Beagle Mix" },
  ];

  const testimonials = [
    {
      text: "My anxious rescue finally enjoys grooming! The team is so patient and gentle. Max actually wags his tail when we pull into the parking lot now.",
      author: "Jennifer L.",
      pet: "Max the Golden Retriever",
    },
    {
      text: "Best vet clinic on the island. Dr. Kim caught an early health issue that other vets missed. They truly care about our fur babies.",
      author: "David K.",
      pet: "Mochi the Shiba Inu",
    },
    {
      text: "The spa day package is incredible. Bella comes home smelling amazing and looking like a show dog. Worth every penny!",
      author: "Amanda S.",
      pet: "Bella the Poodle",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefdfb] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/pet-demo" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-2xl">🐾</span>
              </div>
              <div>
                <span className="text-xl font-bold text-teal-700">Happy Tails</span>
                <span className="text-xs text-teal-500 block">Pet Spa & Wellness</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/pet-demo" className="text-teal-700 font-medium">Home</Link>
              <Link href="/pet-demo/services" className="text-stone-600 font-medium hover:text-teal-600 transition">Services</Link>
              <Link href="/pet-demo/team" className="text-stone-600 font-medium hover:text-teal-600 transition">Our Team</Link>
              <Link href="/pet-demo/gallery" className="text-stone-600 font-medium hover:text-teal-600 transition">Gallery</Link>
              <Link href="/pet-demo/contact" className="text-stone-600 font-medium hover:text-teal-600 transition">Contact</Link>
            </div>

            <Link
              href="/pet-demo/contact"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&h=1080&fit=crop"
          alt="Happy dog at grooming salon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-xl">🏆</span>
              <span className="text-white font-medium">Voted #1 Pet Spa in Honolulu</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Where Every Pet
              <span className="block text-teal-300">Gets the Royal Treatment</span>
            </h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Professional grooming, compassionate veterinary care, and luxury spa services. Because your fur baby deserves the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pet-demo/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral-500 text-white font-bold rounded-full hover:bg-coral-600 transition shadow-lg"
                style={{ backgroundColor: '#f97316' }}
              >
                Book an Appointment
              </Link>
              <Link
                href="/pet-demo/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600">15K+</div>
                <div className="text-xs text-stone-500">Happy Pets</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">12</div>
                <div className="text-xs text-stone-500">Years Open</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">4.9★</div>
                <div className="text-xs text-stone-500">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-[#fefdfb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">Our Services</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From basic grooming to luxury spa days and veterinary care, we have everything your pet needs under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-teal-50 group"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">{service.name}</h3>
                <p className="text-stone-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-teal-600 font-bold text-lg">{service.price}</span>
                  <Link
                    href="/pet-demo/services"
                    className="text-teal-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pet-demo/services"
              className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-teal-100 transition"
            >
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Why Happy Tails</span>
              <h2 className="text-4xl font-bold text-stone-800 mt-2 mb-6">
                A Stress-Free Experience
                <span className="block text-teal-600">For Pets & Parents</span>
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                We know trips to the groomer or vet can be stressful. That&apos;s why we&apos;ve designed every aspect of Happy Tails to keep your pet calm, comfortable, and happy.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-800">Fear-Free Certified</h3>
                    <p className="text-stone-600">Our entire team is trained in low-stress handling techniques.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📸</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-800">Live Updates</h3>
                    <p className="text-stone-600">Get photos and updates during your pet&apos;s appointment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-800">Organic Products</h3>
                    <p className="text-stone-600">We only use gentle, pet-safe, organic grooming products.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-800">One-on-One Attention</h3>
                    <p className="text-stone-600">No cage drying. Your pet gets personal attention throughout.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=700&fit=crop"
                alt="Dog being groomed"
                width={600}
                height={700}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <div className="font-bold text-stone-800">Best of Honolulu</div>
                    <div className="text-teal-600 text-sm">2023, 2024, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 px-4 bg-[#fefdfb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Meet the Team</span>
            <h2 className="text-4xl font-bold text-stone-800 mt-2 mb-4">Pet Lovers at Heart</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Our team treats every pet like their own. Experienced, certified, and genuinely passionate about animal care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full border-4 border-teal-100 group-hover:border-teal-300 transition"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-800">{member.name}</h3>
                <p className="text-teal-600 font-medium">{member.role}</p>
                <p className="text-stone-500 text-sm mt-1">Specialty: {member.specialty}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pet-demo/team"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition"
            >
              Meet Our Full Team
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pet Gallery */}
      <section className="py-24 px-4 bg-gradient-to-br from-teal-500 to-teal-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-teal-200 uppercase tracking-widest">Happy Clients</span>
            <h2 className="text-4xl font-bold text-white mt-2">Our Furry Friends</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((item, index) => (
              <Link
                key={index}
                href="/pet-demo/gallery"
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.pet}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold">{item.pet}</p>
                    <p className="text-white/80 text-sm">{item.breed}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pet-demo/gallery"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[#fefdfb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Reviews</span>
            <h2 className="text-4xl font-bold text-stone-800 mt-2">What Pet Parents Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-teal-50">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <span className="font-bold text-stone-800 block">{testimonial.author}</span>
                  <span className="text-teal-600 text-sm">{testimonial.pet}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🐕 🐈</div>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Ready to Pamper Your Pet?
          </h2>
          <p className="text-stone-600 mb-8 text-lg">
            Book online or give us a call. New clients get 20% off their first grooming session!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pet-demo/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-full hover:from-teal-600 hover:to-teal-700 transition shadow-lg"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:808-555-7297"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 font-semibold rounded-full border border-teal-200 hover:bg-teal-50 transition"
            >
              📞 (808) 555-PAWS
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center">
                  <span className="text-xl">🐾</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-white">Happy Tails</span>
                  <span className="text-xs text-teal-300 block">Pet Spa & Wellness</span>
                </div>
              </div>
              <p className="text-teal-300/70 text-sm">
                Where every pet gets the royal treatment. Serving Honolulu since 2012.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-teal-300/70">
                <li><Link href="/pet-demo/services" className="hover:text-teal-300 transition">Grooming</Link></li>
                <li><Link href="/pet-demo/services" className="hover:text-teal-300 transition">Spa Treatments</Link></li>
                <li><Link href="/pet-demo/services" className="hover:text-teal-300 transition">Veterinary Care</Link></li>
                <li><Link href="/pet-demo/services" className="hover:text-teal-300 transition">Dental Cleaning</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Hours</h4>
              <ul className="space-y-2 text-sm text-teal-300/70">
                <li>Mon-Fri: 8am - 6pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: 10am - 4pm</li>
                <li className="text-teal-400">Emergency: 24/7</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-teal-300/70">
                <li>123 Pawsome Street</li>
                <li>Honolulu, HI 96815</li>
                <li className="text-teal-400">(808) 555-PAWS</li>
                <li>hello@happytailshi.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-teal-800 pt-8 text-center text-teal-400/60 text-sm">
            <p>&copy; 2026 Happy Tails Pet Spa. Demo by <Link href="/" className="text-teal-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
