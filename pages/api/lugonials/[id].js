export default function helloAPI(req, res) {
  const { id } = req.query;
  const lugonial = {
    name: 'Reinier Hernández',
    description: 'Reinier is a software developer and a web developer. He is a passionate and creative person. He is a lover of technology and technology is his passion.',
    image: 'https://avatars3.githubusercontent.com/u/12098981?s=460&v=4',
    external_url: null,
    attributes: [
      {
        trait_type: 'Número',
        value: id
      }
    ]
  }

  res.status(200).json({ ...lugonial, id });
}