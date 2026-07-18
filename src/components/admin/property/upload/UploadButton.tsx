interface UploadButtonProps {
  loading: boolean;
}

export default function UploadButton({
  loading,
}: UploadButtonProps) {
  return (
    <label className="inline-flex cursor-pointer items-center rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800">
      {loading ? "Uploading..." : "Upload Images"}

      <input
        hidden
        type="file"
        multiple
        accept="image/*"
      />
    </label>
  );
}