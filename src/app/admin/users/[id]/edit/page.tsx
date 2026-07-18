import { notFound } from "next/navigation";

import { getUser } from "@/actions/user";

import UserForm from "@/components/admin/users/UserForm";

export default async function EditUserPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const user = await getUser(id);

  if (!user) {
    notFound();
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Administrator
        </h1>

        <p className="text-gray-500">
          Update administrator account details.
        </p>

      </div>

      <UserForm user={user} />

    </div>
  );
}