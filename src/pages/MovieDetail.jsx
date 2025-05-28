
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const { saveReview, reviews, addToWatchlist, addToFavorites } = useContext(AppContext);

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=846f3299`).then((res) => setMovie(res.data));
  }, [id]);

  useEffect(() => {
    if (reviews[id]) {
      setRating(reviews[id].rating);
      setReview(reviews[id].review);
    }
  }, [id, reviews]);

  const handleSave = () => {
    if (rating > 0) {
      saveReview(id, rating, review);
      toast.success('Review saved!');
    } else {
      toast.error('Please select a rating');
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '200px' }} />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>

      <button onClick={() => addToWatchlist(movie)}>➕ Add to Watchlist</button>{' '}
      <button onClick={() => addToFavorites(movie)}>❤️ Add to Favorites</button>

      <hr />
      <h3>⭐ Rate & Review</h3>
      <div style={{ marginBottom: '10px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ fontSize: '24px', color: star <= rating ? 'gold' : '#ccc', cursor: 'pointer' }}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        rows="4"
        cols="50"
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={handleSave}>💾 Save Review</button>

      {reviews[id] && (
        <div style={{ marginTop: '20px' }}>
          <h4>Your Saved Review:</h4>
          <p>⭐ {reviews[id].rating} Stars</p>
          <p>📝 {reviews[id].review}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
