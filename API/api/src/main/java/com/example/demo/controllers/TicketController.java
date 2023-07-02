package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controllers.dto.EventoDTO;
import com.example.demo.controllers.dto.TicketDto;
import com.example.demo.entities.Evento;
import com.example.demo.entities.Lugares;
import com.example.demo.entities.Tickets;
import com.example.demo.entities.User;
import com.example.demo.services.EventoService;
import com.example.demo.services.LugaresService;
import com.example.demo.services.TicketsService;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/ticket")
public class TicketController {
	@Autowired
	private TicketsService ticketService;
	@Autowired
	private UserService userService;
	@Autowired
	private LugaresService lugaresService;
	@Autowired
	private EventoService eventoservice;
	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}
	
	@PostMapping("/crearTicket")
	public ResponseEntity<?> createTicket(@RequestBody TicketDto ticket ){
		 User user2 = userService.findUserAuthenticated();
		 Lugares findLugares = lugaresService.get_one_lugar(ticket.getLocalidad());
		Evento findEvento = eventoservice.get_evento(ticket.getEvento());
		 if(user2 == null || findLugares == null || findEvento == null) {
			 return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se pudo encontrar usuario o localidad");
		 }else {
			 ticketService.crearTicket(user2, findLugares, findEvento, ticket.getFecha(), ticket.getCantidadTickets());
			 return ResponseEntity.status(HttpStatus.OK).body("Tickets comprados");
		 }
		
	}
	
	@GetMapping("/getMyEvents")
	public ResponseEntity<?> getMyEvents(){
		User user2 = userService.findUserAuthenticated();
		List<Tickets> tickets = ticketService.getMyTickets(user2);
		 return ResponseEntity.status(HttpStatus.OK).body(tickets);
	}
	@GetMapping("/ticket")
	public ResponseEntity<?> events (@RequestBody EventoDTO evento) {
		Tickets find   = ticketService.traerTicket(evento.getEvento());
		 return ResponseEntity.status(HttpStatus.OK).body(find);
	}

	@PostMapping("/changeEstado")
	public ResponseEntity<?> changeEvents (@RequestBody EventoDTO evento) {
		Tickets find   = ticketService.traerTicket(evento.getEvento());
		find.setEstado(0);
		ticketService.cambiarEstado(find);
		 return ResponseEntity.status(HttpStatus.OK).body("Ticket verificado");
	}
}
