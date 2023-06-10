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
@Table(name = "categoria")
public class Categoria {
	@Id
	@Column(name = "id_categoria")
	UUID id_categoria;
	
	@Column(name = "descripcion")
	String descripcion;
	
	@Column(name = "estado")
	Integer estado;
}
