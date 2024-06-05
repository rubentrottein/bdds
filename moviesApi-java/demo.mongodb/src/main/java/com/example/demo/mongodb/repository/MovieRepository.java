package com.example.demo.mongodb.repository;

import com.example.demo.mongodb.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MovieRepository extends MongoRepository<Movie, Integer>{

}
