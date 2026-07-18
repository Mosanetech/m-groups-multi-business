import { notFound } from "next/navigation";

import {
  getSubscriber,
} from "@/actions/newsletter";

export default async function SubscriberPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const subscriber =
    await getSubscriber(id);

  if (!subscriber) {
    notFound();
  }

  return (

    <div className="rounded-xl border bg-white p-8">

      <h1 className="text-3xl font-bold">
        Subscriber
      </h1>

      <p className="mt-6">
        <strong>Email:</strong>{" "}
        {subscriber.email}
      </p>

      <p className="mt-3">
        <strong>Subscribed:</strong>{" "}
        {subscriber.subscribedAt.toLocaleString()}
      </p>

    </div>

  );
}