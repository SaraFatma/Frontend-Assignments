export default function handler(req, res) {
  const posts = [
    { id: '1', title: 'First Post', content: 'This is the first blog post.' },
    { id: '2', title: 'Second Post', content: 'Here is the second post.' },
    { id: '3', title: 'Third Post', content: 'More content in the third post.' },
  ]

  res.status(200).json(posts)
}
