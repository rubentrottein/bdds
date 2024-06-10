package com.mistertea.fr.movies.controllers;

import com.mistertea.fr.movies.models.User;
import com.mistertea.fr.movies.services.UserService;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    public UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getUsers();
    }
    @GetMapping("/users/get")
    public User getUserById(@RequestParam ObjectId id) {
        return userService.findOne(id);
    }

    @PostMapping("/users/new")
    public void addUser(@RequestBody User user) {
        User newUser = new User();
        newUser.setId(user.getId());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPassword(user.getPassword());
        newUser.setEmail(user.getEmail());

        userService.addUser(newUser);
    }

    @PutMapping("/users/edit")
    public void updateUser(@RequestBody User user, ObjectId id) {
        userService.update(user, id);
    }

    @DeleteMapping("/users/delete")
    public void deleteUser(@RequestParam ObjectId id) {
        userService.removeUser(userService.findOne(id));
    }
}
