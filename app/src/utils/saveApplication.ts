/* eslint-disable @typescript-eslint/no-explicit-any */

import { supabase } from "@/src/lib/supabaseClient";

export async function saveApplication(data: any) {
  const portfolioFiles = data.portfolio || [];

  const uploadedFiles: { name: string; url: string }[] = [];

  for (const file of portfolioFiles) {
    const fileName = `${Date.now()}_${file.name}`;
    const { data: uploadData, error } = await supabase.storage
      .from("portfolios")
      .upload(fileName, file);

    if (error) {
      console.error("Upload failed:", error.message);
      throw new Error("File upload failed");
    }

    const { data: publicUrlData } = supabase.storage
      .from("portfolios")
      .getPublicUrl(fileName);

    uploadedFiles.push({ name: file.name, url: publicUrlData.publicUrl });
  }

  const { error: insertError, data: saved } = await supabase
    .from("applications")
    .insert([
      {
        ...data,
        portfolio: uploadedFiles,
        submitted_at: new Date().toISOString(),
      },
    ])
    .select();

  if (insertError) {
    console.error("Insert error:", insertError.message);
    throw new Error("Failed to save application");
  }

  return saved;
}
