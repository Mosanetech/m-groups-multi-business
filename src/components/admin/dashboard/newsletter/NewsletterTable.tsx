import {
  NewsletterSubscriber,
} from "@prisma/client";

import EmptyState from "./EmptyState";
import NewsletterRow from "./NewsletterRow";

interface Props {
  subscribers: NewsletterSubscriber[];
}

export default function NewsletterTable({
  subscribers,
}: Props) {

  if (!subscribers.length) {
    return <EmptyState />;
  }

  return (

    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="w-full">

        <thead>

          <tr className="border-b bg-gray-50">

            <th className="p-4 text-left">
              Email
            </th>

            <th className="text-left">
              Subscribed
            </th>

            <th className="text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {subscribers.map((subscriber) => (

            <NewsletterRow
              key={subscriber.id}
              subscriber={subscriber}
            />

          ))}

        </tbody>

      </table>

    </div>

  );
}