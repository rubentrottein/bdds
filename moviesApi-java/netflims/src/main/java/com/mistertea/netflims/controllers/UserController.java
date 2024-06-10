package com.mistertea.netflims.controllers;

import com.mistertea.netflims.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("message", "Bienvenue, Vous êtes connecté");
        return "index";
    }
    @GetMapping("/logout")
    public String logout(Model model) {
        model.addAttribute("message", "Déconnexion");
        return "index";
    }
    @GetMapping("/users")
    public String users(Model model) {
        model.addAttribute("users", userService.getUsers());
        return "dashboard";
    }
}
