package com.example.demo.controllers.dto;

import java.util.List;
import java.util.UUID;

import com.example.demo.entities.Rol;
import com.example.demo.entities.User;
import com.example.demo.entities.User_rol;

import lombok.Data;
@Data
public class RolByUSerDTO {
    List<UUID> user_rol_ids;
    User user;
    List<Rol> roles;
}
