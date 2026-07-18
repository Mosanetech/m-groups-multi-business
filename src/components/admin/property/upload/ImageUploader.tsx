"use client";

import { useState } from "react";

interface Props {
  images: string[];
  onChange: (urls: string[]) => void;
}

export default function ImageUploader({
  images,
  onChange,
}: Props) {
  const [uploading, setUploading] =
    useState(false);

  async function uploadImage(file: File) {
    setUploading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();

      onChange([
        ...images,
        data.url,
      ]);
    } catch (error) {
      console.error(error);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-6">

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files) return;

          Array.from(e.target.files).forEach(uploadImage);
        }}
      />

      {uploading && (
        <p className="text-sm text-gray-500">
          Uploading...
        </p>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {images.map((image) => (
            <img
              key={image}
              src={image}
              alt=""
              className="h-32 w-full rounded-lg object-cover"
            />
          ))}

        </div>
      )}

    </div>
  );
}