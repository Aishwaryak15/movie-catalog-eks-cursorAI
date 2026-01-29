import React from 'react';
import MovieCard from './MovieCard';
import './PastryList.css';

function MovieList({ movies, onEdit, onDelete }) {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <h2>No movies yet!</h2>
        <p>Add your first movie to get started.</p>
      </div>
    );
  }

  return (
    <div className="pastry-list-container">
      <h2>🍿 Available Movies ({movies.length})</h2>
      <div className="pastry-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
