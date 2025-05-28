
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        style={{ padding: '10px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Search</button>
    </form>
  );
};

export default SearchBar;
