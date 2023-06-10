package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.TicketsService;

@RestController
@RequestMapping("/ticket")
public class TicketController {
	@Autowired
	private TicketsService ticketService;
	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}
}
