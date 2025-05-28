
import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import MovieCard from '../components/MovieCard';

const Dashboard = () => {
  const { watchlist, favorites, reviews } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('watchlist');

  
  const getRatedMovies = () => {
  const rated = [];

  for (let id in reviews) {
    // check if movie is in watchlist or favorites
    const movie = [...watchlist, ...favorites].find(
      (m) => m.imdbID === id
    );

    if (movie) {
      rated.push(movie); // ✅ add only if found
    }
  }

  return rated;
};
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Dashboard</h2>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setActiveTab('watchlist')}>Watchlist</button>{' '}
        <button onClick={() => setActiveTab('favorites')}>Favorites</button>{' '}
        <button onClick={() => setActiveTab('rated')}>Rated</button>
      </div>
    
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {activeTab === 'watchlist' && (
          watchlist.length ? watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
          )) : <p>No movies in Watchlist.</p>
        )}

        {activeTab === 'favorites' && (
          favorites.length ? favorites.map((movie) => (
           <MovieCard key={movie.imdbID} movie={movie} type="favorites" />
          )) : <p>No movies in Favorites.</p>
        )}

        {activeTab === 'rated' && (
          getRatedMovies().length ? getRatedMovies().map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          )) : <p>No Rated movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
/*

❌ Just writing watchlist may always return truthy, even if it's an empty array ([] is truthy)

*/