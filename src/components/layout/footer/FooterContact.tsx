import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function FooterContact() {
  return (
    <div>

      <h3 className="mb-6 text-lg font-bold">
        Contact
      </h3>

      <div className="space-y-5">

        <div className="flex items-center gap-3">

          <Phone size={18} />

          <span>+265 XXX XXX XXX</span>

        </div>

        <div className="flex items-center gap-3">

          <Mail size={18} />

          <span>info@mgroups.com</span>

        </div>

        <div className="flex items-center gap-3">

          <MapPin size={18} />

          <span>Lilongwe, Malawi</span>

        </div>

      </div>

    </div>
  );
}