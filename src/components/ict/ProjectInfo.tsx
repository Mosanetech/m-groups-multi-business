import TechnologyBadges from "./TechnologyBadges";
import ProjectLinks from "./ProjectLinks";

import { Project } from "@/types/project";

interface Props{
    project:Project;
}

export default function ProjectInfo({
    project,
}:Props){

return(

<section>

<span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

{project.category}

</span>

<h1 className="mt-6 text-5xl font-bold">

{project.title}

</h1>

<p className="mt-8 leading-8 text-muted-foreground">

{project.description}

</p>

<div className="mt-10 grid gap-6 md:grid-cols-2">

<div className="rounded-2xl border p-6">

<p className="text-sm text-muted-foreground">

Client

</p>

<p className="mt-2 font-semibold">

{project.client}

</p>

</div>

<div className="rounded-2xl border p-6">

<p className="text-sm text-muted-foreground">

Completed

</p>

<p className="mt-2 font-semibold">

{project.completed}

</p>

</div>

</div>

<TechnologyBadges

technologies={project.technologies}

/>

<ProjectLinks

website={project.website}

playStore={project.playStore}

appStore={project.appStore}

/>

</section>

);

}