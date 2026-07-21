interface Props {
  number: string;
  title: string;
  description: string;
}

export default function ProcessStep({
  number,
  title,
  description,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-card
        p-8
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-black
          text-2xl
          font-bold
          text-white
          shadow-lg
          dark:bg-white
          dark:text-black
        "
      >
        {number}
      </div>

      <h3 className="mt-8 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-foreground/80">
        {description}
      </p>
    </div>
  );
}