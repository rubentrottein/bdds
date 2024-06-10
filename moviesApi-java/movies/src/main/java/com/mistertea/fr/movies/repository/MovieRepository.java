package com.mistertea.fr.movies.repository;

import com.mistertea.fr.movies.models.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

//@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {
}