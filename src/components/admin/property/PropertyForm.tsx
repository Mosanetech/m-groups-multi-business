"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  propertySchema,
  PropertyFormData,
} from "@/lib/validators/property";

import {
  createProperty,
} from "@/actions/property/create";

import {
  updateProperty,
} from "@/actions/property/update";

import BasicInfoSection from "./sections/BasicInfoSection";
import LocationSection from "./sections/LocationSection";
import PropertyDetailsSection from "./sections/PropertyDetailsSection";
import ImagesSection from "./sections/ImagesSection";
import SubmitButton from "./SubmitButton";

interface Props {
  property?: any;
}

export default function PropertyForm({
  property,
}: Props) {
  const form = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema) as any,

    defaultValues: property
      ? {
          title: property.title,
          slug: property.slug,
          description: property.description,
          city: property.city,
          location: property.location,
          type: property.type,
          status: property.status,
          price: property.price,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          area: property.area,
          images:
            property.images?.map(
              (img: any) => img.image
            ) ?? [],
          featured: property.featured,
          availableFrom:
            property.availableFrom ?? null,
        }
      : {
          title: "",
          slug: "",
          description: "",
          city: "",
          location: "",
          type: "HOUSE",
          status: "FOR_SALE",
          price: 0,
          bedrooms: 0,
          bathrooms: 0,
          area: 0,
          images: [],
          featured: false,
          availableFrom: null,
        },
  });

  async function onSubmit(
    values: PropertyFormData
  ) {
    if (property) {
      await updateProperty(
        property.id,
        values
      );
    } else {
      await createProperty(values);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <BasicInfoSection form={form} />

      <LocationSection form={form} />

      <PropertyDetailsSection form={form} />

      <ImagesSection form={form} />

      <SubmitButton
        editing={!!property}
      />
    </form>
  );
}