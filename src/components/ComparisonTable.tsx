import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "24/7 Availability",
      human: "❌ Staff needs sleep, time off",
      ai: "✓ Never sleeps, always available"
    },
    {
      feature: "Response Time",
      human: "⏰ Minutes to hours (if answered)",
      ai: "⚡ Instant (under 1 second)"
    },
    {
      feature: "Consistency",
      human: "😴 Varies by mood, training, fatigue",
      ai: "✓ Perfect every time"
    },
    {
      feature: "Handling Volume",
      human: "📞 1 conversation at a time",
      ai: "✓ Unlimited simultaneous conversations"
    },
    {
      feature: "Monthly Cost",
      human: "💰 $3,000-$5,000 per employee",
      ai: "✓ $497 (founding client rate)"
    },
    {
      feature: "Time Off",
      human: "🏖️ Sick days, vacation, holidays",
      ai: "✓ Works every holiday"
    },
    {
      feature: "Training Required",
      human: "📚 Weeks of onboarding",
      ai: "✓ Ready in 30 days"
    },
    {
      feature: "Lead Capture",
      human: "📝 Sometimes forgotten",
      ai: "✓ 100% capture rate"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Traditional Employee vs. AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3 px-4 font-semibold">Feature</th>
                <th className="text-left py-3 px-4 font-semibold text-red-600 dark:text-red-400">
                  Human Staff
                </th>
                <th className="text-left py-3 px-4 font-semibold text-green-600 dark:text-green-400">
                  AI Assistant
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 font-medium">{item.feature}</td>
                  <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400">{item.human}</td>
                  <td className="py-3 px-4 text-zinc-900 dark:text-zinc-100 font-medium">
                    {item.ai}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
          <p className="text-lg font-bold text-green-800 dark:text-green-400">
            Total Savings: $2,500-$4,500 per month
          </p>
          <p className="text-sm text-green-700 dark:text-green-500 mt-1">
            While capturing MORE leads than a human could handle
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
