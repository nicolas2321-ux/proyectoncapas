package com.example.demo.implementation;

import java.util.Date;
import java.util.List;
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
		Tickets ticket = ticketrepository.findByIdTicket(code);
		return ticket;
	}

	@Override
	public void crearTicket(User user, Lugares lugar, Evento evento, Date fecha,Integer cantidadTickets) {
		
		for (int i = 1; i <= cantidadTickets; i++) {
			Tickets ticket = new Tickets();
			ticket.setEstado(1);
			ticket.setFecha_venta(fecha);
			ticket.setIdCliente(user);
			ticket.setId_evento(evento);
			ticket.setId_localidad(lugar);
			ticketrepository.save(ticket);
		}
	}

	@Override
	public List<Tickets> getMyTickets(User user) {
		List<Tickets> gettickets = ticketrepository.findByIdCliente(user);
		return gettickets;
	}

	@Override
	public void cambiarEstado(Tickets ticket) {
		ticketrepository.save(ticket);
	}

}
