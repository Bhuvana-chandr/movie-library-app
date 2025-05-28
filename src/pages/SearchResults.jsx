
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    const res = await axios.get(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=846f3299`);
    const results = res.data.Search || [];
    setMovies((prev) => [...prev, ...results]);
    if (results.length < 10) setHasMore(false);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    setMovies([]);
    setPage(1);/*If you didn’t set page=1, you might skip some results.*/
    setHasMore(true);
    loadMore();
    // eslint-disable-next-line
  }, [query]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results for "{query}"</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
