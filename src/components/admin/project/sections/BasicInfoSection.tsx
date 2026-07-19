"use client";

import { UseFormReturn } from "react-hook-form";
import { ProjectFormData } from "@/lib/validators/project";

import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FormSection } from "@/components/ui/form-section";
import { FormError } from "@/components/ui/form-error";

interface Props {
  form: UseFormReturn<ProjectFormData>;
}

export default function BasicInfoSection({
  form,
}: Props) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <FormSection
      title="Basic Information"
      description="General information about the project."
    >
      <div className="grid gap-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <Label htmlFor="title">
              Project Title
            </Label>

            <Input
              id="title"
              {...register("title")}
              placeholder="School Management System"
              className="mt-2"
            />

            <FormError
              message={errors.title?.message}
            />

          </div>

          <div>

            <Label htmlFor="slug">
              Slug
            </Label>

            <Input
              id="slug"
              {...register("slug")}
              placeholder="school-management-system"
              className="mt-2"
            />

            <FormError
              message={errors.slug?.message}
            />

          </div>

        </div>

        <div>

          <Label>
            Category
          </Label>

          <Select
            {...register("category")}
            className="mt-2"
          >
            <option value="ICT">
              ICT
            </option>

            <option value="REAL_ESTATE">
              Real Estate
            </option>

            <option value="FINANCE">
              Finance
            </option>

            <option value="LANGUAGE">
              Language
            </option>

            <option value="EDUCATION">
              Education
            </option>

          </Select>

        </div>

      </div>
    </FormSection>
  );
}