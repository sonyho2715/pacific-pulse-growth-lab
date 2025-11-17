import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

async function getUserData(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export default async function DashboardPage() {
  const session = await auth();

  if (!session || !session.user?.email) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const user = await getUserData(session.user.email);

  if (!user) {
    redirect("/login");
  }

  const hasActiveSubscription = user.subscriptionStatus === "active";
  const isPastDue = user.subscriptionStatus === "past_due";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user.name || "there"}!
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your subscription and account settings
          </p>
        </div>

        {/* Subscription Status Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Subscription Status</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {hasActiveSubscription ? (
                <>
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Active Subscription</p>
                    <p className="text-sm text-gray-600">
                      Plan: {user.subscriptionPlan?.toUpperCase() || "N/A"}
                    </p>
                  </div>
                </>
              ) : isPastDue ? (
                <>
                  <XCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">Payment Past Due</p>
                    <p className="text-sm text-gray-600">
                      Please update your payment method
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <Clock className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">No Active Subscription</p>
                    <p className="text-sm text-gray-600">
                      Subscribe to access all features
                    </p>
                  </div>
                </>
              )}
            </div>

            {user.stripeCurrentPeriodEnd && hasActiveSubscription && (
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Current period ends:{" "}
                  <span className="font-medium text-gray-900">
                    {new Date(user.stripeCurrentPeriodEnd).toLocaleDateString()}
                  </span>
                </p>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {hasActiveSubscription || isPastDue ? (
                <form action="/api/stripe/portal" method="POST">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Manage Subscription
                  </button>
                </form>
              ) : (
                <Link
                  href="/pricing"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
                >
                  View Plans
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Account Details Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium text-gray-900">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="font-medium text-gray-900">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
