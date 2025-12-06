import { prisma } from "@/lib/prisma";
import { WEBSITE_PLANS, type WebsitePlan } from "@/lib/stripe";
import {
  CreditCard,
  TrendingUp,
  Users,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getSubscriptionStats() {
  const allUsers = await prisma.user.findMany({
    where: {
      subscriptionStatus: { not: null },
    },
    select: {
      id: true,
      name: true,
      email: true,
      subscriptionPlan: true,
      subscriptionStatus: true,
      stripeCurrentPeriodEnd: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const activeSubscribers = allUsers.filter(
    (u) => u.subscriptionStatus === "active"
  );
  const pastDueSubscribers = allUsers.filter(
    (u) => u.subscriptionStatus === "past_due"
  );
  const canceledSubscribers = allUsers.filter(
    (u) => u.subscriptionStatus === "canceled"
  );

  // Calculate MRR
  let mrr = 0;
  const planCounts: Record<string, number> = {
    starter: 0,
    growth: 0,
    professional: 0,
    enterprise: 0,
  };

  for (const user of activeSubscribers) {
    const plan = user.subscriptionPlan as WebsitePlan | null;
    if (plan && WEBSITE_PLANS[plan]) {
      mrr += WEBSITE_PLANS[plan].price.monthly;
      planCounts[plan]++;
    }
  }

  return {
    mrr,
    activeCount: activeSubscribers.length,
    pastDueCount: pastDueSubscribers.length,
    canceledCount: canceledSubscribers.length,
    planCounts,
    subscribers: allUsers,
  };
}

function StatusBadge({ status }: { status: string | null }) {
  switch (status) {
    case "active":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
          <CheckCircle className="w-3 h-3" />
          Active
        </span>
      );
    case "past_due":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
          <AlertCircle className="w-3 h-3" />
          Past Due
        </span>
      );
    case "canceled":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
          <XCircle className="w-3 h-3" />
          Canceled
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-500">
          <Clock className="w-3 h-3" />
          Inactive
        </span>
      );
  }
}

export default async function SubscriptionsPage() {
  const stats = await getSubscriptionStats();

  const statCards = [
    {
      title: "Monthly Recurring Revenue",
      value: `$${stats.mrr.toLocaleString()}`,
      icon: DollarSign,
      color: "bg-green-500",
      subtitle: "From active subscriptions",
    },
    {
      title: "Active Subscribers",
      value: stats.activeCount,
      icon: Users,
      color: "bg-blue-500",
      subtitle: "Currently paying",
    },
    {
      title: "Past Due",
      value: stats.pastDueCount,
      icon: AlertCircle,
      color: "bg-red-500",
      subtitle: "Payment failed",
    },
    {
      title: "Canceled",
      value: stats.canceledCount,
      icon: XCircle,
      color: "bg-gray-500",
      subtitle: "No longer active",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Subscriptions</h1>
        <p className="text-gray-600 mt-1">
          Manage subscriber accounts and view revenue metrics
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plan Breakdown */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Subscribers by Plan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(stats.planCounts).map(([plan, count]) => {
            const planInfo = WEBSITE_PLANS[plan as WebsitePlan];
            return (
              <div key={plan} className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{count}</p>
                <p className="text-sm font-medium text-gray-600 capitalize">
                  {plan}
                </p>
                <p className="text-xs text-gray-500">
                  ${planInfo?.price.monthly}/mo
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subscribers Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            All Subscribers ({stats.subscribers.length})
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Renews
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stats.subscribers.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <CreditCard className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p className="font-medium">No subscribers yet</p>
                    <p className="text-sm mt-1">
                      Subscribers will appear here once they sign up
                    </p>
                  </td>
                </tr>
              ) : (
                stats.subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {subscriber.name || "No name"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {subscriber.email}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 capitalize">
                        {subscriber.subscriptionPlan || "—"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={subscriber.subscriptionStatus} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subscriber.stripeCurrentPeriodEnd
                        ? new Date(
                            subscriber.stripeCurrentPeriodEnd
                          ).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(subscriber.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
