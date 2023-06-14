package com.example.demo.controllers.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
@Data
public class NewUser_Rol {
    @NotNull
    private String identifier;
    @NotNull
    private String rol;
}
