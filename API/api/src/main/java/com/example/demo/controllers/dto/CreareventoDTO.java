package com.example.demo.controllers.dto;

import java.util.Date;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CreareventoDTO{

    @NotEmpty
    private String descripcion;

    @NotEmpty
    private Integer tickets_disponibles;

    @NotEmpty
    private Date fecha_evento;

    @NotEmpty
    private Integer capacidad;

    

}