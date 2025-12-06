'use client';

import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

export function SuccessBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="font-medium text-green-800">Subscription activated successfully!</p>
        <p className="text-sm text-green-700 mt-1">
          Thank you for subscribing. We will reach out within 24 hours to schedule your kickoff call.
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-green-600 hover:text-green-800"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
