package com.example.demo.entities;

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
@Table(name = "User_rol")
public class User_rol {
	@Id
	@Column(name = "id")
	UUID id;
	
	@Column(name = "id_user")
	User id_user;
	
	@Column(name = "id_rol")
	Rol id_rol;
}
