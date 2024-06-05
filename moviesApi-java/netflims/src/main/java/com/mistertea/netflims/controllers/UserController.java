package com.mistertea.netflims.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

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
}
