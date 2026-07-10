"use client";

import Image from "next/image";

import { useState } from "react";

import { Project } from "@/types/project";

interface Props{
project:Project;
}

export default function ProjectGallery({
project,
}:Props){

const[selected,setSelected]=useState(
project.gallery[0]
);

return(

<section>

<div className="relative h-[500px] overflow-hidden rounded-3xl">

<Image

src={selected}

alt={project.title}

fill

className="object-cover"

/>

</div>

<div className="mt-5 grid grid-cols-3 gap-4">

{project.gallery.map(image=>(

<button

key={image}

onClick={()=>setSelected(image)}

className="relative h-28 overflow-hidden rounded-xl border-2"

>

<Image

src={image}

alt=""

fill

className="object-cover"

/>

</button>

))}

</div>

</section>

);

}