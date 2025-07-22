import { supabase } from "@/src/lib/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const { applicationData } = req.body;
  console.log("applicationData", applicationData);
  const { data, error } = await supabase
    .from("applications")
    .insert([applicationData]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ data });
}
