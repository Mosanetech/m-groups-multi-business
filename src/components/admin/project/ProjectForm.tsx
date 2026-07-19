"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  projectSchema,
  ProjectFormData,
} from "@/lib/validators/project";

import {
  createProject,
} from "@/actions/project/create";

import {
  updateProject,
} from "@/actions/project/update";

import BasicInfoSection from "./sections/BasicInfoSection";
import DescriptionSection from "./sections/DescriptionSection";
import LinksSection from "./sections/LinksSection";
import ImageSection from "./sections/ImageSection";
import SubmitButton from "./SubmitButton";
import { Card } from "@/components/ui/card";

interface Props {
  project?: any;
}

export default function ProjectForm({
  project,
}: Props) {

  const form =
    useForm<ProjectFormData>({
      resolver:
        zodResolver(projectSchema) as any,

      defaultValues: project ?? {

        title: "",

        slug: "",

        category: "ICT",

        shortDescription: "",

        description: "",

        image: "",

        websiteUrl: "",

        playStoreUrl: "",

        appStoreUrl: "",

        githubUrl: "",

        featured: false,

      },
    });

  async function onSubmit(
    values: ProjectFormData
  ) {

    if (project) {

      await updateProject(
        project.id,
        values
      );

    } else {

      await createProject(values);

    }

  }

 return (
  <Card className="shadow-sm">
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-10"
    >
      <BasicInfoSection form={form} />

      <DescriptionSection form={form} />

      <LinksSection form={form} />

      <ImageSection form={form} />

      <SubmitButton />
    </form>
  </Card>
);

}