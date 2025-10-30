import { Card, CardContent } from "@/components/ui/card";

export function ComparisonChart() {
  const features = [
    { feature: "Monthly Cost", pacificPulse: "$497/month", hiring: "$18,000+/month", savings: "$17,503/mo" },
    { feature: "Annual Cost", pacificPulse: "$5,964/year", hiring: "$216,000+/year", savings: "$210,036/yr" },
    { feature: "24/7 Availability", pacificPulse: true, hiring: false },
    { feature: "Lead Capture Rate", pacificPulse: "94%", hiring: "27%" },
    { feature: "Response Time", pacificPulse: "< 1 second", hiring: "Hours to days" },
    { feature: "NLP Psychology Training", pacificPulse: true, hiring: false },
    { feature: "Calendar Integration", pacificPulse: true, hiring: "Manual" },
    { feature: "Content Automation", pacificPulse: "4 blogs + 20 posts/mo", hiring: "Extra $5K/mo" },
    { feature: "Setup Time", pacificPulse: "30 days", hiring: "3-6 months hiring" },
    { feature: "Scales Without Cost", pacificPulse: true, hiring: false },
    { feature: "No Sick Days/Vacation", pacificPulse: true, hiring: false },
    { feature: "Multilingual Support", pacificPulse: "Included", hiring: "Extra hire" },
  ];

  return (
    <Card className="border-2 border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          Pacific Pulse vs. Hiring a Marketing Team
        </h3>
        <p className="text-sm opacity-90">See why Hawaii businesses choose AI automation</p>
      </div>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-50 dark:bg-zinc-900">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold bg-blue-50 dark:bg-blue-950/30">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">Pacific Pulse</span>
                    <span className="text-xs opacity-75">AI Automation</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-zinc-600 dark:text-zinc-400">Hiring Team</span>
                    <span className="text-xs opacity-75">Traditional Approach</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {features.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {row.feature}
                    {row.savings && (
                      <div className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">
                        Save {row.savings}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50/50 dark:bg-blue-950/10">
                    {typeof row.pacificPulse === 'boolean' ? (
                      row.pacificPulse ? (
                        <div className="flex justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )
                    ) : (
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {row.pacificPulse}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof row.hiring === 'boolean' ? (
                      row.hiring ? (
                        <div className="flex justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )
                    ) : (
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {row.hiring}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-t-4 border-green-500">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              Save $210,036 in Year 1
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Get enterprise-level marketing automation at <strong>1/36th the cost</strong> of hiring a team
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Marketing Manager ($8K/mo) + Content Writer ($5K/mo) + Social Media Manager ($5K/mo) = $18K/month minimum
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
