interface Props {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  action,
}: Props) {
  return (
    <div className="rounded-2xl border border-dashed p-12 text-center">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-foreground/80">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}