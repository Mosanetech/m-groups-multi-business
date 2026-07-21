interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          {description}
        </p>
      )}
    </div>
  );
}