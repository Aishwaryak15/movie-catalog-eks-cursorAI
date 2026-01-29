import React from 'react';
import './PastryCard.css';

function MovieCard({ movie, onEdit, onDelete }) {
  const defaultPoster = 'https://via.placeholder.com/300x200/667eea/ffffff?text=Movie';

  return (
    <div className="pastry-card">
      <div className="pastry-image">
        <img 
          src={movie.imageUrl || defaultPoster} 
          alt={movie.name}
          onError={(e) => { e.target.src = defaultPoster; }}
        />
        {!movie.inStock && <div className="out-of-stock-badge">Out of Stock</div>}
      </div>
      
      <div className="pastry-content">
        <div className="pastry-header">
          <h3>{movie.name}</h3>
          <span className="pastry-category">{movie.category}</span>
        </div>
        
        <p className="pastry-description">{movie.description}</p>
        
        <div className="pastry-footer">
          <div className="pastry-price">${movie.price.toFixed(2)}</div>
          
          <div className="pastry-actions">
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
