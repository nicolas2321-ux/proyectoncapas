package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.entities.User;

@Service
public interface UserService {
	void login();
	void Signin();
	User getUsers(String identifier);
}
