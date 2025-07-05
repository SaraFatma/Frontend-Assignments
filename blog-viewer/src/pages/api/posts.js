export default function handler(req, res) {
  const posts = [
    {
      id: '1',
      title: 'First Blog Post',
      content: 'This is the full content of the first blog post.',
    },
    {
      id: '2',
      title: 'Second Blog Post',
      content: 'This is the full content of the second blog post.',
    },
  ];

  res.status(200).json(posts);
}
