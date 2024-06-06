package com.mistertea.fr.movies.repository;

import com.mistertea.fr.movies.models.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository <User, ObjectId>{
}
