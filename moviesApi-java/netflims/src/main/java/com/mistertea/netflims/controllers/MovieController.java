package com.mistertea.netflims.controllers;

import com.mistertea.netflims.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MovieController {
    @Autowired
    MovieService movieService;
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("movie", "test");
        return "index";
    }
    @GetMapping("/videos")
    public String videos(Model model) {
        model.addAttribute("videos", movieService.getMovies());
        return "index";
    }
}
