"use client";

import Image from "next/image";

interface Props {
  project: {
    title: string;
    image: string;
  };
}

export default function ProjectGallery({
  project,
}: Props) {
  return (
    <section>

      <div className="relative h-[500px] overflow-hidden rounded-3xl">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />

      </div>

    </section>
  );
}