
import { useEffect, useReducer, useState } from 'react'

import './App.css'
import { fetchPosts } from './api/postsApi'
import { initialState, postsReducer } from './reducer/PostsReducer' 
import PostList from './components/PostList'
import FilterForm from './components/FilterForm'
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [state, dispatch] = useReducer(postsReducer, initialState)

const filteredPosts = state.posts.filter((post) =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
)

  useEffect(() => {
    async function loadPosts() {
      dispatch({ type: 'FETCH_START' })

      try {
        const posts = await fetchPosts()
        dispatch({ type: 'FETCH_SUCCESS', payload: posts })
      } catch (error) {
        dispatch({
          type: 'FETCH_ERROR',
          payload: error.message,
        })
      }
    }

    loadPosts()
  }, [])

return (
  <main>
    <h1>Post Dashboard</h1>

    {state.loading && <p>Loading posts...</p>}

    {state.error && <p role="alert">{state.error}</p>}

    {!state.loading && !state.error && (
      <>
        <p>Posts loaded: {state.posts.length}</p>

        <FilterForm
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <p>Matching posts: {filteredPosts.length}</p>


     {filteredPosts.length > 0 ? (
      <PostList posts={filteredPosts} />
    ) : (
    <p>No posts found.</p>
   )}
      </>
    )}
  </main>
)
}

export default App
