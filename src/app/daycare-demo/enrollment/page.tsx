'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Calendar, Clock, CheckCircle2, FileText, Users, Phone, Mail, AlertCircle } from 'lucide-react';

const programs = [
  { id: 'infants', name: 'Infants (6 weeks - 12 months)', spots: 2 },
  { id: 'toddlers', name: 'Toddlers (1 - 2 years)', spots: 4 },
  { id: 'preschool', name: 'Preschool (3 - 4 years)', spots: 6 },
  { id: 'prek', name: 'Pre-K (4 - 5 years)', spots: 3 },
];

const schedules = [
  { id: 'full-time', name: 'Full-Time (5 days/week)', description: 'Monday - Friday, 7:00 AM - 6:00 PM' },
  { id: 'part-time-3', name: 'Part-Time (3 days/week)', description: 'Choose any 3 days, 7:00 AM - 6:00 PM' },
  { id: 'part-time-2', name: 'Part-Time (2 days/week)', description: 'Choose any 2 days, 7:00 AM - 6:00 PM' },
  { id: 'half-day', name: 'Half-Day Program', description: 'Monday - Friday, 8:00 AM - 12:00 PM' },
];

const enrollmentSteps = [
  {
    step: 1,
    title: 'Schedule a Tour',
    description: 'Visit our center to meet our teachers, see our classrooms, and ask questions.',
    icon: Calendar,
  },
  {
    step: 2,
    title: 'Submit Application',
    description: 'Complete our enrollment application with your child\'s information and preferences.',
    icon: FileText,
  },
  {
    step: 3,
    title: 'Family Interview',
    description: 'Meet with our Director to discuss your child\'s needs and our program.',
    icon: Users,
  },
  {
    step: 4,
    title: 'Welcome Orientation',
    description: 'Attend orientation and complete enrollment paperwork before your start date.',
    icon: CheckCircle2,
  },
];

const documents = [
  'Completed enrollment application',
  'Birth certificate copy',
  'Immunization records',
  'Emergency contact information',
  'Authorized pick-up list',
  'Health and allergy information',
  'Signed parent handbook acknowledgment',
  'First month tuition and registration fee',
];

export default function DaycareEnrollmentPage() {
  const [formType, setFormType] = useState<'tour' | 'inquiry'>('tour');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    schedule: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    howHeard: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            {formType === 'tour' ? 'Tour Request Received!' : 'Inquiry Submitted!'}
          </h1>
          <p className="text-slate-600 mb-8">
            {formType === 'tour'
              ? 'Thank you for your interest in Little Explorers! We\'ll contact you within 24 hours to confirm your tour date and time.'
              : 'Thank you for reaching out! A member of our team will be in touch within 1-2 business days to answer your questions.'}
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h3 className="font-semibold text-slate-800 mb-2">What to Expect on Your Tour:</h3>
            <ul className="text-left text-slate-600 space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Meet our Director and teaching staff</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Tour all classrooms and play areas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Learn about our curriculum and daily schedule</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Discuss tuition, schedules, and availability</span>
              </li>
            </ul>
          </div>
          <Link
            href="/daycare-demo"
            className="inline-flex items-center text-sky-500 hover:text-sky-600 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

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
              <Link href="/daycare-demo/enrollment" className="text-sky-500 font-medium">Enrollment</Link>
              <Link href="/daycare-demo/contact" className="text-slate-600 hover:text-sky-500">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">Journey</span> With Us
            </h1>
            <p className="text-xl text-slate-600">
              Take the first step toward exceptional early childhood education.
              Schedule a tour or inquire about enrollment today.
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Enrollment Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {enrollmentSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-emerald-100 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-sky-500" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Form Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-sm inline-flex">
              <button
                onClick={() => setFormType('tour')}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  formType === 'tour'
                    ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                <Calendar className="h-5 w-5 inline mr-2" />
                Schedule a Tour
              </button>
              <button
                onClick={() => setFormType('inquiry')}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  formType === 'inquiry'
                    ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                <Mail className="h-5 w-5 inline mr-2" />
                General Inquiry
              </button>
            </div>
          </div>

          {/* Availability Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start">
            <AlertCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 font-medium">Current Availability</p>
              <p className="text-amber-700 text-sm">
                Limited spots available for Spring 2026. Contact us soon to secure your child&apos;s place!
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              {formType === 'tour' ? 'Schedule Your Visit' : 'Enrollment Inquiry'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Your full name"
                  />
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="(808) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How Did You Hear About Us?
                  </label>
                  <select
                    value={formData.howHeard}
                    onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="social">Social Media</option>
                    <option value="drive-by">Drove By</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Child Info */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Child Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Child&apos;s Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      placeholder="Child's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Child&apos;s Age/Date of Birth *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      placeholder="e.g., 2 years old or MM/DD/YYYY"
                    />
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Program of Interest *
                  </label>
                  <select
                    required
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="">Select a program</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.id}>
                        {program.name} ({program.spots} spots available)
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Schedule
                  </label>
                  <select
                    value={formData.schedule}
                    onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="">Select a schedule</option>
                    {schedules.map((schedule) => (
                      <option key={schedule.id} value={schedule.id}>
                        {schedule.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tour-specific fields */}
              {formType === 'tour' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Tour Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Questions or Special Needs
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Tell us about any allergies, special needs, or questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-emerald-600 transition-colors"
              >
                {formType === 'tour' ? 'Request Tour' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Enrollment Documents</h2>
            <p className="text-slate-600">
              The following documents are required to complete enrollment after your tour.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center bg-slate-50 rounded-xl p-4">
                <FileText className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Have Questions? We&apos;re Here to Help!
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Call Us</h3>
                <p className="text-sky-500">(808) 555-KIDS</p>
                <p className="text-slate-500 text-sm">Mon-Fri, 7 AM - 6 PM</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Email Us</h3>
                <p className="text-emerald-500">enroll@littleexplorers.com</p>
                <p className="text-slate-500 text-sm">We respond within 24 hours</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Tour Hours</h3>
                <p className="text-amber-500">By Appointment</p>
                <p className="text-slate-500 text-sm">Mon-Fri, 9 AM - 4 PM</p>
              </div>
            </div>
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
