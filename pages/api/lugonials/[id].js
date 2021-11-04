import lugonials from '../lugonials.json'

export default function helloAPI(req, res) {
  const { id } = req.query;
  const lugonial = lugonials.find(lugonial => lugonial.id === id);

  res.status(200).json({ ...lugonial });
}