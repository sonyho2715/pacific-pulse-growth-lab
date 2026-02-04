'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, MapPin, Heart, Shield, Stethoscope, Syringe, Scissors, AlertTriangle, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Wellness Exams',
    description: 'Comprehensive health checkups to keep your pet in peak condition.',
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Core and lifestyle vaccines tailored to your pet\'s needs.',
  },
  {
    icon: Scissors,
    title: 'Surgery',
    description: 'From spay/neuter to advanced procedures with expert care.',
  },
  {
    icon: Heart,
    title: 'Dental Care',
    description: 'Cleanings, extractions, and oral health assessments.',
  },
];

const stats = [
  { value: '15+', label: 'Years Serving Hawaii' },
  { value: '25,000+', label: 'Pets Treated' },
  { value: '5', label: 'Veterinarians' },
  { value: '24/7', label: 'Emergency Care' },
];

const team = [
  {
    name: 'Dr. Emily Nakamura',
    role: 'Lead Veterinarian',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    specialty: 'Small Animal Medicine',
  },
  {
    name: 'Dr. James Kahele',
    role: 'Veterinarian',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    specialty: 'Surgery & Orthopedics',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Veterinarian',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    specialty: 'Exotic Animals',
  },
];

const testimonials = [
  {
    quote: 'Dr. Nakamura saved our dog\'s life when he ate something toxic. The emergency team was incredible. We can\'t thank them enough!',
    author: 'Jennifer K.',
    pet: 'Max, Golden Retriever',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop',
  },
  {
    quote: 'Best vet clinic on the island. They treat our cats like family and always take time to explain everything thoroughly.',
    author: 'David T.',
    pet: 'Luna & Mochi, Cats',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&h=100&fit=crop',
  },
  {
    quote: 'From puppyhood to senior care, Aloha Pet Hospital has been there for our Bella for 12 years. Wouldn\'t go anywhere else.',
    author: 'Maria S.',
    pet: 'Bella, Labrador',
    image: 'https://images.unsplash.com/photo-1579213838058-8a0a0a098890?w=100&h=100&fit=crop',
  },
];

export default function VetDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-teal-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-teal-600 hover:text-teal-700 mr-6 text-sm">
                ← Back to Pacific Pulse
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-800">Aloha Pet Hospital</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/vet-demo/services" className="text-slate-600 hover:text-teal-600">Services</Link>
              <Link href="/vet-demo/team" className="text-slate-600 hover:text-teal-600">Our Team</Link>
              <Link href="/vet-demo/resources" className="text-slate-600 hover:text-teal-600">Pet Care</Link>
              <Link href="/vet-demo/contact" className="text-slate-600 hover:text-teal-600">Contact</Link>
              <Link
                href="/vet-demo/contact"
                className="px-5 py-2 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-medium">24/7 Emergency Care Available</span>
          <a href="tel:808-555-PETS" className="flex items-center gap-2 px-4 py-1 bg-white text-red-600 rounded-full font-semibold hover:bg-red-50 transition-colors">
            <Phone className="h-4 w-4" />
            (808) 555-PETS
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-medium text-amber-700">Voted #1 Vet Clinic in Honolulu</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
                Compassionate Care for Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500"> Furry Family</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                From routine checkups to emergency surgery, our team of experienced veterinarians
                provides comprehensive care for dogs, cats, and exotic pets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/vet-demo/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors"
                >
                  Schedule an Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/vet-demo/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop"
                alt="Happy dogs at the vet"
                width={600}
                height={450}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">AAHA Accredited</p>
                  <p className="text-sm text-slate-600">Highest Standards of Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-teal-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Complete Veterinary Care
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From preventive care to complex surgeries, we offer everything your pet needs under one roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/vet-demo/services"
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Why Pet Parents Trust Us
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'AAHA Accredited', desc: 'We meet the highest standards in veterinary medicine.' },
                  { title: 'Fear-Free Certified', desc: 'Gentle handling techniques to minimize stress.' },
                  { title: 'State-of-the-Art Equipment', desc: 'Digital X-rays, ultrasound, and in-house lab.' },
                  { title: '24/7 Emergency Services', desc: 'Always here when your pet needs us most.' },
                  { title: 'Compassionate Staff', desc: 'We treat every pet like our own.' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1628009368231-7bb7cf8a3cde?w=600&h=500&fit=crop"
                alt="Vet examining a dog"
                width={600}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Meet Our Veterinarians
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experienced, compassionate professionals dedicated to your pet&apos;s health.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-teal-100 group-hover:border-teal-300 transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-teal-600 font-medium">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/vet-demo/team"
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
            >
              Meet the Full Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Pet Parents Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.pet}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
              <p className="text-teal-100">(808) 555-PETS (7387)</p>
              <p className="text-teal-200 text-sm">Emergency: Available 24/7</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Hours</h3>
              <p className="text-teal-100">Mon-Fri: 7am - 7pm</p>
              <p className="text-teal-100">Sat-Sun: 8am - 5pm</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
              <p className="text-teal-100">456 Paw Street</p>
              <p className="text-teal-100">Honolulu, HI 96815</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            New clients receive a complimentary wellness exam. Book your first visit today!
          </p>
          <Link
            href="/vet-demo/contact"
            className="inline-flex items-center px-10 py-5 bg-teal-600 text-white text-lg font-semibold rounded-full hover:bg-teal-700 transition-colors"
          >
            Book Your Appointment
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Aloha Pet Hospital</span>
            </div>
            <p className="text-slate-400 text-sm">
              Demo website by Pacific Pulse Growth Lab
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
