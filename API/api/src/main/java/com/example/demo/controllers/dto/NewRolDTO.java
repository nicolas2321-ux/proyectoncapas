package com.example.demo.controllers.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class NewRolDTO {
    @NotEmpty
    private String rol;

    @NotEmpty
    private String descripcion;


}
