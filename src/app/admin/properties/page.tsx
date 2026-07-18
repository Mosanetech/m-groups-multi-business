import { getProperties } from "@/actions/property";

import EmptyState from "@/components/admin/property/EmptyState";
import PropertyTable from "@/components/admin/property/PropertyTable";
import PropertyToolbar from "@/components/admin/property/PropertyToolbar";

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="space-y-8">
      <PropertyToolbar />

      {properties.length === 0 ? (
        <EmptyState />
      ) : (
        <PropertyTable
          properties={properties}
        />
      )}
    </div>
  );
}