import Link from "next/link";
import { Download, Search } from "lucide-react";

export default function NewsletterToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          Newsletter
        </h1>

        <p className="text-gray-500">
          Manage newsletter subscribers
        </p>

      </div>

      <div className="flex gap-3">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search subscriber..."
            className="rounded-xl border py-2 pl-10 pr-4 outline-none focus:border-black"
          />

        </div>

        <Link
          href="/admin/newsletter/export"
          className="flex items-center gap-2 rounded-xl bg-black px-5 py-2 text-white transition hover:bg-gray-800"
        >
          <Download size={18} />
          Export
        </Link>

      </div>

    </div>
  );
}