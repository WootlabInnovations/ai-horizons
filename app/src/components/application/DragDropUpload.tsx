"use client";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

export default function DragDropUpload({
  onDrop,
}: {
  onDrop: (files: File[]) => void;
}) {
  const [previews, setPreviews] = useState<string[]>([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [], "application/pdf": [] },
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      const urls = acceptedFiles.map((file) => URL.createObjectURL(file));
      setPreviews(urls);
      onDrop(acceptedFiles);
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed p-4 rounded text-center bg-gray-50`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop files here...</p>
      ) : (
        <p>Drag & drop or click to upload (PDF, images)</p>
      )}
      <div className={`grid grid-cols-2 gap-2 mt-4`}>
        {previews.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`file-preview-${i}`}
            className={`h-20 object-contain`}
          />
        ))}
      </div>
    </div>
  );
}
