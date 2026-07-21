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
    <section className="border-b bg-background py-16 lg:py-24">

      <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

        {badge && (
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {badge}
          </span>
        )}

        <h1 className="mt-6 text-4xl font-bold text-foreground lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base text-foreground/80 lg:text-lg">
          {description}
        </p>

      </div>

    </section>
  );
}