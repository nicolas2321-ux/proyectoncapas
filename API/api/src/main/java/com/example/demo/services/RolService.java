package com.example.demo.services;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Rol;

@Service
public interface RolService {
	Rol getRol(UUID code);
}
