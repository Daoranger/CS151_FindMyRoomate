package com.example.backend.repository;

import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // methods to perform CRUD operations on the database
    User findByEmail(String email);
    User findByEmailAndPassword(String email, String password);
    User findByUserName(String userName);
}


