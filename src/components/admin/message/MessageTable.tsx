import {
  ContactMessage,
} from "@prisma/client";

import EmptyState from "./EmptyState";
import MessageRow from "./MessageRow";

interface Props {
  messages: ContactMessage[];
}

export default function MessageTable({
  messages,
}: Props) {

  if (!messages.length) {
    return <EmptyState />;
  }

  return (

    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="w-full">

        <thead>

          <tr className="border-b bg-gray-50">

            <th className="p-4 text-left">
              Name
            </th>

            <th className="text-left">
              Email
            </th>

            <th className="text-left">
              Subject
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {messages.map((message) => (

            <MessageRow
              key={message.id}
              message={message}
            />

          ))}

        </tbody>

      </table>

    </div>

  );
}