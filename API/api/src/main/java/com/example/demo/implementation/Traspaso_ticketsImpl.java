package com.example.demo.implementation;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Tickets;
import com.example.demo.entities.Traspaso_tickets;
import com.example.demo.repository.TraspasoTicketsRepository;
import com.example.demo.services.Traspaso_ticketsService;
@Service
public class Traspaso_ticketsImpl implements Traspaso_ticketsService {

	@Autowired
	private TraspasoTicketsRepository traspasoTicketsRepository;
	@Override
	public List<Traspaso_tickets> get_lista_traspaso(Tickets ticket) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Traspaso_tickets get_traspaso(Tickets code) {
		Traspaso_tickets traspaso = traspasoTicketsRepository.findByIdticket(code);
		return traspaso;
	}
	@Override
	public void save(Traspaso_tickets traspaso) {
		traspasoTicketsRepository.save(traspaso);
	}

}
