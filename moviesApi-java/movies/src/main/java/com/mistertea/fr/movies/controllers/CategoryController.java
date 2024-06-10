package com.mistertea.fr.movies.controllers;

import com.mistertea.fr.movies.models.Category;
import com.mistertea.fr.movies.models.Movie;
import com.mistertea.fr.movies.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryService.getAll();
    }
    @PostMapping("/category/new")
    public void addMovie(@RequestBody Category category) {
        Category newCategory = new Category();
        newCategory.setName(category.getName());
        categoryService.addCategory(newCategory);
    }
}
