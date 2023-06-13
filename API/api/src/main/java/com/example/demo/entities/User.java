package com.example.demo.entities;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
	@GeneratedValue(strategy = GenerationType.AUTO)
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
	
	@Column(name = "password")
	private String password;

	public User(String username, String email, String password, String nombre, Integer estado, Date fecha_ingreso) {
		super();
		this.usuario = username;
		this.email = email;
		this.password = password;
		this.estado = estado;
		this.nombre = nombre;
		this.fecha_ingreso = fecha_ingreso;
	}
	
	
	
	
}
