"use client";

import { useEffect, useState } from "react";

export function SpotsRemaining() {
  const [spotsLeft, setSpotsLeft] = useState(8);
  const [recentApplicants, setRecentApplicants] = useState<string[]>([]);

  useEffect(() => {
    // In production, fetch from your database
    // For now, simulate some recent activity
    const applicants = [
      "Sarah from Waikiki Wellness",
      "Mike from Kailua Auto Detail",
      "Lisa from Maui Massage Therapy"
    ];
    setRecentApplicants(applicants);
  }, []);

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-l-4 border-amber-600 p-6 rounded-lg">
      <div className="flex items-start gap-4">
        <div className="text-4xl">⚠️</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-400">
            Only {spotsLeft} Founding Client Spots Remaining
          </h3>
          <p className="text-amber-800 dark:text-amber-300 mb-4">
            This program closes when all spots are filled. Price returns to $997/month.
          </p>

          {recentApplicants.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-400">
                Recent Applications:
              </p>
              {recentApplicants.map((applicant, index) => (
                <div key={index} className="text-sm text-amber-700 dark:text-amber-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span>{applicant}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
