package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.LugaresService;

@RestController
@RequestMapping("/lugares")
public class LugaresController {
	@Autowired
	private LugaresService lugaresService;
	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}
}
