'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, MapPin, Phone, Mail, Clock, CheckCircle2, Facebook, Instagram, MessageCircle } from 'lucide-react';

const hours = [
  { day: 'Monday - Friday', time: '7:00 AM - 6:00 PM' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
];

const faqs = [
  {
    question: 'What is your sick child policy?',
    answer: 'Children with fever, vomiting, diarrhea, or contagious conditions must stay home until symptom-free for 24 hours. We notify parents immediately if a child becomes ill during the day.',
  },
  {
    question: 'Do you provide meals and snacks?',
    answer: 'Yes! We provide a nutritious morning snack, lunch, and afternoon snack daily. Our menu is designed by a nutritionist and accommodates dietary restrictions and allergies.',
  },
  {
    question: 'What is your vacation policy?',
    answer: 'We close for major holidays (list provided at enrollment). Families receive 1 week of vacation credit annually. Tuition is still due during family vacations to maintain your spot.',
  },
  {
    question: 'How do you handle discipline?',
    answer: 'We use positive guidance and redirection. Our approach focuses on teaching appropriate behavior through clear expectations, natural consequences, and helping children develop self-regulation skills.',
  },
  {
    question: 'Can I drop in to visit my child?',
    answer: 'Absolutely! Parents are welcome to visit anytime during operating hours. We have an open-door policy and encourage family involvement.',
  },
  {
    question: 'What if my child has allergies?',
    answer: 'We work closely with families to create individualized care plans for children with allergies. All staff are trained on allergy protocols and emergency procedures.',
  },
];

export default function DaycareContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
              <Link href="/daycare-demo/about" className="text-slate-600 hover:text-sky-500">About Us</Link>
              <Link href="/daycare-demo/enrollment" className="text-slate-600 hover:text-sky-500">Enrollment</Link>
              <Link href="/daycare-demo/contact" className="text-sky-500 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">Touch</span>
            </h1>
            <p className="text-xl text-slate-600">
              We&apos;d love to hear from you! Whether you have questions about our programs
              or want to schedule a tour, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Contact Information</h2>

              {/* Location Card */}
              <div className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-2xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Our Location</h3>
                    <p className="text-slate-600">1234 Rainbow Lane</p>
                    <p className="text-slate-600">Honolulu, HI 96814</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 text-sm font-medium inline-flex items-center mt-2"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Phone</h3>
                    <p className="text-slate-600">Main: (808) 555-KIDS (5437)</p>
                    <p className="text-slate-600">Text: (808) 555-5438</p>
                    <p className="text-slate-500 text-sm mt-2">Available during business hours</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-amber-50 to-sky-50 rounded-2xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">info@littleexplorers.com</p>
                    <p className="text-slate-600">enroll@littleexplorers.com</p>
                    <p className="text-slate-500 text-sm mt-2">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800">Hours of Operation</h3>
                  </div>
                </div>
                <div className="space-y-3 ml-16">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-600">{schedule.day}</span>
                      <span className={`font-medium ${schedule.time === 'Closed' ? 'text-slate-400' : 'text-slate-800'}`}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm mt-4 ml-16">
                  * Early drop-off (6:30 AM) and late pick-up (6:30 PM) available upon request
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </a>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Follow us for updates, photos, and parenting tips!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Message Sent!</h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out! We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      className="text-sky-500 hover:text-sky-600 font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            placeholder="(808) 555-0123"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Subject *
                        </label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        >
                          <option value="">Select a topic</option>
                          <option value="enrollment">Enrollment Inquiry</option>
                          <option value="tour">Schedule a Tour</option>
                          <option value="programs">Program Information</option>
                          <option value="current-family">Current Family Question</option>
                          <option value="employment">Employment Opportunities</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-emerald-600 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Find Us</h2>
            <p className="text-slate-600">Conveniently located in the heart of Honolulu</p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1200&h=600&fit=crop"
              alt="Map location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            <div className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Little Explorers</p>
                  <p className="text-slate-600 text-sm">1234 Rainbow Lane, Honolulu</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-slate-600 text-sm">From Waikiki</p>
              <p className="font-semibold text-slate-800">15 min drive</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-slate-600 text-sm">Near Ala Moana</p>
              <p className="font-semibold text-slate-800">5 min drive</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-slate-600 text-sm">Free Parking</p>
              <p className="font-semibold text-slate-800">On-site lot</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to common questions from parents.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-800 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Schedule a tour today and see why families love Little Explorers!
          </p>
          <Link
            href="/daycare-demo/enrollment"
            className="inline-flex items-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-colors"
          >
            Schedule a Tour
          </Link>
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
