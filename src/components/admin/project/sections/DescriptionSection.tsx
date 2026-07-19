"use client";

import { UseFormReturn } from "react-hook-form";

import { ProjectFormData } from "@/lib/validators/project";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormSection } from "@/components/ui/form-section";
import { FormError } from "@/components/ui/form-error";

interface Props {
  form: UseFormReturn<ProjectFormData>;
}

export default function DescriptionSection({
  form,
}: Props) {

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <FormSection
      title="Description"
      description="Describe your project."
    >

      <div className="space-y-6">

        <div>

          <Label>
            Short Description
          </Label>

          <Textarea
            rows={4}
            {...register("shortDescription")}
            placeholder="A brief summary..."
            className="mt-2 resize-none"
          />

          <FormError
            message={errors.shortDescription?.message}
          />

        </div>

        <div>

          <Label>
            Full Description
          </Label>

          <Textarea
            rows={8}
            {...register("description")}
            placeholder="Detailed project description..."
            className="mt-2 resize-none"
          />

          <FormError
            message={errors.description?.message}
          />

        </div>

      </div>

    </FormSection>
  );
}