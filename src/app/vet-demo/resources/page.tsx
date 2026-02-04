'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, BookOpen, AlertTriangle, Apple, Activity, Baby, ThermometerSun, Bone, ChevronDown, ChevronUp, Download, ExternalLink } from 'lucide-react';

const healthGuides = [
  {
    icon: Baby,
    title: 'New Puppy Guide',
    description: 'Everything you need to know about raising a healthy, happy puppy.',
    topics: ['First vet visit', 'Vaccination schedule', 'Potty training', 'Socialization', 'Nutrition basics'],
  },
  {
    icon: Baby,
    title: 'New Kitten Guide',
    description: 'Complete guide to caring for your new feline friend.',
    topics: ['Kitten-proofing your home', 'Litter box training', 'Feeding schedule', 'Socialization tips', 'Play and enrichment'],
  },
  {
    icon: Activity,
    title: 'Senior Pet Care',
    description: 'Helping your aging pet stay comfortable and healthy.',
    topics: ['Signs of aging', 'Mobility support', 'Diet adjustments', 'Cognitive health', 'Quality of life'],
  },
  {
    icon: Apple,
    title: 'Pet Nutrition',
    description: 'Understanding your pet\'s dietary needs for optimal health.',
    topics: ['Reading food labels', 'Portion control', 'Weight management', 'Treats and supplements', 'Special diets'],
  },
  {
    icon: Bone,
    title: 'Dental Health',
    description: 'Keep your pet\'s teeth and gums healthy between cleanings.',
    topics: ['Brushing techniques', 'Dental treats', 'Signs of dental disease', 'Professional cleaning', 'At-home care'],
  },
  {
    icon: ThermometerSun,
    title: 'Seasonal Safety',
    description: 'Protect your pet from seasonal hazards year-round.',
    topics: ['Summer heat safety', 'Winter cold protection', 'Holiday hazards', 'Allergy management', 'Pest prevention'],
  },
];

const toxicFoods = [
  { name: 'Chocolate', danger: 'high', symptoms: 'Vomiting, diarrhea, rapid breathing, seizures' },
  { name: 'Grapes & Raisins', danger: 'high', symptoms: 'Kidney failure, vomiting, lethargy' },
  { name: 'Xylitol (artificial sweetener)', danger: 'high', symptoms: 'Rapid insulin release, liver failure' },
  { name: 'Onions & Garlic', danger: 'medium', symptoms: 'Anemia, weakness, pale gums' },
  { name: 'Macadamia Nuts', danger: 'medium', symptoms: 'Weakness, vomiting, tremors, hyperthermia' },
  { name: 'Avocado', danger: 'medium', symptoms: 'Vomiting, diarrhea (persin toxin)' },
  { name: 'Alcohol', danger: 'high', symptoms: 'Vomiting, disorientation, respiratory failure' },
  { name: 'Caffeine', danger: 'high', symptoms: 'Restlessness, rapid breathing, heart palpitations' },
];

const emergencySigns = [
  'Difficulty breathing or choking',
  'Uncontrolled bleeding',
  'Inability to urinate or defecate',
  'Seizures or collapse',
  'Suspected poisoning',
  'Severe vomiting or diarrhea',
  'Trauma (hit by car, fall, etc.)',
  'Eye injuries',
  'Distended/bloated abdomen',
  'Inability to walk or stand',
];

const faqs = [
  {
    question: 'How often should my pet have a wellness exam?',
    answer: 'We recommend annual exams for adult pets and bi-annual exams for senior pets (7+ years). Puppies and kittens need more frequent visits during their first year for vaccinations and development monitoring.',
  },
  {
    question: 'What vaccines does my pet need?',
    answer: 'Core vaccines for dogs include rabies, DHPP (distemper, hepatitis, parvo, parainfluenza). Cats need rabies and FVRCP. Lifestyle vaccines like bordetella, leptospirosis, and feline leukemia depend on your pet\'s risk factors.',
  },
  {
    question: 'When should I spay or neuter my pet?',
    answer: 'For most pets, we recommend spay/neuter between 6-9 months of age. Large breed dogs may benefit from waiting until 12-18 months. We\'ll discuss the best timing based on your pet\'s breed and health.',
  },
  {
    question: 'How can I tell if my pet is in pain?',
    answer: 'Signs include decreased appetite, lethargy, hiding, aggression, limping, excessive grooming of an area, changes in posture, restlessness, or vocalization. Cats especially hide pain well, so subtle changes matter.',
  },
  {
    question: 'What should I do if my pet eats something toxic?',
    answer: 'Call us immediately at (808) 555-PETS or contact ASPCA Poison Control at 1-888-426-4435. Do NOT induce vomiting unless instructed. Bring the packaging of what they ate if possible.',
  },
  {
    question: 'How do I know if it\'s an emergency?',
    answer: 'Difficulty breathing, uncontrolled bleeding, collapse, seizures, inability to urinate, suspected poisoning, severe vomiting/diarrhea, or trauma are all emergencies. When in doubt, call us. We\'re available 24/7.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We partner with CareCredit and Scratchpay for flexible payment options. We also offer our own in-house payment plans for qualifying procedures. Ask our team for details.',
  },
  {
    question: 'Can I stay with my pet during procedures?',
    answer: 'For minor procedures like exams and vaccinations, absolutely. For surgeries and certain diagnostics, we ask that you wait in our comfortable lobby. We\'ll keep you updated throughout.',
  },
];

export default function VetResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <Link href="/vet-demo/resources" className="text-teal-600 font-medium">Pet Care</Link>
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
              Pet Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Resources</span>
            </h1>
            <p className="text-xl text-slate-600">
              Helpful guides, safety information, and answers to common questions.
              Empowering you to give your pet the best care at home.
            </p>
          </div>
        </div>
      </section>

      {/* Health Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold text-slate-800">Pet Health Guides</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthGuides.map((guide, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <guide.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{guide.title}</h3>
                <p className="text-slate-600 mb-4">{guide.description}</p>
                <div className="space-y-2">
                  {guide.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                      {topic}
                    </div>
                  ))}
                </div>
                <button className="mt-4 flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700">
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toxic Foods */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl font-bold text-slate-800">Foods Toxic to Pets</h2>
          </div>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Many common foods are dangerous for pets. Keep these items out of reach and call us immediately if ingestion occurs.
          </p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-red-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-red-800">Food</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-red-800">Danger Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-red-800">Symptoms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {toxicFoods.map((food, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-800">{food.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          food.danger === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {food.danger === 'high' ? 'High Risk' : 'Moderate Risk'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-sm">{food.symptoms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 p-4 bg-red-100 rounded-xl flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800">If your pet ingests something toxic:</p>
              <p className="text-red-700">
                Call us immediately at <span className="font-bold">(808) 555-PETS</span> or ASPCA Poison Control at <span className="font-bold">1-888-426-4435</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Signs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                When to Seek Emergency Care
              </h2>
              <p className="text-slate-600 mb-6">
                Recognizing an emergency can save your pet&apos;s life. Call us immediately or come in if you notice any of these signs:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {emergencySigns.map((sign, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-red-600 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Line</h3>
                <p className="text-3xl font-bold">(808) 555-PETS</p>
                <p className="text-red-100 mt-2">We&apos;re always here when your pet needs us.</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=500&fit=crop"
                alt="Veterinary emergency care"
                width={600}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-slate-800">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-teal-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-teal-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Helpful External Resources
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'ASPCA Animal Poison Control', url: 'https://www.aspca.org/pet-care/animal-poison-control' },
              { name: 'AAHA Pet Health Library', url: 'https://www.aaha.org/pet-owner/' },
              { name: 'American Veterinary Medical Association', url: 'https://www.avma.org/resources/pet-owners' },
              { name: 'Pet First Aid by Red Cross', url: 'https://www.redcross.org/take-a-class/first-aid/pet-first-aid' },
            ].map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-teal-50 transition-colors"
              >
                <span className="font-medium text-slate-800">{resource.name}</span>
                <ExternalLink className="h-5 w-5 text-teal-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have More Questions?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Our team is happy to answer any pet health questions you may have.
          </p>
          <Link
            href="/vet-demo/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors"
          >
            Contact Us
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
