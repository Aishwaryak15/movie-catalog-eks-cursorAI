package com.moviecatalog.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.moviecatalog.model.Movie;
import com.moviecatalog.service.MovieService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(MovieController.class)
class MovieControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private MovieService movieService;

    @Test
    void getAllMovies_returnsOkAndList() throws Exception {
        Movie movie = new Movie(1L, "Test", "Desc", 10.0, null, "Action", true, null, null);
        when(movieService.getAllMovies()).thenReturn(List.of(movie));

        mockMvc.perform(get("/api/movies"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Test"))
                .andExpect(jsonPath("$[0].id").value(1));
    }

    @Test
    void getMovieById_whenFound_returnsOkAndMovie() throws Exception {
        Movie movie = new Movie(1L, "Test", "Desc", 10.0, null, "Action", true, null, null);
        when(movieService.getMovieById(1L)).thenReturn(Optional.of(movie));

        mockMvc.perform(get("/api/movies/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Test"))
                .andExpect(jsonPath("$.id").value(1));
    }

    @Test
    void createMovie_returnsCreatedAndMovie() throws Exception {
        Movie request = new Movie(null, "New", "Desc", 12.0, null, "Drama", true, null, null);
        Movie saved = new Movie(1L, "New", "Desc", 12.0, null, "Drama", true, null, null);
        when(movieService.createMovie(any(Movie.class))).thenReturn(saved);

        mockMvc.perform(post("/api/movies")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("New"));
    }
}
