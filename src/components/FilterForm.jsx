
function FilterForm({ searchTerm, onSearchChange }) {
  return (
    <form
      className="filter-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <label htmlFor="post-search">Search posts</label>

      <input
        id="post-search"
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by title..."
      />
    </form>
  )
}

export default FilterForm
