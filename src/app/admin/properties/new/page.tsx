import PropertyForm from "@/components/admin/property/PropertyForm";

export default function NewPropertyPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Add New Property
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new property listing.
        </p>

      </div>

      <PropertyForm />

    </div>
  );
}