// components/MovieComponent.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
import "../styles/MovieComponent.css"

const MovieComponent: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies.data);
  const movieStatus = useSelector((state: any) => state.movies.status);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movie-container">
      <h2>Movie Data</h2>
      {movieStatus === 'loading' && <p>Loading...</p>}
      {movieStatus === 'failed' && <p>Failed to fetch movie data</p>}
      {movieStatus === 'succeeded' && (
        <div className="movie-list">
          {movies.map((movie: any) => (
            <div key={movie.id} className="movie-card">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-release-date">Release Date: {movie.release_date}</p>
              <p className="movie-overview">{movie.overview}</p>
              {/* Add more movie details */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieComponent;
