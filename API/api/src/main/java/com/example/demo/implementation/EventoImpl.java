package com.example.demo.implementation;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Evento;
import com.example.demo.repository.EventoRepository;
import com.example.demo.services.EventoService;
@Service
public class EventoImpl implements EventoService {
	@Autowired
	private EventoRepository eventoRepository;

	@Override
	public Evento get_evento(UUID code) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void crear_evento(Evento evento) {
		eventoRepository.save(evento);
	}

}
