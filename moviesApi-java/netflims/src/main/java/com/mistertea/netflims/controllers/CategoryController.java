package com.mistertea.netflims.controllers;

import com.mistertea.netflims.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("/categories")
    public String categories(Model model) {
        model.addAttribute("categories", categoryService.getCategories());
        return "index";
    }
}
