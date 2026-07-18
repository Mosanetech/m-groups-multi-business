import Link from "next/link";

export default function UserToolbar() {

  return (

    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          Administrators
        </h1>

        <p className="text-gray-500">
          Manage CMS users.
        </p>

      </div>

      <Link
        href="/admin/users/new"
        className="rounded-lg bg-black px-5 py-3 text-white"
      >
        New Administrator
      </Link>

    </div>

  );
}