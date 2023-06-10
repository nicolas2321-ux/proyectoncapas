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
@Table(name = "lugares")
public class Lugares {

	@Id
	@Column(name = "id_lugares")
	UUID id_lugares;
	
	@Column(name = "descripcion")
	String descripcion;
	
	@Column(name = "direccion")
	String direccion;
	@Column(name = "id_evento")
	Evento id_evento;
	@Column(name = "precio")
	Double precio;
	
	@Column(name = "estado")
	Integer estado;
	
	@Column(name = "fecha_creacion")
	Date fecha_creacion;
}
