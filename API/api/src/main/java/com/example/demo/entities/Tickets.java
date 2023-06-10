package com.example.demo.entities;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "rol")
public class Tickets {
	
	@Id
	@Column(name = "id_ticket")
	UUID id_ticket;
	
	@Column(name = "estado")
	Integer estado;
	
	@Column(name = "fecha_venta")
	Date fecha_venta;
	
	@Column(name = "id_cliente")
	User id_cliente;
	
	@Column(name = "id_localidad")
	Lugares id_localidad;
}
