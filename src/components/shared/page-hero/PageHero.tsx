interface PageHeroProps {
  title: string;
  description: string;
  badge?: string;
}

export default function PageHero({
  title,
  description,
  badge,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b bg-muted/30 py-24">

      <div className="container mx-auto max-w-5xl text-center">

        {badge && (
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {badge}
          </span>
        )}

        <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          {description}
        </p>

      </div>

    </section>
  );
}