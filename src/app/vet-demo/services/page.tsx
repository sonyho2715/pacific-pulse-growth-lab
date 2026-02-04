'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, Stethoscope, Syringe, Scissors, Activity, Bone, Eye, FlaskConical, AlertTriangle, Thermometer, Baby, Dog } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Preventive Care',
    description: 'Keep your pet healthy with regular checkups and preventive treatments.',
    icon: Stethoscope,
    color: 'teal',
    services: [
      { name: 'Comprehensive Wellness Exam', price: '$65-85', description: 'Full physical examination, health assessment, and personalized recommendations.' },
      { name: 'Puppy/Kitten Package', price: '$199', description: 'Series of 3 exams, core vaccines, deworming, and microchip.' },
      { name: 'Senior Pet Wellness', price: '$145', description: 'Exam, bloodwork, urinalysis, and early disease screening for pets 7+.' },
      { name: 'Annual Checkup', price: '$75', description: 'Yearly exam with health counseling and vaccine updates.' },
    ],
  },
  {
    title: 'Vaccinations',
    description: 'Core and lifestyle vaccines to protect against common diseases.',
    icon: Syringe,
    color: 'blue',
    services: [
      { name: 'Rabies Vaccine', price: '$25', description: 'Required by law. 1-year or 3-year options available.' },
      { name: 'DHPP (Dogs)', price: '$30', description: 'Distemper, hepatitis, parvo, and parainfluenza protection.' },
      { name: 'FVRCP (Cats)', price: '$28', description: 'Core feline vaccine for respiratory and panleukopenia.' },
      { name: 'Bordetella', price: '$25', description: 'Kennel cough vaccine, required by most boarding facilities.' },
      { name: 'Leptospirosis', price: '$28', description: 'Protects against bacterial infection from water/wildlife.' },
      { name: 'Feline Leukemia', price: '$32', description: 'Recommended for cats that go outdoors.' },
    ],
  },
  {
    title: 'Surgical Services',
    description: 'From routine procedures to complex surgeries, performed with the utmost care.',
    icon: Scissors,
    color: 'purple',
    services: [
      { name: 'Spay (Female)', price: '$250-400', description: 'Ovariohysterectomy with pre-surgical bloodwork and pain management.' },
      { name: 'Neuter (Male)', price: '$200-350', description: 'Castration with anesthesia, monitoring, and recovery care.' },
      { name: 'Mass Removal', price: '$350-800', description: 'Tumor or growth removal with histopathology if needed.' },
      { name: 'Orthopedic Surgery', price: '$2,000+', description: 'ACL repair, fracture fixation, joint surgery.' },
      { name: 'Soft Tissue Surgery', price: 'Varies', description: 'Bladder stones, foreign body removal, abdominal surgery.' },
      { name: 'Dental Extractions', price: '$150-500', description: 'Tooth extraction during dental procedure.' },
    ],
  },
  {
    title: 'Dental Care',
    description: 'Oral health is essential. We offer complete dental services.',
    icon: Bone,
    color: 'amber',
    services: [
      { name: 'Dental Exam', price: '$45', description: 'Oral examination and treatment recommendations.' },
      { name: 'Professional Cleaning', price: '$250-450', description: 'Ultrasonic scaling, polishing, and fluoride under anesthesia.' },
      { name: 'Digital Dental X-rays', price: '$85', description: 'Full-mouth radiographs to assess tooth roots and bone.' },
      { name: 'Tooth Extraction', price: '$150-500', description: 'Removal of damaged or diseased teeth.' },
    ],
  },
  {
    title: 'Diagnostics & Lab',
    description: 'Advanced diagnostic tools for accurate, fast results.',
    icon: FlaskConical,
    color: 'green',
    services: [
      { name: 'In-House Bloodwork', price: '$85-150', description: 'CBC, chemistry panel, results in minutes.' },
      { name: 'Urinalysis', price: '$45', description: 'Complete urine analysis for kidney and bladder health.' },
      { name: 'Digital X-rays', price: '$150-250', description: 'High-quality radiographs with instant results.' },
      { name: 'Ultrasound', price: '$250-350', description: 'Non-invasive imaging of internal organs.' },
      { name: 'Fecal Testing', price: '$35', description: 'Parasite and infection screening.' },
      { name: 'Heartworm Test', price: '$45', description: 'Annual screening for heartworm disease.' },
    ],
  },
  {
    title: 'Emergency & Urgent Care',
    description: '24/7 emergency services when your pet needs immediate attention.',
    icon: AlertTriangle,
    color: 'red',
    services: [
      { name: 'Emergency Exam', price: '$125', description: 'After-hours emergency evaluation and triage.' },
      { name: 'Toxin Ingestion', price: 'Varies', description: 'Decontamination, supportive care, and monitoring.' },
      { name: 'Trauma Care', price: 'Varies', description: 'Stabilization and treatment for injuries.' },
      { name: 'Difficulty Breathing', price: 'Varies', description: 'Oxygen therapy, diagnostics, and treatment.' },
      { name: 'Hospitalization', price: '$75-150/day', description: 'IV fluids, monitoring, and nursing care.' },
    ],
  },
  {
    title: 'Specialty Services',
    description: 'Advanced care for complex conditions.',
    icon: Activity,
    color: 'indigo',
    services: [
      { name: 'Dermatology Consult', price: '$95', description: 'Skin allergies, infections, and chronic conditions.' },
      { name: 'Cardiology', price: '$175', description: 'Heart disease diagnosis and management.' },
      { name: 'Ophthalmology', price: '$125', description: 'Eye exams, glaucoma, and vision issues.' },
      { name: 'Oncology Consult', price: '$150', description: 'Cancer diagnosis, staging, and treatment planning.' },
      { name: 'Behavioral Consult', price: '$125', description: 'Anxiety, aggression, and behavioral issues.' },
    ],
  },
  {
    title: 'Exotic Pet Care',
    description: 'Specialized care for birds, reptiles, and small mammals.',
    icon: Baby,
    color: 'pink',
    services: [
      { name: 'Exotic Wellness Exam', price: '$75-95', description: 'Health assessment for birds, reptiles, rabbits, and more.' },
      { name: 'Avian Care', price: 'Varies', description: 'Wing trims, beak conditioning, and illness treatment.' },
      { name: 'Reptile Care', price: 'Varies', description: 'Husbandry consults, illness treatment, and nutrition.' },
      { name: 'Small Mammal Care', price: 'Varies', description: 'Rabbits, guinea pigs, hamsters, and ferrets.' },
    ],
  },
];

const additionalServices = [
  { icon: Thermometer, name: 'Microchipping', price: '$45', desc: 'Permanent ID for lost pet recovery' },
  { icon: Dog, name: 'Nail Trims', price: '$18', desc: 'Quick and gentle nail care' },
  { icon: Eye, name: 'Anal Gland Expression', price: '$25', desc: 'Relief for impacted glands' },
  { icon: Syringe, name: 'Allergy Testing', price: '$250', desc: 'Identify environmental allergens' },
];

export default function VetServicesPage() {
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
              <Link href="/vet-demo/services" className="text-teal-600 font-medium">Services</Link>
              <Link href="/vet-demo/team" className="text-slate-600 hover:text-teal-600">Our Team</Link>
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Services</span>
            </h1>
            <p className="text-xl text-slate-600">
              Comprehensive veterinary care for every stage of your pet&apos;s life.
              From preventive care to emergency services, we&apos;re here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className="scroll-mt-20" id={category.title.toLowerCase().replace(/\s+/g, '-')}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    category.color === 'teal' ? 'bg-teal-500' :
                    category.color === 'blue' ? 'bg-blue-500' :
                    category.color === 'purple' ? 'bg-purple-500' :
                    category.color === 'amber' ? 'bg-amber-500' :
                    category.color === 'green' ? 'bg-green-500' :
                    category.color === 'red' ? 'bg-red-500' :
                    category.color === 'indigo' ? 'bg-indigo-500' :
                    'bg-pink-500'
                  }`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">{category.title}</h2>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-50 rounded-xl p-5 hover:bg-slate-100 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-800">{service.name}</h3>
                        <span className="text-teal-600 font-bold whitespace-nowrap ml-2">{service.price}</span>
                      </div>
                      <p className="text-slate-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Additional Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <service.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-800">{service.name}</h3>
                <p className="text-teal-600 font-bold">{service.price}</p>
                <p className="text-slate-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Pricing Information</h3>
          <p className="text-amber-700">
            Prices shown are estimates and may vary based on your pet&apos;s size, condition, and specific needs.
            We provide detailed estimates before any treatment. Payment plans available for major procedures.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Services?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Contact us for a consultation or to schedule your pet&apos;s appointment.
          </p>
          <Link
            href="/vet-demo/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors"
          >
            Book an Appointment
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
