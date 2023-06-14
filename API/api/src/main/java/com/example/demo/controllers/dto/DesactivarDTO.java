package com.example.demo.controllers.dto;

import java.util.UUID;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class DesactivarDTO {
   
    private UUID code;
}
