'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, GraduationCap, Award, Users, Clock, ArrowRight } from 'lucide-react';

const veterinarians = [
  {
    name: 'Dr. Emily Nakamura, DVM',
    role: 'Lead Veterinarian & Medical Director',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop',
    bio: 'Dr. Nakamura founded Aloha Pet Hospital in 2009 with a vision of providing compassionate, Fear-Free veterinary care. With over 20 years of experience, she specializes in internal medicine and geriatric care.',
    education: [
      'DVM, UC Davis School of Veterinary Medicine',
      'B.S. Animal Science, University of Hawaii',
    ],
    certifications: [
      'Fear-Free Certified Professional',
      'AAHA Accreditation Evaluator',
    ],
    specialties: ['Internal Medicine', 'Geriatric Care', 'Preventive Medicine'],
    funFact: 'Mom to 3 rescue cats and an elderly beagle named Mochi.',
  },
  {
    name: 'Dr. James Kahele, DVM',
    role: 'Veterinarian & Surgeon',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop',
    bio: 'Dr. Kahele is our surgical specialist with expertise in orthopedic and soft tissue procedures. His steady hands and calm demeanor make him a favorite among anxious pet parents.',
    education: [
      'DVM, Colorado State University',
      'Surgical Internship, VCA West Los Angeles',
    ],
    certifications: [
      'Advanced Orthopedic Surgery Certification',
      'Laparoscopic Surgery Training',
    ],
    specialties: ['Orthopedic Surgery', 'Soft Tissue Surgery', 'Emergency Care'],
    funFact: 'Former competitive surfer who now spends weekends volunteering at animal rescues.',
  },
  {
    name: 'Dr. Sarah Chen, DVM',
    role: 'Veterinarian & Exotic Animal Specialist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop',
    bio: 'Dr. Chen is our exotic animal expert, caring for birds, reptiles, rabbits, and other unique pets. She brings a wealth of knowledge from her years at the Honolulu Zoo.',
    education: [
      'DVM, University of Florida',
      'Exotic Animal Medicine Residency, Zoo Atlanta',
    ],
    certifications: [
      'Association of Exotic Mammal Veterinarians',
      'Association of Avian Veterinarians',
    ],
    specialties: ['Avian Medicine', 'Reptile Care', 'Small Mammals'],
    funFact: 'Has a rescue parrot named Kiwi who occasionally visits the clinic.',
  },
  {
    name: 'Dr. Michael Torres, DVM',
    role: 'Associate Veterinarian',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&h=600&fit=crop',
    bio: 'Dr. Torres joined our team in 2020, bringing fresh perspectives and a passion for feline medicine. He is particularly skilled at handling nervous cats and making vet visits stress-free.',
    education: [
      'DVM, University of Minnesota',
      'Feline Medicine Certificate, Cornell',
    ],
    certifications: [
      'Cat Friendly Practice Certified',
      'Fear-Free Certified Professional',
    ],
    specialties: ['Feline Medicine', 'Dentistry', 'Behavior'],
    funFact: 'Plays ukulele and writes songs about his patients (with owner permission).',
  },
  {
    name: 'Dr. Lisa Wong, DVM',
    role: 'Associate Veterinarian',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=600&h=600&fit=crop',
    bio: 'Dr. Wong specializes in dermatology and allergy management. She loves solving complex skin cases and helping itchy pets find relief.',
    education: [
      'DVM, Oregon State University',
      'Dermatology Training, Animal Dermatology Clinic',
    ],
    certifications: [
      'Veterinary Dermatology Certification',
      'Allergy Testing & Immunotherapy',
    ],
    specialties: ['Dermatology', 'Allergies', 'Ear Diseases'],
    funFact: 'Competitive hula dancer who performs at local festivals.',
  },
];

const supportStaff = [
  {
    name: 'Keani Lau',
    role: 'Practice Manager',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    description: 'Keeps everything running smoothly with 12 years of veterinary management experience.',
  },
  {
    name: 'Marcus Williams',
    role: 'Lead Veterinary Technician',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    description: 'RVT with expertise in anesthesia, dental procedures, and critical care.',
  },
  {
    name: 'Jennifer Santos',
    role: 'Veterinary Technician',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    description: 'Specializes in surgery support and patient recovery care.',
  },
  {
    name: 'David Kim',
    role: 'Veterinary Technician',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    description: 'Expert in lab work, diagnostics, and radiology assistance.',
  },
  {
    name: 'Aisha Thompson',
    role: 'Veterinary Assistant',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop',
    description: 'Passionate about animal welfare with a gentle touch for nervous pets.',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Client Care Coordinator',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    description: 'Your first point of contact, scheduling expert, and pet parent liaison.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description: 'We treat every patient with kindness and understanding.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Our team pursues ongoing education to stay current.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Collaboration ensures the best outcomes for patients.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in veterinary care.',
  },
];

export default function VetTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-teal-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/vet-demo" className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 mr-8">
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
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
              <Link href="/vet-demo/team" className="text-teal-600 font-medium">Our Team</Link>
              <Link href="/vet-demo/resources" className="text-slate-600 hover:text-teal-600">Pet Care</Link>
              <Link href="/vet-demo/contact" className="text-slate-600 hover:text-teal-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Team</span>
            </h1>
            <p className="text-xl text-slate-600">
              Dedicated professionals who share a passion for animal health and wellness.
              Your pet is in expert, caring hands.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{value.title}</h3>
                <p className="text-teal-100 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veterinarians */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Veterinarians</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Board-certified veterinarians with decades of combined experience.
            </p>
          </div>
          <div className="space-y-12">
            {veterinarians.map((vet, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="lg:w-1/3">
                  <div className="relative w-64 h-64 mx-auto">
                    <Image
                      src={vet.image}
                      alt={vet.name}
                      fill
                      className="rounded-2xl object-cover shadow-xl"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">{vet.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{vet.role}</p>
                  <p className="text-slate-600 mb-6">{vet.bio}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-teal-500" />
                        Education
                      </h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {vet.education.map((edu, i) => (
                          <li key={i}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <Award className="h-5 w-5 text-teal-500" />
                        Certifications
                      </h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {vet.certifications.map((cert, i) => (
                          <li key={i}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {vet.specialties.map((specialty, i) => (
                      <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-teal-600 font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <p className="text-sm text-amber-700">
                      <span className="font-medium">Fun Fact:</span> {vet.funFact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Support Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The caring hands that make your visit comfortable and stress-free.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportStaff.map((staff, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{staff.name}</h3>
                    <p className="text-teal-600 text-sm">{staff.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{staff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1200&h=600&fit=crop"
              alt="Veterinary team with pets"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Join Our Family</h3>
                <p className="text-teal-100 mb-4">
                  We&apos;re always looking for passionate team members. Check our careers page!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Schedule your pet&apos;s first visit and experience our compassionate care.
          </p>
          <Link
            href="/vet-demo/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors"
          >
            Book an Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
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
