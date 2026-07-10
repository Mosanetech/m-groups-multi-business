import {
  Globe,
  Smartphone,
} from "lucide-react";

interface Props {
  website?: string;
  playStore?: string;
  appStore?: string;
}

export default function ProjectLinks({
  website,
  playStore,
  appStore,
}: Props) {

  return (

    <div className="mt-12 flex flex-wrap gap-4">

      {website && (

        <a
          href={website}
          target="_blank"
          className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white"
        >
          <Globe size={18} />
          Visit Website
        </a>

      )}

      {playStore && (

        <a
          href={playStore}
          target="_blank"
          className="flex items-center gap-2 rounded-xl border px-6 py-3"
        >
          <Smartphone size={18} />
          Google Play
        </a>

      )}

      {appStore && (

        <a
          href={appStore}
          target="_blank"
          className="flex items-center gap-2 rounded-xl border px-6 py-3"
        >
          <Smartphone size={18} />
          App Store
        </a>

      )}

    </div>

  );

}