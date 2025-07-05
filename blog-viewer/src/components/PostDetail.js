export default function PostDetail({ post }) {
  if (!post) return <p>Select a post to see details.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
