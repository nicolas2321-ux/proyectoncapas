package com.example.demo.controllers.dto;

import java.util.UUID;

import com.example.demo.entities.Evento;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CrearLugarDTO {
    
    @NotEmpty
    private String descripcion;
    private UUID id_evento;
    
    private Double precio;

    
}
