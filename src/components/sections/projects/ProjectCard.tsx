import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  category: string;
  image: string;
  href: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  href,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-card transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-64 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="p-6">

        <p className="text-sm font-semibold text-primary">
          {category}
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          {title}
        </h3>

        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
        >
          View Portfolio

          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  );
}