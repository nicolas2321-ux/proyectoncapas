package com.example.demo.controllers.dto;

import java.util.Date;
import java.util.UUID;

import lombok.Data;

@Data
public class TicketDto {
	
	Date fecha;
	UUID localidad;
	Integer cantidadTickets;
	UUID evento;
}
