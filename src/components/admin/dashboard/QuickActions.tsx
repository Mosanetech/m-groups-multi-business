import Link from "next/link";

export default function QuickActions() {
  return (

    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        <Link
          href="/admin/properties/new"
          className="rounded-lg border p-4 hover:bg-gray-50"
        >
          🏠 Add Property
        </Link>

        <Link
          href="/admin/projects/new"
          className="rounded-lg border p-4 hover:bg-gray-50"
        >
          💻 Add Project
        </Link>

        <Link
          href="/admin/blog/new"
          className="rounded-lg border p-4 hover:bg-gray-50"
        >
          📝 New Blog
        </Link>

        <Link
          href="/admin/testimonials/new"
          className="rounded-lg border p-4 hover:bg-gray-50"
        >
          ⭐ Add Testimonial
        </Link>

        <Link
          href="/admin/faqs/new"
          className="rounded-lg border p-4 hover:bg-gray-50"
        >
          ❓ Add FAQ
        </Link>

        <Link
          href="/admin/messages"
          className="rounded-lg border p-4 hover:bg-gray-50"
        >
          📩 View Messages
        </Link>

      </div>

    </div>

  );
}