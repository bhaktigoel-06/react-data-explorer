const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search character..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
};

export default SearchBar;