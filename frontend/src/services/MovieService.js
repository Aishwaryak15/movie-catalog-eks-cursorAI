import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/movies';

class MovieService {
  async getAllMovies() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  }

  async getMovieById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching movie with id ${id}:`, error);
      throw error;
    }
  }

  async createMovie(movie) {
    try {
      const response = await axios.post(API_BASE_URL, movie);
      return response.data;
    } catch (error) {
      console.error('Error creating movie:', error);
      throw error;
    }
  }

  async updateMovie(id, movie) {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, movie);
      return response.data;
    } catch (error) {
      console.error(`Error updating movie with id ${id}:`, error);
      throw error;
    }
  }

  async deleteMovie(id) {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting movie with id ${id}:`, error);
      throw error;
    }
  }
}

export default new MovieService();
