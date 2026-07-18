import {
  getSubscribers,
} from "@/actions/newsletter";

import NewsletterToolbar from "./NewsletterToolbar";
import NewsletterTable from "./NewsletterTable";

export default async function NewsletterPage() {

  const subscribers =
    await getSubscribers();

  return (

    <div className="space-y-8">

      <NewsletterToolbar />

      <NewsletterTable
        subscribers={subscribers}
      />

    </div>

  );
}