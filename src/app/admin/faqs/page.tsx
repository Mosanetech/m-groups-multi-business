import {
  getFAQs,
} from "@/actions/faq";

import FAQToolbar from "@/components/admin/faq/FAQToolbar";
import FAQTable from "@/components/admin/faq/FAQTable";
import EmptyState from "@/components/admin/faq/EmptyState";

export default async function FAQsPage() {

  const faqs =
    await getFAQs();

  return (

    <div className="space-y-8">

      <FAQToolbar />

      {faqs.length === 0 ? (
        <EmptyState />
      ) : (
        <FAQTable
          faqs={faqs}
        />
      )}

    </div>

  );
}