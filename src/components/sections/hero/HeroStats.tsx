interface HeroStat {
  label: string;
  value: string;
}

interface Props {
  stats: HeroStat[];
}

export default function HeroStats({ stats }: Props) {
  return (
    <div className="mt-16 grid grid-cols-3 gap-8">

      {stats.map((stat) => (

        <div key={stat.label}>

          <h3 className="text-4xl font-bold text-primary">
            {stat.value}
          </h3>

          <p className="mt-2 text-foreground/80">
            {stat.label}
          </p>

        </div>

      ))}

    </div>
  );
}