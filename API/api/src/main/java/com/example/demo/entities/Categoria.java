package com.example.demo.entities;

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
@Table(name = "categoria")
public class Categoria {
	@Id
	@Column(name = "id_categoria")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private UUID id_categoria;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@Column(name = "estado")
	private Integer estado;
	

}
