package com.mistertea.fr.movies.controllers;

import com.mistertea.fr.movies.models.Movie;
import com.mistertea.fr.movies.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieController {
    @Autowired
    MovieService movieService;

    @GetMapping("/")
    public List<Movie> getMovies(){
        return movieService.getAllMovies();
    }

    @PostMapping("/new")
    public void addMovie() {
        Movie m1 = new Movie();
        m1.setDescription("S");
        //m1.setCategory(getCategoryByName("Science-Fiction"));
        m1.setName("Tron");
        movieService.addMovie(m1);
    }
}