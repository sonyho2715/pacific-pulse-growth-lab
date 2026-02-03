'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, Star, Shield, BookOpen, Award, Users, CheckCircle2, Calendar } from 'lucide-react';

const staff = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Director & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'With over 20 years in early childhood education and a Ph.D. in Child Development, Dr. Chen founded Little Explorers to create a nurturing environment where every child can thrive.',
    credentials: ['Ph.D. Child Development', 'M.Ed. Early Childhood', 'Licensed Director'],
  },
  {
    name: 'Marcus Williams',
    role: 'Lead Infant Teacher',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Marcus brings 12 years of infant care experience and a gentle, nurturing approach. He believes in building secure attachments that form the foundation for lifelong learning.',
    credentials: ['B.S. Early Childhood Education', 'Infant Development Specialist', 'CPR/First Aid Certified'],
  },
  {
    name: 'Jennifer Rodriguez',
    role: 'Toddler Program Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: 'Jenny specializes in toddler development and sensory play. Her classroom is a vibrant space where curious minds explore through hands-on activities.',
    credentials: ['M.Ed. Early Childhood', 'Montessori Certified', 'Special Needs Training'],
  },
  {
    name: 'David Kim',
    role: 'Preschool Teacher',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'David makes learning fun through music, art, and storytelling. His creative curriculum prepares children for kindergarten while fostering a love of discovery.',
    credentials: ['B.A. Elementary Education', 'Music Education Minor', 'STEAM Certified'],
  },
  {
    name: 'Aisha Thompson',
    role: 'Pre-K Teacher',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop',
    bio: 'Aisha focuses on kindergarten readiness through structured play and early literacy. Her students consistently enter kindergarten above grade level.',
    credentials: ['M.A. Curriculum Development', 'Reading Specialist', 'Gifted Education Certified'],
  },
  {
    name: 'Maria Santos',
    role: 'Assistant Teacher',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    bio: 'Maria assists across all classrooms with boundless energy and patience. She is fluent in Spanish and English, supporting our bilingual families.',
    credentials: ['A.A. Child Development', 'Bilingual (Spanish/English)', 'CPR/First Aid Certified'],
  },
];

const values = [
  {
    icon: Heart,
    title: 'Love & Nurturing',
    description: 'Every child is welcomed with warmth and care, creating secure attachments that support healthy development.',
  },
  {
    icon: Star,
    title: 'Excellence in Education',
    description: 'Our research-based curriculum meets each child where they are, challenging and supporting their unique journey.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'From our secure entry system to our trained staff, your child\'s safety is our highest priority.',
  },
  {
    icon: BookOpen,
    title: 'Play-Based Learning',
    description: 'Children learn best through play. Our environments encourage exploration, creativity, and discovery.',
  },
  {
    icon: Users,
    title: 'Family Partnership',
    description: 'We believe parents are a child\'s first teachers. Open communication and family involvement are key to success.',
  },
  {
    icon: Award,
    title: 'Continuous Growth',
    description: 'Our teachers pursue ongoing professional development to bring the best practices to your children.',
  },
];

const certifications = [
  'State Licensed & Inspected',
  'NAEYC Accreditation Candidate',
  'QRS 5-Star Rating',
  'Head Start Performance Standards',
  'Health & Safety Certified Facility',
  'Anti-Bias Curriculum Training',
];

const milestones = [
  { year: '2010', event: 'Little Explorers founded with 20 children' },
  { year: '2012', event: 'Expanded to include infant program' },
  { year: '2015', event: 'Earned 5-Star Quality Rating' },
  { year: '2018', event: 'Opened second location' },
  { year: '2020', event: 'Implemented enhanced safety protocols' },
  { year: '2023', event: 'Launched STEAM curriculum' },
  { year: '2024', event: 'Celebrating 1,000+ graduates' },
];

export default function DaycareAboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-sky-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/daycare-demo" className="flex items-center space-x-2 text-sky-500 hover:text-sky-600 mr-8">
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-800">Little Explorers</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/daycare-demo/programs" className="text-slate-600 hover:text-sky-500">Programs</Link>
              <Link href="/daycare-demo/about" className="text-sky-500 font-medium">About Us</Link>
              <Link href="/daycare-demo/enrollment" className="text-slate-600 hover:text-sky-500">Enrollment</Link>
              <Link href="/daycare-demo/contact" className="text-slate-600 hover:text-sky-500">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Where Learning Begins with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">Love</span>
            </h1>
            <p className="text-xl text-slate-600">
              For over 14 years, we&apos;ve been nurturing young minds and creating lifelong learners.
              Discover the heart behind Little Explorers Learning Center.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  Little Explorers began in 2010 with a simple dream: to create a place where children
                  could learn, grow, and discover their potential in a safe, loving environment.
                </p>
                <p>
                  Dr. Sarah Chen, a mother of three and early childhood education specialist, saw a
                  need for quality childcare that went beyond basic supervision. She envisioned a center
                  where every child is celebrated for who they are, where curiosity is nurtured, and
                  where families are true partners in their child&apos;s education.
                </p>
                <p>
                  Today, we&apos;ve grown from a single classroom of 20 children to a thriving community
                  serving over 150 families. Our mission remains the same: to provide exceptional early
                  childhood education that prepares children for a lifetime of learning.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop"
                alt="Children learning together"
                width={600}
                height={450}
                className="rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-100 rounded-2xl p-6 shadow-lg">
                <p className="text-4xl font-bold text-amber-600">14+</p>
                <p className="text-amber-700">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do at Little Explorers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our dedicated educators bring passion, expertise, and warmth to every interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                  <p className="text-sky-500 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.credentials.map((cred, credIndex) => (
                      <span key={credIndex} className="text-xs bg-white px-3 py-1 rounded-full text-slate-600">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Facility</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A safe, stimulating environment designed for exploration and discovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600&h=400&fit=crop"
                alt="Colorful classroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-medium">Age-Appropriate Classrooms</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1567448400815-a7d6c13c7b32?w=600&h=400&fit=crop"
                alt="Outdoor playground"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-medium">Secure Outdoor Play Areas</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
                alt="Reading corner"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-medium">Cozy Reading Corners</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop"
                alt="Art studio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-medium">Creative Art Studio</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?w=600&h=400&fit=crop"
                alt="Science area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-medium">STEAM Discovery Lab</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Nap room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-medium">Quiet Rest Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600">Key milestones in our growth story.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-400 to-emerald-400 rounded-full" />
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-xl p-4 inline-block">
                    <span className="text-sky-500 font-bold text-lg">{milestone.year}</span>
                    <p className="text-slate-700">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-sky-400 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Certifications & Licensing</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We maintain the highest standards in early childhood education.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Come See the Difference
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Schedule a tour to experience our nurturing environment firsthand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/daycare-demo/enrollment"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-colors"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a Tour
            </Link>
            <Link
              href="/daycare-demo/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Little Explorers</span>
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
