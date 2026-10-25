
function Post({ post }) {
  return (
    <article className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small>Post ID: {post.id}</small>
    </article>
  )
}

export default Post
