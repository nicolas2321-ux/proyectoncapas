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
@Table(name = "evento")
public class Evento {
	
	@Id
	@Column(name = "id_evento")
	UUID id_evento;
	
	@Column(name = "descripcion")
	String descripcion;

	@Column(name = "tickets_disponibles")
	Integer tickets_disponibles;
	
	@Column(name = "estado")
	Integer estado;
	
	@Column(name = "fecha_creacion")
	Date fecha_creacion;
	
	@Column(name = "fecha_evento")
	Date fecha_evento;

	@Column(name = "lugar_evento")
	Lugares lugar_evento;
	
	@Column(name = "capacidad")
	Integer capacidad;
	
	@Column(name = "id_categoria")
	Categoria id_categoria;
	
	@Column(name = "usuario_creador")
	User usuario_creador;
}
