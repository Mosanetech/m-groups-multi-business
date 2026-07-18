import Link from "next/link";

export default function PropertyToolbar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          Properties
        </h1>

        <p className="text-gray-500">
          Manage property listings.
        </p>

      </div>

      <Link
        href="/admin/properties/new"
        className="rounded-lg bg-black px-5 py-3 text-white"
      >
        Add Property
      </Link>

    </div>
  );
}