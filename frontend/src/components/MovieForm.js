import React, { useState, useEffect } from 'react';
import './MovieForm.css';

function MovieForm({ onSubmit, editingMovie, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ticketPrice: '',
    imageUrl: '',
    genre: 'Action',
    inStock: true
  });

  useEffect(() => {
    if (editingMovie) {
      setFormData({
        name: editingMovie.name || '',
        description: editingMovie.description || '',
        ticketPrice: editingMovie.ticketPrice ?? '',
        imageUrl: editingMovie.imageUrl || '',
        genre: editingMovie.genre || 'Action',
        inStock: editingMovie.inStock !== undefined ? editingMovie.inStock : true
      });
    }
  }, [editingMovie]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      ...formData,
      ticketPrice: parseFloat(formData.ticketPrice)
    };
    onSubmit(movieData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      ticketPrice: '',
      imageUrl: '',
      genre: 'Action',
      inStock: true
    });
  };

  const handleCancelClick = () => {
    resetForm();
    onCancel();
  };

  return (
    <div className="pastry-form-container">
      <h2>{editingMovie ? '✏️ Edit Movie' : '➕ Add New Movie'}</h2>
      <form onSubmit={handleSubmit} className="pastry-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="e.g., Inception"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Describe the movie..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="ticketPrice">Ticket Price ($) *</label>
          <input
            type="number"
            id="ticketPrice"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Poster URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/poster.jpg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          >
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="inStock"
              checked={formData.inStock}
              onChange={handleChange}
            />
            <span>In Stock</span>
          </label>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {editingMovie ? 'Update Movie' : 'Add Movie'}
          </button>
          {editingMovie && (
            <button type="button" className="btn btn-secondary" onClick={handleCancelClick}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default MovieForm;
