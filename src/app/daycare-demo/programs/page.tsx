"use client";

import Link from "next/link";
import Image from "next/image";

export default function DaycareProgramsPage() {
  const programs = [
    {
      id: "infants",
      name: "Infant Program",
      ages: "6 weeks - 12 months",
      ratio: "1:3 (Teacher to Child)",
      hours: "7:00 AM - 6:00 PM",
      tuition: "$2,200/month",
      image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&h=500&fit=crop",
      color: "pink",
      description: "Our infant program provides a warm, nurturing environment where babies feel safe and loved. We focus on building secure attachments and supporting each child's unique developmental journey.",
      highlights: [
        "Individual sleep, feeding, and activity schedules",
        "Tummy time and sensory exploration",
        "Language development through songs and conversation",
        "Daily communication logs for parents",
        "Safe, sanitized play areas",
      ],
      dailySchedule: [
        { time: "7:00 AM", activity: "Arrival & Free Play" },
        { time: "8:30 AM", activity: "Breakfast & Morning Bottles" },
        { time: "9:30 AM", activity: "Sensory Activities" },
        { time: "10:30 AM", activity: "Morning Nap" },
        { time: "12:00 PM", activity: "Lunch & Bottles" },
        { time: "1:00 PM", activity: "Outdoor Time (Weather Permitting)" },
        { time: "2:00 PM", activity: "Afternoon Nap" },
        { time: "4:00 PM", activity: "Snack & Play" },
        { time: "5:00 PM", activity: "Stories & Music" },
      ],
    },
    {
      id: "toddlers",
      name: "Toddler Program",
      ages: "1 - 2 years",
      ratio: "1:4 (Teacher to Child)",
      hours: "7:00 AM - 6:00 PM",
      tuition: "$1,950/month",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=500&fit=crop",
      color: "amber",
      description: "Toddlers are natural explorers! Our program channels their curiosity into purposeful play that develops language, motor skills, and early social-emotional learning.",
      highlights: [
        "Language-rich environment with vocabulary building",
        "Art, music, and movement activities daily",
        "Introduction to potty training when ready",
        "Outdoor play and gross motor development",
        "Beginning social skills and sharing",
      ],
      dailySchedule: [
        { time: "7:00 AM", activity: "Arrival & Free Play" },
        { time: "8:30 AM", activity: "Breakfast" },
        { time: "9:00 AM", activity: "Circle Time & Music" },
        { time: "9:30 AM", activity: "Art & Sensory Play" },
        { time: "10:30 AM", activity: "Outdoor Play" },
        { time: "11:30 AM", activity: "Lunch" },
        { time: "12:30 PM", activity: "Nap Time" },
        { time: "3:00 PM", activity: "Snack" },
        { time: "3:30 PM", activity: "Learning Centers" },
        { time: "4:30 PM", activity: "Outdoor Play" },
        { time: "5:30 PM", activity: "Stories & Departure" },
      ],
    },
    {
      id: "preschool",
      name: "Preschool Program",
      ages: "3 - 4 years",
      ratio: "1:8 (Teacher to Child)",
      hours: "7:00 AM - 6:00 PM",
      tuition: "$1,750/month",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
      color: "emerald",
      description: "Our preschool program builds kindergarten readiness through play-based learning. Children develop early literacy, math concepts, and the social skills needed for school success.",
      highlights: [
        "Phonics and early reading fundamentals",
        "Number recognition and counting",
        "Science exploration and discovery",
        "Dramatic play and creativity",
        "Conflict resolution and emotional regulation",
      ],
      dailySchedule: [
        { time: "7:00 AM", activity: "Arrival & Morning Centers" },
        { time: "8:30 AM", activity: "Breakfast" },
        { time: "9:00 AM", activity: "Circle Time & Calendar" },
        { time: "9:30 AM", activity: "Literacy Activities" },
        { time: "10:15 AM", activity: "Math & Science" },
        { time: "11:00 AM", activity: "Outdoor Play" },
        { time: "11:45 AM", activity: "Lunch" },
        { time: "12:30 PM", activity: "Rest Time" },
        { time: "2:30 PM", activity: "Snack" },
        { time: "3:00 PM", activity: "Art & Music" },
        { time: "4:00 PM", activity: "Learning Centers" },
        { time: "5:00 PM", activity: "Outdoor Play & Departure" },
      ],
    },
    {
      id: "prek",
      name: "Pre-Kindergarten Program",
      ages: "4 - 5 years",
      ratio: "1:10 (Teacher to Child)",
      hours: "7:00 AM - 6:00 PM",
      tuition: "$1,650/month",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
      color: "sky",
      description: "Our Pre-K program ensures children are fully prepared for kindergarten. We focus on advanced academic skills, independence, and the confidence needed to succeed in elementary school.",
      highlights: [
        "Reading readiness and sight words",
        "Writing name and simple sentences",
        "Addition and subtraction concepts",
        "STEM activities and critical thinking",
        "Leadership and independence skills",
      ],
      dailySchedule: [
        { time: "7:00 AM", activity: "Arrival & Journals" },
        { time: "8:30 AM", activity: "Breakfast" },
        { time: "9:00 AM", activity: "Morning Meeting" },
        { time: "9:30 AM", activity: "Reading Workshop" },
        { time: "10:15 AM", activity: "Writing Workshop" },
        { time: "11:00 AM", activity: "Math" },
        { time: "11:45 AM", activity: "Outdoor Play" },
        { time: "12:30 PM", activity: "Lunch" },
        { time: "1:00 PM", activity: "Rest/Quiet Time" },
        { time: "2:30 PM", activity: "Science/Social Studies" },
        { time: "3:15 PM", activity: "Snack" },
        { time: "3:45 PM", activity: "Specials (Art, Music, PE)" },
        { time: "4:30 PM", activity: "Centers & Departure" },
      ],
    },
  ];

  const colorClasses = {
    pink: { bg: "bg-pink-100", text: "text-pink-700", border: "border-pink-200" },
    amber: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200" },
    sky: { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" },
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/daycare-demo" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">Little Explorers</div>
                <div className="text-xs text-slate-500">Learning Center</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/daycare-demo" className="text-slate-600 font-medium hover:text-slate-800 transition">Home</Link>
              <Link href="/daycare-demo/programs" className="text-sky-600 font-medium">Programs</Link>
              <Link href="/daycare-demo/about" className="text-slate-600 font-medium hover:text-slate-800 transition">About Us</Link>
              <Link href="/daycare-demo/enrollment" className="text-slate-600 font-medium hover:text-slate-800 transition">Enrollment</Link>
              <Link href="/daycare-demo/contact" className="text-slate-600 font-medium hover:text-slate-800 transition">Contact</Link>
            </div>

            <Link
              href="/daycare-demo/enrollment"
              className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-6 py-2.5 rounded-full font-semibold hover:from-sky-600 hover:to-emerald-600 transition"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Our Programs</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Programs for Every Age
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            From infants to pre-K, our developmentally appropriate programs nurture each child's unique growth journey.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto py-4">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${colorClasses[program.color as keyof typeof colorClasses].bg} ${colorClasses[program.color as keyof typeof colorClasses].text} hover:opacity-80 transition`}
              >
                {program.name} ({program.ages})
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`py-20 px-4 ${index % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-[350px] rounded-2xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${colorClasses[program.color as keyof typeof colorClasses].bg} ${colorClasses[program.color as keyof typeof colorClasses].text} mb-4`}>
                  {program.ages}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{program.name}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <div className="text-sm text-slate-500">Ratio</div>
                    <div className="font-semibold text-slate-900">{program.ratio}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <div className="text-sm text-slate-500">Hours</div>
                    <div className="font-semibold text-slate-900">{program.hours}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 col-span-2">
                    <div className="text-sm text-slate-500">Tuition</div>
                    <div className="font-semibold text-slate-900">{program.tuition}</div>
                  </div>
                </div>

                <h3 className="font-semibold text-slate-900 mb-3">Program Highlights</h3>
                <ul className="space-y-2 mb-6">
                  {program.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/daycare-demo/enrollment"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:from-sky-600 hover:to-emerald-600 transition"
                >
                  Enroll in {program.name.split(" ")[0]}
                </Link>
              </div>
            </div>

            {/* Daily Schedule */}
            <div className="mt-12 bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Sample Daily Schedule</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {program.dailySchedule.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-semibold text-sky-600 w-20">{item.time}</span>
                    <span className="text-sm text-slate-600">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find the Right Program for Your Child
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Schedule a tour to see our classrooms and meet our teachers.
          </p>
          <Link
            href="/daycare-demo/enrollment"
            className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-sky-50 transition shadow-lg"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">Little Explorers Learning Center</span>
          </div>
          <p>&copy; 2026 Little Explorers Learning Center. Demo by <Link href="/" className="text-sky-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
