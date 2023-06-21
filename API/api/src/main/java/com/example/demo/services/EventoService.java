package com.example.demo.services;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Evento;


public interface EventoService {
	Evento get_evento(UUID code);
	void crear_evento(Evento evento);
	void save(Evento evento);
}
