package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controllers.dto.DesactivarDTO;
import com.example.demo.controllers.dto.NewUser_Rol;
import com.example.demo.controllers.dto.RolByUSerDTO;
import com.example.demo.entities.Rol;
import com.example.demo.entities.User;
import com.example.demo.entities.User_rol;
import com.example.demo.services.RolService;
import com.example.demo.services.UserService;
import com.example.demo.services.user_rolService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/userRol")
public class UserRolController {

	@Autowired
	private user_rolService userRolService;
	@Autowired
	private UserService userService;
	@Autowired
	private RolService rolService;
	
	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}

	@PostMapping("/saveUserRol")
	public ResponseEntity<?> save(@Valid @RequestBody NewUser_Rol info, BindingResult validations){
		if(validations.hasErrors()) {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error");
		}else {
		User user = userService.getUserByUsername(info.getIdentifier());
		Rol rol = rolService.getRolbyRolname(info.getRol());
		
		userRolService.saveRol(user, rol);
		return new ResponseEntity<>(HttpStatus.OK);
		}
	}
	@GetMapping("/getRoles")
		public ResponseEntity<?> findRoles(){
			
			User user2 = userService.findUserAuthenticated();
			RolByUSerDTO rolByUSerDTO =  userRolService.getRolbyUser(user2);
			return new ResponseEntity<>(rolByUSerDTO, HttpStatus.OK);
			
		}


	@PostMapping("/desactivarRol")
	public ResponseEntity<?> desactivarRol(@Valid @RequestBody DesactivarDTO info, BindingResult validations){
		
		userRolService.cambiarEstado(info.getCode());
		return new ResponseEntity<>( HttpStatus.OK);
		
	}
}
