import { notFound } from "next/navigation";

import {
  getMessage,
  markMessageRead,
} from "@/actions/message";

export default async function MessagePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const message =
    await getMessage(id);

  if (!message) {
    notFound();
  }

  if (!message.read) {
    await markMessageRead(id);
  }

  return (

    <div className="space-y-8">

      <div className="rounded-xl border bg-white p-8">

        <h1 className="text-3xl font-bold">
          {message.subject}
        </h1>

        <p className="mt-3">
          <strong>Name:</strong>{" "}
          {message.name}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {message.email}
        </p>

        {message.phone && (

          <p>

            <strong>Phone:</strong>{" "}
            {message.phone}

          </p>

        )}

        <hr className="my-6" />

        <p className="leading-8 whitespace-pre-wrap">
          {message.message}
        </p>

      </div>

    </div>

  );
}