package com.example.demo.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Tokens;
import com.example.demo.entities.User;
import com.example.demo.repository.TokenRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.services.UserService;
import com.example.demo.utils.JWTtools;

import jakarta.transaction.Transactional;


@Service
public class UserImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private TokenRepository tokenRepository;
	@Autowired
	private JWTtools jwtTools;
	


	@Override
	public User getUsers(String identifier) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getUserByUsername(String username) {
		return userRepository.findByUsernameOrEmail(username, username);
	}

	@Override
	public User login(String usernameOrEmail, String password) {
		 User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail);
			if (user != null && user.getPassword().equals(password)) {
				return user;
			}
			return null; // El inicio de sesión falló
	}

	@Override
	public User register(User user) {
		 return userRepository.save(user);
	}
	

	@Override
		@Transactional(rollbackOn = Exception.class)
		public Tokens registerToken(User user) throws Exception {
			cleanTokens(user);
			
			String tokenString = jwtTools.generateToken(user);
			Tokens token = new Tokens(tokenString, user);
			
			tokenRepository.save(token);
			
			return token;
		}



		@Override
		public Boolean isTokenValid(User user, String token) {
			try {
				cleanTokens(user);
				List<Tokens> tokens = tokenRepository.findByUserAndActive(user, true);
				
				tokens.stream()
					.filter(tk -> tk.getContent().equals(token))
					.findAny()
					.orElseThrow(() -> new Exception());
				
				return true;
			} catch (Exception e) {
				return false;
			}		
		}



		@Override
		@Transactional(rollbackOn = Exception.class)
		public void cleanTokens(User user) throws Exception {
			List<Tokens> tokens = tokenRepository.findByUserAndActive(user, true);
			
			tokens.forEach(token -> {
				if(!jwtTools.verifyToken(token.getContent())) {
					token.setActive(false);
					tokenRepository.save(token);
				}
			});
			
		}

		@Override
		public User findUserAuthenticated() {
			String username = SecurityContextHolder
				.getContext()
				.getAuthentication()
				.getName();
			
			return userRepository.findByUsernameOrEmail(username, username);
		}
}
