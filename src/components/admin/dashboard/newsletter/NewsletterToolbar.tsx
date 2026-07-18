import Link from "next/link";

export default function NewsletterToolbar() {

  return (

    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          Newsletter Subscribers
        </h1>

        <p className="text-gray-500">
          Everyone subscribed from the website.
        </p>

      </div>

      <Link
        href="/admin/newsletter/export"
        className="rounded-lg bg-black px-5 py-3 text-white"
      >
        Export CSV
      </Link>

    </div>

  );
}