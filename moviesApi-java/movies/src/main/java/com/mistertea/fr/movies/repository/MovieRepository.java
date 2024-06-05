package com.mistertea.fr.movies.repository;

import com.mistertea.fr.movies.models.Category;
import com.mistertea.fr.movies.models.Movie;
import com.mistertea.fr.movies.services.CategoryService;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends MongoRepository<Movie, Object> {
    /*
    private CategoryService categoryService;
    public Category categoryLink(Movie movie){
        for(Category category : categoryService.getAll()){
            if(movie.getCategory() == category){
                return category;
            }
        }
    }
    */
}