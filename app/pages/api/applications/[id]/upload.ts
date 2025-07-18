import { supabase } from '@/lib/supabaseClient';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { id } = req.query;

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'File upload failed' });

    const file = files.file;
    const filePath = file.filepath;
    const fileStream = fs.createReadStream(filePath);

    const { data, error } = await supabase.storage
      .from('portfolio-uploads')
      .upload(`${id}/${file.originalFilename}`, fileStream);

    if (error) return res.status(500).json({ error: error.message });

    res.status(200).json({ fileUrl: data?.path });
  });
}
