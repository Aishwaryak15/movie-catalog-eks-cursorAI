import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/pastries';

class MovieService {
  // Get all movies
  async getAllMovies() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  }

  // Get movie by ID
  async getMovieById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching movie with id ${id}:`, error);
      throw error;
    }
  }

  // Create a new movie
  async createMovie(movie) {
    try {
      const response = await axios.post(API_BASE_URL, movie);
      return response.data;
    } catch (error) {
      console.error('Error creating movie:', error);
      throw error;
    }
  }

  // Update movie
  async updateMovie(id, movie) {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, movie);
      return response.data;
    } catch (error) {
      console.error(`Error updating movie with id ${id}:`, error);
      throw error;
    }
  }

  // Delete movie
  async deleteMovie(id) {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting movie with id ${id}:`, error);
      throw error;
    }
  }

  // Get movies by genre
  async getMoviesByGenre(genre) {
    try {
      const response = await axios.get(`${API_BASE_URL}/category/${genre}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching movies by genre ${genre}:`, error);
      throw error;
    }
  }

  // Get movies in stock
  async getMoviesInStock() {
    try {
      const response = await axios.get(`${API_BASE_URL}/in-stock`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies in stock:', error);
      throw error;
    }
  }

  // Search movies by name
  async searchMoviesByName(name) {
    try {
      const response = await axios.get(`${API_BASE_URL}/search`, {
        params: { name }
      });
      return response.data;
    } catch (error) {
      console.error(`Error searching movies by name ${name}:`, error);
      throw error;
    }
  }
}

export default new MovieService();
