package com.example.demo.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Evento;
import com.example.demo.entities.Tickets;
import com.example.demo.entities.User;

public interface TicketRepository extends JpaRepository<Tickets, UUID> {
	List<Tickets> findByIdCliente(User user);
    Tickets findByIdTicket(UUID ticket);
	
}
