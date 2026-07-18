import {
  Globe,
  Smartphone,
  GitBranch,
} from "lucide-react";

interface Props {
  website?: string | null;
  playStore?: string | null;
  appStore?: string | null;
  github?: string | null;
}

export default function ProjectLinks({
  website,
  playStore,
  appStore,
  github,
}: Props) {

  return (

    <div className="mt-12 flex flex-wrap gap-4">

      {website && (

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-black px-6 py-3 text-white flex items-center gap-2"
        >
          <Globe size={18} />
          Website
        </a>

      )}

      {playStore && (

        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border px-6 py-3 flex items-center gap-2"
        >
          <Smartphone size={18} />
          Play Store
        </a>

      )}

      {appStore && (

        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border px-6 py-3 flex items-center gap-2"
        >
          <Smartphone size={18} />
          App Store
        </a>

      )}

      {github && (

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border px-6 py-3 flex items-center gap-2"
        >
          <GitBranch size={18} />
          GitHub
        </a>

      )}

    </div>

  );

}