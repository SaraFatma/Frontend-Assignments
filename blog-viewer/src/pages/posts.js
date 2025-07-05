import { useState } from 'react';
import PostList from '@/components/PostList';
import PostDetail from '@/components/PostDetail';

export default function PostsPage({ posts }) {
  const [selectedId, setSelectedId] = useState(null);
  const selectedPost = posts.find((p) => p.id === selectedId) || null;

  return (
    <main>
      <h1>Blog Posts</h1>
      <PostList posts={posts} onSelect={setSelectedId} />
      <PostDetail post={selectedPost} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}
