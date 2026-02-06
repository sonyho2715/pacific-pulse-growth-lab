import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Bot, Bell, Shield } from 'lucide-react';

export const metadata = {
  title: 'Dental Practice Automation System | AI Booking for Dentists Hawaii',
  description: 'AI-powered patient booking and appointment reminders for dental practices. HIPAA-compliant, 24/7 scheduling, automated recall reminders.',
};

export default function DentalAutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Pacific Pulse" width={40} height={40} />
            <span className="font-bold">Pacific Pulse</span>
          </Link>
          <Link href="/apply" className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg">Free Demo</Link>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Dental Practice Automation with
          <span className="block bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">AI Appointment Booking</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8">HIPAA-compliant AI booking system. Patients book cleanings, exams, and emergency appointments 24/7.</p>
        <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg">
          See Demo <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Dental Practices</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: 'Online Scheduling', desc: 'Book cleanings, exams, emergencies 24/7' },
              { icon: Bot, title: 'AI Front Desk', desc: 'Answers insurance, pricing, procedure questions' },
              { icon: Bell, title: 'Recall Reminders', desc: '6-month cleaning reminders automatically' },
              { icon: Shield, title: 'HIPAA Compliant', desc: 'All data encrypted, secure infrastructure' },
            ].map((f) => (
              <div key={f.title} className="p-6 bg-white rounded-xl border">
                <f.icon className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500 to-cyan-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Automate Your Dental Practice</h2>
          <p className="text-blue-100 mb-8">Reduce no-shows. Fill cancellations. Save front desk hours.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg">
            Get Free Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t text-center text-sm text-slate-500">
        &copy; 2026 Pacific Pulse Growth Lab LLC
      </footer>
    </div>
  );
}
