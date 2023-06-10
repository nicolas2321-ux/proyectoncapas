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
@Table(name = "Usuarios_asignados_eventos")
public class Usuarios_asignados_eventos {
	@Id
	@Column(name = "id")
	UUID id;
	
	@Column(name = "id_evento")
	Evento id_evento;
	
	@Column(name = "id_usuario")
	User id_usuario;
	
	@Column(name = "estado")
	Integer estado;
}
