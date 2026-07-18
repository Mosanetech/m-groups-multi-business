import TestimonialRow from "./TestimonialRow";

interface Props {
  testimonials: any[];
}

export default function TestimonialTable({
  testimonials,
}: Props) {

  return (

    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4">
              Photo
            </th>

            <th>
              Name
            </th>

            <th>
              Company
            </th>

            <th>
              Featured
            </th>

            <th>
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {testimonials.map((testimonial) => (

            <TestimonialRow
              key={testimonial.id}
              testimonial={testimonial}
            />

          ))}

        </tbody>

      </table>

    </div>

  );

}