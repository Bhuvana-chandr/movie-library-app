

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const MovieCard = ({ movie, type }) => {
  const navigate = useNavigate();
  const {
    addToWatchlist,
    addToFavorites,
    removeFromWatchlist,
    removeFromFavorites,
    reviews,
  } = useContext(AppContext);

  const starRating = reviews[movie.imdbID]?.rating || 0;

  const handleRemove = () => {
    if (type === 'watchlist') removeFromWatchlist(movie.imdbID);
    if (type === 'favorites') removeFromFavorites(movie.imdbID);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: '100%', cursor: 'pointer' }}
        onClick={() => navigate(`/movie/${movie.imdbID}`)}
      />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>

      {/* Show star rating */}
      <div>
        {[1, 2, 3, 4, 5].map((s) => (
          <span
            key={s}
            style={{ color: s <= starRating ? 'gold' : '#ccc' }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Show add/remove buttons based on context */}
      {type === 'watchlist' || type === 'favorites' ? (
        <button onClick={handleRemove}>🗑 Remove</button>
      ) : (
        <>
          <button onClick={() => addToWatchlist(movie)}>Watchlist</button>{' '}
          <button onClick={() => addToFavorites(movie)}>Favorite</button>
        </>
      )}
    </div>
  );
};

export default MovieCard;
