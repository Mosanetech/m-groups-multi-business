import Link from "next/link";

import {
  ContactMessage,
} from "@prisma/client";

import DeleteMessageButton from "./DeleteMessageButton";
import MessageStatus from "./MessageStatus";

interface Props {
  message: ContactMessage;
}

export default function MessageRow({
  message,
}: Props) {

  return (

    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">
        {message.name}
      </td>

      <td>
        {message.email}
      </td>

      <td>
        {message.subject}
      </td>

      <td>

        <MessageStatus
          read={message.read}
        />

      </td>

      <td className="space-x-4">

        <Link
          href={`/admin/messages/${message.id}`}
          className="text-blue-600 hover:underline"
        >
          View
        </Link>

        <DeleteMessageButton
          id={message.id}
        />

      </td>

    </tr>

  );
}