import Link from "next/link";

import {
  NewsletterSubscriber,
} from "@prisma/client";

import DeleteSubscriberButton from "./DeleteSubscriberButton";

interface Props {
  subscriber: NewsletterSubscriber;
}

export default function NewsletterRow({
  subscriber,
}: Props) {

  return (

    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">
        {subscriber.email}
      </td>

      <td>
        {subscriber.subscribedAt.toLocaleDateString()}
      </td>

      <td className="space-x-4">

        <Link
          href={`/admin/newsletter/${subscriber.id}`}
          className="text-blue-600 hover:underline"
        >
          View
        </Link>

        <DeleteSubscriberButton
          id={subscriber.id}
        />

      </td>

    </tr>

  );
}