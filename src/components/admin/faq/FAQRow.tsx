import Link from "next/link";

import { FAQ } from "@prisma/client";

import DeleteFAQButton from "./DeleteFAQButton";

interface Props {
  faq: FAQ;
}

export default function FAQRow({
  faq,
}: Props) {

  return (

    <tr className="border-b hover:bg-gray-50">

      <td className="p-4 font-medium">
        {faq.question}
      </td>

      <td className="max-w-xl truncate">
        {faq.answer}
      </td>

      <td>
        {faq.order}
      </td>

      <td className="space-x-4">

        <Link
          href={`/admin/faqs/${faq.id}`}
          className="text-green-600"
        >
          View
        </Link>

        <Link
          href={`/admin/faqs/${faq.id}/edit`}
          className="text-blue-600"
        >
          Edit
        </Link>

        <DeleteFAQButton
          id={faq.id}
        />

      </td>

    </tr>

  );
}