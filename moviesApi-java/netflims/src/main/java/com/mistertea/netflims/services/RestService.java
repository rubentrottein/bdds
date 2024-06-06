package com.mistertea.netflims.services;

import com.mistertea.netflims.models.Movie;
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

}
