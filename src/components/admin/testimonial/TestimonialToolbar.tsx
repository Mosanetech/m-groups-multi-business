"use client";

import Link from "next/link";

export default function TestimonialToolbar() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          Testimonials
        </h1>

        <p className="text-gray-500">
          Manage customer testimonials.
        </p>

      </div>

      <Link
        href="/admin/testimonials/new"
        className="rounded-lg bg-black px-5 py-3 text-white"
      >
        Add Testimonial
      </Link>

    </div>
  );
}