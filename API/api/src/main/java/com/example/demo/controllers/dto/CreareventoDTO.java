package com.example.demo.controllers.dto;

import java.util.Date;
import java.util.UUID;

import jakarta.validation.constraints.
NotEmpty;
import lombok.Data;

@Data
public class CreareventoDTO{

    @NotEmpty
    private String descripcion;


    private Integer tickets_disponibles;

  
    private Date fecha_evento;

    private Integer capacidad;

    private UUID id_categoria;
    
    private String imagen;
}