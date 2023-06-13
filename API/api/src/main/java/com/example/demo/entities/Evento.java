package com.example.demo.entities;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "lugar_evento", nullable = false)
	Lugares lugar_evento;
	
	@Column(name = "capacidad")
	Integer capacidad;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_categoria", nullable = false)
	Categoria id_categoria;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "usuario_creador", nullable = false)
	User usuario_creador;
}
