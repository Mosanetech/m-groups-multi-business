import Link from "next/link";

export default function FAQToolbar() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          FAQs
        </h1>

        <p className="text-gray-500">
          Manage frequently asked questions.
        </p>

      </div>

      <Link
        href="/admin/faqs/new"
        className="rounded-lg bg-black px-5 py-3 text-white"
      >
        Add FAQ
      </Link>

    </div>
  );
}