import Link from "next/link";
import { ArrowRight,LucideIcon } from "lucide-react";

interface Props {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

export default function ServiceCard({
    title,
    description,
    href,
    icon: Icon,
}: Props) {
    return (
        <div className="rounded-3xl border bg-card p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">

                <Icon className="h-8 w-8 text-primary" />

            </div>

            <h3 className="text-2xl font-bold">
                {title}
            </h3>

            <p className="mt-4 text-foreground/80">
                {description}
            </p>

            <Link
                href={href}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-primary"
            >
                View Portfolio

                <ArrowRight size={18} />

            </Link>

        </div>
    );
}