package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Tokens;
import com.example.demo.entities.User;

public interface UserService {

	User getUsers(String identifier);
	User getUserByUsername(String username);
	User login(String usernameOrEmail);
	User register(User user);

	Tokens registerToken(User user) throws Exception;
	Boolean isTokenValid(User user, String token);
	void cleanTokens(User user) throws Exception;
	User findUserAuthenticated();
}
