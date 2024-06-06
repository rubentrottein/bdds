package com.example.demo.mongodb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mongodb.model.Movie;
import com.example.demo.mongodb.repository.MovieRepository;

@RestController
public class MovieController {

	@Autowired
	MovieRepository movieRepository;
	
	@GetMapping("/movies")
	public List<Movie> getMovies() {
		return movieRepository.findAll();
	}
	
	@PostMapping("/movie")
	public void addMovie() {
		Movie m1 = new Movie();
		m1.setId(1111);
		m1.setName("trucname");
		movieRepository.save(m1);
	}
}
