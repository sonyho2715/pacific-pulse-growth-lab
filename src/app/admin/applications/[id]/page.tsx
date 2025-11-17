import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = 'force-dynamic';

async function getApplication(id: string) {
  const application = await prisma.application.findUnique({
    where: { id },
  });

  if (!application) {
    notFound();
  }

  return application;
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const app = await getApplication(params.id);

  return (
    <div>
      <Link
        href="/admin/applications"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Applications
      </Link>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">
            {app.businessName}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Submitted on {new Date(app.createdAt).toLocaleString()}
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Contact Person
              </h3>
              <p className="text-lg text-gray-900">{app.yourName}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Status
              </h3>
              <span
                className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                  app.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : app.status === "approved"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {app.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
              <a
                href={`mailto:${app.email}`}
                className="text-lg text-blue-600 hover:text-blue-700"
              >
                {app.email}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Phone</h3>
              <a
                href={`tel:${app.phone}`}
                className="text-lg text-blue-600 hover:text-blue-700"
              >
                {app.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Business Type
              </h3>
              <p className="text-lg text-gray-900">{app.businessType}</p>
              {app.businessTypeOther && (
                <p className="text-sm text-gray-600 mt-1">
                  {app.businessTypeOther}
                </p>
              )}
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Annual Revenue
              </h3>
              <p className="text-lg text-gray-900">{app.annualRevenue}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Pain Points
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {app.painPoints.map((point, index) => (
                <li key={index} className="text-gray-900">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Biggest Frustration
            </h3>
            <p className="text-gray-900 whitespace-pre-wrap">
              {app.biggestFrustration}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Why Founding Client?
            </h3>
            <p className="text-gray-900 whitespace-pre-wrap">
              {app.whyFoundingClient}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Ready to Start
            </h3>
            <p className="text-lg text-gray-900">{app.readyToStart}</p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex gap-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Approve
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Reject
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
