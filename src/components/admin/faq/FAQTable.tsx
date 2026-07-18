import { FAQ } from "@prisma/client";

import FAQRow from "./FAQRow";

interface Props {
  faqs: FAQ[];
}

export default function FAQTable({
  faqs,
}: Props) {

  return (

    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="w-full">

        <thead>

          <tr className="border-b bg-gray-50">

            <th className="p-4 text-left">
              Question
            </th>

            <th className="text-left">
              Answer
            </th>

            <th className="text-left">
              Order
            </th>

            <th className="text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {faqs.map((faq) => (

            <FAQRow
              key={faq.id}
              faq={faq}
            />

          ))}

        </tbody>

      </table>

    </div>

  );
}