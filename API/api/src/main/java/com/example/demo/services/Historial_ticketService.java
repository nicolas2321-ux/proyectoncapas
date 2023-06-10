package com.example.demo.services;

import java.util.List;
import java.util.UUID;

import com.example.demo.entities.Historial_ticket;

public interface Historial_ticketService {
	List<Historial_ticket> get_historial(UUID code);
}
