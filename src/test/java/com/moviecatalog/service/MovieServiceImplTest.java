package com.moviecatalog.service;

import com.moviecatalog.model.Movie;
import com.moviecatalog.repository.MovieRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MovieServiceImplTest {

    @Mock
    private MovieRepository movieRepository;

    @InjectMocks
    private MovieServiceImpl movieService;

    @Test
    void getAllMovies_returnsListFromRepository() {
        Movie movie = new Movie(1L, "Test", "Desc", 10.0, null, "Action", true, null, null);
        when(movieRepository.findAll()).thenReturn(List.of(movie));

        List<Movie> result = movieService.getAllMovies();

        assertThat(result).hasSize(1).element(0).satisfies(m -> {
            assertThat(m.getId()).isEqualTo(1L);
            assertThat(m.getName()).isEqualTo("Test");
        });
        verify(movieRepository).findAll();
    }
}
