package com.example.demo.services;

import java.util.UUID;

import com.example.demo.entities.Tickets;

public interface TicketsService {
	
	Tickets traerTicket(UUID code);
}
