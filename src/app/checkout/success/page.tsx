import { Suspense } from 'react';
import Link from 'next/link';
import { CheckCircle, Calendar, Mail, ArrowRight } from 'lucide-react';

function SuccessContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Welcome to Pacific Pulse!
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Your subscription is now active. We are excited to help your business grow online.
        </p>

        {/* Next Steps */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8 text-left">
          <h2 className="font-semibold text-slate-900 mb-4">What happens next?</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Check your email</p>
                <p className="text-sm text-slate-500">
                  We have sent you a confirmation email with your receipt and next steps.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Schedule your kickoff call</p>
                <p className="text-sm text-slate-500">
                  We will reach out within 24 hours to schedule your onboarding session.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors"
          >
            Go to Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg border border-slate-200 transition-colors"
          >
            Contact Support
          </Link>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-slate-500">
          Questions? Email us at{' '}
          <a href="mailto:support@pacificpulse.io" className="text-sky-600 hover:underline">
            support@pacificpulse.io
          </a>
        </p>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="animate-pulse text-slate-400">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
