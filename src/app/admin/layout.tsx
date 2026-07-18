import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import AdminLayout from "@/components/admin/layout/AdminLayout";
import { verifySession } from "@/lib/session";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const token = cookieStore.get("session")?.value;

  if (!token) {
    redirect("/login");
  }

  try {
    const session = await verifySession(token);

    return (
      <AdminLayout
        session={session}
      >
        {children}
      </AdminLayout>
    );
  } catch {
    redirect("/login");
  }
}