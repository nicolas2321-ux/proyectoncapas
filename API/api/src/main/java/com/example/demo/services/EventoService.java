package com.example.demo.services;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Evento;

@Service
public interface EventoService {
	Evento get_evento(UUID code);
}
