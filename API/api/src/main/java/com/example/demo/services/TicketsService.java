package com.example.demo.services;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Evento;
import com.example.demo.entities.Lugares;
import com.example.demo.entities.Tickets;
import com.example.demo.entities.User;


public interface TicketsService {
	
	Tickets traerTicket(UUID code);
	void crearTicket(User user, Lugares lugar, Evento evento,Date fecha,Integer cantidadTickets);
	List<Tickets> getMyTickets(User user);
	void cambiarEstado(Tickets ticket);
}
