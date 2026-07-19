"use client";

import { UseFormReturn } from "react-hook-form";

import { ProjectFormData } from "@/lib/validators/project";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormSection } from "@/components/ui/form-section";

interface Props {
  form: UseFormReturn<ProjectFormData>;
}

export default function LinksSection({
  form,
}: Props) {

  const { register } = form;

  return (
    <FormSection
      title="Project Links"
      description="Optional external links."
    >

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <Label>
            Website
          </Label>

          <Input
            {...register("websiteUrl")}
            placeholder="https://..."
            className="mt-2"
          />

        </div>

        <div>

          <Label>
            GitHub
          </Label>

          <Input
            {...register("githubUrl")}
            placeholder="https://github.com/..."
            className="mt-2"
          />

        </div>

        <div>

          <Label>
            Google Play
          </Label>

          <Input
            {...register("playStoreUrl")}
            placeholder="https://play.google.com/..."
            className="mt-2"
          />

        </div>

        <div>

          <Label>
            App Store
          </Label>

          <Input
            {...register("appStoreUrl")}
            placeholder="https://apps.apple.com/..."
            className="mt-2"
          />

        </div>

      </div>

    </FormSection>
  );
}