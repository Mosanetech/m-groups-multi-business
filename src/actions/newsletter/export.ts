"use server";

import { prisma } from "@/lib/prisma";

export async function exportSubscribers() {

  const subscribers =
    await prisma.newsletterSubscriber.findMany({
      orderBy: {
        subscribedAt: "desc",
      },
    });

  const csv = [
    "Email,Subscribed At",

    ...subscribers.map((subscriber) =>

      `${subscriber.email},${subscriber.subscribedAt.toISOString()}`

    ),

  ].join("\n");

  return csv;

}