import React, { useState, useEffect } from 'react';
import './App.css';
import MovieService from './services/MovieService';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';

function App() {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const data = await MovieService.getAllMovies();
      setMovies(data);
      setError(null);
    } catch (err) {
      setError('Failed to load movies. Please make sure the backend server is running.');
      console.error('Error loading movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOrUpdate = async (movie) => {
    try {
      if (editingMovie) {
        await MovieService.updateMovie(editingMovie.id, movie);
      } else {
        await MovieService.createMovie(movie);
      }
      loadMovies();
      setEditingMovie(null);
    } catch (err) {
      setError('Failed to save movie. Please try again.');
      console.error('Error saving movie:', err);
    }
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await MovieService.deleteMovie(id);
        loadMovies();
      } catch (err) {
        setError('Failed to delete movie. Please try again.');
        console.error('Error deleting movie:', err);
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingMovie(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎬 Online Movie Catalog</h1>
        <p>Manage your movies</p>
      </header>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>✕</button>
        </div>
      )}

      <div className="app-content">
        <div className="form-section">
          <MovieForm
            onSubmit={handleCreateOrUpdate}
            editingMovie={editingMovie}
            onCancel={handleCancelEdit}
          />
        </div>

        <div className="list-section">
          {loading ? (
            <div className="loading">Loading movies...</div>
          ) : (
            <MovieList
              movies={movies}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
