package com.example.demo.implementation;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Evento;
import com.example.demo.entities.Lugares;
import com.example.demo.entities.Tickets;
import com.example.demo.entities.User;
import com.example.demo.repository.EventoRepository;
import com.example.demo.repository.TicketRepository;
import com.example.demo.services.TicketsService;
@Service
public class TicketImpl implements TicketsService{

	@Autowired
	private TicketRepository ticketrepository;
	@Override
	public Tickets traerTicket(UUID code) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void crearTicket(User user, Lugares lugar, Evento evento, Date fecha,Integer cantidadTickets) {
		
		for (int i = 1; i <= cantidadTickets; i++) {
			Tickets ticket = new Tickets();
			ticket.setEstado(1);
			ticket.setFecha_venta(fecha);
			ticket.setId_cliente(user);
			ticket.setId_evento(evento);
			ticket.setId_localidad(lugar);
			ticketrepository.save(ticket);
		}
	}

}
