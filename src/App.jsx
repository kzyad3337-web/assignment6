
import { useEffect, useReducer } from 'react'
import './App.css'
import { fetchPosts } from './api/postsApi'
import { initialState, postsReducer } from './reducer/PostsReducer' 
import PostList from './components/PostList'
function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState)

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
    <PostList posts={state.posts} />
  </>
)}
    </main>
  )
}

export default App
