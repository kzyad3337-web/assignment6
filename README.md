# Post Dashboard

## Project Overview

Post Dashboard is a React application that fetches posts from the JSONPlaceholder API and displays them in a searchable list.

## File Organization

- `src/api/postsApi.js` — Fetches posts from the API and handles unsuccessful HTTP responses.
- `src/components/Post.jsx` — Displays an individual post.
- `src/components/PostList.jsx` — Renders the list of posts.
- `src/components/FilterForm.jsx` — Provides the controlled search input.
- `src/reducer/postsReducer.js` — Manages posts, loading, and error state using `useReducer`.
- `src/App.jsx` — Coordinates data fetching, application state, searching, and conditional rendering.
- `src/main.jsx` — Entry point for the React application.

## React Concepts Used

- Functional components
- `useState`, `useEffect`, and `useReducer`
- Fetch API and asynchronous error handling
- Controlled inputs
- Immutable state updates
- Conditional rendering
- Derived state for filtering posts

## Challenges Faced

During development, I fixed an incorrect import path and a `useState` import error that caused the page to appear blank. I also checked the production build and configured Git commits to track development progress.

## Running the Project

1. Install dependencies using `npm install`.
2. Start the development server using `npm run dev`.
3. Open the local URL provided by Vite.

## API

Posts are retrieved from https://jsonplaceholder.typicode.com/posts