import Image from "next/image";

interface Props {
  images: string[];
}

export default function ImagePreview({
  images,
}: Props) {
  if (!images.length) return null;

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
      {images.map((image) => (
        <div
          key={image}
          className="relative h-32 overflow-hidden rounded-lg"
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}