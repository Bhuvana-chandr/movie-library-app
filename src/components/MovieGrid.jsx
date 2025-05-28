
import  { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=batman&apikey=846f3299`)
      .then((res) => {
        setMovies(res.data.Search || []);
      });
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
