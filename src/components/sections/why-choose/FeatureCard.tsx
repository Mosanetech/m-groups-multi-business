import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-8 transition hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-foreground/80 leading-7">
        {description}
      </p>

    </div>
  );
}