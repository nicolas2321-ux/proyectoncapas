package com.example.demo.controllers.dto;

import java.util.List;
import java.util.UUID;

import com.example.demo.entities.Evento;
import com.example.demo.entities.Lugares;

import lombok.Data;
@Data
public class LocalidadesDTO {
    List<UUID> code;
    List<String> descripcion;
    List<Double> precio;
    List<Integer> tickets;
    Evento idEvento;


}
