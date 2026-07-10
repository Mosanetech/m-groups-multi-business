import { notFound } from "next/navigation";

import { PROJECTS } from "@/config/projects";

import ProjectGallery from "@/components/ict/ProjectGallery";
import ProjectInfo from "@/components/ict/ProjectInfo";
import RelatedProjects from "@/components/ict/RelatedProjects";
import CTASection from "@/components/shared/CTASection";

interface Props{
params:Promise<{
slug:string;
}>;
}

export default async function ProjectDetailsPage({
params,
}:Props){

const{slug}=await params;

const project=PROJECTS.find(

p=>p.slug===slug

);

if(!project){

notFound();

}

return(

<main className="container mx-auto py-16">

<ProjectGallery

project={project}

/>

<div className="mt-16">

<ProjectInfo

project={project}

/>

</div>

<RelatedProjects

currentSlug={project.slug}

/>

<div className="mt-24">

<CTASection/>

</div>

</main>

);

}