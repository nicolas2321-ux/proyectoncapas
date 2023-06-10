package com.example.demo.services;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Tickets;

@Service
public interface TicketsService {
	
	Tickets traerTicket(UUID code);
}
