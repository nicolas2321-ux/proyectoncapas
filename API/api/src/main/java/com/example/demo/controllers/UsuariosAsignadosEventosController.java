package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.Usuarios_asignados_eventosService;

@RestController
@RequestMapping("/UsuariosAsignados")
public class UsuariosAsignadosEventosController {


	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}
}
