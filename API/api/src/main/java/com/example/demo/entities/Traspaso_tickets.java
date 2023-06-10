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
@Table(name = "traspaso_tickets")
public class Traspaso_tickets {
	
	@Id
	@Column(name = "id")
	UUID id;
	
	@Column(name = "id_ticket")
	Tickets id_ticket;
	
	@Column(name = "id_usuario_original")
	User id_usuario_original;
	
	@Column(name = "fecha_traspaso")
	Date fecha_traspaso;
	
	@Column(name = "fecha_recibido")
	Date fecha_recibido;
	
	@Column(name = "estado")
	Integer estado;
	
	@Column(name = "codigo_traspaso")
	UUID codigo_traspaso;
	
	@Column(name = "id_nuevo_usuario")
	User id_nuevo_usuario;

}
