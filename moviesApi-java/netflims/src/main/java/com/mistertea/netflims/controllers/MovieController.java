package com.mistertea.netflims.controllers;

import com.mistertea.netflims.models.Movie;
import com.mistertea.netflims.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class MovieController {
    @Autowired
    MovieService movieService;
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("movie", new Movie());
        return "index";
    }
    @GetMapping("/videos")
    public String videos(Model model) {
        model.addAttribute("videos", movieService.getMovies());
        System.out.println(movieService.getMovies()[0].toString());
        System.out.println(movieService.getMovies()[1].toString());
        return "index";
    }
    @GetMapping("/videos/{id}")
    public String videos(Model model, @PathVariable String id) {
        model.addAttribute("video", movieService.getMovieById(id));
        return "movie";
    }
}
