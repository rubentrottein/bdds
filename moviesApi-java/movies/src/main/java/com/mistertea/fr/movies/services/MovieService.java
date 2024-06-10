package com.mistertea.fr.movies.services;

import com.mistertea.fr.movies.models.Movie;
import com.mistertea.fr.movies.repository.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    public List<Movie> getAllMovies(){
        return  movieRepository.findAll();
    }

    public void addMovie(Movie m1) {
        movieRepository.save(m1);
    }

    public Movie getMovieById(String id) {
        //ObjectId objId = new ObjectId(id);
        return movieRepository.findById(id).get();
    }
}
