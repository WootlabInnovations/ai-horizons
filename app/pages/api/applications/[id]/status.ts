/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "@/src/lib/supabaseClient";

export default async function handler(req: any, res: any) {
  const { id } = req.query;
  const { data, error } = await supabase
    .from("applications")
    .select("status")
    .eq("id", id)
    .single();
  if (error) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ status: data.status });
}
