package com.skinshine.firstproject.controller;

import com.skinshine.firstproject.model.User;
import com.skinshine.firstproject.service.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserSevice userSevice;

    @GetMapping("/users/getAll")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userSevice.getAllUser());
    }

    @PostMapping("/login")
    public ResponseEntity<User> checkUser(@RequestBody User user) {
        return userSevice.checkUser(user);
    }

}
