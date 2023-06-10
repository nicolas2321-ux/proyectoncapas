package com.example.demo.services;

import java.util.UUID;

import com.example.demo.entities.Evento;

public interface EventoService {
	Evento get_evento(UUID code);
}
