package com.moviecatalog.service;

import com.moviecatalog.model.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieService {

    Movie createMovie(Movie movie);

    List<Movie> getAllMovies();

    Optional<Movie> getMovieById(Long id);

    Movie updateMovie(Long id, Movie movie);

    void deleteMovie(Long id);
}
