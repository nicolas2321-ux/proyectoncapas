package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.entities.User;

public interface UserService {
	void login();
	void Signin();
	User getUsers(String identifier);
	User getUserByUsername(String username);
	User login(String usernameOrEmail, String password);
	User register(User user);
}
