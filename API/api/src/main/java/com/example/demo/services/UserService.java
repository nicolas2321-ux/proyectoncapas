package com.example.demo.services;

import com.example.demo.entities.User;

public interface UserService {
	void login();
	void Signin();
	User getUsers(String identifier);
}
