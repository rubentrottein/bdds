package com.mistertea.fr.movies.controllers;

import com.mistertea.fr.movies.models.Movie;
import com.mistertea.fr.movies.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MovieController {
    @Autowired
    MovieService movieService;

    @GetMapping("/movies")
    public List<Movie> getMovies(){
        return movieService.getAllMovies();
    }

    @PostMapping("/movies/new")
    public void addMovie(@RequestBody Movie movie) {
        Movie newMovie = new Movie();
        newMovie.setDescription(movie.getDescription());
        newMovie.setName(movie.getName());
        newMovie.setImage(movie.getImage());
        newMovie.setId(movie.getId());
        newMovie.setCategory(movie.getCategory());
        movieService.addMovie(newMovie);
    }
}