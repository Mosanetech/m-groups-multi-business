"use client";

import Image from "next/image";
import Link from "next/link";

import { Testimonial } from "@prisma/client";

import DeleteTestimonialButton from "./DeleteTestimonialButton";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialRow({
  testimonial,
}: Props) {

  return (

    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">

        {testimonial.image ? (

          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={70}
            height={70}
            className="rounded-full object-cover"
          />

        ) : (

          <div className="h-16 w-16 rounded-full bg-gray-200" />

        )}

      </td>

      <td>

        {testimonial.name}

      </td>

      <td>

        {testimonial.company}

      </td>

      <td>

        {testimonial.featured
          ? "⭐"
          : "-"}

      </td>

      <td>

        <Link
          href={`/admin/testimonials/${testimonial.id}`}
          className="mr-4 text-green-600"
        >
          View
        </Link>

        <Link
          href={`/admin/testimonials/${testimonial.id}/edit`}
          className="mr-4 text-blue-600"
        >
          Edit
        </Link>

        <DeleteTestimonialButton
          id={testimonial.id}
        />

      </td>

    </tr>

  );

}