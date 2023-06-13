package com.example.demo.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.services.UserService;
@Service
public class UserImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void login() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void Signin() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public User getUsers(String identifier) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getUserByUsername(String username) {
		return userRepository.findByUsuarioOrEmail(username, username);
	}

	@Override
	public User login(String usernameOrEmail, String password) {
		 User user = userRepository.findByUsuarioOrEmail(usernameOrEmail, usernameOrEmail);
			if (user != null && user.getPassword().equals(password)) {
				return user;
			}
			return null; // El inicio de sesión falló
	}

	@Override
	public User register(User user) {
		 return userRepository.save(user);
	}

}
