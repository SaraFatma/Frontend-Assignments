import { useState } from 'react'
import PostDetail from './PostDetail'

export default function PostList({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id}>
            <button
              onClick={() => setSelectedPost(post)}
              style={{ margin: '10px 0', cursor: 'pointer' }}
            >
              {post.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedPost && (
        <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  )
}
