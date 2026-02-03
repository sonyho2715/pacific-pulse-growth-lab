"use client";

import Link from "next/link";
import Image from "next/image";

export default function WeddingAboutPage() {
  const team = [
    {
      name: "Leilani Nakamura",
      title: "Founder & Lead Planner",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&h=600&fit=crop",
      bio: "With 15 years of experience and a deep love for Hawaii, Leilani founded Aloha Weddings to share the magic of island celebrations with couples from around the world. Her attention to detail and calm demeanor make even the most complex weddings feel effortless.",
      instagram: "@leilani_weddings",
    },
    {
      name: "Emma Chen",
      title: "Senior Planner & Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop",
      bio: "Emma brings a background in interior design to her wedding work, creating cohesive aesthetics that wow guests and photograph beautifully. She specializes in luxury resort weddings and destination celebrations.",
      instagram: "@emma.designs",
    },
    {
      name: "Kai Williams",
      title: "Coordinator & Logistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
      bio: "Kai's background in event production means nothing rattles him on wedding day. He's the behind-the-scenes master who ensures every timeline runs smoothly and every detail is perfect.",
      instagram: "@kai_events",
    },
    {
      name: "Sophie Park",
      title: "Associate Planner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop",
      bio: "The newest member of our team, Sophie brings fresh ideas and boundless enthusiasm. Her background in hospitality and fluency in Korean and Japanese makes her perfect for our international couples.",
      instagram: "@sophie.aloha",
    },
  ];

  const values = [
    {
      title: "Aloha Spirit",
      description: "We infuse every wedding with the warmth, love, and welcoming nature that defines Hawaii.",
      icon: "🌺",
    },
    {
      title: "Authentic Connection",
      description: "We take the time to truly know each couple, ensuring their day reflects who they are.",
      icon: "💕",
    },
    {
      title: "Flawless Execution",
      description: "Behind every magical moment is meticulous planning and seamless coordination.",
      icon: "✨",
    },
    {
      title: "Local Expertise",
      description: "Deep relationships with Hawaii's best venues and vendors give our couples exclusive access.",
      icon: "🏝️",
    },
  ];

  const awards = [
    "The Knot Best of Weddings 2024",
    "Wedding Wire Couples' Choice 2024",
    "Hawaii Magazine Best Wedding Planner",
    "Modern Luxury Hawaii Top Planner",
    "Pacific Weddings Featured Vendor",
    "Honolulu Magazine Best of the Best",
  ];

  const press = [
    { name: "Martha Stewart Weddings", logo: "MSW" },
    { name: "The Knot", logo: "TK" },
    { name: "Brides", logo: "B" },
    { name: "Style Me Pretty", logo: "SMP" },
    { name: "Hawaii Magazine", logo: "HM" },
    { name: "Pacific Weddings", logo: "PW" },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/wedding-demo" className="flex items-center gap-2">
              <span className="text-2xl font-serif italic text-stone-800">Aloha</span>
              <span className="text-2xl font-serif text-rose-400">Weddings</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/wedding-demo" className="text-stone-600 font-medium hover:text-rose-400 transition">Home</Link>
              <Link href="/wedding-demo/services" className="text-stone-600 font-medium hover:text-rose-400 transition">Services</Link>
              <Link href="/wedding-demo/portfolio" className="text-stone-600 font-medium hover:text-rose-400 transition">Portfolio</Link>
              <Link href="/wedding-demo/about" className="text-rose-400 font-medium">About</Link>
              <Link href="/wedding-demo/contact" className="text-stone-600 font-medium hover:text-rose-400 transition">Contact</Link>
            </div>

            <Link
              href="/wedding-demo/contact"
              className="bg-rose-400 text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-500 transition"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-rose-50 to-[#faf9f7]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-2 mb-6">About Aloha Weddings</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Creating magical celebrations in paradise since 2009.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop"
                alt="Wedding ceremony"
                width={600}
                height={800}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-rose-400 text-white p-8 rounded-2xl shadow-lg hidden lg:block">
                <div className="text-4xl font-serif">15+</div>
                <div className="text-rose-100">Years of Magic</div>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Our Beginning</span>
              <h2 className="text-4xl font-serif mt-2 mb-6">A Love for Love Stories</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Aloha Weddings was born from a simple belief: every couple deserves a wedding that feels authentically theirs, without the stress of making it happen.
                </p>
                <p>
                  Founder Leilani Nakamura started planning weddings in 2009 after helping a friend create her dream beach ceremony. What started as a passion project quickly grew as word spread about her ability to turn visions into reality while keeping the planning process joyful.
                </p>
                <p>
                  Today, our team of four dedicated planners has coordinated over 200 weddings across Hawaii&apos;s most beautiful venues. From intimate elopements to grand celebrations, we bring the same level of care, creativity, and aloha spirit to every event.
                </p>
                <p>
                  We believe that planning your wedding should be as enjoyable as the day itself. That&apos;s why we handle the details, navigate the challenges, and celebrate the wins alongside you, all while keeping your vision at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">What We Believe</span>
            <h2 className="text-4xl font-serif mt-2">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif mb-2">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">The Team</span>
            <h2 className="text-4xl font-serif mt-2 mb-4">Meet Your Planners</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              A passionate team dedicated to making your wedding dreams come true.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <a href="#" className="text-white/90 text-sm hover:text-rose-300 transition">
                        {member.instagram}
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl">{member.name}</h3>
                <p className="text-rose-400 text-sm mb-2">{member.title}</p>
                <p className="text-stone-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Press */}
      <section className="py-24 px-4 bg-rose-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Awards */}
            <div>
              <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">Recognition</span>
              <h2 className="text-3xl font-serif mt-2 mb-8">Awards & Honors</h2>
              <ul className="space-y-4">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-rose-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-stone-700">{award}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Press */}
            <div>
              <span className="text-sm font-medium text-rose-400 uppercase tracking-widest">As Seen In</span>
              <h2 className="text-3xl font-serif mt-2 mb-8">Press Features</h2>
              <div className="grid grid-cols-3 gap-4">
                {press.map((publication, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 flex items-center justify-center aspect-square shadow-sm"
                  >
                    <span className="text-stone-400 font-serif text-lg text-center">{publication.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-rose-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-3xl md:text-4xl font-serif text-stone-700 mb-6 leading-relaxed">
            &ldquo;We don&apos;t just plan weddings. We create the beginning of your greatest adventure together.&rdquo;
          </blockquote>
          <cite className="text-rose-400 font-medium not-italic">— Leilani Nakamura, Founder</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4">
        <Image
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&h=600&fit=crop"
          alt="Wedding celebration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-4">
            Let&apos;s Create Your Story
          </h2>
          <p className="text-white/90 text-lg mb-8">
            We&apos;d love to hear about your vision and show you how we can bring it to life.
          </p>
          <Link
            href="/wedding-demo/contact"
            className="inline-flex items-center gap-2 bg-rose-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-rose-500 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-stone-500 text-sm">
          <div className="mb-4">
            <span className="text-xl font-serif italic text-white">Aloha</span>
            <span className="text-xl font-serif text-rose-400"> Weddings</span>
          </div>
          <p>&copy; 2026 Aloha Weddings. Demo by <Link href="/" className="text-rose-400 hover:underline">Pacific Pulse Growth Lab</Link></p>
        </div>
      </footer>
    </div>
  );
}
