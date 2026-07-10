const reasons = [
  "Qualified financial professionals",
  "Transparent financial reporting",
  "Support for NGOs and donor-funded projects",
  "Compliance with financial regulations",
  "Accurate budgeting and forecasting",
  "Reliable bookkeeping services",
];

export default function WhyChooseFinance() {
  return (
    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-4xl font-bold">
          Why Choose M Groups Finance?
        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {reasons.map((reason) => (

          <div
            key={reason}
            className="rounded-2xl border p-6"
          >
            {reason}
          </div>

        ))}

      </div>

    </section>
  );
}