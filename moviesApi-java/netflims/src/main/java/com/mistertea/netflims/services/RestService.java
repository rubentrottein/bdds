package com.mistertea.netflims.services;

import com.mistertea.netflims.models.Category;
import com.mistertea.netflims.models.Movie;
import com.mistertea.netflims.models.User;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;



@Service
public class RestService {

    RestClient restClient;

    RestService(RestClient.Builder restClientBuilder) {
        this.restClient = restClientBuilder.baseUrl("http://localhost:8080/api").build();
    }

    public Movie[] movieRestCall(String name) {
        return this.restClient.get().uri("/{name}", name).retrieve().body(Movie[].class);
    }

    public Category[] categoryRestCall(String name) {
        return this.restClient.get().uri("/{name}", name).retrieve().body(Category[].class);
    }

    public void movieRestPost(String s) {
    }

    public User[] userRestCall(String name) {
        return this.restClient.get().uri("/{name}", name).retrieve().body(User[].class);

    }

    public Movie movieRestCallById(String id) {
        return restClient.get().uri("/movie/get/{id}", id).retrieve().body(Movie.class);
    }

    public Category[] categoryRestPost(Category category) {
        return this.restClient.get().uri("/category/new").retrieve().body(Category[].class);
    }
}