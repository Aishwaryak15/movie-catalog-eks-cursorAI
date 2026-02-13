import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, onEdit, onDelete }) {
  const defaultPoster = 'https://via.placeholder.com/300x200/667eea/ffffff?text=Movie';

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img 
          src={movie.imageUrl || defaultPoster} 
          alt={movie.name}
          onError={(e) => { e.target.src = defaultPoster; }}
        />
        {!movie.inStock && <div className="out-of-stock-badge">Out of Stock</div>}
      </div>
      
      <div className="movie-content">
        <div className="movie-header">
          <h3>{movie.name}</h3>
          <span className="movie-category">{movie.genre}</span>
        </div>
        
        <p className="movie-description">{movie.description}</p>
        
        <div className="movie-footer">
          <div className="movie-price">${movie.ticketPrice.toFixed(2)}</div>
          
          <div className="movie-actions">
            <button 
              className="btn-edit" 
              onClick={() => onEdit(movie)}
              title="Edit movie"
            >
              ✏️
            </button>
            <button 
              className="btn-delete" 
              onClick={() => onDelete(movie.id)}
              title="Delete movie"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
