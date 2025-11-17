import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "@/lib/auth";
import AdminNav from "@/components/AdminNav";

export default async function AdminLayout({
  children,
}: {
  children: React.Node;
}) {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNav />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
