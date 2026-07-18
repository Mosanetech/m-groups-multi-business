import { notFound } from "next/navigation";

import {
  getFAQ,
} from "@/actions/faq";

import FAQForm from "@/components/admin/faq/FAQForm";

export default async function EditFAQPage({
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

      <h1 className="text-3xl font-bold">
        Edit FAQ
      </h1>

      <FAQForm faq={faq} />

    </div>
  );
}