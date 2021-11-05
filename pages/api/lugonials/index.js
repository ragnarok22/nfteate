import { supabase } from "../../../utils/supabaseClient"

export default async function helloAPI(req, res) {
  try {
    let { data, error, status } = await supabase.from("lugonials").select("*")
    
    if (error && status !== 406) {
      throw error
    }
    
    if (data) {
      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}