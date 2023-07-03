package com.example.demo.services;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Tickets;
import com.example.demo.entities.Traspaso_tickets;


public interface Traspaso_ticketsService {
	List<Traspaso_tickets> get_lista_traspaso(Tickets ticket);
	Traspaso_tickets get_traspaso(Tickets code);
	void save(Traspaso_tickets traspaso);
}
