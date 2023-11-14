package com.example.demo.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.entities.Tickets;
import com.example.demo.model.entities.User;

public interface TicketRepository extends JpaRepository<Tickets, UUID> {
	List<Tickets> findByIdClienteAndEstado(User user, Integer estado);
    Tickets findByIdTicket(UUID ticket);
	
}
