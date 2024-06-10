package com.mistertea.netflims.services;

import com.mistertea.netflims.models.Category;
import com.mistertea.netflims.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    RestService restService;

    public User[] getUsers() {
        return restService.userRestCall("users");
    }
}
