package com.example.demo.repository;

import java.util.UUID;

import org.springframework.data.repository.ListCrudRepository;

import com.example.demo.entities.Tickets;
import com.example.demo.entities.Traspaso_tickets;

public interface TraspasoTicketsRepository extends ListCrudRepository<Traspaso_tickets, UUID>{
    Traspaso_tickets findByIdticket(Tickets ticket);
}
