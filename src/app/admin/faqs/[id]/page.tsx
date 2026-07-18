import { notFound } from "next/navigation";

import {
  getFAQ,
} from "@/actions/faq";

export default async function FAQPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const faq =
    await getFAQ(id);

  if (!faq) {
    notFound();
  }

  return (

    <div className="space-y-8">

      <div className="rounded-xl border bg-white p-8">

        <h1 className="mb-6 text-3xl font-bold">
          {faq.question}
        </h1>

        <p className="leading-8 text-gray-700">
          {faq.answer}
        </p>

      </div>

    </div>

  );
}