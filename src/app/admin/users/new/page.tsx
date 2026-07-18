import UserForm from "@/components/admin/users/UserForm";

export default function NewUserPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          New Administrator
        </h1>

        <p className="text-gray-500">
          Create a new CMS administrator.
        </p>

      </div>

      <UserForm />

    </div>
  );
}