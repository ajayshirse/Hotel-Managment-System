package com.hotel_management.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel_management.model.User;


public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}