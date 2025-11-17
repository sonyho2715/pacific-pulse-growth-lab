import { prisma } from "@/lib/prisma";
import { FileText, Mail, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";

async function getDashboardStats() {
  const [applications, contacts, bookings] = await Promise.all([
    prisma.application.count(),
    prisma.contact.count(),
    prisma.booking.count(),
  ]);

  const pendingApplications = await prisma.application.count({
    where: { status: "pending" },
  });

  return {
    applications,
    contacts,
    bookings,
    pendingApplications,
  };
}

async function getRecentApplications() {
  return prisma.application.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      businessName: true,
      yourName: true,
      email: true,
      status: true,
      createdAt: true,
    },
  });
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();
  const recentApplications = await getRecentApplications();

  const statCards = [
    {
      title: "Total Applications",
      value: stats.applications,
      icon: FileText,
      href: "/admin/applications",
      color: "bg-blue-500",
    },
    {
      title: "Pending Applications",
      value: stats.pendingApplications,
      icon: TrendingUp,
      href: "/admin/applications?status=pending",
      color: "bg-yellow-500",
    },
    {
      title: "Contact Submissions",
      value: stats.contacts,
      icon: Mail,
      href: "/admin/contacts",
      color: "bg-green-500",
    },
    {
      title: "Bookings",
      value: stats.bookings,
      icon: Calendar,
      href: "/admin/bookings",
      color: "bg-purple-500",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to your admin dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.title}
              href={stat.href}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Applications
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Business Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {app.businessName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {app.yourName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {app.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        app.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : app.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <Link
            href="/admin/applications"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View all applications →
          </Link>
        </div>
      </div>
    </div>
  );
}
