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
@Table(name = "User")
public class User {

	@Id
	@Column(name = "id")
	UUID id;
	
	@Column(name = "usuario")
	String usuario;
	
	@Column(name = "estado")
	Integer estado;
	
	@Column(name = "nombre")
	String nombre;
	
	@Column(name = "email")
	String email;
	
	@Column(name = "fecha_ingreso")
	Date fecha_ingreso;
	
	
	
	
	
}
