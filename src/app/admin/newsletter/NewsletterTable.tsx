"use client";

import { Trash2 } from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  createdAt: Date;
}

interface Props {
  subscribers: Subscriber[];
}

export default function NewsletterTable({
  subscribers,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Email
            </th>

            <th className="px-6 py-4 text-left">
              Joined
            </th>

            <th className="px-6 py-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {subscribers.length === 0 && (

            <tr>

              <td
                colSpan={3}
                className="py-12 text-center text-gray-500"
              >

                No subscribers yet.

              </td>

            </tr>

          )}

          {subscribers.map((subscriber) => (

            <tr
              key={subscriber.id}
              className="border-t hover:bg-gray-50"
            >

              <td className="px-6 py-4">

                {subscriber.email}

              </td>

              <td className="px-6 py-4">

                {new Date(
                  subscriber.createdAt
                ).toLocaleDateString()}

              </td>

              <td className="px-6 py-4 text-center">

                <button
                  className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
                >

                  <Trash2 size={18} />

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}