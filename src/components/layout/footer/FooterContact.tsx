import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { getSiteSettings } from "@/lib/site-settings";

export default async function FooterContact() {

  const settings =
    await getSiteSettings();

  return (

    <div>

      <h3 className="mb-6 text-lg font-bold">
        Contact
      </h3>

      <div className="space-y-5">

        <div className="flex items-center gap-3">

          <Phone size={18} />

          <span>

            {settings.phone1 || "Phone Number"}

          </span>

        </div>

        {settings.phone2 && (

          <div className="flex items-center gap-3">

            <Phone size={18} />

            <span>{settings.phone2}</span>

          </div>

        )}

        <div className="flex items-center gap-3">

          <Mail size={18} />

          <span>

            {settings.email || "info@example.com"}

          </span>

        </div>

        <div className="flex items-center gap-3">

          <MapPin size={18} />

          <span>

            {settings.address || "Address"}

          </span>

        </div>

      </div>

    </div>

  );

}