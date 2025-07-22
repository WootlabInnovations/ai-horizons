"use client";

import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/src/lib/supabaseClient";
import Image from "next/image";

export default function DragDropUpload({
  onDrop,
}: {
  onDrop: (files: { name: string; url: string }[]) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [], "application/pdf": [] },
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024,
    onDrop: async (acceptedFiles) => {
      setUploading(true);
      const uploadedFiles: { name: string; url: string }[] = [];
      const newPreviews: string[] = [];

      for (const file of acceptedFiles) {
        const filePath = `user_uploads/${Date.now()}-${file.name}`;

        // const { data, error } = await supabase.storage
        //   .from("portfolios")
        //   .upload(filePath, file);

        // if (error) {
        //   toast.error(`Failed to upload ${file.name}`);
        //   continue;
        // }

        const { data: urlData } = supabase.storage
          .from("portfolios")
          .getPublicUrl(filePath);

        uploadedFiles.push({ name: file.name, url: urlData.publicUrl });

        if (file.type.startsWith("image")) {
          newPreviews.push(URL.createObjectURL(file));
        } else {
          newPreviews.push("/pdf-icon.png");
        }

        toast.success(`${file.name} uploaded successfully`);
      }

      setPreviews(newPreviews);
      onDrop(uploadedFiles);
      setUploading(false);
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed p-4 rounded text-center bg-gray-50 cursor-pointer py-3 ${
        uploading ? "opacity-50" : ""
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop files here...</p>
      ) : (
        <p>Drag & drop or click to upload (PDF, images)</p>
      )}
      {uploading && (
        <p className="text-sm text-gray-500 mt-2">Uploading files...</p>
      )}
      <div className={`grid grid-cols-2 gap-2 mt-4`}>
        {previews.map((src, i) => (
          <Image
            width={100}
            height={100}
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
