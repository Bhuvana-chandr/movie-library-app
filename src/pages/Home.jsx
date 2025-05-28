
import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to Movie Library 🎬</h2>
      <SearchBar />
      <MovieGrid />
    </div>
  );
};

export default Home;