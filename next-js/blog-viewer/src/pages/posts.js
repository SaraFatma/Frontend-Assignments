import PostList from '../components/PostList'

export default function PostsPage({ posts }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
