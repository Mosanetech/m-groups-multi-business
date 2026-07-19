"use client";

import { UseFormReturn } from "react-hook-form";
import { PropertyFormData } from "@/lib/validators/property";

import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Props {
  form: UseFormReturn<PropertyFormData>;
}

export default function PropertyDetailsSection({
  form,
}: Props) {

  const { register } = form;

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-8">

        <h2 className="text-xl font-semibold">
          Property Details
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Technical specifications of the property.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <Label>Property Type</Label>

          <Select
            {...register("type")}
            className="mt-2"
          >
            <option value="HOUSE">House</option>
            <option value="APARTMENT">Apartment</option>
            <option value="VILLA">Villa</option>
            <option value="OFFICE">Office</option>
            <option value="SHOP">Shop</option>
            <option value="LAND">Land</option>
            <option value="WAREHOUSE">Warehouse</option>
          </Select>

        </div>

        <div>

          <Label>Status</Label>

          <Select
            {...register("status")}
            className="mt-2"
          >
            <option value="FOR_SALE">For Sale</option>
            <option value="TO_LET">To Let</option>
            <option value="SOLD">Sold</option>
            <option value="RENTED">Rented</option>
          </Select>

        </div>

        <div>

          <Label>Price (MWK)</Label>

          <Input
            type="number"
            {...register("price")}
            className="mt-2"
          />

        </div>

        <div>

          <Label>Bedrooms</Label>

          <Input
            type="number"
            {...register("bedrooms")}
            className="mt-2"
          />

        </div>

        <div>

          <Label>Bathrooms</Label>

          <Input
            type="number"
            {...register("bathrooms")}
            className="mt-2"
          />

        </div>

        <div>

          <Label>Area (㎡)</Label>

          <Input
            type="number"
            {...register("area")}
            className="mt-2"
          />

        </div>

      </div>

      <div className="mt-8 flex items-center gap-3">

        <Checkbox
          {...register("featured")}
        />

        <Label className="cursor-pointer">
          Featured Property
        </Label>

      </div>

    </section>
  );
}