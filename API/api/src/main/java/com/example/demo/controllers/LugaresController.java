package com.example.demo.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controllers.dto.CrearLugarDTO;
import com.example.demo.entities.Evento;
import com.example.demo.entities.Lugares;
import com.example.demo.services.EventoService;
import com.example.demo.services.LugaresService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/lugares")
public class LugaresController {
	@Autowired
	private LugaresService lugaresService;
	@Autowired
	private EventoService eventoService;
	
	@GetMapping(name = "/")
	public ResponseEntity<?> findall(){
		return null;
	}

	@PostMapping("/saveLugar")
	public ResponseEntity<?> crearEvento(@Valid @RequestBody CrearLugarDTO lugarDTO, BindingResult bindingResult){
		Evento findEvento = eventoService.get_evento(lugarDTO.getId_evento());
		if(findEvento == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No se encontro el evento");
		}else{
			Date ingreso = 	new Date();
			Lugares lugar = new Lugares(
				lugarDTO.getDescripcion(),
				findEvento,
				lugarDTO.getPrecio(),
				1,
				ingreso
			);
			lugaresService.save_lugar(lugar);
			return ResponseEntity.ok("Localidad creada correctamente");
		}

	}

}
