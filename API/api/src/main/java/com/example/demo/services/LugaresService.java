package com.example.demo.services;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.controllers.dto.LocalidadesDTO;
import com.example.demo.entities.Evento;
import com.example.demo.entities.Lugares;


public interface LugaresService {
	Lugares get_lugares(String code);
	Lugares get_one_lugar(UUID id);
	void save_lugar(Lugares lugar);
	LocalidadesDTO get_localidad(Evento evento, Integer estado);
	Boolean verificar_tickets(Evento evento, Integer tickets);
}
