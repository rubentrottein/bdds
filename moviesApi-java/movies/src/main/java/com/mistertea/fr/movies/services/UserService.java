package com.mistertea.fr.movies.services;

import com.mistertea.fr.movies.models.User;
import com.mistertea.fr.movies.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public void addUser(User newUser) {
        userRepository.save(newUser);
    }

    public void removeUser(User user) {
        userRepository.delete(user);
    }

    public User findOne(ObjectId userId) {
        if(userRepository.findById(userId).isPresent()) {
            return userRepository.findById(userId).get();
        }
        return null;
    }

    public void update(User user, ObjectId userId) {
        if(userRepository.findById(userId).isPresent()) {
            User userToUpdate = userRepository.findById(userId).get();

            if (userToUpdate.getEmail().equals(user.getEmail())) {userToUpdate.setEmail(user.getEmail());}
            if (userToUpdate.getPassword().equals(user.getPassword())) { userToUpdate.setPassword(user.getPassword()); }
            if (userToUpdate.getLastName().equals(user.getLastName())) { userToUpdate.setLastName(user.getLastName()); }
            if (userToUpdate.getFirstName().equals(user.getFirstName())) { userToUpdate.setFirstName(user.getFirstName());}

            userRepository.save(userToUpdate);
        }
    }
}
