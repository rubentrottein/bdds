package com.mistertea.netflims.services;

import com.mistertea.netflims.models.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    RestService restService;

    public Category[] getCategories() {
        return restService.categoryRestCall("categories");
    }
    public Category[] addCategory(Category category) {
        return restService.categoryRestPost(category);
    }
}
