package com.moviecatalog.repository;

import com.moviecatalog.model.Movie;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
class MovieRepositoryTest {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void saveAndFindAll_returnsSavedMovie() {
        Movie movie = new Movie(null, "Repo Test", "Desc", 9.0, null, "Thriller", true, null, null);
        movie = movieRepository.save(movie);
        entityManager.flush();
        entityManager.clear();

        List<Movie> result = movieRepository.findAll();

        assertThat(result).hasSizeGreaterThanOrEqualTo(1);
        assertThat(result.stream().anyMatch(m -> "Repo Test".equals(m.getName()))).isTrue();
    }
}
