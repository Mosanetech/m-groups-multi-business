interface Props {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  "All",
  "ICT",
  "Real Estate",
  "Finance",
  "Language",
  "Education",
];

export default function BlogCategories({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2 transition ${
            value === category
              ? "bg-primary text-white"
              : "border"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}