package com.example.demo.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/UsuariosAsignados")
public class UsuariosAsignadosEventosController {


	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}
}
