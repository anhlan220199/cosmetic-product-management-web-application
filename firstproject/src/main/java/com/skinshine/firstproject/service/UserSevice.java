package com.skinshine.firstproject.service;

import com.skinshine.firstproject.model.User;
import com.skinshine.firstproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserSevice {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public ResponseEntity checkUser(User user) {

        User userValidator = userRepository.findByUserName(user.getUserName());

        if (userValidator.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok(user);
        } else {
            return new ResponseEntity(user, HttpStatus.EXPECTATION_FAILED);
        }
    }
}

