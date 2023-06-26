package com.example.demo.controllers;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controllers.dto.CreareventoDTO;
import com.example.demo.entities.Categoria;
import com.example.demo.entities.Evento;
import com.example.demo.entities.Lugares;
import com.example.demo.entities.User;
import com.example.demo.services.CategoriaService;
import com.example.demo.services.EventoService;
import com.example.demo.services.LugaresService;
import com.example.demo.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/evento")
public class EventoController {

	@Autowired
	private EventoService eventoservice;
	@Autowired
	private LugaresService lugaresService;
	@Autowired
	private CategoriaService categoriaService;
	@Autowired
	private UserService userService;
	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}
	@PostMapping("/crearEvento")
	public ResponseEntity<?> crearEvento(@Valid @RequestBody CreareventoDTO eventoDto, BindingResult bindingResult){
		
		Categoria get_categoria = categoriaService.get_categoria(eventoDto.getId_categoria());
		if(get_categoria == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No se encontro el lugar o la categoria");
		}else{
			User user2 = userService.findUserAuthenticated();
			Evento newEvento = new Evento(
				eventoDto.getDescripcion(),
				eventoDto.getTickets_disponibles(),
				0,
				eventoDto.getFecha_evento(),
				
				eventoDto.getCapacidad(),
				get_categoria,
				user2,
				eventoDto.getImagen()
			);
		eventoservice.crear_evento(newEvento);
		return ResponseEntity.ok("Evento creado exitosamente");
		}
		
	}
	
	@PutMapping("/editarEvento/{id}")
	public ResponseEntity<?> editarEvento(@PathVariable("id") UUID id, @RequestBody CreareventoDTO info){
		Evento findEvento = eventoservice.get_evento(id);
		if(findEvento == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No se encontro el evento");
		}else{
			Categoria categoria = categoriaService.get_categoria(info.getId_categoria());
			findEvento.setCapacidad(info.getCapacidad());
			findEvento.setDescripcion(info.getDescripcion());
			findEvento.setTickets_disponibles(info.getTickets_disponibles());
			findEvento.setId_categoria(categoria);
			eventoservice.save(findEvento);
			return ResponseEntity.ok("Evento editado exitosamente");
		}

	}
	@GetMapping("/getEventosAdmin")
	public ResponseEntity<?> getEventosAdmin(@RequestParam(defaultValue = "0") int page,@RequestParam(defaultValue = "10") int size){
		  Pageable pageable = PageRequest.of(page, size);
		  
		return ResponseEntity.ok(eventoservice.getEventos(pageable,0));
	}
	
	@GetMapping("/getEventoCancelados")
	public ResponseEntity<?> getEventosAdminCancelados(@RequestParam(defaultValue = "0") int page,@RequestParam(defaultValue = "10") int size){
		  Pageable pageable = PageRequest.of(page, size);
		  
		return ResponseEntity.ok(eventoservice.getEventos(pageable,1));
	}
	
	
	@GetMapping("/getSingleEvent")
	public ResponseEntity<?> getOneEventAdmin(@RequestParam(defaultValue = "0") UUID event){ 
		Evento findEvent = eventoservice.get_evento(event);
		return ResponseEntity.ok(findEvent);
	}
	@PutMapping("/actualizarEstado")
	public ResponseEntity<?> actualizarEstadoEvento(@RequestParam(required =false) UUID evento){
		
		Evento findEvento = eventoservice.get_evento(evento);
		if(findEvento == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No se encontro el evento");
		}else{
			findEvento.setEstado(1);
			eventoservice.save(findEvento);
			return ResponseEntity.ok("Evento editado exitosamente");
		}
		
	}
	
	
	
	}
	


