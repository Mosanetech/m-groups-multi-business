const languages = [
  "English",
  "Chichewa",
  "Tumbuka",
  "Yao",
  "Lomwe",
  "Sena",
  "Tonga",
  "Sign Language",
];

export default function LanguagesSupported() {
  return (
    <section>

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          Languages We Support
        </h2>

        <p className="mt-3 text-foreground/80">
          We provide services across Malawi's major languages together with English and sign language.
        </p>

      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {languages.map((language) => (

          <div
            key={language}
            className="rounded-2xl border p-6 text-center font-semibold transition hover:border-primary hover:text-primary"
          >
            {language}
          </div>

        ))}

      </div>

    </section>
  );
}