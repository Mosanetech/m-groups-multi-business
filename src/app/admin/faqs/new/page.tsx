import FAQForm from "@/components/admin/faq/FAQForm";

export default function NewFAQPage() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Add FAQ
      </h1>

      <FAQForm />

    </div>
  );
}