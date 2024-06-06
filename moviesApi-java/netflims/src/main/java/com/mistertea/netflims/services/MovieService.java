package com.mistertea.netflims.services;

import com.mistertea.netflims.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MovieService {
    @Autowired
    RestService restService;

    public Movie[] getMovies() {
        /** Liste temporaire *
        List<Movie> movies = new ArrayList<Movie>();
        movies.add(new Movie("Total Recall", "totalRecall.jpg", "Tu te casses sur Mars"));
        movies.add(new Movie("Le 8ème Jour", "8emeJour.jpg", "Vive les chocolats"));

         /*TODO effacer la liste après le lien avec Mongo*/

        return restService.movieRestCall("movies");

        //return movies;
    }
}
