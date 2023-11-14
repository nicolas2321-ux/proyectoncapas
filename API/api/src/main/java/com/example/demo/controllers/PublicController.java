package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.EventoService;

@RestController
@RequestMapping("/public")
public class PublicController {
	@Autowired
	private EventoService eventoservice;
	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}

}
