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
public class Rol {
	@Id
	@Column(name = "id_lugares")
	UUID id_rol;
	
	@Column(name = "rol")
	String rol;
	
	@Column(name = "descripcion")
	String descripcion;
	
	@Column(name = "estado")
	Integer estado;
}
