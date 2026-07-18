import PageHero from "@/components/shared/page-hero/PageHero";
import { getSiteSettings } from "@/lib/site-settings";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default async function ContactPage() {

  const settings =
    await getSiteSettings();

  return (
    <>

      <PageHero
        title="Contact Us"
        description="We would love to hear from you."
      />

      <section className="py-24">

        <div className="container mx-auto">

          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-10">

            <h2 className="text-3xl font-bold">

              Contact Information

            </h2>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">

                <Phone />

                <span>{settings.phone1}</span>

              </div>

              {

                settings.phone2 && (

                  <div className="flex items-center gap-4">

                    <Phone />

                    <span>{settings.phone2}</span>

                  </div>

                )

              }

              <div className="flex items-center gap-4">

                <Mail />

                <span>{settings.email}</span>

              </div>

              <div className="flex items-center gap-4">

                <MapPin />

                <span>{settings.address}</span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );

}