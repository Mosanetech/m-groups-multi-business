"use client";

import { UseFormReturn } from "react-hook-form";
import { PropertyFormData } from "@/lib/validators/property";
import ImageUploader from "../upload/ImageUploader";

interface Props {
  form: UseFormReturn<PropertyFormData>;
}

export default function PropertyDetailsSection({
  form,
}: Props) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const images = watch("images");

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Property Details
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label>Property Type</label>

          <select
            {...register("type")}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="HOUSE">House</option>
            <option value="APARTMENT">Apartment</option>
            <option value="VILLA">Villa</option>
            <option value="OFFICE">Office</option>
            <option value="SHOP">Shop</option>
            <option value="LAND">Land</option>
            <option value="WAREHOUSE">Warehouse</option>
          </select>
        </div>

        <div>
          <label>Status</label>

          <select
            {...register("status")}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="FOR_SALE">For Sale</option>
            <option value="TO_LET">To Let</option>
            <option value="SOLD">Sold</option>
            <option value="RENTED">Rented</option>
          </select>
        </div>

        <div>
          <label>Price</label>

          <input
            type="number"
            {...register("price")}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Bedrooms</label>

          <input
            type="number"
            {...register("bedrooms")}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Bathrooms</label>

          <input
            type="number"
            {...register("bathrooms")}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Area (㎡)</label>

          <input
            type="number"
            {...register("area")}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

      </div>

      <div className="mt-6 flex items-center gap-3">

        <input
          type="checkbox"
          {...register("featured")}
        />

        <label>Featured Property</label>

      </div>

    </div>
  );
}