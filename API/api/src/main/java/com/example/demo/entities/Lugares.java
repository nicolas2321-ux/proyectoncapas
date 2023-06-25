package com.example.demo.entities;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	@GeneratedValue(strategy = GenerationType.AUTO)
	UUID code;
	
	@Column(name = "descripcion")
	String descripcion;
	


	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_evento", nullable = false)
	Evento id_evento;
	
	@Column(name = "precio")
	Double precio;
	
	@Column(name = "estado")
	Integer estado;
	
	@Column(name = "fecha_creacion")
	Date fecha_creacion;

	public Lugares(String descripcion, Evento evento, Double precio, Integer estado, Date fecha_creacion) {
		super();
		this.descripcion = descripcion;
		
		this.id_evento = evento;
		this.precio = precio;
		this.estado = estado;
		this.fecha_creacion = fecha_creacion;
		
	}
}
