'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, MapPin, Phone, Mail, Clock, CheckCircle2, AlertTriangle, Calendar, Dog, Cat, Bird } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '7:00 AM - 7:00 PM' },
  { day: 'Tuesday', time: '7:00 AM - 7:00 PM' },
  { day: 'Wednesday', time: '7:00 AM - 7:00 PM' },
  { day: 'Thursday', time: '7:00 AM - 7:00 PM' },
  { day: 'Friday', time: '7:00 AM - 7:00 PM' },
  { day: 'Saturday', time: '8:00 AM - 5:00 PM' },
  { day: 'Sunday', time: '8:00 AM - 5:00 PM' },
];

const appointmentTypes = [
  { id: 'wellness', name: 'Wellness Exam', icon: Dog },
  { id: 'sick', name: 'Sick Visit', icon: Cat },
  { id: 'vaccine', name: 'Vaccinations', icon: Dog },
  { id: 'surgery', name: 'Surgery Consult', icon: Cat },
  { id: 'dental', name: 'Dental Exam', icon: Dog },
  { id: 'exotic', name: 'Exotic Pet Care', icon: Bird },
];

const petTypes = [
  { id: 'dog', name: 'Dog' },
  { id: 'cat', name: 'Cat' },
  { id: 'bird', name: 'Bird' },
  { id: 'reptile', name: 'Reptile' },
  { id: 'small-mammal', name: 'Small Mammal' },
  { id: 'other', name: 'Other' },
];

export default function VetContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    petAge: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    isNewClient: 'yes',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
              <Link href="/vet-demo/team" className="text-slate-600 hover:text-teal-600">Our Team</Link>
              <Link href="/vet-demo/resources" className="text-slate-600 hover:text-teal-600">Pet Care</Link>
              <Link href="/vet-demo/contact" className="text-teal-600 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-medium">24/7 Emergency Care:</span>
          <a href="tel:808-555-7387" className="font-bold hover:underline">(808) 555-PETS</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Book an <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Appointment</span>
            </h1>
            <p className="text-xl text-slate-600">
              Schedule your pet&apos;s visit online or give us a call. New clients receive a complimentary wellness exam!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Location Card */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Our Location</h3>
                <p className="text-slate-600">456 Paw Street</p>
                <p className="text-slate-600">Honolulu, HI 96815</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 font-medium mt-3 hover:text-teal-700"
                >
                  Get Directions →
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Phone</h3>
                <p className="text-slate-600">Main: (808) 555-PETS (7387)</p>
                <p className="text-slate-600">Emergency: Available 24/7</p>
                <p className="text-slate-600">Text: (808) 555-7388</p>
              </div>

              {/* Email Card */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600">info@alohapethospital.com</p>
                <p className="text-slate-600">appointments@alohapethospital.com</p>
              </div>

              {/* Hours Card */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-slate-600">{schedule.day}</span>
                      <span className="font-medium text-slate-800">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-700 font-medium">
                    Emergency care available 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Appointment Request Received!</h3>
                    <p className="text-slate-600 mb-6 max-w-md mx-auto">
                      Thank you for choosing Aloha Pet Hospital! We&apos;ll call you within 2 hours to confirm your appointment.
                    </p>
                    <div className="bg-teal-50 rounded-xl p-6 max-w-sm mx-auto text-left">
                      <h4 className="font-semibold text-teal-800 mb-3">What to bring:</h4>
                      <ul className="space-y-2 text-teal-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Previous medical records
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Current medications
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Vaccination history
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Your pet on a leash or in a carrier
                        </li>
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          ownerName: '',
                          email: '',
                          phone: '',
                          petName: '',
                          petType: '',
                          petAge: '',
                          appointmentType: '',
                          preferredDate: '',
                          preferredTime: '',
                          isNewClient: 'yes',
                          message: '',
                        });
                      }}
                      className="mt-8 text-teal-600 hover:text-teal-700 font-medium"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Calendar className="h-6 w-6 text-teal-500" />
                      <h2 className="text-2xl font-bold text-slate-800">Request an Appointment</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* New Client Toggle */}
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                        <p className="font-medium text-amber-800 mb-3">Are you a new client?</p>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="isNewClient"
                              value="yes"
                              checked={formData.isNewClient === 'yes'}
                              onChange={(e) => setFormData({ ...formData, isNewClient: e.target.value })}
                              className="w-4 h-4 text-teal-600"
                            />
                            <span className="text-amber-800">Yes, I&apos;m new</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="isNewClient"
                              value="no"
                              checked={formData.isNewClient === 'no'}
                              onChange={(e) => setFormData({ ...formData, isNewClient: e.target.value })}
                              className="w-4 h-4 text-teal-600"
                            />
                            <span className="text-amber-800">Returning client</span>
                          </label>
                        </div>
                        {formData.isNewClient === 'yes' && (
                          <p className="mt-2 text-sm text-amber-700">
                            🎉 New clients receive a complimentary wellness exam!
                          </p>
                        )}
                      </div>

                      {/* Owner Info */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.ownerName}
                            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Pet Info */}
                      <div className="border-t border-slate-100 pt-6">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Pet Information</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Pet&apos;s Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.petName}
                              onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                              placeholder="Pet's name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Pet Type *
                            </label>
                            <select
                              required
                              value={formData.petType}
                              onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            >
                              <option value="">Select type</option>
                              {petTypes.map((type) => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Age
                            </label>
                            <input
                              type="text"
                              value={formData.petAge}
                              onChange={(e) => setFormData({ ...formData, petAge: e.target.value })}
                              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                              placeholder="e.g., 3 years"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Appointment Type */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">
                          Reason for Visit *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {appointmentTypes.map((type) => (
                            <label
                              key={type.id}
                              className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors ${
                                formData.appointmentType === type.id
                                  ? 'border-teal-500 bg-teal-50'
                                  : 'border-slate-200 hover:border-teal-200'
                              }`}
                            >
                              <input
                                type="radio"
                                name="appointmentType"
                                value={type.id}
                                checked={formData.appointmentType === type.id}
                                onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                                className="sr-only"
                              />
                              <type.icon className={`h-5 w-5 ${formData.appointmentType === type.id ? 'text-teal-600' : 'text-slate-400'}`} />
                              <span className={`text-sm font-medium ${formData.appointmentType === type.id ? 'text-teal-700' : 'text-slate-600'}`}>
                                {type.name}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Preferred Date/Time */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          >
                            <option value="">Select time</option>
                            <option value="morning">Morning (7am - 12pm)</option>
                            <option value="afternoon">Afternoon (12pm - 4pm)</option>
                            <option value="evening">Evening (4pm - 7pm)</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Additional Notes
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Any symptoms, concerns, or special needs we should know about..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-colors"
                      >
                        Request Appointment
                      </button>

                      <p className="text-sm text-slate-500 text-center">
                        We&apos;ll call you within 2 hours to confirm your appointment.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
              alt="Map location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
            <div className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Aloha Pet Hospital</p>
                  <p className="text-slate-600 text-sm">456 Paw Street, Honolulu</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-slate-600 text-sm">Free Parking</p>
              <p className="font-semibold text-slate-800">On-site lot</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-slate-600 text-sm">Near</p>
              <p className="font-semibold text-slate-800">Ala Moana Center</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-slate-600 text-sm">Bus Routes</p>
              <p className="font-semibold text-slate-800">8, 19, 20, 42</p>
            </div>
          </div>
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
