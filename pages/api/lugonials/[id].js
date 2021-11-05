import { supabase } from '../../../utils/supabaseClient';

export default async function lugonial(req, res) {
  if(req.method === 'GET') {
    const { id } = req.query;

    try {
      let { data, error, status } = await supabase
      .from("lugonials")
      .select("*")
      .eq("id", id)
      .single();
  
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'Lugonial not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
  } else {
    // create lugonial
    const { name, description, image, external_url } = req.body;
    console.log(req.body);
    
    try {
      if (!name || !description || !image) {
        throw new Error('Missing required fields');
      }
      let { error } = await supabase.from("lugonials").insert({
        name,
        description,
        image,
        external_url
      }, {
        returning: "minimal",
      });
  
      if (error) {
        throw error
      }
      res.status(201).json({ message: 'Lugonial created' });
    } catch (error) {
      res.status(500).json({ error: error.message });      
    }
  }
}