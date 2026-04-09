package com.hotel_management.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel_management.model.User;
import com.hotel_management.repository.UserRepository;


@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User user) {
        return repo.save(user);
    }

    public String login(String email, String password) {
        User user = repo.findByEmail(email);

        if(user == null) return "User not found";
        if(!user.getPassword().equals(password)) return "Wrong Password";

        return "Login Successful";
    }
}