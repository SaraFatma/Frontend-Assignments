export default function PostDetail({ post, onClose }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginTop: '20px' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={onClose} style={{ marginTop: '10px' }}>
        Close
      </button>
    </div>
  )
}
