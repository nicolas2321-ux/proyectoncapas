package com.example.demo.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Evento;
import com.example.demo.entities.Lugares;

public interface EventoRepository extends JpaRepository<Evento, UUID>{
    
}
