package com.example.demo.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controllers.dto.UserLoginDTO;
import com.example.demo.controllers.dto.UserRegistrationDto;
import com.example.demo.entities.Tokens;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}

	
	@PostMapping("/register")
	public ResponseEntity<?> login(@Valid @RequestBody UserRegistrationDto registrationDto, BindingResult bindingResult){
		if(bindingResult.hasErrors()) {
			System.out.println(registrationDto.getUsername());
			return ResponseEntity.ok("Error al introducir las credenciales");
		}else {
		String username = registrationDto.getUsername();
		String email = registrationDto.getEmail();
		String password = registrationDto.getPassword();
		String name = registrationDto.getNombre();
		Date fecha = new Date();

		
		  User usernameVer = userService.getUserByUsername(username);
		  User emailver = userService.getUserByUsername(email);
		  if(usernameVer != null || emailver != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Credenciales ya tomadas");	  	
		  }else {

		User newUser = new User(username, email, password, name,1, fecha );
		userService.register(newUser);
		
		return ResponseEntity.ok("Usuario registrado exitosamente");
	}
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login( @Valid @RequestBody UserLoginDTO info, BindingResult validations){
		String usernameOrEmail = info.getIdentifier();
		System.out.print(usernameOrEmail);
		String password = info.getPassword();
		User user = userService.login(usernameOrEmail, password);
		if(user == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontro usuario con estas credenciales");
		}else {
		User user2 = userService.findUserAuthenticated();
		
		try {
			Tokens token = userService.registerToken(user);
//				return new ResponseEntity<>(new tokensDTO(token), HttpStatus.OK);
			return new ResponseEntity<>(token, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		}
	}
}
