package com.example.demo.controllers.dto;

import java.util.UUID;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
@Data
public class NewUser_Rol {

    private UUID identifier;
    @NotNull
    private String rol;
}
