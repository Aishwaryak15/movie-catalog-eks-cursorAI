import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import MovieService from './services/MovieService';

jest.mock('./services/MovieService', () => ({
  __esModule: true,
  default: {
    getAllMovies: jest.fn(),
    createMovie: jest.fn(),
    updateMovie: jest.fn(),
    getMovieById: jest.fn(),
    deleteMovie: jest.fn(),
  },
}));

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders successfully', async () => {
    MovieService.getAllMovies.mockResolvedValue([]);
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Online Movie Catalog/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Manage your movies/i)).toBeInTheDocument();
  });

  it('movie list loads movies from mocked API', async () => {
    const mockMovies = [
      { id: 1, name: 'Inception', description: 'A mind-bending film', ticketPrice: 10, genre: 'Sci-Fi', inStock: true },
    ];
    MovieService.getAllMovies.mockResolvedValue(mockMovies);
    render(<App />);
    expect(screen.getByText(/Loading movies/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Inception')).toBeInTheDocument();
    });
    expect(MovieService.getAllMovies).toHaveBeenCalledTimes(1);
  });

  it('shows error message when API fails', async () => {
    MovieService.getAllMovies.mockRejectedValue(new Error('Network error'));
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Failed to load movies/i)).toBeInTheDocument();
    });
  });

  it('Add Movie form submits data', async () => {
    MovieService.getAllMovies.mockResolvedValue([]);
    MovieService.createMovie.mockResolvedValue({ id: 1, name: 'New Movie' });
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Add New Movie/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'New Movie' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'A great film' } });
    fireEvent.change(screen.getByLabelText(/ticket price/i), { target: { value: '12.50' } });
    fireEvent.click(screen.getByRole('button', { name: /add movie/i }));

    await waitFor(() => {
      expect(MovieService.createMovie).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'New Movie',
          description: 'A great film',
          ticketPrice: 12.5,
        })
      );
    });
  });
});
