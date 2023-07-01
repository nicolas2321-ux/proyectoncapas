package com.example.demo.services;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.controllers.dto.RolByUSerDTO;
import com.example.demo.entities.Rol;
import com.example.demo.entities.User;
import com.example.demo.entities.User_rol;


public interface user_rolService {
	RolByUSerDTO getRolbyUser(User user);
	void saveRol(User user, Rol rol);
	void cambiarEstado(UUID id);
	User_rol verificarSiExiste(User user, Rol rol);
}
